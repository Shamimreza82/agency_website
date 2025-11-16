import Link from "next/link";

export default function Button({maintext, hovertext, href}: {maintext?: string, hovertext?: string, href?: string }) {
  return (
    <Link href={href || "#"}>
    <button className="relative flex items-center gap-3 bg-primary rounded-full px-6 py-3 font-semibold overflow-hidden group transition-all">
      
      {/* Normal Text */}
      <span className="text-secondary transition-all duration-500 transform group-hover:-translate-y-6 group-hover:opacity-0">
        {maintext || "Get Started"}
      </span>

      {/* Hover Text */}
      <span className="text-secondary absolute left-6 transition-all duration-500 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        {hovertext || "Book a call"}
      </span>

      {/* Circle Icon */}
      <span className="flex items-center justify-center bg-black text-white rounded-full w-7 h-7 transition-all duration-500 transform group-hover:translate-x-1 group-hover:rotate-45">
        →
      </span>
    </button>
    </Link>
  );
}