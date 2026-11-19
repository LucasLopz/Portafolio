# Lucas Lopez Saaied — Portfolio

Personal portfolio of Lucas Lopez Saaied, Junior Full Stack Developer based in Mar del Plata, Argentina.

**Live site:** https://lucaslopezsaaied.vercel.app · Available in [Spanish](https://lucaslopezsaaied.vercel.app/es) and [English](https://lucaslopezsaaied.vercel.app/en)

> Versión en español del sitio: `/es`. Este README está en inglés para que pueda leerlo cualquier equipo técnico.

## About

A single-page site that presents who I am, the projects I have shipped and how to contact me. It is also a project in its own right: a statically prerendered Angular app with two languages, light and dark themes, and accessibility and performance treated as requirements.

## Features

- **Two languages** with one URL each (`/es` and `/en`). A shared TypeScript interface forces both languages to have the same fields, so a missing translation breaks the build.
- **Static prerendering**: every page is generated as HTML at build time, so search engines receive the full content and no server is needed.
- **Light and dark themes** with no flash on load. The site follows the system preference and remembers the visitor's choice.
- **Project gallery** with a lightbox built on the native `<dialog>` element, usable with mouse, keyboard and touch.
- **Accessibility**: semantic HTML, visible focus, text contrast of at least 4.5:1 in both themes and touch targets of at least 44 px.
- **Performance**: self-hosted variable font, WebP screenshots and a CSS bundle of about 1.4 KB compressed.
- **SEO and structured data**: title, description, canonical, `hreflang`, Open Graph and Twitter Card per language, a `ProfilePage` JSON-LD, and a sitemap and `robots.txt` generated at build time from a single domain setting.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Angular 22 (standalone components, signals) |
| Language | TypeScript |
| Styles | Plain CSS with custom properties and `light-dark()`, no UI library |
| Rendering | Static prerendering (SSG) |
| Hosting | Vercel |
| Formatting | Prettier |

## Getting started

Requires Node.js 22.22.3+ (22.x), 24.15.0+ (24.x) or 26+.

```bash
git clone https://github.com/LucasLopz/Portafolio.git
cd Portafolio
npm install
npm start
```

Then open http://localhost:4200/es.

| Command | What it does |
| --- | --- |
| `npm start` | Runs the development server |
| `npm run build` | Builds and prerenders the site into `dist/portfolio/browser`, then generates `sitemap.xml` and `robots.txt` |
| `npm run format` | Formats the code with Prettier |
| `npm run format:check` | Checks formatting without changing files |

## Project structure

```
public/                 static files: icons, images, fonts, CV
scripts/                sitemap and robots.txt generator (runs after the build)
src/app/
  content/              all texts, one file per language (es.ts, en.ts)
  core/                 site URL, language, theme, SEO and structured data
  layout/               header and footer
  pages/home/           the page, built from the sections
  sections/             hero, projects, skills, about, contact
  shared/lightbox/      image lightbox
src/styles/             design tokens, fonts, base styles, shared components
docs/                   project context and decision log (in Spanish)
```

## Decisions

The reasoning behind the main choices is recorded in [`docs/decisiones.md`](docs/decisiones.md) (in Spanish). In short:

- **Prerendering instead of server-side rendering**: the content does not change between visits, so static HTML is faster, cheaper to host and easy for search engines to read.
- **Routes plus one content file per language instead of an i18n library**: the site is small, and this keeps it dependency-free and easy to explain.
- **A script in the `<head>` sets the theme before the first paint**: the HTML is the same for every visitor, so the theme cannot be decided at build time.

## How it was built

I built this site using AI-assisted development with Claude Code. I defined the requirements and the design, approved a plan before each change, and reviewed every commit through pull requests. The commit history and the decision log show that process.

## Contact

- LinkedIn: [linkedin.com/in/lucas-lopez-saaied](https://www.linkedin.com/in/lucas-lopez-saaied/)
- GitHub: [github.com/LucasLopz](https://github.com/LucasLopz)
- Email: lucaslopezsaaied@gmail.com
