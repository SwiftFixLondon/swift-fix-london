import React from "react";

const whatsappUrl =
  "https://wa.me/447345889002?text=Hi%2C%20please%20notify%20me%20when%20Swift%20Fix%20London%20launches.";
const emailUrl =
  "mailto:info@swiftfixlondon.co.uk?subject=Swift%20Fix%20London%20launch%20updates";

const areas = [
  ["Ealing", "city"],
  ["Chiswick", "bridge"],
  ["Acton", "building"],
  ["Hammersmith", "bridge"],
  ["Wembley", "stadium"],
  ["Perivale", "tree"],
  ["Park Royal", "city"],
  ["Alperton", "home"],
];

function Logo({ footer = false }) {
  return (
    <div className={`logo ${footer ? "footerLogo" : ""}`}>
      <svg viewBox="0 0 110 130" className="logoIcon" aria-hidden="true">
        <path d="M55 4C27 4 6 25 6 52c0 34 49 74 49 74s49-40 49-74C104 25 83 4 55 4Z" fill="#1165f5" />
        <circle cx="55" cy="51" r="31" fill="#fff" />
        <path d="M37 52l13 13 27-32" fill="none" stroke="#1165f5" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M47 80l-10 18" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
      </svg>
      <div className="logoWords">
        <strong>Swift Fix</strong>
        <span>London</span>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35ZM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.17 6.44 6.6 2.01 12.05 2.01c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89ZM20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.49-8.41Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Icon({ type }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 2.05, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    truck: <><path {...p} d="M3 7h10v9H3zM13 10h4l4 4v2h-8z" /><circle {...p} cx="7" cy="18" r="2" /><circle {...p} cx="17" cy="18" r="2" /></>,
    shield: <path {...p} d="M12 3 5 6v5c0 5 3.5 8 7 10 3.5-2 7-5 7-10V6l-7-3Z M9 12l2 2 4-5" />,
    award: <><path {...p} d="M12 3 14 6l3-.5.5 3L20 10l-2 2 1 3-3 .5-1.5 2.5-2.5-1-2.5 1L8 15.5l-3-.5 1-3-2-2 2.5-1.5.5-3 3 .5 2-3Z" /><path {...p} d="M9 21l3-4 3 4" /></>,
    city: <path {...p} d="M3 21h18M5 21V8h6v13M13 21V4h6v17M7 11h2M7 15h2M15 8h2M15 12h2M15 16h2" />,
    bridge: <path {...p} d="M4 18h16M6 18V8M18 18V8M6 10c3 4 9 4 12 0M3 12h18" />,
    building: <path {...p} d="M6 21V7l6-4 6 4v14M9 10h2M13 10h2M9 14h2M13 14h2M10 21v-4h4v4" />,
    stadium: <path {...p} d="M4 10c0-3 16-3 16 0v7c0 3-16 3-16 0v-7ZM4 10c0 3 16 3 16 0" />,
    tree: <path {...p} d="M12 21v-7M7 14a5 5 0 1 1 10 0c2 0 4-2 4-5a5 5 0 0 0-7-4 5 5 0 0 0-9 4c0 3 2 5 5 5h2" />,
    home: <path {...p} d="M3 11 12 4l9 7M5 10v11h14V10M10 21v-6h4v6" />,
    globe: <path {...p} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M2 12h20M12 2c3 3 4 6 4 10s-1 7-4 10c-3-3-4-6-4-10s1-7 4-10Z" />,
    clock: <path {...p} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 6v6l4 2" />,
  };
  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>;
}

function LondonHero() {
  return (
    <div className="londonHero" aria-hidden="true">
      <div className="river" />
      <div className="skyline s1" />
      <div className="skyline s2" />
      <div className="eye" />
      <div className="ben" />
      <div className="phone back">
        <div className="lens l1" />
        <div className="lens l2" />
        <div className="lens l3" />
        <div className="flash" />
        <div className="apple">●</div>
      </div>
      <div className="phone front">
        <div className="island" />
        <div className="wallpaper" />
      </div>
      <div className="reflection" />
    </div>
  );
}

export default function SwiftFixLondon() {
  return (
    <main>
      <style>{`
        :root {
          --blue: #075eff;
          --lightBlue: #2e73ea;
          --navy: #061535;
          --text: #0a1735;
          --muted: #455672;
          --line: #e5edf8;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #fff;
          color: var(--text);
        }
        a { color: inherit; text-decoration: none; }

        .topbar {
          height: 38px;
          background: linear-gradient(90deg, #003cd6, #075eff);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          font-weight: 900;
          font-size: 15px;
          letter-spacing: .035em;
        }

        .navWrap {
          height: 126px;
          background: rgba(255,255,255,.98);
          border-bottom: 1px solid var(--line);
        }

        .navInner {
          max-width: 1210px;
          height: 100%;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .logo { display: flex; align-items: center; gap: 13px; }
        .logoIcon { width: 75px; height: 75px; flex: 0 0 75px; }
        .logo strong {
          display: block;
          font-size: 37px;
          font-weight: 950;
          line-height: .88;
          letter-spacing: -.058em;
          color: var(--navy);
        }
        .logo span {
          display: block;
          color: var(--blue);
          font-size: 30px;
          font-weight: 950;
          line-height: .9;
          margin-top: 4px;
          letter-spacing: -.045em;
        }
        .footerLogo strong, .footerLogo span { color: white; }

        nav {
          display: flex;
          align-items: center;
          gap: 30px;
          color: var(--navy);
          text-transform: uppercase;
          font-weight: 950;
          font-size: 13px;
          letter-spacing: -.005em;
        }

        nav a:hover { color: var(--blue); }

        .navButton {
          height: 48px;
          padding: 0 19px;
          border-radius: 9px;
          background: linear-gradient(135deg, #075eff, #0044d9);
          color: white;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          box-shadow: 0 12px 25px rgba(7,94,255,.27);
        }

        .hero {
          overflow: hidden;
          background: linear-gradient(90deg, #fff 0%, #fff 47%, #f5faff 100%);
          border-bottom: 1px solid var(--line);
        }

        .heroInner {
          max-width: 1210px;
          min-height: 650px;
          margin: 0 auto;
          padding: 30px 28px 0;
          display: grid;
          grid-template-columns: 48% 52%;
          align-items: center;
          gap: 0;
        }

        .badge {
          display: inline-flex;
          height: 36px;
          padding: 0 17px;
          align-items: center;
          border-radius: 8px;
          background: #d8e8ff;
          color: var(--blue);
          text-transform: uppercase;
          font-weight: 950;
          letter-spacing: .035em;
          margin: 0 0 32px;
        }

        h1 {
          margin: 0 0 28px;
          color: var(--navy);
          max-width: 630px;
          font-size: clamp(47px, 5.25vw, 67px);
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -.058em;
        }

        h1 span { display: block; color: var(--blue); }

        .heroText p {
          max-width: 530px;
          margin: 0 0 16px;
          font-size: 20px;
          line-height: 1.55;
          color: var(--navy);
        }

        .heroText p.bold {
          font-weight: 850;
        }

        .ctaRow {
          margin: 32px 0 22px;
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          align-items: center;
        }

        .btn {
          height: 58px;
          border-radius: 9px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          text-transform: uppercase;
          font-weight: 950;
          font-size: 15px;
          letter-spacing: .015em;
        }

        .primary {
          min-width: 303px;
          background: linear-gradient(135deg, #075eff, #0044d9);
          color: #fff;
          box-shadow: 0 14px 30px rgba(7,94,255,.28);
        }

        .secondary {
          min-width: 172px;
          background: #fff;
          border: 1.5px solid #95bdff;
          color: var(--blue);
        }

        .privacy {
          color: #67758d;
          font-weight: 650;
          font-size: 13px;
        }

        .londonHero {
          height: 620px;
          position: relative;
          margin-right: -26px;
          overflow: visible;
        }

        .londonHero:before {
          content: "";
          position: absolute;
          inset: 80px 0 0 -110px;
          background:
            radial-gradient(circle at 64% 47%, rgba(7,94,255,.15), transparent 28%),
            linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(221,238,255,.75) 73%, rgba(245,250,255,0) 100%);
          border-radius: 40px;
        }

        .river {
          position: absolute;
          left: -120px;
          right: -80px;
          bottom: 18px;
          height: 165px;
          background:
            radial-gradient(ellipse at 72% 10%, rgba(0,74,225,.24), transparent 45%),
            linear-gradient(180deg, rgba(46,115,234,.16), rgba(255,255,255,.15));
        }

        .river:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 18px;
          height: 80px;
          background:
            repeating-linear-gradient(168deg, rgba(0,88,255,.22) 0 2px, transparent 2px 20px);
          opacity: .45;
          filter: blur(.2px);
        }

        .skyline {
          position: absolute;
          bottom: 130px;
          width: 250px;
          height: 95px;
          opacity: .18;
          background: linear-gradient(180deg, rgba(46,115,234,.55), rgba(46,115,234,.05));
          clip-path: polygon(0 100%,0 70%,7% 70%,7% 58%,14% 58%,14% 76%,22% 76%,22% 50%,28% 50%,28% 70%,38% 70%,38% 42%,43% 42%,43% 76%,52% 76%,52% 60%,60% 60%,60% 78%,70% 78%,70% 48%,76% 48%,76% 70%,86% 70%,86% 56%,93% 56%,93% 76%,100% 76%,100% 100%);
        }

        .s1 { left: -40px; }
        .s2 { right: 20px; bottom: 118px; height: 125px; opacity: .15; }

        .eye {
          position: absolute;
          left: 28px;
          bottom: 155px;
          width: 168px;
          height: 168px;
          border-radius: 50%;
          border: 6px solid rgba(46,115,234,.35);
        }

        .eye:before {
          content: "";
          position: absolute;
          inset: 16px;
          border-radius: 50%;
          border: 2px dashed rgba(46,115,234,.34);
        }

        .eye:after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -72px;
          width: 4px;
          height: 240px;
          background: rgba(46,115,234,.24);
          transform: translateX(-50%) rotate(-20deg);
          box-shadow: 57px 18px 0 rgba(46,115,234,.22), -57px 18px 0 rgba(46,115,234,.22);
        }

        .ben {
          position: absolute;
          right: -3px;
          bottom: 120px;
          width: 96px;
          height: 340px;
          border: 4px solid rgba(46,115,234,.28);
          border-bottom: 0;
        }

        .ben:before {
          content: "";
          position: absolute;
          left: 18px;
          top: -72px;
          width: 56px;
          height: 72px;
          background: rgba(46,115,234,.28);
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }

        .ben:after {
          content: "";
          position: absolute;
          left: 22px;
          top: 40px;
          width: 48px;
          height: 48px;
          border: 4px solid rgba(46,115,234,.35);
          border-radius: 50%;
          box-shadow:
            0 77px 0 -13px rgba(46,115,234,.23),
            0 142px 0 -13px rgba(46,115,234,.23),
            0 207px 0 -13px rgba(46,115,234,.23);
        }

        .phone {
          position: absolute;
          background: #090909;
          box-shadow: 0 40px 70px rgba(0,0,0,.35);
        }

        .phone.back {
          right: 240px;
          bottom: 54px;
          width: 220px;
          height: 500px;
          border-radius: 44px;
          background: linear-gradient(145deg, #2c2d31, #040405 52%, #3b3c40);
          border: 5px solid #24252a;
          transform: rotate(-2deg);
          z-index: 3;
        }

        .phone.back:before {
          content: "";
          position: absolute;
          inset: 16px;
          border-radius: 33px;
          background: linear-gradient(110deg, rgba(255,255,255,.15), transparent 42%);
          opacity: .45;
        }

        .lens {
          position: absolute;
          width: 51px;
          height: 51px;
          border-radius: 50%;
          background: radial-gradient(circle at 55% 45%, #1a2435 0 23%, #030406 27% 60%, #3a3e47 64% 100%);
          border: 4px solid #343842;
          box-shadow: inset 0 0 0 6px #07080a;
        }

        .l1 { left: 27px; top: 30px; }
        .l2 { left: 94px; top: 30px; }
        .l3 { left: 60px; top: 96px; }

        .flash {
          position: absolute;
          left: 130px;
          top: 98px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #deded8;
        }

        .apple {
          position: absolute;
          top: 240px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 52px;
          color: #050505;
          opacity: .92;
        }

        .phone.front {
          right: 55px;
          bottom: 42px;
          width: 252px;
          height: 525px;
          border-radius: 50px;
          border: 6px solid #191a1d;
          overflow: hidden;
          z-index: 5;
        }

        .phone.front:before {
          content: "";
          position: absolute;
          inset: 18px;
          border-radius: 36px;
          background:
            radial-gradient(circle at 62% 42%, rgba(255,255,255,.35), transparent 10%),
            linear-gradient(120deg, #030303 0%, #171b22 42%, #777c84 58%, #08090b 76%);
        }

        .island {
          position: absolute;
          top: 21px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 25px;
          border-radius: 20px;
          background: #020202;
          z-index: 4;
        }

        .wallpaper {
          position: absolute;
          inset: 18px;
          border-radius: 36px;
          background:
            linear-gradient(135deg, transparent 30%, rgba(255,255,255,.08) 49%, transparent 60%);
          z-index: 2;
        }

        .reflection {
          position: absolute;
          right: 50px;
          bottom: 12px;
          width: 430px;
          height: 28px;
          background: radial-gradient(ellipse at center, rgba(0,0,0,.28), transparent 68%);
          filter: blur(7px);
        }

        .soft {
          padding: 54px 30px 28px;
          background:
            radial-gradient(circle at 50% -20%, rgba(7,94,255,.12), transparent 40%),
            linear-gradient(180deg, #f8fbff, #fff);
        }

        .container { max-width: 1120px; margin: 0 auto; }

        .sectionTitle {
          margin: 0 0 32px;
          text-align: center;
          color: var(--navy);
          text-transform: uppercase;
          font-weight: 950;
          font-size: 25px;
          letter-spacing: -.02em;
        }

        .sectionTitle:after {
          content: "";
          display: block;
          width: 48px;
          height: 4px;
          border-radius: 10px;
          background: var(--blue);
          margin: 12px auto 0;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 31px;
          margin-bottom: 38px;
        }

        .card {
          background: #fff;
          border: 1px solid #dce7f8;
          border-radius: 14px;
          text-align: center;
          padding: 34px 32px 30px;
          min-height: 210px;
          box-shadow: 0 10px 24px rgba(12,35,82,.09);
        }

        .cardIcon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #eaf3ff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          margin: 0 auto 17px;
        }

        .icon { width: 46px; height: 46px; }

        .card h3 {
          margin: 0 0 10px;
          color: var(--navy);
          font-weight: 950;
          font-size: 18px;
        }

        .card p {
          margin: 0;
          color: var(--text);
          font-size: 15px;
          line-height: 1.6;
        }

        .areaGrid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 12px;
          margin-top: 8px;
        }

        .area {
          min-height: 106px;
          border-radius: 11px;
          background: #fff;
          border: 1px solid #dce7f8;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: var(--blue);
          box-shadow: 0 8px 20px rgba(12,35,82,.08);
        }

        .area .icon { width: 48px; height: 48px; }
        .area strong { color: var(--navy); font-size: 14px; font-weight: 950; }

        .areaNote {
          margin: 24px 0 0;
          text-align: center;
          color: var(--navy);
          font-size: 16px;
          font-weight: 750;
        }

        .areaNote a { color: var(--blue); font-weight: 950; }

        .contactWrap { padding: 0 30px; background: #fff; }

        .contactPanel {
          max-width: 1120px;
          margin: 0 auto;
          transform: translateY(28px);
          background: radial-gradient(circle at 50% 0, #0e3d91, #061633 58%, #031024);
          color: #fff;
          border-radius: 13px;
          padding: 26px 34px 34px;
          box-shadow: 0 18px 40px rgba(7,23,51,.25);
          position: relative;
          z-index: 2;
        }

        .contactPanel .sectionTitle { color: #fff; margin-bottom: 26px; }

        .contactGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .contactItem {
          text-align: center;
          padding: 8px 28px 0;
          border-right: 1px solid rgba(255,255,255,.18);
        }

        .contactItem:last-child { border-right: 0; }

        .round {
          width: 54px;
          height: 54px;
          margin: 0 auto 13px;
          border-radius: 50%;
          background: linear-gradient(135deg, #075eff, #0038c9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 0 0 5px rgba(15,92,255,.18);
        }

        .round .icon { width: 28px; height: 28px; }

        .contactItem b {
          display: block;
          color: #dce8ff;
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 9px;
        }

        .contactItem span {
          display: block;
          color: #fff;
          font-size: 18px;
          font-weight: 950;
          margin-bottom: 7px;
          word-break: break-word;
        }

        .contactItem p {
          margin: 0 auto;
          max-width: 190px;
          color: #d4def0;
          font-size: 13px;
          line-height: 1.45;
        }

        .footer {
          background: linear-gradient(135deg, #061126, #071a3a);
          color: #fff;
          padding: 74px 30px 26px;
        }

        .footerInner {
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.7fr 1fr 1fr 1fr;
          gap: 52px;
        }

        .footer p, .footer a {
          display: block;
          color: #d3ddec;
          margin: 8px 0;
          line-height: 1.4;
        }

        .footer h4 {
          margin: 0 0 14px;
          text-transform: uppercase;
          font-size: 13px;
          color: #fff;
        }

        .social {
          display: flex;
          gap: 10px;
          align-items: center;
          color: #fff;
          margin: 9px 0;
        }

        .insta {
          width: 20px; height: 20px; border-radius: 5px;
          background: linear-gradient(135deg, #feda75, #d62976, #962fbf, #4f5bd5);
        }

        .google {
          width: 20px; height: 20px; border-radius: 50%;
          background: conic-gradient(#4285f4, #34a853, #fbbc05, #ea4335, #4285f4);
        }

        .copyright {
          max-width: 1120px;
          margin: 36px auto 0;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,.14);
          text-align: center;
          color: #d3ddec;
          font-size: 13px;
        }

        @media (max-width: 980px) {
          nav a:not(.navButton) { display: none; }
          .navWrap { height: auto; }
          .navInner { padding: 18px 20px; }
          .heroInner { grid-template-columns: 1fr; padding: 38px 22px; }
          .londonHero { height: 500px; transform: scale(.82); transform-origin: top center; margin-bottom: -85px; }
          .features, .contactGrid, .footerInner { grid-template-columns: 1fr; }
          .areaGrid { grid-template-columns: repeat(2, 1fr); }
          .contactItem { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.18); padding: 22px 0; }
          .contactItem:last-child { border-bottom: 0; }
          h1 { font-size: 42px; }
          .logoIcon { width: 54px; height: 54px; flex-basis: 54px; }
          .logo strong { font-size: 27px; }
          .logo span { font-size: 22px; }
        }
      `}</style>

      <div className="topbar">🚀 Launching Soon&nbsp; • &nbsp;West London&nbsp; • &nbsp;Join the Waiting List</div>

      <div className="navWrap">
        <div className="navInner">
          <Logo />
          <nav>
            <a href="#services">Services</a>
            <a href="#areas">Areas</a>
            <a href="#how">How It Works</a>
            <a href="#about">About Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
            <a className="navButton" href={whatsappUrl}><WhatsAppIcon /> Notify Me on WhatsApp</a>
          </nav>
        </div>
      </div>

      <section className="hero">
        <div className="heroInner">
          <div className="heroText">
            <div className="badge">Launching Soon</div>
            <h1>
              West London’s Premium iPhone
              <span>Collection &amp; Repair Service</span>
            </h1>
            <p>We’re currently finalising our systems, testing processes and preparing for launch.</p>
            <p className="bold">Join our waiting list and we’ll notify you as soon as bookings open.</p>
            <div className="ctaRow">
              <a className="btn primary" href={whatsappUrl}><WhatsAppIcon /> Notify Me on WhatsApp</a>
              <a className="btn secondary" href={emailUrl}><MailIcon /> Email Us</a>
            </div>
            <div className="privacy">🔒 No spam. We'll only contact you for launch updates.</div>
          </div>
          <LondonHero />
        </div>
      </section>

      <section className="soft" id="how">
        <div className="container">
          <h2 className="sectionTitle">Why Swift Fix London?</h2>
          <div className="features">
            <div className="card"><div className="cardIcon"><Icon type="truck" /></div><h3>Collection &amp; Return</h3><p>We collect your device from your doorstep and return it fully repaired. Fast, safe and convenient.</p></div>
            <div className="card"><div className="cardIcon"><Icon type="shield" /></div><h3>Fully Insured</h3><p>Your device is fully insured while in transit and during the repair process for complete peace of mind.</p></div>
            <div className="card"><div className="cardIcon"><Icon type="award" /></div><h3>Warranty Included</h3><p>All repairs come with a warranty for your peace of mind and long-term reliability.</p></div>
          </div>

          <h2 className="sectionTitle" id="areas">Areas We Cover</h2>
          <div className="areaGrid">
            {areas.map(([name, icon]) => (
              <div className="area" key={name}>
                <Icon type={icon} />
                <strong>{name}</strong>
              </div>
            ))}
          </div>
          <p className="areaNote">📍 Don’t see your area? <a href={whatsappUrl}>Contact us</a> — we may still be able to help.</p>
        </div>
      </section>

      <section className="contactWrap" id="contact">
        <div className="contactPanel">
          <h2 className="sectionTitle">Get In Touch</h2>
          <div className="contactGrid">
            <div className="contactItem"><div className="round"><WhatsAppIcon /></div><b>WhatsApp</b><span>07345 889002</span><p>Chat with us on WhatsApp for the fastest response.</p></div>
            <div className="contactItem"><div className="round"><MailIcon /></div><b>Email</b><span>info@swiftfixlondon.co.uk</span><p>Send us an email and we'll get back to you soon.</p></div>
            <div className="contactItem"><div className="round"><Icon type="globe" /></div><b>Website</b><span>swiftfixlondon.co.uk</span><p>Visit our website for updates and more information.</p></div>
            <div className="contactItem"><div className="round"><Icon type="clock" /></div><b>Hours</b><span>Mon – Sat: 9:00 – 18:00</span><p>We'll be ready to serve you very soon.</p></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div><Logo footer /><p>West London’s premium iPhone collection &amp; repair service.</p></div>
          <div><h4>Quick Links</h4><a href="#services">Services</a><a href="#areas">Areas We Cover</a><a href="#how">How It Works</a><a href="#about">About Us</a><a href="#contact">Contact</a></div>
          <div><h4>Follow Us</h4><div className="social"><span className="insta" />Instagram</div><div className="social"><span className="google" />Google</div></div>
          <div><h4>Legal</h4><a href="#privacy">Privacy Policy</a><a href="#terms">Terms &amp; Conditions</a><a href="#warranty">Warranty Policy</a></div>
        </div>
        <div className="copyright">© Swift Fix London. All rights reserved.</div>
      </footer>
    </main>
  );
}
