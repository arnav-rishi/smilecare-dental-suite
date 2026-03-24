import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import doctorImg from "@/assets/doctor.png";

const qualifications = [
  { degree: "BDS", school: "Government Dental College, Mumbai", year: "2006" },
  { degree: "MDS – Orthodontics", school: "Nair Hospital Dental College", year: "2009" },
  { degree: "DCI Registered", school: "Dental Council of India", year: "Active" },
];

const team = [
  { name: "Dr. Arjun Mehta", role: "Chief Dentist & Founder", initials: "AM" },
  { name: "Neha Kapoor", role: "Dental Assistant", initials: "NK" },
  { name: "Sunita Rao", role: "Front Desk Receptionist", initials: "SR" },
];

const gallery = [
  { label: "Reception", color: "hsl(192 40% 90%)" },
  { label: "Treatment Room", color: "hsl(192 30% 84%)" },
  { label: "Waiting Area", color: "hsl(38 30% 88%)" },
  { label: "Equipment", color: "hsl(192 20% 88%)" },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{ backgroundColor: "#F7F4EF" }}
    >
      <Navbar />

      {/* Doctor Hero — full-bleed editorial split */}
      <section style={{ minHeight: "90vh", display: "flex", backgroundColor: "#F7F4EF" }}>
        {/* Left image — 45% */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
          style={{ width: "45%", position: "relative", flexShrink: 0, overflow: "hidden" }}
        >
          <img
            src={doctorImg}
            alt="Dr. Ranu Sharma — SmileCare Dental"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
          {/* Subtle gradient overlay for depth */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(13,79,92,0.22) 0%, transparent 50%)",
            }}
          />
          {/* Floating credential badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{
              background: "white",
              borderRadius: 14,
              padding: "14px 22px",
              position: "absolute",
              bottom: 48,
              right: -24,
              zIndex: 10,
            }}
          >
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, fontWeight: 500, color: "#1A1A1A" }}>1200+ Patients Treated</p>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "#6B6B6B", marginTop: 2 }}>15+ Years of Practice</p>
          </motion.div>
        </motion.div>

        {/* Right bio — 55%, lots of top padding */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            flex: 1,
            paddingLeft: "clamp(40px, 6vw, 96px)",
            paddingRight: "clamp(32px, 4vw, 80px)",
            paddingTop: "clamp(120px, 18vh, 180px)",
            paddingBottom: 80,
          }}
        >
          <p className="label-caps mb-6">Meet the Doctor</p>
          <h1
            className="font-display text-primary"
            style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 32 }}
          >
            About Dr.
            <br />
            <em>Arjun Mehta</em>
          </h1>
          <div style={{ width: 48, height: 3, background: "hsl(38 50% 61%)", marginBottom: 32 }} />
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: "#4A4A4A", lineHeight: 1.8, marginBottom: 20, maxWidth: 520 }}>
            Dr. Arjun Mehta is a BDS/MDS qualified dentist with over 15 years of experience in comprehensive dental care. Known for a gentle approach and precision treatment, he has helped over 1,200 patients rediscover their confidence through better oral health.
          </p>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: "#4A4A4A", lineHeight: 1.8, marginBottom: 40, maxWidth: 520 }}>
            Specialising in Orthodontics and cosmetic dentistry, Dr. Mehta combines the latest technology with a deeply compassionate, patient-first philosophy. Every visit to SmileCare Dental is designed to be comfortable, transparent, and anxiety-free.
          </p>
          <Link to="/appointment" className="pill-outline-btn">
            Book a Consultation →
          </Link>
        </motion.div>
      </section>

      {/* Clinic Story */}
      <section className="bg-section-alt" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 32, paddingRight: 32 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="label-caps mb-4">Our Story</p>
              <h2 className="font-display text-primary" style={{ fontSize: 38, fontWeight: 400, lineHeight: 1.2 }}>
                Our Clinic's
                <br /><em>Mission</em>
              </h2>
              <div style={{ width: 48, height: 3, background: "hsl(38 50% 61%)", marginTop: 16 }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: "#4A4A4A", lineHeight: 1.8, marginBottom: 20 }}>
                SmileCare Dental was founded on a simple belief: quality dental care should be accessible and anxiety-free for everyone. We've built a space where cutting-edge technology meets warmth and genuine care.
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: "#4A4A4A", lineHeight: 1.8 }}>
                From our state-of-the-art sterilisation protocols to our transparent pricing and zero-wait booking system, every detail at SmileCare Dental is designed with your comfort and trust in mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section style={{ backgroundColor: "#F7F4EF", paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 32, paddingRight: 32 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="label-caps mb-4">Credentials</p>
            <h2 className="font-display text-primary" style={{ fontSize: 38, fontWeight: 400 }}>Qualifications</h2>
          </motion.div>

          {/* Inline horizontal credentials — separated by dots */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-0"
          >
            {qualifications.map((q, i) => (
              <div key={q.degree} className="flex items-center">
                {i > 0 && (
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 18, color: "hsl(38 50% 61%)", margin: "0 24px" }}>·</span>
                )}
                <div className="text-center" style={{ padding: "0 8px" }}>
                  <p className="font-display text-primary" style={{ fontSize: 20, fontWeight: 500 }}>{q.degree}</p>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "#6B6B6B", marginTop: 4 }}>{q.school}</p>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "hsl(38 50% 61%)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4, fontWeight: 500 }}>{q.year}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-section-alt" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 32, paddingRight: 32 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="label-caps mb-4">Our People</p>
            <h2 className="font-display text-primary" style={{ fontSize: 38, fontWeight: 400 }}>Meet the Team</h2>
            <div style={{ width: 48, height: 3, background: "hsl(38 50% 61%)", marginTop: 16 }} />
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Portrait ratio 3:4 */}
                <div
                  style={{
                    aspectRatio: "3/4",
                    borderRadius: 12,
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: i === 0
                      ? "linear-gradient(160deg, hsl(192 40% 82%) 0%, hsl(192 55% 68%) 100%)"
                      : i === 1
                        ? "linear-gradient(160deg, hsl(38 30% 85%) 0%, hsl(38 40% 75%) 100%)"
                        : "linear-gradient(160deg, hsl(192 20% 85%) 0%, hsl(192 30% 75%) 100%)",
                    fontSize: 48,
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {member.initials}
                </div>
                <p className="font-display text-primary" style={{ fontSize: 17, fontWeight: 400, marginBottom: 4 }}>{member.name}</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 11, color: "hsl(38 50% 55%)", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 500 }}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ backgroundColor: "#F7F4EF", paddingTop: 100, paddingBottom: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 32, paddingRight: 32 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="label-caps mb-4">Our Space</p>
            <h2 className="font-display text-primary" style={{ fontSize: 38, fontWeight: 400 }}>Clinic Gallery</h2>
            <div style={{ width: 48, height: 3, background: "hsl(38 50% 61%)", marginTop: 16 }} />
          </motion.div>

          {/* Asymmetric gallery grid: 1 large left + 3 right stacked */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: g.color,
                  borderRadius: 12,
                  aspectRatio: i === 0 ? "4/3" : "1/1",
                  gridColumn: i === 0 ? "span 2 / span 2" : undefined,
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 20,
                  position: "relative",
                  overflow: "hidden",
                }}
                className="md:col-span-1"
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(13,79,92,0.4) 0%, transparent 60%)",
                  }}
                />
                <p
                  className="font-sans-dm relative z-10"
                  style={{ fontSize: 13, color: "white", fontWeight: 500, letterSpacing: "0.06em" }}
                >
                  {g.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
