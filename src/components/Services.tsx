"use client";
import { useEffect, useRef } from "react";
import {
  BarChart2,
  Brush,
  Globe,
  FileVideo,
  Megaphone,
  Monitor,
} from "lucide-react";

const services = [
  {
    icon: BarChart2,
    number: "01",
    title: "Strategy & Planning",
    description:
      "Market insights, audience targeting & campaign architecture tailored to your brand objectives and the Kenyan market landscape.",
    color: "bg-blue-50",
    iconColor: "text-navy",
    highlights: ["Market Research", "Audience Targeting", "Campaign Architecture", "KPI Setting"],
  },
  {
    icon: Brush,
    number: "02",
    title: "Branding & Creative",
    description:
      "Complete brand identity solutions ensuring a strong, consistent image through custom designs, scripting, photography, and high-quality printing.",
    color: "bg-amber-50",
    iconColor: "text-gold",
    highlights: ["Brand Identity", "Graphic Design", "Photography", "Video Production"],
  },
  {
    icon: Globe,
    number: "03",
    title: "Digital Marketing",
    description:
      "Certified digital marketing solutions across SEO, social media, PPC, programmatic advertising, email marketing and CRM management.",
    color: "bg-green-50",
    iconColor: "text-green-600",
    highlights: ["SEO & SEM", "Social Media", "Google Ads", "Programmatic"],
  },
  {
    icon: FileVideo,
    number: "04",
    title: "Content Development",
    description:
      "Compelling video productions, static creatives, motion graphics, and DOOH-ready assets that stop the scroll and drive action.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    highlights: ["Video Production", "Motion Graphics", "Copywriting", "DOOH Assets"],
  },
  {
    icon: Megaphone,
    number: "05",
    title: "PR & Communications",
    description:
      "Reputation management, media relations, brand amplification, and crisis communications across traditional and digital channels.",
    color: "bg-red-50",
    iconColor: "text-red-600",
    highlights: ["Media Relations", "Crisis Comms", "Press Releases", "Brand Amplification"],
  },
  {
    icon: Monitor,
    number: "06",
    title: "Experiential Marketing",
    description:
      "Below-the-line activations, roadshows, trade promotions, brand activations and consumer promotion campaigns for maximum impact.",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
    highlights: ["Brand Activations", "Road Shows", "Trade Promotions", "Events"],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const cards = sectionRef.current?.querySelectorAll(".reveal");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-pad bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Core Services
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy font-display mb-4">
            Six Strategic Pillars.
            <br />
            <span className="text-gold">One Integrated Partner.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From strategy and creative to performance marketing, PR and DOOH
            media, we manage every touchpoint of the consumer journey.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`service-card reveal bg-white rounded-2xl p-8 border border-gray-100 cursor-default`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center`}
                  >
                    <Icon size={26} className={service.iconColor} />
                  </div>
                  <span className="text-5xl font-black text-navy font-display leading-none">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy font-display mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-navy/70 bg-navy/5 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-gold text-sm font-bold hover:gap-3 transition-all cursor-pointer">
                  Learn More <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
