export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Tienda de moda sostenible',
    category: 'Ecommerce',
    description:
      'Rediseño de tienda online que duplicó la tasa de conversión en el primer trimestre.',
    tags: ['Shopify', 'CRO', 'UX'],
    image: '/projects/ecommerce.svg',
  },
  {
    title: 'SaaS de gestión',
    category: 'Landing + Ads',
    description: 'Landing y campañas de Meta Ads que redujeron el costo por lead un 38%.',
    tags: ['Meta Ads', 'Landing'],
    image: '/projects/saas.svg',
  },
  {
    title: 'Marketplace regional',
    category: 'SEO',
    description: 'Estrategia de SEO técnico y de contenido que triplicó el tráfico orgánico.',
    tags: ['SEO', 'Contenido'],
    image: '/projects/marketplace.svg',
  },
];
