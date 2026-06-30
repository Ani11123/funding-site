"use client";

import { useState } from "react";

type LogoMode = "light" | "dark";

interface LogoMarkProps {
  mode?: LogoMode;
  className?: string;
}

export default function LogoMark({ mode = "light", className = "" }: LogoMarkProps) {
  const [failed, setFailed] = useState(false);

  // Header uses the cropped variant (excludes the tiny unreadable tagline at the
  // bottom of the full SVG). Footer uses the full logo — at small dark-mode sizes
  // the tagline area is imperceptible and the full brand sheet is intact.
  const src =
    mode === "dark"
      ? "/assets/logo/nexora-logo.svg"
      : "/assets/logo/nexora-header-logo.svg";

  if (!failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt="Nexora Funding Limited"
        className={className}
        style={mode === "dark" ? { filter: "brightness(0) invert(1)" } : undefined}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span
        className={`font-extrabold text-[18px] tracking-tight ${
          mode === "dark" ? "text-white" : "text-[#0B2E59]"
        }`}
        style={{ fontFamily: "'Montserrat', system-ui, sans-serif" }}
      >
        NEXORA
      </span>
      <span className="text-[#C76A1B] text-[10px] tracking-[0.18em] uppercase font-semibold mt-0.5">
        FUNDING LIMITED
      </span>
    </div>
  );
}
