import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      style={{
        backgroundColor: "#F7F4EF",
        borderBottom: scrolled ? "1px solid #E8E2D9" : "1px solid transparent",
        transition: "border-color 300ms ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-content mx-auto px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="font-display text-xl text-primary" style={{ letterSpacing: "-0.01em" }}>
            Dr. Sharma Dental Clinic
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="pill-outline-btn text-sm"
              style={{ fontSize: "13px", letterSpacing: "0.08em" }}
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "#F7F4EF", borderTop: "1px solid #E8E2D9" }}
          >
            <div className="max-w-content mx-auto px-8 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link ${location.pathname === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/appointment"
                className="pill-outline-btn self-start"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
