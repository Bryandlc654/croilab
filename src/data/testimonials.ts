export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'En tres meses nuestra tasa de conversión creció un 47%. Croilab entiende de negocio, no solo de páginas.',
    author: 'Laura Gómez',
    role: 'Directora de Marketing · Altawind',
  },
  {
    quote:
      'Pasamos de depender de la publicidad a tener un sistema de adquisición predecible y medible.',
    author: 'Martín Ríos',
    role: 'Fundador · Voltex',
  },
  {
    quote:
      'El diagnóstico cambió la forma en que entendemos nuestra tienda. Los resultados se notaron desde el primer mes.',
    author: 'Camila Torres',
    role: 'CEO · Meridian',
  },
];
