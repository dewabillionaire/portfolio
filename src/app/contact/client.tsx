"use client";

import { useState } from "react";
import { submitContact } from "./actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("loading");
        submitContact(new FormData(event.currentTarget))
          .then(() => setStatus("success"))
          .catch(() => setStatus("error"));
      }}
      className="mt-8 max-w-xl grid gap-5 rounded-xl border p-6"
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <Input id="name" name="name" placeholder="Ada Lovelace" required minLength={2} maxLength={100} />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Input id="email" name="email" type="email" placeholder="ada@example.com" required />
      </div>

      <div className="grid gap-2">
        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
        <Input id="subject" name="subject" placeholder="Project collaboration" required minLength={3} maxLength={200} />
      </div>

      <div className="grid gap-2">
        <label htmlFor="body" className="text-sm font-medium">Message</label>
        <Textarea id="body" name="body" placeholder="What are you building?" className="resize-y" rows={5} required minLength={10} maxLength={2000} />
      </div>

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>

      {status === "success" ? (
        <p className="text-sm text-green-700">Thanks, message sent.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-700">Submission failed.</p>
      ) : null}
    </form>
  );
}
