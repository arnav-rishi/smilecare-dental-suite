import { motion } from "framer-motion";

const stats = [
  { num: "1200+", label: "Happy Patients", icon: "😊" },
  { num: "15+", label: "Years Experience", icon: "🏆" },
  { num: "10+", label: "Treatments Offered", icon: "🦷" },
  { num: "5-Star", label: "Rated Clinic", icon: "⭐" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="text-4xl md:text-5xl font-extrabold text-accent mb-2 leading-none">
                {s.num}
              </div>
              <div className="text-primary-foreground/80 text-sm font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
