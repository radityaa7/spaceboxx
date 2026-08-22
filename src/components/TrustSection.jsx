const names = ['Vertex Labs', 'Northwind', 'Solace', 'Meridian', 'Fieldstone', 'Anchorpoint', 'Cobalt & Co', 'Haven Digital'];

export default function TrustSection() {
  const track = [...names, ...names];
  return (
    <section className="border-y border-sb-border bg-white py-9 overflow-hidden">
      <p className="eyebrow text-center text-sb-ink-soft/70 mb-6">
        Dipercaya oleh tim dan bisnis yang membangun produk masa depan
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex w-max gap-16 animate-grid-drift-none" style={{ animation: 'marquee 28s linear infinite' }}>
          {track.map((name, i) => (
            <span key={i} className="text-xl sm:text-2xl font-bold text-sb-ink/25 whitespace-nowrap font-display">
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-grid-drift-none { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
