/**
 * Modelos de contenido gestionados por WordPress (REST API).
 * Coinciden con la estructura de respuesta del WP REST API v2.
 * Los objetos HTML (`*.rendered`) se inyectan con `set:html` donde sea necesario.
 */

interface RenderedField {
  rendered: string;
}

interface WpLink {
  [key: string]: unknown;
}

/** Página estática de WordPress (wp/v2/pages) */
export interface WpPage {
  id: number;
  slug: string;
  title: RenderedField;
  content: RenderedField;
  excerpt: RenderedField;
  link: string;
  date: string;
  modified: string;
  status: 'publish' | 'draft' | 'private';
  type: string;
  _links?: WpLink;
  [key: string]: unknown;
}

/** Entrada de blog (wp/v2/posts) */
export interface WpPost extends WpPage {
  categories?: number[];
  tags?: number[];
  featured_media?: number;
}

/** Post type personalizado: Servicios (wp/v2/services) */
export interface WpService extends WpPage {}

/** Post type personalizado: Clientes (wp/v2/clients) */
export interface WpClient extends WpPage {}

/** Respuesta estándar de un endpoint REST con paginación */
export interface WpCollectionResponse<T> {
  items: T[];
  total: number;
  totalPages: number;
}
