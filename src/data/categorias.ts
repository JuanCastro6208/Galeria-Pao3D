import type { IconName } from '../lib/iconos';

export const categorias = [
  {
    id: 'personalizadas',
    nombre: 'Figuras personalizadas',
    descripcion: 'Envíanos una foto y la convertimos en figura o modelo a escala: personas, mascotas o ese carro con historia.',
    icono: 'camera',
    portada: 'nina-estrella-comparacion.jpeg',
  },
  {
    id: 'personajes',
    nombre: 'Anime, series y videojuegos',
    descripcion: 'Tus personajes favoritos, impresos con detalle y pintados a mano.',
    icono: 'game-controller',
    portada: 'this-is-fine.jpeg',
  },
  {
    id: 'decoracion',
    nombre: 'Decoración y flores',
    descripcion: 'Flores que no se marchitan, adornos y piezas para tu espacio.',
    icono: 'flower',
  },
  {
    id: 'utiles',
    nombre: 'Llaveros y útiles',
    descripcion: 'Llaveros, organizadores y detalles prácticos para regalar o usar a diario.',
    icono: 'key',
  },
] as const satisfies readonly {
  id: string;
  nombre: string;
  descripcion: string;
  icono: IconName;
  /** Foto opcional (de src/assets/figuras/) para las tarjetas grandes */
  portada?: string;
}[];

export type Categoria = (typeof categorias)[number];
export type CategoriaId = Categoria['id'];

export const categoriaPorId = (id: CategoriaId) => categorias.find((c) => c.id === id)!;
