import { posts } from "@/lib/sample-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug) ?? null;

  if (!post) {
    notFound();
  }

  const fmt = new Intl.DateTimeFormat(undefined, { year: "numeric", month: "long", day: "numeric" });

  return (
    <article className="py-10">
      <div className="mb-6">
        <Link href="/blog" className="inline-flex items-center gap-1 rounded-md border px-2.5 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
      </div>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-medium tracking-tight">{post.title}</h1>
        <time className="mt-2 block text-sm text-neutral-500" dateTime={new Date(post.createdAt).toISOString()}>
          {fmt.format(new Date(post.createdAt))}
        </time>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">{post.excerpt}</p>
        <div className="mt-10 rounded-xl border bg-neutral-50 p-6 sm:p-10 text-sm leading-relaxed whitespace-pre-wrap dark:bg-neutral-900">
          {post.content}
        </div>
      </div>
    </article>
  );
}
