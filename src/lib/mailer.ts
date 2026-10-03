import nodemailer from "nodemailer";

export interface EnquiryEmailPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface MailerResult {
  success: boolean;
  messageId?: string;
  provider: "resend" | "smtp" | "ethereal" | "simulation";
  previewUrl?: string | false;
  error?: string;
}

// Escape HTML characters to prevent XSS / formatting corruption in email clients
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function generateEmailHtml(data: EnquiryEmailPayload, dateStr: string): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = data.phone ? escapeHtml(data.phone) : "Not provided";
  const safeCompany = data.company ? escapeHtml(data.company) : "Not specified";
  const safeProjectType = escapeHtml(data.projectType);
  const safeBudget = escapeHtml(data.budget);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br/>");
  const phoneDigits = data.phone ? data.phone.replace(/[^0-9]/g, "") : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Enquiry - MD ARSAD</title>
</head>
<body style="margin: 0; padding: 0; background-color: #00081C; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #E2E8F0;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #00081C; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 620px; background-color: #07152F; border: 1px solid #1E3A5F; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 35px rgba(0,0,0,0.5);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #001238 0%, #002259 100%); padding: 32px 28px; border-bottom: 1px solid #1E3A5F;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <span style="display: inline-block; font-family: monospace; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #38BDF8; background-color: rgba(56, 189, 248, 0.12); padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(56, 189, 248, 0.3); margin-bottom: 12px;">
                      ● INCOMING CLIENT BRIEF
                    </span>
                    <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.02em; text-transform: uppercase;">
                      New Project Enquiry
                    </h1>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #94A3B8; font-family: monospace;">
                      Source: Portfolio Contact Terminal (${dateStr})
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Key Project Spec Badges -->
          <tr>
            <td style="padding: 24px 28px 12px 28px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="50%" style="padding-right: 8px;">
                    <div style="background-color: #0D1D3A; border: 1px solid #1E3A5F; border-radius: 10px; padding: 12px 14px;">
                      <span style="display: block; font-family: monospace; font-size: 10px; text-transform: uppercase; color: #94A3B8; margin-bottom: 4px;">
                        PROJECT TYPE
                      </span>
                      <strong style="display: block; font-size: 14px; color: #38BDF8;">
                        ${safeProjectType}
                      </strong>
                    </div>
                  </td>
                  <td width="50%" style="padding-left: 8px;">
                    <div style="background-color: #0D1D3A; border: 1px solid #1E3A5F; border-radius: 10px; padding: 12px 14px;">
                      <span style="display: block; font-family: monospace; font-size: 10px; text-transform: uppercase; color: #94A3B8; margin-bottom: 4px;">
                        BUDGET RANGE
                      </span>
                      <strong style="display: block; font-size: 14px; color: #22C55E;">
                        ${safeBudget}
                      </strong>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Client Details Grid -->
          <tr>
            <td style="padding: 12px 28px;">
              <div style="background-color: #0D1D3A; border: 1px solid #1E3A5F; border-radius: 12px; padding: 16px 18px;">
                <span style="display: block; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #38BDF8; font-weight: 700; margin-bottom: 12px; border-bottom: 1px solid #1E3A5F; padding-bottom: 8px;">
                  Client Information
                </span>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 13px;">
                  <tr>
                    <td width="35%" style="padding: 6px 0; color: #94A3B8; font-family: monospace; font-size: 12px;">Full Name</td>
                    <td style="padding: 6px 0; color: #FFFFFF; font-weight: 600;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94A3B8; font-family: monospace; font-size: 12px;">Email Address</td>
                    <td style="padding: 6px 0;">
                      <a href="mailto:${safeEmail}" style="color: #38BDF8; text-decoration: none; font-weight: 600;">
                        ${safeEmail}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94A3B8; font-family: monospace; font-size: 12px;">Phone / WhatsApp</td>
                    <td style="padding: 6px 0; color: #FFFFFF;">
                      ${data.phone ? `<a href="https://wa.me/${phoneDigits}" style="color: #25D366; text-decoration: none; font-weight: 600;">${safePhone} (WhatsApp)</a>` : safePhone}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #94A3B8; font-family: monospace; font-size: 12px;">Company / Org</td>
                    <td style="padding: 6px 0; color: #FFFFFF;">${safeCompany}</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Project Brief & Objectives -->
          <tr>
            <td style="padding: 12px 28px 24px 28px;">
              <div style="background-color: #030D1E; border: 1px solid #1E3A5F; border-left: 3px solid #38BDF8; border-radius: 12px; padding: 18px 20px;">
                <span style="display: block; font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #38BDF8; font-weight: 700; margin-bottom: 10px;">
                  Project Details &amp; Scope
                </span>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #CBD5E1; white-space: pre-wrap; word-break: break-word;">
                  ${safeMessage}
                </p>
              </div>
            </td>
          </tr>

          <!-- Quick Action CTAs -->
          <tr>
            <td style="padding: 0 28px 28px 28px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 8px;">
                    <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(`Project Inquiry: ${data.projectType}`)}" style="display: block; width: 100%; box-sizing: border-box; background-color: #0067FE; color: #FFFFFF; text-decoration: none; font-family: monospace; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 14px 20px; border-radius: 10px; text-align: center;">
                      Reply Directly to ${safeName} &rarr;
                    </a>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td align="center">
                    <a href="https://wa.me/${phoneDigits}" style="display: block; width: 100%; box-sizing: border-box; background-color: #07152F; border: 1px solid #25D366; color: #25D366; text-decoration: none; font-family: monospace; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 12px 20px; border-radius: 10px; text-align: center; margin-top: 6px;">
                      Open WhatsApp Conversation &rarr;
                    </a>
                  </td>
                </tr>
                ` : ""}
              </table>
            </td>
          </tr>

          <!-- Footer Metadata -->
          <tr>
            <td style="background-color: #00081C; padding: 20px 28px; border-top: 1px solid #1E3A5F; font-family: monospace; font-size: 11px; color: #64748B;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <span>Delivered to: <strong>mdarsadkgn5311@gmail.com</strong></span><br/>
                    ${data.ipAddress ? `<span>Client IP: ${escapeHtml(data.ipAddress)}</span> &bull; ` : ""}
                    <span>Status: Verified Valid Submission</span>
                  </td>
                  <td align="right" style="vertical-align: top;">
                    <span style="color: #38BDF8; font-weight: 700;">MD ARSAD PORTFOLIO</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

export function generateEmailText(data: EnquiryEmailPayload, dateStr: string): string {
  return `
========================================
NEW PROJECT ENQUIRY — MD ARSAD PORTFOLIO
========================================
Date: ${dateStr}

CLIENT DETAILS:
- Name: ${data.name}
- Email: ${data.email}
${data.phone ? `- WhatsApp / Phone: ${data.phone}` : ""}
${data.company ? `- Company / Business: ${data.company}` : ""}

PROJECT SPECIFICATIONS:
- Project Type: ${data.projectType}
- Estimated Budget: ${data.budget}

PROJECT SCOPE & OBJECTIVES:
----------------------------------------
${data.message}
----------------------------------------

QUICK ACTIONS:
- Reply to Client: mailto:${data.email}
${data.phone ? `- WhatsApp: https://wa.me/${data.phone.replace(/[^0-9]/g, "")}` : ""}

Direct Recipient: mdarsadkgn5311@gmail.com
`.trim();
}

/**
 * Sends enquiry email notification to mdarsadkgn5311@gmail.com.
 * Supports:
 * 1. Resend API (via RESEND_API_KEY)
 * 2. SMTP (via SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS / GMAIL_APP_PASSWORD)
 * 3. Fallback dev mode (Ethereal test inbox or console preview)
 */
export async function sendEnquiryEmail(payload: EnquiryEmailPayload): Promise<MailerResult> {
  const recipient = process.env.CONTACT_RECEIVER_EMAIL || "mdarsadkgn5311@gmail.com";
  const now = new Date();
  const dateStr = `${now.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })} at ${now.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })} IST`;

  const subject = `[Project Enquiry] ${payload.projectType} — ${payload.name}`;
  const htmlContent = generateEmailHtml(payload, dateStr);
  const textContent = generateEmailText(payload, dateStr);

  // 1. Try Resend if RESEND_API_KEY is configured
  if (process.env.RESEND_API_KEY) {
    try {
      const fromAddress = process.env.EMAIL_FROM || "MD Arsad Portfolio <onboarding@resend.dev>";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [recipient],
          reply_to: payload.email,
          subject,
          html: htmlContent,
          text: textContent,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || `Resend API returned status ${res.status}`);
      }

      const resendData = await res.json();
      return {
        success: true,
        messageId: resendData.id,
        provider: "resend",
      };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[Mailer] Resend API failed:", msg);
      // Fall through to SMTP if configured, otherwise propagate error
      if (!process.env.SMTP_USER && !process.env.SMTP_PASS && !process.env.GMAIL_APP_PASSWORD) {
        return { success: false, provider: "resend", error: msg };
      }
    }
  }

  // 2. Try SMTP if credentials are provided
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

  if (smtpUser && smtpPass) {
    try {
      const host = process.env.SMTP_HOST || "smtp.gmail.com";
      const port = Number(process.env.SMTP_PORT || (host === "smtp.gmail.com" ? 465 : 587));
      const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;

      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const fromAddress = process.env.SMTP_FROM || `"${payload.name} via Portfolio" <${smtpUser}>`;

      const info = await transporter.sendMail({
        from: fromAddress,
        to: recipient,
        replyTo: payload.email,
        subject,
        text: textContent,
        html: htmlContent,
      });

      return {
        success: true,
        messageId: info.messageId,
        provider: "smtp",
      };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[Mailer] SMTP dispatch error:", msg);
      return {
        success: false,
        provider: "smtp",
        error: msg,
      };
    }
  }

  // 3. Fallback for Local Development / Testing when credentials are not yet populated
  if (process.env.NODE_ENV !== "production") {
    try {
      // Create Ethereal test inbox so developers can see real HTML email delivery preview
      const testAccount = await nodemailer.createTestAccount();
      const testTransporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      const testInfo = await testTransporter.sendMail({
        from: `"${payload.name}" <${testAccount.user}>`,
        to: recipient,
        replyTo: payload.email,
        subject,
        text: textContent,
        html: htmlContent,
      });

      const previewUrl = nodemailer.getTestMessageUrl(testInfo);
      console.log("--------------------------------------------------");
      console.log("[DEV MAILER] Test email generated successfully!");
      console.log(`[DEV MAILER] Target recipient: ${recipient}`);
      console.log(`[DEV MAILER] Ethereal Preview URL: ${previewUrl}`);
      console.log("--------------------------------------------------");

      return {
        success: true,
        messageId: testInfo.messageId,
        provider: "ethereal",
        previewUrl: previewUrl || false,
      };
    } catch (etherealErr) {
      console.warn("[Mailer] Ethereal fallback failed, using simulated delivery:", etherealErr);
      return {
        success: true,
        messageId: `sim-${Date.now()}`,
        provider: "simulation",
      };
    }
  }

  // If in production and no credentials configured, report clear error
  return {
    success: false,
    provider: "smtp",
    error: "Email service credentials not configured. Please set SMTP_USER and SMTP_PASS (or RESEND_API_KEY) in environment variables.",
  };
}
