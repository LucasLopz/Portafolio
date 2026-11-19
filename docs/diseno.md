# Diseño visual

Dirección elegida por Lucas el 19/11/2026: opción C (tarjetas), con la claridad de la
opción A. Referencia visual: https://claude.ai/artifact/WN1p1Zcp59DbGZPFVzepbE

## Idea
Fondo gris claro con bloques blancos redondeados. Mucho aire, un solo color de acento
y tipografía grande. Lo primero que se ve es quién es Lucas y, enseguida, sus proyectos.

## Orden de la página
1. Header: nombre, menú, botón de idioma y botón de tema.
2. Hero: tarjeta con etiqueta del puesto, nombre, titular y dos botones (Ver proyectos,
   Descargar CV). Foto al lado, en su propia tarjeta.
3. Proyectos: van inmediatamente después del hero, una tarjeta por proyecto.
4. Habilidades: tres tarjetas chicas (Frontend, Backend y datos, Herramientas).
5. Sobre mí y próximos objetivos.
6. Contacto: LinkedIn, GitHub y email.
7. Footer.

## Colores (variables CSS)

| Variable | Modo claro | Modo oscuro | Uso |
| --- | --- | --- | --- |
| --bg | #EEF0F3 | #111318 | Fondo de la página |
| --surface | #FFFFFF | #1C1F26 | Tarjetas |
| --surface-2 | #EEF0F3 | #2A2E37 | Botón secundario, placeholders |
| --text | #18181B | #F4F4F5 | Texto principal |
| --text-muted | #3F3F46 | #C4C4CC | Párrafos y texto secundario |
| --accent | #C2410C | #FB923C | Enlaces y etiquetas de sección |
| --accent-soft | #FFEDD5 | #3A2416 | Fondo de la etiqueta del puesto |
| --accent-soft-text | #9A3412 | #FDBA74 | Texto de la etiqueta del puesto |
| --btn-bg | #18181B | #F4F4F5 | Botón principal |
| --btn-text | #FFFFFF | #18181B | Texto del botón principal |

Todo par texto/fondo debe cumplir contraste 4.5:1. Verificarlo antes de cerrar la rama.

## Tipografía
- Familia: DM Sans (pesos 400, 500 y 700). Servir los archivos de fuente desde el propio
  sitio, no desde Google Fonts, para no depender de terceros y cargar más rápido.
- h1: 56 px en escritorio, 36 px en móvil, peso 700, interlineado 1.04.
- h2 de sección: 32 px. Título de proyecto: 23 px.
- Párrafos: 17 a 19 px, interlineado 1.55.

## Forma y espaciado
- Radio: 24 px en tarjetas grandes, 20 px en tarjetas chicas, 14 px en botones e imágenes.
- Separación entre tarjetas: 20 px. Relleno interno: 44 px en el hero, 24 px en el resto.
- Ancho máximo del contenido: 1120 px, centrado.
- Sin sombras ni degradados. La separación la dan el color de fondo y el espacio.

## Comportamiento
- Responsive: en móvil todo se apila en una columna; el menú se acomoda en varias líneas.
- Botones y enlaces con área táctil mínima de 44 px.
- Modo claro y oscuro: respeta la preferencia del sistema la primera vez y recuerda la
  elección del usuario. No debe parpadear el tema equivocado al cargar.
- Foco visible al navegar con teclado.
- Foto: recorte vertical, encuadre de hombros para arriba, con texto alternativo.
- Capturas de proyectos: mientras no existan, placeholder con el nombre del proyecto.
