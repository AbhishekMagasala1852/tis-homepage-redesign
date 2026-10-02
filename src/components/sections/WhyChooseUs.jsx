import { motion } from "framer-motion";
import { X, BookOpen, Users, Clock, GraduationCap, Award, Heart, Home } from "lucide-react";

const reasons = [
  {
    icon: <BookOpen size={28} />,
    title: "All-round Learning",
    text: "Our main objective is to train students to realize their full potential and become independent learners who are fully aware of their social, moral, and cultural obligations. We bring about a transformation in students not only in Academics but also in their mental, emotional, spiritual, and creative thinking processes.",
  },
  {
    icon: <Users size={28} />,
    title: "Social Life",
    text: "It takes a village to raise a child. Boarding schools offer a 'village' where children can grow up, study, and learn things while living in a great family setting of peers, elders, and juniors.",
  },
  {
    icon: <Clock size={28} />,
    title: "24/7 Learning",
    text: "Children are always learning, whether in the classroom or through informal interactions with peers, teachers, coaches, and instructors. Our complete atmosphere fosters your child's physical, emotional, and cerebral development.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Higher Education Opportunities",
    text: "Tulas International School and Tulas Institute are one-stop destinations for your child's comprehensive education. Tulas Institute of Engineering and Management allows students to continue their study after completing their senior school examinations at TIS.",
  },
  {
    icon: <Award size={28} />,
    title: "Future-Ready Teaching",
    text: "Driven by a PAN India curriculum and affiliated with CBSE, Tulas keeps pace with changing educational reforms. Our highly qualified teachers are trained regularly to identify each student's skill sets and teach in a manner that enhances their multiple intelligences.",
  },
  {
    icon: <Heart size={28} />,
    title: "Holistic Education",
    text: "We combine academics with enough leisure for athletics, arts, music, and other extracurricular activities. Our programs include the Charity Program Society and the International Award for Young People (IAYP), promoting community service and leadership.",
  },
  {
    icon: <Home size={28} />,
    title: "Fully Residential & Co-ed",
    text: "TIS is a fully residential co-ed school with excellent infrastructure and all modern amenities. Located in Dehradun, we provide an unmatched experience through rigorous academics, intense sports, and strong bonds among peers, juniors, and seniors.",
  },
  {
    icon: <Award size={28} />,
    title: "Affiliated to CBSE New Delhi",
    text: "As one of Dehradun's top boarding schools, we want to bring about a transformation in students not only in Academics but also in their mental, emotional, spiritual, and creative thinking processes.",
  },
];

export default function WhyChooseUs({ onClose }) {
  return (
    <motion.section
      id="why-choose-us"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative border-t border-accent/20 scroll-mt-32"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close section"
        className="absolute right-5 top-5 z-30 grid h-10 w-10 place-items-center rounded-full bg-bg/80 text-fg backdrop-blur transition-all hover:scale-110 hover:bg-accent hover:text-bg"
      >
        <X size={20} />
      </button>

      {/* Animated Hero Banner */}
      <div className="relative h-72 w-full overflow-hidden sm:h-[28rem] bg-gradient-to-br from-accent/10 via-bg to-accent/5">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl font-extrabold text-fg sm:text-6xl"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
          >
            At TIS, you'll experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 font-display text-4xl font-extrabold italic text-accent sm:text-7xl"
            style={{ textShadow: "0 4px 32px rgba(184,247,161,0.3)" }}
          >
            The Unexpected
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-2xl text-lg text-muted"
          >
            At TIS, school is different. It isn't a chore or a competition — it's an opportunity. And it's yours for the taking.
          </motion.p>
        </div>
      </div>

      {/* Reasons Cards */}
      <div className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, textShadow: "0 8px 32px rgba(184,247,161,0.4)" }}
            className="mb-12 text-center font-display text-4xl font-extrabold text-accent sm:text-5xl cursor-default"
          >
            Here's Why You Should Choose TIS
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((block, i) => (
              <motion.article
                key={block.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(184,247,161,0.15)",
                  borderColor: "rgba(184,247,161,0.6)",
                }}
                className="group relative rounded-3xl border border-accent/20 bg-card p-7 transition-colors duration-300"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(184,247,161,0.08), transparent 70%)" }}
                />

                <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-bg group-hover:scale-110 group-hover:rotate-6">
                  {block.icon}
                </div>
                <h3 className="relative font-display text-xl font-extrabold text-accent transition-all duration-300 group-hover:translate-x-1">
                  {block.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  {block.text}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Closing Line */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.03, color: "#d8ffc9" }}
            className="mt-16 text-center font-display text-2xl italic text-accent sm:text-3xl cursor-default"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
          >
            "At TIS, school isn't a chore or a competition — it's an opportunity. And it's yours for the taking."
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}