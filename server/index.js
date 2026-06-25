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

const SYSTEM_PROMPT = `You are the CarbonCanopy Solutions helpbot. CarbonCanopy Solutions is an East Africa-based company specialising in:
- Carbon project development and management (Verra/VCS, Gold Standard, Plan Vivo, ART/TREES, CCB, CDM standards)
- Forestry and landscaping services
- Agroforestry solutions
- Projects portfolio management
- Climate-smart consulting

Company contact: carboncanopy@hotmail.com | 0705686479 | 0100635001

Answer questions about the company, carbon markets, forestry, and agroforestry helpfully and concisely. If a question is unrelated to the company or environment, politely redirect. Keep answers under 3 sentences unless more detail is needed.`;

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
