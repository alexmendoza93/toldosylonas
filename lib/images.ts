// Temporary Unsplash photography.
// To use real client photos: drop them in public/images/ and replace the URL
// with asset("/images/hero.jpg"). asset() adds the GitHub Pages basePath.
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const u = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const IMAGES = {
  hero: u("1600585154340-be6161a56a0c", 2400),
  manifesto: u("1571003123894-1f0594d2b5d9"),
  cta: u("1600585153490-76fb20a32601"),
  pageHero: {
    nosotros: u("1600585153490-76fb20a32601"),
    servicios: u("1582268611958-ebfd161ef9cf"),
    retractiles: u("1584132967334-10e028bd69f7"),
    roller: u("1616594039964-ae9021a400a0"),
    materiales: u("1618221195710-dd6b41faaea6"),
    galeria: u("1551882547-ff40c63fe5fa"),
    blog: u("1600573472550-8090b5e0745e"),
    contacto: u("1566073771259-6a8506099945"),
  },
  services: {
    "toldos-residenciales": u("1582268611958-ebfd161ef9cf", 900),
    "sistemas-comerciales": u("1551882547-ff40c63fe5fa", 900),
    "lonas-industriales": u("1600566753190-17f0baa2a6c3", 900),
    "proyectos-especiales": u("1596178065887-1198b6148b2b", 900),
    "toldos-retractiles": u("1604014237800-1c9102c219da", 900),
    "persianas-roller-screen": u("1616594039964-ae9021a400a0", 900),
    mantenimiento: u("1600585152915-d208bec867a1", 900),
  } as Record<string, string>,
  gallery: [
    u("1582268611958-ebfd161ef9cf", 1600),
    u("1551882547-ff40c63fe5fa", 1600),
    u("1604014237800-1c9102c219da", 1600),
    u("1566073771259-6a8506099945", 1600),
    u("1600566753190-17f0baa2a6c3", 1600),
    u("1571003123894-1f0594d2b5d9", 1600),
  ],
};
