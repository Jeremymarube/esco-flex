const FEATURES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Custom Orders",
    desc: "Tailor every piece to your exact specifications — fabric, finish, and dimensions.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Durable Materials",
    desc: "Built with premium hardwoods and high-resilience fabrics that age beautifully.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: "Free Delivery",
    desc: "Complimentary white-glove delivery and assembly on all orders over $500.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
      </svg>
    ),
    title: "Expert Support",
    desc: "Our design consultants are available 7 days a week to help you choose.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: "#FAF8F4", padding: "100px 72px" }}>
      <style>{`
        .why-header {
          text-align: center;
          margin-bottom: 72px;
        }
        .why-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8922A;
          margin-bottom: 16px;
        }
        .why-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 600;
          color: #2C2416;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .why-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }
        .why-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #EDE5D8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s, transform 0.3s;
        }
        .why-card:hover .why-icon-wrap {
          background: #DDD0BC;
          transform: translateY(-4px);
        }
        .why-card-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: #2C2416;
        }
        .why-card-desc {
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          line-height: 1.75;
          color: #8C7B68;
        }

        @media (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); gap: 40px 24px; }
          section#why-us { padding: 80px 24px; }
        }
        @media (max-width: 480px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="why-header">
        <p className="why-label">Why Choose Us</p>
        <h2 className="why-title">The Esco Flex Difference</h2>
      </div>

      <div className="why-grid">
        {FEATURES.map((f) => (
          <div className="why-card" key={f.title}>
            <div className="why-icon-wrap">{f.icon}</div>
            <div className="why-card-title">{f.title}</div>
            <p className="why-card-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}