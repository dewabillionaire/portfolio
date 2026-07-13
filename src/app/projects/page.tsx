import { projects } from "@/lib/sample-data";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-medium tracking-tight">Projects</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">Selected work, side experiments, and production builds.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="rounded-xl border p-5 transition-colors hover:border-neutral-300 dark:hover:border-neutral-700">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-medium">
                <Link href={`/projects/${project.slug}`} className="hover:underline">{project.title}</Link>
              </h3>
              {project.featured ? <Badge variant="secondary">Featured</Badge> : null}
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.split(",").map((t) => (
                <Badge key={t.trim()} variant="outline" className="font-normal">{t.trim()}</Badge>
              ))}
            </div>
            <div className="mt-5 flex gap-4 text-sm">
              <Link href={`/projects/${project.slug}`} className="hover-underline">Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
