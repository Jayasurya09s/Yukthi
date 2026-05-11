"use client";

import { useState } from "react";
import { Share2, Check, Download } from "lucide-react";

interface ShareButtonProps {
  auditId?: string;
}

export default function ShareButton({ auditId }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const id = auditId || (typeof window !== 'undefined' 
    ? (new URLSearchParams(window.location.search).get('id') || 
       window.location.pathname.split('/').pop())
    : null);

  const shareUrl = id
    ? `${window.location.origin}/api/share?id=${id}`
    : '';

  async function handleCopy() {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleDownloadPDF() {
    if (id) {
      window.open(`/api/audit-pdf?id=${id}`, '_blank');
    }
  }

  return (
    <div className="flex gap-3">
      <button
        onClick={handleCopy}
        className={`group relative flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
          copied
            ? "border-green-500/30 bg-green-500/10 text-green-200"
            : "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
        }`}
      >
        {copied ? (
          <>
            <Check className="h-5 w-5" />
            Copied!
          </>
        ) : (
          <>
            <Share2 className="h-5 w-5" />
            Share Link
          </>
        )}
      </button>

      <button
        onClick={handleDownloadPDF}
        disabled={!id}
        className="group relative flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-6 py-3.5 font-semibold text-blue-200 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/20 active:scale-95 disabled:opacity-50"
      >
        <Download className="h-5 w-5" />
        Download PDF
      </button>
    </div>
  );
}