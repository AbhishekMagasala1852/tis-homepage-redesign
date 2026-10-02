import { motion } from "framer-motion";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-9 w-16 items-center rounded-full border border-accent/60 p-1"
      style={{ justifyContent: isDark ? "flex-start" : "flex-end" }}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="grid h-7 w-7 place-items-center rounded-full bg-accent text-sm text-bg"
      >
        {isDark ? "\u263E" : "\u2600"}
      </motion.span>
    </button>
  );
}
