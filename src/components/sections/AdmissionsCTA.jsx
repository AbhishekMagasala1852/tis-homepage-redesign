import Reveal from "../ui/Reveal";
import { applyUrl, phone } from "../../data/content";

export default function AdmissionsCTA() {
  return (
    <section id="admissions" className="px-5 pb-24">
      <Reveal className="mx-auto max-w-6xl rounded-[2rem] bg-accent px-8 py-16 text-bg sm:px-16">
        <h2 className="font-display text-4xl font-extrabold sm:text-6xl">Join TIS.</h2>
        <p className="mt-4 max-w-lg">Admissions helpline: {phone.label}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={applyUrl} className="rounded-full bg-bg px-7 py-3 font-medium text-fg">Apply now</a>
          <a href={phone.href} className="rounded-full border border-bg px-7 py-3 font-medium">Call us</a>
        </div>
      </Reveal>
    </section>
  );
}