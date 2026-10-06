const PRICES = {
  basic: process.env.STRIPE_PRICE_BASIC,
  pro: process.env.STRIPE_PRICE_PRO,
  enterprise: process.env.STRIPE_PRICE_ENTERPRISE
};

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  const tier = body.tier || "pro";
  const price = PRICES[tier];
  const origin = req.headers.origin || `https://${req.headers.host}`;

  if (!process.env.STRIPE_SECRET_KEY || !price) {
    return res.status(200).json({
      configured: false,
      message: "Stripe is not connected yet. In Vercel, set STRIPE_SECRET_KEY and STRIPE_PRICE_PRO (also BASIC and ENTERPRISE). This button will then open Checkout."
    });
  }

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price, quantity: 1 }],
    success_url: `${origin}/?checkout=success`,
    cancel_url: `${origin}/?checkout=cancel`,
    allow_promotion_codes: true
  });

  return res.status(200).json({ configured: true, url: session.url });
};
