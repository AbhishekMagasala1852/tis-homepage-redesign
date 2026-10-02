import { motion } from "framer-motion";
import { tagline } from "../../data/content";

export default function Marquee() {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-accent/20 py-4">
      <motion.div
        className="flex w-max gap-10 font-sans text-3xl font-bold italic tracking-widest text-accent/80 sm:text-5xl"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items].map((k, i) => (
          <span key={i} className="whitespace-nowrap">{tagline} &bull;</span>
        ))}
      </motion.div>
    </div>
  );
}