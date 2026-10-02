import { programs, programsTitle } from "../../data/content";
import Reveal from "../ui/Reveal";

export default function Programs() {
  return (
    <section id="programs" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">{programsTitle}</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className={i % 2 ? "sm:mt-10" : ""}>
              <article className="h-full rounded-3xl bg-card p-7 transition-transform duration-300 hover:-translate-y-1">
                <h3 className="font-display text-2xl font-extrabold text-accent">{p.title}</h3>
                <p className="mt-3 text-muted">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}