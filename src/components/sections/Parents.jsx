import { motion } from "framer-motion";
import { parents } from "../../data/content";

export default function Parents() {
  return (
    <section id="parents" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-extrabold sm:text-5xl"
        >
          From the parents
        </motion.h2>
        <p className="mt-3 text-muted">Google reviews, summarised.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {parents.map((p, i) => (
            <motion.figure
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(184,247,161,0.25)",
                borderColor: "rgba(184,247,161,0.6)",
              }}
              className="group relative h-full rounded-3xl border border-accent/30 bg-card p-7 transition-colors duration-300"
            >
              {/* Subtle radial glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 30% 0%, rgba(184,247,161,0.10), transparent 65%)",
                }}
              />

              {/* Quotation mark decorative element */}
              <span
                aria-hidden="true"
                className="absolute right-6 top-4 select-none font-display text-6xl leading-none text-accent/20 transition-colors duration-300 group-hover:text-accent/40"
              >
                "
              </span>

              <blockquote className="relative text-lg leading-relaxed">
                {p.gist}
              </blockquote>

              <figcaption className="relative mt-5 text-sm text-muted">
                <span className="font-medium text-accent transition-all duration-300 group-hover:tracking-wide">
                  {p.name}
                </span>
                , {p.role}
              </figcaption>

              {/* Bottom accent line on hover */}
              <span className="absolute bottom-0 left-7 right-7 h-[2px] origin-left scale-x-0 rounded-full bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}