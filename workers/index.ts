export interface Env {
  EMAIL_BUCKET: R2Bucket;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
        headers: { Allow: "POST" },
      });
    }

    try {
      const { email } = await request.json<{ email: string }>();

      if (!email || !email.includes("@")) {
        return new Response(JSON.stringify({ error: "Invalid email" }), {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }

      const key = `emails/${Date.now()}-${crypto.randomUUID()}.json`;

      await env.EMAIL_BUCKET.put(
        key,
        JSON.stringify({
          email,
          submittedAt: new Date().toISOString(),
          source: request.headers.get("referer") ?? "unknown",
        }),
      );

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    } catch {
      return new Response(JSON.stringify({ error: "Server error" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
  },
};
