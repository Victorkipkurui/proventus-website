"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-dark">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(245,166,35,0.3) 40px,
              rgba(245,166,35,0.3) 41px
            )`,
          }}
        />
      </div>

      {/* Background overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-95" />

      {/* Decorative circle */}
      <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full border border-gold/20 opacity-30" />
      <div className="absolute -right-16 -top-16 w-[400px] h-[400px] rounded-full border border-gold/10 opacity-40" />

      {/* Gold orb */}
      <div className="absolute right-1/4 bottom-1/4 w-24 h-24 rounded-full bg-gold opacity-10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Nairobi's Integrated Marketing Partner
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 font-display">
              <span className="block">You Must</span>
              <span className="block text-gold">Be Seen.</span>
            </h1>

            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
              Proventus Digital delivers integrated brand communication, digital
              marketing, and premium DOOH media solutions across Kenya — from
              strategy to screen.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-gold flex items-center gap-2">
                Get a Free Quote
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="btn-outline flex items-center gap-2"
              >
                Our Services
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <span className="text-gold font-bold text-lg">6+</span>
                <span>Core Services</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold font-bold text-lg">50+</span>
                <span>Screen Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold font-bold text-lg">3M+</span>
                <span>Monthly Reach</span>
              </div>
            </div>
          </div>

          {/* Right: Visual card stack */}
          <div className="relative hidden lg:block">
            {/* Main card */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 relative z-10">
              <div className="text-gold text-xs font-bold tracking-widest mb-4 font-display">
                OUR APPROACH
              </div>
              <div className="space-y-4">
                {[
                  { step: "01", label: "Discovery & Strategy" },
                  { step: "02", label: "Creative Development" },
                  { step: "03", label: "Campaign Execution" },
                  { step: "04", label: "Monitor & Report" },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-xs font-bold shrink-0 group-hover:bg-gold group-hover:text-navy transition-all">
                      {item.step}
                    </div>
                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    <div className="ml-auto w-2 h-2 rounded-full bg-gold/30 group-hover:bg-gold transition-all" />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -right-6 max-w-[170px] bg-gold rounded-xl p-3 sm:p-4 shadow-[0_20px_45px_rgba(0,0,0,0.25)] border border-navy/10 z-20">
              <div className="text-navy font-black text-xl sm:text-2xl font-display leading-none">
                100%
              </div>
              <div className="text-navy/70 text-[11px] sm:text-xs font-semibold mt-1 leading-tight">
                End-to-End Capability
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-navy-light border border-white/10 rounded-xl p-4 shadow-2xl z-20">
              <div className="text-gold font-black text-2xl font-display">
                3M+
              </div>
              <div className="text-white/70 text-xs font-semibold">
                Monthly Audience Reach
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L48 69.3C96 58.7 192 37.3 288 32C384 26.7 480 37.3 576 48C672 58.7 768 69.3 864 69.3C960 69.3 1056 58.7 1152 48C1248 37.3 1344 26.7 1392 21.3L1440 16V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
