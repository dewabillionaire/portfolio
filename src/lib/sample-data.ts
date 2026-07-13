export const projects = [
  {
    id: "1",
    title: "Analytics Dashboard",
    slug: "analytics-dashboard",
    description:
      "Real-time analytics dashboard for SaaS metrics with embedded charts, filters, and export.",
    tech: "Next.js, TypeScript, Prisma, Tailwind",
    featured: true,
    published: true,
    createdAt: new Date("2026-06-01T00:00:00Z").toISOString(),
  },
  {
    id: "2",
    title: "URL Shortener API",
    slug: "url-shortener-api",
    description: "Fast URL shortener with custom aliases, click tracking, and rate limiting.",
    tech: "Node.js, Express, SQLite",
    featured: true,
    published: true,
    createdAt: new Date("2026-05-10T00:00:00Z").toISOString(),
  },
  {
    id: "3",
    title: "Server Watcher",
    slug: "server-watcher",
    description:
      "Lightweight server monitor with Telegram alerts, uptime checks, and log tailing.",
    tech: "Linux, Nginx, Tailwind, Bash",
    featured: true,
    published: true,
    createdAt: new Date("2026-04-18T00:00:00Z").toISOString(),
  },
];

export const posts = [
  {
    id: "1",
    title: "Building Part-Time Portfolios That Get Hired",
    slug: "part-time-portfolios",
    excerpt:
      "Why case studies beat generic JAMstack demos.",
    createdAt: new Date("2026-05-20T00:00:00Z").toISOString(),
    published: true,
    content: "This is a sample post about building part-time portfolios that get hired.",
  },
  {
    id: "2",
    title: "Next.js Server Components for CRUD",
    slug: "nextjs-server-crud",
    excerpt: "Using server components and Prisma safely.",
    createdAt: new Date("2026-04-02T00:00:00Z").toISOString(),
    published: true,
    content: "This is a sample post about Next.js Server Components for CRUD.",
  },
];
