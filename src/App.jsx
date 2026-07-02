import React from "react";
import { createClient } from "@supabase/supabase-js"; const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

// ─── FAVICON (inline, injected into <head> via useEffect) ─────────────────────
const FAVICON_SVG = `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjYuMiAxNjguMyI+CiAgPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDMwLjUuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDIuMS40IEJ1aWxkIDMpICAtLT4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLnN0MCB7CiAgICAgICAgZmlsbDogIzJlNzNlYTsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwOC40LDE5LjJDOTcuMiw3LjYsODEuNS4zLDY0LjEsMCw0Ni42LS4yLDMwLjgsNi42LDE5LjIsMTcuOCw3LjYsMjkuMS4zLDQ0LjgsMCw2Mi4yYy0uMiwxNS42LDUuMiwzMCwxNC41LDQxLjJsMTktMjEuNmMtMTAuMS0xNS40LTkuMS0zNi4zLDMuNy01MC44LDkuOC0xMS4xLDI0LjItMTUuOCwzNy45LTEzLjguNiwwLDEuMS4yLDEuNy4zLjguMiwxLjIsMS4xLjYsMS44bC0zMi4yLDM2LjVjLS40LjQtLjMsMS4xLDAsMS40bDI4LDI0LjdjLjQuNCwxLjEuMywxLjQsMGwzMi4yLTM2LjVjLjYtLjYsMS42LS40LDEuOC40LjIuNS4zLDEuMS41LDEuNiwzLjgsMTMuMy45LDI4LjItOC45LDM5LjMtMTIuOCwxNC41LTMzLjQsMTguMS01MCwxMGwtMjEuMSwyNGM4LjksMTEuNCwxNi43LDIzLjcsMjMuNSwzNi41bDUuNiwxMC41Yy41LjksMS43LjksMi4yLDBsLjgtMS41YzEyLjEtMjEuMiwyNy41LTQwLjMsNDUuMi01Ny4yLjItLjIuNC0uNC42LS42LDExLjYtMTEuMiwxOC45LTI2LjksMTkuMi00NC4zcy02LjYtMzMuMy0xNy44LTQ0LjlaTTY5LjEsNzEuMmwtMTIuNy0xMS4yYy0uNS0uNS0uNi0xLjItLjEtMS44bDEuNC0xLjZjLjUtLjUsMS4yLS42LDEuOC0uMWwxMi43LDExLjJjLjUuNS42LDEuMi4xLDEuOGwtMS40LDEuNmMtLjUuNS0xLjIuNi0xLjguMVoiLz4KPC9zdmc+`;

// ─── THEME ─────────────────────────────────────────────────────────────────────
const C = {
  navy:"#0f1f3d", navyMid:"#172d67", blue:"#2563eb", blueBright:"#3b82f6",
  blueLight:"#dbeafe", white:"#ffffff", surface:"#f8fafc",
  border:"#e2e8f0", borderDk:"#1e293b", text:"#0f172a", muted:"#64748b",
};

// ─── MODELS & PRICING ─────────────────────────────────────────────────────────
const IPHONE_MODELS = [
  "iPhone SE (1st gen)","iPhone 6","iPhone 6 Plus","iPhone 6s","iPhone 6s Plus",
  "iPhone 7","iPhone 7 Plus","iPhone 8","iPhone 8 Plus","iPhone X",
  "iPhone XR","iPhone XS","iPhone XS Max","iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max",
  "iPhone 12 mini","iPhone 12","iPhone 12 Pro","iPhone 12 Pro Max",
  "iPhone 13 mini","iPhone 13","iPhone 13 Pro","iPhone 13 Pro Max",
  "iPhone 14","iPhone 14 Plus","iPhone 14 Pro","iPhone 14 Pro Max",
  "iPhone 15","iPhone 15 Plus","iPhone 15 Pro","iPhone 15 Pro Max",
  "iPhone 16","iPhone 16 Plus","iPhone 16 Pro","iPhone 16 Pro Max",
  "iPhone SE (2nd gen)","iPhone SE (3rd gen)",
];
const PARTS = {
  "iPhone SE (1st gen)":{s:25,b:12,p:20},"iPhone 6":{s:25,b:12,p:20},"iPhone 6 Plus":{s:30,b:12,p:20},
  "iPhone 6s":{s:25,b:12,p:20},"iPhone 6s Plus":{s:30,b:12,p:20},"iPhone 7":{s:25,b:12,p:20},
  "iPhone 7 Plus":{s:30,b:12,p:20},"iPhone 8":{s:28,b:12,p:20},"iPhone 8 Plus":{s:35,b:12,p:20},
  "iPhone X":{s:40,b:15,p:25},"iPhone XR":{s:35,b:15,p:25},"iPhone XS":{s:35,b:15,p:25},
  "iPhone XS Max":{s:45,b:15,p:25},"iPhone 11":{s:35,b:15,p:25},"iPhone 11 Pro":{s:55,b:15,p:25},
  "iPhone 11 Pro Max":{s:65,b:15,p:25},"iPhone 12 mini":{s:80,b:20,p:30},"iPhone 12":{s:70,b:20,p:30},
  "iPhone 12 Pro":{s:80,b:20,p:30},"iPhone 12 Pro Max":{s:90,b:20,p:30},
  "iPhone 13 mini":{s:90,b:25,p:30},"iPhone 13":{s:90,b:25,p:30},
  "iPhone 13 Pro":{s:110,b:25,p:35},"iPhone 13 Pro Max":{s:120,b:25,p:35},
  "iPhone 14":{s:110,b:25,p:35},"iPhone 14 Plus":{s:120,b:25,p:35},
  "iPhone 14 Pro":{s:150,b:30,p:40},"iPhone 14 Pro Max":{s:160,b:30,p:40},
  "iPhone 15":{s:130,b:30,p:40},"iPhone 15 Plus":{s:140,b:30,p:40},
  "iPhone 15 Pro":{s:170,b:35,p:45},"iPhone 15 Pro Max":{s:180,b:35,p:45},
  "iPhone 16":{s:140,b:35,p:45},"iPhone 16 Plus":{s:150,b:35,p:45},
  "iPhone 16 Pro":{s:190,b:40,p:50},"iPhone 16 Pro Max":{s:200,b:40,p:50},
  "iPhone SE (2nd gen)":{s:28,b:12,p:20},"iPhone SE (3rd gen)":{s:35,b:15,p:25},
};
const RKEYS = {
  en:{"Screen Repair":"s","Battery Replacement":"b","Charging Port Repair":"p"},
  es:{"Reparación de pantalla":"s","Cambio de batería":"b","Reparación del puerto de carga":"p"},
};
const getPrice = (model,repair,lang) => (PARTS[model]?.[RKEYS[lang]?.[repair]] ?? 0) + 50;

// ─── AVAILABILITY (dynamic — next 3 Mon/Tue/Wed from today) ───────────────────
// Structure: { "YYYY-MM-DD": { "HH:MM": isLateSlot (bool) } }
const LATE_CUTOFF = "18:00"; // collections at/after this time return next day by default
const EXCLUDED_DATES = ["2026-06-30","2026-07-01","2026-07-06"]; // closed / unavailable days

const buildAvailability = () => {
  const slots = {};
  let count = 0, d = new Date(), guard = 0;
  while (count < 3 && guard < 60) {
    d.setDate(d.getDate() + 1);
    guard++;
    const day = d.getDay();
    const key = d.toISOString().slice(0,10);
    if (day >= 1 && day <= 3 && !EXCLUDED_DATES.includes(key)) {
      const times = day===3
        ? ["09:00","09:30"]
        : ["09:00","09:30","16:00","16:30"];
      slots[key] = {};
      times.forEach(t => { slots[key][t] = t >= LATE_CUTOFF; });
      count++;
    }
  }

  // Fixed extra dates: 8–12 July 2026, single late collection slot at 19:30
  // (always returned the next working day)
  const extraDates = ["2026-07-08","2026-07-09","2026-07-10","2026-07-11","2026-07-12"];
  extraDates.forEach(key => {
    if (EXCLUDED_DATES.includes(key)) return;
    if (!slots[key]) slots[key] = {};
    slots[key]["19:30"] = true; // true = next-day return
  });

  return slots;
};
const AVAILABILITY = buildAvailability();
const AREAS = ["Ealing","Chiswick","Acton","Hammersmith","Wembley","Perivale","Park Royal","Alperton"];

// ─── DATE HELPERS ─────────────────────────────────────────────────────────────
const fmtDate = s => { const [y,m,d]=s.split("-"); return `${d}/${m}/${y}`; };
const fmtShort = (s,lang) => {
  const ME=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const MS=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
  const [,m,d]=s.split("-");
  return `${d} ${lang==="en"?ME[+m-1]:MS[+m-1]}`;
};

// Combine a "YYYY-MM-DD" date and "HH:MM" time into a real Date object
const slotDateTime = (dateStr, timeStr) => {
  const [y,m,d] = dateStr.split("-").map(Number);
  const [h,min] = timeStr.split(":").map(Number);
  return new Date(y, m-1, d, h, min, 0, 0);
};

// Rule 1 — slot disappears from calendar if it starts in under 2 hours and nobody booked it
const SLOT_REMOVAL_MS = 2 * 60 * 60 * 1000; // 2 hours
const isWithinNoticeWindow = (dateStr, timeStr) => {
  const slot = slotDateTime(dateStr, timeStr);
  return (slot.getTime() - Date.now()) < SLOT_REMOVAL_MS;
};

// Rule 2 — unconfirmed booking is auto-cancelled after 30 minutes from creation
const PAYMENT_WINDOW_MS = 30 * 60 * 1000; // 30 minutes
const isPaymentExpired = (createdAt) => {
  return (Date.now() - createdAt) > PAYMENT_WINDOW_MS;
};

// ─── COPY ─────────────────────────────────────────────────────────────────────
const COPY = {
  en:{
    topBar:"West London collection service · Fully insured · Warranty on every repair",
    navLinks:{services:"Services",areas:"Areas",booking:"Book",reviews:"Reviews",contact:"Contact"},
    heroBadge:"Collection-only iPhone repairs · West London",
    heroTitle:["Your iPhone.", "Fixed and", "returned."],
    heroSub:"Choose your model, get an instant price, book a collection slot — no shop visit needed.",
    trust:["Fully insured","Warranty included","Collection & return"],
    calcTitle:"Get your price instantly",
    modelLabel:"Your iPhone model", repairLabel:"Repair type",
    repairs:["Screen Repair","Battery Replacement","Charging Port Repair"],
    priceLabel:"Your price",
    priceNote:"Parts · Labour · Warranty · £20 deposit deducted at checkout",
    ctaBook:"Book this repair", ctaWhatsApp:"Ask on WhatsApp",
    stats:[{v:"8",l:"Areas covered"},{v:"£20",l:"Deposit to book"},{v:"5★",l:"Customer rating"},{v:"EN·ES",l:"Languages"}],
    servBadge:"Repairs", servTitle:"What we fix",
    servSub:"Three repairs. Transparent pricing. Collected from your door.",
    services:[
      {title:"Screen Repair",from:"from £75",desc:"Cracked, shattered or unresponsive screen replaced with quality parts and returned the same day."},
      {title:"Battery Replacement",from:"from £62",desc:"Restore your battery life. Genuine-spec cells, labour included, no hidden costs."},
      {title:"Charging Port Repair",from:"from £70",desc:"Loose, slow or dead charging port? Fixed, tested and returned to your door."},
      {title:"Collection Booking",from:"£20 deposit",desc:"Reserve your slot with a £20 deposit — deducted from the final repair price."},
    ],
    whyBadge:"Why Swift Fix", whyTitle:"Repairs without the hassle",
    why:[
      {icon:"🏠",title:"No shop visit needed",body:"We collect from your door, repair your iPhone, and return it — usually the same day. You don't have to go anywhere."},
      {icon:"🔒",title:"Fully insured",body:"Your device is covered by public liability insurance from the moment we collect it to the moment we return it."},
      {icon:"✅",title:"90-day warranty",body:"Every repair comes with a 90-day warranty on parts and labour. If something isn't right, we'll fix it at no extra cost."},
      {icon:"💬",title:"Book in 2 minutes",body:"No forms, no waiting. Pick your slot, pay a £20 deposit, confirm on WhatsApp — that's it."},
      {icon:"💷",title:"No hidden costs",body:"The price you see includes parts, labour and warranty. The £20 deposit is deducted from your final bill."},
      {icon:"🌍",title:"English & Spanish",body:"We serve customers in both English and Spanish across all 8 West London areas we cover."},
    ],
    areasBadge:"Coverage", areasTitle:"8 areas across West London",
    areasSub:"We collect from your door across these neighbourhoods.",
    bookBadge:"Booking", bookTitle:"Choose your collection slot",
    bookSub:"Pick a date and time. Pay the £20 deposit to secure your slot, then confirm on WhatsApp.",
    steps:["Select your model and repair above","Choose date and time below","Pay the £20 deposit","Confirm on WhatsApp"],
    summaryTitle:"Your booking",
    modelL:"Model", repairL:"Repair", priceL:"Price",
    datesLabel:"Available dates", timesLabel:"Time slots",
    slotTaken:"Already booked — choose another slot",
    slotFree:"Available",
    lateSlotTag:"Next-day return",
    lateSlotNotice:"Devices collected at this time are returned the next working day.",
    tooLateTag:"Too late to book",
    tooLateNotice:"This slot starts in less than 2 hours, so it's no longer available to book online. Please WhatsApp us to check availability.",
    autoCancelNotice:"⚠️ You have 30 minutes to pay the £20 deposit. If payment is not confirmed, your slot will be released automatically.",
    depositTitle:"Secure your slot",
    depositDesc:"Pay the £20 deposit by card. It's deducted from your final repair price.",
    depositCta:"Pay £20 deposit",
    confirmCta:"Confirm on WhatsApp",
    detailsTitle:"Send repair details",
    detailsDesc:"Optional — share more about the issue before collection.",
    detailsFields:["Full name","Collection address","iPhone model","Problem description","Repaired before?","Does it power on?","Preferred date","Preferred time","Email","WhatsApp number"],
    detailsCta:"Send details on WhatsApp",
    revBadge:"Reviews", revTitle:"What customers say",
    revSub:"Real reviews. Real customers across West London.",
    reviews:[
      {q:"Collected on time, fixed the screen perfectly and returned it the same afternoon. Couldn't be easier.",n:"Sarah M.",loc:"Ealing"},
      {q:"WhatsApp booking was simple and the whole process was smooth from start to finish.",n:"James K.",loc:"Chiswick"},
      {q:"Fair price, professional service. I've already recommended Swift Fix to three neighbours.",n:"Maria R.",loc:"Hammersmith"},
    ],
    contactBadge:"Contact", contactTitle:"Get in touch",
    contactSub:"WhatsApp is fastest for quotes and booking. We also reply to email.",
    waLabel:"WhatsApp", emailLabel:"Email", webLabel:"Website", igLabel:"Instagram",
    stickyCta:"WhatsApp us",
    footer:"iPhone Repairs · Ealing · Chiswick · Acton · Hammersmith · Wembley · Perivale · Park Royal · Alperton",
    legalLinks:{privacy:"Privacy Policy",terms:"Terms & Conditions",warranty:"Warranty Policy"},
    adminPanel:"Admin — Manage availability",
    adminSave:"Save",
    adminClose:"Close",
    adminTitle:"Manage booking slots",
    adminDesc:"Add or remove available dates and time slots. Booked slots are shown in red.",
  },
  es:{
    topBar:"Recogida en West London · Totalmente asegurado · Garantía en cada reparación",
    navLinks:{services:"Servicios",areas:"Zonas",booking:"Reservar",reviews:"Reseñas",contact:"Contacto"},
    heroBadge:"Reparación de iPhone con recogida · West London",
    heroTitle:["Tu iPhone.", "Reparado y", "devuelto."],
    heroSub:"Elige tu modelo, ve el precio al instante y reserva una recogida — sin visitar ninguna tienda.",
    trust:["Totalmente asegurado","Garantía incluida","Recogida y devolución"],
    calcTitle:"Obtén tu precio al instante",
    modelLabel:"Tu modelo de iPhone", repairLabel:"Tipo de reparación",
    repairs:["Reparación de pantalla","Cambio de batería","Reparación del puerto de carga"],
    priceLabel:"Tu precio",
    priceNote:"Pieza · Mano de obra · Garantía · Depósito de £20 descontado del total",
    ctaBook:"Reservar esta reparación", ctaWhatsApp:"Consultar por WhatsApp",
    stats:[{v:"8",l:"Zonas cubiertas"},{v:"£20",l:"Depósito de reserva"},{v:"5★",l:"Valoración clientes"},{v:"EN·ES",l:"Idiomas"}],
    servBadge:"Reparaciones", servTitle:"Qué reparamos",
    servSub:"Tres servicios. Precios transparentes. Recogida desde tu puerta.",
    services:[
      {title:"Reparación de pantalla",from:"desde £75",desc:"Pantalla rota, dañada o sin respuesta, sustituida con piezas de calidad y devuelta el mismo día."},
      {title:"Cambio de batería",from:"desde £62",desc:"Recupera la duración de tu batería. Células de especificación original, mano de obra incluida."},
      {title:"Reparación del puerto de carga",from:"desde £70",desc:"¿Puerto flojo, lento o que no carga? Reparado, probado y devuelto a tu puerta."},
      {title:"Reserva de recogida",from:"depósito £20",desc:"Reserva tu franja con £20 de depósito, descontado del precio final de la reparación."},
    ],
    whyBadge:"Por qué nosotros", whyTitle:"Reparaciones sin complicaciones",
    why:[
      {icon:"🏠",title:"Sin visitar ninguna tienda",body:"Recogemos en tu puerta, reparamos tu iPhone y lo devolvemos — normalmente el mismo día. No tienes que moverte."},
      {icon:"🔒",title:"Totalmente asegurado",body:"Tu dispositivo está cubierto por un seguro de responsabilidad civil desde que lo recogemos hasta que te lo devolvemos."},
      {icon:"✅",title:"Garantía de 90 días",body:"Cada reparación incluye 90 días de garantía en piezas y mano de obra. Si algo no está bien, lo arreglamos sin coste adicional."},
      {icon:"💬",title:"Reserva en 2 minutos",body:"Sin formularios, sin esperas. Elige tu franja, paga el depósito de £20 y confirma por WhatsApp — listo."},
      {icon:"💷",title:"Sin costes ocultos",body:"El precio que ves incluye pieza, mano de obra y garantía. El depósito de £20 se descuenta de tu factura final."},
      {icon:"🌍",title:"Inglés y español",body:"Atendemos a clientes en inglés y español en las 8 zonas de West London que cubrimos."},
    ],
    areasBadge:"Cobertura", areasTitle:"8 zonas en West London",
    areasSub:"Recogemos en tu puerta en estos barrios.",
    bookBadge:"Reservas", bookTitle:"Elige tu franja de recogida",
    bookSub:"Elige fecha y hora. Paga el depósito de £20 para asegurar tu franja y confirma por WhatsApp.",
    steps:["Selecciona modelo y reparación arriba","Elige fecha y hora abajo","Paga el depósito de £20","Confirma por WhatsApp"],
    summaryTitle:"Tu reserva",
    modelL:"Modelo", repairL:"Reparación", priceL:"Precio",
    datesLabel:"Fechas disponibles", timesLabel:"Horarios",
    slotTaken:"Ya reservado — elige otra franja",
    slotFree:"Disponible",
    lateSlotTag:"Devolución al día siguiente",
    lateSlotNotice:"Los dispositivos recogidos en esta franja se devuelven al día laborable siguiente.",
    tooLateTag:"Demasiado tarde para reservar",
    tooLateNotice:"Esta franja empieza en menos de 2 horas, por lo que ya no se puede reservar online. Escríbenos por WhatsApp para consultar disponibilidad.",
    autoCancelNotice:"⚠️ Tienes 30 minutos para pagar el depósito de £20. Si no se confirma el pago, tu franja se liberará automáticamente.",
    depositTitle:"Asegura tu franja",
    depositDesc:"Paga el depósito de £20 con tarjeta. Se descuenta del precio final.",
    depositCta:"Pagar depósito de £20",
    confirmCta:"Confirmar por WhatsApp",
    detailsTitle:"Enviar detalles de la reparación",
    detailsDesc:"Opcional — cuéntanos más sobre el problema antes de la recogida.",
    detailsFields:["Nombre completo","Dirección de recogida","Modelo de iPhone","Descripción del problema","¿Reparado antes?","¿Enciende?","Fecha preferida","Hora preferida","Email","Número de WhatsApp"],
    detailsCta:"Enviar detalles por WhatsApp",
    revBadge:"Reseñas", revTitle:"Lo que dicen los clientes",
    revSub:"Reseñas reales. Clientes reales en West London.",
    reviews:[
      {q:"Recogida puntual, pantalla reparada perfectamente y devuelta esa misma tarde. No puede ser más fácil.",n:"Sarah M.",loc:"Ealing"},
      {q:"La reserva por WhatsApp fue sencilla y todo el proceso fue fluido de principio a fin.",n:"James K.",loc:"Chiswick"},
      {q:"Precio justo, servicio profesional. Ya he recomendado Swift Fix a tres vecinos.",n:"Maria R.",loc:"Hammersmith"},
    ],
    contactBadge:"Contacto", contactTitle:"Contáctanos",
    contactSub:"WhatsApp es la forma más rápida para presupuestos y reservas. También respondemos por email.",
    waLabel:"WhatsApp", emailLabel:"Email", webLabel:"Web", igLabel:"Instagram",
    stickyCta:"WhatsApp ahora",
    footer:"Reparación iPhone · Ealing · Chiswick · Acton · Hammersmith · Wembley · Perivale · Park Royal · Alperton",
    legalLinks:{privacy:"Política de privacidad",terms:"Términos y condiciones",warranty:"Política de garantía"},
    adminPanel:"Admin — Gestionar disponibilidad",
    adminSave:"Guardar",
    adminClose:"Cerrar",
    adminTitle:"Gestionar franjas de reserva",
    adminDesc:"Añade o elimina fechas y horas disponibles. Las franjas reservadas se muestran en rojo.",
  },
};

// ─── LOGO ─────────────────────────────────────────────────────────────────────
const LOGO_B64 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OTYuMzggMTY5LjA3Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMTcyZDY3OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMyZTczZWE7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjExLjI5LDQyLjA5Yy0yLjMzLTEuNDItNC44OS0yLjU1LTcuNzEtMy4zOS0yLjgxLS44NC01LjYyLTEuNTgtOC40My0yLjIzLTIuODEtLjY1LTUuMzgtMS4yOS03LjctMS45NC0yLjMzLS42NC00LjItMS41LTUuNjItMi41N3MtMi4xMy0yLjQ3LTIuMTMtNC4yMmMwLTEuNDkuNDItMi43OSwxLjI2LTMuOTMuODQtMS4xMywyLjIzLTIuMDUsNC4xNy0yLjc2LDEuOTQtLjcxLDQuNDMtMS4wNyw3LjQ2LTEuMDdzNi4xNC40NCw5LjMxLDEuMzFjMy4xNi44Nyw2LjMzLDIuMjEsOS41LDQuMDJsNC44NS0xMS45MmMtMy4xNy0yLTYuODItMy41LTEwLjk1LTQuNTEtNC4xNC0xLTguMzQtMS41LTEyLjYtMS41LTYuNCwwLTExLjcxLjk1LTE1Ljk0LDIuODYtNC4yMywxLjkxLTcuNCw0LjQ2LTkuNSw3LjY2LTIuMSwzLjItMy4xNSw2Ljc0LTMuMTUsMTAuNjEsMCwzLjYyLjczLDYuNTksMi4xOCw4LjkyLDEuNDUsMi4zMywzLjM1LDQuMiw1LjY3LDUuNjIsMi4zMywxLjQyLDQuOSwyLjU5LDcuNzEsMy40OSwyLjgxLjkxLDUuNjIsMS42Niw4LjQzLDIuMjgsMi44MS42Miw1LjM4LDEuMjYsNy43MSwxLjk0LDIuMzMuNjgsNC4yLDEuNTUsNS42MiwyLjYyLDEuNDIsMS4wNywyLjEzLDIuNTEsMi4xMyw0LjMxLDAsMS40Mi0uNDUsMi42OC0xLjM2LDMuNzgtLjkxLDEuMS0yLjMxLDEuOTUtNC4yMiwyLjU3LTEuOTEuNjEtNC40MS45Mi03LjUxLjkyLTQuMDcsMC04LjA5LS42Ni0xMi4wNy0xLjk5LTMuOTctMS4zMi03LjQxLTMuMDItMTAuMzItNS4wOWwtNS4zMywxMS44MmMzLjA0LDIuMzMsNy4wNCw0LjIyLDEyLjAyLDUuNjcsNC45OCwxLjQ1LDEwLjE4LDIuMTgsMTUuNjEsMi4xOCw2LjQ2LDAsMTEuODEtLjk3LDE2LjA0LTIuOTEsNC4yMy0xLjk0LDcuNDItNC40OSw5LjU1LTcuNjYsMi4xMy0zLjE3LDMuMi02LjY1LDMuMi0xMC40NywwLTMuNTUtLjczLTYuNDktMi4xOC04LjgyLTEuNDUtMi4zMy0zLjM0LTQuMi01LjY3LTUuNjJaIi8+CiAgICA8cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMjU0LjMyIDc2LjQgMjY2LjQgNDQuMDEgMjc4LjA3IDc2LjQgMjkyLjcxIDc2LjQgMzExLjYxIDI0LjI2IDI5OC4yMyAyNC4yNiAyODUuNTYgNTkuNTkgMjczLjEzIDI0LjI2IDI2MC4zMyAyNC4yNiAyNDcuNTEgNTkuNTkgMjM1LjIzIDI0LjI2IDIyMC45OCAyNC4yNiAyMzkuNzggNzYuNCAyNTQuMzIgNzYuNCIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzI2LjI0LDE2Ljk5YzIuODQsMCw1LjEyLS44Miw2LjgzLTIuNDcsMS43MS0xLjY1LDIuNTctMy43MywyLjU3LTYuMjUsMC0yLjM5LS44Ny00LjM1LTIuNjItNS44Ni0xLjc1LTEuNTItNC4wMS0yLjI4LTYuNzktMi4yOHMtNS4wNC44MS02Ljc4LDIuNDJjLTEuNzQsMS42Mi0yLjYyLDMuNjItMi42Miw2LjAxcy44Nyw0LjM5LDIuNjIsNi4wMWMxLjc0LDEuNjIsNC4wMSwyLjQyLDYuNzgsMi40MloiLz4KICAgIDxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMzE4LjY4IiB5PSIyNC4yNiIgd2lkdGg9IjE1LjEyIiBoZWlnaHQ9IjUyLjE1Ii8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MjMuMzIsNzMuODhsLTQuMDctMTAuNjZjLTEuNjgsMS4yOS0zLjcyLDEuOTQtNi4xMSwxLjk0LTIsMC0zLjU5LS42LTQuNzUtMS43OS0xLjE2LTEuMTktMS43NC0yLjg5LTEuNzQtNS4wOXYtMjEuMjNoMjQuNDVsNC42Ny0xMS42M2gtMjkuMTJ2LTEyLjdoLTE1LjEydjEyLjdoLTI3LjF2LTIuMjNjMC0yLjUyLjYtNC40MSwxLjc5LTUuNjcsMS4xOS0xLjI2LDIuODktMS44OSw1LjA5LTEuODksMS4xNiwwLDIuMjYuMTYsMy4zLjQ4LDEuMDMuMzIsMS45Ny43OCwyLjgxLDEuMzZsMy45Ny0xMC45NWMtMS40Mi0uOTctMy4xNS0xLjY4LTUuMTktMi4xMy0yLjA0LS40NS00LjE1LS42OC02LjM1LS42OC02LjQ2LDAtMTEuNDQsMS43Ni0xNC45Myw1LjI4LTMuNDksMy41Mi01LjIzLDguMjItNS4yMywxNC4xdjIuMzNoLTguMDR2MTEuNjNoOC4wNHYzOS4zNWgxNS4xMnYtMzkuMzVoMjYuNzF2MjEuNDJjMCw2LjIsMS43MSwxMC44Nyw1LjE0LDE0LjAxLDMuNDIsMy4xMyw4LjIxLDQuNywxNC4zNCw0LjcsMi4zMywwLDQuNTctLjI4LDYuNzQtLjgyLDIuMTYtLjU1LDQuMDItMS4zNyw1LjU3LTIuNDdaIi8+CiAgICA8cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iNDcxLjczIDUxLjY5IDUwMy41NSA1MS42OSA1MDMuNTUgMzkuMDkgNDcxLjczIDM5LjA5IDQ3MS43MyAyMS4xNSA1MDcuMyAyMS4xNSA1MDcuMyA4LjU1IDQ1Ni4wMyA4LjU1IDQ1Ni4wMyA3Ni40IDQ3MS43MyA3Ni40IDQ3MS43MyA1MS42OSIvPgogICAgPHJlY3QgY2xhc3M9ImNscy0xIiB4PSI1MTYuOSIgeT0iMjQuMjYiIHdpZHRoPSIxNS4xMiIgaGVpZ2h0PSI1Mi4xNSIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTI0LjQ2LDE2Ljk5YzIuODQsMCw1LjEyLS44Miw2LjgzLTIuNDcsMS43MS0xLjY1LDIuNTctMy43MywyLjU3LTYuMjUsMC0yLjM5LS44Ny00LjM1LTIuNjItNS44Ni0xLjc1LTEuNTItNC4wMS0yLjI4LTYuNzktMi4yOHMtNS4wNC44MS02Ljc4LDIuNDJjLTEuNzQsMS42Mi0yLjYyLDMuNjItMi42Miw2LjAxcy44Nyw0LjM5LDIuNjIsNi4wMWMxLjc0LDEuNjIsNC4wMSwyLjQyLDYuNzgsMi40MloiLz4KICAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI1OTYuMzggNzYuNCA1NzYuMiA0OS43NiA1OTUuNiAyNC4yNiA1NzkuNTEgMjQuMjYgNTY4LjE4IDM5LjQ5IDU1Ny4xMiAyNC4yNiA1NDAuMTYgMjQuMjYgNTU5LjU0IDUwLjEgNTM5LjQ4IDc2LjQgNTU1Ljk2IDc2LjQgNTY3LjggNjAuNDMgNTc5LjIyIDc2LjQgNTk2LjM4IDc2LjQiLz4KICAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxODMuNzYgMTAwLjQyIDE2OC4wNiAxMDAuNDIgMTY4LjA2IDE2OC4yNyAyMTcuNzggMTY4LjI3IDIxNy43OCAxNTUuNDggMTgzLjc2IDE1NS40OCAxODMuNzYgMTAwLjQyIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNjUuOSwxMTkuNmMtNC4yLTIuNTItOS4wNS0zLjkyLTE0LjUzLTQuMjEtNS41NS0uMjktMTAuNTMuNi0xNC45NCwyLjY2LTQuNDEsMi4wNy03Ljk3LDUuMDUtMTAuNjYsOC45NS0yLjcsMy45LTQuMTgsOC40Ny00LjQ2LDEzLjY5LS4yNyw1LjE2LjczLDkuODMsMywxMy45OSwyLjI3LDQuMTYsNS40OSw3LjUyLDkuNjYsMTAuMDdzOS4wMywzLjk3LDE0LjU4LDQuMjZjNS40OC4yOSwxMC40NS0uNjEsMTQuOS0yLjcxLDQuNDUtMi4xLDgtNS4wOSwxMC42Ny05LDIuNjYtMy45LDQuMTMtOC40NCw0LjQxLTEzLjYuMjgtNS4yOS0uNy0xMC0yLjk0LTE0LjEzLTIuMjQtNC4xMy01LjQ2LTcuNDUtOS42Ny05Ljk3Wk0yNjMuMjIsMTQyLjljLS4xNiwyLjk3LS44Nyw1LjUtMi4xNSw3LjYtMS4yNywyLjEtMi45NCwzLjY4LTUsNC43NC0yLjA2LDEuMDYtNC4zNSwxLjUyLTYuODcsMS4zOS0yLjUyLS4xMy00Ljc0LS44My02LjY4LTIuMS0xLjk0LTEuMjctMy40NS0zLjAxLTQuNTMtNS4yNC0xLjA4LTIuMjItMS41NC00LjgyLTEuMzktNy43OS4xNi0zLjAzLjg5LTUuNTgsMi4yLTcuNjUsMS4zLTIuMDcsMi45OS0zLjYzLDUuMDUtNC42OCwyLjA2LTEuMDYsNC4zNS0xLjUyLDYuODctMS4zOSwyLjUyLjEzLDQuNzQuODMsNi42OSwyLjEsMS45NCwxLjI3LDMuNDMsMyw0LjQ4LDUuMTksMS4wNSwyLjE5LDEuNDksNC44LDEuMzMsNy44NFoiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMzMC4yOSwxMTcuODJjLTMuMjctMS42NS02Ljk2LTIuNDctMTEuMS0yLjQ3LTQuNDYsMC04LjQzLjk0LTExLjkyLDIuODEtMi4wNiwxLjExLTMuODMsMi41LTUuMzMsNC4xN3YtNi4yMWgtMTQuNDR2NTIuMTVoMTUuMTJ2LTI1Ljc4YzAtMy4yMy41My01Ljg4LDEuNi03Ljk1LDEuMDctMi4wNywyLjU1LTMuNiw0LjQ2LTQuNiwxLjktMSw0LjA1LTEuNSw2LjQ1LTEuNSwzLjM2LDAsNS45NiwxLDcuOCwzLjAxLDEuODQsMiwyLjc2LDUuMTEsMi43Niw5LjN2MjcuNTNoMTUuMTJ2LTI5Ljg1YzAtNS4zLS45NC05LjY0LTIuODEtMTMuMDQtMS44Ny0zLjM5LTQuNDQtNS45MS03LjcxLTcuNTZaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zOTAuNTcsMTIxLjU4Yy0xLjItMS4zMi0yLjU1LTIuNDMtNC4wNy0zLjMyLTMuMy0xLjk0LTcuMTQtMi45MS0xMS41My0yLjkxLTQuOTEsMC05LjM0LDEuMS0xMy4yOCwzLjMtMy45NCwyLjItNy4wNiw1LjMtOS4zNSw5LjMxLTIuMjksNC4wMS0zLjQ0LDguNzYtMy40NCwxNC4yNXMxLjE1LDEwLjE1LDMuNDQsMTQuMTVjMi4yOSw0LjAxLDUuNDEsNy4xMiw5LjM1LDkuMzUsMy45NCwyLjIzLDguMzcsMy4zNCwxMy4yOCwzLjM0LDQuNTksMCw4LjUxLS45NywxMS43OC0yLjkxLDEuNzEtMS4wMiwzLjIxLTIuMzIsNC41MS0zLjl2Ni4wNGgxNC40NHYtNzEuOTJoLTE1LjEydjI1LjIzWk0zODkuMDcsMTQ5LjkxYy0xLjIsMi4xNy0yLjgsMy44My00LjgsNC45OS0yLDEuMTYtNC4yMywxLjc0LTYuNjksMS43NHMtNC43OC0uNTgtNi43OS0xLjc0Yy0yLTEuMTYtMy42LTIuODMtNC44LTQuOTktMS4yLTIuMTYtMS43OS00LjczLTEuNzktNy43MXMuNi01LjYyLDEuNzktNy43NWMxLjItMi4xMywyLjgtMy43OCw0LjgtNC45NCwyLTEuMTYsNC4yNi0xLjc0LDYuNzktMS43NHM0LjY4LjU4LDYuNjksMS43NGMyLDEuMTYsMy42LDIuODEsNC44LDQuOTQsMS4xOSwyLjEzLDEuNzksNC43MiwxLjc5LDcuNzVzLS42LDUuNTQtMS43OSw3LjcxWiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDU4LjA2LDExOC43OWMtNC4zMy0yLjI5LTkuMjQtMy40NC0xNC43My0zLjQ0cy0xMC40OCwxLjE1LTE0Ljc4LDMuNDRjLTQuMywyLjI5LTcuNjksNS40Ni0xMC4xOCw5LjUtMi40OSw0LjA0LTMuNzMsOC42Ny0zLjczLDEzLjkxczEuMjQsOS43NywzLjczLDEzLjgxYzIuNDksNC4wNCw1Ljg4LDcuMjIsMTAuMTgsOS41NSw0LjMsMi4zMyw5LjIyLDMuNDksMTQuNzgsMy40OXMxMC40LTEuMTYsMTQuNzMtMy40OWM0LjMzLTIuMzMsNy43Mi01LjUxLDEwLjE4LTkuNTUsMi40NS00LjA0LDMuNjgtOC42NCwzLjY4LTEzLjgxcy0xLjIzLTkuOTUtMy42OC0xMy45NmMtMi40Ni00LjAxLTUuODUtNy4xNi0xMC4xOC05LjQ1Wk00NTQuODYsMTQ5LjkxYy0xLjE2LDIuMTctMi43NSwzLjgzLTQuNzUsNC45OS0yLDEuMTYtNC4yNywxLjc0LTYuNzksMS43NHMtNC43OC0uNTgtNi43OC0xLjc0Yy0yLTEuMTYtMy42LTIuODMtNC44LTQuOTktMS4yLTIuMTYtMS43OS00LjczLTEuNzktNy43MXMuNi01LjYyLDEuNzktNy43NWMxLjE5LTIuMTMsMi43OS0zLjc4LDQuOC00Ljk0LDItMS4xNiw0LjI2LTEuNzQsNi43OC0xLjc0czQuNzguNTgsNi43OSwxLjc0YzIsMS4xNiwzLjU5LDIuODEsNC43NSw0Ljk0LDEuMTYsMi4xMywxLjc0LDQuNzIsMS43NCw3Ljc1cy0uNTgsNS41NC0xLjc0LDcuNzFaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MjMuNDQsMTE3LjgyYy0zLjI2LTEuNjUtNi45Ni0yLjQ3LTExLjEtMi40Ny00LjQ2LDAtOC40My45NC0xMS45MiwyLjgxLTIuMDYsMS4xMS0zLjgzLDIuNS01LjMzLDQuMTd2LTYuMjFoLTE0LjQ0djUyLjE1aDE1LjEydi0yNS43OGMwLTMuMjMuNTMtNS44OCwxLjYtNy45NSwxLjA2LTIuMDcsMi41NS0zLjYsNC40Ni00LjYsMS45MS0xLDQuMDUtMS41LDYuNDUtMS41LDMuMzYsMCw1Ljk2LDEsNy44LDMuMDEsMS44NCwyLDIuNzYsNS4xMSwyLjc2LDkuM3YyNy41M2gxNS4xMnYtMjkuODVjMC01LjMtLjk0LTkuNjQtMi44MS0xMy4wNC0xLjg3LTMuMzktNC40NC01LjkxLTcuNzEtNy41NloiLz4KICA8L2c+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTA4LjQsMTkuMTVDOTcuMTUsNy41Niw4MS40OC4yNyw2NC4wNSwwLDQ2LjYzLS4yNSwzMC43NSw2LjU4LDE5LjE1LDE3LjgzLDcuNTYsMjkuMDcuMjcsNDQuNzUsMCw2Mi4xOGMtLjIzLDE1LjYyLDUuMjMsMzAsMTQuNDcsNDEuMTZsMTktMjEuNTZjLTEwLjEtMTUuNDUtOS4xNC0zNi4zMSwzLjY2LTUwLjgzLDkuODItMTEuMTQsMjQuMjEtMTUuODQsMzcuODctMTMuNzguNTYuMDgsMS4xMS4xOCwxLjY2LjI5LjgzLjE2LDEuMTksMS4xNS42MywxLjc4bC0zMi4yLDM2LjUzYy0uMzcuNDItLjMzLDEuMDYuMDksMS40M2wyOC4wMywyNC43Yy40MS4zNywxLjA2LjMzLDEuNDMtLjA5bDMyLjItMzYuNTNjLjU1LS42MywxLjU5LS40MiwxLjg1LjM4LjE4LjU0LjM0LDEuMDkuNDksMS42MywzLjc1LDEzLjI5Ljg5LDI4LjE2LTguOTIsMzkuMjktMTIuOCwxNC41Mi0zMy4zNywxOC4xLTQ5Ljk3LDEwLjAxbC0yMS4xNSwyNGM4Ljg4LDExLjQ0LDE2LjY4LDIzLjcsMjMuNDksMzYuNWw1LjYsMTAuNTJjLjQ1Ljg1LDEuNjcuODcsMi4xNS4wM2wuODUtMS40OGMxMi4xLTIxLjIzLDI3LjQ5LTQwLjM1LDQ1LjIyLTU3LjE2LjIxLS4yLjQyLS40LjYyLS42LDExLjU5LTExLjI1LDE4Ljg5LTI2LjkzLDE5LjE1LTQ0LjM1cy02LjU3LTMzLjMxLTE3LjgyLTQ0LjlaTTY5LjA1LDcxLjE2bC0xMi42Ny0xMS4xOGMtLjUyLS40Ni0uNTctMS4yNC0uMTEtMS43NmwxLjM4LTEuNTZjLjQ2LS41MiwxLjI0LS41NywxLjc2LS4xMWwxMi42NywxMS4xOGMuNTIuNDYuNTcsMS4yNC4xMSwxLjc2bC0xLjM4LDEuNTZjLS40Ni41Mi0xLjI0LjU3LTEuNzYuMTFaIi8+Cjwvc3ZnPg==";

// ─── WA ICON ──────────────────────────────────────────────────────────────────
const WA = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{flexShrink:0}}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Badge = ({children,light}) => (
  <span style={{display:"inline-flex",alignItems:"center",gap:6,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:light?"rgba(255,255,255,0.7)":C.blue,padding:"4px 0"}}>
    <span style={{width:5,height:5,borderRadius:"50%",background:light?"rgba(255,255,255,0.5)":C.blue,display:"inline-block"}}/>
    {children}
  </span>
);

const Section = ({id,bg,children,style={}}) => (
  <section id={id} style={{background:bg||C.white,...style}}>
    <div style={{maxWidth:1200,margin:"0 auto",padding:"80px 24px"}}>{children}</div>
  </section>
);

// ─── ADMIN PANEL ──────────────────────────────────────────────────────────────
const ALL_TIMES = ["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00"];

function AdminPanel({availability,setAvailability,bookedSlots,t,onClose}) {
  const [localAv, setLocalAv] = React.useState(JSON.parse(JSON.stringify(availability)));
  const [newDate, setNewDate] = React.useState("");
  const [rangeStart, setRangeStart] = React.useState("09:00");
  const [rangeEnd, setRangeEnd] = React.useState("17:00");
  const [rangeStep, setRangeStep] = React.useState(30);
  const [rangeDate, setRangeDate] = React.useState("");

  const isBooked = (date,time) => bookedSlots.some(b => b.date===date && b.time===time);

  const toggleTime = (date, time) => {
    if (isBooked(date,time)) return;
    setLocalAv(prev => {
      const copy = {...prev};
      copy[date] = {...(copy[date]||{})};
      if (time in copy[date]) {
        delete copy[date][time];
        if (Object.keys(copy[date]).length === 0) delete copy[date];
      } else {
        copy[date][time] = false; // new slots default to not-late
      }
      return copy;
    });
  };

  const toggleLate = (date, time) => {
    if (isBooked(date,time)) return;
    setLocalAv(prev => {
      const copy = {...prev};
      copy[date] = {...(copy[date]||{})};
      copy[date][time] = !copy[date][time];
      return copy;
    });
  };

  const addDate = () => {
    if (!newDate || localAv[newDate]) return;
    setLocalAv(prev => ({...prev, [newDate]: {}}));
    setNewDate("");
  };

  const removeDate = (date) => {
    const hasBooked = bookedSlots.some(b => b.date===date);
    if (hasBooked) return;
    setLocalAv(prev => { const c={...prev}; delete c[date]; return c; });
  };

  // Add a whole range of times at once to a date, e.g. 09:00–17:00 every 30 min
  const addRange = () => {
    if (!rangeDate || !localAv.hasOwnProperty(rangeDate)) return;
    const toMinutes = (t) => { const [h,m]=t.split(":").map(Number); return h*60+m; };
    const toTime = (mins) => `${String(Math.floor(mins/60)).padStart(2,"0")}:${String(mins%60).padStart(2,"0")}`;
    const startM = toMinutes(rangeStart), endM = toMinutes(rangeEnd);
    if (startM >= endM) return;
    setLocalAv(prev => {
      const copy = {...prev};
      copy[rangeDate] = {...(copy[rangeDate]||{})};
      for (let m = startM; m <= endM; m += rangeStep) {
        const time = toTime(m);
        if (!(time in copy[rangeDate])) {
          copy[rangeDate][time] = time >= LATE_CUTOFF;
        }
      }
      return copy;
    });
  };

  const [saving, setSaving] = React.useState(false);

  const save = async () => {
    setSaving(true);
    // 1. Delete dates/times that existed before but are no longer in localAv
    const before = [];
    Object.entries(availability).forEach(([d, times]) => {
      Object.keys(times).forEach(tm => before.push({date:d, time:tm}));
    });
    const after = [];
    Object.entries(localAv).forEach(([d, times]) => {
      Object.keys(times).forEach(tm => after.push({date:d, time:tm}));
    });
    const afterSet = new Set(after.map(x => `${x.date}|${x.time}`));
    const toDelete = before.filter(x => !afterSet.has(`${x.date}|${x.time}`));

    for (const slot of toDelete) {
      await supabase.from("availability").delete().eq("date", slot.date).eq("time", slot.time);
    }

    // 2. Upsert every current slot (insert new ones, update is_late on existing ones)
    const upsertRows = after.map(({date, time}) => ({
      date, time, is_late: !!localAv[date][time]
    }));
    if (upsertRows.length) {
      await supabase.from("availability").upsert(upsertRows, { onConflict: "date,time" });
    }

    setSaving(false);
    onClose();
  };

  const sortedDates = Object.keys(localAv).sort();

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
      <div style={{background:"white",borderRadius:24,width:"100%",maxWidth:760,maxHeight:"88vh",overflowY:"auto",padding:28}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <h2 style={{fontSize:18,fontWeight:700,color:C.text}}>{t.adminTitle}</h2>
          <button onClick={onClose} style={{background:"none",border:`1px solid ${C.border}`,borderRadius:8,padding:"6px 14px",cursor:"pointer",fontSize:13}}>{t.adminClose}</button>
        </div>
        <p style={{fontSize:13,color:C.muted,marginBottom:8}}>{t.adminDesc}</p>
        <p style={{fontSize:12,color:"#dc2626",marginBottom:20}}>🔴 Booked &nbsp;&nbsp; 🌙 Next-day return (click moon to toggle)</p>

        {/* Add new date */}
        <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
          <input type="date" value={newDate} onChange={e=>setNewDate(e.target.value)}
            style={{flex:1,minWidth:140,border:`1px solid ${C.border}`,borderRadius:10,padding:"9px 12px",fontSize:14,outline:"none"}}/>
          <button onClick={addDate} style={{background:C.blue,color:"white",border:"none",borderRadius:10,padding:"9px 18px",fontWeight:700,fontSize:13,cursor:"pointer"}}>
            + Add date
          </button>
        </div>

        {/* Bulk add time range */}
        <div style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:14,padding:14,marginBottom:24}}>
          <p style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:C.muted,marginBottom:10}}>Add a time range to a date</p>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
            <select value={rangeDate} onChange={e=>setRangeDate(e.target.value)} style={{border:`1px solid ${C.border}`,borderRadius:8,padding:"7px 10px",fontSize:13}}>
              <option value="">Select date…</option>
              {sortedDates.map(d=><option key={d} value={d}>{fmtDate(d)}</option>)}
            </select>
            <span style={{fontSize:12,color:C.muted}}>from</span>
            <select value={rangeStart} onChange={e=>setRangeStart(e.target.value)} style={{border:`1px solid ${C.border}`,borderRadius:8,padding:"7px 10px",fontSize:13}}>
              {ALL_TIMES.map(t=><option key={t} value={t}>{t}</option>)}
            </select>
            <span style={{fontSize:12,color:C.muted}}>to</span>
            <select value={rangeEnd} onChange={e=>setRangeEnd(e.target.value)} style={{border:`1px solid ${C.border}`,borderRadius:8,padding:"7px 10px",fontSize:13}}>
              {ALL_TIMES.map(t=><option key={t} value={t}>{t}</option>)}
            </select>
            <span style={{fontSize:12,color:C.muted}}>every</span>
            <select value={rangeStep} onChange={e=>setRangeStep(Number(e.target.value))} style={{border:`1px solid ${C.border}`,borderRadius:8,padding:"7px 10px",fontSize:13}}>
              <option value={15}>15 min</option>
              <option value={30}>30 min</option>
              <option value={60}>60 min</option>
            </select>
            <button onClick={addRange} disabled={!rangeDate} style={{background:rangeDate?C.navy:"#cbd5e1",color:"white",border:"none",borderRadius:8,padding:"7px 16px",fontWeight:700,fontSize:13,cursor:rangeDate?"pointer":"not-allowed"}}>
              Add range
            </button>
          </div>
          <p style={{fontSize:11,color:C.muted,marginTop:8}}>Slots at or after {LATE_CUTOFF} are automatically marked as next-day return — you can override per slot below.</p>
        </div>

        {sortedDates.length === 0 && (
          <p style={{color:C.muted,fontSize:13,textAlign:"center",padding:"20px 0"}}>No dates configured. Add a date above.</p>
        )}

        {sortedDates.map(date => {
          const times = Object.keys(localAv[date]||{}).sort();
          return (
            <div key={date} style={{marginBottom:20,border:`1px solid ${C.border}`,borderRadius:16,padding:16}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                <p style={{fontWeight:700,fontSize:15,color:C.text}}>{fmtDate(date)}</p>
                {!bookedSlots.some(b=>b.date===date) && (
                  <button onClick={()=>removeDate(date)} style={{background:"none",border:`1px solid #fca5a5`,borderRadius:8,padding:"3px 10px",fontSize:12,color:"#dc2626",cursor:"pointer"}}>
                    Remove date
                  </button>
                )}
              </div>
              {times.length === 0 && <p style={{fontSize:12,color:C.muted}}>No time slots yet — use the range tool above.</p>}
              <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                {times.map(time => {
                  const booked = isBooked(date,time);
                  const isLate = !!localAv[date][time];
                  return (
                    <div key={time} style={{display:"flex",alignItems:"stretch",border:`1px solid ${booked?"#fca5a5":isLate?"#fbbf24":C.border}`,borderRadius:8,overflow:"hidden"}}>
                      <button onClick={()=>toggleTime(date,time)}
                        style={{padding:"5px 10px",fontSize:12,fontWeight:600,cursor:booked?"not-allowed":"pointer",border:"none",
                          background:booked?"#fee2e2":isLate?"#fef3c7":"transparent",
                          color:booked?"#dc2626":isLate?"#92400e":C.text}}>
                        {time}{booked?" 🔴":""}
                      </button>
                      {!booked && (
                        <button onClick={()=>toggleLate(date,time)} title={isLate?"Marked as next-day return":"Mark as next-day return"}
                          style={{padding:"5px 8px",fontSize:12,border:"none",borderLeft:`1px solid ${isLate?"#fbbf24":C.border}`,
                            background:isLate?"#fde68a":C.surface,cursor:"pointer"}}>
                          🌙
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <button onClick={save} disabled={saving} style={{width:"100%",height:46,background:saving?"#94a3b8":C.navy,color:"white",border:"none",borderRadius:12,fontWeight:700,fontSize:14,cursor:saving?"not-allowed":"pointer",marginTop:8}}>
          {saving ? "Saving…" : t.adminSave}
        </button>
      </div>
    </div>
  );
}

// ─── LEGAL MODAL ─────────────────────────────────────────────────────────────
const LEGAL = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "June 2026",
    content: `
**Swift Fix London Ltd — Privacy Policy**

**1. Who we are**
Swift Fix London Ltd ("we", "us", "our") is a mobile iPhone repair service operating across West London. Company registered in England and Wales. Contact: info@swiftfixlondon.co.uk · 07345 889002.

**2. What personal data we collect**
When you make a booking or contact us, we collect: your full name, collection address, email address, WhatsApp/phone number, iPhone model, and description of the repair issue. We do not collect payment card details directly — payments are processed securely via Tide.

**3. How we use your data**
We use your data to: confirm and manage your repair booking, collect and return your device, communicate updates about your repair, and send a receipt or warranty information after the repair is complete. We do not use your data for marketing without your consent.

**4. Legal basis for processing**
We process your data on the basis of contract performance (to carry out the repair service you have requested) and legitimate interests (to manage our business operations).

**5. Who we share your data with**
We do not sell your data. We may share it with payment processor Tide (for deposit transactions) and with any subcontractor involved in your specific repair, who is bound by confidentiality obligations.

**6. How long we keep your data**
We retain booking records for 12 months from the date of repair, and financial records for 6 years as required by UK law.

**7. Your rights**
Under UK GDPR you have the right to: access your data, correct inaccuracies, request deletion, object to processing, and data portability. To exercise any right, email info@swiftfixlondon.co.uk. You may also complain to the Information Commissioner's Office (ico.org.uk).

**8. Cookies**
Our website does not use tracking or advertising cookies.

**9. Changes**
We may update this policy. The current version is always available on our website.
    `
  },
  terms: {
    title: "Terms & Conditions",
    lastUpdated: "June 2026",
    content: `
**Swift Fix London Ltd — Terms & Conditions**

**1. About us**
Swift Fix London Ltd provides a collection-based iPhone repair service across West London. By booking a repair you agree to these terms.

**2. Booking and deposit**
A non-refundable £20 deposit is required to confirm your collection slot. This deposit is deducted from the total repair price on completion. If you cancel more than 24 hours before the booked slot, the deposit may be transferred to a future booking at our discretion. Cancellations within 24 hours forfeit the deposit.

**3. Collection and return**
We will collect your device from the address provided at the agreed date and time (±30 minutes). Please ensure an adult is present. We are not responsible for delays caused by events outside our control (traffic, weather, etc.).

**4. Repair service**
We will carry out only the repair agreed at the time of booking. If additional issues are found during repair, we will contact you before proceeding. Prices shown on the website include parts, labour, and 90-day warranty unless otherwise stated.

**5. Device condition**
By handing over your device, you confirm it is not subject to any finance agreement and that you are the legal owner or authorised to authorise repairs. We are not liable for pre-existing faults, data loss, or cosmetic damage not caused by our repair.

**6. Data and backups**
You are responsible for backing up your data before collection. We take reasonable care with your device but accept no liability for data loss during repair.

**7. Liability**
Our liability is limited to the cost of the repair. We are not liable for indirect or consequential loss. Nothing in these terms limits our liability for death, personal injury, or fraud.

**8. Complaints**
If you are unhappy with your repair, contact us within 7 days via WhatsApp or email. We will investigate and, where the fault is proven to be related to our repair, resolve the issue under our warranty policy.

**9. Governing law**
These terms are governed by the law of England and Wales.
    `
  },
  warranty: {
    title: "90-Day Warranty Policy",
    lastUpdated: "June 2026",
    content: `
**Swift Fix London Ltd — 90-Day Warranty Policy**

**1. What is covered**
Every repair carried out by Swift Fix London is covered by a 90-day warranty from the date of return. The warranty covers:
- Screen repairs: display functionality, touch response, and backlight.
- Battery replacements: capacity performance and charging function.
- Charging port repairs: charging and data connectivity.

**2. What is not covered**
The warranty does not cover:
- Physical damage, cracks, or liquid damage occurring after the repair.
- Faults unrelated to the specific repair carried out.
- Damage caused by a subsequent repair attempted by a third party.
- Normal wear and tear.
- Software issues, iOS updates, or manufacturer defects.

**3. How to claim**
If a fault covered by this warranty develops within 90 days, contact us via WhatsApp (07345 889002) or email (info@swiftfixlondon.co.uk) within the warranty period. Include your name, date of repair, and a description of the issue.

**4. Resolution**
Where a warranty claim is accepted, we will collect the device, carry out the required repair at no additional charge, and return it to you. We aim to resolve all valid warranty claims within 5 working days of collection.

**5. Transferability**
This warranty applies to the device repaired, not to a specific person, and is not transferable to a new owner.

**6. Consumer rights**
This warranty is in addition to your statutory rights under the Consumer Rights Act 2015. Nothing in this policy limits your legal rights.
    `
  }
};

function LegalModal({doc,onClose}) {
  const data = LEGAL[doc];
  if (!data) return null;
  const lines = data.content.trim().split("\n");
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={onClose}>
      <div style={{background:"white",borderRadius:24,width:"100%",maxWidth:680,maxHeight:"85vh",overflowY:"auto",padding:32}} onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
          <h2 style={{fontSize:22,fontWeight:800,color:C.navy}}>{data.title}</h2>
          <button onClick={onClose} style={{background:"none",border:`1px solid ${C.border}`,borderRadius:8,padding:"6px 14px",cursor:"pointer",fontSize:13,marginLeft:16,flexShrink:0}}>Close</button>
        </div>
        <p style={{fontSize:12,color:C.muted,marginBottom:20}}>Last updated: {data.lastUpdated}</p>
        <div style={{fontSize:14,lineHeight:1.75,color:"#334155"}}>
          {lines.map((line,i) => {
            if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
              const txt = line.slice(2,-2);
              return <p key={i} style={{fontWeight:700,color:C.text,marginTop:i===0?0:16,marginBottom:4}}>{txt}</p>;
            }
            if (line.startsWith("- ")) return <p key={i} style={{paddingLeft:16,marginBottom:2}}>· {line.slice(2)}</p>;
            if (line.trim()==="") return <div key={i} style={{height:6}}/>;
            return <p key={i} style={{marginBottom:4}}>{line}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function SwiftFixLondon() {
  const [lang, setLang]   = React.useState("en");
  const [model, setModel] = React.useState("iPhone 15");
  const [repair, setRepair] = React.useState(null);
  const [date, setDate]   = React.useState(Object.keys(AVAILABILITY)[0]);
  const [time, setTime]   = React.useState(Object.keys(AVAILABILITY[Object.keys(AVAILABILITY)[0]])[0]);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [showAdmin, setShowAdmin] = React.useState(false);
  const [adminKey, setAdminKey]   = React.useState("");
  const [adminPrompt, setAdminPrompt] = React.useState(false);
  const [legalDoc, setLegalDoc]   = React.useState(null);
  const [bookedSlots, setBookedSlots] = React.useState([]); // loaded from Supabase, live-synced
  const [availability, setAvailability] = React.useState(AVAILABILITY); // loaded from Supabase, falls back to defaults
  const [bookingConfirmed, setBookingConfirmed] = React.useState(false);
  const [dbReady, setDbReady] = React.useState(false);
  const [bookingError, setBookingError] = React.useState("");
  const [paymentCountdown, setPaymentCountdown] = React.useState(null); // seconds remaining

  const ADMIN_PASSWORD = "Chiara2026.swift";

  const t = COPY[lang];
  React.useEffect(() => { setRepair(t.repairs[0]); }, [lang]);

  // Favicon injection
  React.useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) { link = document.createElement("link"); link.rel = "icon"; document.head.appendChild(link); }
    link.href = FAVICON_SVG;
    document.title = "Swift Fix London | iPhone Repairs West London";
  }, []);

  // ── SUPABASE: load bookings + availability, and seed availability on first run ──
  React.useEffect(() => {
    let isMounted = true;

    const loadEverything = async () => {
      // 1. Load bookings
      const { data: bookingRows, error: bErr } = await supabase
        .from("bookings")
        .select("*");
      if (!bErr && isMounted) {
        setBookedSlots((bookingRows||[]).map(r => ({
          date:r.date, time:r.time, ref:r.ref, model:r.model,
          repair:r.repair, confirmed:r.confirmed, createdAt:new Date(r.created_at).getTime()
        })));
      }

      // 2. Load availability
      const { data: availRows, error: aErr } = await supabase
        .from("availability")
        .select("*");

      if (!aErr && isMounted) {
        if (availRows && availRows.length > 0) {
          const built = {};
          availRows.forEach(r => {
            if (!built[r.date]) built[r.date] = {};
            built[r.date][r.time] = r.is_late;
          });
          setAvailability(built);
        } else {
          // First time ever running: seed the DB with the default schedule
          const rowsToInsert = [];
          Object.entries(AVAILABILITY).forEach(([d, times]) => {
            Object.entries(times).forEach(([tm, isLate]) => {
              rowsToInsert.push({ date:d, time:tm, is_late:isLate });
            });
          });
          if (rowsToInsert.length) await supabase.from("availability").insert(rowsToInsert);
          setAvailability(AVAILABILITY);
        }
      }
      if (isMounted) setDbReady(true);
    };

    loadEverything();

    // ── Realtime: reflect other visitors' bookings/admin changes instantly ──
    const bookingsChannel = supabase
      .channel("bookings-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "bookings" }, () => loadEverything())
      .subscribe();

    const availabilityChannel = supabase
      .channel("availability-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "availability" }, () => loadEverything())
      .subscribe();

    return () => {
      isMounted = false;
      supabase.removeChannel(bookingsChannel);
      supabase.removeChannel(availabilityChannel);
    };
  }, []);

  // Keep time valid when date changes
  React.useEffect(() => {
    const times = Object.keys(availability[date] || {});
    const available = times.filter(t => !bookedSlots.some(b=>b.date===date&&b.time===t));
    if (!available.includes(time)) setTime(available[0] || "");
  }, [date, availability]);

  const currentRepair = repair || t.repairs[0];
  const price = getPrice(model, currentRepair, lang);

  const isSlotTaken = (d, ti) => bookedSlots.some(b => b.date===d && b.time===ti);
  const isLateSlot = (d, ti) => !!(availability[d] && availability[d][ti]);
  const isTooLateToBook = (d, ti) => !ti ? false : isWithinNoticeWindow(d, ti);

  // ── Rule 1: Remove unconfirmed bookings after 30 minutes from creation ──
  React.useEffect(() => {
    if (!dbReady) return;
    const sweep = async () => {
      const expired = bookedSlots.filter(b => !b.confirmed && isPaymentExpired(b.createdAt));
      for (const b of expired) {
        await supabase.from("bookings").delete().eq("ref", b.ref);
      }
    };
    sweep();
    const id = setInterval(sweep, 30 * 1000); // check every 30 seconds
    return () => clearInterval(id);
  }, [dbReady, bookedSlots]);

  // ── Rule 2: Hide slots from calendar if start is within 2 hours and nobody booked ──
  // (handled in render via isWithinNoticeWindow — slots already booked stay visible)

  // ── Countdown timer: show seconds remaining for unconfirmed bookings ──
  React.useEffect(() => {
    if (!bookingConfirmed) { setPaymentCountdown(null); return; }
    // Find the booking just made (most recent unconfirmed)
    const latest = bookedSlots.filter(b => !b.confirmed).sort((a,b) => b.createdAt - a.createdAt)[0];
    if (!latest) { setPaymentCountdown(null); return; }
    const tick = () => {
      const remaining = Math.max(0, PAYMENT_WINDOW_MS - (Date.now() - latest.createdAt));
      setPaymentCountdown(Math.ceil(remaining / 1000));
      if (remaining <= 0) setPaymentCountdown(0);
    };
    tick();
    const id = setInterval(() => {
      tick();
      const remaining = Math.max(0, PAYMENT_WINDOW_MS - (Date.now() - latest.createdAt));
      if (remaining <= 0) {
        clearInterval(id);
        setTimeout(() => { setBookingConfirmed(false); setPaymentCountdown(null); }, 5000);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [bookingConfirmed, bookedSlots]);

  const fmtCountdown = (secs) => {
    if (secs === null) return "";
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${String(s).padStart(2,"0")}`;
  };

  const handleBookSlot = async () => {
    if (!time || isSlotTaken(date, time) || isTooLateToBook(date, time)) return;
    setBookingError("");
    const ref = "SFL-" + Date.now().toString(36).toUpperCase();
    const { error } = await supabase.from("bookings").insert({
      ref, date, time, model, repair: currentRepair, confirmed: false
    });
    if (error) {
      // Most likely someone else grabbed this exact slot a moment earlier
      // (the unique(date,time) constraint in the DB rejects the duplicate).
      setBookingError(
        lang === "en"
          ? "Sorry, that slot was just taken by someone else. Please pick another."
          : "Lo sentimos, esa franja la acaba de reservar otra persona. Elige otra."
      );
      return;
    }
    setBookingConfirmed(true);
    // Don't auto-hide — the countdown timer will stay visible until payment or expiry
  };

  // Call this once the customer confirms payment on WhatsApp, to lock the slot in
  // (prevents the 2-hour auto-release sweep from clearing it)
  const handleConfirmBooking = async () => {
    await supabase.from("bookings")
      .update({ confirmed: true })
      .eq("date", date)
      .eq("time", time);
    setBookingConfirmed(false); // hide countdown once confirmed
    setPaymentCountdown(null);
  };

  const waBase = "https://wa.me/447345889002?text=";
  const lateNote = isLateSlot(date,time) ? `\n⚠️ Next-day return: this device will be returned the following working day.` : "";
  const quoteMsg = encodeURIComponent(`Hi, I'd like a quote.\nModel: ${model}\nRepair: ${currentRepair}`);
  const confirmMsg = encodeURIComponent(`Hi, I've paid the £20 deposit.\nModel: ${model}\nRepair: ${currentRepair}\nDate: ${fmtDate(date)}\nTime: ${time}${lateNote}\n\nName:\nAddress:`);
  const detailsMsg = encodeURIComponent(`Hi, repair details:\nModel: ${model}\nRepair: ${currentRepair}\nDate: ${fmtDate(date)}\nTime: ${time}${lateNote}\n\nName:\nAddress:\nProblem:\nRepaired before?\nPowers on?\nEmail:`);

  const pill = (active, taken) => ({
    padding:"9px 16px", borderRadius:100, fontSize:13, fontWeight:600, cursor:taken?"not-allowed":"pointer",
    border:`1px solid ${taken?"#fca5a5":active?C.blue:C.border}`,
    background:taken?"#fee2e2":active?C.blue:"transparent",
    color:taken?"#dc2626":active?"white":C.text,
    opacity:taken?0.7:1,
  });

  const selectStyle = {width:"100%",background:C.navy,border:`1px solid ${C.borderDk}`,borderRadius:12,padding:"11px 14px",fontSize:14,color:"white",outline:"none",cursor:"pointer"};

  const availDates = Object.keys(availability).sort();

  return (
    <>
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f8fafc}
        select option{background:#0f1f3d;color:white}
        a{text-decoration:none}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
        @keyframes slideIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
        .fade-up{animation:fadeUp .5s ease both}
        .hover-lift{transition:transform .2s,box-shadow .2s}
        .hover-lift:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(0,0,0,.09)}
        .nav-a:hover{color:#0f1f3d!important}
        @media(max-width:768px){
          .desktop-only{display:none!important}
          .mob-toggle{display:inline-flex!important}
          .hero-grid,.book-grid,.areas-grid,.contact-grid{grid-template-columns:1fr!important}
          .stats-row{grid-template-columns:1fr 1fr!important}
          .summary-3col{grid-template-columns:1fr 1fr!important}
          .finder-grid,.cta-row{grid-template-columns:1fr!important}
        }
      `}</style>

      {showAdmin && <AdminPanel availability={availability} setAvailability={setAvailability} bookedSlots={bookedSlots} t={t} onClose={()=>setShowAdmin(false)}/>}
      {legalDoc && <LegalModal doc={legalDoc} onClose={()=>setLegalDoc(null)}/>}

      {/* Admin password prompt */}
      {adminPrompt && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{background:"white",borderRadius:20,padding:28,width:320}}>
            <p style={{fontWeight:700,marginBottom:12,color:C.text}}>Admin access</p>
            <input type="password" value={adminKey} onChange={e=>setAdminKey(e.target.value)}
              placeholder="Password" autoFocus
              style={{width:"100%",border:`1px solid ${C.border}`,borderRadius:10,padding:"9px 12px",fontSize:14,outline:"none",marginBottom:10}}
              onKeyDown={e=>{if(e.key==="Enter"){if(adminKey===ADMIN_PASSWORD){setShowAdmin(true);setAdminPrompt(false);setAdminKey("");}else{setAdminKey("");}}}
              }/>
            <div style={{display:"flex",gap:8}}>
              <button onClick={()=>{if(adminKey===ADMIN_PASSWORD){setShowAdmin(true);setAdminPrompt(false);setAdminKey("");}else setAdminKey("");}}
                style={{flex:1,background:C.navy,color:"white",border:"none",borderRadius:10,padding:"9px",fontWeight:700,cursor:"pointer"}}>Enter</button>
              <button onClick={()=>{setAdminPrompt(false);setAdminKey("");}}
                style={{flex:1,background:"none",border:`1px solid ${C.border}`,borderRadius:10,padding:"9px",cursor:"pointer"}}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div style={{color:C.text,minHeight:"100vh"}}>

        {/* TOP BAR */}
        <div style={{background:C.navyMid,color:"rgba(255,255,255,0.7)",fontSize:12,fontWeight:600,textAlign:"center",padding:"9px 24px",letterSpacing:"0.03em"}}>
          {t.topBar}
        </div>

        {/* HEADER */}
        <header style={{position:"sticky",top:0,zIndex:50,background:"rgba(255,255,255,0.96)",borderBottom:`1px solid ${C.border}`,backdropFilter:"blur(12px)"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between",gap:16}}>
            <a href="#"><img src={LOGO_B64} alt="Swift Fix London" style={{height:44,width:"auto",display:"block"}}/></a>
            <button onClick={()=>setMenuOpen(v=>!v)} className="mob-toggle" style={{display:"none",background:"none",border:`1px solid ${C.border}`,borderRadius:100,padding:"5px 14px",fontSize:13,fontWeight:700,color:C.text,cursor:"pointer"}}>
              Menu
            </button>
            <nav className="desktop-only" style={{display:"flex",alignItems:"center",gap:24}}>
              {Object.entries(t.navLinks).map(([k,v])=>(
                <a key={k} href={`#${k}`} className="nav-a" style={{fontSize:14,fontWeight:500,color:C.muted}}>{v}</a>
              ))}
              <a href={`${waBase}${quoteMsg}`} style={{display:"inline-flex",alignItems:"center",gap:6,height:38,padding:"0 18px",background:C.navy,color:"white",borderRadius:100,fontSize:13,fontWeight:700}}>
                <WA/> WhatsApp
              </a>
              <button onClick={()=>setLang(lang==="en"?"es":"en")} style={{fontSize:11,fontWeight:700,color:C.muted,background:"transparent",border:`1px solid ${C.border}`,borderRadius:100,padding:"3px 10px",cursor:"pointer"}}>
                {lang==="en"?"ES":"EN"}
              </button>
            </nav>
          </div>
          {menuOpen && (
            <div style={{display:"flex",flexDirection:"column",gap:2,padding:"8px 24px 16px",borderTop:`1px solid ${C.border}`,background:"white"}}>
              {Object.entries(t.navLinks).map(([k,v])=>(
                <a key={k} href={`#${k}`} onClick={()=>setMenuOpen(false)} style={{fontSize:15,fontWeight:600,color:C.text,padding:"8px 0",borderBottom:`1px solid ${C.surface}`}}>{v}</a>
              ))}
              <div style={{display:"flex",gap:10,marginTop:8}}>
                <a href={`${waBase}${quoteMsg}`} style={{display:"inline-flex",alignItems:"center",gap:6,flex:1,justifyContent:"center",height:40,background:C.navy,color:"white",borderRadius:100,fontSize:13,fontWeight:700}}><WA/> WhatsApp</a>
                <button onClick={()=>setLang(lang==="en"?"es":"en")} style={{fontSize:12,fontWeight:700,color:C.muted,background:"transparent",border:`1px solid ${C.border}`,borderRadius:100,padding:"0 14px",cursor:"pointer"}}>
                  {lang==="en"?"ES":"EN"}
                </button>
              </div>
            </div>
          )}
        </header>

        {/* HERO */}
        <section style={{background:C.white,borderBottom:`1px solid ${C.border}`,overflow:"hidden"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:"72px 24px 0"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,alignItems:"start"}} className="hero-grid">
              <div style={{paddingBottom:72}} className="fade-up">
                <Badge>{t.heroBadge}</Badge>
                <h1 style={{marginTop:16,fontSize:"clamp(44px,6vw,82px)",fontWeight:900,lineHeight:1.0,letterSpacing:"-0.045em",color:C.navyMid}}>
                  {t.heroTitle.map((line,i)=><span key={i} style={{display:"block"}}>{line}</span>)}
                </h1>
                <p style={{marginTop:18,fontSize:17,color:"#334155",lineHeight:1.65,maxWidth:480}}>{t.heroSub}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:24}}>
                  {t.trust.map(b=>(
                    <span key={b} style={{display:"inline-flex",alignItems:"center",gap:5,fontSize:12,fontWeight:600,color:"#475569",padding:"7px 13px",border:`1px solid ${C.border}`,borderRadius:100,background:C.surface}}>
                      <span style={{width:4,height:4,borderRadius:"50%",background:C.blue,display:"inline-block"}}/>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{background:C.navy,border:`1px solid ${C.borderDk}`,borderRadius:24,padding:24}}>
                  <p style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,0.4)",marginBottom:14}}>{t.calcTitle}</p>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}} className="finder-grid">
                    <div>
                      <span style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.4)",marginBottom:7,display:"block"}}>{t.modelLabel}</span>
                      <select value={model} onChange={e=>setModel(e.target.value)} style={selectStyle}>
                        {IPHONE_MODELS.map(m=><option key={m}>{m}</option>)}
                      </select>
                    </div>
                    <div>
                      <span style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.4)",marginBottom:7,display:"block"}}>{t.repairLabel}</span>
                      <select value={currentRepair} onChange={e=>setRepair(e.target.value)} style={selectStyle}>
                        {t.repairs.map(r=><option key={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>
                  <div style={{background:`linear-gradient(135deg,${C.blue},${C.blueBright})`,borderRadius:16,padding:"22px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,marginBottom:16}}>
                    <div>
                      <p style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(255,255,255,0.55)",marginBottom:6}}>{t.priceLabel}</p>
                      <p style={{fontSize:48,fontWeight:900,letterSpacing:"-0.045em",color:"white",lineHeight:1}}>£{price}</p>
                    </div>
                    <p style={{fontSize:12,color:"rgba(255,255,255,0.6)",lineHeight:1.6,maxWidth:200,textAlign:"right"}}>{t.priceNote}</p>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}} className="cta-row">
                    <a href="#booking" style={{display:"inline-flex",alignItems:"center",justifyContent:"center",height:46,background:"white",color:C.navy,borderRadius:12,fontSize:13,fontWeight:700}}>{t.ctaBook}</a>
                    <a href={`${waBase}${quoteMsg}`} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,height:46,background:"transparent",color:"white",border:`1px solid ${C.borderDk}`,borderRadius:12,fontSize:13,fontWeight:600}}>
                      <WA/>{t.ctaWhatsApp}
                    </a>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",borderTop:`1px solid ${C.border}`,marginTop:28}} className="stats-row">
                  {t.stats.map((s,i)=>(
                    <div key={s.l} style={{padding:"22px 0",borderRight:i<3?`1px solid ${C.border}`:"none",paddingLeft:i===0?0:20}}>
                      <p style={{fontSize:26,fontWeight:900,color:C.navyMid,letterSpacing:"-0.03em"}}>{s.v}</p>
                      <p style={{fontSize:11,color:C.muted,marginTop:4}}>{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <Section id="services" bg={C.surface}>
          <Badge>{t.servBadge}</Badge>
          <h2 style={{marginTop:10,fontSize:"clamp(28px,4vw,44px)",fontWeight:800,letterSpacing:"-0.03em",color:C.text,marginBottom:8}}>{t.servTitle}</h2>
          <p style={{fontSize:16,color:C.muted,lineHeight:1.6,maxWidth:440,marginBottom:44}}>{t.servSub}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16}}>
            {t.services.map(sv=>(
              <div key={sv.title} className="hover-lift" style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:20,padding:28}}>
                <p style={{fontSize:13,fontWeight:700,color:C.blue,marginBottom:6}}>{sv.from}</p>
                <h3 style={{fontSize:17,fontWeight:700,color:C.text,marginBottom:8}}>{sv.title}</h3>
                <p style={{fontSize:13.5,color:C.muted,lineHeight:1.65}}>{sv.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* WHY */}
        <Section id="why" bg={C.white} style={{borderTop:`1px solid ${C.border}`,borderBottom:`1px solid ${C.border}`}}>
          <Badge>{t.whyBadge}</Badge>
          <h2 style={{marginTop:10,fontSize:"clamp(28px,4vw,44px)",fontWeight:800,letterSpacing:"-0.03em",color:C.navyMid,marginBottom:44}}>{t.whyTitle}</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:16}}>
            {t.why.map((w)=>(
              <div key={w.title} className="hover-lift" style={{background:C.surface,border:`1px solid ${C.border}`,borderRadius:20,padding:28}}>
                <div style={{fontSize:28,marginBottom:14,lineHeight:1}}>{w.icon}</div>
                <h3 style={{fontSize:16,fontWeight:700,color:C.navyMid,marginBottom:8}}>{w.title}</h3>
                <p style={{fontSize:13.5,color:"#475569",lineHeight:1.7}}>{w.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* AREAS */}
        <Section id="areas" bg={C.surface}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"}} className="areas-grid">
            <div>
              <Badge>{t.areasBadge}</Badge>
              <h2 style={{marginTop:10,fontSize:"clamp(28px,4vw,40px)",fontWeight:800,letterSpacing:"-0.03em",color:C.text,marginBottom:10}}>{t.areasTitle}</h2>
              <p style={{fontSize:15,color:C.muted,lineHeight:1.65,maxWidth:380}}>{t.areasSub}</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(130px,1fr))",gap:10}}>
              {AREAS.map(a=>(
                <div key={a} className="hover-lift" style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:14,padding:"13px 16px",textAlign:"center",fontSize:14,fontWeight:600,color:C.text}}>{a}</div>
              ))}
            </div>
          </div>
        </Section>

        {/* BOOKING */}
        <section id="booking" style={{background:C.navy}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:"80px 24px",display:"grid",gridTemplateColumns:"1fr 1.25fr",gap:44,alignItems:"start"}} className="book-grid">
            <div>
              <Badge light>{t.bookBadge}</Badge>
              <h2 style={{marginTop:10,fontSize:"clamp(28px,4vw,44px)",fontWeight:800,color:"white",marginBottom:14}}>{t.bookTitle}</h2>
              <p style={{fontSize:15,color:"#64748b",lineHeight:1.7,marginBottom:28}}>{t.bookSub}</p>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {t.steps.map((st,i)=>(
                  <div key={st} style={{display:"flex",alignItems:"center",gap:12,fontSize:13,color:"#475569",padding:"10px 16px",border:`1px solid ${C.borderDk}`,borderRadius:10,background:"rgba(255,255,255,0.02)"}}>
                    <span style={{fontWeight:800,color:C.blue,fontSize:12,minWidth:18}}>{i+1}</span>{st}
                  </div>
                ))}
              </div>
            </div>

            <div style={{background:C.white,borderRadius:24,padding:28,boxShadow:"0 32px 80px rgba(0,0,0,0.4)"}}>
              <h3 style={{fontSize:18,fontWeight:700,color:C.text,marginBottom:16}}>{t.summaryTitle}</h3>

              {/* Summary */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:16}} className="summary-3col">
                {[{l:t.modelL,v:model},{l:t.repairL,v:currentRepair},{l:t.priceL,v:`£${price}`}].map(c=>(
                  <div key={c.l} style={{background:C.surface,borderRadius:12,padding:"10px 12px",border:`1px solid ${C.border}`}}>
                    <p style={{fontSize:10,color:C.muted,marginBottom:2,textTransform:"uppercase",letterSpacing:"0.08em"}}>{c.l}</p>
                    <p style={{fontSize:13,fontWeight:700,color:C.text,wordBreak:"break-word"}}>{c.v}</p>
                  </div>
                ))}
              </div>

              {/* Date + time picker */}
              <div style={{border:`1px solid ${C.border}`,borderRadius:16,padding:16,marginBottom:12}}>
                <p style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:C.muted,marginBottom:12}}>{t.datesLabel}</p>
                {availDates.length === 0 ? (
                  <p style={{fontSize:13,color:C.muted,padding:"8px 0"}}>No dates available. Check back soon.</p>
                ) : (
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>
                    {availDates.map(d=>(
                      <button key={d} onClick={()=>setDate(d)} style={pill(date===d,false)}>
                        {fmtShort(d,lang)}
                      </button>
                    ))}
                  </div>
                )}

                <p style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:C.muted,margin:"14px 0 10px"}}>{t.timesLabel}</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                  {Object.keys(availability[date]||{}).sort().map(ti => {
                    const taken = isSlotTaken(date, ti);
                    const late = isLateSlot(date, ti);
                    const tooLate = isTooLateToBook(date, ti);
                    const disabled = taken || tooLate;
                    return (
                      <button key={ti} onClick={()=>!disabled && setTime(ti)}
                        style={tooLate && !taken ? {...pill(false,false), opacity:0.45, cursor:"not-allowed", textDecoration:"line-through"} : pill(time===ti && !disabled, taken)}
                        title={taken ? t.slotTaken : tooLate ? t.tooLateNotice : late ? t.lateSlotNotice : t.slotFree}>
                        {ti}{late ? " 🌙" : ""}{taken ? " ✓" : ""}
                      </button>
                    );
                  })}
                </div>

                {/* Too-late-to-book notice */}
                {time && isTooLateToBook(date,time) && !isSlotTaken(date,time) && (
                  <div style={{marginTop:12,background:"#fee2e2",border:"1px solid #fca5a5",borderRadius:10,padding:"10px 14px",display:"flex",gap:8,alignItems:"flex-start"}}>
                    <span style={{fontSize:14}}>⏰</span>
                    <div>
                      <p style={{fontSize:12,fontWeight:700,color:"#991b1b"}}>{t.tooLateTag}</p>
                      <p style={{fontSize:12,color:"#991b1b",lineHeight:1.5}}>{t.tooLateNotice}</p>
                    </div>
                  </div>
                )}

                {/* Next-day return notice */}
                {time && isLateSlot(date,time) && !isSlotTaken(date,time) && !isTooLateToBook(date,time) && (
                  <div style={{marginTop:12,background:"#fef3c7",border:"1px solid #fde68a",borderRadius:10,padding:"10px 14px",display:"flex",gap:8,alignItems:"flex-start"}}>
                    <span style={{fontSize:14}}>🌙</span>
                    <div>
                      <p style={{fontSize:12,fontWeight:700,color:"#92400e"}}>{t.lateSlotTag}</p>
                      <p style={{fontSize:12,color:"#92400e",lineHeight:1.5}}>{t.lateSlotNotice}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Booking confirmation toast with countdown */}
              {bookingConfirmed && (
                <div style={{background:"#dcfce7",border:"1px solid #86efac",borderRadius:12,padding:"12px 16px",marginBottom:12,animation:"slideIn .3s ease"}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                    <span style={{fontSize:16}}>✓</span>
                    <p style={{fontSize:13,fontWeight:700,color:"#166534"}}>
                      Slot reserved!{isLateSlot(date,time) ? " Next-day return applies." : ""}
                    </p>
                  </div>
                  {paymentCountdown !== null && paymentCountdown > 0 && (
                    <div style={{background:"#fef3c7",border:"1px solid #fde68a",borderRadius:8,padding:"8px 12px",display:"flex",alignItems:"center",gap:8}}>
                      <span style={{fontSize:16}}>⏱️</span>
                      <div>
                        <p style={{fontSize:12,fontWeight:700,color:"#92400e"}}>
                          Time to pay: <span style={{fontSize:15,fontFamily:"monospace"}}>{fmtCountdown(paymentCountdown)}</span>
                        </p>
                        <p style={{fontSize:11,color:"#92400e"}}>Pay the £20 deposit before your slot is released automatically.</p>
                      </div>
                    </div>
                  )}
                  {paymentCountdown === 0 && (
                    <div style={{background:"#fee2e2",border:"1px solid #fca5a5",borderRadius:8,padding:"8px 12px"}}>
                      <p style={{fontSize:12,fontWeight:700,color:"#991b1b"}}>⏰ Time expired — your slot has been released. Please book again.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Deposit */}
              <div style={{background:C.surface,borderRadius:16,padding:16,marginBottom:12}}>
                <p style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:C.muted,marginBottom:8}}>{t.depositTitle}</p>
                <p style={{fontSize:13,color:C.muted,lineHeight:1.6,marginBottom:8}}>{t.depositDesc}</p>
                <p style={{fontSize:11,color:"#94a3b8",lineHeight:1.5,marginBottom:12}}>{t.autoCancelNotice}</p>
                {bookingError && (
                  <div style={{background:"#fee2e2",border:"1px solid #fca5a5",borderRadius:10,padding:"9px 12px",marginBottom:10}}>
                    <p style={{fontSize:12,color:"#991b1b",fontWeight:600}}>{bookingError}</p>
                  </div>
                )}
                <button onClick={handleBookSlot}
                  disabled={!time || isSlotTaken(date,time) || isTooLateToBook(date,time)}
                  style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:46,background:(!time||isSlotTaken(date,time)||isTooLateToBook(date,time))?"#94a3b8":C.navy,color:"white",border:"none",borderRadius:12,fontSize:14,fontWeight:700,cursor:(!time||isSlotTaken(date,time)||isTooLateToBook(date,time))?"not-allowed":"pointer",marginBottom:8}}>
                  Reserve slot
                </button>
                <a href="https://pay.tide.co/2a1ab64b-1d04-4eac-8bcc-f0f43cd2af6a" target="_blank" rel="noreferrer"
                  style={{display:"flex",alignItems:"center",justifyContent:"center",height:46,background:C.blue,color:"white",borderRadius:12,fontSize:14,fontWeight:700,marginBottom:8}}>
                  {t.depositCta}
                </a>
                <a href={`${waBase}${confirmMsg}`} onClick={handleConfirmBooking}
                  style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,height:46,background:"transparent",color:C.text,border:`1px solid ${C.border}`,borderRadius:12,fontSize:14,fontWeight:600}}>
                  <WA/>{t.confirmCta}
                </a>
              </div>

              {/* Optional details */}
              <div style={{border:`1px dashed ${C.border}`,borderRadius:16,padding:16}}>
                <p style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:C.muted,marginBottom:6}}>{t.detailsTitle}</p>
                <p style={{fontSize:13,color:C.muted,lineHeight:1.6,marginBottom:12}}>{t.detailsDesc}</p>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:12}}>
                  {t.detailsFields.map(f=>(
                    <div key={f} style={{fontSize:12,color:C.muted,background:C.surface,border:`1px solid ${C.border}`,borderRadius:8,padding:"6px 10px"}}>{f}</div>
                  ))}
                </div>
                <a href={`${waBase}${detailsMsg}`} style={{display:"inline-flex",alignItems:"center",gap:6,fontSize:13,fontWeight:600,color:C.blue,border:`1px solid ${C.blueLight}`,borderRadius:10,padding:"9px 14px"}}>
                  <WA/>{t.detailsCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <Section id="reviews" bg={C.surface}>
          <Badge>{t.revBadge}</Badge>
          <h2 style={{marginTop:10,fontSize:"clamp(28px,4vw,44px)",fontWeight:800,letterSpacing:"-0.03em",color:C.text,marginBottom:8}}>{t.revTitle}</h2>
          <p style={{fontSize:16,color:C.muted,lineHeight:1.6,marginBottom:40}}>{t.revSub}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16}}>
            {t.reviews.map((r,i)=>(
              <div key={i} className="hover-lift" style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:20,padding:28}}>
                <div style={{color:C.blue,fontSize:13,letterSpacing:3,marginBottom:12}}>★★★★★</div>
                <p style={{fontSize:15,color:C.text,lineHeight:1.7,fontStyle:"italic",marginBottom:16}}>&ldquo;{r.q}&rdquo;</p>
                <p style={{fontSize:13,fontWeight:700,color:C.text}}>{r.n}</p>
                <p style={{fontSize:12,color:C.muted}}>{r.loc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <section id="contact" style={{background:C.white,borderTop:`1px solid ${C.border}`}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:"80px 24px"}}>
            <div style={{background:C.navy,borderRadius:24,padding:"48px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:40,alignItems:"center"}} className="contact-grid">
              <div>
                <Badge light>{t.contactBadge}</Badge>
                <h2 style={{marginTop:10,fontSize:"clamp(24px,3vw,36px)",fontWeight:800,color:"white",marginBottom:10}}>{t.contactTitle}</h2>
                <p style={{fontSize:15,color:"#64748b",lineHeight:1.7}}>{t.contactSub}</p>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                {[
                  {label:t.waLabel,    val:"07345 889002",              href:"https://wa.me/447345889002"},
                  {label:t.emailLabel, val:"info@swiftfixlondon.co.uk", href:"mailto:info@swiftfixlondon.co.uk"},
                  {label:t.webLabel,   val:"swiftfixlondon.co.uk",      href:"https://www.swiftfixlondon.co.uk"},
                  {label:t.igLabel,    val:"@swiftfix.london",           href:"https://www.instagram.com/swiftfix.london"},
                ].map(({label,val,href})=>(
                  <a key={label} href={href}
                    style={{display:"block",background:"rgba(255,255,255,0.04)",border:`1px solid ${C.borderDk}`,borderRadius:14,padding:"14px 20px"}}
                    onMouseEnter={e=>e.currentTarget.style.borderColor="#334155"}
                    onMouseLeave={e=>e.currentTarget.style.borderColor=C.borderDk}>
                    <p style={{fontSize:11,color:"#475569",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:2}}>{label}</p>
                    <p style={{fontSize:16,fontWeight:700,color:"white"}}>{val}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{background:C.navy,borderTop:`1px solid ${C.borderDk}`,padding:"22px 24px"}}>
          <div style={{maxWidth:1200,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
            <p style={{fontSize:12,color:"#334155"}}>© 2026 Swift Fix London Ltd · Registered in England &amp; Wales</p>
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8}}>
              <a href="https://www.instagram.com/swiftfix.london" target="_blank" rel="noreferrer"
                style={{display:"inline-flex",alignItems:"center",gap:6,fontSize:11,color:"#475569",fontWeight:600,textDecoration:"none"}}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                @swiftfix.london
              </a>
              <button onClick={()=>setAdminPrompt(true)}
                style={{display:"inline-flex",alignItems:"center",gap:5,fontSize:11,fontWeight:600,color:"#475569",
                  background:"none",border:"none",cursor:"pointer",padding:0,textDecoration:"none"}}>
                ⚙️ {t.adminPanel}
              </button>
            </div>
          </div>
          <div style={{maxWidth:1200,margin:"10px auto 0",display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}}>
            {Object.entries(t.legalLinks).map(([k,v])=>(
              <button key={k} onClick={()=>setLegalDoc(k)}
                style={{fontSize:11,color:"#475569",background:"none",border:"none",cursor:"pointer",textDecoration:"underline",padding:0}}>
                {v}
              </button>
            ))}
          </div>
        </footer>

        {/* STICKY CTA */}
        <div style={{position:"fixed",bottom:20,right:20,zIndex:100}}>
          <a href={`${waBase}${quoteMsg}`}
            style={{height:48,display:"inline-flex",alignItems:"center",gap:8,padding:"0 20px",background:C.navy,color:"white",borderRadius:100,fontSize:13,fontWeight:700,boxShadow:"0 8px 32px rgba(0,0,0,0.35)",border:`1px solid ${C.borderDk}`}}>
            <WA/>{t.stickyCta}
          </a>
        </div>

      </div>
    </>
  );
}
