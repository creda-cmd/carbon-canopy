import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { company } from "../data/site";

export default function CTABand({
  title = "Let's grow climate solutions together",
  text = "Partner with CarbonCanopy Solutions to develop high-integrity carbon projects, restore landscapes, and create lasting value for people and nature.",
}) {
  return (
    <section className="section">
      <div className="container-cc">
        <Reveal className="cta-gradient rounded-3xl px-8 py-14 text-center shadow-lg sm:px-14">
          <h2 className="text-2xl text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-forest-100">{text}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <Link to="/contact" className="btn btn-light">
              Contact Us
            </Link>
            <a href={`tel:${company.phones[0]}`} className="btn btn-primary">
              Call {company.phones[0]}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
