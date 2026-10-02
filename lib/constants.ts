// ── Contact & WhatsApp ──────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "5213318241919";
export const WHATSAPP_MESSAGE =
  "Hola, me gustaría solicitar una cotización para un proyecto de toldos.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ── Company Info ─────────────────────────────────────────────────────────────
export const SITE_URL = "https://www.toldosylonasgdl.com";
export const COMPANY_NAME = "Toldos y Lonas Guadalajara";
export const COMPANY_TAGLINE = "Arquitectura Exterior desde 2009";
export const BRAND_PROMISE =
  "Transformamos espacios exteriores en experiencias extraordinarias";
export const FOUNDING_YEAR = "2009";
export const COMPANY_SLOGAN =
  "Diseñamos espacios exteriores para vivirlos todo el año";

// TODO: Fill in real contact data before deploy
export const CONTACT = {
  email: "contacto@toldosylonasgdl.com",
  phone: "33 1824 1919",
  // Taller y showroom (from the client's Facebook page)
  street: "Garibaldi 1469, Col. Ladrón de Guevara",
  address: "Garibaldi 1469, Col. Ladrón de Guevara, Guadalajara, Jalisco",
};

// ── Business Hours ───────────────────────────────────────────────────────────
// Shown in the footer and contact page, and published in the LocalBusiness
// JSON-LD. Times are 24h "HH:MM"; an empty slots list means closed.
export const BUSINESS_HOURS = [
  {
    label: "Lunes a Viernes",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    slots: [
      ["09:00", "14:00"],
      ["16:00", "18:30"],
    ],
  },
  { label: "Sábado", dayOfWeek: ["Saturday"], slots: [["09:00", "14:30"]] },
];

// ── Social Media ─────────────────────────────────────────────────────────────
export const SOCIAL = {
  instagram: "https://instagram.com/toldosylonasguadalajara/",
  facebook: "https://www.facebook.com/toldosylonasgdl",
  youtube: "https://youtu.be/0T_UH50Ljtk",
};

// ── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Productos", href: "/productos" },
  { label: "Galería", href: "/galeria" },
  { label: "Materiales", href: "/materiales" },
  { label: "Contacto", href: "/contactenos" },
];

// ── Products ─────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id: "toldos-residenciales",
    title: "Toldos Residenciales",
    shortDesc:
      "Toldos fijos, capotas, palillerías y toldos para cochera hechos a la medida de tu casa.",
    fullDesc:
      "Fabricamos e instalamos toldos para fachadas, ventanas, terrazas, jardines y cocheras. Toldos fijos, tipo capota, palillerías y toldos tipo pérgola con telas acrílicas importadas.",
    icon: "home",
    href: "/productos/toldos-residenciales",
    specs: [
      "Toldos fijos, capotas y palillerías",
      "Toldos para cochera y tipo pérgola",
      "Telas acrílicas Sunbrella y Sattler",
    ],
    keywords: ["toldos residenciales Guadalajara", "toldos para casa"],
  },
  {
    id: "sistemas-comerciales",
    title: "Toldos Comerciales",
    shortDesc:
      "Toldos para locales, restaurantes, plazas y hoteles que hacen visible tu negocio.",
    fullDesc:
      "Fabricamos toldos para fachadas de locales, terrazas de restaurante, plazas comerciales y hoteles. Somos fabricantes mayoristas para comercios, constructoras y centros comerciales.",
    icon: "building",
    href: "/productos/sistemas-comerciales",
    specs: [
      "Fachadas y marquesinas de locales",
      "Terrazas de restaurante",
      "Plazas comerciales y constructoras",
    ],
    keywords: ["toldos comerciales Guadalajara", "toldos para restaurante"],
  },
  {
    id: "lonas-industriales",
    title: "Lonas y Malla Sombra",
    shortDesc: "Lonas a la medida, cortinas de lona con cristal y malla sombra.",
    fullDesc:
      "Fabricamos lonas impermeables a la medida para cubiertas y usos industriales, cortinas de lona con ventanas de cristal para cerrar terrazas, y malla sombra en seis colores.",
    icon: "factory",
    href: "/productos/lonas-industriales",
    specs: [
      "Lona impermeable a la medida",
      "Cortinas de lona con cristal",
      "Malla sombra en 6 colores",
    ],
    keywords: ["lonas a la medida Guadalajara", "malla sombra Guadalajara"],
  },
  {
    id: "proyectos-especiales",
    title: "Proyectos Especiales",
    shortDesc:
      "Arquitectura textil y toldos de gran formato diseñados para un solo lugar.",
    fullDesc:
      "Velarias, velas de sombra, pérgolas y toldos de gran formato. Como el de Plaza Paraíso en Tabachines: un toldo perimetral continuo de más de 100 metros lineales.",
    icon: "star",
    href: "/productos/proyectos-especiales",
    specs: [
      "Toldos perimetrales de gran formato",
      "Velarias y velas de sombra",
      "Pérgolas con cubierta",
    ],
    keywords: ["arquitectura textil Guadalajara", "toldos para eventos"],
  },
  {
    id: "toldos-retractiles",
    title: "Toldos Retráctiles",
    shortDesc:
      "Toldos enrollables de brazo invisible, punto recto o caída vertical, con manivela o motor.",
    fullDesc:
      "Toldos enrollables de brazo invisible o de punto recto, con tejadillo o cofre, accionados con manivela, interruptor o control remoto. Automatización Somfy con sensores de sol, viento y lluvia.",
    icon: "expand",
    href: "/productos/toldos-retractiles",
    specs: [
      "Brazo invisible y punto recto",
      "Manivela, motor o control remoto",
      "Sensores Somfy de sol, viento y lluvia",
    ],
    keywords: ["toldos retractiles Guadalajara", "toldo motorizado"],
  },
  {
    id: "persianas-roller-screen",
    title: "Persianas y Cortinas Exteriores",
    shortDesc: "Persianas roller para interior y cortinas screen para terrazas.",
    fullDesc:
      "Fabricamos persianas roller para interior en Screen, Sondblock y Sheer Elegance, y cortinas enrollables de exterior Dickson Sunworker para cerrar terrazas y fachadas.",
    icon: "layers",
    href: "/productos/persianas-roller-screen",
    specs: [
      "Screen, Sondblock y Sheer Elegance",
      "Cortinas exteriores Dickson Sunworker",
      "Manual o motorizada",
    ],
    keywords: ["persianas roller screen Guadalajara", "persiana screen"],
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento y Refacciones",
    shortDesc:
      "Mantenimiento, cambio de lona y refacciones para toldos y persianas.",
    fullDesc:
      "Revisamos, ajustamos y reparamos toldos de cualquier marca, cambiamos lonas y vendemos piezas y accesorios: brazos, soportes, mecanismos, motores y tornillería.",
    icon: "wrench",
    href: "/productos/mantenimiento",
    specs: [
      "Revisión y ajuste de mecanismos",
      "Cambio de lona",
      "Brazos, soportes y motores",
    ],
    keywords: ["mantenimiento toldos Guadalajara", "reparacion toldos"],
  },
];

// "Productos relacionados" shown at the end of each product page (by id)
export const RELATED_PRODUCTS: Record<string, string[]> = {
  "toldos-residenciales": ["toldos-retractiles", "persianas-roller-screen", "proyectos-especiales"],
  "sistemas-comerciales": ["toldos-retractiles", "proyectos-especiales", "lonas-industriales"],
  "lonas-industriales": ["sistemas-comerciales", "proyectos-especiales", "mantenimiento"],
  "proyectos-especiales": ["sistemas-comerciales", "toldos-residenciales", "lonas-industriales"],
  "toldos-retractiles": ["toldos-residenciales", "persianas-roller-screen", "mantenimiento"],
  "persianas-roller-screen": ["toldos-retractiles", "toldos-residenciales", "mantenimiento"],
  mantenimiento: ["toldos-retractiles", "toldos-residenciales", "sistemas-comerciales"],
};

// ── Brands ───────────────────────────────────────────────────────────────────
export const BRANDS = [
  {
    name: "Sattler",
    country: "Austria",
    description:
      "Telas de alta tecnología con acabado acrílico. Resistencia superior al sol, lluvia y hongos.",
    color: "#1A3A5C",
  },
  {
    name: "Sunbrella",
    country: "EE.UU.",
    description:
      "El tejido de referencia mundial para toldos premium. Fade-proof y fácil de limpiar.",
    color: "#2E5D4B",
  },
  {
    name: "Versaidag",
    country: "Alemania",
    description:
      "Membranas técnicas para cubiertas arquitectónicas de gran escala y proyectos especiales.",
    color: "#4A4A4A",
  },
  {
    name: "Llaza",
    country: "España",
    description:
      "Sistemas retráctiles de precisión con más de 50 años de ingeniería europea.",
    color: "#C41E3A",
  },
  {
    name: "Somfy",
    country: "Francia",
    description:
      "Automatización inteligente para toldos motorizados. Control por app, voz o sensor de viento.",
    color: "#E8501A",
  },
  {
    name: "Renolite",
    country: "México",
    description:
      "Perfiles y estructuras de aluminio de alta resistencia para todo tipo de aplicaciones.",
    color: "#6B6B6B",
  },
];

// ── Trust Stats ──────────────────────────────────────────────────────────────
export const TRUST_STATS = [
  { value: "15+", label: "Años de experiencia" },
  { value: "500+", label: "Proyectos realizados" },
  { value: "100%", label: "Fabricación propia" },
  { value: "6", label: "Marcas premium" },
];

// ── SEO Keywords ─────────────────────────────────────────────────────────────
export const SEO_KEYWORDS = [
  "toldos Guadalajara",
  "toldos residenciales Guadalajara",
  "toldos premium Guadalajara",
  "protección solar Guadalajara",
  "toldos retractiles Guadalajara",
  "lonas Guadalajara",
  "toldos comerciales Guadalajara",
  "arquitectura textil Guadalajara",
  "persianas roller screen Guadalajara",
  "toldos para terraza Guadalajara",
];
