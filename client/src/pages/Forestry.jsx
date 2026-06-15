import useSeo from "../hooks/useSeo";
import CategoryServices from "../components/CategoryServices";
import { forestryGroups } from "../data/site";

export default function Forestry() {
  useSeo(
    "Forestry & Landscaping",
    "Forestry, landscaping & nursery services: indigenous seed & seedling supply, nursery establishment, reforestation & restoration, landscaping, ornamentals, and environmental conservation."
  );

  return <CategoryServices groups={forestryGroups} />;
}
