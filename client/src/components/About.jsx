export default function About() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5K+", label: "Happy Customers" },
    { value: "200+", label: "Unique Designs" },
  ];

  return (
    <section id="about" style={{ background: "#FAF8F4", padding: "120px 72px" }}>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-img-wrap {
          position: relative;
          overflow: hidden;
        }
        .about-img-wrap img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }
        .about-img-wrap:hover img {
          transform: scale(1.03);
        }

        .about-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8922A;
          margin-bottom: 20px;
        }

        .about-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 600;
          color: #2C2416;
          line-height: 1.15;
          margin-bottom: 28px;
        }

        .about-body {
          font-family: 'Jost', sans-serif;
          font-size: 0.95rem;
          line-height: 1.8;
          color: #8C7B68;
          margin-bottom: 56px;
          max-width: 520px;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          padding-top: 40px;
          border-top: 1px solid rgba(44,36,22,0.1);
        }

        .stat-value {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 2.4rem;
          font-weight: 600;
          color: #C8922A;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          color: #8C7B68;
          text-transform: capitalize;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 0;
          }
          .about-img-wrap img { height: 320px; }
          .about-stats { gap: 20px; }
          section#about { padding: 80px 24px; }
        }
      `}</style>

      <div className="about-grid">
        {/* Image */}
        <div className="about-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=900&q=80"
            alt="Craftsman at work"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div>
          <p className="about-label">About Us</p>
          <h2 className="about-title">
            Crafted with Passion,<br />Built to Last
          </h2>
          <p className="about-body">
            At Esco Flex Furniture, we blend traditional craftsmanship with modern design
            to create pieces that stand the test of time. Every item in our collection is
            thoughtfully designed with premium materials and meticulous attention to detail.
          </p>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}