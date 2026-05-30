// Supabase Edge Function: send-contact
// Receives contact-form submissions and emails them via Resend.
//
// Required secret (set in your Supabase project):
//   supabase secrets set RESEND_API_KEY=your_resend_api_key
//
// Optional secrets (sensible defaults provided):
//   CONTACT_TO_EMAIL   - where messages are delivered (default: jenu4jenushan@gmail.com)
//   CONTACT_FROM_EMAIL - verified Resend sender (default: onboarding@resend.dev for testing)
//
// Deploy with:
//   supabase functions deploy send-contact

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const TO_EMAIL = Deno.env.get("CONTACT_TO_EMAIL") ?? "jenu4jenushan@gmail.com";
const FROM_EMAIL = Deno.env.get("CONTACT_FROM_EMAIL") ?? "Portfolio Contact <onboarding@resend.dev>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Email service is not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email and message are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeSubject = escapeHtml(String(subject || "New portfolio enquiry"));
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, "<br>");

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: String(email),
        subject: `[Portfolio] ${safeSubject}`,
        html: `
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <hr>
          <p>${safeMessage}</p>
        `,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error("Resend error:", resp.status, detail);
      return new Response(
        JSON.stringify({ error: `Resend (${resp.status}): ${detail}` }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact error:", err);
    return new Response(
      JSON.stringify({ error: "Unexpected error. Please try again later." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
