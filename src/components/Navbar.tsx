"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      "Strategy & Planning",
      "Branding & Creative",
      "Digital Marketing",
      "Content Development",
      "PR & Communications",
      "DOOH Media Network",
      "Experiential Marketing",
    ],
  },
  { label: "DOOH Network", href: "#dooh" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Approach", href: "#approach" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-dark text-white text-sm py-2 px-4 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-6 max-w-7xl mx-auto w-full">
          <span className="flex items-center gap-1">
            <Phone size={13} />
            <a href="tel:+254799454545" className="hover:text-gold transition-colors">0799 454545</a>
          </span>
          <span>
            <a href="mailto:info@proventus.ke" className="hover:text-gold transition-colors">info@proventus.ke</a>
          </span>
        </div>
        <div className="flex items-center gap-3">
          
          <a href="https://www.instagram.com/provetusdigital/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><InstagramIcon size={14} /></a>
          <a href="https://www.linkedin.com/in/proventus-digital-a0a432281/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><LinkedinIcon size={14} /></a>
          <a href="https://x.com/Proventus_Ltd" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><TwitterIcon size={14} /></a>
          <a href="https://www.facebook.com/provetusdigital/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors"><FacebookIcon size={14} /></a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg md:top-0"
            : "bg-navy/95 md:top-9"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-16 h-10 bg-navy rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/logo.jpg"
                  alt="Proventus Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML =
                      '<span class="text-gold font-black text-xl font-display">P</span>';
                  }}
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className={`nav-link text-sm font-semibold transition-colors ${
                      scrolled
                        ? "text-navy hover:text-gold"
                        : "text-white hover:text-gold"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && <span className="ml-1 text-xs">▾</span>}
                  </a>
                  {link.dropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg py-2 mt-1 z-50">
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#services"
                          className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 hover:text-gold transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="#contact" className="btn-gold text-sm py-2.5 px-5">
                Get a Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden ${scrolled ? "text-navy" : "text-white"}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy border-t border-navy-light">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2.5 text-white hover:text-gold text-sm font-semibold border-b border-navy-light last:border-0"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <a href="#contact" className="btn-gold w-full text-center block">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
