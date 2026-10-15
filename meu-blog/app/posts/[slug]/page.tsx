import { getPostBySlug, getPostSlugs } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.(mdx|md)$/, ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.meta.title} — dev.blog`,
    description: post.meta.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="flex gap-2 mb-3">
          {post.meta.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-400"
            >
              #{tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          {post.meta.title}
        </h1>
        <time className="text-xs text-zinc-500 font-mono">
          {new Date(post.meta.date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </time>
      </header>

      {/* Renderização tratada do Markdown com suporte ao Tailwind Typography */}
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
