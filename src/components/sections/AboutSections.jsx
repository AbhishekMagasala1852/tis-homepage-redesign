import { motion } from "framer-motion";
import { X, Target, Eye, Users, Award, BookOpen, Star, User, Trophy, MapPin, Utensils, Heart, ShieldCheck, GraduationCap, Dumbbell, Home, Phone, Building } from "lucide-react";

/* ============================================================
   WRAPPER
   ============================================================ */
function SectionWrapper({ id, children, onClose }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative border-t border-accent/20 scroll-mt-32"
    >
      <button
        onClick={onClose}
        aria-label="Close section"
        className="absolute right-5 top-5 z-30 grid h-10 w-10 place-items-center rounded-full bg-bg/80 text-fg backdrop-blur transition-all hover:scale-110 hover:bg-accent hover:text-bg"
      >
        <X size={20} />
      </button>
      {children}
    </motion.section>
  );
}

/* ============================================================
   1. VISION & MISSION
   ============================================================ */
export function VisionMission({ onClose }) {
  const values = [
    { icon: <Eye size={26} />, title: "Our Vision", text: "To become a center of excellence and a leader among top educational institutions. We support personal growth, encourage curiosity, and prepare global citizens with strong character." },
    { icon: <Target size={26} />, title: "Our Mission", text: "To help students excel academically and grow as individuals. TIS is dedicated to becoming a benchmark institution, providing quality education and enriching learning experiences." },
    { icon: <Users size={26} />, title: "Equity", text: "TIS offers a supportive environment where students from all backgrounds can reach their potential. We believe every student can succeed with the right opportunities." },
    { icon: <BookOpen size={26} />, title: "Engagement", text: "We create a student-focused environment with a hands-on curriculum that encourages active learning. Our experienced faculty ensures students get the best guidance." },
  ];

  return (
    <SectionWrapper id="vision-mission" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Mission & Vision
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            We aim to inspire purpose and guide students toward endless possibilities.
          </motion.p>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.article key={v.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.15 }} whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(184,247,161,0.15)" }} className="group rounded-3xl border border-accent/20 bg-card p-7">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-bg group-hover:rotate-6">{v.icon}</div>
                <h3 className="font-display text-xl font-extrabold text-accent">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   2. AWARDS
   ============================================================ */
export function Awards({ onClose }) {
  const awards = [
    { year: "2023", items: ["Mr. Raunak Jain — 'Educational Reformer of the Year' by Uttarakhand Swarnim Award.", "Mr. Raman Koushal listed among 'Top 50 Best Educators' by Education Today.", "Mr. Sangeet Bhardwaj — 'Top 100 Influential Educationists in Indian Education'."] },
    { year: "2022", items: ["Ranked No.4 in India, No.2 in Uttarakhand, No.1 in Dehradun by Education Today.", "Principal listed under '50 Effective Principals' by Education Today.", "'Best Co-ed Boarding School in Dehradun' by The Times of India."] },
    { year: "2019", items: ["Ranked No.5 Co-Educational Boarding School in North India by TOI.", "Certified as 'Great Indian Schools' by Forbes.", "'Best Residential School' by Indian School Awards."] },
    { year: "2018", items: ["Ranked No.8 in India, No.2 in Uttarakhand, No.1 in Dehradun by Education Today.", "'Best Residential School in Uttarakhand' by Golden Star Awards.", "'Best International Boarding School' by TV100."] },
    { year: "2017", items: ["'Best International Boarding School in Uttarakhand' by Merit Awards.", "Rated 'A' Grade by CBSE EOA."] },
    { year: "2016", items: ["Ranked No.1 Boarding School in Uttarakhand for Infrastructure by Education Today.", "Chairman received the Dr. APJ Abdul Kalam Award."] },
    { year: "2015", items: ["Chairman Sunil Kumar Jain awarded 'Sardar Vallabh Bhai Patel Rashtriya Ekta Puruskar'.", "Silky Jain recognized as 'Youngest Female Entrepreneur' with certification from Oxford."] },
    { year: "2014", items: ["Launched CSR initiative 'The Tortoise' against child labor.", "Kuldeep Singh secured 3rd in National Taekwondo Championship in Nepal."] },
  ];

  return (
    <SectionWrapper id="awards" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Awards & Achievements
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            We have won various awards for excellence in education and leadership.
          </motion.p>
          <div className="grid gap-6 sm:grid-cols-2">
            {awards.map((a, i) => (
              <motion.article key={a.year} initial={{ opacity: 0, rotateY: 90 }} whileInView={{ opacity: 1, rotateY: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ scale: 1.03 }} className="group rounded-3xl border border-accent/20 bg-card p-7" style={{ transformStyle: "preserve-3d" }}>
                <div className="mb-4 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-bg transition-colors"><Trophy size={22} /></span>
                  <h3 className="font-display text-3xl font-extrabold text-accent">{a.year}</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {a.items.map((item) => (
                    <li key={item} className="flex gap-2"><Star size={14} className="mt-1 shrink-0 text-accent" /><span>{item}</span></li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   3. PRINCIPAL
   ============================================================ */
export function Principal({ onClose }) {
  return (
    <SectionWrapper id="principal" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-3">
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7 }} className="md:col-span-1">
            <div className="sticky top-32">
              <div className="aspect-square overflow-hidden rounded-3xl border-2 border-accent/40 bg-gradient-to-br from-accent/20 to-bg">
                <div className="grid h-full place-items-center"><User size={80} className="text-accent/60" /></div>
              </div>
              <h3 className="mt-6 font-display text-3xl font-extrabold text-accent">Mr. Raman Koushal</h3>
              <p className="text-sm italic text-muted">Principal, Tulas International School</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2 }} className="md:col-span-2">
            <h2 className="mb-6 font-display text-4xl font-extrabold text-accent sm:text-5xl">Principal's Profile</h2>
            <p className="mb-6 italic text-muted">A Principal shapes dreams, building a foundation for lifelong success.</p>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>Mr. Raman Koushal, an illustrious luminary in the domain of education, and a distinguished faculty member within the hallowed halls of our English department. Mr. Koushal transcends the conventional role. He is a paragon of leadership, leading with the highest echelons of excellence.</p>
              <p>His unwavering devotion to our institution, its erudite students, and the erudite faculty, has been pivotal in sculpting the trajectory of our school. His leadership is characterized by an extraordinary fusion of visionary acumen, unwavering zeal, and a boundless commitment to unerring excellence.</p>
              <p>Mr. Koushal himself stands adorned with a plethora of awards and accolades, a testament to his invaluable contributions to the sphere of education. As we commemorate his seven years of indefatigable service, we eagerly anticipate an enduring legacy of his extraordinary stewardship.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   4. MANAGEMENT
   ============================================================ */
export function Management({ onClose }) {
  const leaders = [
    { name: "Mr. Sunil Kumar Jain", role: "Chairman", awards: ["Dr. APJ Kalam Award — 2016", "Sardar Vallabh Bhai Patel Rashtriya Ekta Puruskar — 2015", "Edupreneur Award 2013", "Rajiv Gandhi Shiromani Award — 2010", "Indira Gandhi Sadbhawna Award — 2008"] },
    { name: "Mr. Raunak Jain", role: "Vice Chairman", awards: ["Educational Reformer of the Year — 2023", "Uttarakhand Icon Award", "Molded by Royal Holloway University of London"] },
    { name: "Mrs. Silky Jain Marwah", role: "Executive Director", awards: ["Youngest Female Entrepreneur — 2015", "Leadership certification from Oxford", "Alumna of Symbiosis & Harvard"] },
    { name: "Dr. Raghav Garg", role: "Director", awards: ["Leading voice in educational innovation"] },
  ];

  return (
    <SectionWrapper id="management" onClose={onClose}>
      <div className="py-24">
        <div className="mx-auto max-w-5xl px-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Our Management
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            A strong school management provides the best learning environment for students.
          </motion.p>
        </div>
        <ul className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]">
          {leaders.map((p, i) => (
            <motion.li key={p.name} initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.15 }} whileHover={{ y: -8, scale: 1.02 }} className="min-w-72 max-w-72 snap-start rounded-3xl border border-accent/20 bg-card p-7">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-accent text-bg font-display text-2xl font-extrabold">{p.name.split(" ").slice(-1)[0][0]}</div>
              <h3 className="mt-5 font-display text-xl font-extrabold text-accent">{p.name}</h3>
              <p className="text-sm italic text-muted">{p.role}</p>
              <ul className="mt-5 space-y-2 text-xs text-muted">
                {p.awards.map((a) => (
                  <li key={a} className="flex gap-2"><Award size={12} className="mt-1 shrink-0 text-accent" /><span>{a}</span></li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   5. VIRTUAL TOUR
   ============================================================ */
export function VirtualTour({ onClose }) {
  const spots = ["22-acre Campus", "Boarding Houses", "Sports Grounds", "Science Labs", "Library", "Auditorium", "Dining Hall", "Art Studio"];
  return (
    <SectionWrapper id="virtual-tour" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Virtual Tour
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            Explore the TIS campus without leaving your seat.
          </motion.p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {spots.map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ scale: 1.05, rotate: 1 }} className="group aspect-square overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-bg p-4">
                <div className="grid h-full place-items-center text-center">
                  <MapPin size={28} className="mb-2 text-accent transition-transform group-hover:scale-125" />
                  <p className="text-xs font-medium text-muted">{s}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   6. SCHOLARSHIP
   ============================================================ */
export function Scholarship({ onClose }) {
  const scholarships = [
    { title: "Academic Scholarship", amount: "up to ₹1,50,000", note: "TSA ≥ 95% + Interview" },
    { title: "Sports Scholarship", amount: "up to ₹1,00,000", note: "TSA ≥ 75%" },
  ];
  const concessions = [
    { title: "Sibling Concession", amount: "up to ₹1,00,000" },
    { title: "Serving Defence Personnel", amount: "up to ₹1,00,000" },
    { title: "Single Parent", amount: "up to ₹1,00,000" },
    { title: "Alumni & Alumna Reference", amount: "up to ₹1,00,000" },
  ];

  return (
    <SectionWrapper id="scholarship" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Scholarship Programmes
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            Our scholarships reward hardworking, ambitious students with great potential.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-12 rounded-3xl border border-accent/20 bg-card p-8">
            <h3 className="font-display text-2xl font-extrabold text-accent">Tulas Scholarship Assessment (T.S.A.)</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Two years of academic report card / sports certificates (State &amp; National)</li>
              <li>• Qualify for TSA with 95% + Interview for Academic Scholarship</li>
              <li>• 75% in TSA for Sports Scholarship</li>
              <li>• Interview with Academic Supervisor / Dean of Admission / Head of Sports</li>
            </ul>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2">
            {scholarships.map((s, i) => (
              <motion.article key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.15 }} whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(184,247,161,0.3)", borderColor: "rgba(184,247,161,0.6)" }} className="group rounded-3xl border border-accent/20 bg-card p-7 transition-colors">
                <h4 className="font-display text-xl font-extrabold text-accent">{s.title}</h4>
                <p className="mt-3 font-display text-3xl font-extrabold text-accent/90">{s.amount}</p>
                <p className="mt-2 text-sm text-muted">{s.note}</p>
              </motion.article>
            ))}
          </div>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mt-20 mb-8 font-display text-3xl font-extrabold text-accent">
            Tulas Concession Policy
          </motion.h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {concessions.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ x: 6 }} className="flex items-center justify-between rounded-2xl border border-accent/20 bg-card px-6 py-5">
                <span className="font-medium">{c.title}</span>
                <span className="font-display text-lg font-extrabold text-accent">{c.amount}</span>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mt-12 text-center text-sm italic text-muted">
            Email <a href="mailto:dean.admission@tis.edu.in" className="text-accent underline">dean.admission@tis.edu.in</a> to avail the Tulas Concession Policy.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   7. FEE STRUCTURE
   ============================================================ */
export function FeeStructure({ onClose }) {
  const bankDetails = [
    { label: "Bank Name", value: "Punjab National Bank" },
    { label: "Bank Address", value: "Nehru Colony, Dehradun, Uttarakhand, India" },
    { label: "Account Name", value: "Tulas International School, Dehradun" },
    { label: "Current Account Number", value: "51881131003528" },
    { label: "IFSC Code", value: "PUNB0518810" },
    { label: "MICR Code", value: "248024059" },
    { label: "SWIFT Code", value: "PUNBINBBDPR" },
  ];

  return (
    <SectionWrapper id="fee-structure" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Fee Structure
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            Parents want the best for their kids and our fee structure makes it possible. Academic year 2026–27.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-10 rounded-3xl border border-accent/20 bg-card p-8">
            <h3 className="font-display text-2xl font-extrabold text-accent">Mode of Payment</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>• Fee can be deposited through Demand Draft in favour of <strong className="text-accent">TULAS INTERNATIONAL SCHOOL</strong>, payable at Punjab National Bank, Dehradun.</li>
              <li>• Please mention your ward's name on the reverse of the Demand Draft.</li>
              <li>• Fee can also be deposited via Cheque or Bank Transfer.</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.7 }} whileHover={{ scale: 1.01 }} className="overflow-hidden rounded-3xl border border-accent/20 bg-card">
            <div className="border-b border-accent/20 bg-accent/5 px-8 py-5">
              <h3 className="font-display text-2xl font-extrabold text-accent">Bank Account Details</h3>
              <p className="text-xs text-muted">To deposit the School Fee</p>
            </div>
            <dl className="divide-y divide-accent/10">
              {bankDetails.map((b, i) => (
                <motion.div key={b.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ x: 6, backgroundColor: "rgba(184,247,161,0.05)" }} className="grid grid-cols-1 gap-1 px-8 py-4 sm:grid-cols-[240px_1fr]">
                  <dt className="text-sm font-medium text-accent">{b.label}</dt>
                  <dd className="text-sm text-muted">{b.value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mt-10 text-center text-sm italic text-muted">
            For any questions regarding the fee structure, please contact <a href="mailto:info@tis.edu.in" className="text-accent underline">info@tis.edu.in</a>.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   8. FACILITIES
   ============================================================ */
export function Facilities({ onClose }) {
  const facilities = [
    { icon: <ShieldCheck size={22} />, name: "24/7 Ambulance Service" },
    { icon: <ShieldCheck size={22} />, name: "Safety & Security" },
    { icon: <Dumbbell size={22} />, name: "Sports Activities" },
    { icon: <Users size={22} />, name: "Clubs & Societies" },
    { icon: <BookOpen size={22} />, name: "Modern Classrooms" },
    { icon: <Utensils size={22} />, name: "Healthy Multi-Cuisine Mess" },
    { icon: <Building size={22} />, name: "Technically Sound Workstations" },
    { icon: <User size={22} />, name: "Unisex Salon" },
    { icon: <GraduationCap size={22} />, name: "Career Counselling" },
    { icon: <Heart size={22} />, name: "Personal Counseling" },
    { icon: <BookOpen size={22} />, name: "Laboratories" },
    { icon: <BookOpen size={22} />, name: "Library" },
    { icon: <Home size={22} />, name: "Hostel" },
    { icon: <ShieldCheck size={22} />, name: "In-house Isolation Room" },
    { icon: <Building size={22} />, name: "Digital Workstations" },
  ];

  return (
    <SectionWrapper id="facilities" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Facilities
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            At TIS, students find safety, support, and the perfect space to excel.
          </motion.p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.08 }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: "0 20px 40px -12px rgba(184,247,161,0.3)",
                  borderColor: "rgba(184,247,161,0.6)",
                }}
                className="group flex items-center gap-4 rounded-2xl border border-accent/20 bg-card px-5 py-4 transition-colors"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-bg group-hover:rotate-6">
                  {f.icon}
                </div>
                <span className="text-sm font-medium">{f.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   9. FOOD & NUTRITION
   ============================================================ */
export function FoodNutrition({ onClose }) {
  return (
    <SectionWrapper id="food-nutrition" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Food and Nutrition
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            We provide tasty meals packed with nutrients for students' best health!
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-8 rounded-3xl border border-accent/20 bg-card p-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent"><Utensils size={24} /></div>
              <h3 className="font-display text-2xl font-extrabold text-accent">A Thoughtful Dining Experience</h3>
            </div>
            <p className="leading-relaxed text-muted">
              At Tulas International School, we understand that great learning begins with great nutrition. Our dining hall is not just a place to eat—it is a carefully curated environment where students receive wholesome, balanced meals to energize their day. We serve meals that are both wholesome and flavorful, ensuring every student gets the nutrients necessary for optimal growth, focus, and well-being.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.15 }} whileHover={{ y: -4 }} className="rounded-3xl border border-accent/20 bg-card p-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent"><Heart size={24} /></div>
              <h3 className="font-display text-2xl font-extrabold text-accent">What's Cooking?</h3>
            </div>
            <p className="mb-4 leading-relaxed text-muted">
              Every meal at Tulas is carefully planned to nourish both body and mind. Our expert dieticians prepare wholesome, vegetarian dishes using fresh, locally sourced ingredients. From crisp vegetables and vibrant fruits to protein-rich delicacies, each plate is a thoughtful combination of taste and nutrition—designed to energize and inspire.
            </p>
            <p className="leading-relaxed text-muted">
              Catering to students of all ages, our menus are carefully balanced to meet their unique nutritional needs and activity levels. With a wide variety of flavors and nutrients, every meal keeps students satisfied, focused, and ready to embrace the day ahead—showing that healthy eating can always be delicious.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   10. PASTORAL CARE
   ============================================================ */
export function PastoralCare({ onClose }) {
  const points = [
    { icon: <Heart size={22} />, title: "Support in Every Way", text: "Whether it's emotional, social, or academic, our team is dedicated to helping you feel confident and strong. We're here to guide you through any challenges and celebrate your successes." },
    { icon: <ShieldCheck size={22} />, title: "A Safe, Caring Environment", text: "At TIS, we create a space where kindness and respect are always a priority. You'll always find support from your friends, teachers, and staff, no matter what you're going through." },
    { icon: <Heart size={22} />, title: "Mental Health Matters", text: "We understand that life can get tough sometimes. That's why our counsellors are available whenever you need someone to talk to, offering guidance and support when you face stress or emotional challenges." },
    { icon: <Users size={22} />, title: "Building Friendships for Life", text: "The friendships you make here will stay with you long after graduation. We encourage meaningful connections between students and alumni that continue to offer support and encouragement throughout your life." },
  ];

  return (
    <SectionWrapper id="pastoral-care" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Pastoral Care
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            Growth at Tulas begins with care, support, and endless possibilities.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-10 text-center text-base leading-relaxed text-muted">
            At Tulas International School, we believe that your well-being is just as important as your academics. Our Pastoral Care team is here to support you every step of the way, ensuring you feel safe, cared for, and encouraged to grow.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-2">
            {points.map((p, i) => (
              <motion.article key={p.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.12 }} whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(184,247,161,0.25)", borderColor: "rgba(184,247,161,0.6)" }} className="group rounded-3xl border border-accent/20 bg-card p-7 transition-colors">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-bg group-hover:rotate-6">{p.icon}</div>
                <h3 className="font-display text-xl font-extrabold text-accent">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
              </motion.article>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mt-14 text-center font-display text-2xl italic text-accent">
            "At TIS, we're here to make sure you feel truly cared for and supported—both inside and outside the classroom."
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}
/* ============================================================
   11. CURRICULUM — text + Streams Offered (Science/Commerce/Humanities)
   ============================================================ */
export function Curriculum({ onClose }) {
  const streams = [
    {
      name: "Science",
      color: "from-blue-500/20 to-bg",
      subjects: {
        compulsory: ["English", "Physics", "Chemistry", "Biology", "Mathematics"],
        optional: ["Painting", "Physical Education", "Psychology", "Economics", "Computer Science"],
      },
      note: "Choose any four compulsory, any two optional",
    },
    {
      name: "Commerce",
      color: "from-amber-500/20 to-bg",
      subjects: {
        compulsory: ["English", "Accountancy", "Business Studies", "Economics"],
        optional: ["Marketing / Applied Mathematics", "Physical Education / Psychology", "Informatics Practices", "Painting"],
      },
      note: "Choose any two optional",
    },
    {
      name: "Humanities",
      color: "from-purple-500/20 to-bg",
      subjects: {
        compulsory: ["English", "History", "Political Science", "Geography"],
        optional: ["Mathematics / Marketing", "Physical Education / Psychology", "Economics", "Informatics Practices", "Painting"],
      },
      note: "Choose any two optional",
    },
  ];

  return (
    <SectionWrapper id="curriculum" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Our Curriculum
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            Our curriculum understands and supports the journey of every child.
          </motion.p>

          {/* Intro paragraph */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-12 rounded-3xl border border-accent/20 bg-card p-8">
            <p className="leading-relaxed text-muted">
              Welcome to Tulas International School, Dehradun — a premier co-educational residential school (Grade IV–XII) affiliated with CBSE, offering a blend of academic excellence and holistic development.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              At TIS, we follow the CBSE course structure. This structure along with our curriculum, shaped by top academicians, prioritises reasoning and analytical thinking over rote memorization. Aligned with the latest NEP 2023 framework, our syllabus emphasises a skill-based, inclusive education that adapts to diverse learners' needs.
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-6 font-display text-2xl font-extrabold text-accent">
            Key Highlights
          </motion.h3>
          <div className="mb-16 grid gap-5 sm:grid-cols-2">
            {[
              { title: "NEP 2023 Structure", text: "5+3+3+4 model ensuring a progressive transition through foundational, preparatory, intermediate, and secondary phases." },
              { title: "Innovative Learning", text: "Project-based and art-integrated methodologies promote creativity and critical thinking." },
              { title: "Advanced Technology", text: "Digital classrooms, VR simulators for immersive experiences, and online assessment tools." },
              { title: "Experiential Learning", text: "Educational trips, inter-school science quests, seminars, and business conclaves." },
            ].map((k, i) => (
              <motion.article key={k.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6, borderColor: "rgba(184,247,161,0.6)", boxShadow: "0 20px 40px -12px rgba(184,247,161,0.25)" }} className="group rounded-3xl border border-accent/20 bg-card p-6 transition-colors">
                <h4 className="font-display text-lg font-extrabold text-accent">{k.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{k.text}</p>
              </motion.article>
            ))}
          </div>

          {/* Streams Offered */}
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-3xl font-extrabold text-accent sm:text-4xl">
            Streams Offered
          </motion.h3>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12 text-center italic text-muted">
            Explore your interests and build a fulfilling career.
          </motion.p>

          <div className="grid gap-6 lg:grid-cols-3">
            {streams.map((s, i) => (
              <motion.article
                key={s.name}
                initial={{ opacity: 0, y: 40, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10, boxShadow: "0 30px 60px -20px rgba(184,247,161,0.35)", borderColor: "rgba(184,247,161,0.6)" }}
                className={`group relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br ${s.color} p-7 transition-colors`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-accent text-bg font-display text-2xl font-extrabold transition-transform group-hover:scale-110 group-hover:rotate-6">
                  {s.name[0]}
                </div>
                <h4 className="font-display text-3xl font-extrabold text-accent">{s.name}</h4>

                <div className="mt-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">Compulsory Subjects</p>
                  <ul className="space-y-1 text-sm text-muted">
                    {s.subjects.compulsory.map((sub) => (
                      <li key={sub}>• {sub}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">Optional Subjects</p>
                  <ul className="space-y-1 text-sm text-muted">
                    {s.subjects.optional.map((sub) => (
                      <li key={sub}>• {sub}</li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 text-xs italic text-muted">{s.note}</p>
              </motion.article>
            ))}
          </div>

          {/* Note */}
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-5 text-center text-sm italic text-muted">
            <strong className="text-accent">Note:</strong> If a student selects PCMB, only one optional subject can be chosen. Subject combinations offered: PCM, PCB, and PCMB.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}
/* ============================================================
   12. PEDAGOGY
   ============================================================ */
export function Pedagogy({ onClose }) {
  const aspects = [
    { label: "Schools Focus", value: "TIS is a premier co-ed boarding school providing the best international education." },
    { label: "Learning Environment", value: "We make learning exciting and encourage facing challenges to maintain discipline, organisation, and overall success." },
    { label: "Curriculum Areas", value: "TIS focuses on six main areas of learning, addressing physical, intellectual, emotional, and social development." },
    { label: "Mind, Body, and Soul", value: "We recognise the link between emotional well-being, academic success, fitness, and empowerment." },
    { label: "Athletics & Empowerment", value: "Athletics play an important role in boosting physical fitness and confidence." },
    { label: "Meditation Exercises", value: "We implement meditation to improve students' focus in the classroom setting." },
    { label: "Global Initiatives", value: "\"Girls Gotta Run\" in Ethiopia provides scholarships to talented girls, combining running and education." },
    { label: "Technology Integration", value: "TIS uses technology to improve teaching, helping both educators and students adapt to modern learning." },
    { label: "Community Engagement", value: "We organise school trips so students can make friends and gain a view of life beyond academics." },
    { label: "Universal Learning", value: "TIS takes an all-rounded approach, blending physical, intellectual, emotional, and social aspects." },
    { label: "Democracy", value: "Encouraging active participation and understanding of democratic principles." },
    { label: "Environmentalism", value: "Promoting environmental awareness and sustainable practices." },
    { label: "Adventure", value: "Fostering a spirit of exploration and resilience through challenging experiences." },
    { label: "Leadership", value: "Developing leadership skills and qualities in our students." },
    { label: "Service", value: "Instilling a sense of responsibility and community service." },
    { label: "Internationalism", value: "Fostering a global perspective and appreciation for cultural diversity." },
  ];

  return (
    <SectionWrapper id="pedagogy" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Pedagogy
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            Pedagogy at TIS promotes universal development and critical thinking.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-12 rounded-3xl border border-accent/20 bg-card p-8">
            <h3 className="mb-4 font-display text-2xl font-extrabold text-accent">Effective Teaching Methods</h3>
            <p className="mb-4 leading-relaxed text-muted">
              As a premier co-ed residential school, the focus of curriculum development at TIS is to provide an inclusive educational environment inside and outside the classroom, whereby teachers adopt constructive, collaborative, and inquiry-based learning to increase the participation and productivity of pupils.
            </p>
            <p className="leading-relaxed text-muted">
              Methodology, syllabus content delivery, practically oriented classroom teaching, frequent assessment (poster-making, plays, quizzes, written tests) give a 360° insight into the subject. In performing arts, art and craft lessons are a regular feature. Exclusive sports with professional coaches, MUN participation, and 24/7 medical facilities support holistic development.
            </p>
          </motion.div>

          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-6 font-display text-2xl font-extrabold text-accent">
            Aspects of Pedagogy
          </motion.h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {aspects.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ x: 6, backgroundColor: "rgba(184,247,161,0.05)" }}
                className="rounded-2xl border border-accent/20 bg-card p-5"
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-accent">{a.label}</p>
                <p className="text-sm text-muted">{a.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   13. INTERNATIONAL TIE-UPS
   ============================================================ */
export function InternationalTieUps({ onClose }) {
  const placements = [
    { name: "Sameen Ul Haque", school: "Middlesex University, Dubai" },
    { name: "Gurewak Thiara", school: "Nova Scotia Community College, Canada" },
    { name: "Mohit Reddhu", school: "Canberra Business & Tech College, Australia" },
    { name: "Ashish Vats", school: "Karaganda Medical University, Kazakhstan" },
    { name: "Megha Sarkar", school: "Amity Law School, Noida, India" },
    { name: "Mangalsana Rajkumar", school: "Sri Siddharth Institute of Medical Sciences, India" },
    { name: "Smriti Bisht", school: "Delhi University, India" },
    { name: "Vandit Agarwal", school: "VIT Pune, India" },
    { name: "Ansh Balana", school: "Jain University, Bangalore, India" },
    { name: "Saud Al Rashid Para", school: "Shaheed Bhagat Singh College, Delhi University" },
    { name: "Archie", school: "Symbiosis College of Arts and Commerce, Pune" },
    { name: "Krati", school: "Symbiosis College of Arts and Commerce, Pune" },
    { name: "Kushi Raj", school: "Ramanujan College, Delhi University" },
    { name: "Smriti", school: "Dayal Singh College, Delhi University" },
    { name: "Divya Rani", school: "Bennett University, Noida" },
    { name: "Shahzaib Rafiq", school: "Hansraj College, Delhi University" },
    { name: "Diksha Jain", school: "Royal Global University, Assam" },
    { name: "Aditi Bharti", school: "Delta Medical College, Dhaka, Bangladesh" },
    { name: "Aashima", school: "NIFT Jodhpur, India" },
    { name: "Anmol Agarwal", school: "SRM University, Chennai" },
    { name: "Ritashma Rana", school: "University of Swansea, UK" },
    { name: "Arjot Kaur Sandhu", school: "University of Texas, US" },
    { name: "Nitima Gautam", school: "VIT Bangalore, India" },
    { name: "Rishab Jain", school: "NSIT Delhi, India" },
    { name: "Yash Goyal", school: "Christ University, Bangalore" },
    { name: "Himanshu", school: "SRCC Delhi, India" },
    { name: "Eshika Bhatt", school: "Indian Institute of Psychology & Research, Bangalore" },
    { name: "Jhanvi Agarwal", school: "SRM University, Chennai" },
    { name: "Yaman Sharma", school: "VIT, India" },
    { name: "Soham Patel", school: "Vishwakarma Institute of Information Technology, Pune" },
    { name: "Tanish Jaiswal", school: "VIT Vellore, India" },
  ];

  return (
    <SectionWrapper id="international-tieups" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            International Tie-Ups
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            International partnerships for enriched learning and cross-cultural engagement.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-12 rounded-3xl border border-accent/20 bg-card p-8">
            <p className="mb-4 leading-relaxed text-muted">
              Academic collaborations open doors to numerous benefits for students. A tie-up with international universities or schools brings incredible opportunities for growth. Exchange programs offer exposure to different educational systems and cultures, helping students become well-rounded global citizens.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Cultural immersion and broadened perspectives</li>
              <li>• Development of essential skills like communication and adaptability</li>
              <li>• Building global connections for future opportunities</li>
              <li>• Enhanced independence, resilience, and global awareness</li>
            </ul>
          </motion.div>

          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-6 font-display text-2xl font-extrabold text-accent">
            Students College and Universities Placement
          </motion.h3>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {placements.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (i % 9) * 0.05 }}
                whileHover={{ y: -4, borderColor: "rgba(184,247,161,0.6)", boxShadow: "0 15px 30px -10px rgba(184,247,161,0.25)" }}
                className="rounded-2xl border border-accent/20 bg-card p-4 transition-colors"
              >
                <p className="font-medium text-accent">{p.name}</p>
                <p className="mt-1 text-xs text-muted">{p.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
/* ============================================================
   14. MANDATORY DISCLOSURE
   ============================================================ */
export function MandatoryDisclosure({ onClose }) {
  const documents = [
    { name: "Affiliation Letter", url: "https://tis.edu.in/cbse-documents/" },
    { name: "Trust / Society / Company Registration Certificate", url: "https://tis.edu.in/cbse-documents/" },
    { name: "No Objection Certificate (NOC)", url: "https://tis.edu.in/cbse-documents/" },
    { name: "Recognition Certificate under RTE Act, 2009", url: "https://tis.edu.in/cbse-documents/" },
    { name: "Building Safety Certificate", url: "https://tis.edu.in/cbse-documents/" },
    { name: "Fire Safety Certificate", url: "https://tis.edu.in/cbse-documents/" },
    { name: "DEO Certificate", url: "https://tis.edu.in/cbse-documents/" },
    { name: "Water, Health and Sanitation Certificate", url: "https://tis.edu.in/cbse-documents/" },
    { name: "Fee Structure", url: "https://tis.edu.in/cbse-documents/" },
    { name: "Annual Academic Calendar", url: "https://tis.edu.in/cbse-documents/" },
    { name: "List of School Management Committee", url: "https://tis.edu.in/cbse-documents/" },
    { name: "List of Parent Teacher Association Members", url: "https://tis.edu.in/cbse-documents/" },
    { name: "Last Three-Year Result of Board Examination", url: "https://tis.edu.in/cbse-documents/" },
    { name: "Transfer Certificate (TC) Format", url: "https://tis.edu.in/cbse-documents/" },
    { name: "Self-Certification / Mandatory Public Disclosure", url: "https://tis.edu.in/cbse-documents/" },
  ];

  return (
    <SectionWrapper id="mandatory-disclosure" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl"
          >
            Mandatory Disclosure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-14 text-center italic text-muted"
          >
            CBSE mandated documents and disclosures as required by the Board.
          </motion.p>

          <motion.a
            href="https://tis.edu.in/cbse-documents/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(184,247,161,0.35)" }}
            className="group mb-10 flex items-center justify-between rounded-3xl border border-accent/30 bg-card p-6 transition-colors hover:border-accent"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-bg transition-transform group-hover:scale-110 group-hover:rotate-6">
                <ShieldCheck size={22} />
              </span>
              <div>
                <p className="font-display text-xl font-extrabold text-accent">View Official Disclosure Page</p>
                <p className="text-xs text-muted">tis.edu.in/cbse-documents</p>
              </div>
            </div>
            <span className="text-accent text-xl group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>

          <div className="grid gap-3 sm:grid-cols-2">
            {documents.map((d, i) => (
              <motion.a
                key={d.name}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.07 }}
                whileHover={{
                  x: 6,
                  borderColor: "rgba(184,247,161,0.6)",
                  backgroundColor: "rgba(184,247,161,0.05)",
                }}
                className="group flex items-start gap-3 rounded-2xl border border-accent/20 bg-card p-4 transition-colors"
              >
                <span className="mt-1 text-accent">
                  <BookOpen size={16} />
                </span>
                <span className="flex-1 text-sm text-muted group-hover:text-fg">{d.name}</span>
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
/* ============================================================
   15. PROMINENT PERSONALITIES
   ============================================================ */
export function ProminentPersonalities({ onClose }) {
  const people = [
    { name: "Sakshi Malik", note: "First Indian wrestler to win a medal at the Rio 2016 Olympics (bronze). Silver medallist at the 2014 Commonwealth Games. Rajiv Gandhi Khel Ratna 2016. Padma Shri 2017.", category: "Sports" },
    { name: "Vishesh Bhriguvanshi", note: "Captain of the Indian Basketball Team. Major FIBA Asia Championship player. Under his captaincy, India won a 3x3 Gold Medal at the Asian Beach Games 2008.", category: "Sports" },
    { name: "Prakashi Tomar & Late Chandro Tomar", note: "Known as the 'Shooter Dadi'. 30-time National Championship winners. Their life inspired the biopic 'Saand Ki Aankh' starring Bhumi Pednekar and Taapsee Pannu.", category: "Sports" },
    { name: "Abhishek Verma", note: "6th highest world ranking. Arjuna Awardee. Asian Games gold medallist in archery, 2013.", category: "Sports" },
    { name: "Aditi Gopichand Swami", note: "7th highest world ranking. Arjuna Awardee. World Champion in archery 2024.", category: "Sports" },
    { name: "Jeevan Jyot Singh Teja", note: "Dronacharya Awardee in archery, 2022.", category: "Sports" },
    { name: "Ojas Deotale", note: "9th highest world ranking. Arjuna Awardee 2023 and current World Champion in archery.", category: "Sports" },
    { name: "Rajat Chauhan", note: "5th highest world ranking. Arjuna Awardee 2016 in archery.", category: "Sports" },
    { name: "Devendra Singh Bisht", note: "Under-18 School Indian Football Team Selector.", category: "Sports" },
    { name: "Manish Metani", note: "Indian Football Player.", category: "Sports" },
    { name: "Saurabh Joshi", note: "Social Media Influencer with 30 Million Subscribers on YouTube.", category: "Social Media" },
    { name: "Arushi Nishank", note: "Kathak dancer, actor, film producer, environmentalist, TEDx speaker, and National Convener of Sparsh Ganga.", category: "Arts" },
    { name: "Laxmi Agarwal", note: "International Women Empowerment Award from the Ministry of Women and Child Development. Founder of The Laxmi Foundation for acid attack victims. Deepika Padukone starred in the biopic 'Chhapaak' based on her.", category: "Social Work" },
  ];

  return (
    <SectionWrapper id="prominent-personalities" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Prominent Personalities
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            Tulas International School is a futuristic institution that has shaped leaders, athletes, artists, and changemakers.
          </motion.p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {people.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 40, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -15px rgba(184,247,161,0.35)", borderColor: "rgba(184,247,161,0.6)" }}
                className="group rounded-3xl border border-accent/20 bg-card p-6 transition-colors"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-bg font-display text-xl font-extrabold transition-transform group-hover:scale-110 group-hover:rotate-6">
                    {p.name[0]}
                  </span>
                  <span className="rounded-full border border-accent/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">
                    {p.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-extrabold text-accent">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.note}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   16. SPORTS ACHIEVEMENTS
   ============================================================ */
export function SportsAchievements({ onClose }) {
  const sports = [
    { name: "Basketball", items: ["Ishan (XII): Selected for Uttarakhand State Championship, Haridwar (2024)", "Under-18 District: Quarter-finalists", "Under-16 Team: Quarter-finalists, District Championship", "Under-14 Team: Winners, 3-on-3 District Championship", "Under-16 Team: All India Asian Challenge Championship, Maharashtra", "Under-18 Boys: 3x3 District Championship participants"] },
    { name: "Skating", items: ["Selected for 62nd Roller Skating All India Nationals: Kaushal Shaw (VIII), Prateek Prasad (VIII), Yohansh Jain (VIII)"] },
    { name: "Swimming", items: ["Heet Jain (VIII): Best Swimmer, Intramurals Junior", "Mahin Surjay (X): Best Swimmer, Intramurals Senior"] },
    { name: "Volleyball", items: ["Reached Semi-finals, Sahodaya Interschool Championship", "Team: Shobhit Verma, Amber Mishra, Tanmay Jangid, Sahil Raj, Krish Kumar, Aviral Shukla, Devvrut Chauchan, Ravindra Kuldeep Lamba, Gourav Mallick Choudhury, Rudraksh Singhal, Sarthak Shukla"] },
    { name: "Squash", items: ["Yuvraj Odedra (X): Uttarakhand State Championship, Dehradun; Dhunseri Sub-Junior & Junior Nationals, Kolkata", "Harsh Jhawar (XI): Dhunseri Sub-Junior & Junior Nationals, Kolkata"] },
    { name: "Cricket", items: ["6th All India U-17 PC Batta Memorial Tournament (2024): Semi-finalists", "Key Players: Gaurav Chaudhary (Highest Wicket-Taker), Sahil Raj, Vashu Bhardwaj, Kartik Bhardwaj, Vansh Aggarwal", "1st Late Shri B.S. Rawat Memorial U-15 Tournament (2024): Sahil Raj, Kartik Bhardwaj and others"] },
    { name: "Badminton", items: ["Under-18 Overall Championship at Woodstock School, Mussoorie: Bronze", "Players: Ekaksha Gupta (X), Nabh Jain (X), Sahil Vats (X), Ujjwal Choure (X)"] },
    { name: "Shooting", items: ["Uttarakhand State Shooting Championship Gold: Yash Raj, Priyanshu Kumar, Moksh Aggarwal, Luhen, Hitesh Chawla, Ishita Singh, Anushka Singh, Samridhi Tadyail", "Indian Team Trial Qualification: Ishaan Singh (X), Priyanshu Kumar (XI)"] },
    { name: "Chess", items: ["Overall Runner-Up across U-12, U-14, U-16, U-18 categories", "Team: Justin Irom (IX), Hardik Jain (IX), Vivan Jain (VIII), and others"] },
    { name: "Taekwondo", items: ["Gold: Riddhi Aggarwal (VII), Mohd. Tabish Sakib (IX), Vaibhav Lakra (IX), and others", "National Participation: Vaibhav Lakra (IX)"] },
    { name: "Table Tennis", items: ["District Championship at Cambrian Hall: 12 players participated, 4 reached Quarter-finals, 1 reached Semi-final", "Ananya Singh (XII): SFA Table Tennis Championship, MP Hall, Dehradun"] },
    { name: "Archery", items: ["CBSE National Archery Championship: Parth Tongiya (XI), Anushka Singh (VI), and others"] },
    { name: "Hockey", items: ["State-Level Players: Shuyash Bansl (XII), Parikshit Mandora (IX)", "Other State Selections: Pratham Negi (XI), Partiyaksh Jain (VIII), Yogesh Kumar (XI)"] },
    { name: "Crossbow", items: ["16th Europe Crossbow Cup (International): Chaitanya (Rank 14), Taniya Rai (16), Yash Raj (17), Om Sameer (18), Amreen Ansari (20), Khushi (21), Yash Saini (22)", "5th Crossbow Championship, Alurance, Dehradun: Priyanshu Kumar (Gold), Nidhi Singh (Gold), Vinayak Agarwal (Gold), Abhivantika (Gold), Akarsh Shaurya (Silver), Yash Saini (Silver)"] },
    { name: "Football", items: ["4th National Garhwal Football Cup Dehradun: Winner Team — Saud Al Rashid Para, Arshan Hussain, Mangalsena Raj Kumar, Annual Hasan", "5th Rural National Games, Puducherry: Aryash Jaiswal (X), Aryan Mishra (X), Parthik Sharma (XII)"] },
    { name: "Lawn Tennis", items: ["Overall Intramural: Titan House Winner, Spartan House Runner-up"] },
  ];

  return (
    <SectionWrapper id="sports-achievements" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            Sports Achievements
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8 text-center font-display text-xl italic text-accent">
            Raising the Bar, One Win at a Time!
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.3 }} className="mx-auto mb-14 max-w-3xl text-center text-sm leading-relaxed text-muted">
            At Tulas International School, sports aren't just games—they're a way of life! Our students continuously push their limits, excelling in Basketball, Skating, Swimming, and more.
          </motion.p>

          <div className="grid gap-6 lg:grid-cols-2">
            {sports.map((s, i) => (
              <motion.article
                key={s.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6, boxShadow: "0 25px 50px -15px rgba(184,247,161,0.25)", borderColor: "rgba(184,247,161,0.6)" }}
                className="group rounded-3xl border border-accent/20 bg-card p-6 transition-colors"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-bg group-hover:rotate-6">
                    <Trophy size={22} />
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-accent">{s.name}</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Star size={14} className="mt-1 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center text-sm italic text-muted">
            We at TIS focus on overall development — <strong className="text-accent">17 sports</strong> (Shooting, Taekwondo, Skating, Squash, Badminton, Archery, Basketball, Cricket, Football, Horse Riding, Volleyball, Table Tennis, Crossbow, Lawn Tennis, Hockey, Swimming & Chess) with <strong className="text-accent">17 coaches</strong> mentoring our students.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ============================================================
   17. 38TH NATIONAL GAMES
   ============================================================ */
export function NationalGames({ onClose }) {
  return (
    <SectionWrapper id="national-games" onClose={onClose}>
      <div className="px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }} className="mb-4 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl">
            38th National Games
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-14 text-center italic text-muted">
            Sankalp Se Shikhar Tak — From Resolve to the Summit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative mb-10 overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/20 via-card to-bg p-10 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full bg-accent text-bg"
            >
              <Trophy size={44} />
            </motion.div>
            <h3 className="font-display text-3xl font-extrabold text-accent">Torch Relay at TIS</h3>
            <p className="mt-3 font-display text-lg italic text-muted">Tejaswini — the torch of the 38th National Games Uttarakhand</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              Tulas International School proudly welcomed <strong className="text-accent">Tejaswini</strong>, the torch of the 38th National Games Uttarakhand, as part of its historic journey across <strong className="text-accent">3,823 kilometers</strong>, <strong className="text-accent">99 locations</strong>, and <strong className="text-accent">13 districts</strong>.
            </p>
            <p>
              Flagged off by Hon'ble Chief Minister <strong className="text-accent">Mr. Pushkar Singh Dhami</strong> on December 26, 2024, in Haldwani, the torch embodies the spirit of determination and excellence—values that define TIS.
            </p>
            <p>
              The torch arrived at Tulas Institute, where it was met with immense enthusiasm by students, faculty, and dignitaries. It then continued to Tulas International School, greeted by an energetic crowd at the football field and a proud NCC contingent. Passing through all the sports fields, the event concluded with students capturing the moment alongside <strong className="text-accent">"Mauli"</strong>, the official mascot.
            </p>
            <p className="italic text-accent">
              True to the theme "Sankalp Se Shikhar Tak" (From Resolve to the Summit), this moment celebrated the perseverance and passion that drive future champions at TIS.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}