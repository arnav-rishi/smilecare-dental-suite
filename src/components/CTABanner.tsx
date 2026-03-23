import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section style={{ backgroundColor: "hsl(192 73% 20%)", paddingTop: 100, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 32, paddingRight: 32 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div style={{ maxWidth: 540 }}>
            <p className="label-caps mb-4" style={{ color: "hsl(38 50% 61%)" }}>
              Take the next step
            </p>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400, color: "white", lineHeight: 1.2 }}
            >
              Ready for a Healthier,<br />
              <em>More Confident Smile?</em>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Link
              to="/appointment"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.06em",
                border: "1.5px solid hsl(38 50% 61%)",
                color: "hsl(38 50% 61%)",
                background: "transparent",
                borderRadius: 9999,
                padding: "14px 36px",
                display: "inline-block",
                transition: "background 300ms ease, color 300ms ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "hsl(38 50% 61%)";
                (e.currentTarget as HTMLElement).style.color = "white";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "hsl(38 50% 61%)";
              }}
            >
              Book Your Appointment →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
