import type { APIRoute } from 'astro';
import { urlAbsoluta } from '../config/sitio';

// Lista de páginas para Google. Si agregas páginas nuevas, súmalas aquí.
const paginas = ['/'];

export const GET: APIRoute = () => {
  const hoy = new Date().toISOString().slice(0, 10);
  const urls = paginas
    .map((ruta) => `  <url>\n    <loc>${urlAbsoluta(ruta)}</loc>\n    <lastmod>${hoy}</lastmod>\n  </url>`)
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
