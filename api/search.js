const POOL = [
  { id: "GTS-1041", name: "A. Brennan", title: "Cleared Software Engineer", clearance: "TS/SCI", location: "Arlington, VA", years: 8, skills: ["python", "kubernetes", "aws", "devops", "ci/cd"], agencies: ["DISA", "Army"], rate: 165, available: "2 weeks" },
  { id: "GTS-1042", name: "M. Okonkwo", title: "Cybersecurity Analyst", clearance: "TS", location: "Fort Meade, MD", years: 6, skills: ["splunk", "siem", "nist", "incident response", "python"], agencies: ["NSA mission support", "DHS"], rate: 155, available: "Immediate" },
  { id: "GTS-1043", name: "R. Chen", title: "Systems Engineer", clearance: "Secret", location: "Chantilly, VA", years: 11, skills: ["sysml", "requirements", "radar", "matlab", "dodaf"], agencies: ["NRO", "Air Force"], rate: 175, available: "30 days" },
  { id: "GTS-1044", name: "S. Alvarez", title: "Capture / Proposal Manager", clearance: "Secret", location: "Washington, DC", years: 14, skills: ["shipley", "rfp", "capture", "pricing", "orals"], agencies: ["GSA", "DHS"], rate: 145, available: "Immediate" },
  { id: "GTS-1045", name: "J. Whitfield", title: "Cloud Architect", clearance: "TS/SCI", location: "Herndon, VA", years: 12, skills: ["aws", "govcloud", "terraform", "zero trust", "kubernetes"], agencies: ["DISA", "VA"], rate: 195, available: "3 weeks" },
  { id: "GTS-1046", name: "L. Park", title: "Data Scientist", clearance: "TS", location: "Columbia, MD", years: 5, skills: ["python", "pytorch", "nlp", "geospatial", "sql"], agencies: ["NGA", "Army"], rate: 160, available: "Immediate" },
  { id: "GTS-1047", name: "D. Hassan", title: "Program Manager", clearance: "TS/SCI", location: "Alexandria, VA", years: 16, skills: ["evm", "agile", "stakeholder", "cost", "schedule"], agencies: ["Navy", "OSD"], rate: 185, available: "45 days" },
  { id: "GTS-1048", name: "C. Nguyen", title: "Full Stack Engineer", clearance: "Secret", location: "Silver Spring, MD", years: 7, skills: ["react", "node", "postgres", "typescript", "aws"], agencies: ["HHS", "CMS"], rate: 140, available: "Immediate" },
  { id: "GTS-1049", name: "P. Ibarra", title: "Intel Analyst", clearance: "TS/SCI", location: "Springfield, VA", years: 9, skills: ["all-source", "briefing", "osint", "link analysis", "arabic"], agencies: ["DIA", "ODNI"], rate: 150, available: "2 weeks" },
  { id: "GTS-1050", name: "E. Brooks", title: "Network Engineer", clearance: "TS", location: "Annapolis Junction, MD", years: 10, skills: ["cisco", "juniper", "zero trust", "firewall", "sd-wan"], agencies: ["DISA", "Army"], rate: 155, available: "Immediate" },
  { id: "GTS-1051", name: "K. Singh", title: "DevSecOps Engineer", clearance: "TS/SCI", location: "Reston, VA", years: 8, skills: ["gitlab", "kubernetes", "ansible", "python", "stig"], agencies: ["Air Force", "Space Force"], rate: 170, available: "3 weeks" },
  { id: "GTS-1052", name: "N. Carter", title: "Contracts Specialist", clearance: "Public Trust", location: "Washington, DC", years: 12, skills: ["far", "dfars", "subcontracts", "compliance", "pricing"], agencies: ["GSA", "DOE"], rate: 125, available: "Immediate" },
  { id: "GTS-1053", name: "T. Morales", title: "RF Engineer", clearance: "Secret", location: "Aberdeen, MD", years: 9, skills: ["rf", "ew", "matlab", "antenna", "test"], agencies: ["Army", "Navy"], rate: 160, available: "30 days" },
  { id: "GTS-1054", name: "H. Feldman", title: "Scrum Master", clearance: "Secret", location: "Tysons, VA", years: 7, skills: ["agile", "jira", "safe", "coaching", "dod"], agencies: ["DHS", "CBP"], rate: 130, available: "Immediate" },
  { id: "GTS-1055", name: "Y. Abebe", title: "Machine Learning Engineer", clearance: "TS", location: "Bethesda, MD", years: 6, skills: ["python", "pytorch", "mlops", "aws", "computer vision"], agencies: ["NIH", "DARPA support"], rate: 175, available: "2 weeks" },
  { id: "GTS-1056", name: "B. Kowalski", title: "Cleared Recruiter", clearance: "Secret", location: "Annapolis, MD", years: 11, skills: ["sourcing", "clearance", "ofccp", "stakeholder", "pipeline"], agencies: ["Navy", "DOE"], rate: 95, available: "Immediate" },
  { id: "GTS-1057", name: "F. Duarte", title: "Satellite Systems Engineer", clearance: "TS/SCI", location: "Chantilly, VA", years: 13, skills: ["space", "tt&c", "requirements", "matlab", "sysml"], agencies: ["NRO", "Space Force"], rate: 190, available: "60 days" },
  { id: "GTS-1058", name: "G. Patel", title: "Security Control Assessor", clearance: "TS", location: "Fort Belvoir, VA", years: 15, skills: ["rmf", "nist 800-53", "ato", "stig", "fedramp"], agencies: ["Army", "DISA"], rate: 165, available: "Immediate" },
  { id: "GTS-1059", name: "W. Olsen", title: "Java Backend Engineer", clearance: "Secret", location: "Baltimore, MD", years: 9, skills: ["java", "spring", "kafka", "postgres", "microservices"], agencies: ["SSA", "DHS"], rate: 145, available: "2 weeks" },
  { id: "GTS-1060", name: "I. Novak", title: "Geospatial Analyst", clearance: "TS/SCI", location: "Springfield, VA", years: 7, skills: ["arcgis", "geospatial", "python", "imagery", "sql"], agencies: ["NGA", "Army"], rate: 150, available: "Immediate" },
  { id: "GTS-1061", name: "Q. Reed", title: "Proposal Writer", clearance: "Public Trust", location: "Alexandria, VA", years: 10, skills: ["shipley", "technical writing", "rfp", "graphics", "compliance"], agencies: ["Civilian", "HHS"], rate: 110, available: "Immediate" },
  { id: "GTS-1062", name: "V. Kim", title: "Platform Engineer", clearance: "TS/SCI", location: "McLean, VA", years: 8, skills: ["kubernetes", "terraform", "aws", "observability", "go"], agencies: ["IC support", "DIA"], rate: 180, available: "3 weeks" },
  { id: "GTS-1063", name: "A. Diallo", title: "Business Systems Analyst", clearance: "Secret", location: "Washington, DC", years: 8, skills: ["requirements", "sql", "jira", "process", "agile"], agencies: ["Treasury", "IRS"], rate: 125, available: "Immediate" },
  { id: "GTS-1064", name: "S. Moreau", title: "Nuclear Systems Engineer", clearance: "Secret", location: "Germantown, MD", years: 12, skills: ["nuclear", "systems", "safety", "python", "requirements"], agencies: ["DOE", "NNSA"], rate: 185, available: "45 days" }
];

const RANK = { "none": 0, "public trust": 1, "secret": 2, "ts": 3, "ts/sci": 4 };

function tokens(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9+#./\-\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 1);
}

function scoreCandidate(person, query, location, minClearance) {
  const q = tokens(query);
  const blob = tokens([person.title, person.skills.join(" "), person.agencies.join(" "), person.location].join(" "));
  const skillHits = person.skills.filter((skill) => q.some((word) => skill.includes(word) || word.includes(skill)));
  const titleHits = q.filter((word) => person.title.toLowerCase().includes(word));
  const agencyHits = person.agencies.filter((agency) => q.some((word) => agency.toLowerCase().includes(word)));
  let score = skillHits.length * 22 + titleHits.length * 14 + agencyHits.length * 10;
  if (!q.length) score = 40;
  if (location && person.location.toLowerCase().includes(location.toLowerCase().slice(0, 4))) score += 12;
  if (["dc", "virginia", "maryland", "ncr", "metro"].some((hint) => (location || "").toLowerCase().includes(hint))) score += 6;
  const needed = RANK[(minClearance || "").toLowerCase()] || 0;
  const held = RANK[person.clearance.toLowerCase()] || 0;
  if (needed && held < needed) return null;
  if (held >= 3) score += 8;
  score = Math.min(99, score + Math.min(12, person.years));
  const why = [
    skillHits.length ? `Skills: ${skillHits.join(", ")}` : "Adjacent role match",
    `${person.clearance} · ${person.location}`,
    agencyHits.length ? `Account overlap: ${agencyHits.join(", ")}` : `Agencies: ${person.agencies.join(", ")}`
  ];
  return { ...person, score, why, pool: "synthetic-beta" };
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  const query = body.query || "";
  const location = body.location || "DC metro";
  const minClearance = body.clearance || "";
  const matches = POOL
    .map((person) => scoreCandidate(person, query, location, minClearance))
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  return res.status(200).json({
    query,
    location,
    minClearance: minClearance || "any",
    source: "synthetic-cleared-pool",
    disclaimer: "Beta pool is synthetic. Names are initials. Not a clearance verification and not a real candidate database.",
    count: matches.length,
    matches
  });
};

module.exports.POOL = POOL;
