export const site = {
  name: 'Croilab',
  slogan: 'Ingeniería de conversiones digitales',
  description:
    'Diseñamos sistemas digitales donde estrategia, tecnología y adquisición trabajan juntos para transformar tráfico en clientes.',
  url: 'https://croilab.com',
  email: 'hola@croilab.com',
  whatsappNumber: '573000000000',
  whatsappMessage: 'Hola Croilab, quiero un diagnóstico gratuito de mi negocio.',
};

export function whatsappLink(): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
}
