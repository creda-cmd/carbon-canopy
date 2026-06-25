import useSeo from "../hooks/useSeo";
import CategoryServices from "../components/CategoryServices";
import { carbonGroups } from "../data/site";

export default function CarbonProjects() {
  useSeo(
    "Carbon Projects",
    "Carbon project development services: feasibility, baselines, PDD, MRV, validation & verification, registration (Verra, Gold Standard, ART/TREES, Plan Vivo), GIS, and carbon finance advisory."
  );

  return (
    <div className="bg-forest-100">
      <CategoryServices groups={carbonGroups} />
    </div>
  );
}
