export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-semibold tracking-tight">Full-Stack Developer Portfolio</h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          A minimal case-study style portfolio built with Next.js, Prisma, and Tailwind.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold">Featured Work</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { title: "Analytics Dashboard", desc: "Real-time analytics dashboard for SaaS metrics.", tech: "Next.js, TypeScript, Tailwind, Prisma" },
            { title: "URL Shortener API", desc: "Fast URL shortener with custom aliases.", tech: "Node.js, Express, SQLite" },
            { title: "Server Watcher", desc: "Lightweight server monitor with Telegram alerts.", tech: "Linux, Nginx, Tailwind, Bash" },
          ].map((project) => (
            <div key={project.title} className="rounded-2xl border p-4 shadow-sm">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{project.desc}</p>
              <p className="mt-3 text-xs text-neutral-500">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Writing</h2>
        <ul className="mt-6 space-y-3">
          <li>
            <span className="text-blue-600 underline">Building Part-Time Portfolios That Get Hired</span>
            <p className="text-sm text-neutral-600">Why case studies beat generic JAMstack demos.</p>
          </li>
          <li>
            <span className="text-blue-600 underline">Next.js Server Components for CRUD</span>
            <p className="text-sm text-neutral-600">Using server components and Prisma safely.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
