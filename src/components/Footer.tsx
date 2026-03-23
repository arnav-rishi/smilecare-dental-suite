import { Link } from "react-router-dom";

const ToothIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.5 2 6 4.5 6 7.5C6 9.5 7 11.5 7 13.5C7 16.5 8 22 10 22C11 22 11.5 20 12 18C12.5 20 13 22 14 22C16 22 17 16.5 17 13.5C17 11.5 18 9.5 18 7.5C18 4.5 15.5 2 12 2Z" fill="hsl(185 100% 40%)" stroke="hsl(185 100% 40%)" strokeWidth="0.5"/>
    <path d="M9 7.5C9 5.5 10 4 12 4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-xl bg-white/15">
                <ToothIcon />
              </div>
              <span className="font-bold text-lg">
                SmileCare <span className="text-accent">Dental</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Trusted dental care in Mumbai — from routine checkups to complete smile transformations.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-wide uppercase text-primary-foreground/50">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Book Appointment", href: "/appointment" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm tracking-wide uppercase text-primary-foreground/50">Contact</h4>
            <div className="space-y-2.5 text-sm text-primary-foreground/70">
              <p>📍 123, Dental Plaza, Bandra West,<br />Mumbai – 400050</p>
              <p>
                📞{" "}
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p>🕐 Mon–Sat: 9:00 AM – 7:00 PM</p>
              <p>🕐 Sunday: 10:00 AM – 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} SmileCare Dental. All rights reserved.</p>
          <p>Designed with ❤️ for healthy smiles</p>
        </div>
      </div>
    </footer>
  );
}
