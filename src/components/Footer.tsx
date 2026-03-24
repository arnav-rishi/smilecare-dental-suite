import { Link } from "react-router-dom";

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "hsl(192 73% 20%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 32, paddingRight: 32, paddingTop: 72, paddingBottom: 0 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-16">
          {/* Left — brand + tagline + social */}
          <div>
            <p
              className="font-display"
              style={{ fontSize: 20, fontWeight: 400, color: "white", marginBottom: 16, letterSpacing: "-0.01em" }}
            >
              SmileCare Dental
            </p>
            <p
              className="font-sans-dm"
              style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 280, marginBottom: 28 }}
            >
              Trusted dental care in Mumbai — from routine checkups to complete smile transformations.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/918103346247"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-slide-link"
                style={{ color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "DM Sans, sans-serif", transition: "color 250ms ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "hsl(38 50% 61%)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a
                href="tel:+918103346247"
                style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontFamily: "DM Sans, sans-serif", transition: "color 250ms ease" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
              >
                +91 8103346247
              </a>
            </div>
          </div>

          {/* Right — two nav columns */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p
                className="font-sans-dm"
                style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(38 50% 61%)", marginBottom: 20, fontWeight: 500 }}
              >
                Navigate
              </p>
              <ul className="space-y-3">
                {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Book Appointment", href: "/appointment" }].map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif", transition: "color 250ms ease" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                className="font-sans-dm"
                style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(38 50% 61%)", marginBottom: 20, fontWeight: 500 }}
              >
                Visit Us
              </p>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif", lineHeight: 1.8 }}>
                <p>123, Dental Plaza,</p>
                <p>Bandra West,</p>
                <p>Mumbai – 400050</p>
                <p style={{ marginTop: 12 }}>Mon–Sat: 9 AM – 7 PM</p>
                <p>Sunday: 10 AM – 2 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div style={{ borderTop: "1px solid hsl(38 50% 61% / 0.3)", paddingTop: 20, paddingBottom: 24 }}>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textAlign: "center" }}>
            © {new Date().getFullYear()} SmileCare Dental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
