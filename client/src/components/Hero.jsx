const HERO_BG =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80";

export default function Hero() {
  return (
    <section id="home" style={{ position: "relative", height: "100vh", minHeight: 640, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <style>{`
        .hero-bg {
          position: absolute;
          inset: 0;
          background: url('${HERO_BG}') center/cover no-repeat;
          animation: slowZoom 18s ease-in-out infinite alternate;
        }
        @keyframes slowZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.05); }
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            rgba(44,36,22,0.72) 0%,
            rgba(44,36,22,0.45) 50%,
            rgba(44,36,22,0.15) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 72px 100px;
          max-width: 680px;
          animation: fadeUp 1s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #E6B355;
          margin-bottom: 20px;
          animation: fadeUp 1s 0.15s ease both;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(3.2rem, 7vw, 6rem);
          font-weight: 300;
          line-height: 1.05;
          color: #fff;
          margin-bottom: 24px;
          animation: fadeUp 1s 0.3s ease both;
        }
        .hero-title em {
          font-style: italic;
          color: #E6B355;
          font-weight: 400;
        }
        .hero-sub {
          font-family: 'Jost', sans-serif;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.78);
          margin-bottom: 44px;
          max-width: 460px;
          animation: fadeUp 1s 0.45s ease both;
        }
        .hero-cta {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2C2416;
          background: #C8922A;
          padding: 18px 44px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          animation: fadeUp 1s 0.6s ease both;
        }
        .hero-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #E6B355;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .hero-cta:hover::before { transform: scaleX(1); }
        .hero-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(200,146,42,0.35); }
        .hero-cta span { position: relative; z-index: 1; }

        .scroll-hint {
          position: absolute;
          bottom: 36px;
          right: 56px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: fadeIn 1s 1.2s ease both;
          opacity: 0;
        }
        @keyframes fadeIn { to { opacity: 1; } }
        .scroll-hint span {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          writing-mode: vertical-rl;
        }
        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(0.7); }
          50%       { opacity: 1;   transform: scaleY(1); }
        }

        @media (max-width: 900px) {
          .hero-content { padding: 0 28px 80px; }
          .scroll-hint  { display: none; }
        }
      `}</style>

      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-label">Premium Furniture</p>
        <h1 className="hero-title">
          Comfort Meets<br /><em>Style</em>
        </h1>
        <p className="hero-sub">
          Handcrafted furniture designed to transform your space with timeless elegance and everyday comfort.
        </p>
        <a href="#collection" className="hero-cta">
          <span>Explore Collection</span>
        </a>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}