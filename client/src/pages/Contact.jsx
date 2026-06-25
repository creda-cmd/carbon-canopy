import { useState } from "react";
import useSeo from "../hooks/useSeo";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { company, serviceCategories } from "../data/site";

const initial = { name: "", email: "", phone: "", service: "", message: "" };
const API_BASE = import.meta.env.VITE_API_URL || "";

export default function Contact() {
  useSeo(
    "Contact Us",
    "Contact CarbonCanopy Solutions — call 0705686479 / 0100635001 or email carboncanopy@hotmail.com to discuss your carbon, forestry, or agroforestry project."
  );

  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "" });
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus({
        state: "success",
        msg:
          data.message ||
          `Thank you, ${form.name.split(" ")[0] || "there"}! Your message has been received. We'll be in touch shortly.`,
      });
      setForm(initial);
    } catch {
      setStatus({
        state: "error",
        msg:
          "We couldn't reach the server right now. Please call or email us directly and we'll respond promptly.",
      });
    }
  };

  return (
    <>
      <section className="section bg-forest-100">
        <div className="container-cc grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <Reveal>
            <span className="eyebrow mb-3">Get in Touch</span>
            <h2 className="text-3xl">Talk to a CarbonCanopy specialist</h2>
            <p className="mt-3 text-muted">
              Whether you're a community, organization, or investor, we'd love to hear about your goals and
              explore how we can help you create measurable climate and environmental impact.
            </p>

            <div className="mt-6">
              {company.phones.map((p) => (
                <div key={p} className="flex items-start gap-4 border-b border-line py-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-forest-50 text-forest-700">
                    <Icon name="phone" className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="m-0 text-base">Call us</h4>
                    <a href={`tel:${p}`} className="text-muted hover:text-forest-700">
                      {p}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 border-b border-line py-4">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-forest-50 text-forest-700">
                  <Icon name="mail" className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="m-0 text-base">Email us</h4>
                  <a href={`mailto:${company.email}`} className="break-all text-muted hover:text-forest-700">
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <Icon name="whatsapp" className="h-6 w-6" />
                </span>
                <div>
                  <h4 className="m-0 text-base">WhatsApp</h4>
                  <a
                    href={`https://wa.me/${company.phones[0].replace(/^0/, "254")}?text=${encodeURIComponent("Hello CarbonCanopy Solutions, I'd like to enquire about your services.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <form
              id="contact-form"
              onSubmit={submit}
              className="rounded-xl bg-forest-100 p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-head text-sm font-semibold text-forest-800">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                    className="field-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-head text-sm font-semibold text-forest-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    required
                    className="field-input"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block font-head text-sm font-semibold text-forest-800">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value.replace(/\D/g, "") }))}
                    required
                    className="field-input"
                    placeholder="e.g. 0712345678"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block font-head text-sm font-semibold text-forest-800">
                    Service of interest
                  </label>
                  <select id="service" name="service" value={form.service} onChange={update} className="field-input">
                    <option value="">Select a service</option>
                    {serviceCategories.map((c) => (
                      <option key={c.slug} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-1.5 block font-head text-sm font-semibold text-forest-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={update}
                  required
                  rows={5}
                  className="field-input resize-y"
                  placeholder="Tell us about your project or enquiry…"
                />
              </div>

              <button type="submit" disabled={status.state === "loading"} className="btn btn-primary mt-5 w-full">
                {status.state === "loading" ? "Sending…" : "Send Message"}
                {status.state !== "loading" && <Icon name="arrow" className="h-4 w-4" />}
              </button>

              {status.state === "success" && (
                <p className="mt-4 rounded-[10px] bg-forest-50 px-4 py-3 font-medium text-forest-700">
                  {status.msg}
                </p>
              )}
              {status.state === "error" && (
                <p className="mt-4 rounded-[10px] bg-amber-50 px-4 py-3 font-medium text-amber-800">
                  {status.msg}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
