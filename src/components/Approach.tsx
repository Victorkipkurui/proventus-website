const steps = [
  {
    label: "Discovery",
    desc: "Immersive briefing session to understand brand, audience, objectives, budget, and market context.",
    icon: "🔍",
  },
  {
    label: "Strategy",
    desc: "We develop a tailored campaign strategy, media plan, and measurable KPIs aligned to your goals.",
    icon: "📋",
  },
  {
    label: "Creative",
    desc: "Our creative team develops compelling concepts, assets, and adaptations for every chosen channel.",
    icon: "💡",
  },
  {
    label: "Execution",
    desc: "Seamless campaign deployment across digital platforms, DOOH screens, PR, and content channels.",
    icon: "⚡",
  },
  {
    label: "Monitoring",
    desc: "Real-time tracking of campaign performance with proactive optimisations throughout the flight.",
    icon: "📊",
  },
  {
    label: "Reporting",
    desc: "Comprehensive post-campaign report with results, insights, learnings and recommendations.",
    icon: "📄",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="section-pad bg-navy-dark relative overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #F5A623 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Approach
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white font-display mb-4">
            A 360° Marketing Process
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            At Proventus, we take a holistic approach to marketing and branding,
            working with industry professionals to offer comprehensive solutions.
            Every engagement is a partnership built on transparency,
            collaboration, and a shared commitment to results.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gold/20 z-0 -translate-x-2" />
              )}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center group-hover:bg-white/10 group-hover:border-gold/30 transition-all relative z-10">
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="text-gold text-xs font-bold mb-1">
                  0{i + 1}
                </div>
                <h3 className="text-white font-bold text-sm font-display mb-2">
                  {step.label}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-14 text-center">
          <p className="text-white/40 text-sm italic">
            "Every engagement is a partnership built on transparency,
            collaboration, and a shared commitment to results."
          </p>
        </div>
      </div>
    </section>
  );
}
