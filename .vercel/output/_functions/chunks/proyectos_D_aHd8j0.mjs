import { n as __exportAll, t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { r as getWpProjects } from "./wp_I0wGGDjU.mjs";
import { S as unescapeHTML, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_Yceqtf1X.mjs";
import { a as renderScript, i as $$Container, r as whatsappLink, t as $$BaseLayout } from "./BaseLayout_CUM04enh.mjs";
import { t as $$Breadcrumb } from "./Breadcrumb_CM0NWSvp.mjs";
import { t as $$ServiceStats } from "./ServiceStats_C4qXQpVW.mjs";
//#region src/pages/proyectos.astro
var proyectos_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Proyectos,
	file: () => $$file,
	url: () => $$url
});
var $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
	const waLink = whatsappLink();
	let wpProjects = [];
	try {
		const { items } = await getWpProjects({ per_page: "50" });
		wpProjects = items;
	} catch (e) {
		console.error("Error fetching projects from WP:", e);
	}
	const projects = wpProjects.map((wpProj) => {
		let cleanDesc = (wpProj.content?.rendered || "").replace(/(<([^>]+)>)/gi, "").trim();
		if (cleanDesc.length > 150) cleanDesc = cleanDesc.slice(0, 150) + "...";
		const customData = wpProj.croilab_proyecto || {};
		return {
			title: wpProj.title?.rendered || "Proyecto",
			description: cleanDesc,
			category: customData.category || "Proyecto",
			image: customData.imagen_url || customData.logo_url || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
			link: `/proyectos/${wpProj.slug}`
		};
	});
	const seoEndpoint = "https://darkblue-flamingo-706734.hostingersite.com/wp-json/wp/v2/pages?slug=proyectos&_embed=1";
	let rankMathSEO = null;
	let pageData = null;
	try {
		const seoRes = await fetch(seoEndpoint);
		if (seoRes.ok) {
			const pages = await seoRes.json();
			if (pages && pages.length > 0) {
				pageData = pages[0];
				rankMathSEO = pages[0].rank_math_head || null;
			}
		}
	} catch (e) {
		console.error("Error fetching proyectos page SEO:", e);
	}
	const pageTitle = pageData?.title?.rendered || "Trabajos que <br />\n          <span class=\"italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300\">convierten.</span>";
	const pageDesc = (pageData?.excerpt?.rendered || pageData?.content?.rendered || "")?.replace(/(<([^>]+)>)/gi, "").trim() || "No somos una fábrica de webs. Somos una boutique de conversiones. Aquí tienes la prueba de lo que pasa cuando combinas ingeniería técnica con diseño persuasivo.";
	const pageBg = pageData?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Proyectos | Croilab — Trabajos que convierten",
		"description": "Explora nuestros casos de éxito. Experiencias digitales diseñadas para captar, retener y convertir.",
		"rankMathSEO": rankMathSEO,
		"data-astro-cid-cdop524w": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative min-h-[90vh] flex flex-col justify-end overflow-hidden border-t border-white/5 bg-[#050505] pb-12 pt-32 lg:pb-24" data-astro-cid-cdop524w><!-- Imagen de fondo con textura y degradado --><div class="absolute inset-0 z-0 pointer-events-none" data-astro-cid-cdop524w><img${addAttribute(pageBg, "src")} alt="Abstract" class="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity" data-astro-cid-cdop524w><!-- Degradado agresivo hacia el negro puro, oscureciendo más abajo --><div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/20" data-astro-cid-cdop524w></div><!-- Ruido (Grain) para textura premium --><div class="absolute inset-0 opacity-[0.25] mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');" data-astro-cid-cdop524w></div></div><!-- Efectos de iluminación vibrantes --><div class="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] pointer-events-none z-0" data-astro-cid-cdop524w></div><div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[150px] pointer-events-none z-0" data-astro-cid-cdop524w></div>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10 w-full",
		"data-astro-cid-cdop524w": true
	}, { "default": ($$result) => renderTemplate`<div class="mb-10 lg:mb-16" data-astro-cid-cdop524w>${renderComponent($$result, "Breadcrumb", $$Breadcrumb, {
		"items": [{ label: "Proyectos" }],
		"data-astro-cid-cdop524w": true
	})}</div><div class="w-full" data-astro-cid-cdop524w><h1 class="gsap-title text-[clamp(4rem,10vw,11rem)] font-bold leading-[0.85] tracking-tighter text-white mb-10" data-custom-speed="0.8" data-astro-cid-cdop524w>${unescapeHTML(pageTitle)}</h1><div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end" data-astro-cid-cdop524w><p class="text-[17px] leading-relaxed text-white/50 md:text-[20px] max-w-lg" data-astro-cid-cdop524w>${pageDesc}</p><div class="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-5 w-full" data-astro-cid-cdop524w><a href="#proyectos-list" class="magnetic group relative flex items-center justify-center gap-4 rounded-full bg-white px-10 py-5 text-[14px] font-bold text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] w-full sm:w-auto" data-astro-cid-cdop524w>Ver proyectos<span class="inline-block transition-transform duration-300 group-hover:translate-y-1" data-astro-cid-cdop524w>↓</span></a><a href="/contacto" class="magnetic group flex items-center justify-center gap-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-5 text-[14px] font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40 w-full sm:w-auto" data-astro-cid-cdop524w>Cotizar proyecto</a></div></div></div>` })}<!-- Indicador de scroll --><a href="#proyectos-list" class="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex-col items-center gap-2 group hidden sm:flex" data-astro-cid-cdop524w><span class="text-[10px] font-medium uppercase tracking-[.3em] text-white/40 transition group-hover:text-white/80" data-astro-cid-cdop524w>Scroll</span><span class="relative flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5" data-astro-cid-cdop524w><span class="proj-scroll-dot h-2 w-1 rounded-full bg-white" data-astro-cid-cdop524w></span></span></a></section>${renderComponent($$result, "ServiceStats", $$ServiceStats, { "data-astro-cid-cdop524w": true })}<section id="proyectos-list" class="relative bg-white pb-32 lg:pb-48 pt-10" data-astro-cid-cdop524w>${renderComponent($$result, "Container", $$Container, { "data-astro-cid-cdop524w": true }, { "default": ($$result) => renderTemplate`<div class="flex flex-col gap-32 lg:gap-48 mt-10" data-astro-cid-cdop524w>${projects.length > 0 ? projects.map((project, i) => {
		const isEven = i % 2 === 0;
		return renderTemplate`<article${addAttribute(`project-card group relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-0`, "class")} data-astro-cid-cdop524w><!-- BLOQUE DE IMAGEN --><div class="project-img-block w-full lg:w-7/12 relative z-10" data-spotlight data-astro-cid-cdop524w><div class="spotlight-glow" data-astro-cid-cdop524w></div><a${addAttribute(project.link, "href")} class="project-img-link block relative w-full aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-[#f8f9fa] border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)]" data-astro-cid-cdop524w><div class="absolute inset-0 bg-white/10 z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" data-astro-cid-cdop524w></div><img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} loading="lazy" class="project-img h-full w-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110" data-astro-cid-cdop524w><!-- Etiqueta Flotante --><div class="absolute top-6 left-6 z-20" data-astro-cid-cdop524w><span class="inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-black shadow-lg" data-astro-cid-cdop524w>${project.category}</span></div><!-- Overlay de hover con flecha --><div class="absolute inset-0 z-20 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/30 opacity-0 group-hover:opacity-100" data-astro-cid-cdop524w><span class="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform duration-500 scale-75 group-hover:scale-100" data-astro-cid-cdop524w><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-cdop524w><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-cdop524w></path></svg></span></div></a></div><!-- BLOQUE DE TEXTO (Superpuesto) --><div${addAttribute(`project-text-block w-full lg:w-6/12 relative z-20 ${isEven ? "lg:-ml-20" : "lg:-mr-20"}`, "class")} data-astro-cid-cdop524w><div class="bg-white/95 backdrop-blur-xl rounded-[2.5rem] border border-black/10 p-8 sm:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-colors duration-500 group-hover:border-black/20" data-astro-cid-cdop524w><div class="flex items-center gap-4 mb-6" data-astro-cid-cdop524w><span class="h-px w-8 bg-black/20" data-astro-cid-cdop524w></span><span class="text-[10px] font-bold uppercase tracking-[.2em] text-black/40" data-astro-cid-cdop524w>Caso de Éxito <span class="case-counter inline-block tabular-nums" data-astro-cid-cdop524w>0${i + 1}</span></span></div><h3 class="text-[clamp(2rem,3vw,3.5rem)] font-bold tracking-tight text-black mb-6 leading-[1.1]" data-astro-cid-cdop524w>${project.title}</h3><p class="text-[16px] leading-[1.8] text-black/60 mb-10" data-astro-cid-cdop524w>${project.description}</p><div class="border-t border-black/10 pt-8" data-astro-cid-cdop524w><a${addAttribute(project.link, "href")} class="magnetic inline-flex items-center gap-4 rounded-full bg-black px-8 py-4 text-[13px] font-bold text-white transition-transform duration-300 hover:scale-105 shadow-[0_10px_20px_rgba(0,0,0,0.1)]" data-astro-cid-cdop524w>Ver el resultado en vivo<span class="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:rotate-45" data-astro-cid-cdop524w><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-cdop524w><path d="M7 17 17 7M8 7h9v9" data-astro-cid-cdop524w></path></svg></span></a></div></div></div></article>`;
	}) : renderTemplate`<div class="py-20 text-center" data-astro-cid-cdop524w><div class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-black/5 mb-6" data-astro-cid-cdop524w><span class="text-2xl text-black/30" data-astro-cid-cdop524w>?</span></div><h3 class="text-2xl font-semibold text-black mb-2" data-astro-cid-cdop524w>Aún no hay proyectos</h3><p class="text-black/50" data-astro-cid-cdop524w>Pronto subiremos nuestros casos de éxito.</p></div>`}</div>` })}</section><section class="relative bg-white py-24 lg:py-40 overflow-hidden border-t border-black/5 z-20" data-astro-cid-cdop524w>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10",
		"data-astro-cid-cdop524w": true
	}, { "default": ($$result) => renderTemplate`<div class="relative w-full rounded-[3rem] bg-[#f8f9fa] border border-black/5 p-10 py-16 lg:p-24 overflow-hidden text-center flex flex-col items-center shadow-[0_20px_60px_rgba(0,0,0,0.03)]" data-astro-cid-cdop524w><!-- Luces internas --><div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" data-astro-cid-cdop524w></div><div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" data-astro-cid-cdop524w></div><div class="grid-bg absolute inset-0 opacity-[0.03] pointer-events-none invert" data-astro-cid-cdop524w></div><h2 class="relative z-10 text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.95] tracking-tight mb-8 text-[#090909]" data-astro-cid-cdop524w>¿Tienes un proyecto <br data-astro-cid-cdop524w><span class="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" data-astro-cid-cdop524w>en mente?</span></h2><p class="relative z-10 text-black/50 text-[16px] md:text-[18px] mb-12 max-w-2xl mx-auto leading-relaxed" data-astro-cid-cdop524w>Cuéntanos dónde estás hoy y hacia dónde quieres llegar. Analizaremos tu ecosistema digital y diseñaremos una estructura probada para multiplicar tus conversiones.</p><div class="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto" data-astro-cid-cdop524w><a href="/contacto" class="magnetic group relative flex items-center justify-center gap-4 rounded-full bg-black px-10 py-5 text-[14px] font-bold text-white transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] w-full sm:w-auto overflow-hidden" data-astro-cid-cdop524w><div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" data-astro-cid-cdop524w></div>Cotizar mi proyecto<span class="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45" data-astro-cid-cdop524w>↗</span></a><a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="magnetic group flex items-center justify-center gap-4 rounded-full border border-black/10 bg-white px-10 py-5 text-[14px] font-bold text-black transition-all duration-300 hover:bg-black/5 hover:border-black/20 w-full sm:w-auto" data-astro-cid-cdop524w>WhatsApp directo</a></div></div>` })}</section>` })}${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/pages/proyectos.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/pages/proyectos.astro", void 0);
var $$file = "C:/Users/bdela/Desktop/Croilab/src/pages/proyectos.astro";
var $$url = "/proyectos";
//#endregion
//#region \0virtual:astro:page:src/pages/proyectos@_@astro
var page = () => proyectos_exports;
//#endregion
export { page };
