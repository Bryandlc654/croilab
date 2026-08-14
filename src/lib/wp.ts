import { WP_APP_PASSWORD, WP_APP_USER, WP_URL } from 'astro:env/server';
import type { WpClient, WpCollectionResponse, WpPage, WpPost, WpService } from './types';

/**
 * Capa de acceso a WordPress como Headless CMS (REST API v2).
 *
 * Los endpoints de contenido público no requieren autenticación.
 * Si se definen WP_APP_USER y WP_APP_PASSWORD en `.env`, las peticiones
 * se envían con Basic Auth para poder leer borradores/previews.
 *
 * Estas funciones aún no se usan en las páginas: la home consume los datos
 * de `src/data/`. Se conectan cuando exista la instancia de WordPress.
 */

const WP_API_BASE = `${WP_URL.replace(/\/$/, '')}/wp-json/wp/v2`;

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

async function collection<T>(
  path: string,
  params: Record<string, string> = {},
): Promise<WpCollectionResponse<T>> {
  const response = await fetch(`${WP_API_BASE}${path}?${new URLSearchParams(params)}`, {
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
  });

  if (!response.ok) {
    throw new Error(`WordPress API ${response.status} ${response.statusText}: ${path}`);
  }

  const items = (await response.json()) as T[];
  return {
    items,
    total: Number(response.headers.get('X-WP-Total')) || items.length,
    totalPages: Number(response.headers.get('X-WP-TotalPages')) || 1,
  };
}

// ------------------------------------------------------------------
// Páginas y entradas nativas
// ------------------------------------------------------------------

export async function getWpPages(params: Record<string, string> = {}): Promise<WpPage[]> {
  return wpFetch<WpPage[]>('/pages', { per_page: '100', _embed: 'true', ...params });
}

export async function getWpPageBySlug(slug: string): Promise<WpPage | null> {
  const pages = await getWpPages({ slug });
  return pages[0] ?? null;
}

export async function getWpPosts(
  params: Record<string, string> = {},
): Promise<WpCollectionResponse<WpPost>> {
  return collection<WpPost>('/posts', { per_page: '20', _embed: 'true', ...params });
}

export async function getWpPostBySlug(slug: string): Promise<WpPost | null> {
  const { items } = await getWpPosts({ slug });
  return items[0] ?? null;
}

// ------------------------------------------------------------------
// Contenido personalizado de Croilab (post types registrados en WP)
// ------------------------------------------------------------------

export async function getWpServices(params: Record<string, string> = {}): Promise<WpService[]> {
  return wpFetch<WpService[]>('/services', { per_page: '100', ...params });
}

export async function getWpClients(params: Record<string, string> = {}): Promise<WpClient[]> {
  return wpFetch<WpClient[]>('/clients', { per_page: '100', ...params });
}
