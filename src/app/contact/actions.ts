import prisma from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(3).max(200),
  body: z.string().min(10).max(2000),
});

export async function submitContact(formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    body: formData.get("body"),
  };

  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  await prisma.message.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      subject: parsed.data.subject,
      body: parsed.data.body,
    },
  });

  return { success: true };
}
