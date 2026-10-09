import type { APIRoute } from 'astro';
import { nombreCompleto, sitio } from '../config/sitio';

// Nombre, ícono y colores cuando alguien agrega la página a la pantalla de inicio del celular.
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      name: nombreCompleto,
      short_name: nombreCompleto,
      description: sitio.descripcion,
      lang: 'es-CO',
      start_url: '/',
      display: 'standalone',
      background_color: '#0d0b0c',
      theme_color: '#0d0b0c',
      icons: [
        { src: '/favicon.png', sizes: '64x64', type: 'image/png' },
        { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      ],
    }),
    { headers: { 'Content-Type': 'application/manifest+json' } },
  );
