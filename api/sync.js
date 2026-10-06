module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const key = process.env.GREENHOUSE_HARVEST_KEY;
  if (!key) {
    return res.status(200).json({
      configured: false,
      message: "Greenhouse is not connected. Add GREENHOUSE_HARVEST_KEY in Vercel to sync a shortlist."
    });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  const person = body.candidate || {};
  const payload = {
    first_name: (person.name || "Candidate").split(" ")[0],
    last_name: "Scout",
    external_id: person.id,
    notes: `GovCon Talent Scout shortlist. ${person.title || ""} · ${person.clearance || ""} · ${person.location || ""}`
  };

  const response = await fetch("https://harvest.greenhouse.io/v1/candidates", {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(key + ":").toString("base64"),
      "Content-Type": "application/json",
      "On-Behalf-Of": process.env.GREENHOUSE_USER_ID || ""
    },
    body: JSON.stringify(payload)
  });
  const data = await response.json().catch(() => ({}));
  return res.status(response.ok ? 200 : 502).json({ configured: true, ok: response.ok, greenhouse: data });
};
