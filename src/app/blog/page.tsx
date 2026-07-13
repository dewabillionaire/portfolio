import prisma from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });

  const fmt = new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "numeric" });

  return (
    <div className="py-16">
      <h1 className="text-3xl font-medium tracking-tight">Blog</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">Notes on engineering, systems, and product.</p>

      {posts.length === 0 ? (
        <p className="mt-8 text-neutral-600 dark:text-neutral-400">No published posts yet.</p>
      ) : (
        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="rounded-xl border p-5 transition-colors hover:border-neutral-300 dark:hover:border-neutral-700">
              <div className="text-xs text-neutral-500">
                <time>
                  {post.publishedAt ? fmt.format(new Date(post.publishedAt)) : "Unpublished"}
                </time>
              </div>
              <h2 className="mt-2 text-lg font-medium">
                <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
              </h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
