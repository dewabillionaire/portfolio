import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({ where: { published: true }, select: { slug: true } });
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post || !post.published) {
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
        {post.publishedAt ? (
          <time className="mt-2 block text-sm text-neutral-500" dateTime={new Date(post.publishedAt).toISOString()}>
            {fmt.format(new Date(post.publishedAt))}
          </time>
        ) : null}
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">{post.excerpt}</p>
        <div className="mt-10 rounded-xl border bg-neutral-50 p-6 sm:p-10 text-sm leading-relaxed whitespace-pre-wrap dark:bg-neutral-900">
          {post.content.split("\n").map((line, i) => {
            if (!line.trim()) {
              return <br key={i} />;
            }
            if (line.trim() === "---") {
              return <hr key={i} className="my-6 border-neutral-200 dark:border-neutral-800" />;
            }
            if (line.startsWith("# ")) {
              return <h1 key={i} className="text-3xl font-medium tracking-tight">{line.slice(2)}</h1>;
            }
            if (line.startsWith("## ")) {
              return <h2 key={i} className="mt-8 text-2xl font-medium tracking-tight">{line.slice(3)}</h2>;
            }
            if (line.startsWith("- ")) {
              return <li key={i} className="ml-5 list-disc">{line.slice(2)}</li>;
            }

            return (
              <p key={i} className="mb-3">
                {line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={j}>{part.slice(2, -2)}</strong>;
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
