import { Resend } from "resend";

const limits = {
  name: 100,
  email: 254,
  subject: 200,
  message: 5000,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}

function isValidField(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.trim().length <= maxLength;
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object") {
      return Response.json({ error: "Invalid submission." }, { status: 400 });
    }

    const { name, email, subject, message, website } = body as Record<string, unknown>;

    // Silently accept submissions completed by bots so the honeypot cannot be probed.
    if (typeof website === "string" && website.trim()) {
      return Response.json({ success: true });
    }

    if (
      !isValidField(name, limits.name) ||
      !isValidField(email, limits.email) ||
      !isValidField(subject, limits.subject) ||
      !isValidField(message, limits.message) ||
      !emailPattern.test(email.trim())
    ) {
      return Response.json({ error: "Please provide valid values for all fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Contact form email environment variables are not configured.");
      return Response.json({ error: "Email service is unavailable." }, { status: 500 });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: cleanEmail,
      subject: `[Portfolio] ${cleanSubject}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`,
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(cleanSubject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap">${escapeHtml(cleanMessage)}</p>
      `,
    });

    if (error) {
      console.error("Resend rejected contact form email:", error);
      return Response.json({ error: "Email could not be sent." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form request failed:", error);
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}
