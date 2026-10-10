// ─────────────────────────────────────────────────────────────
// Datos generales del emprendimiento.
// Cambia aquí el nombre, los textos y los contactos: se actualizan
// automáticamente en toda la página.
// ─────────────────────────────────────────────────────────────

export const sitio = {
  /** Nombre principal (se muestra junto al logo). */
  nombre: 'Galería Pao',
  /** Sufijo que acompaña al nombre en color de acento. */
  sufijo: '3D',
  /** Eslogan de la marca. */
  eslogan: 'Arte en Impresión 3D & Pintura Artesanal',
  /** Frase secundaria de la marca. */
  frase: 'Damos vida a tus personajes y proyectos favoritos',
  /** Título de la pestaña y de Google (ideal: menos de 60 caracteres). */
  tituloSeo: 'Galería Pao3D | Figuras en impresión 3D pintadas a mano',
  /** Descripción para Google y al compartir el enlace (ideal: 120 a 160 caracteres). */
  descripcion:
    'Figuras en impresión 3D pintadas a mano en Colombia: personajes de anime y videojuegos, réplicas personalizadas desde tu foto, decoración y regalos.',
  /**
   * Dirección pública del sitio, sin barra al final. CÁMBIALA al publicar:
   * de ella salen el enlace canónico, el sitemap y la imagen al compartir.
   */
  url: 'https://galeriapao3d.com',

  /** País (código de 2 letras) y ciudad; ayudan a aparecer en búsquedas locales. */
  pais: 'CO',
  /** Ciudad donde trabajas (opcional). Déjala vacía si prefieres no mostrarla. */
  ciudad: '',

  /** Técnicas y servicios (le dicen a Google qué hace el negocio). */
  servicios: [
    'Impresión 3D',
    'Post-procesado',
    'Aerografía',
    'Pintura a mano',
    'Figuras chibi y anime',
    'Modelos a escala',
    'Proyectos personalizados',
  ],

  whatsapp: {
    /** Número completo con código de país, solo dígitos (ej: 573001234567). */
    numero: '573227505403',
    /** Mensaje que aparece escrito al abrir el chat. */
    mensaje: 'Hola Galería Pao3D, quiero cotizar una figura.',
  },

  instagram: {
    /** Usuario sin la @. */
    usuario: 'GaleriaPao3D',
  },

  facebook: {
    /** Nombre de la página (lo que va después de facebook.com/). */
    pagina: 'GaleriaPao3D',
  },

  correo: 'cotizaciones@galeriapao3d.com',

  /**
   * Video "Así trabajamos" (opcional). Aparece en la sección Proceso solo si
   * llenas `youtube` o `archivo`. Ver README → "Agregar el video del proceso".
   */
  video: {
    /** Enlace de YouTube (normal o Shorts), ej: 'https://youtu.be/abc123'. */
    youtube: '',
    /**
     * true si YouTube no deja reproducirlo dentro de la página (por ejemplo, por
     * derechos de la música): al tocarlo se abre en YouTube, en una pestaña nueva.
     */
    soloEnYouTube: false,
    /** O un archivo propio dentro de public/videos/, ej: 'proceso.mp4'. */
    archivo: '',
    /** Imagen de portada dentro de public/videos/ (opcional; con YouTube se usa la suya). */
    portada: '',
    /** true si el video se grabó con el celular en vertical. */
    vertical: false,
    titulo: 'Así damos vida a una figura',
    /** Texto bajo el título (opcional). Déjalo vacío para mostrar solo el título. */
    descripcion: '',
    /** Fecha en que se subió el video (AAAA-MM-DD); Google la pide para mostrarlo. */
    fecha: '',
  },
} as const;

export const nombreCompleto = `${sitio.nombre}${sitio.sufijo}`;

export const enlaceWhatsApp = (mensaje: string = sitio.whatsapp.mensaje) =>
  `https://wa.me/${sitio.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;

export const enlaceInstagram = `https://instagram.com/${sitio.instagram.usuario}`;

export const enlaceFacebook = `https://facebook.com/${sitio.facebook.pagina}`;

export const enlaceCorreo = `mailto:${sitio.correo}?subject=${encodeURIComponent('Cotización Galería Pao3D')}`;

/** Convierte una ruta del sitio en dirección completa (para SEO). */
export const urlAbsoluta = (ruta: string) => new URL(ruta, sitio.url).href;

/** true mientras `url` siga siendo la dirección de ejemplo. */
export const urlPendiente = sitio.url.includes('.example');

/** Extrae el código de un enlace de YouTube (youtu.be, watch?v=, shorts/ o embed/). */
export function idYouTube(enlace: string): string | undefined {
  const m = enlace.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return m?.[1];
}
