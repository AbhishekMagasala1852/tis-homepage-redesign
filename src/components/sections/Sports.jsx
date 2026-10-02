import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sportsData, email } from "../../data/content";

// Emoji icons for each sport (safe — no image files needed)
const sportEmoji = {
  Archery: "🏹",
  Cycling: "🚴",
  Hockey: "🏑",
  Swimming: "🏊",
  Taekwondo: "🥋",
  Football: "⚽",
  "Shooting Range": "🎯",
  "Horse Riding": "🐎",
  "Billiards & Snooker": "🎱",
  "Squash (Indoor)": "🎾",
  Volleyball: "🏐",
  "Basketball (Synthetic)": "🏀",
  Cricket: "🏏",
  "Lawn Tennis": "🎾",
  Badminton: "🏸",
  "Table Tennis": "🏓",
};

export default function Sports() {
  const [picked, setPicked] = useState(sportsData[0]);
  const subject = encodeURIComponent(`Sports enquiry: ${picked.name}`);
  const emoji = sportEmoji[picked.name] || "🏅";

  return (
    <section id="beyond" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-extrabold sm:text-5xl"
        >
          Pick your sport
        </motion.h2>
        <p className="mt-3 text-muted">
          16+ sports on one campus. Choose one to read more.
        </p>

        {/* Sport buttons */}
        <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Sports">
          {sportsData.map((s) => {
            const isActive = picked.name === s.name;
            return (
              <motion.button
                key={s.name}
                onClick={() => setPicked(s)}
                aria-pressed={isActive}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "border-accent bg-accent text-bg shadow-[0_10px_30px_-8px_rgba(184,247,161,0.6)]"
                    : "border-accent/40 text-muted hover:border-accent hover:text-accent hover:shadow-[0_8px_20px_-8px_rgba(184,247,161,0.35)]"
                }`}
              >
                <span className="mr-2">{sportEmoji[s.name]}</span>
                {s.name}
              </motion.button>
            );
          })}
        </div>

        {/* Description card */}
        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={picked.name}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-accent/20 bg-card p-8 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-accent/60 hover:shadow-[0_30px_80px_-20px_rgba(184,247,161,0.35)]"
            >
              {/* Radial glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 20% 0%, rgba(184,247,161,0.12), transparent 60%)",
                }}
              />

              {/* Big emoji badge */}
              <div className="relative flex items-center gap-5">
                <motion.div
                  key={`${picked.name}-badge`}
                  initial={{ rotate: -20, scale: 0.6, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-accent/10 text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                >
                  {emoji}
                </motion.div>

                <h3 className="font-display text-3xl font-extrabold text-accent sm:text-4xl">
                  {picked.name}
                </h3>
              </div>

              <p className="relative mt-5 max-w-3xl leading-relaxed text-muted">
                {picked.desc}
              </p>

              <a
                href={`mailto:${email}?subject=${subject}`}
                className="relative mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-bg"
              >
                Ask admissions about {picked.name}
                <span aria-hidden="true">→</span>
              </a>

              {/* Bottom accent line */}
              <motion.span
                className="absolute bottom-0 left-0 h-[3px] bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}