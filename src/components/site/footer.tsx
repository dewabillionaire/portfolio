import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="/" className="hover:text-neutral-900 dark:hover:text-neutral-100">
            Home
          </Link>
          <Link href="/projects" className="hover:text-neutral-900 dark:hover:text-neutral-100">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-neutral-900 dark:hover:text-neutral-100">
            Blog
          </Link>
          <Link href="/about" className="hover:text-neutral-900 dark:hover:text-neutral-100">
            About
          </Link>
          <Link href="/contact" className="hover:text-neutral-900 dark:hover:text-neutral-100">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
