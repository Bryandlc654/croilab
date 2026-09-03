export interface ServiceCase {
  slug: string;
  service: 'seo' | 'ads' | 'conversion';
  client: string;
  industry: string;
  result: string;
  metric: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  problems: string[];
  actions: string[];
  metrics: { value: string; label: string }[];
  process: { title: string; desc: string }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const serviceCases: ServiceCase[] = [
  {
    slug: 'techflow-inc',
    service: 'conversion',
    client: 'TechFlow Inc.',
    industry: 'SaaS B2B',
    result: '+312%',
    metric: 'En leads calificados (MQLs)',
    description:
      'Reestructuramos todo el ecosistema de conversión, desde los anuncios hasta la arquitectura web, logrando triplicar el pipeline de ventas en 4 meses.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    challenge:
      'TechFlow generaba tráfico, pero los visitantes abandonaban sin convertirse. Su landing carecía de jerarquía visual, los formularios eran largos y no existía una propuesta de valor clara por encima del pliegue.',
    solution:
      'Aplicamos ingeniería de conversión integral: rediseñamos la propuesta de valor, acortamos los formularios, añadimos pruebas sociales estratégicas y construimos un embudo de seguimiento con triggers de urgencia y riesgo reverso.',
    problems: [
      'Tasa de conversión inferior al 0.8% en el formulario principal.',
      'Sin prueba social en los puntos de decisión clave.',
      'Propuesta de valor difusa por encima del pliegue.',
      'Sin seguimiento de leads ni campaña de nurturing.',
    ],
    actions: [
      'Rediseño CRO de la landing con jerarquía orientada a conversión.',
      'Formularios reducidos de 9 a 3 campos con auto-guardado.',
      'Inserción de testimonios y logos de clientes en zonas calientes.',
      'Secuencia de email nurturing de 5 pasos para leads fríos.',
    ],
    metrics: [
      { value: '+312%', label: 'Leads calificados (MQLs)' },
      { value: '3.4x', label: 'Pipeline generado' },
      { value: '-58%', label: 'Costo por lead (CPL)' },
    ],
    process: [
      { title: '1. Auditoría CRO', desc: 'Analizamos mapas de calor, grabaciones y el embudo actual para localizar puntos de fricción.' },
      { title: '2. Hipótesis', desc: 'Priorizamos cambios de alto impacto por esfuerzo y potencial de conversión.' },
      { title: '3. Rediseño', desc: 'Implementamos las variantes ganadoras en el UI y el copy de la landing.' },
      { title: '4. Optimización', desc: 'Iteramos con tests A/B hasta consolidar el embudo de seguimiento.' },
    ],
    testimonial: {
      quote:
        'Croilab no solo mejoró la web: construyó todo un sistema de conversión. Nosotros solo recibimos leads mejor calificados, mes tras mes.',
      author: 'Marcos Vélez',
      role: 'CEO, TechFlow Inc.',
    },
  },
  {
    slug: 'aurora-fashion',
    service: 'conversion',
    client: 'Aurora Fashion',
    industry: 'Ecommerce',
    result: '5.8x',
    metric: 'ROAS sostenido',
    description:
      'Implementamos ingeniería de conversión en su tienda Shopify. Redujimos el costo de adquisición a la mitad mientras escalábamos la inversión de manera rentable.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    challenge:
      'Aurora Fashion pagaba un CAC cada vez más alto. Su checkout generaba abandono, la ficha de producto carecía de decisores de compra y el tráfico pagado no se traducía en ventas rentables.',
    solution:
      'Rediseñamos el flujo de compra: fichas de producto optimizadas con reviews y urgencia, checkout en una sola página, y un programa de recuperación de carritos abandonados que recupera ventas a diario.',
    problems: [
      'Abandono de carrito superior al 78%.',
      'CAC en aumento y ROAS por debajo de 2.',
      'Fichas de producto sin información de decisión.',
      'Cero estrategia de recuperación de carritos.',
    ],
    actions: [
      'Rediseño de la ficha de producto centrado en el decisor de compra.',
      'Checkout en una sola página con múltiples métodos de pago.',
      'Emails y SMS automáticos de recuperación de carrito.',
      'Reducción de fricción: envío gratis y garantía visible desde el inicio.',
    ],
    metrics: [
      { value: '5.8x', label: 'ROAS sostenido' },
      { value: '-52%', label: 'Costo de adquisición (CAC)' },
      { value: '+40%', label: 'Tasa de checkout completado' },
    ],
    process: [
      { title: '1. Auditoría UX', desc: 'Mapeamos el viaje de compra y detectamos los puntos exactos de abandono.' },
      { title: '2. Rediseño', desc: 'Optimizamos ficha de producto, carrito y checkout para reducir fricción.' },
      { title: '3. Automatización', desc: 'Conectamos la recuperación de carritos con email y SMS.' },
      { title: '4. Escalado', desc: 'Escalamos el tráfico pagado al validar la rentabilidad de la nueva experiencia.' },
    ],
    testimonial: {
      quote:
        'El rediseño del flujo de compra cambió por completo nuestras métricas. Pasamos de perder dinero a escalar con un ROAS sostenido.',
      author: 'Lucía Ferrer',
      role: 'Directora de Ecommerce, Aurora Fashion',
    },
  },
  {
    slug: 'nortwind-logistics',
    service: 'seo',
    client: 'Nortwind Logistics',
    industry: 'Logística B2B',
    result: '+214%',
    metric: 'Tráfico orgánico en 6 meses',
    description:
      'Construimos una estrategia de contenido y autoridad técnica que llevó al sitio de la página 3 a la primera posición en las palabras clave más rentables de su sector.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop',
    challenge:
      'Nortwind dependía casi por completo del tráfico de pago. Su web tenía problemas técnicos graves, contenido escaso y una autoridad de dominio que impedía competir por términos transaccionales.',
    solution:
      'Desarrollamos una estrategia SEO integral: auditoría técnica, arquitectura de contenidos orientada a intención comercial y un plan de link building de autoridad que multiplicó su visibilidad orgánica.',
    problems: [
      'Dependencia total del tráfico de pago.',
      'Problemas técnicos: tiempos de carga, indexación y Core Web Vitals.',
      'Contenido escaso y sin intención comercial.',
      'Autoridad de dominio demasiado baja para competir.',
    ],
    actions: [
      'Saneamiento técnico: velocidad, estructura y eliminación de contenido huérfano.',
      'Cluster de contenidos por cada servicio y zona de cobertura.',
      'Link building de autoridad con medios del sector logístico.',
      'Optimización de intención comercial para términos de alta conversión.',
    ],
    metrics: [
      { value: '+214%', label: 'Tráfico orgánico' },
      { value: '38', label: 'Keywords en Top 3' },
      { value: '6x', label: 'Leads orgánicos' },
    ],
    process: [
      { title: '1. Auditoría técnica', desc: 'Detectamos los bloqueos de indexación, velocidad y estructura del sitio.' },
      { title: '2. Arquitectura de contenido', desc: 'Diseñamos clusters por servicio e intención de búsqueda.' },
      { title: '3. Autoridad', desc: 'Ejecutamos un plan de enlaces de calidad en el sector.' },
      { title: '4. Optimización continua', desc: 'Iteramos el contenido con datos de posicionamiento y conversión.' },
    ],
    testimonial: {
      quote:
        'Los leads orgánicos se multiplicaron y hoy son la fuente principal de nuestro pipeline. La inversión en SEO se pagó sola en pocos meses.',
      author: 'Andrés Gutiérrez',
      role: 'Director de Marketing, Nortwind Logistics',
    },
  },
  {
    slug: 'vital-clinics',
    service: 'seo',
    client: 'Vital Clinics',
    industry: 'Salud / Clínicas',
    result: '7.2x',
    metric: 'Reservas orgánicas',
    description:
      'Posicionamos las clínicas en las búsquedas locales más competidas de su ciudad, pasando a dominar el pack local y triplicar las reservas vía web.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop',
    challenge:
      'Vital Clinics tenía una presencia web mínima frente a cadenas con mucho presupuesto. No aparecía en el pack local y sus fichas de Google estaban mal optimizadas.',
    solution:
      'Ejecutamos una estrategia de SEO local: optimización de Google Business Profile, generación de reseñas y contenido orientado a servicios médicos con páginas por especialidad.',
    problems: [
      'Ausencia total del pack local en búsquedas clave.',
      'Fichas de Google sin optimizar y reseñas inconsistentes.',
      'Página por especialidad inexistente o duplicada.',
      'Sin datos estructurados de médico ni de horario.',
    ],
    actions: [
      'Optimización integral de Google Business Profile por sede.',
      'Sistema de captación y gestión de reseñas locales.',
      'Creación de landing pages por especialidad y zona.',
      'Datos estructurados de localización y profesionales.',
    ],
    metrics: [
      { value: '7.2x', label: 'Reservas orgánicas' },
      { value: 'Top 3', label: 'Pack local' },
      { value: '+260', label: 'Reseñas verificadas' },
    ],
    process: [
      { title: '1. Backlinks y fichas', desc: 'Auditamos el SEO local y las menciones de las sedes.' },
      { title: '2. Google Profile', desc: 'Optimizamos categorías, servicios, fotos y horarios de cada sede.' },
      { title: '3. Reseñas', desc: 'Implementamos un flujo para generar reseñas verificadas de forma continua.' },
      { title: '4. Landing locales', desc: 'Lanzamos páginas por especialidad y zona con datos estructurados.' },
    ],
    testimonial: {
      quote:
        'Pasamos de ser invisibles a dominar el pack local. Hoy las reservas por web superan con creces a las de pago.',
      author: 'Dra. Patricia Solano',
      role: 'Gerente General, Vital Clinics',
    },
  },
  {
    slug: 'pebble-realty',
    service: 'ads',
    client: 'Pebble Realty',
    industry: 'Inmobiliaria',
    result: '-63%',
    metric: 'Costo por lead convertido',
    description:
      'Rediseñamos por completo la cuenta de Meta Ads: audiencias, creativos y embudo— para captar leads inmobiliarios de alta intención a una fracción del costo.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop',
    challenge:
      'Pebble quemaba presupuesto en audiencias frías y creativos genéricos. Sus leads eran de baja calidad, los agentes perdían tiempo y el costo por contacto subía cada mes.',
    solution:
      'Diseñamos una estrategia de ads orientada a la intención: campañas de captura por inventario, creativos inmersivos y un sistema de calificación y puntuación de leads para los agentes.',
    problems: [
      'Leads de baja intención que no se concretaban en visitas.',
      'Costo por lead ascendente y presupuesto desaprovechado.',
      'Creativos genéricos sin diferenciación en el feed.',
      'Sin calificación automática de leads para el equipo.',
    ],
    actions: [
      'Reestructuración de la cuenta por interés y etapa del embudo.',
      'Creativos inmersivos: tours virtuales y testimonios en video.',
      'Formularios instantáneos con preguntas de calificación.',
      'Sistema de puntuación que prioriza los leads al agente.',
    ],
    metrics: [
      { value: '-63%', label: 'Costo por lead convertido' },
      { value: '4.9x', label: 'ROAS en campañas' },
      { value: '+85%', label: 'Leads calificados' },
    ],
    process: [
      { title: '1. Auditoría de cuenta', desc: 'Mapeamos estructura, audiencias y resultados históricos.' },
      { title: '2. Reestructuración', desc: 'Dividimos campañas por inventario real y etapa del embudo.' },
      { title: '3. Creatividad', desc: 'Producimos creativos inmersivos y variantes de copy.' },
      { title: '4. Escalado', desc: 'Escalamos las combinaciones ganadoras mientras bajamos el CPL.' },
    ],
    testimonial: {
      quote:
        'Los agentes dejaron de perseguir leads fríos. Cada consulta llega precalificada, y el costo bajó a una fracción de lo que era.',
      author: 'Sofía Aguirre',
      role: 'Head of Growth, Pebble Realty',
    },
  },
  {
    slug: 'dailybite',
    service: 'ads',
    client: 'DailyBite',
    industry: 'DTC / Alimentos',
    result: '6.3x',
    metric: 'ROAS de retención',
    description:
      'Lanzamos y escalamos las campañas de adquisición de un DTC de alimentación saludable, llevando el ROAS de retención por encima de 6 con un crecimiento sostenido.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop',
    challenge:
      'DailyBite lanzaba sus pedidos por suscripción sin una estrategia clara de adquisición. El ROAS inicial era bajo y no podían escalar de forma rentable.',
    solution:
      'Diseñamos un sistema de ads de adquisición con ofertas de prueba, segmentación por comportamiento y creativos de producto en alta definición que dispararon la retención de pedidos.',
    problems: [
      'ROAS de adquisición por debajo de 1.5.',
      'Ofertas poco claras que no motivaban la prueba inicial.',
      'Segmentación genérica sin mirar comportamiento de compra.',
      'Sin estrategia de duplicación de ganadores.',
    ],
    actions: [
      'Lanzamiento de ofertas de prueba con alto valor percibido.',
      'Segmentación por comportamiento y lookalikes de compradores.',
      'Creativos de producto en alimentación de alta conversión.',
      'Estructura de duplicación para escalar ganadores constantemente.',
    ],
    metrics: [
      { value: '6.3x', label: 'ROAS de retención' },
      { value: '+120%', label: 'Pedidos en suscripción' },
      { value: '-41%', label: 'CPM efectivo' },
    ],
    process: [
      { title: '1. Oferta', desc: 'Definimos la oferta de prueba y el ángulo principal.' },
      { title: '2. Estructura', desc: 'Montamos la cuenta con campañas de adquisición y retención.' },
      { title: '3. Creatividad', desc: 'Producimos creativos de producto de alto impacto.' },
      { title: '4. Escalado', desc: 'Identificamos y escalamos las combinaciones ganadoras.' },
    ],
    testimonial: {
      quote:
        'Finalmente pudimos escalar de forma rentable. Cada dólar invertido trabaja dos y tres veces, y la suscripción no deja de crecer.',
      author: 'Ignacio Reyes',
      role: 'Fundador, DailyBite',
    },
  },
];

export function getCasesByService(service: ServiceCase['service']): ServiceCase[] {
  return serviceCases.filter((c) => c.service === service);
}

export function getCaseBySlug(slug: string): ServiceCase | undefined {
  return serviceCases.find((c) => c.slug === slug);
}
