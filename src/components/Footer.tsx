import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon,} from "lucide-react";

const services = [
  "Strategy & Planning",
  "Branding & Creative",
  "Digital Marketing",
  "Content Development",
  "PR & Communications",
  "DOOH Media Network",
  "Experiential Marketing",
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Our Services", href: "#services" },
  { label: "DOOH Network", href: "#dooh" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
  { label: "Company Profile", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center overflow-hidden">
                  <img
                  src="/images/logo.jpg"
                  alt="Proventus Logo"
                  className="w-full h-full object-cover"
                  
                  />
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div>
                    <div className="font-black text-lg font-display">Proventus</div>
                    <div className="text-gold text-xs tracking-widest">
                      DIGITAL LIMITED
                    </div>
                  </div>
                </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A full-service marketing & media solutions provider built for
              modern Kenya. Positioned at the intersection of creativity,
              technology and media.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <InstagramIcon size={16} />, href: "https://www.instagram.com/provetusdigital/", label: "Instagram" },
                { icon: <LinkedinIcon size={16} />, href: "https://www.linkedin.com/in/proventus-digital-a0a432281/", label: "LinkedIn" },
                { icon: <TwitterIcon size={16} />, href: "https://x.com/Proventus_Ltd", label: "Twitter" },
                { icon: <FacebookIcon size={16} />, href: "https://www.facebook.com/provetusdigital", label: "Facebook" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:bg-gold hover:text-navy hover:border-gold transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm font-display mb-5 text-gold">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/60 text-sm hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm font-display mb-5 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm font-display mb-5 text-gold">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-white/60">
              <div>
                <div className="text-xs text-white/30 uppercase tracking-widest mb-1">
                  Phone
                </div>
                <a
                  href="tel:+254799454545"
                  className="hover:text-gold transition-colors"
                >
                  0799 454545
                </a>
              </div>
              <div>
                <div className="text-xs text-white/30 uppercase tracking-widest mb-1">
                  Email
                </div>
                <a
                  href="mailto:info@proventus.ke"
                  className="hover:text-gold transition-colors"
                >
                  info@proventus.ke
                </a>
              </div>
              <div>
                <div className="text-xs text-white/30 uppercase tracking-widest mb-1">
                  Website
                </div>
                <a
                  href="https://www.proventus.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  www.proventus.ke
                </a>
              </div>
              <div>
                <div className="text-xs text-white/30 uppercase tracking-widest mb-1">
                  Location
                </div>
                <span> Transnational Plaza 2nd Floor, Nairobi, Kenya</span>
              </div>
              <div>
                <div className="text-xs text-white/30 uppercase tracking-widest mb-1">
                  Office Hours
                </div>
                <span>Mon – Fri: 8am – 6pm</span>
              </div>
            </div>

            {/* CTA */}
            <a href="#contact" className="btn-gold inline-block mt-6 text-sm">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Proventus Digital Limited. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1 text-white/30 text-sm">
            <span>You Must Be Seen</span>
            <span className="mx-2 text-gold">•</span>
            <span className="text-gold font-bold">Proventus</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
