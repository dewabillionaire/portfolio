import prisma from "@/lib/prisma";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
            {featured.map((project: any) => (
              <Card key={project.id} className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(",").map((t: string) => (
                      <Badge key={t.trim()} variant="secondary" className="font-normal">
                        {t.trim()}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">
                    <span>View project</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section className="pb-20">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-medium tracking-tight">Latest writing</h2>
          <Link href="/blog" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">View all</Link>
        </div>
        {latest.length === 0 ? (
          <p className="mt-6 text-neutral-600 dark:text-neutral-400">No posts yet.</p>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {latest.map((post: any) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle className="text-base">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <BookOpen className="h-4 w-4" />
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">
                    <span>Read article</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
