// @ts-check
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://croilab.com',
  output: 'static',
  integrations: [sitemap()],
  env: {
    schema: {
      // URL base de la REST API de WordPress (sin slash final)
      WP_URL: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
        default: 'https://wp.croilab.com',
      }),
      // Credenciales de aplicación para contenido privado (borradores/preview) — opcionales
      WP_APP_USER: envField.string({ context: 'server', access: 'secret', optional: true }),
      WP_APP_PASSWORD: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
