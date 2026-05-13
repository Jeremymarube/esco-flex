"use client"

import { useState } from "react";

const IconCircle = ({ children }) => (
  <div style={{
    width: 44, height: 44, borderRadius: "50%",
    background: "#EDE5D8", display: "flex",
    alignItems: "center", justifyContent: "center", flexShrink: 0,
  }}>
    {children}
  </div>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ background: "#FAF8F4", padding: "100px 72px" }}>
      <style>{`
        .contact-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .contact-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8922A;
          margin-bottom: 16px;
        }
        .contact-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 600;
          color: #2C2416;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .contact-row {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          color: #4A3B2A;
        }
        .contact-socials {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .social-btn {
          width: 44px; height: 44px; border-radius: 50%;
          background: #EDE5D8;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          border: none;
          transition: background 0.25s, transform 0.25s;
          text-decoration: none;
        }
        .social-btn:hover {
          background: #C8922A;
          transform: translateY(-3px);
        }
        .social-btn:hover svg { stroke: #fff; }

        /* Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cf-input {
          width: 100%;
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          color: #2C2416;
          background: #F5F0E8;
          border: 1px solid #E8DFCF;
          padding: 18px 20px;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          resize: none;
          appearance: none;
          border-radius: 0;
        }
        .cf-input::placeholder { color: #B5A898; }
        .cf-input:focus {
          border-color: #C8922A;
          box-shadow: 0 0 0 3px rgba(200,146,42,0.1);
        }
        .cf-submit {
          width: 100%;
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #fff;
          background: #C8922A;
          border: none;
          padding: 20px;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
          margin-top: 4px;
        }
        .cf-submit:hover {
          background: #A87420;
          transform: translateY(-2px);
        }
        .cf-success {
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          color: #6B4C2A;
          text-align: center;
          padding: 20px;
          background: #EDE5D8;
          border: 1px solid #C8922A;
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
          section#contact { padding: 80px 24px; }
        }
      `}</style>

      <div className="contact-header">
        <p className="contact-label">Get In Touch</p>
        <h2 className="contact-title">Contact Us</h2>
      </div>

      <div className="contact-grid">
        {/* Left — info */}
        <div className="contact-info">
          <div className="contact-row">
            <IconCircle>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </IconCircle>
            <span>123 Furniture Lane, Design District, NY 10001</span>
          </div>

          <div className="contact-row">
            <IconCircle>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </IconCircle>
            <span>+1 (555) 234-5678</span>
          </div>

          <div className="contact-row">
            <IconCircle>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </IconCircle>
            <span>hello@escoflex.com</span>
          </div>

          {/* Socials */}
          <div className="contact-socials">
            {[
              { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 20.5h9a5 5 0 005-5v-9a5 5 0 00-5-5h-9a5 5 0 00-5 5v9a5 5 0 005 5z" },
              { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
            ].map((s) => (
              <a key={s.label} href="#" className="social-btn" aria-label={s.label}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.path}/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div className="cf-success">Thank you! We'll be in touch shortly.</div>
          ) : (
            <div className="contact-form">
              <input
                className="cf-input"
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className="cf-input"
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
              <textarea
                className="cf-input"
                name="message"
                placeholder="Your Message"
                rows={6}
                value={form.message}
                onChange={handleChange}
              />
              <button className="cf-submit" onClick={handleSubmit}>
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}