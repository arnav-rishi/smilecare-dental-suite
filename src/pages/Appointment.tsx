import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhatsAppIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(192 73% 20%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const FormIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="hsl(192 73% 20%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
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

function FloatingLabelInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value || type === "date" || type === "time";
  return (
    <div style={{ position: "relative", marginBottom: 28 }}>
      <label
        style={{
          position: "absolute",
          top: isActive ? -18 : 10,
          left: 0,
          fontSize: isActive ? 11 : 15,
          color: focused ? "hsl(192 73% 20%)" : "#9A9A9A",
          letterSpacing: isActive ? "0.12em" : "0.02em",
          textTransform: isActive ? "uppercase" : "none",
          transition: "all 220ms ease",
          pointerEvents: "none",
          fontFamily: "DM Sans, sans-serif",
          fontWeight: isActive ? 500 : 400,
        }}
      >
        {label}{required && " *"}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        placeholder={focused ? placeholder : ""}
        className="input-underline"
        style={{ borderBottomColor: focused ? "hsl(192 73% 20%)" : "#E5E0D8" }}
      />
    </div>
  );
}

function FloatingLabelSelect({
  label,
  name,
  value,
  onChange,
  required = false,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  options: { value: string; label: string }[];
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value;
  return (
    <div style={{ position: "relative", marginBottom: 28 }}>
      <label
        style={{
          position: "absolute",
          top: isActive ? -18 : 10,
          left: 0,
          fontSize: isActive ? 11 : 15,
          color: focused ? "hsl(192 73% 20%)" : "#9A9A9A",
          letterSpacing: isActive ? "0.12em" : "0.02em",
          textTransform: isActive ? "uppercase" : "none",
          transition: "all 220ms ease",
          pointerEvents: "none",
          fontFamily: "DM Sans, sans-serif",
          fontWeight: isActive ? 500 : 400,
          zIndex: 1,
        }}
      >
        {label}{required && " *"}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className="input-underline"
        style={{
          borderBottomColor: focused ? "hsl(192 73% 20%)" : "#E5E0D8",
          appearance: "none",
          cursor: "pointer",
          color: value ? "#1A1A1A" : "#9A9A9A",
        }}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

export default function Appointment() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", phone: "", date: "", time: "", treatment: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{ backgroundColor: "#F7F4EF" }}
    >
      <Navbar />

      <section style={{ paddingTop: 140, paddingBottom: 120, minHeight: "100vh" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 32, paddingRight: 32 }}>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 72, maxWidth: 520 }}
          >
            <p className="label-caps mb-4">Easy Booking</p>
            <h1
              className="font-display text-primary"
              style={{ fontSize: "clamp(38px, 4.5vw, 56px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 16 }}
            >
              Book Your
              <br /><em>Appointment</em>
            </h1>
            <div style={{ width: 48, height: 3, background: "hsl(38 50% 61%)", marginBottom: 20 }} />
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 16, color: "#6B6B6B", lineHeight: 1.6 }}>
              Choose the way that works best for you.
            </p>
          </motion.div>

          {/* 3-column options — no cards, separated by thin lines */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ borderTop: "1px solid #E5E0D8", borderBottom: submitted ? undefined : "1px solid #E5E0D8" }}
          >
            {/* Option 1 — Form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:border-r"
              style={{ borderColor: "#E5E0D8", padding: "48px 40px 48px 0" }}
            >
              <div style={{ marginBottom: 20 }}><FormIcon /></div>
              <p className="font-display text-primary" style={{ fontSize: 22, fontWeight: 400, marginBottom: 12 }}>Book via Form</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 28 }}>
                Fill in your details and we'll confirm your slot within 2 hours.
              </p>
              <button
                onClick={() => setFormOpen(!formOpen)}
                className="pill-outline-btn"
                style={{ fontSize: 13 }}
              >
                {formOpen ? "Close Form ↑" : "Fill Form →"}
              </button>
            </motion.div>

            {/* Option 2 — WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:border-r"
              style={{ borderColor: "#E5E0D8", padding: "48px 40px" }}
            >
              <div style={{ marginBottom: 20 }}><WhatsAppIcon /></div>
              <p className="font-display text-primary" style={{ fontSize: 22, fontWeight: 400, marginBottom: 12 }}>Chat on WhatsApp</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 28 }}>
                Message us directly and our team will help you schedule instantly.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  border: "1.5px solid #25D366",
                  color: "#25D366",
                  background: "transparent",
                  borderRadius: 9999,
                  padding: "11px 28px",
                  display: "inline-block",
                  transition: "background 300ms ease, color 300ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#25D366";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#25D366";
                }}
              >
                Open WhatsApp →
              </a>
            </motion.div>

            {/* Option 3 — Call */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ padding: "48px 0 48px 40px" }}
            >
              <div style={{ marginBottom: 20 }}><PhoneIcon /></div>
              <p className="font-display text-primary" style={{ fontSize: 22, fontWeight: 400, marginBottom: 12 }}>Call the Clinic</p>
              <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 28 }}>
                Prefer talking to someone? Call us directly during clinic hours (9 AM – 7 PM).
              </p>
              <a
                href="tel:+919876543210"
                className="pill-outline-btn"
                style={{ fontSize: 13 }}
              >
                Call Now →
              </a>
            </motion.div>
          </div>

          {/* Inline form — fade+slide down */}
          <AnimatePresence>
            {formOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  borderBottom: "1px solid #E5E0D8",
                  padding: "56px 0",
                  maxWidth: 680,
                }}
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p style={{ fontSize: 28, marginBottom: 16 }}>✅</p>
                    <h3 className="font-display text-primary" style={{ fontSize: 28, fontWeight: 400, marginBottom: 12 }}>
                      Request Received!
                    </h3>
                    <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: "#6B6B6B", lineHeight: 1.7, marginBottom: 28 }}>
                      We've received your request. We'll call you within 2 hours to confirm your appointment.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", phone: "", date: "", time: "", treatment: "", message: "" });
                      }}
                      className="pill-outline-btn"
                      style={{ fontSize: 13 }}
                    >
                      Book Another
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <p className="label-caps mb-8">Appointment Request</p>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                        <FloatingLabelInput label="Full Name" name="name" value={form.name} onChange={handleChange} required placeholder="Priya Sharma" />
                        <FloatingLabelInput label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
                        <FloatingLabelInput label="Preferred Date" name="date" type="date" value={form.date} onChange={handleChange} required />
                        <FloatingLabelSelect
                          label="Preferred Time"
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          required
                          options={[
                            { value: "morning", label: "Morning (9 AM – 12 PM)" },
                            { value: "afternoon", label: "Afternoon (12 PM – 4 PM)" },
                            { value: "evening", label: "Evening (4 PM – 7 PM)" },
                          ]}
                        />
                      </div>
                      <FloatingLabelSelect
                        label="Treatment Needed"
                        name="treatment"
                        value={form.treatment}
                        onChange={handleChange}
                        required
                        options={[
                          { value: "checkup", label: "General Checkup" },
                          { value: "whitening", label: "Teeth Whitening" },
                          { value: "rct", label: "Root Canal Treatment" },
                          { value: "implants", label: "Dental Implants" },
                          { value: "orthodontics", label: "Orthodontics / Braces" },
                          { value: "pediatric", label: "Pediatric Dentistry" },
                          { value: "other", label: "Other" },
                        ]}
                      />
                      {/* Message */}
                      <div style={{ position: "relative", marginBottom: 40 }}>
                        <label style={{ display: "block", fontFamily: "DM Sans, sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9A9A9A", marginBottom: 12, fontWeight: 500 }}>
                          Message (Optional)
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Any specific concerns or details..."
                          style={{
                            width: "100%",
                            background: "transparent",
                            border: "none",
                            borderBottom: "1px solid #E5E0D8",
                            padding: "8px 0",
                            fontFamily: "DM Sans, sans-serif",
                            fontSize: 15,
                            color: "#1A1A1A",
                            outline: "none",
                            resize: "none",
                            lineHeight: 1.7,
                          }}
                          onFocus={(e) => { e.currentTarget.style.borderBottomColor = "hsl(192 73% 20%)"; }}
                          onBlur={(e) => { e.currentTarget.style.borderBottomColor = "#E5E0D8"; }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="pill-outline-btn"
                        style={{ fontSize: 14, padding: "13px 36px" }}
                      >
                        Request Appointment →
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Clinic Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginTop: 80, maxWidth: 560 }}
          >
            <p className="label-caps mb-6">Clinic Hours</p>
            <div>
              {hours.map((h, i) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between"
                  style={{
                    paddingTop: 16,
                    paddingBottom: 16,
                    borderBottom: i < hours.length - 1 ? "1px solid #E5E0D8" : "none",
                  }}
                >
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "#1A1A1A", fontWeight: 400 }}>{h.day}</span>
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14, color: "hsl(192 73% 20%)", fontWeight: 500 }}>{h.time}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "#6B6B6B", marginTop: 20 }}>
              Emergency cases:{" "}
              <a href="tel:+919876543210" style={{ color: "hsl(192 73% 20%)", fontWeight: 500, textDecoration: "none" }}>
                +91 98765 43210
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
