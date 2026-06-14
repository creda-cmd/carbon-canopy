import Icon from "./Icon";
import Reveal from "./Reveal";

// A detailed service group card: icon + title + bulleted list.
// `wide` lays the card out full-width with the items in multiple columns.
export default function ServiceGroup({ group, delay = 0, wide = false }) {
  return (
    <Reveal
      delay={delay}
      className="h-full rounded-xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="mb-4 flex items-center gap-3.5">
        <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-gradient-to-br from-forest-400 to-forest-600 text-white">
          <Icon name={group.icon} className="h-6 w-6" />
        </span>
        <h3 className="m-0 text-[1.12rem]">{group.title}</h3>
      </div>
      <ul className={`m-0 list-none p-0 ${wide ? "sm:columns-2 lg:columns-3 sm:gap-x-8" : ""}`}>
        {group.items.map((item) => (
          <li
            key={item}
            className="leaf-bullet break-inside-avoid border-b border-dashed border-line py-1.5 text-[0.94rem] last:border-0"
          >
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
