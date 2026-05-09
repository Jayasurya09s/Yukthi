"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;

  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-6 text-zinc-400">
          An unexpected error occurred while
          processing your request.
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-2xl bg-white px-6 py-3 font-medium text-black"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}