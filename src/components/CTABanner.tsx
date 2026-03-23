import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-teal-light relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-5xl mb-6">🦷</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-primary-foreground/75 text-lg mb-8">
            Don't wait for dental problems to worsen. Book your appointment today and let us help you smile with confidence.
          </p>
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-base hover:bg-accent/90 transition-all hover:-translate-y-1 shadow-float"
          >
            Book Your Appointment →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
