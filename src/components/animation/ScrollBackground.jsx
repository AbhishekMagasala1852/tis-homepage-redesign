import { useEffect, useRef } from "react";

// 40 frames in public/ named ezgif-frame-001.jpg through ezgif-frame-040.jpg
const TOTAL_FRAMES = 40;
const pad = (n) => String(n).padStart(3, "0");
const FRAME_PATHS = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `/ezgif-frame-${pad(i + 1)}.jpg`
);

export default function ScrollBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const frames = FRAME_PATHS.map((src) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
      return img;
    });

    let firstReady = false;
    frames[0].onload = () => {
      firstReady = true;
      paintFrame(0);
    };

    function resizeCanvas() {
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
    }

    function paintFrame(index) {
      const img = frames[index];
      if (!img || !img.complete || !img.naturalWidth) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (reduceMotion) {
      const readyInterval = setInterval(() => {
        if (firstReady) {
          clearInterval(readyInterval);
          paintFrame(0);
        }
      }, 50);
      return () => {
        clearInterval(readyInterval);
        window.removeEventListener("resize", resizeCanvas);
      };
    }

    let currentIndex = -1;
    let ticking = false;

    function frameIndexForScroll() {
      const doc = document.documentElement;
      const scrollTop = window.pageYOffset || doc.scrollTop || 0;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      const clamped = Math.min(1, Math.max(0, progress));
      return Math.round(clamped * (TOTAL_FRAMES - 1));
    }

    function update() {
      ticking = false;
      const idx = frameIndexForScroll();
      if (idx !== currentIndex) {
        currentIndex = idx;
        paintFrame(idx);
      }
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const waitReady = setInterval(() => {
      if (firstReady) {
        clearInterval(waitReady);
        update();
      }
    }, 50);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(waitReady);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="scroll-bg-canvas" />;
}