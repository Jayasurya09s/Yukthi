"use client";

export default function ShareButton() {
  async function handleCopy() {
    await navigator.clipboard.writeText(
      window.location.href
    );

    alert("Share link copied!");
  }

  return (
    <button
      onClick={handleCopy}
      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
    >
      Copy Share Link
    </button>
  );
}