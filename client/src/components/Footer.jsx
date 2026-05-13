export default function Footer() {
  const socials = [
    {
      label: "TikTok",
      href: "#",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="#C8922A" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "#",
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ];

  return (
    <footer>
      <style>{`
        footer {
          background: #7B4F1E;
          padding: 40px 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .footer-left {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .footer-logo {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          white-space: nowrap;
        }
        .footer-logo .flex { color: #C8922A; }
        .footer-logo .furniture { color: #fff; font-weight: 400; }

        .footer-socials {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .footer-social-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s, transform 0.25s;
        }
        .footer-social-btn:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(-3px);
        }
        .footer-social-btn svg { stroke: #fff; }

        .footer-copy {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.7);
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          footer {
            flex-direction: column;
            align-items: flex-start;
            padding: 36px 24px;
            gap: 20px;
          }
          .footer-copy { font-size: 0.75rem; }
        }
      `}</style>

      <div className="footer-left">
        <a href="#home" className="footer-logo">
          Esco<span className="flex">Flex</span> <span className="furniture">Furniture</span>
        </a>
        <div className="footer-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="footer-social-btn" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="footer-copy">© 2026 Esco Flex Furniture. All rights reserved.</p>
    </footer>
  );
}