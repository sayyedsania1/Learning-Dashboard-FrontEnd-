"use client";

export default function Error() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Something went wrong
        </h1>

        <p className="text-zinc-400">
          Failed to load dashboard data.
        </p>
      </div>
    </main>
  );
}