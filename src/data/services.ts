export interface Service {
  num: string;
  name: string;
  slug: string;
  desc: string;
  icon: string;
}

export const services: Service[] = [
  {
    num: '01',
    name: 'SEO',
    slug: 'seo',
    desc: 'Posicionamiento técnico y de contenido para llevar tu marca al primer resultado.',
    icon: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-5-5"/><path d="M8 12l2-2.5 2 1.5 2.5-3"/>',
  },
  {
    num: '02',
    name: 'Meta Ads',
    slug: 'meta-ads',
    desc: 'Campañas que captan tráfico cualificado y lo convierten en ingresos reales.',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5 3.5-5 3.5z" fill="currentColor" stroke="none"/>',
  },
  {
    num: '03',
    name: 'Diseño Web',
    slug: 'diseno-web',
    desc: 'Páginas rápidas, claras y diseñadas para vender desde el primer segundo.',
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M7 6.5h.01M10 6.5h.01"/>',
  },
  {
    num: '04',
    name: 'Ecommerce',
    slug: 'ecommerce',
    desc: 'Tiendas online optimizadas para maximizar ventas y ticket medio.',
    icon: '<path d="M6 8h12l-1 12H7z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
  },
  {
    num: '05',
    name: 'Método Conversiones',
    slug: 'conversiones',
    desc: 'Un sistema probado para analizar, optimizar y escalar todo tu embudo digital.',
    icon: '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M11 7l-4.5 9.2M13 7l4.5 9.2M7.2 18h9.6"/>',
  },
];
