# Registro de decisiones

Cada decisión cerrada, con fecha y motivo. Agregar una fila cuando se decida algo nuevo.

| Fecha | Decisión | Motivo |
| --- | --- | --- |
| 18/11/2026 | Stack: Angular con TypeScript, HTML y CSS, prerenderizado | Lucas ya conoce Angular, lo piden los avisos y resuelve bien los dos idiomas y el SEO |
| 18/11/2026 | Proyectos de la v1: Associates Realty y We Insure Downtown Miami | Son los proyectos publicados que tiene hoy; permiso del dueño confirmado |
| 18/11/2026 | Español e inglés con botón de idioma, cuidando SEO y AEO | Definido por Lucas |
| 18/11/2026 | Titular Full Stack; sección de QA al terminar el curso | Definido por Lucas |
| 18/11/2026 | Dominio: subdominio gratuito de Vercel, sin gastos | Definido por Lucas |
| 18/11/2026 | ~~Contacto con botones a LinkedIn y email, sin formulario ni WhatsApp~~ (reemplazada el 19/11/2026) | Definido por Lucas |
| 18/11/2026 | Foto de perfil obligatoria | Definido por Lucas |
| 18/11/2026 | Modo claro y oscuro; ~~el diseño visual se define más adelante~~ (definido el 19/11/2026) | Definido por Lucas |
| 18/11/2026 | CV en PDF de una página, uno por idioma | Definido por Lucas |
| 18/11/2026 | No se publican teléfono ni dirección | Privacidad |
| 18/11/2026 | El portfolio se desarrolla con Claude Code | Definido por Lucas |
| 18/11/2026 | Objetivo principal: Full Stack Developer Jr.; QA como plan B | Rumbo laboral de Lucas |
| 18/11/2026 | Deploy en Vercel | Ya lo usa y el plan gratuito alcanza |
| 19/11/2026 | ~~Contacto con botones a LinkedIn, GitHub y email, sin formulario ni WhatsApp; GitHub también en el footer~~ (reemplazada el 19/11/2026) | Definido por Lucas |
| 19/11/2026 | Idiomas por rutas (/es y /en) con un archivo de textos por idioma (content/es.ts y content/en.ts) y una interfaz común, sin @angular/localize ni librerías | Una sola página con poco texto: es lo más simple, no suma dependencias y TypeScript avisa si falta una traducción |
| 19/11/2026 | Idioma por defecto: español. La raíz y cualquier URL que no exista redirigen a /es (vercel.json) | Definido por Lucas |
| 19/11/2026 | Angular 22 en modo estático (outputMode "static"), sin servidor Node | Vercel sirve los archivos gratis y los buscadores reciben el HTML completo |
| 19/11/2026 | Diseño visual: opción C (tarjetas) con la claridad de la opción A, especificado en docs/diseno.md | Elegido por Lucas |
| 19/11/2026 | Orden de la página: hero, proyectos, habilidades, sobre mí y contacto. Sin el nombre en el header (ya es el h1) | Los proyectos son lo primero que tiene que ver un reclutador |
| 19/11/2026 | Habilidades en tres grupos: Frontend, Backend y datos (Java, C, MySQL) y Herramientas | Definido por Lucas |
| 19/11/2026 | Contacto con tres botones del mismo estilo (LinkedIn, GitHub y email); footer de una línea "© 2026 Lucas Lopez Saaied", sin enlaces | Definido por Lucas: ningún canal destacado y sin repetir GitHub |
| 19/11/2026 | Colores con variables CSS y light-dark(); respaldo en claro con @supports para navegadores sin soporte | Una sola definición por color; los navegadores viejos quedan en claro sin romperse |
| 19/11/2026 | Tema sin parpadeo: script en el head de index.html que marca data-theme; inlineCritical desactivado | El HTML prerenderizado es igual para todos; el tema se decide antes de pintar |
| 19/11/2026 | Fuente DM Sans servida desde el sitio (un woff2 variable, subconjunto latino) | Sin depender de Google Fonts y carga más rápida |
| 19/11/2026 | Capturas de proyectos en WebP, 1200 px de ancho y calidad 80 | Pesan unas 15 veces menos que los PNG originales |
| 19/11/2026 | Tarjeta de proyecto: resumen, stack y enlace visibles; el resto en "Ver detalles". Capturas ampliables con un dialog nativo, sin librerías | Tarjetas limpias sin perder contenido para reclutadores y buscadores |
| 19/11/2026 | CV en public/cv/ (cv-es.pdf y cv-en.pdf), revisados sin teléfono ni dirección | Privacidad |
| 19/11/2026 | Saltos de línea LF para todos los archivos de texto (.gitattributes) y formato con Prettier; la documentación en Markdown no se formatea | Mismos archivos en cualquier sistema; las tablas de docs se editan a mano |
| 19/11/2026 | Dominio final: https://lucaslopezsaaied.vercel.app, definido una sola vez en src/app/core/site.json | Lo leen Angular y el script del sitemap; si cambia, se cambia en un lugar |
| 19/11/2026 | Favicons propios (SVG, ICO y apple-touch-icon) y theme-color por tema, que sigue también al botón | Identidad propia al compartir y en el celular |
| 19/11/2026 | SEO por idioma en el HTML prerenderizado: title, description, canonical, hreflang es/en/x-default (x-default → /es), Open Graph (es_AR / en_US) y Twitter Card con og-es.jpg y og-en.jpg | Los buscadores y las redes leen el HTML sin ejecutar JavaScript |
| 19/11/2026 | sitemap.xml y robots.txt generados después del build (postbuild), sin lastmod | Usan el mismo dominio de site.json; la fecha del build no indica cambios reales |
| 19/11/2026 | JSON-LD ProfilePage con una Person (mismo @id en /es y /en); sin email | Datos claros para buscadores y asistentes de IA; el email en datos estructurados atrae spam |
| 19/11/2026 | Sin llms.txt | No es un estándar, Google no lo usa y el HTML prerenderizado con JSON-LD ya cubre lo mismo |
| 19/11/2026 | Cotización de We Insure descrita como "guiada por pasos según el tipo de cobertura", sin cifra | El número de pasos cambia según la cobertura |
| 19/11/2026 | We Insure: capturas de inicio, cotización y blog; sin la de reseñas | La de reseñas muestra nombres de clientes |

## Pendientes
- Horas semanales disponibles.
- Validar el JSON-LD con la herramienta de resultados enriquecidos de Google cuando esté publicado.
- Contraste: verificar de nuevo si cambia la paleta. Última verificación: 19/11/2026,
  todos los textos de la página pasan 4.5:1 en claro (mínimo 5.18) y en oscuro (mínimo 7.29).
- Lighthouse: correr de nuevo después de cambios grandes. Última medición: 19/11/2026,
  sobre el build local con compresión, en móvil (Lighthouse 13.6). /es y /en:
  Performance 99, Accessibility 100, Best Practices 100, SEO 100 (Agentic Browsing 100).
  Mejoras opcionales detectadas: foto de perfil en WebP (unos 21 KB menos) e imágenes
  responsivas para las capturas (unos 29 KB menos).
