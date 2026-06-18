import { CheckCircle } from "lucide-react";

const reasons = [
  {
    number: "1",
    title: "One Partner. Every Channel.",
    desc: "Strategy, creative, digital, PR, and media — fully integrated, always aligned.",
  },
  {
    number: "2",
    title: "We Own Our Media",
    desc: "Direct DOOH ownership means zero intermediaries, better pricing, and faster turnarounds.",
  },
  {
    number: "3",
    title: "Kenya-First Intelligence",
    desc: "Deep local market knowledge, consumer behaviour insights and cultural fluency.",
  },
  {
    number: "4",
    title: "Measurable Results, Always",
    desc: "Every campaign has defined KPIs. Every report shows real numbers, not vanity metrics.",
  },
  {
    number: "5",
    title: "Agile & Responsive",
    desc: "We move at the speed of business — fast briefings, quick pivots and proactive optimisation.",
  },
  {
    number: "6",
    title: "Senior Attention on Every Account",
    desc: "No juniors managing major campaigns. Senior strategists drive every client relationship.",
  },
  {
    number: "7",
    title: "Competitive Pricing",
    desc: "Premium quality at market-competitive rates with transparent billing and no hidden fees.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-block bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-navy font-display mb-4 leading-tight">
              Seven Reasons Leading Brands{" "}
              <span className="text-gold">Trust Us</span>
            </h2>
            <div className="gold-line mb-6" />
            <p className="text-gray-600 leading-relaxed mb-8">
              Positioned at the intersection of creativity, technology and
              media, Proventus delivers measurable brand impact across Kenya's
              fastest-growing markets. We don't just run campaigns — we build
              brand legacies.
            </p>
            <a href="#contact" className="btn-gold inline-flex items-center gap-2">
              Start Working Together →
            </a>

            {/* Visual block */}
            <div className="mt-10 bg-navy rounded-2xl p-6 text-white">
              <div className="text-gold font-bold text-sm mb-2">
                "We don't just run campaigns.
              </div>
              <div className="text-2xl font-black font-display">
                We build brand legacies."
              </div>
              <div className="mt-3 text-white/50 text-sm">
                — Proventus Digital Limited
              </div>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid gap-4">
            {reasons.map((r) => (
              <div
                key={r.number}
                className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                  <span className="text-gold group-hover:text-navy font-black text-sm font-display transition-colors">
                    {r.number}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-navy font-display text-sm mb-1">
                    {r.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
