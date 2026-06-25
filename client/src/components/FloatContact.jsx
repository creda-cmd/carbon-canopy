import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";

const KB = [
  { keys: ["service","offer","provide","do you do","what do"], a: "We offer Carbon Project Development & Management, Forestry & Landscaping, Agroforestry Solutions, Climate-Smart Consulting, and Projects Portfolio management. Visit our Services page for full details." },
  { keys: ["carbon project","start a project","begin","get started","how to"], a: "Getting started is easy! Contact us for a free feasibility consultation. We assess your landscape, define baselines, and guide you through design, implementation, monitoring, verification, and credit issuance." },
  { keys: ["standard","vcs","verra","gold standard","plan vivo","ccb","cdm","art","trees","certification","certified"], a: "We develop and verify projects under Verra (VCS), Gold Standard, Plan Vivo, ART/TREES, CCB, CDM, and other globally recognised carbon certification frameworks." },
  { keys: ["forestry","forest","tree","planting","reforestation","afforestation"], a: "Our Forestry & Landscaping services cover reforestation, afforestation, landscape restoration, urban greening, and sustainable forest management across East Africa." },
  { keys: ["agroforestry","agro","farm","agriculture","crop","farmer"], a: "Our Agroforestry Solutions integrate trees with crops and livestock systems, boosting farm productivity, improving soil health, and generating carbon credits for smallholder farmers." },
  { keys: ["carbon credit","credit","offset","sell","market","price","value"], a: "Carbon credits are generated when your project is verified under an approved standard. We manage the full process — from project design to credit issuance and market linkage — so you can sell credits to global buyers." },
  { keys: ["cost","fee","price","charge","how much","afford","budget"], a: "Project costs vary by size and scope. We offer flexible engagement models including full-service partnerships and consulting retainers. Contact us at carboncanopy@hotmail.com for a tailored quote." },
  { keys: ["contact","reach","email","phone","call","whatsapp","number"], a: "You can reach us at carboncanopy@hotmail.com, call 0705686479 or 0100635001, or fill in the Contact form on our website. We typically respond within 24 hours." },
  { keys: ["location","based","where","office","country","kenya","africa","east africa"], a: "We are based in East Africa and work across the region and beyond on nature-based solutions, carbon markets, and landscape restoration projects." },
  { keys: ["community","local","people","benefit","livelihood","social"], a: "Community engagement is at the heart of our work. We design projects that empower local communities, create sustainable livelihoods, and deliver social co-benefits alongside carbon outcomes." },
  { keys: ["portfolio","project","done","completed","past","example","case study"], a: "We have delivered 250+ projects across East Africa including forest carbon, agroforestry, and landscape restoration. Visit our Projects Portfolio page to explore our work." },
  { keys: ["team","staff","expert","who","people","consultant"], a: "Our team comprises experienced carbon market specialists, foresters, agronomists, ecologists, and community development experts with deep East Africa expertise." },
  { keys: ["monitoring","measure","report","mrv","data","satellite"], a: "We use rigorous MRV (Monitoring, Reporting & Verification) systems including field surveys, satellite imagery, and remote sensing to track project performance and ensure credibility." },
  { keys: ["time","long","duration","how long","timeline","years"], a: "Project timelines vary — carbon projects typically require 2–5 years to first credit issuance depending on the standard and scale. We manage the full timeline on your behalf." },
  { keys: ["climate","environment","impact","emission","co2","greenhouse","global warming"], a: "Our projects directly tackle climate change by sequestering CO₂, restoring degraded landscapes, and creating resilient ecosystems that benefit both people and the planet." },
  { keys: ["hello","hi","hey","good morning","good afternoon","greetings"], a: "Hello! Welcome to CarbonCanopy Solutions. I'm here to help you with questions about our carbon projects, forestry, agroforestry services, or anything else. What would you like to know?" },
  { keys: ["thank","thanks","appreciate","great","awesome","perfect"], a: "You're welcome! Feel free to ask anything else. You can also reach our team directly at carboncanopy@hotmail.com." },
];

const quickFaqs = [
  "What services do you offer?",
  "What carbon standards do you work with?",
  "How do I start a carbon project?",
];

function getBotReply(text) {
  const lower = text.toLowerCase();
  for (const entry of KB) {
    if (entry.keys.some((k) => lower.includes(k))) return entry.a;
  }
  return "That's a great question! For the most accurate answer, please contact our team at carboncanopy@hotmail.com or call 0705686479 — we'd love to help you directly.";
}

export default function FloatContact() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! I'm the CarbonCanopy helpbot. Ask me anything about our services, carbon projects, standards, or how to get started." },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function sendMessage(text) {
    if (!text.trim()) return;
    const reply = getBotReply(text);
    setMessages((m) => [...m, { from: "user", text: text.trim() }, { from: "bot", text: reply }]);
    setInput("");
  }

  function handleFaq(q) { sendMessage(q); }
  function handleSend() { sendMessage(input); }

  return (
    <>
      {/* Chat popup */}
      {open && (
        <div className="fixed bottom-24 right-4 z-[91] flex w-80 flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-forest-100 sm:right-6">
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-forest-700 to-forest-500 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
              <Icon name="sprout" className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">CarbonCanopy Helpbot</p>
              <p className="text-[10px] text-white/70">Ask us anything</p>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/70 hover:text-white">
              <Icon name="chevron" className="h-5 w-5 rotate-180" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-2 overflow-y-auto p-4" style={{ maxHeight: 260 }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <span className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-5 ${m.from === "user" ? "bg-forest-600 text-white rounded-br-sm" : "bg-forest-50 text-forest-900 rounded-bl-sm"}`}>
                  {m.text}
                </span>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* FAQ suggestions */}
          <div className="border-t border-forest-100 px-3 py-2">
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-forest-400">Quick questions</p>
            <div className="flex flex-col gap-1">
              {quickFaqs.map((q) => (
                <button key={q} onClick={() => handleFaq(q)} className="rounded-xl border border-forest-100 bg-forest-50 px-3 py-1.5 text-left text-[11px] font-medium text-forest-700 transition hover:border-lime-400 hover:bg-lime-50">
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="flex gap-2 border-t border-forest-100 px-3 py-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message…"
              className="flex-1 rounded-xl border border-forest-200 bg-forest-50 px-3 py-1.5 text-xs text-forest-900 outline-none focus:border-lime-400"
            />
            <button onClick={handleSend} className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-forest-600 to-lime-400 text-white shadow transition hover:scale-105">
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open helpbot"
        className="fixed bottom-6 right-4 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-forest-600 to-lime-400 text-white shadow-lg transition-transform hover:scale-110 sm:right-6"
      >
        {open
          ? <Icon name="chevron" className="h-6 w-6 rotate-180" />
          : <Icon name="chat" className="h-6 w-6" />
        }
      </button>
    </>
  );
}
