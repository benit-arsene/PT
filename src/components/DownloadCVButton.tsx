"use client";

import { useState } from "react";

interface DownloadCVButtonProps {
  compact?: boolean;
  sidebar?: boolean;
  navbar?: boolean;
}

export default function DownloadCVButton({ compact = false, sidebar = false, navbar = false }: DownloadCVButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleDownload = async () => {
    if (loading) return;
    setLoading(true);
    setError(false);

    try {
      // Lazy-load @react-pdf/renderer and the CV document on click (client-side only)
      const [{ pdf }, { default: CVDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/CVDocument"),
      ]);

      const blob = await pdf(<CVDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Benit_Arsene_NSHUTIYIMANA_CV.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to generate PDF:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const btnClasses = compact
    ? "px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-primary text-white font-semibold text-xs sm:text-sm hover:bg-primary-dark hover:shadow-[0_0_16px_-4px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center gap-1.5 disabled:opacity-60 disabled:cursor-not-allowed"
    : navbar
    ? "px-5 py-2.5 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary-dark hover:shadow-[0_0_16px_-4px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
    : sidebar
    ? "w-full px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark hover:shadow-[0_0_16px_-4px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
    : "px-8 py-3.5 rounded-xl border border-primary/40 text-primary font-semibold text-base hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed";

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={btnClasses}
    >
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          {compact ? "CV..." : "Downloading..."}
        </span>
      ) : error ? (
        <span className="inline-flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          Retry
        </span>
      ) : (
        <>
          <svg
            className={compact ? "w-3.5 h-3.5" : "w-4 h-4"}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {compact ? "CV" : "Download CV"}
        </>
      )}
    </button>
  );
}
