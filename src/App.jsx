import React from "react";

const whatsappUrl =
  "https://wa.me/447345889002?text=Hi%2C%20please%20notify%20me%20when%20Swift%20Fix%20London%20launches.";
const emailUrl =
  "mailto:info@swiftfixlondon.co.uk?subject=Swift%20Fix%20London%20launch%20updates";

const areas = [
  "Ealing",
  "Chiswick",
  "Acton",
  "Hammersmith",
  "Wembley",
  "Perivale",
  "Park Royal",
  "Alperton",
];

function Logo({ footer = false }) {
  return (
    <div className={`logo ${footer ? "footerLogo" : ""}`}>
      <svg viewBox="0 0 120 150" className="logoIcon" aria-hidden="true">
        <path
          d="M60 6C30 6 8 29 8 58c0 37 52 86 52 86s52-49 52-86C112 29 90 6 60 6Z"
          fill="#2e73ea"
        />
        <circle cx="60" cy="57" r="34" fill="#fff" />
        <path
          d="M41 57l14 14 29-34"
          fill="none"
          stroke="#2e73ea"
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M52 87l-10 18" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
      </svg>
      <div>
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

function LineIcon({ type }) {
  const s = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.1,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    collection: (
      <>
        <path {...s} d="M3 7h10v9H3zM13 10h4l4 4v2h-8z" />
        <circle {...s} cx="7" cy="18" r="2" />
        <circle {...s} cx="17" cy="18" r="2" />
      </>
    ),
    shield: <path {...s} d="M12 3 5 6v5c0 5 3.5 8 7 10 3.5-2 7-5 7-10V6l-7-3Z M9 12l2 2 4-5" />,
    warranty: (
      <>
        <path {...s} d="M12 3 14 6l3-.5.5 3L20 10l-2 2 1 3-3 .5-1.5 2.5-2.5-1-2.5 1L8 15.5l-3-.5 1-3-2-2 2.5-1.5.5-3 3 .5 2-3Z" />
        <path {...s} d="M9 21l3-4 3 4" />
      </>
    ),
    building: <path {...s} d="M5 21V8l8-4v17M13 9h6v12M8 10h2M8 14h2M8 18h2M16 13h1M16 17h1" />,
    bridge: <path {...s} d="M4 18h16M6 18V8M18 18V8M6 10c3 4 9 4 12 0M3 12h18" />,
    stadium: <path {...s} d="M4 10c0-3 16-3 16 0v7c0 3-16 3-16 0v-7ZM4 10c0 3 16 3 16 0" />,
    tree: <path {...s} d="M12 21v-7M7 14a5 5 0 1 1 10 0c2 0 4-2 4-5a5 5 0 0 0-7-4 5 5 0 0 0-9 4c0 3 2 5 5 5h2" />,
    city: <path {...s} d="M3 21h18M5 21V8h6v13M13 21V4h6v17M7 11h2M7 15h2M15 8h2M15 12h2M15 16h2" />,
    home: <path {...s} d="M3 11 12 4l9 7M5 10v11h14V10M10 21v-6h4v6" />,
    globe: <path {...s} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M2 12h20M12 2c3 3 4 6 4 10s-1 7-4 10c-3-3-4-6-4-10s1-7 4-10Z" />,
    clock: <path {...s} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 6v6l4 2" />,
  };

  return <svg className="lineIcon" viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>;
}

function HeroVisual() {
  return (
    <div className="heroVisual" aria-hidden="true">
      <div className="londonEye" />
      <div className="bigBen" />
      <div className="water" />
      <div className="iphoneBack">
        <div className="lens l1" />
        <div className="lens l2" />
        <div className="lens l3" />
        <div className="flash" />
        <div className="appleMark">●</div>
      </div>
      <div className="iphoneFront">
        <div className="dynamicIsland" />
        <div className="screenHighlight" />
      </div>
    </div>
  );
}

export default function SwiftFixLondon() {
  const areaIcons = {
    Ealing: "building",
    Chiswick: "bridge",
    Acton: "building",
    Hammersmith: "bridge",
    Wembley: "stadium",
    Perivale: "tree",
    "Park Royal": "city",
    Alperton: "home",
  };

  return (
    <main>
      <style>{`
        :root {
          --blue: #075eff;
          --logoBlue: #2e73ea;
          --navy: #071733;
          --text: #0b1b3f;
          --muted: #52627a;
          --line: #e5eefb;
          --soft: #f6faff;
          --dark: #061126;
        }

        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--text);
          background: #fff;
        }

        a { text-decoration: none; color: inherit; }

        .topbar {
          height: 39px;
          background: linear-gradient(90deg, #0039d7, #075eff);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .045em;
        }

        .header {
          height: 126px;
          max-width: 1230px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--line);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 235px;
        }

        .logoIcon {
          width: 74px;
          height: 74px;
          flex: 0 0 74px;
        }

        .logo strong {
          display: block;
          color: var(--navy);
          font-size: 37px;
          font-weight: 950;
          line-height: .88;
          letter-spacing: -.06em;
        }

        .logo span {
          display: block;
          color: var(--blue);
          font-size: 30px;
          font-weight: 950;
          line-height: .9;
          letter-spacing: -.045em;
          margin-top: 4px;
        }

        .footerLogo strong,
        .footerLogo span { color: #fff; }

        .nav {
          display: flex;
          align-items: center;
          gap: 30px;
          font-size: 13px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: -.01em;
          color: var(--navy);
        }

        .nav a:hover { color: var(--blue); }

        .navCta {
          height: 49px;
          padding: 0 19px;
          border-radius: 10px;
          background: linear-gradient(135deg, #075eff, #003fd7);
          color: #fff !important;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          box-shadow: 0 12px 26px rgba(7,94,255,.26);
        }

        .hero {
          background:
            radial-gradient(circle at 68% 48%, rgba(7,94,255,.11), transparent 33%),
            linear-gradient(90deg, #fff 0%, #fff 48%, #f4f9ff 100%);
          overflow: hidden;
          border-bottom: 1px solid var(--line);
        }

        .heroInner {
          max-width: 1230px;
          min-height: 650px;
          margin: 0 auto;
          padding: 45px 32px 35px;
          display: grid;
          grid-template-columns: .98fr 1.02fr;
          align-items: center;
          gap: 28px;
        }

        .launchBadge {
          display: inline-flex;
          height: 38px;
          padding: 0 17px;
          align-items: center;
          border-radius: 9px;
          background: #dceaff;
          color: var(--blue);
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .04em;
          margin-bottom: 33px;
        }

        h1 {
          margin: 0 0 31px;
          max-width: 660px;
          color: var(--navy);
          font-size: clamp(48px, 5.35vw, 67px);
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -.06em;
        }

        h1 span {
          display: block;
          color: var(--blue);
        }

        .heroCopy p {
          max-width: 540px;
          margin: 0 0 16px;
          color: var(--navy);
          font-size: 20px;
          line-height: 1.55;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 18px;
          margin: 34px 0 22px;
        }

        .btn {
          height: 58px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .015em;
        }

        .btnPrimary {
          min-width: 306px;
          background: linear-gradient(135deg, #075eff, #003fd7);
          color: #fff;
          box-shadow: 0 15px 30px rgba(7,94,255,.28);
        }

        .btnSecondary {
          min-width: 185px;
          background: #fff;
          color: var(--blue);
          border: 1.5px solid #9bc0ff;
        }

        .privacy {
          color: #66738c;
          font-size: 13px;
          font-weight: 650;
        }

        .heroVisual {
          position: relative;
          height: 560px;
          min-width: 0;
        }

        .heroVisual:before {
          content: "";
          position: absolute;
          inset: 30px -20px 0 0;
          background:
            linear-gradient(180deg, transparent 0%, rgba(46,115,234,.12) 58%, rgba(46,115,234,.02) 100%);
          border-radius: 40px;
        }

        .water {
          position: absolute;
          left: -35px;
          right: -35px;
          bottom: 0;
          height: 98px;
          background:
            radial-gradient(ellipse at 50% 0, rgba(7,94,255,.16), transparent 70%),
            linear-gradient(180deg, rgba(46,115,234,.1), rgba(46,115,234,.03));
        }

        .londonEye {
          position: absolute;
          left: 2px;
          bottom: 98px;
          width: 160px;
          height: 160px;
          border: 6px solid rgba(46,115,234,.27);
          border-radius: 50%;
        }

        .londonEye:before {
          content: "";
          position: absolute;
          inset: 16px;
          border: 2px dashed rgba(46,115,234,.25);
          border-radius: 50%;
        }

        .londonEye:after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -70px;
          width: 4px;
          height: 230px;
          background: rgba(46,115,234,.2);
          transform: translateX(-50%) rotate(-20deg);
          box-shadow: 54px 18px 0 rgba(46,115,234,.2), -54px 18px 0 rgba(46,115,234,.2);
        }

        .bigBen {
          position: absolute;
          right: -12px;
          bottom: 38px;
          width: 98px;
          height: 370px;
          border: 4px solid rgba(46,115,234,.22);
          border-bottom: 0;
        }

        .bigBen:before {
          content: "";
          position: absolute;
          left: 19px;
          top: -72px;
          width: 58px;
          height: 72px;
          background: rgba(46,115,234,.22);
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }

        .bigBen:after {
          content: "";
          position: absolute;
          left: 23px;
          top: 42px;
          width: 48px;
          height: 48px;
          border: 4px solid rgba(46,115,234,.22);
          border-radius: 50%;
          box-shadow:
            0 82px 0 -13px rgba(46,115,234,.2),
            0 150px 0 -13px rgba(46,115,234,.2),
            0 218px 0 -13px rgba(46,115,234,.2);
        }

        .iphoneBack {
          position: absolute;
          right: 220px;
          bottom: 32px;
          width: 214px;
          height: 465px;
          border-radius: 42px;
          background: linear-gradient(145deg, #29292b, #050505 52%, #3c3c3f);
          border: 5px solid #202024;
          box-shadow: 0 34px 65px rgba(0,0,0,.32);
          transform: rotate(-2deg);
          z-index: 2;
        }

        .iphoneBack:before {
          content: "";
          position: absolute;
          inset: 16px;
          border-radius: 31px;
          background: linear-gradient(110deg, rgba(255,255,255,.16), transparent 42%);
          opacity: .45;
        }

        .lens {
          position: absolute;
          width: 49px;
          height: 49px;
          border-radius: 50%;
          background: radial-gradient(circle, #111 0 35%, #010101 38% 62%, #363a42 65% 100%);
          border: 4px solid #30343b;
          box-shadow: inset 0 0 0 5px #07080b;
        }

        .l1 { left: 27px; top: 31px; }
        .l2 { left: 92px; top: 31px; }
        .l3 { left: 60px; top: 94px; }

        .flash {
          position: absolute;
          left: 126px;
          top: 94px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ddd;
        }

        .appleMark {
          position: absolute;
          top: 218px;
          left: 50%;
          transform: translateX(-50%);
          color: #070707;
          font-size: 50px;
        }

        .iphoneFront {
          position: absolute;
          right: 52px;
          bottom: 24px;
          width: 245px;
          height: 500px;
          border-radius: 48px;
          background: #090909;
          border: 6px solid #1b1b1d;
          box-shadow: 0 34px 65px rgba(0,0,0,.42);
          z-index: 4;
          overflow: hidden;
        }

        .iphoneFront:before {
          content: "";
          position: absolute;
          inset: 18px;
          border-radius: 34px;
          background:
            radial-gradient(circle at 65% 46%, rgba(255,255,255,.35), transparent 9%),
            linear-gradient(120deg, #060606 0%, #1b1f25 42%, #767a80 58%, #111 72%);
        }

        .dynamicIsland {
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 78px;
          height: 25px;
          background: #030303;
          border-radius: 20px;
          z-index: 5;
        }

        .screenHighlight {
          position: absolute;
          inset: 18px;
          border-radius: 34px;
          background: linear-gradient(135deg, transparent 30%, rgba(255,255,255,.08) 49%, transparent 60%);
        }

        .softSection {
          background:
            radial-gradient(circle at 50% -20%, rgba(7,94,255,.12), transparent 42%),
            linear-gradient(180deg, #f8fbff, #fff);
          padding: 52px 32px 18px;
        }

        .container {
          max-width: 1120px;
          margin: 0 auto;
        }

        .sectionTitle {
          margin: 0 0 32px;
          color: var(--navy);
          font-size: 25px;
          font-weight: 950;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: -.02em;
        }

        .sectionTitle:after {
          content: "";
          display: block;
          width: 48px;
          height: 4px;
          background: var(--blue);
          border-radius: 20px;
          margin: 12px auto 0;
        }

        .featuresGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 31px;
          margin-bottom: 40px;
        }

        .featureCard {
          min-height: 214px;
          background: #fff;
          border: 1px solid #dbe7fb;
          border-radius: 15px;
          padding: 34px 32px 30px;
          text-align: center;
          box-shadow: 0 8px 22px rgba(12,35,82,.08);
        }

        .lineIcon {
          width: 54px;
          height: 54px;
          color: var(--blue);
          margin-bottom: 18px;
        }

        .featureCard h3 {
          margin: 0 0 10px;
          color: var(--navy);
          font-size: 18px;
          font-weight: 950;
        }

        .featureCard p {
          margin: 0;
          font-size: 15px;
          line-height: 1.6;
          color: var(--text);
        }

        .areaGrid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 0;
          margin-top: 8px;
        }

        .areaItem {
          min-height: 100px;
          color: var(--blue);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-right: 1px solid #d7e2f5;
        }

        .areaItem:last-child { border-right: 0; }

        .areaItem .lineIcon {
          width: 48px;
          height: 48px;
          margin: 0;
        }

        .areaItem strong {
          color: var(--navy);
          font-size: 14px;
          font-weight: 950;
        }

        .areaNote {
          margin: 24px 0 0;
          color: var(--navy);
          text-align: center;
          font-size: 16px;
          font-weight: 750;
        }

        .areaNote a {
          color: var(--blue);
          font-weight: 950;
        }

        .contactWrap {
          background: #fff;
          padding: 0 32px;
        }

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

        .contactPanel .sectionTitle {
          color: #fff;
          margin-bottom: 26px;
        }

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

        .roundIcon {
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

        .roundIcon .lineIcon {
          width: 28px;
          height: 28px;
          margin: 0;
          color: #fff;
        }

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
          padding: 74px 32px 26px;
        }

        .footerInner {
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.7fr 1fr 1fr 1fr;
          gap: 52px;
        }

        .footer p,
        .footer a {
          display: block;
          color: #d3ddec;
          margin: 8px 0;
          line-height: 1.4;
        }

        .footer h4 {
          margin: 0 0 14px;
          color: #fff;
          text-transform: uppercase;
          font-size: 13px;
        }

        .copyright {
          max-width: 1120px;
          margin: 36px auto 0;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,.14);
          color: #d3ddec;
          text-align: center;
          font-size: 13px;
        }

        @media (max-width: 980px) {
          .nav a:not(.navCta) { display: none; }
          .header { height: auto; padding: 18px 20px; }
          .heroInner { grid-template-columns: 1fr; padding: 42px 22px; }
          .heroVisual { height: 420px; transform: scale(.78); transform-origin: top center; margin-bottom: -80px; }
          .featuresGrid, .contactGrid, .footerInner { grid-template-columns: 1fr; }
          .areaGrid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .areaItem { border: 1px solid #d7e2f5; border-radius: 12px; background: #fff; }
          .contactItem { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.18); padding: 22px 0; }
          .contactItem:last-child { border-bottom: 0; }
          h1 { font-size: 42px; }
          .logoIcon { width: 54px; height: 54px; flex-basis: 54px; }
          .logo strong { font-size: 27px; }
          .logo span { font-size: 22px; }
        }
      `}</style>

      <div className="topbar">🚀 Launching Soon&nbsp; • &nbsp;West London&nbsp; • &nbsp;Join the Waiting List</div>

      <header className="header">
        <Logo />
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#areas">Areas</a>
          <a href="#how">How It Works</a>
          <a href="#about">About Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
          <a className="navCta" href={whatsappUrl}>
            <WhatsAppIcon /> Notify Me on WhatsApp
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroInner">
          <div className="heroCopy">
            <div className="launchBadge">Launching Soon</div>
            <h1>
              West London’s Premium iPhone
              <span>Collection &amp; Repair Service</span>
            </h1>
            <p>We’re currently finalising our systems,<br />testing processes and preparing for launch.</p>
            <p>Join our waiting list and we’ll notify you<br />as soon as bookings open.</p>
            <div className="actions">
              <a className="btn btnPrimary" href={whatsappUrl}>
                <WhatsAppIcon /> Notify Me on WhatsApp
              </a>
              <a className="btn btnSecondary" href={emailUrl}>
                <MailIcon /> Email Us
              </a>
            </div>
            <div className="privacy">🔒 No spam. We'll only contact you for launch updates.</div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="softSection" id="how">
        <div className="container">
          <h2 className="sectionTitle">Why Swift Fix London?</h2>
          <div className="featuresGrid">
            <div className="featureCard">
              <LineIcon type="collection" />
              <h3>Collection &amp; Return</h3>
              <p>We collect your device from your doorstep and return it fully repaired. Fast, safe and convenient.</p>
            </div>
            <div className="featureCard">
              <LineIcon type="shield" />
              <h3>Fully Insured</h3>
              <p>Your device is fully insured while in transit and during the repair process.</p>
            </div>
            <div className="featureCard">
              <LineIcon type="warranty" />
              <h3>Warranty Included</h3>
              <p>All repairs come with a warranty for your peace of mind and long-term reliability.</p>
            </div>
          </div>

          <h2 className="sectionTitle" id="areas">Areas We Cover</h2>
          <div className="areaGrid">
            {areas.map((area) => (
              <div className="areaItem" key={area}>
                <LineIcon type={areaIcons[area]} />
                <strong>{area}</strong>
              </div>
            ))}
          </div>
          <p className="areaNote">
            📍 Don’t see your area? <a href={whatsappUrl}>Contact us</a> — we may still be able to help.
          </p>
        </div>
      </section>

      <section className="contactWrap" id="contact">
        <div className="contactPanel">
          <h2 className="sectionTitle">Get In Touch</h2>
          <div className="contactGrid">
            <div className="contactItem">
              <div className="roundIcon"><WhatsAppIcon /></div>
              <b>WhatsApp</b>
              <span>07345 889002</span>
              <p>Chat with us on WhatsApp for the fastest response.</p>
            </div>
            <div className="contactItem">
              <div className="roundIcon"><MailIcon /></div>
              <b>Email</b>
              <span>info@swiftfixlondon.co.uk</span>
              <p>Send us an email and we'll get back to you soon.</p>
            </div>
            <div className="contactItem">
              <div className="roundIcon"><LineIcon type="globe" /></div>
              <b>Website</b>
              <span>swiftfixlondon.co.uk</span>
              <p>Visit our website for updates and more information.</p>
            </div>
            <div className="contactItem">
              <div className="roundIcon"><LineIcon type="clock" /></div>
              <b>Hours</b>
              <span>Mon – Sat: 9:00 – 18:00</span>
              <p>We'll be ready to serve you very soon.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <div>
            <Logo footer />
            <p>West London’s premium iPhone collection &amp; repair service.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#areas">Areas We Cover</a>
            <a href="#how">How It Works</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Follow Us</h4>
            <p>Instagram</p>
            <p>Google</p>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms &amp; Conditions</a>
            <a href="#warranty">Warranty Policy</a>
          </div>
        </div>
        <div className="copyright">© Swift Fix London. All rights reserved.</div>
      </footer>
    </main>
  );
}
