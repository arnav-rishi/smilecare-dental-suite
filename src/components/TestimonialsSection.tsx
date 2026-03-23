import { motion } from "framer-motion";

const featured = {
  name: "Priya Sharma",
  role: "Software Engineer",
  quote:
    "I had extreme dental anxiety, but Dr. Mehta made me feel completely at ease. The root canal was absolutely painless — I couldn't believe it. The clinic is spotless and the staff is incredibly kind.",
};

const secondary = [
  {
    name: "Rahul Verma",
    role: "Business Owner",
    quote:
      "Best dental experience I've ever had! Got my Invisalign done here and the results are stunning. Professional team, state-of-the-art clinic, and very fair pricing.",
  },
  {
    name: "Anita Patel",
    role: "Teacher",
    quote:
      "Took my 7-year-old daughter here and she actually enjoyed the visit! The pediatric dentist was so patient with her. Our whole family now visits SmileCare.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-section-alt" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 32, paddingRight: 32 }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="label-caps mb-4">Patient Reviews</p>
          <h2 className="font-display text-primary" style={{ fontSize: 42, fontWeight: 400, lineHeight: 1.15 }}>
            What Our Patients Say
          </h2>
          <div className="section-divider mt-5" />
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16"
          style={{ paddingBottom: 56, borderBottom: "1px solid #E5E0D8" }}
        >
          {/* Giant decorative quote */}
          <div
            className="font-display absolute top-[-24px] left-[-8px] select-none pointer-events-none"
            style={{ fontSize: 160, color: "#F0EBE1", lineHeight: 1, zIndex: 0 }}
            aria-hidden="true"
          >
            "
          </div>

          <div className="relative z-10" style={{ maxWidth: 720 }}>
            <p
              className="font-display"
              style={{ fontSize: "clamp(18px, 2.2vw, 24px)", color: "#1A1A1A", fontWeight: 400, lineHeight: 1.6, fontStyle: "italic" }}
            >
              "{featured.quote}"
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "hsl(192 73% 20% / 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "hsl(192 73% 20%)",
                  fontFamily: "DM Sans, sans-serif",
                  flexShrink: 0,
                }}
              >
                {featured.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: "#1A1A1A" }}>{featured.name}</p>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#6B6B6B" }}>{featured.role}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two smaller testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {secondary.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="gold-border-left"
            >
              <p
                style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: "#4A4A4A", lineHeight: 1.7, fontStyle: "italic", marginBottom: 16 }}
              >
                "{t.quote}"
              </p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, fontWeight: 500, color: "#1A1A1A" }}>{t.name}</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#6B6B6B" }}>{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
