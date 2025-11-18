// components/BouncingArrow.tsx
export default function BouncingArrow() {
  return (
    <span className="relative inline-block group">
      {/* Arrow */}
      <span
        className="
          inline-block
          animate-bounceArrow
          text-xl text-primary
          transition-all duration-500
          group-hover:rotate-180
          group-hover:scale-110
          group-hover:opacity-80
        "
      >
        ⬇
      </span>

      {/* Spark */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-1 bg-yellow-400 rounded-full opacity-0 animate-spark"></span>
    </span>
  );
}
