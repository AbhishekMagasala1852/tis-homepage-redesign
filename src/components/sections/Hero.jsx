import { motion } from "framer-motion";
import { hero, applyUrl } from "../../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-20 sm:pt-32">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Left Floating Image - Jumping Kids */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -20 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="h-64 w-64 overflow-hidden rounded-full border-4 border-accent/40 shadow-2xl"
          >
            <img
              src="/hero-jump.png"
              alt="Happy students jumping"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right Floating Image - Running Kids */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 20 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="h-64 w-64 overflow-hidden rounded-full border-4 border-accent/40 shadow-2xl"
          >
            <img
              src="/hero-run.png"
              alt="Students running"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Center Content */}
        <div className="relative z-10 text-center lg:text-left lg:pl-72 lg:pr-72">
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] sm:text-7xl lg:text-8xl">
            {hero.lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-2">
                <motion.span
                  className={`block ${i === 1 ? "text-accent" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-lg text-muted mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {hero.sub}
          </motion.p>

          <motion.a
            href={applyUrl}
            className="mt-8 inline-block rounded-full bg-accent px-7 py-3 font-medium text-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            whileTap={{ scale: 0.96 }}
          >
            {hero.cta}
          </motion.a>
        </div>
      </div>
    </section>
  );
}