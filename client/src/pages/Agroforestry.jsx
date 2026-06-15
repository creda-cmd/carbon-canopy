import useSeo from "../hooks/useSeo";
import CategoryServices from "../components/CategoryServices";
import { agroforestryGroups } from "../data/site";

export default function Agroforestry() {
  useSeo(
    "Agroforestry Solutions",
    "Agroforestry & agricultural services: agroforestry design, fruit tree & orchard development, agroforestry tree propagation, IPM, climate-smart agriculture advisory, and farmer training."
  );

  return <CategoryServices groups={agroforestryGroups} />;
}
