import express from "express";
import cors from "cors";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env manually if present (no dotenv dependency needed)
try {
  const envPath = path.join(__dirname, ".env");
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf8").split("\n");
    for (const line of lines) {
      const [key, ...rest] = line.trim().split("=");
      if (key && rest.length) process.env[key.trim()] = rest.join("=").trim();
    }
  }
} catch { /* ignore */ }
const app = express();
const PORT = process.env.PORT || 5000;

const GMAIL_USER = process.env.GMAIL_USER || "";
const GMAIL_PASS = process.env.GMAIL_PASS || "";

const mailer = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: { user: GMAIL_USER, pass: GMAIL_PASS },
  tls: { ciphers: "SSLv3" },
});

app.use(cors());
app.use(express.json());

const company = {
  name: "CarbonCanopy Solutions",
  phones: ["0705686479", "0100635001"],
  email: "carboncanopy@hotmail.com",
  motto: "Restoring Landscapes. Creating Carbon Value. Empowering Communities.",
};

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_PROMPT = `You are the official helpbot for CarbonCanopy Solutions. Answer questions helpfully and concisely based on the information below. If a question is unrelated to the company or environment, politely redirect.

== COMPANY ==
Name: CarbonCanopy Solutions
Location: Kenya
Motto: Restoring Landscapes. Creating Carbon Value. Empowering Communities.
Tagline: Growing Climate Solutions Naturally
Email: carboncanopy@hotmail.com
Phones: 0705686479 | 0100635001

Vision: To be a leading provider of innovative carbon, forestry, and climate-smart solutions that restore landscapes, improve livelihoods, and contribute to a sustainable future.
Mission: To deliver high-quality carbon project development, forestry, agroforestry, and environmental consulting services that help communities, organizations, and investors create measurable climate, environmental, and socio-economic impacts while promoting sustainable land management and ecosystem restoration.

== CORE VALUES ==
Sustainability, Integrity, Innovation, Excellence, Environmental Stewardship, Community Empowerment, Collaboration, Impact-Driven, Professionalism, Accountability.

== CARBON PROJECT DEVELOPMENT SERVICES ==
Feasibility assessments, baseline assessments, PDD development, carbon due diligence, evidence documentation, MRV system design, stakeholder engagement & FPIC, validation & verification support, carbon registration (Verra VCS, Gold Standard, ART/TREES, Plan Vivo, CCB), GIS & remote sensing, carbon finance & market advisory, SDG alignment, capacity building & training, ARR project design, agroforestry carbon development.

Carbon Standards: Verra VCS, VM0047 ARR Methodology, VM0042 Methodology, CCB, Gold Standard, ART/TREES, Plan Vivo, ISO 14064 Frameworks.

== FORESTRY, LANDSCAPING & NURSERY SERVICES ==
Indigenous tree seed & seedling supply, tree propagation & nursery management, reforestation & restoration, landscaping (residential, commercial, institutional, hotels), ornamental plants & flower services, environmental conservation, technical advisory & training.

== AGROFORESTRY & AGRICULTURE SERVICES ==
Agroforestry system design, fruit tree production & management (Mango, Avocado, Citrus, Cashew, Macadamia, Passion Fruit, Guava, etc.), agroforestry tree propagation & supply (Moringa, Gliricidia, Calliandra, Leucaena, Grevillea, etc.), pest & disease management, Integrated Pest Management (IPM), climate-smart agriculture advisory, farmer training & capacity building, farm monitoring & technical support.

== PROJECT PORTFOLIO SERVICES ==
Project development & management, MERL (Monitoring, Evaluation, Reporting & Learning), environmental & social safeguards (ESIA, EMP, GRM, FPIC, gender assessments), GIS & spatial analysis, climate change & carbon projects, forestry & agroforestry projects, agricultural development, proposal & fundraising support, documentation & knowledge management.

Sectors: Carbon Markets, Forestry & Restoration, Agroforestry, Climate Change, Agriculture, Biodiversity Conservation, Sustainable Land Management, Community Development.

== OUR APPROACH (7 Steps) ==
1. Assess — Evaluate landscape potential and baseline conditions
2. Design — Develop comprehensive project frameworks and methodology
3. Implement — Execute restoration and carbon activities on the ground
4. Monitor — Track progress with real-time data collection
5. Verify — Validate results through rigorous third-party assessment
6. Report — Document outcomes and generate verified carbon credits
7. Scale — Expand successful models across landscapes and regions

Keep answers concise (under 4 sentences) unless the user asks for detail.`;

// Gemini chat endpoint
app.post("/api/chat", async (req, res) => {
  const { message, history = [] } = req.body || {};
  if (!message) return res.status(400).json({ error: "Message is required." });
  if (!GEMINI_API_KEY) return res.status(503).json({ error: "AI service not configured. Please add your GEMINI_API_KEY." });

  try {
    const contents = [
      { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
      { role: "model", parts: [{ text: "Understood! I'm the CarbonCanopy helpbot. How can I help you?" }] },
      ...history.map((m) => ({ role: m.from === "user" ? "user" : "model", parts: [{ text: m.text }] })),
      { role: "user", parts: [{ text: message }] },
    ];

    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Gemini error:", err);
      return res.status(502).json({ error: "AI service error. Please try again." });
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
    return res.json({ reply });
  } catch (err) {
    console.error("Chat error:", err.message);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

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

  // Send auto-reply to client
  if (GMAIL_USER && GMAIL_PASS) {
    const autoReply = {
      from: `"CarbonCanopy Solutions" <${GMAIL_USER}>`,
      to: entry.email,
      subject: `Thank you for contacting CarbonCanopy Solutions`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden">
          <div style="background:#1a3d2b;padding:24px 32px">
            <h1 style="color:#a3e635;margin:0;font-size:20px">CarbonCanopy Solutions</h1>
            <p style="color:#9ca3af;margin:4px 0 0;font-size:13px">Restoring Landscapes. Creating Carbon Value. Empowering Communities.</p>
          </div>
          <div style="padding:32px">
            <h2 style="color:#1a3d2b;font-size:18px">Hello ${entry.name.split(" ")[0]},</h2>
            <p style="color:#374151;line-height:1.7">Thank you for reaching out to us. We have received your enquiry and a member of our team will get back to you shortly.</p>
            <div style="background:#f3f4f6;border-left:4px solid #a3e635;padding:16px 20px;border-radius:4px;margin:24px 0">
              <p style="margin:0;color:#6b7280;font-size:13px"><strong>Your message:</strong></p>
              <p style="margin:8px 0 0;color:#374151;font-size:14px">${entry.message}</p>
            </div>
            <p style="color:#374151;line-height:1.7">In the meantime, feel free to explore our services or contact us directly:</p>
            <p style="color:#374151;font-size:14px">📞 0705686479 / 0100635001<br>📧 ${GMAIL_USER}</p>
          </div>
          <div style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb">
            <p style="color:#9ca3af;font-size:12px;margin:0">© ${new Date().getFullYear()} CarbonCanopy Solutions. All rights reserved.</p>
          </div>
        </div>
      `,
    };
    mailer.sendMail(autoReply).catch((err) => console.error("Auto-reply failed:", err.message));

    // Notify yourself of the new enquiry
    const notify = {
      from: `"CarbonCanopy Solutions" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      subject: `New enquiry from ${entry.name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px">
          <h2 style="color:#1a3d2b">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:8px;font-weight:bold;color:#374151">Name</td><td style="padding:8px;color:#374151">${entry.name}</td></tr>
            <tr style="background:#f9fafb"><td style="padding:8px;font-weight:bold;color:#374151">Email</td><td style="padding:8px;color:#374151">${entry.email}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#374151">Phone</td><td style="padding:8px;color:#374151">${entry.phone || "—"}</td></tr>
            <tr style="background:#f9fafb"><td style="padding:8px;font-weight:bold;color:#374151">Service</td><td style="padding:8px;color:#374151">${entry.service || "—"}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#374151">Message</td><td style="padding:8px;color:#374151">${entry.message}</td></tr>
            <tr style="background:#f9fafb"><td style="padding:8px;font-weight:bold;color:#374151">Received</td><td style="padding:8px;color:#374151">${entry.receivedAt}</td></tr>
          </table>
        </div>
      `,
    };
    mailer.sendMail(notify).catch((err) => console.error("Notify email failed:", err.message));
  }

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
