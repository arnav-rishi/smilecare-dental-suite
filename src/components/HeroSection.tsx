import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import doctorImg from "@/assets/doctor.png";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex overflow-hidden"
      style={{ backgroundColor: "#F7F4EF" }}
    >
      {/* Left text block — 55% */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center pt-[100px] pb-[100px] px-8 md:px-16 xl:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[560px]"
        >
          {/* Gold label */}
          <p className="label-caps mb-8">Trusted Dental Care · Mumbai</p>

          {/* H1 */}
          <h1
            className="font-display text-primary leading-[1.08] mb-6"
            style={{ fontSize: "clamp(44px, 5vw, 64px)", fontWeight: 400 }}
          >
            Confidence Starts
            <br />
            <em>With Your Smile</em>
          </h1>

          {/* Subtext */}
          <p
            className="font-sans-dm mb-10 max-w-[400px]"
            style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: 1.7, fontWeight: 400 }}
          >
            Expert dental care from routine checkups to complete smile transformations — gentle, modern, anxiety-free.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/appointment" className="pill-outline-btn">
              Book Appointment
            </Link>
            <Link
              to="/#services"
              className="font-sans-dm text-sm text-primary flex items-center gap-2 hover-slide-link"
              style={{ fontWeight: 500, color: "#1A1A1A" }}
            >
              See Our Services →
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right image panel — full height, rounded-left edge */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="hidden lg:block absolute right-0 top-0 bottom-[-60px] w-[48%]"
        style={{ borderRadius: "40px 0 0 40px", overflow: "hidden" }}
      >
        <img
          src={doctorImg}
          alt="Dr. Ranu Sharma — SmileCare Dental"
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle gradient overlay at bottom for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(13,79,92,0.18) 0%, transparent 40%)",
          }}
        />
      </motion.div>
    </section>
  );
}
