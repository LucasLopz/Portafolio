# Portfolio de Lucas Lopez Saaied

Sitio personal de una página para conseguir entrevistas como Full Stack Developer Jr.
Público: reclutadores y líderes técnicos de Argentina y del exterior. Contexto completo en docs/.

## Stack
- Angular (versión estable actual) con TypeScript, HTML y CSS propio, sin librerías de UI.
- Sitio prerenderizado (estático) para que los buscadores lean el contenido.
- Deploy gratuito en Vercel desde main, con el subdominio .vercel.app. Sin gastos.
- Tests E2E con Playwright y GitHub Actions.

## Decisiones cerradas
- Español e inglés con botón para cambiar de idioma. Una URL por idioma (/es y /en).
- SEO y AEO: título y descripción por idioma, hreflang, sitemap, imagen al compartir
  y datos estructurados JSON-LD de tipo Person.
- Modo claro y oscuro con botón. El diseño visual todavía no está definido:
  proponer opciones antes de aplicar estilos definitivos.
- Foto de perfil obligatoria en la presentación.
- Contacto solo con botones: LinkedIn, GitHub y email. Sin formulario ni WhatsApp.
- No publicar teléfono ni dirección.
- Proyectos de la v1: Associates Realty y We Insure Downtown Miami.
- Titular Full Stack. La sección de QA se agrega cuando termine el curso.
- CV descargable en PDF, uno por idioma.

## Reglas
- Leer docs/decisiones.md y docs/contenido.md antes de proponer cambios.
- No inventar textos, proyectos ni datos personales: usar solo docs/contenido.md.
  Si un dato figura como "a confirmar" o "pendiente", preguntarme antes de usarlo.
- Antes de programar, mostrar un plan corto y esperar mi aprobación.
- Cambios chicos: una sección por rama, commits con mensajes claros.
- Explicarme cada decisión técnica: soy junior y tengo que poder defender el código.
- Estoy reforzando Git: indicarme los comandos y qué hace cada uno.
- No conozco Playwright, GitHub Actions, Lighthouse ni accesibilidad: configurarlos
  vos y explicarme paso a paso qué hace cada cosa y cómo correrla.
- HTML semántico, accesible y responsive. Sin dependencias innecesarias.
- Si una decisión nueva cambia el rumbo, actualizar docs/decisiones.md.
