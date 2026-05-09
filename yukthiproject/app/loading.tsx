export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-white/10 border-t-white" />

        <p className="mt-6 text-zinc-400">
          Loading AI Spend Audit...
        </p>
      </div>
    </main>
  );
}