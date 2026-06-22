"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-brand-bg flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
        <h2 className="text-3xl font-black text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8 font-medium">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="px-8 py-4 bg-brand-primary text-white font-bold rounded-2xl hover:bg-[#1E5D22] transition-colors"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
