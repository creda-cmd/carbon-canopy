import { Link } from "react-router-dom";
import useSeo from "../hooks/useSeo";
import Icon from "../components/Icon";

export default function NotFound() {
  useSeo("Page Not Found", "The page you are looking for could not be found.");
  return (
    <section className="hero-gradient flex min-h-[70vh] items-center text-center text-forest-100">
      <div className="container-cc">
        <p className="font-head text-7xl font-extrabold text-sage-300">404</p>
        <h1 className="mt-2 text-3xl text-white md:text-4xl">This trail leads nowhere</h1>
        <p className="mx-auto mt-3 max-w-md text-forest-100">
          The page you're looking for may have been moved or no longer exists.
        </p>
        <Link to="/" className="btn btn-primary mt-7">
          Back to Home <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
