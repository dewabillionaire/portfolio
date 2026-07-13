import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-medium tracking-tight">About</h1>
      <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-300">
        I build interfaces and back-end systems with a focus on clarity, speed, and maintainability.
        I like products that feel fast, are easy to extend, and get out of the user’s way.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-medium">Experience</h2>
        <div className="mt-6 rounded-xl border p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-medium">Full-stack engineer</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">Shipping web apps, design systems, and internal tooling.</p>
            </div>
            <span className="text-xs text-neutral-500">Present</span>
          </div>
        </div>
        <div className="mt-4 rounded-xl border p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-medium">Open source contributions</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">Maintaining small utilities and documentation.</p>
            </div>
            <span className="text-xs text-neutral-500">2020 - Present</span>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-medium">Tech stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Prisma",
            "Tailwind CSS",
            "Docker",
            "tRPC",
            "Zod",
          ].map((item) => (
            <Badge key={item} variant="secondary" className="font-normal">{item}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
