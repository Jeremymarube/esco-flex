const REVIEWS = [
  {
    stars: 5,
    text: '"The craftsmanship is incredible. Our living room sofa from Esco Flex is the centerpiece of our home — guests always compliment it."',
    author: "Sarah M.",
  },
  {
    stars: 5,
    text: '"Custom-ordered a dining table and it exceeded all expectations. The quality of the wood and the finish is top-notch."',
    author: "James L.",
  },
  {
    stars: 4,
    text: '"The delivery team was professional and the office desk is both stunning and functional. Best furniture purchase I\'ve ever made."',
    author: "Priya K.",
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i < count ? "#C8922A" : "#E0D5C5"} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "#FAF8F4", padding: "100px 72px" }}>
      <style>{`
        .testi-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .testi-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8922A;
          margin-bottom: 16px;
        }
        .testi-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 600;
          color: #2C2416;
        }
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .testi-card {
          background: #fff;
          border: 1px solid #EDE5D8;
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .testi-card:hover {
          box-shadow: 0 12px 40px rgba(44,36,22,0.08);
          transform: translateY(-4px);
        }
        .testi-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.05rem;
          font-style: italic;
          line-height: 1.75;
          color: #6B4C2A;
          flex: 1;
          margin-bottom: 32px;
        }
        .testi-author {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1rem;
          font-weight: 600;
          color: #2C2416;
        }

        @media (max-width: 900px) {
          .testi-grid { grid-template-columns: 1fr; }
          section#testimonials { padding: 80px 24px; }
        }
      `}</style>

      <div className="testi-header">
        <p className="testi-label">Testimonials</p>
        <h2 className="testi-title">What Our Customers Say</h2>
      </div>

      <div className="testi-grid">
        {REVIEWS.map((r) => (
          <div className="testi-card" key={r.author}>
            <Stars count={r.stars} />
            <p className="testi-text">{r.text}</p>
            <div className="testi-author">{r.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}