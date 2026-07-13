import prisma from "@/lib/prisma";

export async function submitContact(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  if (!name || !email || !subject || !body) {
    console.log('missing');
    return;
  }

  await prisma.message.create({
    data: { name, email, subject, body },
  });
}
