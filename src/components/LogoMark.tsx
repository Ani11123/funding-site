"use client";

/**
 * LogoMark — conditional logo component.
 *
 * Shows the real logo image if it exists in public/assets/logo/:
 *   Light mode → /assets/logo/logo.png
 *   Dark mode  → /assets/logo/logo-white.png
 *
 * Falls back to styled brand text immediately on first render.
 * The image is probed silently in JavaScript memory (never mounted in the DOM),
 * so no broken-image placeholder is ever shown even when the file is absent.
 *
 * No code changes required when the real logo is later supplied —
 * drop logo.png / logo-white.png into public/assets/logo/ and it auto-appears.
 */

import { useEffect, useState } from "react";

type LogoMode = "light" | "dark";

interface LogoMarkProps {
  mode?: LogoMode;
  className?: string;
}

export default function LogoMark({ mode = "light", className = "" }: LogoMarkProps) {
  const [logoReady, setLogoReady] = useState(false);

  const src = mode === "dark"
    ? "/assets/logo/logo-white.png"
    : "/assets/logo/logo.png";

  useEffect(() => {
    // Probe via an in-memory Image object — never mounted in the DOM,
    // so the browser never renders a broken-image placeholder in the UI.
    const img = document.createElement("img");
    img.onload = () => setLogoReady(true);
    img.onerror = () => setLogoReady(false);
    img.src = src;
  }, [src]);

  if (logoReady) {
    return (
      <div className={`relative ${className}`} style={{ width: 164, height: 40 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Nexora Funding Limited"
          className="h-10 w-auto object-contain object-left"
          style={{ maxWidth: 164 }}
        />
      </div>
    );
  }

  // Text fallback — rendered immediately on first paint and whenever the logo file is absent
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
