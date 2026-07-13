import { projects } from "@/lib/sample-data";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug) ?? null;

  if (!project) {
    redirect("/projects");
  }

  return (
    <article className="py-10">
      <div className="mb-6">
        <Link href="/projects" className="inline-flex items-center gap-1 rounded-md border px-2.5 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </div>
      <div className="rounded-xl border p-6 sm:p-8">
        <h1 className="text-3xl font-medium tracking-tight">{project.title}</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.split(",").map((t) => (
            <Badge key={t.trim()} variant="secondary">{t.trim()}</Badge>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          <Link href={`/projects/${project.slug}`} className="hover:underline">Details</Link>
        </div>
        <div className="mt-8 rounded-lg border bg-neutral-50 p-5 text-sm leading-relaxed whitespace-pre-wrap dark:bg-neutral-900">
          {project.description}
        </div>
      </div>
    </article>
  );
}
