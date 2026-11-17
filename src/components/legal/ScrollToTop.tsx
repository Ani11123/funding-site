"use client";

import { useEffect } from "react";

/**
 * Opens legal pages at the very top. Browsers can otherwise restore a previous
 * scroll position (e.g. clicking the footer link for the page you are already
 * on). Skipped when the URL targets a section (#complaints) or on Back/Forward,
 * where restoring the reader's position is the expected behaviour.
 */
export default function ScrollToTop() {
  useEffect(() => {
    if (window.location.hash) return;
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === "back_forward") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}
