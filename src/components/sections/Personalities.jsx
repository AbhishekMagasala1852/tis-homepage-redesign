import { motion } from "framer-motion";
import { people } from "../../data/content";

export default function Personalities() {
  // Duplicate the list so the marquee loops seamlessly
  const looped = [...people, ...people];

  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-extrabold sm:text-5xl"
        >
          Influential personalities on campus
        </motion.h2>
        <p className="mt-3 text-muted">Swipe to see more.</p>
      </div>

      {/* Marquee track */}
      <div className="relative mt-10">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-bg to-transparent" />

        <motion.ul
          className="flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {looped.map((p, i) => (
            <motion.li
              key={`${p.name}-${i}`}
              whileHover={{ y: -10, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group min-w-72 max-w-72 shrink-0 rounded-3xl border border-accent/20 bg-card p-6 transition-shadow duration-300 hover:border-accent/60 hover:shadow-[0_20px_50px_-15px_rgba(184,247,161,0.35)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-accent font-display text-2xl font-extrabold text-bg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                {p.name[0]}
              </span>
              <h3 className="mt-4 font-display text-xl font-extrabold text-accent transition-all duration-300 group-hover:translate-x-1">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{p.note}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}