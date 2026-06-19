"use client";
import { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: connect to your API/email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad bg-navy-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #F5A623 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: contact info */}
          <div className="text-white">
            <div className="inline-block bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Let's Connect
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display mb-6 leading-tight">
              Ready to be <span className="text-gold">Seen?</span>
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed">
              Book a discovery call or send us your brief for a detailed,
              custom-built marketing proposal. No juniors. No templates. Just
              strategic partnership.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+254799454545"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Phone size={20} className="text-gold group-hover:text-navy" />
                </div>
                <div>
                  <div className="text-white/50 text-xs">Call Us</div>
                  <div className="text-white font-semibold">0799 454545</div>
                </div>
              </a>
              <a
                href="mailto:info@proventus.ke"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Mail size={20} className="text-gold group-hover:text-navy" />
                </div>
                <div>
                  <div className="text-white/50 text-xs">Email Us</div>
                  <div className="text-white font-semibold">info@proventus.ke</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <div className="text-white/50 text-xs">Location</div>
                  <div className="text-white font-semibold">Transnational Plaza 2nd Floor <br></br>Mama Ngina Street, Nairobi, Kenya</div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10">
              <div className="text-white/40 text-xs mb-3">Follow us</div>
              <div className="flex gap-3">
                {[
                  { icon: InstagramIcon, href: "https://www.instagram.com/provetusdigital/" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/proventus-digital-a0a432281/" },
                  { icon: TwitterIcon, href: "https://x.com/Proventus_Ltd" },
                  { icon: FacebookIcon, href: "https://www.facebook.com/provetusdigital" },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:bg-gold hover:text-navy hover:border-gold transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-2xl font-black text-navy font-display mb-2">
                  Message Received!
                </h3>
                <p className="text-gray-500">
                  Our team will reach out within 24 hours with a tailored
                  proposal.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black text-navy font-display mb-6">
                  Get a Free Quote
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                        placeholder="jane@company.ke"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder="+254 7XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 bg-white"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                    >
                      <option value="">Select a service...</option>
                      <option>Strategy & Planning</option>
                      <option>Branding & Creative</option>
                      <option>Digital Marketing</option>
                      <option>Content Development</option>
                      <option>PR & Communications</option>
                      <option>DOOH Media Network</option>
                      <option>Experiential Marketing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                      placeholder="Brief description of your goals, timeline, and budget..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gold w-full flex items-center justify-center gap-2"
                  >
                    Send My Brief
                    <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
