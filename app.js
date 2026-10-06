const FALLBACK = [
  { id: "GTS-1045", name: "J. Whitfield", title: "Cloud Architect", clearance: "TS/SCI", location: "Herndon, VA", years: 12, skills: ["aws", "govcloud", "terraform", "zero trust", "kubernetes"], agencies: ["DISA", "VA"], rate: 195, available: "3 weeks" },
  { id: "GTS-1062", name: "V. Kim", title: "Platform Engineer", clearance: "TS/SCI", location: "McLean, VA", years: 8, skills: ["kubernetes", "terraform", "aws", "observability", "go"], agencies: ["IC support", "DIA"], rate: 180, available: "3 weeks" },
  { id: "GTS-1051", name: "K. Singh", title: "DevSecOps Engineer", clearance: "TS/SCI", location: "Reston, VA", years: 8, skills: ["gitlab", "kubernetes", "ansible", "python", "stig"], agencies: ["Air Force", "Space Force"], rate: 170, available: "3 weeks" },
  { id: "GTS-1041", name: "A. Brennan", title: "Cleared Software Engineer", clearance: "TS/SCI", location: "Arlington, VA", years: 8, skills: ["python", "kubernetes", "aws", "devops"], agencies: ["DISA", "Army"], rate: 165, available: "2 weeks" },
  { id: "GTS-1044", name: "S. Alvarez", title: "Capture / Proposal Manager", clearance: "Secret", location: "Washington, DC", years: 14, skills: ["shipley", "rfp", "capture", "pricing"], agencies: ["GSA", "DHS"], rate: 145, available: "Immediate" },
  { id: "GTS-1042", name: "M. Okonkwo", title: "Cybersecurity Analyst", clearance: "TS", location: "Fort Meade, MD", years: 6, skills: ["splunk", "siem", "nist", "incident response"], agencies: ["DHS"], rate: 155, available: "Immediate" }
];

function localMatch(query) {
  const words = query.toLowerCase().split(/\s+/);
  return FALLBACK.map((person) => {
    const hits = person.skills.filter((skill) => words.some((word) => skill.includes(word) || word.includes(skill)));
    return { ...person, score: 48 + hits.length * 14, why: [hits.join(", ") || "Role adjacency", person.clearance + " · " + person.location], pool: "browser-fallback" };
  }).sort((a, b) => b.score - a.score);
}

function card(person) {
  const skills = (person.skills || []).map((skill) => `<span>${skill}</span>`).join("");
  const why = (person.why || []).join(" · ");
  return `<article class="card">
    <div class="score">${person.score}<small>FIT</small></div>
    <div>
      <h3 class="who">${person.name}</h3>
      <p class="sub">${person.title} · ${person.years} yrs</p>
      <div class="chips">${skills}<span>${person.clearance}</span></div>
    </div>
    <div class="side">${person.location}<br>$${person.rate}/hr<br>${person.available}</div>
    <p class="why">${why}</p>
  </article>`;
}

async function search(event) {
  event.preventDefault();
  const button = event.target.querySelector("button");
  button.disabled = true;
  const payload = {
    query: document.getElementById("query").value,
    location: document.getElementById("location").value,
    clearance: document.getElementById("clearance").value
  };
  let data;
  try {
    const response = await fetch("/api/search", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    data = await response.json();
  } catch (error) {
    data = { matches: localMatch(payload.query), disclaimer: "API offline. Showing the in-browser fallback pool.", source: "browser-fallback" };
  }
  const box = document.getElementById("results");
  box.innerHTML = `<p class="note">${data.count || data.matches.length} matches · ${data.source || "beta"} · ${data.disclaimer || ""}</p>` + data.matches.map(card).join("");
  button.disabled = false;
}

async function checkout(tier) {
  const note = document.getElementById("pay-note");
  note.textContent = "Opening checkout…";
  const response = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ tier }) });
  const data = await response.json();
  if (data.url) window.location = data.url;
  else note.textContent = data.message || "Checkout is not configured.";
}

async function lead(event) {
  event.preventDefault();
  const form = event.target;
  const payload = Object.fromEntries(new FormData(form).entries());
  const note = document.getElementById("lead-note");
  const response = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  const data = await response.json();
  note.textContent = data.message || data.error || "Sent.";
  if (data.ok) form.reset();
}

document.getElementById("console").addEventListener("submit", search);
document.getElementById("lead").addEventListener("submit", lead);
document.querySelectorAll("[data-tier]").forEach((button) => button.addEventListener("click", () => checkout(button.dataset.tier)));

const params = new URLSearchParams(location.search);
if (params.get("checkout") === "success") {
  const banner = document.getElementById("banner");
  banner.classList.add("show");
  banner.textContent = "Checkout completed. Stripe will email the receipt. Seat access is manual in this beta until webhooks are added.";
}
