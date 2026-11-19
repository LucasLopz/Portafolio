import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Qué rutas se convierten en HTML al compilar (prerenderizado).
 * Se generan es/index.html y en/index.html con todo el contenido adentro.
 */
export const serverRoutes: ServerRoute[] = [
  { path: 'es', renderMode: RenderMode.Prerender },
  { path: 'en', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender },
];
