export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'Tienda de moda sostenible',
    category: 'Ecommerce',
    description:
      'Rediseño de tienda online que duplicó la tasa de conversión en el primer trimestre.',
    tags: ['Shopify', 'CRO', 'UX'],
  },
  {
    title: 'SaaS de gestión',
    category: 'Landing + Ads',
    description: 'Landing y campañas de Meta Ads que redujeron el costo por lead un 38%.',
    tags: ['Meta Ads', 'Landing'],
  },
  {
    title: 'Marketplace regional',
    category: 'SEO',
    description: 'Estrategia de SEO técnico y de contenido que triplicó el tráfico orgánico.',
    tags: ['SEO', 'Contenido'],
  },
];
