const ITEMS = [
  {
    name: "Living Room",
    price: "From $899",
    img: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=700&q=80",
  },
  {
    name: "Bedroom",
    price: "From $1,199",
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
  },
  {
    name: "Office",
    price: "From $649",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
  },
  {
    name: "Dining",
    price: "From $1,499",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=700&q=80",
  },
];

export default function Collection() {
  return (
    <section id="collection" style={{ background: "#FAF8F4", padding: "100px 72px" }}>
      <style>{`
        .col-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .col-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8922A;
          margin-bottom: 16px;
        }
        .col-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 600;
          color: #2C2416;
          line-height: 1.15;
        }
        .col-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .col-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border-radius: 2px;
        }
        .col-card img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }
        .col-card:hover img {
          transform: scale(1.05);
        }
        .col-card-info {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 48px 24px 24px;
          background: linear-gradient(to top, rgba(44,36,22,0.78) 0%, transparent 100%);
        }
        .col-card-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }
        .col-card-price {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.04em;
        }

        @media (max-width: 900px) {
          .col-grid { grid-template-columns: repeat(2, 1fr); }
          section#collection { padding: 80px 24px; }
        }
        @media (max-width: 500px) {
          .col-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="col-header">
        <p className="col-label">Our Collection</p>
        <h2 className="col-title">Curated for Every Space</h2>
      </div>

      <div className="col-grid">
        {ITEMS.map((item) => (
          <div className="col-card" key={item.name}>
            <img src={item.img} alt={item.name} loading="lazy" />
            <div className="col-card-info">
              <div className="col-card-name">{item.name}</div>
              <div className="col-card-price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}