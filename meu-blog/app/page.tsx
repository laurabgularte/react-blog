import { getAllPosts } from "@/lib/markdown";
import { PostCard } from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Engenharia, Código & Tecnologia. 👋
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Espaço focado no compartilhamento de experiências, arquitetura de
          sistemas e desenvolvimento de software.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-lg font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-2 text-zinc-500">
          Todos os Artigos ({posts.length})
        </h2>

        {posts.length === 0 ? (
          <p className="text-sm text-zinc-500">Nenhum artigo encontrado.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
