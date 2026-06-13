import express from "express";
import cors from "cors";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const company = {
  name: "CarbonCanopy Solutions",
  phones: ["0705686479", "0100635001"],
  email: "carboncanopy@hotmail.com",
  motto: "Restoring Landscapes. Creating Carbon Value. Empowering Communities.",
};

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: company.name, time: new Date().toISOString() });
});

// Company info
app.get("/api/company", (_req, res) => {
  res.json(company);
});

const isEmail = (v) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Contact form submissions
app.post("/api/contact", (req, res) => {
  const { name, email, phone, service, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const entry = {
    id: Date.now().toString(36),
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    phone: phone ? String(phone).slice(0, 50) : "",
    service: service ? String(service).slice(0, 200) : "",
    message: String(message).slice(0, 5000),
    receivedAt: new Date().toISOString(),
  };

  // Persist to a local JSON log (acts as a simple inbox).
  try {
    const dataDir = path.join(__dirname, "data");
    fs.mkdirSync(dataDir, { recursive: true });
    const file = path.join(dataDir, "messages.json");
    const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : [];
    existing.push(entry);
    fs.writeFileSync(file, JSON.stringify(existing, null, 2));
  } catch (err) {
    console.error("Failed to persist message:", err.message);
  }

  console.log(`New enquiry from ${entry.name} <${entry.email}>`);

  return res.status(201).json({
    message: `Thank you, ${entry.name.split(" ")[0]}! Your message has been received. We'll get back to you shortly.`,
    id: entry.id,
  });
});

// Optionally serve the built frontend in production.
const clientDist = path.join(__dirname, "..", "client", "dist");
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  // SPA fallback for client-side routing (Express 5 friendly).
  app.use((req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api")) return next();
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`CarbonCanopy API running on http://localhost:${PORT}`);
});
