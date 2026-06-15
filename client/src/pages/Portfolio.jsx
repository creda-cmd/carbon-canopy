import useSeo from "../hooks/useSeo";
import CategoryServices from "../components/CategoryServices";
import { portfolioGroups } from "../data/site";

export default function Portfolio() {
  useSeo(
    "Projects Portfolio",
    "CarbonCanopy Solutions delivers end-to-end project development, management, MERL, safeguards, GIS, and fundraising support across carbon, forestry, agroforestry, and environmental sectors."
  );

  return <CategoryServices groups={portfolioGroups} />;
}
