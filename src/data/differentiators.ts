export interface Differentiator {
  num: string;
  title: string;
  description: string;
}

export const differentiators: Differentiator[] = [
  {
    num: '01',
    title: 'Datos sobre opiniones',
    description:
      'Cada decisión se basa en datos del embudo, no en intuiciones. Medimos, iteramos y repetimos lo que funciona.',
  },
  {
    num: '02',
    title: 'Enfoque en conversión',
    description:
      'Cada diseño y cada campaña existe con un único objetivo: convertir tráfico en ingresos reales.',
  },
  {
    num: '03',
    title: 'Velocidad de ejecución',
    description:
      'Equipos reducidos y procesos ágiles para pasar del diagnóstico a resultados en semanas, no en meses.',
  },
  {
    num: '04',
    title: 'Transparencia total',
    description:
      'Reportes claros y métricas accesibles. Siempre sabes qué está haciendo tu inversión y por qué.',
  },
];
