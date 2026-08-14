export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'Diagnóstico',
    description:
      'Auditamos tu embudo, tu tráfico y tu competencia para encontrar fugas y oportunidades.',
  },
  {
    num: '02',
    title: 'Estrategia',
    description:
      'Definimos el plan: qué optimizar, dónde invertir y qué esperar en cada fase del proyecto.',
  },
  {
    num: '03',
    title: 'Implementación',
    description: 'Diseñamos, construimos y lanzamos campañas y experiencias de alta conversión.',
  },
  {
    num: '04',
    title: 'Escalado',
    description:
      'Medimos resultados, iteramos y escalamos lo que funciona para crecer de forma sostenida.',
  },
];
