// Hero/ambient photography is still temporary Unsplash; product and project
// photos are the client's real installations (public/images/).
// To swap a photo: drop it in public/images/ and reference it with
// asset("/images/hero.jpg"). asset() adds the GitHub Pages basePath.
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

type Photo = { src: string; width: number; height: number };
const photo = (path: string, width: number, height: number): Photo => ({
  src: asset(path),
  width,
  height,
});

const u = (id: string, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const IMAGES = {
  hero: u("1600585154340-be6161a56a0c", 2400),
  manifesto: u("1571003123894-1f0594d2b5d9"),
  cta: u("1600585153490-76fb20a32601"),
  pageHero: {
    nosotros: u("1600585153490-76fb20a32601"),
    productos: u("1582268611958-ebfd161ef9cf"),
    retractiles: u("1584132967334-10e028bd69f7"),
    roller: u("1616594039964-ae9021a400a0"),
    residenciales: u("1582268611958-ebfd161ef9cf"),
    comerciales: u("1551882547-ff40c63fe5fa"),
    industriales: u("1600566753190-17f0baa2a6c3"),
    especiales: u("1596178065887-1198b6148b2b"),
    mantenimiento: u("1600585152915-d208bec867a1"),
    materiales: u("1618221195710-dd6b41faaea6"),
    galeria: u("1551882547-ff40c63fe5fa"),
    blog: u("1600573472550-8090b5e0745e"),
    contacto: u("1566073771259-6a8506099945"),
  },
  // Real installation photos from the client's Facebook page, served from
  // public/images/productos/<id>/. The first one is also the product card.
  productGallery: {
    "toldos-residenciales": [
      photo("/images/productos/toldos-residenciales/01.jpg", 1280, 845),
      photo("/images/productos/toldos-residenciales/02.jpg", 960, 720),
      photo("/images/productos/toldos-residenciales/03.jpg", 960, 720),
      photo("/images/productos/toldos-residenciales/04.jpg", 960, 720),
      photo("/images/productos/toldos-residenciales/05.jpg", 960, 720),
      photo("/images/productos/toldos-residenciales/06.jpg", 1440, 1267),
    ],
    "sistemas-comerciales": [
      photo("/images/productos/sistemas-comerciales/01.jpg", 1600, 1056),
      photo("/images/productos/sistemas-comerciales/02.jpg", 1600, 1056),
      photo("/images/productos/sistemas-comerciales/03.jpg", 960, 720),
      photo("/images/productos/sistemas-comerciales/04.jpg", 960, 720),
      photo("/images/productos/sistemas-comerciales/05.jpg", 960, 720),
      photo("/images/productos/sistemas-comerciales/06.jpg", 1600, 1200),
    ],
    "lonas-industriales": [
      photo("/images/productos/lonas-industriales/01.jpg", 960, 720),
      photo("/images/productos/lonas-industriales/02.jpg", 960, 720),
      photo("/images/productos/lonas-industriales/03.jpg", 960, 720),
      photo("/images/productos/lonas-industriales/04.jpg", 960, 720),
      photo("/images/productos/lonas-industriales/05.jpg", 960, 720),
      photo("/images/productos/lonas-industriales/06.jpg", 960, 720),
    ],
    "proyectos-especiales": [
      photo("/images/productos/proyectos-especiales/01.jpg", 640, 480),
      photo("/images/productos/proyectos-especiales/02.jpg", 640, 480),
      photo("/images/productos/proyectos-especiales/03.jpg", 640, 480),
      photo("/images/productos/proyectos-especiales/04.jpg", 960, 634),
      photo("/images/productos/proyectos-especiales/05.jpg", 640, 480),
      photo("/images/productos/proyectos-especiales/06.jpg", 960, 720),
    ],
    "toldos-retractiles": [
      photo("/images/productos/toldos-retractiles/01.jpg", 1440, 1440),
      photo("/images/productos/toldos-retractiles/02.jpg", 1368, 1368),
      photo("/images/productos/toldos-retractiles/03.jpg", 1600, 1056),
      photo("/images/productos/toldos-retractiles/04.jpg", 1440, 1440),
      photo("/images/productos/toldos-retractiles/05.jpg", 960, 720),
      photo("/images/productos/toldos-retractiles/06.jpg", 960, 720),
    ],
    "persianas-roller-screen": [
      photo("/images/productos/persianas-roller-screen/01.jpg", 960, 720),
      photo("/images/productos/persianas-roller-screen/02.jpg", 1368, 1368),
      photo("/images/productos/persianas-roller-screen/03.jpg", 960, 720),
      photo("/images/productos/persianas-roller-screen/04.jpg", 640, 480),
      photo("/images/productos/persianas-roller-screen/05.jpg", 640, 480),
      photo("/images/productos/persianas-roller-screen/06.jpg", 960, 720),
    ],
    mantenimiento: [
      photo("/images/productos/mantenimiento/01.jpg", 720, 960),
      photo("/images/productos/mantenimiento/02.jpg", 720, 960),
      photo("/images/productos/mantenimiento/03.jpg", 960, 720),
      photo("/images/productos/mantenimiento/04.jpg", 960, 720),
      photo("/images/productos/mantenimiento/05.jpg", 720, 960),
      photo("/images/productos/mantenimiento/06.jpg", 960, 634),
    ],
  } as Record<string, Photo[]>,
  // Project portfolio (/galeria), real photos in public/images/proyectos/
  projects: [
    photo("/images/proyectos/01.jpg", 960, 720),
    photo("/images/proyectos/02.jpg", 1280, 845),
    photo("/images/proyectos/03.jpg", 960, 720),
    photo("/images/proyectos/04.jpg", 1600, 1056),
    photo("/images/proyectos/05.jpg", 960, 720),
    photo("/images/proyectos/06.jpg", 1600, 1200),
    photo("/images/proyectos/07.jpg", 1600, 1056),
    photo("/images/proyectos/08.jpg", 960, 720),
    photo("/images/proyectos/09.jpg", 960, 720),
    photo("/images/proyectos/10.jpg", 960, 720),
    photo("/images/proyectos/11.jpg", 640, 480),
    photo("/images/proyectos/12.jpg", 960, 634),
    photo("/images/proyectos/13.jpg", 1440, 1440),
    photo("/images/proyectos/14.jpg", 960, 720),
    photo("/images/proyectos/15.jpg", 1600, 1200),
  ],
};

// Card photo for each product: the first photo of its gallery.
export const productImage = (id: string) => IMAGES.productGallery[id]?.[0]?.src;

// Pairs a product's gallery photos with their alt texts.
export const galleryFor = (id: string, alts: string[]) =>
  alts.map((alt, i) => ({ alt, ...IMAGES.productGallery[id][i] }));
