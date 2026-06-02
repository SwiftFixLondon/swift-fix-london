import React from "react";

const areas = ["Ealing", "Chiswick", "Acton", "Hammersmith", "Wembley", "Perivale", "Park Royal", "Alperton"];

const whatsappUrl =
  "https://wa.me/447345889002?text=Hi%2C%20please%20notify%20me%20when%20Swift%20Fix%20London%20launches.";
const emailUrl =
  "mailto:info@swiftfixlondon.co.uk?subject=Swift%20Fix%20London%20launch%20updates";

function Logo() {
  return (
    <div className="logo">
      <img src="/favicon.png" alt="Swift Fix London" />
      <div>
        <strong>Swift Fix</strong>
        <span>London</span>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return <span style={{ fontSize: 20 }}>☏</span>;
}

export default function SwiftFixLondon() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #071733; background: white; }
        a { color: inherit; }
        .topbar { background: linear-gradient(90deg, #0039cc, #075df5); color: white; text-align: center; padding: 10px 16px; font-size: 14px; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; }
        .header { height: 88px; display: flex; align-items: center; justify-content: space-between; max-width: 1180px; margin: 0 auto; padding: 0 28px; border-bottom: 1px solid #e8eef8; }
        .logo { display: flex; align-items: center; gap: 12px; }
        .logo img { width: 58px; height: 58px; object-fit: contain; }
        .logo strong { display: block; font-size: 30px; line-height: .95; color: #071733; letter-spacing: -0.04em; }
        .logo span { display: block; font-size: 23px; font-weight: 800; color: #0f5cff; letter-spacing: -0.03em; }
        .nav { display: flex; align-items: center; gap: 30px; font-size: 13px; font-weight: 800; text-transform: uppercase; }
        .nav a { text-decoration: none; }
        .nav .cta { background: #0f5cff; color: white; padding: 14px 18px; border-radius: 10px; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 10px 24px rgba(15,92,255,.24); }
        .hero { position: relative; overflow: hidden; border-bottom: 1px solid #e8eef8; }
        .heroInner { max-width: 1180px; margin: 0 auto; padding: 72px 28px 60px; display: grid; grid-template-columns: 1.05fr .95fr; gap: 34px; align-items: center; }
        .badge { display: inline-block; background: #dbeafe; color: #0f5cff; padding: 10px 16px; border-radius: 10px; font-weight: 900; text-transform: uppercase; letter-spacing: .04em; margin-bottom: 28px; }
        h1 { font-size: clamp(44px, 6vw, 72px); line-height: 1.05; letter-spacing: -0.06em; margin: 0 0 26px; color: #071733; }
        h1 span { color: #0f5cff; display: block; }
        .lead { font-size: 20px; line-height: 1.45; font-weight: 800; margin: 0 0 22px; max-width: 560px; }
        .copy { font-size: 18px; line-height: 1.65; color: #24324f; max-width: 560px; margin: 0 0 30px; }
        .actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 20px; }
        .button { height: 58px; padding: 0 24px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; font-size: 15px; font-weight: 900; text-transform: uppercase; }
        .primary { background: #0f5cff; color: white; box-shadow: 0 12px 28px rgba(15,92,255,.28); }
        .secondary { border: 1px solid #9bbdff; color: #0f5cff; background: white; }
        .note { color: #64748b; font-size: 13px; }
        .heroVisual { min-height: 430px; border-radius: 28px; background:
          radial-gradient(circle at 70% 40%, rgba(15,92,255,.18), transparent 28%),
          linear-gradient(135deg, #f8fbff, #e8f2ff);
          position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .phone { width: 270px; height: 420px; background: linear-gradient(145deg, #111, #333); border-radius: 42px; border: 10px solid #151515; box-shadow: 0 28px 60px rgba(0,0,0,.28); position: relative; }
        .phone:before { content: ""; position: absolute; top: 14px; left: 50%; transform: translateX(-50%); width: 88px; height: 24px; background: #050505; border-radius: 16px; }
        .phone:after { content: ""; position: absolute; inset: 65px 20px 22px; border-radius: 28px; background: linear-gradient(145deg, #0b0b0d, #5b6574); opacity: .95; }
        .features, .areas { background: #f3f7ff; padding: 58px 28px; }
        .section { max-width: 1180px; margin: 0 auto; }
        .section h2 { text-align: center; margin: 0 0 34px; color: #071733; font-size: 26px; text-transform: uppercase; letter-spacing: -0.02em; }
        .section h2:after { content: ""; display: block; width: 48px; height: 4px; border-radius: 4px; background: #0f5cff; margin: 10px auto 0; }
        .featureGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
        .card { background: white; border: 1px solid #dbe7fb; border-radius: 16px; padding: 32px; text-align: center; box-shadow: 0 8px 28px rgba(15,92,255,.08); }
        .icon { font-size: 42px; margin-bottom: 14px; color: #0f5cff; }
        .card h3 { margin: 0 0 10px; font-size: 18px; }
        .card p { margin: 0; color: #334155; line-height: 1.55; }
        .areaGrid { display: grid; grid-template-columns: repeat(8, 1fr); gap: 14px; }
        .area { background: white; border: 1px solid #dbe7fb; border-radius: 14px; padding: 20px 10px; text-align: center; font-weight: 800; box-shadow: 0 8px 22px rgba(15,92,255,.08); }
        .area span { display: block; color: #0f5cff; font-size: 32px; margin-bottom: 8px; }
        .contact { background: #071733; color: white; padding: 64px 28px; }
        .contactBox { max-width: 1180px; margin: 0 auto; background: linear-gradient(135deg, #071733, #041025); border-radius: 22px; padding: 42px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; box-shadow: 0 20px 60px rgba(0,0,0,.22); }
        .contactItem { text-align: center; border-right: 1px solid rgba(255,255,255,.15); padding: 8px 12px; }
        .contactItem:last-child { border-right: none; }
        .contactItem b { display: block; color: white; font-size: 13px; text-transform: uppercase; margin-bottom: 9px; }
        .contactItem span { color: white; font-size: 18px; font-weight: 800; }
        .contactItem p { color: #cbd5e1; margin: 8px 0 0; font-size: 13px; line-height: 1.45; }
        .footer { background: #061126; color: white; padding: 42px 28px 26px; }
        .footerInner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr; gap: 34px; }
        .footer h4 { margin: 0 0 14px; font-size: 14px; text-transform: uppercase; color: white; }
        .footer a, .footer p { display: block; color: #cbd5e1; text-decoration: none; margin: 8px 0; }
        .copyright { max-width: 1180px; margin: 28px auto 0; padding-top: 22px; border-top: 1px solid rgba(255,255,255,.14); text-align: center; color: #cbd5e1; }
        @media (max-width: 900px) {
          .nav a:not(.cta) { display: none; }
          .header { height: 78px; padding: 0 18px; }
          .logo img { width: 46px; height: 46px; }
          .logo strong { font-size: 23px; }
          .logo span { font-size: 18px; }
          .heroInner { grid-template-columns: 1fr; padding: 48px 20px; }
          .heroVisual { min-height: 320px; }
          .phone { width: 190px; height: 300px; border-radius: 30px; }
          .featureGrid, .contactBox, .footerInner { grid-template-columns: 1fr; }
          .areaGrid { grid-template-columns: repeat(2, 1fr); }
          .contactItem { border-right: none; border-bottom: 1px solid rgba(255,255,255,.15); padding: 18px 0; }
          .contactItem:last-child { border-bottom: none; }
        }
      `}</style>

      <div className="topbar">🚀 Launching Soon · West London · Join the Waiting List</div>

      <header className="header">
        <Logo />
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#areas">Areas</a>
          <a href="#how">How It Works</a>
          <a href="#contact">Contact</a>
          <a className="cta" href={whatsappUrl}><WhatsAppIcon /> Notify Me</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroInner">
          <div>
            <div className="badge">Launching Soon</div>
            <h1>West London’s Premium iPhone <span>Collection & Repair Service</span></h1>
            <p className="lead">West London’s premium iPhone collection & repair service.</p>
            <p className="copy">
              We’re currently finalising our systems, testing processes and preparing for launch.
              Join our waiting list and we’ll notify you as soon as bookings open.
            </p>
            <div className="actions">
              <a className="button primary" href={whatsappUrl}><WhatsAppIcon /> Notify Me on WhatsApp</a>
              <a className="button secondary" href={emailUrl}>✉️ Email Us</a>
            </div>
            <div className="note">🔒 No spam. We’ll only contact you for launch updates.</div>
          </div>

          <div className="heroVisual" aria-hidden="true">
            <div className="phone"></div>
          </div>
        </div>
      </section>

      <section className="features" id="how">
        <div className="section">
          <h2>Why Swift Fix London?</h2>
          <div className="featureGrid">
            <div className="card"><div className="icon">🚚</div><h3>Collection & Return</h3><p>We collect your device from your doorstep and return it fully repaired. Fast, safe and convenient.</p></div>
            <div className="card"><div className="icon">🛡️</div><h3>Fully Insured</h3><p>Your device is fully insured while in transit and during the repair process.</p></div>
            <div className="card"><div className="icon">✅</div><h3>Warranty Included</h3><p>All repairs come with a warranty for your peace of mind and long-term reliability.</p></div>
          </div>
        </div>
      </section>

      <section className="areas" id="areas">
        <div className="section">
          <h2>Areas We Cover</h2>
          <div className="areaGrid">
            {areas.map((area) => <div className="area" key={area}><span>📍</span>{area}</div>)}
          </div>
          <p style={{ textAlign: "center", marginTop: 26, color: "#071733", fontWeight: 700 }}>
            Don’t see your area? <a href={whatsappUrl} style={{ color: "#0f5cff" }}>Contact us</a> — we may still be able to help.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactBox">
          <div className="contactItem"><b>WhatsApp</b><span>07345 889002</span><p>Chat with us on WhatsApp for the fastest response.</p></div>
          <div className="contactItem"><b>Email</b><span>info@swiftfixlondon.co.uk</span><p>Send us an email and we’ll get back to you soon.</p></div>
          <div className="contactItem"><b>Website</b><span>swiftfixlondon.co.uk</span><p>Visit our website for updates and more information.</p></div>
          <div className="contactItem"><b>Hours</b><span>Mon – Sat: 9:00 – 18:00</span><p>We’ll be ready to serve you very soon.</p></div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div><Logo /><p>West London’s premium iPhone collection & repair service.</p></div>
          <div><h4>Quick Links</h4><a href="#services">Services</a><a href="#areas">Areas We Cover</a><a href="#how">How It Works</a><a href="#contact">Contact</a></div>
          <div><h4>Follow Us</h4><p>Instagram — Coming Soon</p><p>Google — Coming Soon</p></div>
          <div><h4>Legal</h4><p>Privacy Policy</p><p>Terms & Conditions</p><p>Warranty Policy</p></div>
        </div>
        <div className="copyright">© Swift Fix London. All rights reserved.</div>
      </footer>
    </main>
  );
}
