/**
 * Exporta los datos de `src/data/*.ts` a JSON para el seeder de WordPress.
 *
 * Uso:
 *   node scripts/export-data.mjs
 *
 * Salida: carpeta wordpress/croilab-content/seed/*.json
 *
 * Requiere que `typescript` esté instalado (devDependency del proyecto).
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import ts from 'typescript';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dataDir = resolve(root, 'src', 'data');
const outDir = resolve(root, 'wordpress', 'croilab-content', 'seed');

mkdirSync(outDir, { recursive: true });

/**
 * Carga un módulo TS transpilado a CommonJS sin escribir en disco.
 * Devuelve los exports del módulo.
 */
function loadTsModule(relPath) {
  const fullPath = resolve(dataDir, relPath);
  const source = readFileSync(fullPath, 'utf8');
  const js = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: fullPath,
  }).outputText;

  const path = fileURLToPath(import.meta.url);
  const module = { exports: {} };
  const dir = dirname(fullPath);
  // Mini-require que resuelve imports relativos transpilados.
  const localRequire = (spec) => {
    if (spec.startsWith('.')) {
      const resolved = resolve(dir, spec);
      return loadTsModule(resolved.endsWith('.ts') ? resolved.replace(dataDir + '/', '') : resolved.replace(dataDir + '/', '') + '.ts');
    }
    // imports de paquetes externos (none esperado en data/)
    throw new Error(`Import no local en ${relPath}: ${spec}`);
  };
  // eslint-disable-next-line no-new-func
  const fn = new Function('require', 'module', 'exports', js);
  fn(localRequire, module, module.exports);
  return module.exports;
}

const writeJson = (name, data) => {
  const out = resolve(outDir, `${name}.json`);
  writeFileSync(out, JSON.stringify(data, null, 2));
  console.log(`  ✓ ${name}.json`);
};

// ------------------------------------------------------------------
// 1. Casos de éxito
// ------------------------------------------------------------------
function buildCasos() {
  const { serviceCases } = loadTsModule('serviceCases.ts');
  return serviceCases.map((c) => ({
    slug: c.slug,
    client: c.client,
    service: c.service,
    industry: c.industry,
    result: c.result,
    metric: c.metric,
    description: c.description,
    image: c.image,
    challenge: c.challenge,
    solution: c.solution,
    problems: c.problems,
    actions: c.actions,
    metrics: c.metrics,
    process: c.process.map((p) => ({ title: p.title, desc: p.desc })),
    testimonial: c.testimonial,
    excerpt: c.description,
  }));
}

// ------------------------------------------------------------------
// 2. Clientes
// ------------------------------------------------------------------
function buildClientes() {
  const { clients } = loadTsModule('clients.ts');
  return clients.map((c, i) => ({
    slug: `cliente-${i + 1}`,
    title: c.alt || `Cliente ${i + 1}`,
    logo: c.image,
    url: '',
  }));
}

// ------------------------------------------------------------------
// 3. Testimonios
// ------------------------------------------------------------------
function buildTestimonios() {
  const { testimonials } = loadTsModule('testimonials.ts');
  return testimonials.map((t, i) => ({
    slug: `testimonio-${i + 1}`,
    title: t.author,
    quote: t.quote,
    author: t.author,
    role: t.role,
  }));
}

// ------------------------------------------------------------------
// 4. Servicios (cards + páginas)
// ------------------------------------------------------------------
function buildServicios() {
  const { services } = loadTsModule('services.ts');
  const { servicePages } = loadTsModule('servicePages.ts');

  const cardBySlug = new Map(services.map((s) => [s.slug, s]));

  return servicePages.map((page) => {
    const card = cardBySlug.get(page.slug);
    return {
      slug: page.slug,
      title: page.name,
      num: card ? card.num : '',
      desc: card ? card.desc : '',
      icon: card ? card.icon : '',
      hero: page.hero,
      problem: page.problem,
      solution: page.solution,
      benefits: page.benefits,
      process: page.process,
      features: page.features,
      faq: page.faq,
      cta: page.cta,
      relatedProjects: page.relatedProjects,
      seo: page.seo,
      excerpt: page.hero.intro,
    };
  });
}

// ------------------------------------------------------------------
// 5. Configuración global (settings)
// ------------------------------------------------------------------
function buildSettings() {
  const { site } = loadTsModule('site.ts');
  const { differentiators } = loadTsModule('differentiators.ts');
  return {
    site: {
      name: site.name,
      slogan: site.slogan,
      description: site.description,
      url: site.url,
      email: site.email,
      whatsapp_number: site.whatsappNumber,
      whatsapp_message: site.whatsappMessage,
    },
    social: [],
    differentiators,
    stack: [],
  };
}

console.log('Exportando datos a wordpress/croilab-content/seed/ ...');

writeJson('casos', buildCasos());
writeJson('clientes', buildClientes());
writeJson('testimonios', buildTestimonios());
writeJson('servicios', buildServicios());
writeJson('settings', buildSettings());
writeJson('proyectos', []);

console.log('Listo.');
