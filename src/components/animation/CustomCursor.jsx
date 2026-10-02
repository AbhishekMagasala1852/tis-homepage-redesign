import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e) => setActive(Boolean(e.target.closest("a, button")));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: active ? 2.4 : 1, opacity: active ? 0.5 : 1 }}
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-50 h-6 w-6 rounded-full border-2 border-accent mix-blend-difference"
    />
  );
}
