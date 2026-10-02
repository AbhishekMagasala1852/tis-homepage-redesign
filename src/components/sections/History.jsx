import { motion } from "framer-motion";
import { X, BookOpen, Compass, Users, Sparkles } from "lucide-react";

const storyBlocks = [
  {
    icon: <BookOpen size={28} />,
    title: "2004 — The Foundation",
    text: "Sunil Kumar Jain (Founder, Chairman) stepped into the world of education, driven by a belief that every student deserved more than just a classroom—they deserved a stage to grow, dream, and thrive. His journey began in 2004 with the Rishabh Trust under which Tulas Institute was founded in 2006.",
  },
  {
    icon: <Compass size={28} />,
    title: "A Vision for Dehradun",
    text: "But even as the corridors of Tulas Institute echoed with the aspirations of countless students, Mr. Jain felt there was more to be done. Dehradun had long been a hub for learning, yet he envisioned something different: a school that didn't just educate but inspired.",
  },
  {
    icon: <Users size={28} />,
    title: "2012 — The Inception",
    text: "In 2012, he turned that dream into reality with the inception of Tulas International School. A co-educational, vegetarian boarding school—rare at the time—that challenged the norms and placed balance at its core.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "The Next Generation",
    text: "As the school grew, so did the dream. Raunak Jain (Vice Chairman) brought a global lens from Royal Holloway University of London, while Silky Jain Marwah (Executive Director)—an alumna of Symbiosis, Harvard and Oxford—wove in creativity, leadership, and innovation.",
  },
];

export default function History({ onClose }) {
  return (
    <motion.section
      id="history"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative border-t border-accent/20 scroll-mt-32"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close history"
        className="absolute right-5 top-5 z-30 grid h-10 w-10 place-items-center rounded-full bg-bg/80 text-fg backdrop-blur transition-all hover:scale-110 hover:bg-accent hover:text-bg"
      >
        <X size={20} />
      </button>

      {/* Animated Hero Image */}
      <div className="relative h-72 w-full overflow-hidden sm:h-[28rem]">
        <motion.img
          src="/history-hero.jpg"
          alt="Our History"
          className="absolute inset-0 h-full w-full object-cover brightness-50"
          initial={{ scale: 1.3, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-bg/90" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-3xl font-extrabold text-white sm:text-5xl"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.7)" }}
          >
            History connects the past, present & future.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-2 font-display text-xl italic text-accent"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
          >
            Our History
          </motion.p>
        </div>
      </div>

      {/* Story Cards */}
      <div className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, textShadow: "0 8px 32px rgba(184,247,161,0.4)" }}
            className="mb-12 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl cursor-default"
          >
            Flip The Pages of Our Inception Story
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {storyBlocks.map((block, i) => (
              <motion.article
                key={block.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(184,247,161,0.15)",
                  borderColor: "rgba(184,247,161,0.6)",
                }}
                className="group relative rounded-3xl border border-accent/20 bg-card p-7 transition-colors duration-300"
              >
                {/* Glow effect on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                     style={{ background: "radial-gradient(circle at 50% 0%, rgba(184,247,161,0.08), transparent 70%)" }} />

                <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-bg group-hover:scale-110 group-hover:rotate-6">
                  {block.icon}
                </div>
                <h3 className="relative font-display text-xl font-extrabold text-accent transition-all duration-300 group-hover:translate-x-1">
                  {block.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  {block.text}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Closing Quote */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.03, color: "#d8ffc9" }}
            className="mt-16 text-center font-display text-2xl italic text-accent sm:text-3xl cursor-default"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
          >
            "Today, Tulas International School stands as a testament to the
            power of vision and collaboration across generations."
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}