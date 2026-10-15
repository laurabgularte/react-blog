export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-pulse space-y-6">
      <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/4"></div>
      <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4"></div>
      <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/6"></div>
      <div className="space-y-3 pt-6">
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6"></div>
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-4/6"></div>
      </div>
    </div>
  );
}
