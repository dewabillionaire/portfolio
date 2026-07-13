import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const projects = [
    {
      title: "Analytics Dashboard",
      slug: "analytics-dashboard",
      description: "Real-time analytics dashboard for SaaS metrics.",
      content: "Built with Next.js, Prisma, and shadcn/ui with charts and role-based access.",
      tech: "Next.js,TypeScript,Tailwind,Prisma",
      link: "https://example.com",
      repo: "https://github.com/dewabillionaire/portfolio",
      featured: true,
      published: true,
    },
    {
      title: "URL Shortener API",
      slug: "url-shortener-api",
      description: "Fast URL shortener with a tiny backend and custom aliases.",
      content: "Express API backed by SQLite with rate limiting and click tracking.",
      tech: "Node.js,Express,SQLite",
      link: "https://example.com",
      repo: "https://github.com/dewabillionaire/portfolio",
      featured: true,
      published: true,
    },
    {
      title: "Server Watcher",
      slug: "server-watcher",
      description: "Lightweight server monitor with Telegram alerts.",
      content: "Cron-driven health checker with Nginx, PHP-FPM, memory, and fail2ban checks.",
      tech: "Linux,Nginx,Tailwind,Bash",
      link: "localhost",
      repo: "https://github.com/dewabillionaire/portfolio",
      featured: true,
      published: true,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }

  const posts = [
    {
      title: "Building Part-Time Portfolios That Get Hired",
      slug: "building-part-time-portfolios",
      excerpt: "Why case studies beat generic JAMstack demos.",
      content: "Portfolio buyers and employers care about outcomes more than stacks.",
      published: true,
      publishedAt: new Date().toISOString(),
    },
    {
      title: "Next.js Server Components for CRUD",
      slug: "server-components-crud",
      excerpt: "Using server components and Prisma safely.",
      content: "Structured example of a real-world CRUD page using App Router.",
      published: true,
      publishedAt: new Date().toISOString(),
    },
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
