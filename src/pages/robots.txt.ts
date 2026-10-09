import type { APIRoute } from 'astro';
import { urlAbsoluta } from '../config/sitio';

// Permite que los buscadores lean todo el sitio y les indica dónde está el sitemap.
export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${urlAbsoluta('/sitemap.xml')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
