import prisma from "@/lib/prisma";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function Home() {
  const featured = await prisma.project.findMany({
    where: { published: true, featured: true },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  const latest = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <div className="w-full">
      <section className="py-20">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-4">Available for work</Badge>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Building thoughtful software, end to end.
          </h1>
          <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300">
            I design and implement simple, polished products using modern tooling.
            Currently focused on Next.js, TypeScript, and clean UX.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="inline-flex items-center justify-center rounded-lg border border-transparent bg-neutral-900 px-3 py-2 text-sm font-medium text-neutral-50 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200">View projects</Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900">Contact</Link>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-medium tracking-tight">Featured projects</h2>
          <Link href="/projects" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">Browse all</Link>
        </div>
        {featured.length === 0 ? (
          <p className="mt-6 text-neutral-600 dark:text-neutral-400">No featured projects yet.</p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <Card key={project.id} className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(",").map((t) => (
                      <Badge key={t.trim()} variant="secondary" className="font-normal">
                        {t.trim()}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">Featured project</span>
                  <div className="flex gap-3 text-sm">
                    {project.link ? (
                      <Link className="inline-flex items-center gap-1 hover:underline" href={project.link} target="_blank">Live</Link>
                    ) : null}
                    {project.repo ? (
                      <Link className="inline-flex items-center gap-1 hover:underline" href={project.repo} target="_blank">Repo</Link>
                    ) : null}
                    <Link className="inline-flex items-center gap-1 hover:underline" href={`/projects/${project.slug}`}>Details</Link>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section className="pb-20">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-medium tracking-tight">Latest writing</h2>
          <Link href="/blog" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">All posts</Link>
        </div>
        {latest.length === 0 ? (
          <p className="mt-6 text-neutral-600 dark:text-neutral-400">No posts yet.</p>
        ) : (
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((post) => (
              <li key={post.id} className="rounded-lg border p-5 transition-colors hover:border-neutral-300 dark:hover:border-neutral-700">
                <div className="flex items-center gap-2 text-neutral-500">
                  <BookOpen className="h-4 w-4" />
                  <time className="text-xs">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Unpublished"}
                  </time>
                </div>
                <h3 className="mt-3 font-medium">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">{post.title}</Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-xl border bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-medium tracking-tight">Like what you see?</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Let’s talk about your next project.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
      </section>
    </div>
  );
}
