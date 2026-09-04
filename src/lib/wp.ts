import { WP_APP_PASSWORD, WP_APP_USER, WP_URL } from 'astro:env/server';
import type {
  WpCase,
  WpClient,
  WpCollectionResponse,
  WpPost,
  WpService,
  WpSettings,
  WpProject,
  WpTestimonial,
} from './types';

/**
 * Capa de acceso a WordPress como Headless CMS (REST API v2).
 *
 * Todos los fetch de contenido pasan por `wpFetch` / `collection` para
 * centralizar la URL base, autenticación opcional y el manejo de errores.
 *
 * Cada accessor tiene una versión con fallback a los datos locales de
 * `src/data/` (que actúan como respaldo durante el build si WordPress
 * está inalcanzable o aún no tiene contenido).
 */

const WP_API_BASE = `${WP_URL.replace(/\/$/, '')}/wp-json`;

function authHeaders(): HeadersInit {
  if (WP_APP_USER && WP_APP_PASSWORD) {
    const credentials = `${WP_APP_USER}:${WP_APP_PASSWORD}`;
    const base64 = Buffer.from(credentials).toString('base64');
    return { Authorization: `Basic ${base64}` };
  }
  return {};
}

async function wpFetch<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  const query = new URLSearchParams(params);
  const response = await fetch(`${WP_API_BASE}${path}${query.size ? `?${query}` : ''}`, {
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress API ${response.status} ${response.statusText}: ${path}`);
  }

  return response.json() as Promise<T>;
}

/** Fetch de colección con paginación (X-WP-Total). */
async function wpCollection<T>(
  postType: string,
  params: Record<string, string> = {},
): Promise<WpCollectionResponse<T>> {
  const all: T[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const query = new URLSearchParams({ per_page: '100', page: String(page), _embed: 'true', ...params });
    const response = await fetch(`${WP_API_BASE}/wp/v2/${postType}?${query}`, {
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
    });

    if (!response.ok) {
      throw new Error(`WordPress API ${response.status} ${response.statusText}: /${postType}`);
    }

    const items = (await response.json()) as T[];
    all.push(...items);
    totalPages = Number(response.headers.get('X-WP-TotalPages')) || 1;
    page += 1;
  } while (page <= totalPages);

  return {
    items: all,
    total: all.length,
    totalPages,
  };
}

/** Helper seguro: resuelve con fallback si el fetch falla. */
// (Reservado para uso futuro; los consumidores usan try/catch con datos locales.)

// ------------------------------------------------------------------
// Posts de blog
// ------------------------------------------------------------------

export function getWpPosts(params: Record<string, string> = {}): Promise<WpCollectionResponse<WpPost>> {
  return wpCollection<WpPost>('posts', params);
}

export async function getWpPostBySlug(slug: string): Promise<WpPost | null> {
  const { items } = await wpCollection<WpPost>('posts', { slug });
  return items[0] ?? null;
}

// ------------------------------------------------------------------
// Casos de éxito (CPT: caso)
// ------------------------------------------------------------------

export function getWpCases(params: Record<string, string> = {}): Promise<WpCollectionResponse<WpCase>> {
  return wpCollection<WpCase>('casos', params);
}

export async function getWpCaseBySlug(slug: string): Promise<WpCase | null> {
  const { items } = await wpCollection<WpCase>('casos', { slug });
  return items[0] ?? null;
}

// ------------------------------------------------------------------
// Clientes / logos (CPT: cliente)
// ------------------------------------------------------------------

export function getWpClients(params: Record<string, string> = {}): Promise<WpCollectionResponse<WpClient>> {
  return wpCollection<WpClient>('clientes', params);
}

// ------------------------------------------------------------------
// Testimonios (CPT: testimonio)
// ------------------------------------------------------------------

export function getWpTestimonials(params: Record<string, string> = {}): Promise<WpCollectionResponse<WpTestimonial>> {
  return wpCollection<WpTestimonial>('testimonios', params);
}

// ------------------------------------------------------------------
// Servicios (CPT: servicio)
// ------------------------------------------------------------------

export function getWpServices(params: Record<string, string> = {}): Promise<WpCollectionResponse<WpService>> {
  return wpCollection<WpService>('servicios', params);
}

export async function getWpServiceBySlug(slug: string): Promise<WpService | null> {
  const { items } = await wpCollection<WpService>('servicios', { slug });
  return items[0] ?? null;
}

// ------------------------------------------------------------------
// Proyectos / portafolio (CPT: proyecto)
// ------------------------------------------------------------------

export function getWpProjects(params: Record<string, string> = {}): Promise<WpCollectionResponse<WpProject>> {
  return wpCollection<WpProject>('proyectos', params);
}

export async function getWpProjectBySlug(slug: string): Promise<WpProject | null> {
  const { items } = await wpCollection<WpProject>('proyectos', { slug });
  return items[0] ?? null;
}

// ------------------------------------------------------------------
// Configuración global (Options page -> endpoint custom)
// ------------------------------------------------------------------

export function getWpSettings(): Promise<WpSettings> {
  return wpFetch<WpSettings>('/croilab/v1/settings');
}
