import { n as __exportAll, t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { i as getWpServiceBySlug, s as getWpTestimonials } from "./wp_I0wGGDjU.mjs";
import { S as unescapeHTML, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_Yceqtf1X.mjs";
import { a as renderScript, i as $$Container, t as $$BaseLayout } from "./BaseLayout_CUM04enh.mjs";
import { t as $$Breadcrumb } from "./Breadcrumb_CM0NWSvp.mjs";
import { t as $$Cta } from "./Cta_Dahp83yV.mjs";
import { n as $$MarqueeTestimonials, r as $$Calculator, t as $$ServiceHub } from "./ServiceHub_B-EMMzcx.mjs";
import { t as $$ServiceStats } from "./ServiceStats_C4qXQpVW.mjs";
import { t as $$CaseStudiesCarousel } from "./CaseStudiesCarousel_DQu4bqql.mjs";
//#region src/components/WebDesignMockup.astro
var $$WebDesignMockup = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="bg-[#050505] py-32 overflow-hidden border-t border-white/5 relative"><div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-glowDrift pointer-events-none"></div>${renderComponent($$result, "Container", $$Container, { "class": "text-center relative z-10" }, { "default": ($$result) => renderTemplate`<h2 class="text-white text-[clamp(2rem,3vw,3rem)] font-bold mb-4 tracking-tight">Diseños que cuentan historias, <br class="hidden md:block"><span class="italic font-serif font-light text-white/50">código que las vende.</span></h2><p class="text-white/50 text-lg mb-16 max-w-2xl mx-auto">Cada sitio web que producimos nace desde un sistema de diseño interno, con componentes medidos y animaciones estudiadas. Así se ve lo que construimos por dentro.</p><div id="web-mockup-container" class="relative w-full max-w-[1100px] mx-auto rounded-3xl border border-white/10 shadow-[0_0_100px_rgba(8,120,249,0.15)] overflow-hidden bg-[#0c0c0e] text-left"><!-- Topbar --><div class="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]"><div class="flex items-center gap-4"><div class="flex gap-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div><div class="h-5 w-px bg-white/10 mx-2"></div><div class="flex items-center gap-2 text-white/50 text-[11px] font-mono bg-white/5 px-2 py-1 rounded border border-white/5"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Buscar componentes, páginas, estilos...</div></div><div class="flex items-center gap-3"><div class="text-white/50 text-[11px] font-medium hidden sm:block">Diseño Sistema</div><div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10"><span class="text-white text-[12px] font-bold">DB</span></div></div></div><!-- Content --><div class="flex h-[680px]"><!-- Left Toolbar (Layers / Components) --><div class="w-56 border-r border-white/5 p-4 hidden md:flex flex-col gap-2 bg-[#0a0a0c]"><div class="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2 px-2 text-left">Componentes</div><div class="bg-blue-500/10 text-blue-400 text-[13px] font-medium p-3 rounded-lg flex items-center gap-3 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9h18M3 15h18M9 3v18M15 3v18"></path></svg>Hero Section</div><div class="text-white/60 hover:text-white hover:bg-white/5 transition text-[13px] font-medium p-3 rounded-lg flex items-center gap-3 cursor-pointer"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>Card Grid</div><div class="text-white/60 hover:text-white hover:bg-white/5 transition text-[13px] font-medium p-3 rounded-lg flex items-center gap-3 cursor-pointer"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h10M4 18h6"></path></svg>Navbar</div><div class="text-white/60 hover:text-white hover:bg-white/5 transition text-[13px] font-medium p-3 rounded-lg flex items-center gap-3 cursor-pointer"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>Forms</div><div class="text-white/60 hover:text-white hover:bg-white/5 transition text-[13px] font-medium p-3 rounded-lg flex items-center gap-3 cursor-pointer"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>Blog Cards</div><div class="text-[10px] uppercase tracking-widest text-white/30 font-bold mt-6 mb-2 px-2 text-left">Capas</div><div class="text-white/60 text-[12px] p-2 pl-6 rounded flex items-center gap-2"><span class="text-blue-400">●</span> Hero</div><div class="text-white/40 text-[12px] p-2 pl-6 rounded flex items-center gap-2 cursor-pointer"><span class="text-white/20">●</span> Testimonial</div><div class="text-white/40 text-[12px] p-2 pl-6 rounded flex items-center gap-2 cursor-pointer"><span class="text-white/20">●</span> CTA Final</div><!-- Color palette --><div class="mt-auto border-t border-white/5 pt-4"><div class="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-3 px-2 text-left">Paleta</div><div class="flex gap-2 px-2"><div class="w-8 h-8 rounded-lg bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]"></div><div class="w-8 h-8 rounded-lg bg-cyan-400"></div><div class="w-8 h-8 rounded-lg bg-white/10 border border-white/10"></div><div class="w-8 h-8 rounded-lg bg-white/5 border border-white/10"></div></div></div></div><!-- Canvas / Preview --><div class="flex-1 p-8 overflow-hidden relative flex items-center justify-center bg-[#08080a]"><!-- Browser preview --><div class="w-full max-w-[520px] rounded-2xl border border-white/10 overflow-hidden bg-[#0e0e11] shadow-2xl"><!-- Mini browser bar --><div class="h-10 bg-white/[0.03] border-b border-white/5 flex items-center px-4 gap-3"><div class="flex gap-1.5"><div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div><div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div><div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div></div><div class="h-6 flex-1 max-w-[200px] bg-black/40 rounded-md px-3 flex items-center border border-white/5"><span class="text-[9px] text-white/40 font-mono">cliente.com</span></div></div><!-- Mini webpage --><div class="p-6"><!-- Mini nav --><div class="flex items-center justify-between mb-6"><div class="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded"></div><div class="flex gap-3"><div class="w-8 h-1.5 bg-white/20 rounded-full"></div><div class="w-8 h-1.5 bg-white/20 rounded-full"></div><div class="w-8 h-1.5 bg-white/20 rounded-full"></div></div></div><div class="text-center"><div class="w-10 h-1.5 bg-blue-400 rounded-full mx-auto mb-2"></div><div class="w-40 h-2.5 bg-white/70 rounded-full mx-auto mb-2"></div><div class="w-32 h-2 bg-white/30 rounded-full mx-auto mb-5"></div><div class="flex gap-2 justify-center mb-6"><div class="w-20 h-6 bg-blue-500 rounded-full"></div><div class="w-20 h-6 bg-white/10 rounded-full border border-white/10"></div></div></div><!-- Mini cards --><div class="grid grid-cols-2 gap-3"><div class="rounded-xl bg-white/[0.03] border border-white/10 p-3"><div class="w-full h-16 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-400/10 mb-2 animate-pulseSoft"></div><div class="w-16 h-1.5 bg-white/40 rounded-full mb-1"></div><div class="w-20 h-1 bg-white/20 rounded-full"></div></div><div class="rounded-xl bg-white/[0.03] border border-white/10 p-3"><div class="w-full h-16 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-400/10 mb-2 animate-pulseSoft" style="animation-delay:.5s"></div><div class="w-16 h-1.5 bg-white/40 rounded-full mb-1"></div><div class="w-20 h-1 bg-white/20 rounded-full"></div></div></div></div></div><!-- Floating spec badge --><div class="absolute top-8 right-8 bg-[#111115]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float hidden lg:flex items-center gap-3"><div class="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></div><div class="text-left"><div class="text-[10px] font-bold uppercase tracking-wider text-white/60">Rendimiento</div><div class="text-[13px] font-bold text-white">100 / 100</div></div></div></div></div></div>` })}</section>${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/components/WebDesignMockup.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/WebDesignMockup.astro", void 0);
//#endregion
//#region src/pages/diseno-web.astro
var diseno_web_exports = /* @__PURE__ */ __exportAll({
	default: () => $$DisenoWeb,
	file: () => $$file,
	url: () => $$url
});
var $$DisenoWeb = createComponent(async ($$result, $$props, $$slots) => {
	let serviceData = null;
	let dynamicTestimonials = [];
	let heroBg = "";
	try {
		const service = await getWpServiceBySlug("diseno-web");
		if (service) {
			serviceData = service.croilab_servicio;
			if (service._embedded?.["wp:featuredmedia"]) heroBg = service._embedded["wp:featuredmedia"][0].source_url;
		}
		dynamicTestimonials = (await getWpTestimonials({ per_page: "100" })).items.filter((t) => t.croilab_testimonio?.related_service === "diseno-web").map((t) => ({
			quote: t.croilab_testimonio?.quote || t.title?.rendered,
			name: t.croilab_testimonio?.author,
			role: t.croilab_testimonio?.role,
			rating: parseInt(t.croilab_testimonio?.stars || "5", 10),
			avatar: t.croilab_testimonio?.avatar
		}));
	} catch (e) {
		console.error("Error fetching dynamic service data:", e);
	}
	const webDesignTestimonials = [
		{
			quote: "Nuestra web anterior parecía de los 90s. La nueva no solo es hermosa, sino que aumentó los leads un 150% en un mes.",
			name: "Laura C.",
			role: "Directora Comercial",
			rating: 5
		},
		{
			quote: "Entendieron perfectamente nuestra marca y la tradujeron en una experiencia de usuario increíble. De primer nivel.",
			name: "Andrés M.",
			role: "Founder, SaaS",
			rating: 5
		},
		{
			quote: "La velocidad de carga es brutal. Pasamos la auditoría técnica de Google con puntaje perfecto.",
			name: "Sofia T.",
			role: "CMO, Retail",
			rating: 5
		},
		{
			quote: "Teníamos muchas visitas pero nadie compraba. El rediseño de UX/UI resolvió exactamente nuestro problema de conversión.",
			name: "Diego L.",
			role: "CEO, Ecommerce",
			rating: 5
		},
		{
			quote: "El proceso fue muy organizado. Desde los wireframes hasta el desarrollo final, todo fue impecable.",
			name: "Valeria P.",
			role: "Directora, Agencia",
			rating: 5
		},
		{
			quote: "Nuestros clientes creen que somos una empresa gigante gracias a la nueva web. Literalmente elevó nuestro estatus.",
			name: "Ricardo S.",
			role: "Consultor",
			rating: 5
		}
	];
	const webDesignCases = [
		{
			name: "Nova Studio",
			tags: [
				"UI/UX",
				"Desarrollo",
				"Branding"
			],
			image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
			metrics: [{
				value: "+180%",
				label: "Leads calificados al mes"
			}, {
				value: "1.2s",
				label: "Tiempo de carga"
			}],
			slug: "/proyectos"
		},
		{
			name: "Vortex Media",
			tags: [
				"Estrategia",
				"Web App",
				"Automatización"
			],
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
			metrics: [{
				value: "+240%",
				label: "Conversión de registros"
			}, {
				value: "99",
				label: "PageSpeed Score"
			}],
			slug: "/proyectos"
		},
		{
			name: "Lumen Fintech",
			tags: [
				"Dashboard",
				"Data Viz",
				"UX Research"
			],
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
			metrics: [{
				value: "3.2x",
				label: "Retención de usuarios"
			}, {
				value: "+65%",
				label: "Tiempo en plataforma"
			}],
			slug: "/proyectos"
		},
		{
			name: "Aura Wellness",
			tags: [
				"E-commerce",
				"Diseño",
				"SEO"
			],
			image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2000&auto=format&fit=crop",
			metrics: [{
				value: "+320%",
				label: "Ventas online"
			}, {
				value: "+89%",
				label: "Tráfico orgánico"
			}],
			slug: "/proyectos"
		},
		{
			name: "Kinetix SaaS",
			tags: [
				"Landing",
				"CRO",
				"Motion"
			],
			image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2000&auto=format&fit=crop",
			metrics: [{
				value: "72%",
				label: "Reducción bounce rate"
			}, {
				value: "+145%",
				label: "Demo requests"
			}],
			slug: "/proyectos"
		}
	];
	const wpEndpoint = "https://darkblue-flamingo-706734.hostingersite.com/wp-json/wp/v2/pages?slug=diseno-web";
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
		"title": "Diseño Web que Convierte | Croilab",
		"description": "Tu sitio web no debe ser un folleto digital, debe ser tu mejor vendedor.",
		"rankMathSEO": rankMathSEO
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#050505]"><!-- Imagen de fondo con textura y degradado vertical --><div class="absolute inset-0 z-0 pointer-events-none"><img${addAttribute(heroBg || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", "src")} alt="Web Design and Development" class="w-full h-full object-cover object-top opacity-30 grayscale mix-blend-luminosity"><!-- Degradado vertical: Oscuro abajo (100%), Transparente arriba (0%) --><div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div><!-- Grid Arquitectónico superpuesto --><div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div><!-- Ruido (Grain) para textura premium --><div class="absolute inset-0 opacity-[0.25] mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div></div><!-- Luces de fondo dinámicas --><div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none z-0"></div><div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none z-0"></div>${renderComponent($$result, "Container", $$Container, { "class": "relative z-10 pt-40 pb-20 lg:pt-48 lg:pb-32" }, { "default": ($$result) => renderTemplate`<div class="mb-14">${renderComponent($$result, "Breadcrumb", $$Breadcrumb, { "items": [{
		label: "Servicios",
		href: "/#servicios"
	}, { label: "Diseño Web" }] })}</div><div class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center"><!-- Izquierda: Textos --><div class="flex flex-col text-left"><h1 class="gsap-title max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-bold leading-[0.9] tracking-tight text-white mb-8" data-custom-speed="0.8">${serviceData?.hero?.title || `Tu web actual es un <br/>`}<span class="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white/30">${serviceData?.hero?.highlight || `folleto digital`}</span></h1><p class="max-w-xl text-[17px] md:text-[19px] leading-relaxed text-white/50 mb-12">${serviceData?.hero?.intro || `Las plantillas genéricas no venden. Diseñamos y desarrollamos sitios web a medida, ultra-rápidos y estructurados psicológicamente para convertir curiosos en clientes.`}</p><div class="flex flex-col sm:flex-row items-start gap-5"><a href="#metodologia" class="magnetic group relative flex items-center justify-center gap-4 rounded-full bg-white px-8 py-4 text-[15px] font-bold text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] w-full sm:w-auto">Ver metodología<span class="inline-block transition-transform duration-300 group-hover:translate-y-1">â†“</span></a><a href="/contacto" class="magnetic group flex items-center justify-center gap-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 w-full sm:w-auto">Quiero trabajar así</a></div></div><!-- Derecha: Mockup Animado Diseño Web --><div class="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/4.5] flex items-center justify-center perspective-1000 mt-10 lg:mt-0"><!-- Glow de fondo cinemático --><div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-transparent rounded-[100px] blur-[120px] animate-glowDrift mix-blend-screen pointer-events-none"></div><!-- Interfaz Principal (Navegador Safari) --><div class="relative w-full max-w-[480px] rounded-[24px] bg-[#0c0c0e]/95 backdrop-blur-2xl border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden animate-float"><!-- Header del navegador Mac OS style --><div class="h-14 bg-white/[0.03] border-b border-white/5 flex items-center px-6 gap-3"><div class="flex gap-2"><div class="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div><div class="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div><div class="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div></div><div class="ml-4 h-7 flex-1 max-w-[240px] bg-black/40 rounded-md px-3 flex items-center border border-white/5 shadow-inner"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-white/40 mr-2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg><span class="text-[11px] text-white/50 font-mono tracking-wider">tuempresa.com</span></div></div><!-- Contenido Web Mockup (SaaS Landing Realista) --><div class="relative min-h-[420px] bg-gradient-to-b from-[#050505] to-[#111115] p-6 flex flex-col items-center text-center overflow-hidden"><!-- Nav --><div class="w-full flex items-center justify-between mb-10 border-b border-white/5 pb-4"><div class="flex items-center gap-2"><div class="w-5 h-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-md"></div><span class="text-[12px] font-bold text-white tracking-tight">TechFlow</span></div><div class="hidden sm:flex gap-4"><span class="text-[10px] text-white/50 hover:text-white transition-colors cursor-pointer">Producto</span><span class="text-[10px] text-white/50 hover:text-white transition-colors cursor-pointer">Precios</span></div></div><!-- Hero Section Mini --><div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5 relative overflow-hidden group"><div class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full animate-shimmer"></div><span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span><span class="text-[9px] font-medium text-blue-300">Nuevo: IA Integrada</span></div><h2 class="text-[22px] font-bold text-white leading-tight mb-3 max-w-[280px]">Automatiza tu trabajo con <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">precisión.</span></h2><p class="text-[11px] text-white/50 leading-relaxed max-w-[260px] mb-8">La plataforma todo-en-uno que los equipos modernos usan para escalar sus operaciones sin estrés.</p><!-- Botones --><div class="flex gap-3 mb-12"><button class="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-[11px] font-bold rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">Comenzar Gratis</button><button class="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white text-[11px] font-medium rounded-full border border-white/10 transition-all flex items-center gap-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>Ver Demo</button></div><!-- Decorative Abstract UI Elements (Glassmorphism Cards) --><!-- Card Izquierda: Gráfica --><div class="absolute -bottom-6 -left-8 w-48 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl rotate-[6deg] shadow-2xl p-4 transition-transform hover:-translate-y-2"><div class="flex items-center justify-between mb-3"><div class="text-[9px] text-white/50 font-bold uppercase">Conversión</div><div class="text-[9px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">+12%</div></div><!-- Mini Bar Chart --><div class="flex items-end gap-1.5 h-12 mt-2"><div class="w-1/5 bg-white/10 rounded-t-sm h-[30%]"></div><div class="w-1/5 bg-white/10 rounded-t-sm h-[50%]"></div><div class="w-1/5 bg-white/10 rounded-t-sm h-[40%]"></div><div class="w-1/5 bg-blue-500/80 rounded-t-sm h-[80%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div><div class="w-1/5 bg-blue-400 rounded-t-sm h-[100%] shadow-[0_0_15px_rgba(96,165,250,0.6)]"></div></div></div><!-- Card Derecha: Notificación --><div class="absolute bottom-16 -right-6 w-44 bg-white/[0.05] border border-white/10 rounded-2xl backdrop-blur-xl rotate-[-4deg] shadow-2xl p-3 flex items-center gap-3 transition-transform hover:-translate-y-2"><div class="w-8 h-8 rounded-full bg-gradient-to-tr from-green-400 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div><div class="text-[10px] font-bold text-white mb-0.5">Pago Recibido</div><div class="text-[9px] text-white/50">Hace 2 minutos</div></div></div></div><!-- Fade out inferior --><div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c0c0e] to-transparent pointer-events-none"></div></div><!-- Floating Badges --><div class="absolute -right-6 lg:-right-12 top-1/3 bg-[#111115]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float-delayed z-20 flex items-center gap-4"><div class="text-3xl font-bold text-white">99</div><div><div class="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">Performance</div><div class="flex gap-1"><div class="w-3 h-1 bg-green-500 rounded-full"></div><div class="w-3 h-1 bg-green-500 rounded-full"></div><div class="w-3 h-1 bg-green-500 rounded-full"></div></div></div></div><div class="absolute -left-4 lg:-left-10 bottom-1/4 bg-[#111115]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float z-20" style="animation-delay: 1.5s;"><div class="flex items-center gap-3 mb-1"><div class="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse"></div><div class="text-[11px] font-bold uppercase tracking-wider text-white/80">Conversión</div></div><div class="text-2xl font-bold text-green-400">+340%</div></div></div></div>` })}</section>${renderComponent($$result, "ServiceStats", $$ServiceStats, {})}<section class="relative bg-[#f8f9fa] py-32 border-t border-black/5">${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result) => renderTemplate`<div class="text-center max-w-3xl mx-auto mb-16"><span class="text-[11px] font-semibold uppercase tracking-[.25em] text-black/40 mb-6 block">El Problema</span><h2 class="gsap-title text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight text-black mb-6 leading-tight">¿Tu web sufre de alguna de estas enfermedades?</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8">${[
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
			title: "Carga Lentísima",
			desc: "Tarda más de 3 segundos en abrir. Para cuando carga, el usuario ya se fue a la web de tu competidor."
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
			title: "Diseño de Plantilla",
			desc: "Se ve exactamente igual a cientos de otras empresas. No transmite autoridad ni justifica tus precios."
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
			title: "Rebote Masivo",
			desc: "Tienes visitas, pero nadie hace clic en 'Comprar' o 'Contactar'. La estructura no guía al usuario."
		}
	].map((s) => renderTemplate`<div class="relative bg-white p-10 rounded-[2rem] border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]" data-spotlight><div class="spotlight-glow"></div><div class="mb-6 grayscale opacity-80 relative z-10">${unescapeHTML(s.icon)}</div><h3 class="text-xl font-bold text-black mb-4 relative z-10">${s.title}</h3><p class="text-[15px] leading-relaxed text-black/60 relative z-10">${s.desc}</p></div>`)}</div>` })}</section><section class="relative bg-white py-32 lg:py-48 border-t border-black/5 pt-10">${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div><h2 class="gsap-title text-4xl lg:text-6xl font-bold tracking-tight text-black mb-8 leading-[1.1]" data-custom-speed="0.9">El buen diseño es <span class="text-black/30 line-through">arte.</span><br> El diseño web es <strong class="text-black">ventas.</strong></h2><div class="space-y-6 text-[16px] leading-relaxed text-black/60"><p>Tener una web "bonita" ya no es suficiente. Si usas Elementor, Wix o plantillas pesadas, estás matando tu tasa de conversión antes de que el usuario termine de hacer scroll.</p><p>En Croilab programamos a medida usando tecnologías modernas (Astro, React, GSAP). El resultado es una experiencia inmersiva, 10x más rápida y estructurada para generar fricción cero al momento de comprar.</p></div></div><div class="relative group" data-tilt="5"><div class="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-[2.5rem] border border-black/10 transition-colors duration-500 group-hover:border-black/20"></div><div class="relative flex flex-col h-full overflow-hidden rounded-[2.5rem] bg-[#fbfbfb]"><div class="p-10 pb-0"><div class="text-7xl font-bold text-black mb-4">88%</div><p class="text-lg text-black/60 mb-10">de los usuarios no vuelven a una página web tras una mala experiencia de usuario (UX) o tiempos de carga lentos.</p></div><!-- MOCKUP --><div class="relative w-full h-[300px] mt-auto overflow-hidden"><img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop" alt="Mockup Diseño UI" class="absolute inset-0 w-full h-full object-cover object-top opacity-80 mix-blend-multiply filter contrast-125 transition-transform duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-[#fbfbfb] via-transparent to-transparent"></div></div></div></div></div>` })}</section><section id="metodologia" class="relative bg-white py-32 border-t border-black/5">${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 relative items-start"><div class="lg:sticky lg:top-40 flex flex-col gap-12"><div><span class="text-[11px] font-semibold uppercase tracking-[.25em] text-black/40 mb-6 block">Arquitectura Moderna</span><h2 class="gsap-title text-[clamp(3rem,5vw,5rem)] font-bold leading-[1] tracking-tight text-black mb-6" data-custom-speed="0.95">Ingeniería <br><span class="italic font-serif font-normal text-black/40">Frontend.</span></h2><p class="text-[16px] leading-relaxed text-black/60 max-w-sm">Combinamos psicología de ventas, diseño UI premium y código de altísimo rendimiento para crear activos digitales que dominan tu sector.</p></div><div class="relative w-full aspect-square max-w-sm rounded-[2.5rem] overflow-hidden bg-black/5 border border-black/10 group"><img src="https://images.unsplash.com/photo-1507238692062-71c1bb846f49?q=80&w=2000&auto=format&fit=crop" alt="Código moderno" class="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"><div class="absolute inset-0 border-[4px] border-white/50 rounded-[2.5rem] m-4 pointer-events-none"></div></div></div><div class="flex flex-col gap-12">${[
		{
			title: "UI/UX Estratégico",
			desc: "Wireframes y flujos de usuario diseñados específicamente para reducir la fricción. Donde el usuario mira, ahí ponemos la acción."
		},
		{
			title: "Copywriting Integrado",
			desc: "El diseño sin un buen mensaje es inútil. Escribimos textos persuasivos que encajan perfectamente con la jerarquía visual de la web."
		},
		{
			title: "Desarrollo Nativo (Headless)",
			desc: "Adiós a los plugins lentos de WordPress. Usamos arquitecturas modernas (Astro) para tiempos de carga menores a 1 segundo."
		},
		{
			title: "Animaciones Inmersivas",
			desc: "Micro-interacciones y animaciones GSAP que elevan la percepción de valor de tu marca sin sacrificar el rendimiento."
		}
	].map((step, i) => renderTemplate`<div class="step-card group relative p-10 rounded-[2rem] border border-black/5 bg-[#f8f9fa] shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all hover:bg-white hover:border-black/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]" data-spotlight><div class="spotlight-glow"></div><div class="text-[80px] font-bold text-black/[0.03] absolute top-4 right-8 select-none transition-all group-hover:text-black/[0.06] font-serif italic relative z-10">0${i + 1}</div><h3 class="relative z-10 text-2xl font-semibold text-black mb-4">${step.title}</h3><p class="relative z-10 text-[15px] leading-relaxed text-black/60">${step.desc}</p></div>`)}</div></div>` })}</section><section class="relative bg-[#fbfbfb] py-32 lg:py-48 border-t border-black/5 overflow-hidden"><div class="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div><div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>${renderComponent($$result, "Container", $$Container, { "class": "relative z-10 text-center" }, { "default": ($$result) => renderTemplate`<h2 class="gsap-title text-[clamp(3rem,5vw,5rem)] font-bold tracking-tight text-black mb-16" data-custom-speed="0.85">El rendimiento <br><span class="italic font-serif font-normal text-black/50">es dinero.</span></h2><div class="relative mx-auto max-w-5xl aspect-[16/10] md:aspect-[21/9] mb-20 rounded-[2.5rem] overflow-hidden bg-[#111] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-black/10 group"><img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2000&auto=format&fit=crop" alt="Web Performance" class="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div><div class="absolute bottom-6 left-6 md:bottom-10 md:left-10 p-4 md:p-6 rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl border border-black/5 flex items-center gap-4 md:gap-6 animate-pulse-slow transition-transform hover:scale-105"><div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 font-bold text-lg md:text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></div><div class="text-left"><div class="text-[10px] md:text-sm font-bold text-black uppercase tracking-wider">PageSpeed Score</div><div class="text-xl md:text-2xl font-black text-black">99/100</div></div></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="relative p-10 rounded-[2.5rem] bg-white border border-black/10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2" data-spotlight><div class="spotlight-glow"></div><div class="text-5xl font-bold text-black mb-2 relative z-10">&lt; <span class="roi-count" data-target="1">0</span>s</div><div class="text-[13px] uppercase tracking-widest text-black/40 font-bold relative z-10">Tiempo de Carga</div></div><div class="relative p-10 rounded-[2.5rem] bg-black text-white border border-black/20 shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform md:-translate-y-6 transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:-translate-y-8" data-spotlight><div class="spotlight-glow"></div><div class="text-6xl font-bold text-white mb-2 relative z-10">+<span class="roi-count" data-target="60">0</span>%</div><div class="text-[13px] uppercase tracking-widest text-white/80 font-bold relative z-10">Tasa de Conversión</div></div><div class="relative p-10 rounded-[2.5rem] bg-white border border-black/10 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2" data-spotlight><div class="spotlight-glow"></div><div class="text-5xl font-bold text-black mb-2 relative z-10"><span class="roi-count" data-target="99">0</span>%</div><div class="text-[13px] uppercase tracking-widest text-black/40 font-bold relative z-10">Core Web Vitals</div></div></div>` })}</section>${renderComponent($$result, "MarqueeTestimonials", $$MarqueeTestimonials, { "testimonials": webDesignTestimonials })}${renderComponent($$result, "WebDesignMockup", $$WebDesignMockup, {})}${renderComponent($$result, "CaseStudiesCarousel", $$CaseStudiesCarousel, { "projects": webDesignCases })}${renderComponent($$result, "Calculator", $$Calculator, { "mode": "web" })}<section class="relative bg-white py-32 lg:py-40 border-t border-black/5">${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start relative"><div class="lg:sticky lg:top-40"><span class="text-[11px] font-semibold uppercase tracking-[.25em] text-black/40 mb-6 block">Transparencia Radical</span><h2 class="gsap-title text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight text-black mb-6 leading-[1.1]">Dudas frecuentes antes de rediseñar tu web.</h2><p class="text-[16px] leading-relaxed text-black/60 max-w-sm">Sabemos que una web a medida es una inversión importante. Respondemos tus preguntas con total honestidad.</p></div><div class="flex flex-col gap-6">${[
		{
			q: "¿En qué plataforma construyen la web?",
			a: "Usamos arquitecturas Headless (Astro, React, Tailwind). Si necesitas un panel de control para editar blogs o servicios, conectamos WordPress o un CMS moderno por detrás. Obtienes la facilidad de uso de WordPress pero la velocidad de una aplicación moderna."
		},
		{
			q: "¿Cuánto tiempo toma desarrollar una web a medida?",
			a: "Un sitio web corporativo de alta conversión toma entre 4 a 6 semanas desde la estrategia inicial hasta el lanzamiento. No usamos plantillas, por lo que cada píxel y animación se codifica para tu negocio."
		},
		{
			q: "¿El rediseño afectará mi posicionamiento actual (SEO)?",
			a: "No. Al contrario. Realizamos migraciones SEO impecables (redirecciones 301, mapeo de URLS) y la nueva arquitectura más rápida le dará un impulso masivo a tu posicionamiento en Google a los pocos días de lanzarse."
		}
	].map((faq) => renderTemplate`<div class="group relative bg-[#f8f9fa] p-8 md:p-10 rounded-[2rem] border border-black/5 transition-colors hover:bg-white hover:border-black/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)]" data-spotlight><div class="spotlight-glow"></div><h3 class="relative z-10 text-xl font-bold text-black mb-4 flex items-start gap-4"><span class="text-black/20 font-serif italic text-2xl leading-none pt-1 group-hover:text-black/40 transition-colors">Q.</span>${faq.q}</h3><p class="relative z-10 text-[15px] leading-relaxed text-black/60 pl-8 md:pl-10">${faq.a}</p></div>`)}</div></div>` })}</section>${renderComponent($$result, "ServiceHub", $$ServiceHub, { "current": "diseno-web" })}${renderComponent($$result, "Cta", $$Cta, {})}` })}${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/pages/diseno-web.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/pages/diseno-web.astro", void 0);
var $$file = "C:/Users/bdela/Desktop/Croilab/src/pages/diseno-web.astro";
var $$url = "/diseno-web";
//#endregion
//#region \0virtual:astro:page:src/pages/diseno-web@_@astro
var page = () => diseno_web_exports;
//#endregion
export { page };
