import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail, EnquiryEmailPayload } from "@/lib/mailer";

export const runtime = "nodejs";

// Simple in-memory rate limiter for serverless instance
// Stores IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  // Keep only timestamps within window
  const recent = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);

  // Periodic cleanup of stale IPs if map grows large
  if (rateLimitMap.size > 500) {
    for (const [key, times] of rateLimitMap.entries()) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Extract client IP and metadata
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = (forwardedFor ? forwardedFor.split(",")[0].trim() : realIp) || "Unknown IP";
    const userAgent = req.headers.get("user-agent") || "Unknown UA";

    // 2. Rate limiting check
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many enquiries sent from your connection. Please wait a few minutes before trying again or reach out directly via email.",
        },
        { status: 429 }
      );
    }

    // 3. Parse JSON body
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      message,
      _hp, // Honeypot field (bots fill this)
      _ts, // Form initialization timestamp (fast bot detection)
    } = body;

    // 4. Anti-spam checks:
    // A) Honeypot: if bot filled this hidden field, return silent success without emailing
    if (_hp && typeof _hp === "string" && _hp.trim().length > 0) {
      console.warn(`[Anti-Spam] Bot trapped by honeypot field from IP: ${clientIp}`);
      return NextResponse.json({
        success: true,
        message: "Enquiry received successfully.",
      });
    }

    // B) Time check: if submitted in under 1.2 seconds, it is automated submission
    if (_ts && typeof _ts === "number") {
      const elapsed = Date.now() - _ts;
      if (elapsed > 0 && elapsed < 1200) {
        console.warn(`[Anti-Spam] Submission was inhumanly fast (${elapsed}ms) from IP: ${clientIp}`);
        return NextResponse.json({
          success: true,
          message: "Enquiry received successfully.",
        });
      }
    }

    // 5. Server-side validation
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
    const trimmedCompany = typeof company === "string" ? company.trim() : "";
    const trimmedProjectType = typeof projectType === "string" ? projectType.trim() : "Business Website";
    const trimmedBudget = typeof budget === "string" ? budget.trim() : "Under ₹25,000";

    const errors: Record<string, string> = {};

    if (!trimmedName || trimmedName.length < 2) {
      errors.name = "Please provide your name (at least 2 characters).";
    } else if (trimmedName.length > 100) {
      errors.name = "Name is too long (maximum 100 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      errors.email = "Please provide your email address.";
    } else if (!emailRegex.test(trimmedEmail) || trimmedEmail.length > 120) {
      errors.email = "Please enter a valid email address.";
    }

    if (!trimmedMessage) {
      errors.message = "Please share details regarding your project.";
    } else if (trimmedMessage.length < 15) {
      errors.message = "Please provide a few more details (minimum 15 characters).";
    } else if (trimmedMessage.length > 5000) {
      errors.message = "Project message is too long (maximum 5000 characters).";
    }

    if (trimmedPhone && trimmedPhone.length > 35) {
      errors.phone = "Phone number is too long.";
    }

    if (trimmedCompany && trimmedCompany.length > 100) {
      errors.company = "Company name is too long.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed on submitted fields.",
          details: errors,
        },
        { status: 400 }
      );
    }

    // 6. Build payload and dispatch email notification
    const payload: EnquiryEmailPayload = {
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone || undefined,
      company: trimmedCompany || undefined,
      projectType: trimmedProjectType,
      budget: trimmedBudget,
      message: trimmedMessage,
      ipAddress: clientIp,
      userAgent,
    };

    const mailResult = await sendEnquiryEmail(payload);

    if (!mailResult.success) {
      console.error("[Contact API] Mail dispatch failed:", mailResult.error);
      return NextResponse.json(
        {
          success: false,
          error: mailResult.error || "Unable to send enquiry email at this moment. Please reach out directly to mdarsadkgn5311@gmail.com.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry notification has been sent successfully to mdarsadkgn5311@gmail.com.",
        provider: mailResult.provider,
        previewUrl: mailResult.previewUrl,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Internal server error";
    console.error("[Contact API] Unexpected error:", errorMsg);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your enquiry. Please reach out directly.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      status: "online",
      endpoint: "/api/contact",
      recipient: "mdarsadkgn5311@gmail.com",
      method: "POST only",
    },
    { status: 200 }
  );
}
