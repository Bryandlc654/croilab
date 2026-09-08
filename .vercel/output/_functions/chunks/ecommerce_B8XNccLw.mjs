import { n as __exportAll, t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { i as getWpServiceBySlug, s as getWpTestimonials } from "./wp_I0wGGDjU.mjs";
import { S as unescapeHTML, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_Yceqtf1X.mjs";
import { a as renderScript, i as $$Container, t as $$BaseLayout } from "./BaseLayout_CUM04enh.mjs";
import { t as $$Breadcrumb } from "./Breadcrumb_CM0NWSvp.mjs";
import { t as $$Cta } from "./Cta_Dahp83yV.mjs";
import { n as $$MarqueeTestimonials, r as $$Calculator, t as $$ServiceHub } from "./ServiceHub_B-EMMzcx.mjs";
import { t as $$ServiceStats } from "./ServiceStats_C4qXQpVW.mjs";
import { t as $$CaseStudiesCarousel } from "./CaseStudiesCarousel_DQu4bqql.mjs";
//#region src/pages/ecommerce.astro
var ecommerce_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Ecommerce,
	file: () => $$file,
	url: () => $$url
});
var $$Ecommerce = createComponent(async ($$result, $$props, $$slots) => {
	let serviceData = null;
	let dynamicTestimonials = [];
	let heroBg = "";
	try {
		const service = await getWpServiceBySlug("ecommerce");
		if (service) {
			serviceData = service.croilab_servicio;
			if (service._embedded?.["wp:featuredmedia"]) heroBg = service._embedded["wp:featuredmedia"][0].source_url;
		}
		dynamicTestimonials = (await getWpTestimonials({ per_page: "100" })).items.filter((t) => t.croilab_testimonio?.related_service === "ecommerce").map((t) => ({
			quote: t.croilab_testimonio?.quote || t.title?.rendered,
			name: t.croilab_testimonio?.author,
			role: t.croilab_testimonio?.role,
			rating: parseInt(t.croilab_testimonio?.stars || "5", 10),
			avatar: t.croilab_testimonio?.avatar
		}));
	} catch (e) {
		console.error("Error fetching dynamic service data:", e);
	}
	const ecommerceCases = [
		{
			name: "Aurora Fashion",
			tags: [
				"Shopify",
				"CRO",
				"Funnel"
			],
			image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
			metrics: [{
				value: "5.8x",
				label: "ROAS sostenido"
			}, {
				value: "+150%",
				label: "Ventas online"
			}],
			slug: "/proyectos"
		},
		{
			name: "Nova Market",
			tags: [
				"Checkout",
				"Abandono",
				"Automatización"
			],
			image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
			metrics: [{
				value: "-71%",
				label: "Abandono de carrito"
			}, {
				value: "+92%",
				label: "Ticket promedio"
			}],
			slug: "/proyectos"
		},
		{
			name: "Bloom Store",
			tags: [
				"Shopify Plus",
				"SEO",
				"Rendimiento"
			],
			image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
			metrics: [{
				value: "3.5%",
				label: "Tasa de conversión"
			}, {
				value: "<1s",
				label: "Tiempo de carga"
			}],
			slug: "/proyectos"
		},
		{
			name: "Peak Sports",
			tags: [
				"E-commerce",
				"Pagos",
				"Regional"
			],
			image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2000&auto=format&fit=crop",
			metrics: [{
				value: "+210%",
				label: "Pedidos al mes"
			}, {
				value: "+38%",
				label: "Clientes recurrentes"
			}],
			slug: "/proyectos"
		},
		{
			name: "Vela Home",
			tags: [
				"D2C",
				"Email",
				"Retención"
			],
			image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop",
			metrics: [{
				value: "+125%",
				label: "LTV promedio"
			}, {
				value: "+64%",
				label: "Recompra"
			}],
			slug: "/proyectos"
		}
	];
	const ecommerceTestimonials = [
		{
			quote: "Teníamos visitas, pero un abandono de carrito del 80%. Ellos arreglaron el flujo de checkout y las ventas se duplicaron.",
			name: "Valeria M.",
			role: "Founder, Fashion Retail",
			rating: 5
		},
		{
			quote: "Migramos a Shopify con su rediseño UX y fue un éxito. La tasa de conversión pasó del 1.2% al 3.5% en semanas.",
			name: "Roberto T.",
			role: "CEO, Tech Store",
			rating: 5
		},
		{
			quote: "No solo hacen tiendas hermosas, entienden perfectamente la psicología detrás de por qué la gente compra.",
			name: "Elena C.",
			role: "CMO, Beauty Brand",
			rating: 5
		},
		{
			quote: "La optimización técnica que implementaron nos salvó en Black Friday. Vendimos un 200% más sin caídas.",
			name: "Martín S.",
			role: "Director de Operaciones",
			rating: 5
		},
		{
			quote: "El ROI se pagó solo en el primer mes gracias a la estrategia de upselling nativa que nos integraron en el carrito.",
			name: "Jorge F.",
			role: "Ecommerce Manager",
			rating: 5
		},
		{
			quote: "Nuestra tienda por fin proyecta la calidad real de nuestros productos. Literalmente elevó el valor percibido de la marca.",
			name: "Andrea L.",
			role: "Founder, Joyería",
			rating: 5
		}
	];
	const wpEndpoint = "https://darkblue-flamingo-706734.hostingersite.com/wp-json/wp/v2/pages?slug=ecommerce";
	let rankMathSEO = null;
	try {
		const res = await fetch(wpEndpoint);
		if (res.ok) {
			const pages = await res.json();
			if (pages && pages.length > 0) rankMathSEO = pages[0].rank_math_head || null;
		}
	} catch (e) {
		console.error("Error fetching SEO:", e);
	}
	dynamicTestimonials.length;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Desarrollo y CRO para Ecommerce | Croilab",
		"description": "Transforma tu tienda online en una máquina de ventas de alta conversión. Optimizamos Shopify y WooCommerce para maximizar tus ingresos.",
		"rankMathSEO": rankMathSEO,
		"data-astro-cid-yry3nrff": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#050505]" data-astro-cid-yry3nrff><!-- Imagen de fondo con textura y degradado vertical --><div class="absolute inset-0 z-0 pointer-events-none" data-astro-cid-yry3nrff><img${addAttribute(heroBg || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", "src")} alt="E-commerce and Online Shopping" class="w-full h-full object-cover object-top opacity-20 grayscale mix-blend-luminosity" data-astro-cid-yry3nrff><!-- Degradado vertical: Oscuro abajo (100%), Transparente arriba (0%) --><div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" data-astro-cid-yry3nrff></div><!-- Grid Arquitectónico superpuesto --><div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" data-astro-cid-yry3nrff></div><!-- Ruido (Grain) para textura premium --><div class="absolute inset-0 opacity-[0.25] mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');" data-astro-cid-yry3nrff></div></div><!-- Luces de fondo dinámicas (Verde Shopify / Comercio) --><div class="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] pointer-events-none z-0" data-astro-cid-yry3nrff></div><div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none z-0" data-astro-cid-yry3nrff></div>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10 pt-40 pb-20 lg:pt-48 lg:pb-32",
		"data-astro-cid-yry3nrff": true
	}, { "default": ($$result) => renderTemplate`<div class="mb-14" data-astro-cid-yry3nrff>${renderComponent($$result, "Breadcrumb", $$Breadcrumb, {
		"items": [{
			label: "Servicios",
			href: "/#servicios"
		}, { label: "Ecommerce" }],
		"data-astro-cid-yry3nrff": true
	})}</div><div class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center" data-astro-cid-yry3nrff><!-- Izquierda: Textos --><div class="flex flex-col text-left" data-astro-cid-yry3nrff><h1 class="gsap-title max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-bold leading-[0.9] tracking-tight text-white mb-8" data-custom-speed="0.8" data-astro-cid-yry3nrff>${serviceData?.hero?.title || `Tu tienda online no es un catálogo. Es una <br/>`}<span class="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-white/30" data-astro-cid-yry3nrff>${serviceData?.hero?.highlight || `máquina de ventas.`}</span></h1><p class="max-w-xl text-[17px] md:text-[19px] leading-relaxed text-white/50 mb-12" data-astro-cid-yry3nrff>${serviceData?.hero?.intro || `Las plantillas de Shopify no escalan solas. Diseñamos, programamos y optimizamos ecosistemas de comercio electrónico creados exclusivamente para reducir la fricción y multiplicar tu Ticket Promedio (AOV).`}</p><div class="flex flex-col sm:flex-row items-start gap-5" data-astro-cid-yry3nrff><a href="#metodologia" class="magnetic group relative flex items-center justify-center gap-4 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] w-full sm:w-auto" data-astro-cid-yry3nrff>Descubrir metodología<span class="inline-block transition-transform duration-300 group-hover:translate-y-1" data-astro-cid-yry3nrff>â†“</span></a><a href="/contacto" class="magnetic group flex items-center justify-center gap-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 w-full sm:w-auto" data-astro-cid-yry3nrff>Quiero trabajar así</a></div></div><!-- Derecha: Mockup Animado E-commerce --><div class="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/4.5] flex items-center justify-center perspective-1000 mt-10 lg:mt-0" data-astro-cid-yry3nrff><!-- Glow de fondo cinemático --><div class="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-emerald-600/10 to-transparent rounded-[100px] blur-[120px] animate-glowDrift mix-blend-screen pointer-events-none" data-astro-cid-yry3nrff></div><!-- Interfaz Principal (Navegador Móvil/App E-commerce) --><div class="relative w-full max-w-[360px] rounded-[32px] bg-[#0c0c0e]/95 backdrop-blur-2xl border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden animate-float" data-astro-cid-yry3nrff><!-- Contenido Ecommerce Mockup --><div class="relative min-h-[500px] bg-gradient-to-b from-[#050505] to-[#111115] p-5 flex flex-col items-center overflow-hidden" data-astro-cid-yry3nrff><!-- Top Bar (Mobile Style) --><div class="w-full flex items-center justify-between mb-6 pt-2" data-astro-cid-yry3nrff><div class="w-6 h-6 rounded flex items-center justify-center" data-astro-cid-yry3nrff><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" data-astro-cid-yry3nrff><line x1="3" y1="12" x2="21" y2="12" data-astro-cid-yry3nrff></line><line x1="3" y1="6" x2="21" y2="6" data-astro-cid-yry3nrff></line><line x1="3" y1="18" x2="21" y2="18" data-astro-cid-yry3nrff></line></svg></div><div class="text-[14px] font-bold text-white tracking-widest uppercase" data-astro-cid-yry3nrff>BRAND.</div><div class="relative w-6 h-6 rounded flex items-center justify-center" data-astro-cid-yry3nrff><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" data-astro-cid-yry3nrff><circle cx="9" cy="21" r="1" data-astro-cid-yry3nrff></circle><circle cx="20" cy="21" r="1" data-astro-cid-yry3nrff></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" data-astro-cid-yry3nrff></path></svg><div class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full text-[8px] font-bold text-white flex items-center justify-center" data-astro-cid-yry3nrff>2</div></div></div><!-- Galería del Producto --><div class="w-full aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center group" data-astro-cid-yry3nrff><div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" data-astro-cid-yry3nrff></div><div class="w-32 h-32 rounded-full bg-green-500/20 blur-[40px] absolute" data-astro-cid-yry3nrff></div><!-- Abstract Product Shape --><img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop" class="w-3/4 h-3/4 object-contain mix-blend-screen relative z-10 transition-transform duration-500 group-hover:scale-110" alt="Headphones Product" data-astro-cid-yry3nrff><div class="absolute top-3 left-3 bg-white text-black text-[9px] font-bold px-2 py-1 rounded-full" data-astro-cid-yry3nrff>BESTSELLER</div></div><!-- Detalles del Producto --><div class="w-full text-left flex flex-col relative z-10" data-astro-cid-yry3nrff><div class="flex items-center gap-2 mb-2" data-astro-cid-yry3nrff><span class="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20" data-astro-cid-yry3nrff>En Stock</span><div class="flex items-center gap-0.5" data-astro-cid-yry3nrff><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="text-yellow-400" data-astro-cid-yry3nrff><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-yry3nrff></polygon></svg><span class="text-[10px] text-white/50 ml-1" data-astro-cid-yry3nrff>4.9 (128)</span></div></div><h3 class="text-[20px] font-bold text-white leading-tight mb-1" data-astro-cid-yry3nrff>Pro Studio Max</h3><p class="text-white/40 text-[12px] mb-4" data-astro-cid-yry3nrff>Auriculares inalámbricos de alta fidelidad con cancelación activa.</p><!-- Color Selector --><div class="mb-4" data-astro-cid-yry3nrff><div class="text-[10px] text-white/50 mb-2 font-medium" data-astro-cid-yry3nrff>Color: <span class="text-white" data-astro-cid-yry3nrff>Midnight Black</span></div><div class="flex gap-2" data-astro-cid-yry3nrff><div class="w-6 h-6 rounded-full bg-[#1a1a1a] border-2 border-green-400 ring-2 ring-transparent" data-astro-cid-yry3nrff></div><div class="w-6 h-6 rounded-full bg-[#e3e4e6] border-2 border-transparent hover:border-white/20 cursor-pointer" data-astro-cid-yry3nrff></div><div class="w-6 h-6 rounded-full bg-[#3b4158] border-2 border-transparent hover:border-white/20 cursor-pointer" data-astro-cid-yry3nrff></div></div></div><div class="flex items-end justify-between mb-5 mt-2" data-astro-cid-yry3nrff><div class="flex items-baseline gap-2" data-astro-cid-yry3nrff><div class="text-[26px] font-bold text-green-400" data-astro-cid-yry3nrff>$299<span class="text-[14px]" data-astro-cid-yry3nrff>.00</span></div><div class="text-[14px] text-white/30 line-through mb-1" data-astro-cid-yry3nrff>$399</div></div></div><!-- CTA Comprar --><button class="w-full py-3.5 bg-green-500 hover:bg-green-400 rounded-xl text-[13px] font-bold text-[#050505] shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center gap-2 group relative overflow-hidden" data-astro-cid-yry3nrff><div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" data-astro-cid-yry3nrff></div><span class="relative z-10" data-astro-cid-yry3nrff>Añadir al carrito</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="relative z-10 transition-transform group-hover:translate-x-1" data-astro-cid-yry3nrff><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-yry3nrff></path></svg></button></div><!-- Notificación animada (Simulando conversión real) --><div class="absolute bottom-24 left-1/2 -translate-x-1/2 w-[85%] bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2.5 flex items-center gap-3 shadow-2xl opacity-0 animate-[float_4s_ease-in-out_infinite,shimmer_5s_infinite] pointer-events-none" style="animation: fadeInUp 0.5s ease-out 2s forwards;" data-astro-cid-yry3nrff><div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0" data-astro-cid-yry3nrff><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-yry3nrff><polyline points="20 6 9 17 4 12" data-astro-cid-yry3nrff></polyline></svg></div><div class="text-left" data-astro-cid-yry3nrff><div class="text-[10px] font-bold text-white" data-astro-cid-yry3nrff>¡Añadido con éxito!</div><div class="text-[9px] text-white/70" data-astro-cid-yry3nrff>Tu carrito se ha actualizado.</div></div></div></div></div><!-- Floating Badges --><div class="absolute -right-4 lg:-right-10 top-1/4 bg-[#111115]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float-delayed z-20 flex flex-col gap-1" data-astro-cid-yry3nrff><div class="text-[10px] font-bold uppercase tracking-wider text-white/50 flex items-center gap-2" data-astro-cid-yry3nrff><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400" data-astro-cid-yry3nrff><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" data-astro-cid-yry3nrff></polyline></svg>Checkout Conv.</div><div class="text-2xl font-bold text-white mt-1" data-astro-cid-yry3nrff>4.2%</div><div class="text-[10px] text-green-400 font-medium" data-astro-cid-yry3nrff>+1.5% vs. anterior</div></div><div class="absolute -left-6 lg:-left-12 bottom-1/3 bg-[#111115]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float z-20" style="animation-delay: 1.5s;" data-astro-cid-yry3nrff><div class="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1" data-astro-cid-yry3nrff>Ticket Promedio (AOV)</div><div class="text-2xl font-bold text-green-400" data-astro-cid-yry3nrff>$185.00</div></div></div></div>` })}</section>${renderComponent($$result, "ServiceStats", $$ServiceStats, { "data-astro-cid-yry3nrff": true })}<section class="relative bg-[#f8f9fa] py-32 border-t border-black/5" data-astro-cid-yry3nrff>${renderComponent($$result, "Container", $$Container, { "data-astro-cid-yry3nrff": true }, { "default": ($$result) => renderTemplate`<div class="text-center max-w-3xl mx-auto mb-16" data-astro-cid-yry3nrff><span class="text-[11px] font-semibold uppercase tracking-[.25em] text-black/40 mb-6 block" data-astro-cid-yry3nrff>Diagnóstico del Funnel</span><h2 class="gsap-title text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight text-black mb-6 leading-tight" data-astro-cid-yry3nrff>¿Tu tienda pierde dinero por culpa de la plataforma?</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-yry3nrff>${[
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
			title: "Checkouts Lentos",
			desc: "La tienda tarda mil años en cargar y cuando el cliente quiere pagar, el proceso es tan frustrante que abandona la compra."
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
			title: "Abandono Masivo",
			desc: "Tus usuarios agregan productos al carrito entusiasmados, pero más del 70% desaparece en la página de pago sin dejar rastro."
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
			title: "Ticket Promedio Bajo",
			desc: "Tus clientes solo compran un producto barato, nunca agregan complementos y rara vez regresan a comprar una segunda vez."
		}
	].map((s) => renderTemplate`<div data-spotlight class="bg-white p-10 rounded-[2rem] border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]" data-astro-cid-yry3nrff><div class="relative z-10 mb-6 grayscale opacity-80" data-astro-cid-yry3nrff>${unescapeHTML(s.icon)}</div><h3 class="relative z-10 text-xl font-bold text-black mb-4" data-astro-cid-yry3nrff>${s.title}</h3><p class="relative z-10 text-[15px] leading-relaxed text-black/60" data-astro-cid-yry3nrff>${s.desc}</p><div class="spotlight-glow" data-astro-cid-yry3nrff></div></div>`)}</div>` })}</section><section class="relative bg-white py-32 lg:py-48 border-t border-black/5 pt-10" data-astro-cid-yry3nrff>${renderComponent($$result, "Container", $$Container, { "data-astro-cid-yry3nrff": true }, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-astro-cid-yry3nrff><div data-astro-cid-yry3nrff><h2 class="gsap-title text-4xl lg:text-6xl font-bold tracking-tight text-black mb-8 leading-[1.1]" data-custom-speed="0.9" data-astro-cid-yry3nrff>El mejor producto del mundo no se venderá si tu tienda <span class="text-black/30 line-through" data-astro-cid-yry3nrff>lo oculta.</span></h2><div class="space-y-6 text-[16px] leading-relaxed text-black/60" data-astro-cid-yry3nrff><p data-astro-cid-yry3nrff>La mayoría de las tiendas online son hermosos laberintos donde es imposible comprar rápido. Si tu web no recomienda productos inteligentemente (Up-sells) o si obliga al usuario a llenar formularios interminables, estás regalando tus ventas a Amazon.</p><p data-astro-cid-yry3nrff>En Croilab desarrollamos Ecommerces basados en la fricción cero. Implementamos pagos en 1-clic (Apple Pay, Google Pay), buscadores inteligentes y estrategias post-compra para exprimir la rentabilidad de cada visita.</p></div></div><div class="relative group" data-astro-cid-yry3nrff><div class="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-[2.5rem] border border-black/10 transition-colors duration-500 group-hover:border-black/20" data-astro-cid-yry3nrff></div><div class="relative flex flex-col h-full overflow-hidden rounded-[2.5rem] bg-[#fbfbfb]" data-astro-cid-yry3nrff><div class="p-10 pb-0" data-astro-cid-yry3nrff><div class="text-7xl font-bold text-black mb-4" data-astro-cid-yry3nrff><span class="roi-count" data-target="68" data-astro-cid-yry3nrff>0</span>%</div><p class="text-lg text-black/60 mb-10" data-astro-cid-yry3nrff>de las compras en línea fracasan porque la tienda no genera confianza, el checkout es demasiado complejo o la web tarda más de 3 segundos en cargar.</p></div><!-- MOCKUP ECOMMERCE --><div class="relative w-full h-[300px] mt-auto overflow-hidden bg-black/5" data-astro-cid-yry3nrff><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop" alt="Ecommerce Mockup" class="absolute inset-0 w-full h-full object-cover object-top opacity-80 mix-blend-multiply filter contrast-125 saturate-50 transition-transform duration-700 group-hover:scale-105" data-astro-cid-yry3nrff><div class="absolute inset-0 bg-gradient-to-t from-[#fbfbfb] via-transparent to-transparent" data-astro-cid-yry3nrff></div></div></div></div></div>` })}</section><section id="metodologia" class="relative bg-white py-32 border-t border-black/5" data-astro-cid-yry3nrff>${renderComponent($$result, "Container", $$Container, { "data-astro-cid-yry3nrff": true }, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 relative items-start" data-astro-cid-yry3nrff><div class="lg:sticky lg:top-40 flex flex-col gap-12" data-astro-cid-yry3nrff><div data-astro-cid-yry3nrff><span class="text-[11px] font-semibold uppercase tracking-[.25em] text-black/40 mb-6 block" data-astro-cid-yry3nrff>Desarrollo Orientado a Conversión</span><h2 class="gsap-title text-[clamp(3rem,5vw,5rem)] font-bold leading-[1] tracking-tight text-black mb-6" data-custom-speed="0.95" data-astro-cid-yry3nrff>Arquitectura <br data-astro-cid-yry3nrff><span class="italic font-serif font-normal text-black/40" data-astro-cid-yry3nrff>de Comercio.</span></h2><p class="text-[16px] leading-relaxed text-black/60 max-w-sm" data-astro-cid-yry3nrff>Una tienda no es solo un catálogo, es un vendedor que trabaja 24/7. Lo programamos para que venda más caro y más rápido.</p></div><div class="relative w-full aspect-square max-w-sm rounded-[2.5rem] overflow-hidden bg-black/5 border border-black/10 group" data-astro-cid-yry3nrff><img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000&auto=format&fit=crop" alt="Compras online" class="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" data-astro-cid-yry3nrff><div class="absolute inset-0 border-[4px] border-white/50 rounded-[2.5rem] m-4 pointer-events-none" data-astro-cid-yry3nrff></div></div></div><div class="flex flex-col gap-12" data-astro-cid-yry3nrff>${[
		{
			title: "Velocidad y Arquitectura (Headless)",
			desc: "Amazon descubrió que cada 100ms de retraso les cuesta 1% en ventas. Construimos tiendas ultra-rápidas para que la velocidad nunca sea el motivo de una venta perdida."
		},
		{
			title: "UX para Ecommerce (Fricción Cero)",
			desc: "Jerarquía visual clara, botones de añadir al carrito siempre visibles, buscadores inteligentes y pagos en un solo toque (Apple Pay, Google Pay) para comprar por impulso."
		},
		{
			title: "Sistemas de AOV (Ticket Promedio)",
			desc: "Integramos lógica de 'Frecuentemente comprados juntos' (Cross-sell), Up-sells post-compra y paquetes (Bundles) para exprimir cada dólar de la visita."
		},
		{
			title: "Retención (Email & SMS Automations)",
			desc: "El verdadero negocio del Ecommerce es la recompra. Configuramos flujos automatizados de carritos abandonados, bienvenidas y reactivación de clientes."
		}
	].map((step, i) => renderTemplate`<div data-spotlight class="step-card group relative p-10 rounded-[2rem] border border-black/5 bg-[#f8f9fa] shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all hover:bg-white hover:border-black/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]" data-astro-cid-yry3nrff><div class="text-[80px] font-bold text-black/[0.03] absolute top-4 right-8 select-none transition-all group-hover:text-black/[0.06] font-serif italic" data-astro-cid-yry3nrff>0${i + 1}</div><h3 class="relative z-10 text-2xl font-semibold text-black mb-4" data-astro-cid-yry3nrff>${step.title}</h3><p class="relative z-10 text-[15px] leading-relaxed text-black/60" data-astro-cid-yry3nrff>${step.desc}</p><div class="spotlight-glow" data-astro-cid-yry3nrff></div></div>`)}</div></div>` })}</section><section class="relative bg-[#fbfbfb] py-32 lg:py-48 border-t border-black/5 overflow-hidden" data-astro-cid-yry3nrff><div class="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" data-astro-cid-yry3nrff></div><div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" data-astro-cid-yry3nrff></div>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10 text-center",
		"data-astro-cid-yry3nrff": true
	}, { "default": ($$result) => renderTemplate`<h2 class="gsap-title text-[clamp(3rem,5vw,5rem)] font-bold tracking-tight text-black mb-16" data-custom-speed="0.85" data-astro-cid-yry3nrff>Ventas y márgenes. <br data-astro-cid-yry3nrff><span class="italic font-serif font-normal text-black/50" data-astro-cid-yry3nrff>En piloto automático.</span></h2><div data-tilt="5" class="relative mx-auto max-w-5xl aspect-[16/10] md:aspect-[21/9] mb-20 rounded-[2.5rem] overflow-hidden bg-[#111] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-black/10 group" data-astro-cid-yry3nrff><img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2000&auto=format&fit=crop" alt="Ecommerce Dashboard" class="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" data-astro-cid-yry3nrff><div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" data-astro-cid-yry3nrff></div><div class="absolute bottom-6 left-6 md:bottom-10 md:left-10 p-4 md:p-6 rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl border border-black/5 flex items-center gap-4 md:gap-6 animate-pulse-slow transition-transform hover:scale-105" data-astro-cid-yry3nrff><div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold text-lg md:text-xl" data-astro-cid-yry3nrff><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-yry3nrff><line x1="12" y1="19" x2="12" y2="5" data-astro-cid-yry3nrff></line><polyline points="5 12 12 5 19 12" data-astro-cid-yry3nrff></polyline></svg></div><div class="text-left" data-astro-cid-yry3nrff><div class="text-[10px] md:text-sm font-bold text-black uppercase tracking-wider" data-astro-cid-yry3nrff>Ticket Promedio (AOV)</div><div class="text-xl md:text-2xl font-black text-black" data-astro-cid-yry3nrff>+35% este mes</div></div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-yry3nrff><div data-spotlight class="p-10 rounded-[2.5rem] bg-white border border-black/10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2" data-astro-cid-yry3nrff><div class="relative z-10 text-5xl font-bold text-black mb-2" data-astro-cid-yry3nrff>+<span class="roi-count" data-target="40" data-astro-cid-yry3nrff>0</span>%</div><div class="relative z-10 text-[13px] uppercase tracking-widest text-black/40 font-bold" data-astro-cid-yry3nrff>Tasa de Conversión Base</div><div class="spotlight-glow" data-astro-cid-yry3nrff></div></div><div data-spotlight class="p-10 rounded-[2.5rem] bg-black text-white border border-black/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform md:-translate-y-6 transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:-translate-y-8" data-astro-cid-yry3nrff><div class="relative z-10 text-6xl font-bold text-white mb-2" data-astro-cid-yry3nrff>-<span class="roi-count" data-target="50" data-astro-cid-yry3nrff>0</span>%</div><div class="relative z-10 text-[13px] uppercase tracking-widest text-white/80 font-bold" data-astro-cid-yry3nrff>Reducción de Carritos Abandonados</div><div class="spotlight-glow" data-astro-cid-yry3nrff></div></div><div data-spotlight class="p-10 rounded-[2.5rem] bg-white border border-black/10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2" data-astro-cid-yry3nrff><div class="relative z-10 text-5xl font-bold text-black mb-2" data-astro-cid-yry3nrff><span class="roi-count" data-target="24" data-astro-cid-yry3nrff>0</span>/7</div><div class="relative z-10 text-[13px] uppercase tracking-widest text-black/40 font-bold" data-astro-cid-yry3nrff>Ventas Ininterrumpidas</div><div class="spotlight-glow" data-astro-cid-yry3nrff></div></div></div>` })}</section>${renderComponent($$result, "MarqueeTestimonials", $$MarqueeTestimonials, {
		"testimonials": ecommerceTestimonials,
		"data-astro-cid-yry3nrff": true
	})}${renderComponent($$result, "CaseStudiesCarousel", $$CaseStudiesCarousel, {
		"projects": ecommerceCases,
		"data-astro-cid-yry3nrff": true
	})}${renderComponent($$result, "Calculator", $$Calculator, {
		"mode": "ecommerce",
		"data-astro-cid-yry3nrff": true
	})}<section class="relative bg-white py-32 lg:py-40 border-t border-black/5" data-astro-cid-yry3nrff>${renderComponent($$result, "Container", $$Container, { "data-astro-cid-yry3nrff": true }, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start relative" data-astro-cid-yry3nrff><div class="lg:sticky lg:top-40" data-astro-cid-yry3nrff><span class="text-[11px] font-semibold uppercase tracking-[.25em] text-black/40 mb-6 block" data-astro-cid-yry3nrff>Transparencia Radical</span><h2 class="gsap-title text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight text-black mb-6 leading-[1.1]" data-astro-cid-yry3nrff>Dudas frecuentes sobre Ecommerce.</h2><p class="text-[16px] leading-relaxed text-black/60 max-w-sm" data-astro-cid-yry3nrff>Crear una tienda sólida requiere decisiones técnicas correctas. Aquí respondemos las dudas más comunes.</p></div><div class="flex flex-col gap-6" data-astro-cid-yry3nrff>${[
		{
			q: "¿En qué plataformas desarrollan la tienda online?",
			a: "Trabajamos principalmente con Shopify (nuestra recomendación #1 por escalabilidad y estabilidad) y WooCommerce (si ya tienes un ecosistema en WordPress o necesitas customizaciones extremas sin pagos mensuales elevados)."
		},
		{
			q: "¿Se encargan de integrar métodos de envío y pago locales?",
			a: "Sí. Dejamos tu tienda lista para cobrar el mismo día del lanzamiento, integrando pasarelas como Stripe, PayPal, MercadoPago o cualquier otra que opere en tu país, junto con las tarifas de envío automatizadas."
		},
		{
			q: "Ya tengo una tienda pero no vende. ¿Hacen una nueva o arreglan la mía?",
			a: "Depende de la 'deuda técnica'. Si tu tienda está en una plataforma moderna pero mal estructurada, aplicamos CRO (Optimización de Conversiones) sin rehacerla. Si es demasiado lenta o el código es un desastre irrecuperable, recomendamos migrarla para sentar bases sólidas."
		}
	].map((faq) => renderTemplate`<div data-spotlight class="group bg-[#f8f9fa] p-8 md:p-10 rounded-[2rem] border border-black/5 transition-colors hover:bg-white hover:border-black/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)]" data-astro-cid-yry3nrff><h3 class="relative z-10 text-xl font-bold text-black mb-4 flex items-start gap-4" data-astro-cid-yry3nrff><span class="text-black/20 font-serif italic text-2xl leading-none pt-1 group-hover:text-black/40 transition-colors" data-astro-cid-yry3nrff>Q.</span>${faq.q}</h3><p class="relative z-10 text-[15px] leading-relaxed text-black/60 pl-8 md:pl-10" data-astro-cid-yry3nrff>${faq.a}</p><div class="spotlight-glow" data-astro-cid-yry3nrff></div></div>`)}</div></div>` })}</section>${renderComponent($$result, "ServiceHub", $$ServiceHub, {
		"current": "ecommerce",
		"data-astro-cid-yry3nrff": true
	})}${renderComponent($$result, "Cta", $$Cta, { "data-astro-cid-yry3nrff": true })}` })}${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/pages/ecommerce.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/pages/ecommerce.astro", void 0);
var $$file = "C:/Users/bdela/Desktop/Croilab/src/pages/ecommerce.astro";
var $$url = "/ecommerce";
//#endregion
//#region \0virtual:astro:page:src/pages/ecommerce@_@astro
var page = () => ecommerce_exports;
//#endregion
export { page };
