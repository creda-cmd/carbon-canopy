import { Link } from "react-router-dom";
import Icon from "./Icon";
import { company, navLinks } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="forest-gradient pt-16 text-forest-100">
      <div className="container-cc grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-4">
            <span className="inline-flex rounded-xl bg-white px-3 py-2 shadow-sm">
              <img src="/img/logo.png" alt="CarbonCanopy Solutions" className="h-12 w-auto" />
            </span>
          </div>
          <p className="text-sm text-forest-100/90">
            Carbon project development, forestry, agroforestry, and climate-smart consulting that restore
            landscapes, create carbon value, and empower communities.
          </p>
          <p className="mt-3 italic text-sage-300">“{company.tagline}”</p>
        </div>

        <div>
          <h4 className="mb-4 text-white">Navigate</h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-white">Working Hours</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Icon name="clock" className="mt-0.5 h-4 w-4 flex-none text-sage-300" />
              <div>
                <p className="font-semibold text-forest-100">Monday – Friday</p>
                <p className="text-forest-100/70">9:00 AM – 5:00 PM</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon name="clock" className="mt-0.5 h-4 w-4 flex-none text-sage-300" />
              <div>
                <p className="font-semibold text-forest-100">Saturday</p>
                <p className="text-forest-100/70">By Appointment Only</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-white">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            {company.phones.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <Icon name="phone" className="mt-0.5 h-4 w-4 flex-none text-sage-300" />
                <a href={`tel:${p}`} className="hover:text-white">{p}</a>
              </li>
            ))}
            <li className="flex items-start gap-2.5">
              <Icon name="mail" className="mt-0.5 h-4 w-4 flex-none text-sage-300" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-cc mt-11">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-forest-100/70 sm:flex-row">
          <p className="m-0">© {year} CarbonCanopy Solutions. All rights reserved.</p>
          <p className="m-0">Built by: <a href="mailto:crda624@gmail.com" className="hover:text-white">crda624@gmail.com</a></p>
          <p className="m-0 italic text-sage-300">{company.motto}</p>
        </div>
      </div>
    </footer>
  );
}
