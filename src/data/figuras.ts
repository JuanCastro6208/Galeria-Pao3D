import { nombreCompleto } from '../config/sitio';
import type { CategoriaId } from './categorias';

// ─────────────────────────────────────────────────────────────
// GALERÍA DE FIGURAS
//
// Para añadir una figura:
//   1. Copia la foto en  src/assets/figuras/   (jpg, jpeg, png, webp o avif)
//   2. Agrega un bloque { ... } a la lista de abajo con el nombre del archivo
//      en `imagen`. El orden de la lista es el orden en la página.
//
// Categorías válidas: 'personalizadas' | 'personajes' | 'vehiculos' | 'miniaturas'
// `masFotos` (opcional): otras fotos de la misma figura; se ven en el visor.
// `descripcion` se lee al abrir la foto; usa \n\n para separar párrafos.
// Todas las tarjetas tienen el mismo tamaño para que la galería quede alineada.
// La foto llena la tarjeta; en las horizontales se recortan los lados (en el visor se ven completas).
// `encuadre` (opcional): qué parte de la foto mostrar si se recorta, ej: 'top', '40% center'.
// `destacada: true` pone la foto en el carrusel de la portada, en el orden de la lista
//   (la primera es la que se ve al abrir la página; recomendado entre 4 y 7).
// ─────────────────────────────────────────────────────────────

export interface Figura {
  titulo: string;
  categoria: CategoriaId;
  /** Foto principal: nombre del archivo dentro de src/assets/figuras/ */
  imagen?: string;
  /** Fotos adicionales de la misma figura */
  masFotos?: string[];
  descripcion?: string;
  /** Ej: 'PLA', 'Resina', 'Pintada a mano' */
  material?: string;
  /** Tamaño aproximado, ej: '18 cm' */
  tamano?: string;
  /** Parte de la foto que se ve si se recorta (valor de object-position). Por defecto, el centro. */
  encuadre?: string;
  destacada?: boolean;
}

/** Texto alternativo de la foto: lo leen Google Imágenes y los lectores de pantalla. */
export const altDeFigura = (f: Figura) =>
  `${f.titulo}, pieza impresa en 3D${f.material ? ` (${f.material.toLowerCase()})` : ''} por ${nombreCompleto}`;

export const figuras: Figura[] = [
  {
    titulo: 'Konan de Naruto Shippuden',
    categoria: 'personajes',
    imagen: 'konan-frente.jpeg',
    masFotos: ['konan-lateral.jpeg', 'konan-comparacion.jpeg'],
    descripcion:
      'Un homenaje a Konan, la flor de papel y el pilar que protegió los ideales de Akatsuki hasta el final. Lograr que sus alas tuvieran esa textura de origami real y que pareciera flotar sobre su base fue un reto que valió cada segundo en el taller.',
    material: 'Pintada a mano',
    destacada: true,
  },
  {
    titulo: 'Lorgar Aurelian de Warhammer',
    categoria: 'personajes',
    imagen: 'lorgar-aurelian.jpeg',
    descripcion: 'Primarca de los Word Bearers con su crozius Illuminarum y su libro. Recién impreso, listo para pintar.',
    destacada: true,
  },
  {
    titulo: 'Pequeña Soñadora (Chibi Custom)',
    categoria: 'personalizadas',
    imagen: 'nina-estrella.jpeg',
    masFotos: ['nina-estrella-comparacion.jpeg'],
    descripcion: 'Figura chibi hecha a partir de una foto, con su pijama de corazones.',
    material: 'Pintada a mano',
    destacada: true,
  },
  {
    titulo: 'Meme "This is Fine"',
    categoria: 'personajes',
    imagen: 'this-is-fine.jpeg',
    descripcion: 'Diorama del meme de KC Green: Question Hound con su taza de café entre las llamas.',
    destacada: true,
  },
  {
    titulo: 'Réplica a Escala: Campero Clásico',
    categoria: 'vehiculos',
    imagen: 'campero-clasico-frente.jpeg',
    masFotos: ['campero-clasico.jpeg', 'campero-clasico-comparacion.jpeg'],
    descripcion: 'Réplica a escala del campero familiar, hecha a partir de una foto antigua.',
  },
  {
    titulo: 'Subaru Legacy del 93',
    categoria: 'vehiculos',
    imagen: 'subaru-legacy-93-frente.jpeg',
    encuadre: '45% center',
    masFotos: ['subaru-legacy-93-trasera.jpeg'],
    descripcion:
      'Hay carros que no son solo un medio de transporte; son parte de la familia, viajes inolvidables y momentos que marcaron época. 🚗❤️✨',
    material: 'Pintada a mano',
  },
  {
    titulo: 'Coach Johanna',
    categoria: 'personalizadas',
    imagen: 'coach-johanna.jpeg',
    masFotos: ['coach-johanna-comparacion.jpeg'],
    descripcion: 'Figura personalizada con su nombre y el escudo de su equipo en la base.',
    material: 'Pintada a mano',
  },
  {
    titulo: 'Garfield – Estilo Kawaii / Chibi',
    categoria: 'miniaturas',
    imagen: 'garfield-kawaii.jpeg',
    masFotos: ['garfield-kawaii-lateral.jpeg'],
    descripcion: 'Versión tierna de Garfield, el gato naranja más perezoso de las caricaturas.',
    destacada: true,
  },
  {
    titulo: 'Dúo Botánico – Orquídea y Bonsái Sakura',
    categoria: 'miniaturas',
    imagen: 'orquidea-y-bonsai.jpeg',
    encuadre: '38% center',
    descripcion:
      'Les presentamos nuestra línea de Miniaturas Botánicas: una pequeña orquídea morada y un bonsái de cerezo japonés (Sakura) que caben en la palma de tu mano.',
  },
  {
    titulo: 'Figura Chibi: Tu estilo en miniatura',
    categoria: 'personalizadas',
    imagen: 'nina-gafas.jpeg',
    masFotos: ['nina-gafas-comparacion.jpeg'],
    descripcion: 'Figura chibi con sus gafas, su ropa y sus detalles favoritos.',
    material: 'Pintada a mano',
  },
  {
    titulo: 'Jax (Maid) – Digital Circus',
    categoria: 'miniaturas',
    imagen: 'jax-maid.jpeg',
    masFotos: ['jax-maid-escritorio.jpeg'],
    descripcion:
      'Directo del caos de The Amazing Digital Circus, trajimos a la vida a este conejo morado en su versión más resignada y viral: ¡con traje de maid! 🐰🧹✨',
    material: 'Pintada a mano',
    destacada: true,
  },
  {
    titulo: 'Set de Tripulantes – Among Us',
    categoria: 'miniaturas',
    imagen: 'among-us.jpeg',
    encuadre: '42% center',
    descripcion:
      'Reportaron un cuerpo en la cafetería... digo, ¡en el escritorio! 😂✨\n\nDirecto del mapa de The Skeld en tu setup gamer, trajimos a la vida a esta tripulación de Among Us. ¿Quién creen que es el impostor? 🤔 Nosotros sospechamos del Rojo (siempre es el Rojo).',
  },
  {
    titulo: 'Figura Van y Pines/Llaveros BT21 (BTS)',
    categoria: 'miniaturas',
    imagen: 'bts-van-llaveros.jpeg',
    encuadre: '43% center',
    descripcion:
      'La fiebre por BTS se siente en la ciudad y en el taller no podíamos quedarnos por fuera. Diseñamos y fabricamos esta colección inspirada en el universo de BT21:\n\n🤖 Figura Coleccionable de Van: El robot protector que nos representa a todos, con su diseño bicolor característico y un acabado suave al tacto.\n\n🔑 Llaveros de Colección: Lleva a tu bias contigo a todas partes con Chimmy, Shooky, Tata, RJ y Van. Ligeros, resistentes y listos para lucir en tu bolso, llaves o lanyard.',
  },
  {
    titulo: 'Organizador de pilas',
    categoria: 'miniaturas',
    imagen: 'organizador-pilas.jpeg',
    descripcion: 'Canastas en miniatura para guardar pilas AA.',
  },
];
