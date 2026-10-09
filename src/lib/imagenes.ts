import type { ImageMetadata } from 'astro';

// Carga todas las fotos de src/assets/figuras/ para que Astro las optimice.
const archivos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/figuras/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

/** Devuelve la imagen asociada a un nombre de archivo, o undefined si no existe. */
export function imagenDeFigura(nombre?: string): ImageMetadata | undefined {
  if (!nombre) return undefined;
  const imagen = archivos[`../assets/figuras/${nombre}`]?.default;
  if (!imagen) {
    console.warn(`[galería] No se encontró "${nombre}" en src/assets/figuras/. Se mostrará un espacio vacío.`);
  }
  return imagen;
}
