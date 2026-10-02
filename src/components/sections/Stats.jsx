import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { stats } from "../../data/content";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.4, onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="border-y border-accent/20 px-5 py-14">
      <p className="mx-auto max-w-6xl mb-10 text-lg italic text-muted">
        Tulas International School was established in 2012 under the aegis of
        Rishabh Educational Trust to impart education through seamless
        opportunities.
      </p>
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dd className="font-display text-5xl font-extrabold text-accent">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
            <dt className="mt-1 text-muted">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}