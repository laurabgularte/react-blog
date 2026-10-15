import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          dev<span className="text-blue-500">.blog</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link
            href="/"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Artigos
          </Link>
        </nav>
      </div>
    </header>
  );
}
