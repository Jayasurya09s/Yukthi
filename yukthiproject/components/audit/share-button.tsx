"use client";

import { useState, useEffect } from "react";
import { Share2, Check, Download } from "lucide-react";

interface ShareButtonProps {
  auditId?: string;
}

export default function ShareButton({ auditId }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    // Get ID from URL if not provided as prop
    if (!auditId && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlId = params.get('id');
      if (urlId) setId(urlId);
      // Or extract from pathname like /api/share?id=xxx
      const pathId = window.location.pathname.split('/').pop();
      if (pathId) setId(pathId);
    } else {
      setId(auditId || null);
    }
  }, [auditId]);

  const shareUrl = typeof window !== 'undefined' 
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