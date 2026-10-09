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
// Categorías válidas: 'personalizadas' | 'personajes' | 'decoracion' | 'utiles'
// `masFotos` (opcional): otras fotos de la misma figura; se ven en el visor.
// Todas las tarjetas tienen el mismo tamaño para que la galería quede alineada.
// Las fotos verticales llenan la tarjeta; las horizontales se ven completas.
// `encuadre` (opcional): qué parte de la foto mostrar si se recorta, ej: 'top', 'center 30%'.
// `destacada: true` usa esa foto en la portada (solo la primera cuenta).
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
    descripcion: 'Con su capa de Akatsuki y alas de papel, pintada a mano con acabado brillante.',
    material: 'Pintada a mano',
    destacada: true,
  },
  {
    titulo: 'Lorgar Aurelian de Warhammer',
    categoria: 'personajes',
    imagen: 'lorgar-aurelian.jpeg',
    descripcion: 'Primarca de los Word Bearers con su crozius Illuminarum y su libro. Recién impreso, listo para pintar.',
  },
  {
    titulo: 'Niña con estrella',
    categoria: 'personalizadas',
    imagen: 'nina-estrella.jpeg',
    masFotos: ['nina-estrella-comparacion.jpeg'],
    descripcion: 'Figura chibi hecha a partir de una foto, con su pijama de corazones.',
    material: 'Pintada a mano',
  },
  {
    titulo: 'This is fine',
    categoria: 'personajes',
    imagen: 'this-is-fine.jpeg',
    descripcion: 'Diorama del meme de KC Green: Question Hound con su taza de café entre las llamas.',
  },
  {
    titulo: 'Campero clásico a escala',
    categoria: 'personalizadas',
    imagen: 'campero-clasico.jpeg',
    masFotos: ['campero-clasico-comparacion.jpeg'],
    descripcion: 'Réplica a escala del campero familiar, hecha a partir de una foto antigua.',
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
    titulo: 'Garfield kawaii',
    categoria: 'personajes',
    imagen: 'garfield-kawaii.jpeg',
    masFotos: ['garfield-kawaii-lateral.jpeg'],
    descripcion: 'Versión tierna de Garfield, el gato naranja más perezoso de las caricaturas.',
  },
  {
    titulo: 'Orquídea y bonsái',
    categoria: 'decoracion',
    imagen: 'orquidea-y-bonsai.jpeg',
    descripcion: 'Flores impresas y pintadas que decoran sin necesidad de riego.',
  },
  {
    titulo: 'Niña con gafas',
    categoria: 'personalizadas',
    imagen: 'nina-gafas.jpeg',
    masFotos: ['nina-gafas-comparacion.jpeg'],
    descripcion: 'Figura chibi con sus gafas, su ropa y sus detalles favoritos.',
    material: 'Pintada a mano',
  },
  {
    titulo: 'Jax en traje de maid',
    categoria: 'personajes',
    imagen: 'jax-maid.jpeg',
    masFotos: ['jax-maid-escritorio.jpeg'],
    descripcion: 'Jax de The Amazing Digital Circus en versión chibi, pintado a mano.',
    material: 'Pintada a mano',
  },
  {
    titulo: 'Tripulantes de Among Us',
    categoria: 'personajes',
    imagen: 'among-us.jpeg',
    descripcion: 'Set de tripulantes de colores para el escritorio.',
  },
  {
    titulo: 'Van y llaveros de BTS',
    categoria: 'utiles',
    imagen: 'bts-van-llaveros.jpeg',
    descripcion: 'Figura de Van y llaveros de los personajes de BTS.',
  },
  {
    titulo: 'Organizador de pilas',
    categoria: 'utiles',
    imagen: 'organizador-pilas.jpeg',
    descripcion: 'Canastas en miniatura para guardar pilas AA.',
  },
];
