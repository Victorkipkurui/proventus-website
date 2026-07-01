'use client';
const clients = [
  { name: "Nation Media Group", logo: "/images/nmgm.png" },
  { name: "Safaricom", logo: "/images/safaricom.png" },
  { name: "Kenya Power", logo: "/images/kpower.png" },
  { name: "Naivas", logo: "/images/naivas.png" },
   { name: "Quickmart", logo: "/images/quickmart.png" },
  { name: "Showmax", logo: "/images/showmax.png" },
   { name: "Ubereats", logo: "/images/ubereats.png" },
  { name: "Aga Khan University Hospital", logo: "/images/agakhan.png" },
  { name: "University of Nairobi", logo: "/images/uon.png" },
  { name: "Kenya Ports Authority", logo: "/images/kpa.png" },
  { name: "Silentnight", logo: "/images/silentnight.png" },
  { name: "City Mirror", logo: "/images/city-mirror.png" },
  { name: "GRM", logo: "/images/grm.png" },
  { name: "Rabba", logo: "/images/rabba.png" },
  { name: "Prontex", logo: "/images/prontex.png" },
  { name: "Wine & Bottle", logo: "/images/w&b.png" },
   { name: "Mobi", logo: "/images/mobi.png" },
  { name: "Lexken", logo: "/images/lexken.png" },
  { name: "Devolution Conference", logo: "/images/conference.png" },
];

export default function Clients() {
  // Duplicate for infinite scroll effect
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Our Clientele
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy font-display mb-4">
            Trusted by <span className="text-gold">Leading Brands</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            From global telcos to national broadcasters, financial institutions,
            and retail chains — brands across Kenya trust Proventus to make them
            seen.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </div>

        {/* Marquee */}
        <div className="overflow-hidden relative">
          <div className="marquee-track">
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-4 px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center min-w-[180px] h-24 hover:border-gold/30 hover:bg-gold/5 transition-all"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-32 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Retail & FMCG", emoji: "🛒" },
            { label: "Banking & Finance", emoji: "🏦" },
            { label: "Telecom & Tech", emoji: "📡" },
            { label: "Government & NGOs", emoji: "🏛️" },
          ].map((sector) => (
            <div
              key={sector.label}
              className="bg-gray-50 border border-gray-100 rounded-xl p-5 hover:border-gold/30 transition-colors"
            >
              <div className="text-3xl mb-2">{sector.emoji}</div>
              <div className="text-sm font-semibold text-navy">
                {sector.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
