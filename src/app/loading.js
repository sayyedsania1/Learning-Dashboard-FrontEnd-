export default function Loading() {
  return (
    <main className="min-h-screen bg-[#050505] p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        <div className="col-span-2 h-48 rounded-3xl bg-zinc-900 animate-pulse" />

        <div className="h-48 rounded-3xl bg-zinc-900 animate-pulse" />

        <div className="h-48 rounded-3xl bg-zinc-900 animate-pulse" />

        <div className="col-span-2 h-64 rounded-3xl bg-zinc-900 animate-pulse" />

        <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />

        <div className="h-64 rounded-3xl bg-zinc-900 animate-pulse" />

      </div>
    </main>
  );
}