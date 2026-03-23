import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DentalClinicIllustration = () => (
  <div className="relative w-full max-w-lg mx-auto">
    {/* Floating background blobs */}
    <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-accent/10 blur-2xl" />
    <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/10 blur-xl" />

    {/* Main card */}
    <div className="relative bg-card rounded-3xl shadow-float overflow-hidden border border-border/50">
      {/* Clinic interior mock */}
      <div className="bg-gradient-to-br from-primary/8 to-accent/5 p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center text-2xl flex-shrink-0">🦷</div>
          <div>
            <h3 className="font-bold text-primary text-lg">SmileCare Dental</h3>
            <p className="text-muted-foreground text-sm">Mumbai's trusted dental clinic</p>
            <div className="flex items-center gap-1 mt-1">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-yellow-400 text-sm">{s}</span>
              ))}
              <span className="text-muted-foreground text-xs ml-1">5.0 (240 reviews)</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { num: "1200+", label: "Patients" },
            { num: "15+", label: "Years" },
            { num: "10+", label: "Treatments" },
          ].map((s) => (
            <div key={s.label} className="bg-card rounded-2xl p-3 text-center shadow-card">
              <div className="text-accent font-extrabold text-lg leading-tight">{s.num}</div>
              <div className="text-muted-foreground text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Service badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["🦷 General Dentistry", "✨ Whitening", "🔲 Implants", "😁 Orthodontics"].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{tag}</span>
          ))}
        </div>

        {/* Appointment next */}
        <div className="bg-primary rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-lg">📅</div>
          <div>
            <p className="text-primary-foreground text-sm font-semibold">Next Available Slot</p>
            <p className="text-primary-foreground/70 text-xs">Today • 3:00 PM onwards</p>
          </div>
          <span className="ml-auto px-3 py-1 bg-accent rounded-xl text-white text-xs font-semibold">Book Now</span>
        </div>
      </div>
    </div>

    {/* Floating badge */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="absolute -top-4 -left-4 bg-card rounded-2xl shadow-float px-4 py-2.5 flex items-center gap-2 border border-border/50"
    >
      <span className="text-xl">😊</span>
      <div>
        <p className="text-xs font-bold text-foreground">Pain-free treatment</p>
        <p className="text-xs text-muted-foreground">Patient-first approach</p>
      </div>
    </motion.div>

    {/* Floating badge 2 */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
      className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-float px-4 py-2.5 flex items-center gap-2 border border-border/50"
    >
      <span className="text-xl">✅</span>
      <div>
        <p className="text-xs font-bold text-foreground">ISO Certified</p>
        <p className="text-xs text-muted-foreground">World-class equipment</p>
      </div>
    </motion.div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/6 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/6 blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-primary">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted Dental Care in Mumbai
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-primary leading-tight">
              Your Smile{" "}
              <span className="relative">
                Deserves
                <span className="absolute bottom-1 left-0 w-full h-2 bg-accent/25 rounded-full -z-10" />
              </span>{" "}
              the Best Care
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Trusted dental care in Mumbai — from routine checkups to complete smile transformations. Experience gentle, modern dentistry designed around you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-card hover:shadow-card-hover hover:-translate-y-0.5 text-base"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all text-base"
              >
                📞 Call Now
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-green-500 font-bold">✓</span> No waiting time
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-green-500 font-bold">✓</span> Advanced equipment
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-green-500 font-bold">✓</span> Painless procedures
              </div>
            </div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <DentalClinicIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
