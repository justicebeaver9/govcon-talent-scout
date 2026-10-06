module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  const lead = {
    name: String(body.name || "").slice(0, 120),
    email: String(body.email || "").slice(0, 160),
    company: String(body.company || "").slice(0, 160),
    role: String(body.role || "").slice(0, 160),
    note: String(body.note || "").slice(0, 800),
    receivedAt: new Date().toISOString()
  };

  if (!lead.email || !lead.email.includes("@")) {
    return res.status(400).json({ error: "Work email required." });
  }

  let forwarded = false;
  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      const response = await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "govcon-talent-scout", lead })
      });
      forwarded = response.ok;
    } catch (error) {
      forwarded = false;
    }
  }

  return res.status(200).json({
    ok: true,
    forwarded,
    message: forwarded
      ? "Pilot request sent. We will follow up at the email you gave."
      : "Pilot request captured for this session. Add LEAD_WEBHOOK_URL in Vercel to forward it to Slack or email."
  });
};
