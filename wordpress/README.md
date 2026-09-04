# Croilab Content — Plugin WordPress (modelo de contenido)

Plugin que convierte WordPress en el CMS headless de Croilab. Registra los
**Custom Post Types**, sus **campos** (mediante **metaboxes nativas** de
WordPress, **sin ACF**), una **página de configuración global** y expone todo
por la **REST API** que consume el frontend Astro.

---

## Requisitos

- **WordPress 6.x**. **No requiere ACF** ni ningún plugin de campos.

---

## Instalación

1. Sube la carpeta `croilab-content/` a `wp-content/plugins/` (o comprime a
   `.zip` y usa "Añadir nuevo plugin").
2. En **Plugins**, activa **Croilab Content**.
3. Los CPT y las metaboxes aparecen automáticamente en el menú lateral.

---

## Estructura de archivos

```
croilab-content/
├─ croilab-content.php        # Cabecera + carga de módulos + init
├─ inc/
│  ├─ custom-post-types.php   # Registro de CPTs: caso, cliente, testimonio, servicio, proyecto
│  ├─ meta-framework.php      # Metaboxes nativas (declarativas, guardado, REST)
│  ├─ meta-boxes.php          # Definición de todos los campos por CPT
│  ├─ settings-page.php       # Página "Configuración Croilab" (opciones globales)
│  ├─ rest-api.php            # Endpoints REST + campos legacy de proyecto
│  ├─ importer.php            # Seeder reutilizable (sin dependencia de WP-CLI)
│  └─ seed.php                # Comando WP-CLI `wp croilab seed` + auto-seed al activar
└─ seed/                      # JSON de semilla (generado por scripts/export-data.mjs)
```

---

## Custom Post Types registrados

| CPT        | rest_base    | Contenido                              |
|------------|--------------|----------------------------------------|
| `caso`     | `casos`      | Casos de éxito (cards + página detalle)|
| `cliente`  | `clientes`   | Logos de clientes (marquee)            |
| `testimonio`| `testimonios`| Testimonios de clientes                |
| `servicio` | `servicios`  | Servicios: cards + páginas completas   |
| `proyecto` | `proyectos`  | Portafolio de proyectos                |

Los posts de blog usan el CPT nativo `post`.

---

## Campos disponibles

Cada CPT tiene **metaboxes** editables desde el editor. Los valores se guardan
como metadatos nativos con prefijo `croilab_*` y se exponen en la REST API
bajo la clave `croilab_<grupo>`:

- **caso** → `croilab_caso` (service, client, industry, result, metric,
  description, image, challenge, solution, problems[], actions[], metrics[],
  process[], testimonial{})
- **cliente** → `croilab_cliente` (logo, logo_dark, url)
- **testimonio** → `croilab_testimonio` (quote, author, role, avatar)
- **servicio** → `croilab_servicio` (num, slug, desc, icon, hero, hero_stats,
  problem, problem_points, solution, solution_points, benefits, process,
  features, faq, cta, related, seo)
- **proyecto** → `croilab_proyecto` (enlace_proyecto, imagen_url, category,
  metrics, problem, solution, process, stack, testimonial, gallery)

Los campos legacy de proyecto (`imagen_url`, `enlace_proyecto`) también se
exponen como raíz del objeto REST para no romper el frontend actual.

---

## Configuración global

Menú **Ajustes → Configuración Croilab**. Edita datos del sitio, redes
sociales, diferenciales y stack. Se lee vía:

```
GET /wp-json/croilab/v1/settings
```

---

## REST API

```
GET /wp-json/wp/v2/casos
GET /wp-json/wp/v2/clientes
GET /wp-json/wp/v2/testimonios
GET /wp-json/wp/v2/servicios
GET /wp-json/wp/v2/proyectos
GET /wp-json/wp/v2/posts?_embed
GET /wp-json/croilab/v1/settings
```

---

## Migración de datos (seed)

Sin ACF: el seeder escribe metadatos nativos con el prefijo correcto.

1. Genera los JSON de semilla (desde el repo Astro):

   ```bash
   npm run data:export
   ```

   (escribe `wordpress/croilab-content/seed/*.json`)

2. Se importan de dos formas (cualquiera de las dos):

   - **Automáticamente al activar el plugin**: al activar/reactivar
     **Croilab Content**, la carpeta `seed/` se importa sola (sin WP-CLI).
     Vuelve a activar el plugin para re-aplicar el contenido.
   - **Con WP-CLI** (opcional, dentro de `wp-content/plugins/croilab-content/`):

     ```bash
     wp croilab seed --dry-run   # previsualiza
     wp croilab seed --dir=seed  # ejecuta
     ```

> **Nota sobre imágenes**: el seeder conserva las URLs tal cual. Para importar
> las imágenes a la biblioteca de medios de WP, amplía los mapeos de
> `inc/importer.php`.
