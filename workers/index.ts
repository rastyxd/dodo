export default {
  async fetch(request, env, ctx) {
    // Only accept POST requests
    if (request.method !== "POST") {
      return new Response("Use POST to send email data", { status: 405 });
    }
    try {
      // Get the email data from the request body
      const emailData = await request.json();

      // Generate a unique key using timestamp
      const key = `email-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.json`;

      // Save to R2 bucket using the binding
      await env.DODO_EMAILS.put(key, JSON.stringify(emailData));

      return new Response("Email saved to bucket!", { status: 200 });
    } catch (error) {
      return new Response("Error: " + error.message, { status: 500 });
    }
  },
};
