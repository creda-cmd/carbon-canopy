import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatContact from "./components/FloatContact";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CarbonProjects from "./pages/CarbonProjects";
import Forestry from "./pages/Forestry";
import Agroforestry from "./pages/Agroforestry";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/carbon-projects" element={<CarbonProjects />} />
          <Route path="/forestry-landscaping" element={<Forestry />} />
          <Route path="/agroforestry" element={<Agroforestry />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatContact />
    </div>
  );
}
