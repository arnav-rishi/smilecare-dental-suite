import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

type FormState = {
  name: string;
  phone: string;
  date: string;
  time: string;
  treatment: string;
  message: string;
};

export default function Appointment() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    date: "",
    time: "",
    treatment: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all";

  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />

      <section className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-primary text-sm font-semibold mb-4">
              Easy Booking
            </span>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-primary mb-4">
              Book Your Appointment
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Choose the way that works best for you.
            </p>
          </motion.div>

          {/* 3 Option Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Card 1 — Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`bg-card rounded-2xl p-7 shadow-card border-2 transition-all duration-300 flex flex-col ${
                formOpen ? "border-primary shadow-card-hover" : "border-border/50 hover:border-primary/40 hover:shadow-card-hover"
              }`}
            >
              <div className="text-4xl mb-4">📋</div>
              <h2 className="font-bold text-primary text-xl mb-2">Book via Form</h2>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                Fill in your details and we'll confirm your slot within 2 hours.
              </p>
              <button
                onClick={() => setFormOpen(!formOpen)}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  formOpen
                    ? "bg-primary/10 text-primary border border-primary/30"
                    : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
                }`}
              >
                {formOpen ? "Close Form ↑" : "Fill Form →"}
              </button>
            </motion.div>

            {/* Card 2 — WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-7 shadow-card border-2 border-border/50 hover:border-green-400/50 hover:shadow-card-hover transition-all flex flex-col"
            >
              <div className="mb-4">
                <WhatsAppIcon />
              </div>
              <h2 className="font-bold text-primary text-xl mb-2">Chat on WhatsApp</h2>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                Message us directly and our team will help you schedule instantly.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-semibold text-sm bg-green-500 text-white hover:bg-green-600 transition-all text-center shadow-card hover:shadow-card-hover hover:-translate-y-0.5 block"
              >
                Open WhatsApp →
              </a>
            </motion.div>

            {/* Card 3 — Call */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-2xl p-7 shadow-card border-2 border-border/50 hover:border-accent/50 hover:shadow-card-hover transition-all flex flex-col"
            >
              <div className="text-4xl mb-4">📞</div>
              <h2 className="font-bold text-primary text-xl mb-2">Call the Clinic</h2>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                Prefer talking to someone? Call us directly during clinic hours (9 AM – 7 PM).
              </p>
              <a
                href="tel:+919876543210"
                className="w-full py-3 rounded-xl font-semibold text-sm bg-accent text-white hover:bg-accent/90 transition-all text-center shadow-card hover:shadow-card-hover hover:-translate-y-0.5 block"
              >
                Call Now →
              </a>
            </motion.div>
          </div>

          {/* Inline Form */}
          <AnimatePresence>
            {formOpen && (
              <motion.div
                initial={{ opacity: 0, y: -16, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -16, height: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden max-w-2xl mx-auto mt-8"
              >
                <div className="bg-card rounded-2xl p-8 shadow-float border border-primary/20">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-8"
                    >
                      <div className="text-6xl mb-4">✅</div>
                      <h3 className="text-2xl font-extrabold text-primary mb-3">
                        Request Received!
                      </h3>
                      <p className="text-muted-foreground text-base">
                        We've received your request! We'll call you within 2 hours to confirm your appointment.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", date: "", time: "", treatment: "", message: "" }); }}
                        className="mt-6 px-6 py-2.5 rounded-xl border border-primary text-primary text-sm font-medium hover:bg-primary/5 transition-colors"
                      >
                        Book Another
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="font-bold text-primary text-xl mb-6 flex items-center gap-2">
                        📋 Appointment Request Form
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>Full Name *</label>
                            <input
                              required
                              type="text"
                              name="name"
                              placeholder="Priya Sharma"
                              value={form.name}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>Phone Number *</label>
                            <input
                              required
                              type="tel"
                              name="phone"
                              placeholder="+91 98765 43210"
                              value={form.phone}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className={labelClass}>Preferred Date *</label>
                            <input
                              required
                              type="date"
                              name="date"
                              value={form.date}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>Preferred Time *</label>
                            <select
                              required
                              name="time"
                              value={form.time}
                              onChange={handleChange}
                              className={inputClass}
                            >
                              <option value="">Select time slot</option>
                              <option value="morning">Morning (9 AM – 12 PM)</option>
                              <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                              <option value="evening">Evening (4 PM – 7 PM)</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>Treatment Needed *</label>
                          <select
                            required
                            name="treatment"
                            value={form.treatment}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select treatment</option>
                            <option value="checkup">General Checkup</option>
                            <option value="whitening">Teeth Whitening</option>
                            <option value="rct">Root Canal Treatment (RCT)</option>
                            <option value="implants">Dental Implants</option>
                            <option value="orthodontics">Orthodontics / Braces</option>
                            <option value="pediatric">Pediatric Dentistry</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Message (Optional)</label>
                          <textarea
                            name="message"
                            rows={3}
                            placeholder="Any specific concerns or details you'd like to share..."
                            value={form.message}
                            onChange={handleChange}
                            className={inputClass + " resize-none"}
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
                        >
                          Request Appointment →
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Clinic Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
              <div className="bg-primary px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">🕐</span>
                <h3 className="font-bold text-primary-foreground text-lg">Clinic Hours</h3>
              </div>
              <div className="divide-y divide-border">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between px-6 py-4">
                    <span className="text-foreground font-medium text-sm">{h.day}</span>
                    <span className="text-primary font-semibold text-sm bg-primary/8 px-3 py-1 rounded-full">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-muted/40">
                <p className="text-muted-foreground text-sm text-center">
                  📞 Emergency cases: <a href="tel:+919876543210" className="text-primary font-semibold hover:underline">+91 98765 43210</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
