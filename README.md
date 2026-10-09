# Galería Pao3D · Página informativa

Página web de una sola página de **Galería Pao3D**: arte en impresión 3D y pintura artesanal.
Hecha con [Astro](https://astro.build) y CSS propio. Tiene dos estilos que el visitante
puede cambiar con el botón del menú: **Tecnológico** (oscuro, por defecto) y **Juguetón** (colorido).

Se adapta a celulares, tablets, computadores y pantallas grandes (2K, 4K y TV).

## Requisitos

- [Node.js](https://nodejs.org) 22.12 o superior

## Comandos

| Comando           | Qué hace                                                      |
| ----------------- | ------------------------------------------------------------- |
| `npm install`     | Instala las dependencias (solo la primera vez)                |
| `npm run dev`     | Abre la página en modo desarrollo: http://localhost:4321      |
| `npm run build`   | Genera la versión final optimizada en la carpeta `dist/`      |
| `npm run preview` | Muestra localmente la versión final ya generada               |

## Añadir fotos de figuras

1. Copia las fotos en `src/assets/figuras/` (jpg, png, webp o avif). No hace falta reducirlas:
   se optimizan solas al ejecutar `npm run build`. Usa nombres descriptivos
   (ej: `konan-naruto.jpg`, no `IMG_2034.jpg`): Google también los lee.
2. Abre `src/data/figuras.ts` y agrega (o edita) un bloque por figura:

   ```ts
   {
     titulo: 'Dragón rojo',
     categoria: 'personajes',        // personalizadas | personajes | decoracion | utiles
     imagen: 'dragon-rojo.jpg',      // nombre exacto del archivo
     masFotos: ['dragon-lado.jpg'],  // opcional: más fotos de la misma figura
     descripcion: 'Pintado a mano con detalles metálicos.',
     material: 'Pintada a mano',     // opcional
     tamano: '22 cm',                // opcional
     encuadre: 'top',                // opcional: qué parte de la foto mostrar si se recorta
     destacada: true,                // opcional: la muestra en la portada
   },
   ```

- El orden de la lista es el orden en la galería.
- Todas las tarjetas tienen el mismo tamaño para que las filas queden alineadas. Las fotos
  verticales llenan la tarjeta; las horizontales se ven completas sobre un fondo desenfocado.
- Si a una foto vertical se le corta la cabeza o la base, usa `encuadre`: `'top'` (arriba),
  `'bottom'` (abajo) o algo como `'center 30%'`.
- `masFotos` se ven en el visor al tocar la foto (por ejemplo, la comparación "foto real / figura").
- Si una figura no tiene foto, aparece un espacio con el texto "Foto próximamente".

## Agregar el video del proceso

En la sección **"Cómo encargar tu figura"** hay un espacio para un video de cómo se trabaja.
Permanece oculto hasta que configures uno. Todo se hace en `src/config/sitio.ts`, dentro de `video`.

### Opción A: YouTube (recomendada)

Es la mejor opción: el video no pesa en tu página, se ve bien en cualquier celular y además
aparece en las búsquedas de YouTube y Google.

1. Sube el video a YouTube (sirve como video normal o como **Short** si lo grabaste vertical).
   Puede ser "Público" o "No listado".
2. Copia el enlace del video (botón **Compartir**).
3. Pégalo en `src/config/sitio.ts`:

   ```ts
   video: {
     youtube: 'https://youtu.be/AbCdEfGhIjK',   // ← tu enlace
     archivo: '',
     portada: '',
     vertical: true,          // true si lo grabaste con el celular en vertical; false si es horizontal
     titulo: 'Así damos vida a una figura',
     descripcion: 'Del modelo 3D a la pintura a mano: el proceso completo de una pieza en el taller.',
     fecha: '2026-10-15',     // fecha en que lo subiste (AAAA-MM-DD)
   },
   ```

La página muestra la portada del video con un botón rosado de reproducir. YouTube solo se
carga cuando alguien toca ese botón, así la página sigue abriendo rápido.

### Opción B: archivo propio

1. Crea la carpeta `public/videos/` y copia ahí el video en **.mp4**.
   Recomendado: menos de 15 MB y máximo 1080p (puedes comprimirlo gratis con
   [HandBrake](https://handbrake.fr), preset "Fast 1080p30").
2. Opcional: copia también una imagen de portada (`.jpg` o `.webp`) en la misma carpeta.
3. En `src/config/sitio.ts`:

   ```ts
   video: {
     youtube: '',
     archivo: 'proceso.mp4',          // ← nombre de tu video
     portada: 'proceso-portada.jpg',  // ← nombre de la imagen (opcional)
     vertical: true,
     titulo: 'Así damos vida a una figura',
     descripcion: 'Del modelo 3D a la pintura a mano.',
     fecha: '2026-10-15',
   },
   ```

Con cualquiera de las dos opciones puedes cambiar `titulo` y `descripcion`. Si llenas
`fecha` (y hay portada), Google recibe los datos del video para mostrarlo en sus resultados.

## Cambiar nombre, contacto y textos

Todo está en `src/config/sitio.ts`:

- `nombre` y `sufijo`: el nombre que aparece junto al logo.
- `eslogan` y `frase`: textos de la marca.
- `tituloSeo` y `descripcion`: lo que aparece en Google y al compartir el enlace (ver SEO).
- `whatsapp.numero`: número con código de país, solo dígitos (ej: `573001234567`).
- `whatsapp.mensaje`: texto que aparece escrito al abrir el chat.
- `instagram.usuario`: usuario sin la `@`.
- `facebook.pagina` y `correo`: los otros canales de contacto.
- `servicios`: las técnicas del taller (Google las usa para entender qué haces).
- `url`: dirección de la página cuando esté publicada (**obligatorio cambiarla**, ver SEO).

Los datos de contacto **no se muestran escritos** en la página: solo aparecen los botones con
el logo de cada red, que llevan directo al chat o al perfil.

Las categorías (nombres, descripciones y la foto de las dos tarjetas grandes) están en
`src/data/categorias.ts`.

## SEO: aparecer bien en Google y al compartir

La página ya trae lo necesario para buscadores y redes:

- Título y descripción pensados para Google (`tituloSeo` y `descripcion` en `sitio.ts`).
- Vista previa con imagen al compartir el enlace por WhatsApp, Facebook, Instagram o X
  (`public/og.jpg`, 1200 × 630 px).
- Datos estructurados (schema.org) que le dicen a Google el nombre del negocio, el logo,
  las redes sociales, los servicios y el país. Por decisión de la marca no incluyen el
  teléfono ni el correo.
- `sitemap.xml` y `robots.txt` generados solos.
- Textos alternativos en todas las fotos (los lee Google Imágenes), títulos ordenados
  (un solo `h1`) e idioma `es-CO`.
- Página 404 propia para enlaces rotos.
- Ícono para cuando alguien agrega la página a la pantalla de inicio del celular.

### Antes de publicar

1. **Cambia `url`** en `src/config/sitio.ts` por la dirección real (ej: `https://galeriapao3d.com`,
   sin barra al final). Mientras siga la de ejemplo, `npm run build` muestra un aviso `[SEO]`.
2. Opcional: escribe tu ciudad en `ciudad` (ej: `'Bogotá'`). Ayuda a aparecer en búsquedas
   como "figuras 3D en Bogotá". Déjala vacía si prefieres no mostrarla.

### Después de publicar

1. Entra a [Google Search Console](https://search.google.com/search-console), agrega tu
   dirección y verifica que es tuya (la opción "Prefijo de URL" es la más sencilla).
2. En **Sitemaps**, envía `sitemap.xml`.
3. Prueba la vista previa al compartir con el
   [depurador de Facebook](https://developers.facebook.com/tools/debug/) y los datos para Google con
   la [prueba de resultados enriquecidos](https://search.google.com/test/rich-results).
4. Pon el enlace de la página en la biografía de Instagram y en Facebook: los enlaces desde
   tus redes ayudan a que Google la encuentre antes.

## Logo

Los archivos de la marca están en `src/assets/marca/`:

- `logo.jpeg`: el letrero completo.
- `logo-circulo.png`: el disco rosado recortado en círculo (menú, pie de página y sello de la portada).
- `tarjeta.jpeg`: la tarjeta con el eslogan.
- `servicios.jpeg` y `volante.jpeg`: tarjeta de servicios y volante (de ahí salieron los datos de contacto).

`public/favicon.png`, `public/apple-touch-icon.png`, `public/icon-192.png`, `public/icon-512.png`
y `public/og.jpg` (la imagen que aparece al compartir el enlace) se generaron a partir de esos archivos.

## Estructura

```text
public/                  ← íconos, imagen para compartir y (opcional) videos/
src/
├── assets/figuras/      ← fotos de las figuras
├── assets/marca/        ← logo y tarjeta
├── components/          ← secciones de la página (Hero, Galería, Proceso, VideoProceso, Contacto...)
├── config/sitio.ts      ← nombre, contacto, SEO y video
├── data/                ← figuras y categorías
├── layouts/Base.astro   ← <head>, SEO, datos estructurados y script del tema
├── lib/                 ← íconos e imágenes
├── pages/               ← index (la página), 404, sitemap.xml, robots.txt y manifest
└── styles/              ← tokens.css (colores de cada estilo) y global.css
```

Los colores, tipografías y formas de cada estilo están en `src/styles/tokens.css`.
El fondo animado (manchas de color, corazones y destellos) está en `src/components/Fondo.astro`;
si el visitante tiene activada la opción de reducir movimiento, el fondo queda quieto.

## Publicar gratis

Ejecuta `npm run build` y sube la carpeta `dist/` a cualquiera de estos servicios:

- [Netlify](https://app.netlify.com/drop): arrastra la carpeta `dist/` y listo.
- [Vercel](https://vercel.com) o [Cloudflare Pages](https://pages.cloudflare.com): conecta el repositorio; detectan Astro solos.
- GitHub Pages: sigue la [guía de Astro](https://docs.astro.build/es/guides/deploy/github/).

## Extra

Un enlace con `?tema=play` o `?tema=tech` abre la página directamente en ese estilo.
