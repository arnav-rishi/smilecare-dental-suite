import { motion } from "framer-motion";

const stats = [
  { num: "1200+", label: "Happy Patients" },
  { num: "15+", label: "Years Experience" },
  { num: "10+", label: "Treatments Offered" },
  { num: "5-Star", label: "Rated Clinic" },
];

export default function StatsSection() {
  return (
    <section style={{ backgroundColor: "hsl(192 73% 20%)", paddingTop: 100, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 32, paddingRight: 32 }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center relative"
              style={{ padding: "0 24px" }}
            >
              {i > 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
                  style={{ width: 1, height: 60, background: "hsl(38 50% 61% / 0.5)" }}
                />
              )}
              <div
                className="font-display"
                style={{ fontSize: 52, color: "white", fontWeight: 400, lineHeight: 1, marginBottom: 12 }}
              >
                {s.num}
              </div>
              <div
                className="font-sans-dm"
                style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.55)", fontWeight: 400 }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
