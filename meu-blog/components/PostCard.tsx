import Link from "next/link";
import { PostMeta } from "@/types";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block space-y-2">
        <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
          <time>{new Date(post.date).toLocaleDateString("pt-BR")}</time>
          <span>•</span>
          <div className="flex gap-1">
            {post.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {post.description}
        </p>
      </Link>
    </article>
  );
}
