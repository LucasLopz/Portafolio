import { Lang } from '../core/language';
import { SiteContent } from './content.model';
import { EN } from './en';
import { ES } from './es';

/** Busca los textos del idioma pedido: CONTENT['es'] o CONTENT['en']. */
export const CONTENT: Record<Lang, SiteContent> = { es: ES, en: EN };
