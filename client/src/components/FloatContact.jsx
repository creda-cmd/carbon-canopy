import Icon from "./Icon";
import { company } from "../data/site";

// Floating WhatsApp/call button.
export default function FloatContact() {
  const num = company.phones[0].replace(/^0/, "254");
  return (
    <a
      href={`https://wa.me/${num}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-forest-500 to-forest-600 text-white shadow-lg transition-transform hover:scale-110"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
