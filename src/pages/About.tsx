import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const qualifications = [
  { degree: "BDS", school: "Government Dental College, Mumbai", year: "2006" },
  { degree: "MDS – Orthodontics", school: "Nair Hospital Dental College", year: "2009" },
  { degree: "DCI Registered", school: "Dental Council of India", year: "Active" },
];

const team = [
  { name: "Dr. Arjun Mehta", role: "Chief Dentist & Founder", avatar: "AM", emoji: "👨‍⚕️" },
  { name: "Neha Kapoor", role: "Dental Assistant", avatar: "NK", emoji: "👩‍⚕️" },
  { name: "Sunita Rao", role: "Front Desk Receptionist", avatar: "SR", emoji: "🧑‍💼" },
];

const gallery = [
  { label: "Reception", bg: "from-primary/15 to-accent/10", emoji: "🛋️" },
  { label: "Treatment Room", bg: "from-accent/15 to-primary/10", emoji: "🦷" },
  { label: "Waiting Area", bg: "from-primary/10 to-muted", emoji: "🪑" },
  { label: "Equipment", bg: "from-accent/10 to-primary/15", emoji: "🔬" },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/8 blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Doctor image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-xl" />
                <div className="relative bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl p-12 flex flex-col items-center justify-center aspect-[3/4] shadow-float border border-border/50">
                  <div className="text-8xl mb-4">👨‍⚕️</div>
                  <div className="text-center">
                    <p className="font-bold text-primary text-xl">Dr. Arjun Mehta</p>
                    <p className="text-muted-foreground text-sm mt-1">BDS, MDS – Orthodontics</p>
                    <p className="text-muted-foreground text-sm">15+ Years Experience</p>
                  </div>
                  {/* Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-float px-4 py-2.5 border border-border/50">
                    <p className="text-xs font-bold text-foreground">1200+ Patients Treated</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {"★★★★★".split("").map((s, i) => <span key={i} className="text-yellow-400 text-xs">{s}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-primary text-sm font-semibold">
                Meet the Doctor
              </span>
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-primary leading-tight">
                About Dr. Arjun Mehta
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed">
                Dr. Arjun Mehta is a BDS/MDS qualified dentist with over 15 years of experience in comprehensive dental care. Known for a gentle approach and precision treatment, he has helped over 1,200 patients rediscover their confidence through better oral health.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Specialising in Orthodontics and cosmetic dentistry, Dr. Mehta combines the latest technology with a deeply compassionate, patient-first philosophy. Every visit to SmileCare Dental is designed to be comfortable, transparent, and anxiety-free.
              </p>
              <Link
                to="/appointment"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
              >
                Book a Consultation →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-primary text-sm font-semibold">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              Our Clinic's Mission
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              SmileCare Dental was founded on a simple belief: <strong className="text-primary">quality dental care should be accessible and anxiety-free for everyone.</strong> We've built a space where cutting-edge technology meets warmth and genuine care — where every patient leaves feeling confident, informed, and smiling.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              From our state-of-the-art sterilisation protocols to our transparent pricing and zero-wait booking system, every detail at SmileCare Dental is designed with your comfort and trust in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-primary text-sm font-semibold mb-4">
              Credentials
            </span>
            <h2 className="text-3xl font-extrabold text-primary">Qualifications</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6">
            {qualifications.map((q, i) => (
              <motion.div
                key={q.degree}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl px-8 py-6 shadow-card text-center max-w-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl mx-auto mb-4">🎓</div>
                <h3 className="font-extrabold text-primary text-xl mb-1">{q.degree}</h3>
                <p className="text-muted-foreground text-sm">{q.school}</p>
                <span className="inline-block mt-3 px-3 py-1 rounded-full bg-accent/10 text-primary text-xs font-semibold">{q.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-primary text-sm font-semibold mb-4">
              Our People
            </span>
            <h2 className="text-3xl font-extrabold text-primary">Meet the Team</h2>
            <p className="text-muted-foreground mt-3">A caring team dedicated to your smile.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center w-56 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.emoji}
                </div>
                <h3 className="font-bold text-primary text-base">{member.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-primary text-sm font-semibold mb-4">
              Our Space
            </span>
            <h2 className="text-3xl font-extrabold text-primary">Clinic Gallery</h2>
            <p className="text-muted-foreground mt-3">A modern, welcoming environment designed for your comfort.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`bg-gradient-to-br ${g.bg} rounded-2xl aspect-square flex flex-col items-center justify-center shadow-card border border-border/50 hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="text-5xl mb-3">{g.emoji}</div>
                <p className="text-sm font-semibold text-primary">{g.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
