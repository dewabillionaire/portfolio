export const dynamic = "force-dynamic";

import ContactForm from "./client";

export default function ContactPage() {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-medium tracking-tight">Contact</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">Tell me about your project or opportunity.</p>
      <ContactForm />
    </div>
  );
}
