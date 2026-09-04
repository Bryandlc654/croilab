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
  _embedded?: {
    'wp:featuredmedia'?: { source_url?: string }[];
    author?: { name?: string }[];
    'wp:term'?: { name?: string }[][];
  };
}

export interface WpMetric {
  value: string;
  label: string;
}

export interface WpProcessStep {
  title: string;
  desc?: string;
}

export interface WpTestimonialData {
  quote: string;
  author: string;
  role: string;
}

/** Post type personalizado: Casos de Éxito (wp/v2/casos) */
export interface WpCase extends WpPage {
  croilab_caso?: {
    service?: 'seo' | 'ads' | 'conversion';
    client?: string;
    industry?: string;
    result?: string;
    metric?: string;
    description?: string;
    image?: string;
    challenge?: string;
    solution?: string;
    problems?: { problem?: string }[];
    actions?: { action?: string }[];
    metrics?: WpMetric[];
    process?: WpProcessStep[];
    testimonial?: WpTestimonialData;
  };
}

/** Post type personalizado: Clientes / logos (wp/v2/clientes) */
export interface WpClient extends WpPage {
  croilab_cliente?: {
    logo?: string;
    logo_dark?: string;
    url?: string;
  };
}

/** Post type personalizado: Testimonios (wp/v2/testimonios) */
export interface WpTestimonial extends WpPage {
  croilab_testimonio?: WpTestimonialData & {
    avatar?: string;
  };
}

export interface WpServiceHero {
  kicker?: string;
  title?: string;
  highlight?: string;
  intro?: string;
  stats?: WpMetric[];
}

export interface WpPair {
  title?: string;
  description?: string;
}

export interface WpFaq {
  question?: string;
  answer?: string;
}

export interface WpGroupPoints {
  title?: string;
  intro?: string;
  points?: { point?: string }[];
}

/** Post type personalizado: Servicios (wp/v2/servicios) */
export interface WpService extends WpPage {
  croilab_servicio?: {
    num?: string;
    slug?: string;
    desc?: string;
    icon?: string;
    hero?: WpServiceHero;
    problem?: WpGroupPoints;
    solution?: {
      title?: string;
      intro?: string;
      points?: WpPair[];
    };
    benefits?: WpPair[];
    process?: { num?: string; title?: string; description?: string }[];
    features?: WpPair[];
    faq?: WpFaq[];
    cta?: { title?: string; highlight?: string; subtitle?: string };
    related_projects?: { project?: string }[];
    seo?: { title?: string; description?: string };
  };
}

/** Post type personalizado: Proyectos / portafolio (wp/v2/proyectos) */
export interface WpProject extends WpPage {
  enlace_proyecto?: string;
  imagen_url?: string;
  croilab_proyecto?: {
    category?: string;
    metrics?: WpMetric[];
    problem?: WpGroupPoints;
    solution?: WpGroupPoints;
    process?: WpProcessStep[];
    stack?: { name?: string; logo?: string }[];
    testimonial?: WpTestimonialData;
    gallery?: string[];
  };
}

/** Configuración global (endpoint custom /croilab/v1/settings) */
export interface WpSettings {
  site?: {
    name?: string;
    slogan?: string;
    description?: string;
    url?: string;
    email?: string;
    whatsapp_number?: string;
    whatsapp_message?: string;
  };
  social?: { name?: string; icon?: string; url?: string }[];
  differentiators?: { num?: string; title?: string; description?: string }[];
  stack?: { name?: string; short?: string; icon?: string }[];
}

/** Respuesta estándar de un endpoint REST con paginación */
export interface WpCollectionResponse<T> {
  items: T[];
  total: number;
  totalPages: number;
}
