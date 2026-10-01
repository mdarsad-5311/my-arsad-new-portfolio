import React from "react";
import Image from "next/image";

interface LogoProps {
  /**
   * Pixel height of the logo (default 56px in navbar)
   */
  height?: number;
  /**
   * Backward-compatibility for size prop
   */
  size?: number;
  className?: string;
  priority?: boolean;
}

export default function Logo({
  height,
  size,
  className = "",
  priority = true,
}: LogoProps) {
  // Use height if provided, fallback to size, default to 56
  const actualHeight = height || size || 56;
  // Exact aspect ratio of logo1.png is 1536 / 1024 = 1.5
  const actualWidth = Math.round(actualHeight * 1.5);

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 select-none ${className}`}
      style={{ height: actualHeight, width: actualWidth }}
    >
      {/* Ambient matching radial glow expanding naturally around the logo */}
      <div
        className="absolute -inset-3 pointer-events-none rounded-full blur-lg opacity-90"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(1, 28, 87, 0.95) 0%, rgba(0, 14, 48, 0.6) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <Image
        src="/logo1.png"
        alt="MD ARSAD — Full-Stack Engineer"
        width={actualWidth * 2}
        height={actualHeight * 2}
        className="w-full h-full object-contain relative z-10"
        style={{
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 45%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 45%, transparent 85%)",
        }}
        priority={priority}
      />
    </div>
  );
}
