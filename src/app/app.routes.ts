import { Routes } from '@angular/router';
import { DEFAULT_LANG } from './core/language';
import { Home } from './pages/home/home';

export const routes: Routes = [
  // Cada idioma es una ruta. "data" le pasa el idioma a la página Home.
  { path: 'es', component: Home, data: { lang: 'es' } },
  { path: 'en', component: Home, data: { lang: 'en' } },
  // La raíz y cualquier URL que no exista van al idioma por defecto (/es).
  { path: '', pathMatch: 'full', redirectTo: DEFAULT_LANG },
  { path: '**', redirectTo: DEFAULT_LANG },
];
