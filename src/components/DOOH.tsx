import { MapPin, Clock, TrendingUp, RefreshCw } from "lucide-react";

const locations = [
  {
    title: "Premium Malls",
    desc: "High-dwell-time screens inside Kenya's premier retail destinations including Basic Killeleshwa and Basic Nyali.",
    icon: "🏬",
  },
  {
    title: "Lifestyle Centres",
    desc: "Strategically placed at the entrance of Rosslyn Luxury Mall where expatriates and diplomats shop.",
    icon: "✨",
  },
  {
    title: "High-Traffic Roads",
    desc: "Large-format roadside and building-mounted digital screens along Nairobi's busiest arterial roads including Onestop Arcade in Karen.",
    icon: "🛣️",
  },
];

const advantages = [
  {
    icon: RefreshCw,
    title: "Dynamic Content",
    desc: "Real-time content updates at zero print cost",
  },
  {
    icon: Clock,
    title: "Dayparting",
    desc: "Schedule ads by time of day for precision targeting",
  },
  {
    icon: TrendingUp,
    title: "Cost Efficient",
    desc: "Multiple advertisers per screen, reducing cost per campaign",
  },
  {
    icon: MapPin,
    title: "Audience Analytics",
    desc: "Measurable foot traffic & audience analytics via sensor data",
  },
];

export default function DOOH() {
  return (
    <section id="dooh" className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            DOOH Network
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy font-display mb-4">
            Premium Screens.{" "}
            <span className="text-gold">Prime Locations.</span>
            <br />
            Maximum Impact.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As both a creative agency and a DOOH media owner, we give clients
            unmatched end-to-end execution capability across Nairobi.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        {/* Location cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="bg-navy rounded-2xl p-8 text-white group hover:scale-[1.02] transition-transform"
            >
              <div className="text-4xl mb-4">{loc.icon}</div>
              <h3 className="text-xl font-bold font-display text-gold mb-3">
                {loc.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{loc.desc}</p>
            </div>
          ))}
        </div>

        {/* Why DOOH outperforms */}
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-black text-navy font-display mb-2">
            Why DOOH Outperforms Traditional Out-of-Home
          </h3>
          <div className="gold-line mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h4 className="font-bold text-navy text-sm font-display">
                    {adv.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value prop banner */}
        <div className="mt-10 bg-gold rounded-2xl p-8 text-center">
          <p className="text-navy font-black text-xl font-display">
            Proventus Digital — The only partner you need from strategy to screen.
          </p>
        </div>
      </div>
    </section>
  );
}
