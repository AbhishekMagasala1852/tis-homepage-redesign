import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { rankings } from "../../data/content";

const icons = [
  <Trophy size={22} />,
  <Award size={22} />,
  <Star size={22} />,
  <Medal size={22} />,
];

export default function Rankings() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
            Ranked among the best
          </h2>
          <p className="mt-3 text-muted">
            Co-educational boarding school rankings.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {rankings.map((r, i) => (
            <motion.article
              key={r.where}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 30px 60px -20px rgba(184,247,161,0.35)",
                borderColor: "rgba(184,247,161,0.6)",
              }}
              className="group relative h-full overflow-hidden rounded-3xl border border-accent/20 bg-card p-6 transition-colors duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Radial glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(184,247,161,0.15), transparent 65%)",
                }}
              />

              {/* Icon badge */}
              <div className="relative mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-bg group-hover:scale-110 group-hover:rotate-6">
                {icons[i % icons.length]}
              </div>

              {/* Rank number */}
              <p className="relative font-display text-5xl font-extrabold text-accent transition-transform duration-300 group-hover:scale-110">
                {r.rank}
              </p>

              {/* Location */}
              <p className="relative mt-2 font-medium transition-all duration-300 group-hover:translate-x-1">
                {r.where}
              </p>

              {/* Source */}
              <p className="relative text-sm text-muted">{r.by}</p>

              {/* Bottom accent line */}
              <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}