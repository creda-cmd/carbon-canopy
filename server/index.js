import express from "express";
import cors from "cors";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";
import Message from "./models/Message.js";
import { Resend } from "resend";

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
const MONGODB_URI = process.env.MONGODB_URI || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

// Connect to MongoDB
if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
} else {
  console.warn("MONGODB_URI not provided - using JSON file fallback");
}

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
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const entry = {
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    phone: phone ? String(phone).slice(0, 50) : "",
    service: service ? String(service).slice(0, 200) : "",
    message: String(message).slice(0, 5000),
  };

  try {
    // Save to MongoDB
    const savedMessage = await Message.create(entry);
    console.log(`New enquiry from ${savedMessage.name} <${savedMessage.email}>`);
  } catch (err) {
    console.error("Failed to save to MongoDB, falling back to JSON:", err.message);
    // Fallback to JSON file if MongoDB fails
    try {
      const dataDir = path.join(__dirname, "data");
      fs.mkdirSync(dataDir, { recursive: true });
      const file = path.join(dataDir, "messages.json");
      const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : [];
      const fallbackEntry = {
        ...entry,
        id: Date.now().toString(36),
        receivedAt: new Date().toISOString(),
      };
      existing.push(fallbackEntry);
      fs.writeFileSync(file, JSON.stringify(existing, null, 2));
      console.log(`Saved to JSON fallback from ${fallbackEntry.name} <${fallbackEntry.email}>`);
    } catch (fallbackErr) {
      console.error("JSON fallback also failed:", fallbackErr.message);
    }
  }

  // Send email notifications using Resend
  if (resend) {
    try {
      // Notify the company of the new enquiry
      await resend.emails.send({
        from: `CarbonCanopy Solutions <onboarding@resend.dev>`,
        to: company.email,
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
              <tr style="background:#f9fafb"><td style="padding:8px;font-weight:bold;color:#374151">Received</td><td style="padding:8px;color:#374151">${new Date().toLocaleString()}</td></tr>
            </table>
          </div>
        `,
      });
      console.log("Notification email sent to company");
    } catch (err) {
      console.error("Email notification failed:", err.message);
    }
  } else {
    console.warn("RESEND_API_KEY not provided - email notifications disabled");
  }

  return res.status(201).json({
    message: `Thank you, ${entry.name.split(" ")[0]}! Your message has been received. We'll get back to you shortly.`,
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
