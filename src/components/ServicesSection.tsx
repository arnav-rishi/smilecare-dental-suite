import { motion } from "framer-motion";

const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    desc: "Cleanings, fillings & routine checkups to keep your smile healthy year-round.",
  },
  {
    icon: "✨",
    title: "Teeth Whitening",
    desc: "Professional-grade whitening treatments for a brighter, confident smile.",
  },
  {
    icon: "🦴",
    title: "Root Canal Treatment",
    desc: "Pain-free RCT with modern rotary equipment and gentle techniques.",
  },
  {
    icon: "🔲",
    title: "Dental Implants",
    desc: "Permanent replacements that look, feel, and function like natural teeth.",
  },
  {
    icon: "😁",
    title: "Orthodontics",
    desc: "Braces & clear aligners for a perfectly aligned smile, for all ages.",
  },
  {
    icon: "🧒",
    title: "Pediatric Dentistry",
    desc: "Gentle, anxiety-free dental care specially tailored for children.",
  },
];

const leftCol = services.slice(0, 3);
const rightCol = services.slice(3, 6);

function ServiceItem({ s, i, delay }: { s: typeof services[0]; i: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      {i > 0 && <div style={{ height: 1, background: "#E5E0D8", marginBottom: 28 }} />}
      <div className="flex items-start gap-4 pb-7">
        <span style={{ fontSize: 18, lineHeight: 1, paddingTop: 3, color: "hsl(192 73% 20%)" }}>{s.icon}</span>
        <div>
          <p
            className="font-sans-dm mb-1 transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary"
            style={{ fontSize: 15, fontWeight: 500, color: "#1A1A1A", transitionProperty: "transform, color" }}
          >
            {s.title}
          </p>
          <p style={{ fontSize: 14, color: "#6B6B6B", lineHeight: 1.6, fontFamily: "DM Sans, sans-serif" }}>{s.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-section-alt" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 32, paddingRight: 32 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
          style={{ maxWidth: 480 }}
        >
          <p className="label-caps mb-4">What We Offer</p>
          <h2 className="font-display text-primary" style={{ fontSize: 42, fontWeight: 400, lineHeight: 1.15 }}>
            Comprehensive Care,<br />All Under One Roof
          </h2>
          <div className="section-divider mt-5" />
        </motion.div>

        {/* Two-column list — asymmetric editorial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24">
          <div>
            {leftCol.map((s, i) => (
              <ServiceItem key={s.title} s={s} i={i} delay={i * 0.08} />
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:pt-2">
            {rightCol.map((s, i) => (
              <ServiceItem key={s.title} s={s} i={i} delay={i * 0.08 + 0.12} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
