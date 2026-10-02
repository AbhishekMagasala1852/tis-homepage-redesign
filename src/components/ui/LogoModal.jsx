import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function LogoModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/80 backdrop-blur-md p-5"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close logo preview"
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-card text-fg border border-accent/30 transition-all hover:scale-110 hover:bg-accent hover:text-bg"
          >
            <X size={22} />
          </button>

          {/* Logo container */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.7, opacity: 0, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[85vh] max-w-[90vw] items-center justify-center rounded-3xl border-2 border-accent/40 bg-white p-8 shadow-[0_30px_80px_-20px_rgba(184,247,161,0.5)]"
          >
            <img
              src="/logo.png"
              alt="Tulas International School Logo"
              className="h-auto max-h-[70vh] w-auto max-w-full object-contain"
            />

            {/* Bottom caption */}
            <p className="absolute -bottom-8 left-0 right-0 text-center font-display text-sm italic text-accent">
              Tulas International School
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}