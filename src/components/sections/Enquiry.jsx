import { useState } from "react";
import { motion } from "framer-motion";
import { classes, applyUrl, email, phone } from "../../data/content";
import Reveal from "../ui/Reveal";

const modes = ["Boarding", "Day"];

export default function Enquiry() {
  const [cls, setCls] = useState("VI");
  const [mode, setMode] = useState("Boarding");
  const [name, setName] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [mobile, setMobile] = useState("");
  const subject = encodeURIComponent(`Admission enquiry: Class ${cls}, ${mode}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${emailVal}\nMobile: ${mobile}\nClass: ${cls}\nMode: ${mode}`);

  return (
    <section id="enquire" className="px-5 pb-24 pt-10">
      <Reveal className="mx-auto max-w-6xl rounded-[2rem] bg-accent px-6 py-14 text-bg sm:px-16">
        <h2 className="font-display text-4xl font-extrabold sm:text-6xl">Start your enquiry</h2>
        <p className="mt-3">Fill the form below. We will write the email for you.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <input type="text" placeholder="Enter your Full Name..." value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl border-2 border-bg/30 bg-white/50 px-4 py-3 placeholder:text-bg/60 focus:border-bg focus:outline-none" />
          <input type="email" placeholder="Enter Email Id (Optional)" value={emailVal} onChange={(e) => setEmailVal(e.target.value)} className="rounded-xl border-2 border-bg/30 bg-white/50 px-4 py-3 placeholder:text-bg/60 focus:border-bg focus:outline-none" />
          <div className="flex gap-2">
            <span className="flex items-center rounded-xl border-2 border-bg/30 bg-white/50 px-4">+91</span>
            <input type="tel" placeholder="Enter your Mobile No..." value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full rounded-xl border-2 border-bg/30 bg-white/50 px-4 py-3 placeholder:text-bg/60 focus:border-bg focus:outline-none" />
          </div>
          <div className="flex gap-2">
            <button className="rounded-xl bg-bg px-4 py-3 font-medium text-fg">Send OTP</button>
            <input type="text" placeholder="Enter OTP" className="w-full rounded-xl border-2 border-bg/30 bg-white/50 px-4 py-3 placeholder:text-bg/60 focus:border-bg focus:outline-none" />
            <button className="rounded-xl bg-bg px-4 py-3 font-medium text-fg">Verify OTP</button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <select value={cls} onChange={(e) => setCls(e.target.value)} className="rounded-xl border-2 border-bg/30 bg-white/50 px-4 py-3 focus:border-bg focus:outline-none">
            {classes.map((c) => <option key={c} value={c}>Class {c}</option>)}
          </select>
          <select value={mode} onChange={(e) => setMode(e.target.value)} className="rounded-xl border-2 border-bg/30 bg-white/50 px-4 py-3 focus:border-bg focus:outline-none">
            {modes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm">
          <input type="checkbox" id="agree" className="h-4 w-4" />
          <label htmlFor="agree">I agree to receive information regarding my submitted application.</label>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${email}?subject=${subject}&body=${body}`} className="rounded-full bg-bg px-7 py-3 font-medium text-fg">Enquire Now</a>
          <a href={applyUrl} className="rounded-full border-2 border-bg px-7 py-3 font-medium">Apply Online</a>
          <a href={phone.href} className="rounded-full border-2 border-bg px-7 py-3 font-medium">Call {phone.label}</a>
        </div>
      </Reveal>
    </section>
  );
}