// ── Contact & WhatsApp ──────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = "5213318241919";
export const WHATSAPP_MESSAGE =
  "Hola, me gustaría solicitar una cotización para un proyecto de toldos.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ── Company Info ─────────────────────────────────────────────────────────────
export const SITE_URL = "https://www.toldosylonasgdl.com";
export const COMPANY_NAME = "Toldos y Lonas Guadalajara";
export const COMPANY_TAGLINE = "Arquitectura Exterior desde 2009";
export const FOUNDING_YEAR = "2009";
export const COMPANY_SLOGAN =
  "Diseñamos espacios exteriores para vivirlos todo el año";

// TODO: Fill in real contact data before deploy
export const CONTACT = {
  email: "contacto@toldosylonasgdl.com",
  phone: "",
  address: "Guadalajara, Jalisco, México",
};

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
  { label: "Servicios", href: "/servicios" },
  { label: "Galería", href: "/galeria" },
  { label: "Materiales", href: "/materiales" },
  { label: "Contacto", href: "/contactenos" },
];

// ── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: "toldos-residenciales",
    title: "Toldos Residenciales",
    shortDesc:
      "Diseños exclusivos para hogares premium con elegancia y durabilidad.",
    fullDesc:
      "Transformamos terrazas, jardines y fachadas residenciales con toldos a la medida. Cada proyecto combina funcionalidad solar con diseño arquitectónico para elevar el valor de tu hogar.",
    icon: "home",
    href: "/servicios#toldos-residenciales",
    keywords: ["toldos residenciales Guadalajara", "toldos para casa"],
  },
  {
    id: "sistemas-comerciales",
    title: "Sistemas Comerciales",
    shortDesc:
      "Soluciones para restaurantes, hoteles y negocios que proyectan imagen.",
    fullDesc:
      "Habilitamos terrazas, exteriores y fachadas comerciales con sistemas de cubierta que atraen clientes y extienden los espacios operativos durante todo el año.",
    icon: "building",
    href: "/servicios#sistemas-comerciales",
    keywords: ["toldos comerciales Guadalajara", "toldos para restaurante"],
  },
  {
    id: "lonas-industriales",
    title: "Lonas Industriales",
    shortDesc:
      "Cubiertas de alta resistencia para proyectos de gran escala.",
    fullDesc:
      "Fabricamos lonas técnicas para almacenes, bodegas y proyectos industriales. Materiales de primera calidad con resistencia UV, agua y viento.",
    icon: "factory",
    href: "/servicios#lonas-industriales",
    keywords: ["lonas industriales Guadalajara", "lonas para bodega"],
  },
  {
    id: "proyectos-especiales",
    title: "Proyectos Especiales",
    shortDesc:
      "Arquitectura textil a la medida para espacios únicos y eventos.",
    fullDesc:
      "Desde pérgolas con vela de sombra hasta instalaciones para eventos, diseñamos soluciones únicas que integran estética y funcionalidad en cualquier escala.",
    icon: "star",
    href: "/servicios#proyectos-especiales",
    keywords: ["arquitectura textil Guadalajara", "toldos para eventos"],
  },
  {
    id: "toldos-retractiles",
    title: "Toldos Retráctiles",
    shortDesc:
      "Sistemas motorizados o manuales que se adaptan a cualquier condición.",
    fullDesc:
      "Instalamos sistemas Llaza y otros fabricantes europeos de primera línea. Disponibles con automatización Somfy para control desde tu smartphone.",
    icon: "expand",
    href: "/servicios/toldos-retractiles",
    keywords: ["toldos retractiles Guadalajara", "toldo motorizado"],
  },
  {
    id: "persianas-roller-screen",
    title: "Persianas Roller Screen",
    shortDesc:
      "Control solar interior-exterior con visibilidad y privacidad.",
    fullDesc:
      "Las persianas tipo Roller Screen ofrecen protección solar sin perder la vista al exterior. Disponibles en Screen, Sondblock y Sheer Elegance según el nivel de oscurecimiento deseado.",
    icon: "layers",
    href: "/servicios/persianas-roller-screen",
    keywords: ["persianas roller screen Guadalajara", "persiana screen"],
  },
  {
    id: "mantenimiento",
    title: "Servicio de Mantenimiento",
    shortDesc:
      "Extendemos la vida útil de tu inversión con mantenimiento preventivo.",
    fullDesc:
      "Ofrecemos revisión, limpieza, ajuste de mecanismos y reposición de telas. Mantenemos tu toldo en perfectas condiciones para que dure muchos años.",
    icon: "wrench",
    href: "/servicios#mantenimiento",
    keywords: ["mantenimiento toldos Guadalajara", "reparacion toldos"],
  },
];

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
