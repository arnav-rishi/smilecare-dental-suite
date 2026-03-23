import { motion } from "framer-motion";

const services = [
  {
    emoji: "🦷",
    title: "General Dentistry",
    desc: "Cleanings, fillings & routine checkups to keep your smile healthy year-round.",
  },
  {
    emoji: "✨",
    title: "Teeth Whitening",
    desc: "Professional-grade whitening treatments for a brighter, confident smile.",
  },
  {
    emoji: "🦴",
    title: "Root Canal Treatment",
    desc: "Pain-free RCT with modern rotary equipment and gentle techniques.",
  },
  {
    emoji: "🔲",
    title: "Dental Implants",
    desc: "Permanent replacements that look, feel, and function like natural teeth.",
  },
  {
    emoji: "😁",
    title: "Orthodontics",
    desc: "Braces & clear aligners for a perfectly aligned smile, for all ages.",
  },
  {
    emoji: "🧒",
    title: "Pediatric Dentistry",
    desc: "Gentle, anxiety-free dental care specially tailored for children.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            What We Treat
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From routine cleanings to advanced restorations — we offer comprehensive dental care under one roof.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -6, boxShadow: "0 8px 30px hsl(192 73% 20% / 0.16)" }}
              className="bg-card rounded-2xl p-7 shadow-card border border-border/50 cursor-default transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mb-5 group-hover:bg-accent/15 transition-colors">
                {s.emoji}
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
