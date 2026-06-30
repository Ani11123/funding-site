"use client";

import { useState } from "react";

type LogoMode = "light" | "dark";

interface LogoMarkProps {
  mode?: LogoMode;
  className?: string;
}

export default function LogoMark({ mode = "light", className = "" }: LogoMarkProps) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/assets/logo/nexora-logo.svg"
        alt="Nexora Funding Limited"
        className={`w-auto ${className}`}
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
