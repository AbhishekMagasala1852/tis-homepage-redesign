# Run INSIDE the tis-homepage-redesign folder:
#   powershell -ExecutionPolicy Bypass -File ..\update-tis-v3.ps1
function W($p, $c) {
  $f = Join-Path $PWD.Path $p
  New-Item -ItemType Directory -Force -Path (Split-Path $f) | Out-Null
  [System.IO.File]::WriteAllText($f, $c)
}

# --- 1. Update DATA with Real TIS Content ---
W "src/data/content.js" @'
export const nav = [
  { label: "About TIS", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Boarding Life", href: "#boarding" },
  { label: "Beyond Academics", href: "#beyond" },
  { label: "Events", href: "#events" },
  { label: "Admission", href: "#enquire" },
  { label: "Mandatory Disclosure", href: "#disclosure" },
  { label: "Alumni Network", href: "#alumni" },
  { label: "Quick Links", href: "#links" },
];

export const applyUrl = "https://admission.tis.edu.in";
export const email = "info@tis.edu.in";
export const phone = { label: "+91-9837983791", href: "tel:+91-9837983791" };
export const tourUrl = "https://tis.edu.in/virtual-tour/";
export const brochureUrl = "https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf";

export const hero = {
  lines: ["Let's DO it", "With Tulas"],
  sub: "A CBSE co-educational school in Dehradun for Classes 4 to 12, built around academics, sports and leadership.",
  cta: "Apply now",
};

export const tagline = "Let's do it with Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.";

export const stats = [
  { value: 22, suffix: "", label: "acre pollution-free campus" },
  { value: 16, suffix: "+", label: "Olympic sports" },
  { value: 24, suffix: "/7", label: "medical assistance" },
  { value: 6, suffix: ":1", label: "student-teacher ratio" },
];

export const programsTitle = "Why parents choose TIS";
export const programs = [
  { title: "CBSE Academics", text: "A robust curriculum designed to challenge and inspire students from Class IV to XII, preparing them for global universities." },
  { title: "Boarding and Day Life", text: "A home away from home with 24/7 care, nutritious meals, and a safe, structured environment for holistic growth." },
  { title: "Sports", text: "16+ Olympic sports with world-class infrastructure, including a velodrome, shooting range, and horse riding arena." },
  { title: "Leadership", text: "We nurture leaders through student councils, community service, and outdoor adventure programs that build character." },
];

export const rankings = [
  { rank: "#1", where: "Dehradun", by: "Education Today" },
  { rank: "#2", where: "Uttarakhand", by: "Education Today" },
  { rank: "#1", where: "North India", by: "Outlook" },
  { rank: "#4", where: "India", by: "Education Today" },
];

export const sportsData = [
  { name: "Archery", desc: "State-of-the-art archery ground with target lanes spread over natural terrain. Expert coaches train students to become professional archers." },
  { name: "Cycling", desc: "First school in Dehradun with a velodrome. Dedicated coaching to produce top cyclists who can represent India internationally." },
  { name: "Hockey", desc: "Dynamic field hockey program with well-maintained fields and experienced coaches, promoting teamwork and discipline." },
  { name: "Swimming", desc: "High-standard swimming centre for beginners and passionate swimmers, essential for fitness and skill development." },
  { name: "Taekwondo", desc: "Korean martial art focusing on kicks, quick reactions, and concentration. Member of Uttarakhand State Taekwondo Association." },
  { name: "Football", desc: "In-house football academy with national-level field. Organizes the prestigious Shri S.D. Jain Memorial Football Tournament." },
  { name: "Shooting Range", desc: "7-lane indoor shooting range for 10M pistol and rifle. Accessible 24/7 under international-level guidance." },
  { name: "Horse Riding", desc: "Equestrian lessons for all levels, including dressage and show jumping. Well-equipped stable with fine horses and ponies." },
  { name: "Billiards & Snooker", desc: "Top-notch facilities for cue sports, developing strategic thinking, precision, and concentration." },
  { name: "Squash (Indoor)", desc: "Two squash courts approved by the World Squash Federation with optimum lighting and flooring." },
  { name: "Volleyball", desc: "World-class volleyball court with lateral forgiveness technology to reduce stress on knees and joints." },
  { name: "Basketball (Synthetic)", desc: "FIBA-approved 8-layer synthetic court with outstanding shock absorption and optimal traction." },
  { name: "Cricket", desc: "Turf and cemented practice nets with night vision facility. State-of-the-art stadium with 1000+ seating capacity." },
  { name: "Lawn Tennis", desc: "ITF-approved 8-layer cushioned synthetic courts providing better grip and preventing injuries." },
  { name: "Badminton", desc: "BWF-approved badminton court with world-class infrastructure for training and competitions." },
  { name: "Table Tennis", desc: "Dedicated indoor arena with tables from top sports houses in India and special sports flooring." },
];

export const people = [
  { name: "Sakshi Malik", note: "Olympic bronze medallist in wrestling, Rio 2016" },
  { name: "Vishesh Bhriguvanshi", note: "Captain of the Indian basketball team" },
  { name: "Abhishek Verma", note: "Arjuna awardee and Asian Games archery gold, 2013" },
  { name: "Aditi Gopichand Swami", note: "Arjuna awardee and archery world champion, 2024" },
  { name: "Ojas Deotale", note: "Arjuna awardee 2023 and archery world champion" },
  { name: "Rajat Chauhan", note: "Arjuna awardee 2016 in archery" },
  { name: "Laxmi Agarwal", note: "Founder of the Laxmi Foundation for acid attack survivors" },
  { name: "Arushi Nishank", note: "Kathak dancer, film producer and TEDx speaker" },
  { name: "Saurabh Joshi", note: "YouTuber with 30 million subscribers" },
];

export const parents = [
  { name: "Tashi Tsering", role: "Father of Jigmet Skaldon", gist: "Thanks the management and teachers for taking good care of his son." },
  { name: "Namita Agarwal", role: "Mother of Krishna Agarwal", gist: "Says sports, academics and activities helped her son know himself better." },
  { name: "Ashu Arora", role: "Mother of Manisha Changrani", gist: "Rates the boarding and infrastructure highly and sees clear progress in her daughter." },
  { name: "Gulabdas Gupta", role: "Father of Annika", gist: "His Class VIII daughter is happy with the teaching, activities and hygiene." },
];

export const classes = ["IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

export const contact = {
  address: "Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)",
  landline: "0135-2699444",
  established: "Established in 2012 under the aegis of Rishabh Educational Trust.",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/tulasinternationalschool/" },
    { label: "Instagram", href: "https://www.instagram.com/tulasinternationalschool/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/school/tulas-international-school/" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw" },
  ],
};
'@

# --- 2. Update Navbar to include Logo & Real Menu ---
W "src/components/layout/Navbar.jsx" @'
import { nav, applyUrl } from "../../data/content";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar({ theme, onToggle }) {
  return (
    <>
      <div className="bg-teal-500 text-center text-sm font-medium text-white py-2">
        <span className="mr-2">📞</span> ADMISSIONS HELPLINE NO. +91-9837983791
        <a href={applyUrl} className="ml-4 rounded-full bg-black px-3 py-1 text-xs text-white">Enquire Now</a>
      </div>
      <header className="sticky top-0 z-40 border-b border-accent/20 bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white overflow-hidden border border-accent/30">
              <span className="font-display text-xs font-bold text-bg">TIS</span>
            </div>
            <a href="#top" className="font-display text-xl font-extrabold hidden sm:block">TIS</a>
          </div>
          <ul className="hidden lg:flex gap-4 text-xs font-medium uppercase tracking-wider">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted transition-colors hover:text-accent">{n.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href={applyUrl} className="hidden sm:block rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-bg">Apply Now</a>
            <ThemeToggle theme={theme} onToggle={onToggle} />
          </div>
        </nav>
      </header>
    </>
  );
}
'@

# --- 3. Update Sports Section with Full Details ---
W "src/components/sections/Sports.jsx" @'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sportsData, email } from "../../data/content";
import Reveal from "../ui/Reveal";

export default function Sports() {
  const [picked, setPicked] = useState(sportsData[0]);
  const subject = encodeURIComponent(`Sports enquiry: ${picked.name}`);

  return (
    <section id="beyond" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Pick your sport</h2>
          <p className="mt-3 text-muted">16+ sports on one campus. Choose one to read more.</p>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-3" role="group" aria-label="Sports">
          {sportsData.map((s) => (
            <button
              key={s.name}
              onClick={() => setPicked(s)}
              aria-pressed={picked.name === s.name}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                picked.name === s.name ? "border-accent bg-accent text-bg" : "border-accent/40 hover:border-accent"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
        <div className="mt-8 min-h-48 rounded-3xl bg-card p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={picked.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="font-display text-3xl font-extrabold text-accent">{picked.name}</h3>
              <p className="mt-3 text-muted leading-relaxed">{picked.desc}</p>
              <a href={`mailto:${email}?subject=${subject}`} className="mt-4 inline-block text-accent underline underline-offset-4">
                Ask admissions about {picked.name}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
'@

# --- 4. Update Enquiry Form to Match Real Site ---
W "src/components/sections/Enquiry.jsx" @'
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
'@

# --- 5. Update App.jsx to include new sections ---
W "src/App.jsx" @'
import { MotionConfig } from "framer-motion";
import useTheme from "./hooks/useTheme";
import ScrollProgress from "./components/animation/ScrollProgress";
import CustomCursor from "./components/animation/CustomCursor";
import Marquee from "./components/animation/Marquee";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Rankings from "./components/sections/Rankings";
import Sports from "./components/sections/Sports";
import Personalities from "./components/sections/Personalities";
import Parents from "./components/sections/Parents";
import Enquiry from "./components/sections/Enquiry";

export default function App() {
  const { theme, toggle } = useTheme();
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Rankings />
        <Sports />
        <Personalities />
        <Parents />
        <Enquiry />
      </main>
      <Footer />
    </MotionConfig>
  );
}
'@

Write-Host "Version 3 Done. Check http://localhost:5173" -ForegroundColor Green