import type { IconName } from '../lib/iconos';

// Textos de la sección "Lo que imprimimos" (tomados del catálogo de WhatsApp).
// `corto` es el nombre que se ve en los filtros de la galería y en el detalle de cada figura.
export const categorias = [
  {
    id: 'personalizadas',
    nombre: 'Tu idea hecha realidad',
    aclaracion: 'Diseños personalizados',
    corto: 'Personalizadas',
    lema: 'Si puedes imaginarlo o tienes una foto de referencia, nosotros lo materializamos para ti.',
    descripcion:
      'Este espacio está dedicado a proyectos completamente a medida: réplicas de vehículos reales, personajes favoritos, logotipos de marca, homenajes, recuerdos especiales o piezas temáticas que no encuentras en ninguna tienda comercial. Combinamos tecnología de impresión 3D de alta precisión con acabados, modelado y pintura 100% artesanal a mano.',
    icono: 'camera',
    portada: 'nina-estrella-comparacion.jpeg',
  },
  {
    id: 'personajes',
    nombre: 'Figuras de colección & Anime a escala',
    corto: 'Colección y anime',
    lema: 'Tus personajes y escenas favoritas cobran vida en tu vitrina con el nivel de detalle que merece una auténtica pieza de colección.',
    descripcion:
      'Nos especializamos en materializar personajes de anime, cómics y videojuegos, combinando modelado e impresión 3D de alta definición con pintura y acabados 100% artesanales a mano. Desde figuras a escala realista hasta versiones personalizadas con base temática.',
    icono: 'game-controller',
  },
  {
    id: 'vehiculos',
    nombre: 'Modelos a escala & vehículos clásicos personalizados',
    corto: 'Vehículos a escala',
    lema: 'La pasión por los motores llevada a una pieza de colección única.',
    descripcion:
      'Fabricamos réplicas a escala combinando modelado e impresión 3D de alta precisión con acabados y pintura 100% artesanal. Cuidamos cada detalle exterior para reflejar el carácter del modelo real.',
    icono: 'jeep',
  },
  {
    id: 'miniaturas',
    nombre: 'Línea miniaturas & Desk Buddies',
    aclaracion: 'Compañeros de escritorio',
    corto: 'Miniaturas',
    lema: 'El encanto de los grandes detalles en la palma de tu mano.',
    descripcion:
      'Una línea pensada para acompañarte en tu escritorio, vitrina o zona de trabajo, transformando tus personajes, temáticas y diseños favoritos en piezas compactas llenas de personalidad y presencia.',
    icono: 'flower-lotus',
  },
] as const satisfies readonly {
  id: string;
  nombre: string;
  /** Subtítulo opcional bajo el nombre */
  aclaracion?: string;
  corto: string;
  lema: string;
  descripcion: string;
  icono: IconName;
  /** Foto opcional (de src/assets/figuras/); se ve en la tarjeta alta */
  portada?: string;
}[];

export type Categoria = (typeof categorias)[number];
export type CategoriaId = Categoria['id'];

export const categoriaPorId = (id: CategoriaId) => categorias.find((c) => c.id === id)!;
