import { t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { S as unescapeHTML, a as Fragment, c as renderSlot, d as renderTemplate, f as maybeRenderHead, g as createRenderInstruction, i as renderComponent, m as addAttribute, p as renderHead, w as createAstro } from "./server_Yceqtf1X.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const navLinks = [
		{
			label: "Proyectos",
			href: "/proyectos"
		},
		{
			label: "Servicios",
			href: "#",
			children: [
				{
					label: "SEO",
					href: "/seo",
					desc: "Posiciona tu marca y deja de depender de los anuncios.",
					icon: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"/></svg>"
				},
				{
					label: "Meta Ads",
					href: "/meta-ads",
					desc: "Campañas que convierten clics en ingresos reales.",
					icon: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 20V10\"/><path d=\"M12 20V4\"/><path d=\"M6 20v-6\"/></svg>"
				},
				{
					label: "Diseño Web",
					href: "/diseno-web",
					desc: "Páginas rápidas y claras que venden desde el primer segundo.",
					icon: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"/><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"/></svg>"
				},
				{
					label: "Ecommerce",
					href: "/ecommerce",
					desc: "Tiendas online que convierten visitas en pedidos.",
					icon: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"9\" cy=\"21\" r=\"1\"/><circle cx=\"20\" cy=\"21\" r=\"1\"/><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"/></svg>"
				},
				{
					label: "Conversiones",
					href: "/conversiones",
					desc: "Optimizamos cada etapa de tu embudo digital con datos.",
					icon: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/></svg>"
				}
			]
		},
		{
			label: "Nosotros",
			href: "#",
			dropdownTitle: "La Agencia",
			dropdownPromoTitle: "Nuestra Filosofía",
			dropdownPromoDesc: "No delegamos a practicantes. Hablas directo con los ingenieros.",
			dropdownPromoLink: "/nosotros",
			dropdownPromoCTA: "Conoce más",
			children: [{
				label: "La Agencia",
				href: "/nosotros",
				image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop"
			}, {
				label: "El Equipo",
				href: "/equipo",
				image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop"
			}]
		},
		{
			label: "Plataforma",
			href: "/portal-cliente"
		},
		{
			label: "Blog",
			href: "/blog"
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<header id="site-header" class="fixed top-0 w-full z-50 transition-all duration-500 bg-transparent text-white border-b border-transparent" data-astro-cid-nen7h5rs><div class="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10" data-astro-cid-nen7h5rs><a href="/" class="header-logo-container group flex items-center" aria-label="Croilab — inicio" data-astro-cid-nen7h5rs><img src="/croilab-logo.svg" alt="Croilab" class="header-logo h-7 w-auto transition duration-300 group-hover:opacity-80 md:h-8 filter invert" width="241" height="53" data-astro-cid-nen7h5rs></a><nav class="hidden items-center gap-9 text-[13px] font-medium md:flex header-nav" data-astro-cid-nen7h5rs>${navLinks.map((link) => link.children ? renderTemplate`<div class="group dropdown-trigger relative py-4" data-astro-cid-nen7h5rs><button class="header-link flex items-center gap-1.5 transition text-white/70 hover:text-white" aria-haspopup="true" data-astro-cid-nen7h5rs>${link.label}<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300 group-hover:rotate-180" data-astro-cid-nen7h5rs><path d="M6 9l6 6 6-6" data-astro-cid-nen7h5rs></path></svg></button><!-- Mega Menú Desplegable --><div class="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-[900px] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50" data-astro-cid-nen7h5rs><div class="rounded-3xl border border-black/10 bg-white/95 backdrop-blur-2xl p-8 shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex gap-10 text-black before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-4 before:h-4 before:rotate-45 before:bg-white/95 before:border-l before:border-t before:border-black/10 before:-z-10" data-astro-cid-nen7h5rs><div class="flex-1" data-astro-cid-nen7h5rs><h3 class="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-5 px-3" data-astro-cid-nen7h5rs>${link.dropdownTitle || "Especialidades"}</h3><div${addAttribute(`grid ${link.children.some((c) => c.image) ? "grid-cols-2 gap-5" : "grid-cols-2 gap-3"}`, "class")} data-astro-cid-nen7h5rs>${link.children.map((child) => child.image ? renderTemplate`<a${addAttribute(child.href, "href")} class="group/item rounded-xl p-2 hover:bg-black/5 transition-colors flex flex-col gap-2" data-astro-cid-nen7h5rs><div class="w-full aspect-[4/3] rounded-lg overflow-hidden bg-black/5 border border-black/5" data-astro-cid-nen7h5rs><img${addAttribute(child.image, "src")}${addAttribute(child.label, "alt")} class="w-full h-full object-cover grayscale opacity-80 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500 group-hover/item:scale-105" data-astro-cid-nen7h5rs></div><span class="text-[13px] font-bold text-black group-hover/item:text-blue-600 transition-colors px-1" data-astro-cid-nen7h5rs>${child.label}</span></a>` : renderTemplate`<a${addAttribute(child.href, "href")} class="group/item rounded-2xl p-4 hover:bg-black/5 hover:border-black/10 border border-transparent transition-all flex items-start gap-4" data-astro-cid-nen7h5rs><div class="w-10 h-10 shrink-0 rounded-xl bg-black/5 group-hover/item:bg-blue-500/10 flex items-center justify-center text-black/40 group-hover/item:text-blue-600 transition-colors" data-astro-cid-nen7h5rs>${unescapeHTML(child.icon)}</div><div data-astro-cid-nen7h5rs><span class="block text-[13px] font-bold text-black group-hover/item:text-blue-600 transition-colors" data-astro-cid-nen7h5rs>${child.label}</span>${child.desc && renderTemplate`<span class="block mt-1 text-[11.5px] leading-snug text-black/50 group-hover/item:text-black/70 transition-colors" data-astro-cid-nen7h5rs>${child.desc}</span>`}</div></a>`)}</div></div><div class="w-[240px] rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-black/5 p-6 flex flex-col justify-between relative overflow-hidden group/promo" data-astro-cid-nen7h5rs><div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[30px] translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover/promo:scale-150" data-astro-cid-nen7h5rs></div><div class="relative z-10" data-astro-cid-nen7h5rs><h4 class="text-[13px] font-bold text-black mb-2" data-astro-cid-nen7h5rs>${link.dropdownPromoTitle || "Sistema de Conversión"}</h4><p class="text-[11px] text-black/60 leading-relaxed" data-astro-cid-nen7h5rs>${link.dropdownPromoDesc || "Descubre los cuellos de botella en tu embudo de conversión actual."}</p></div><a${addAttribute(link.dropdownPromoLink || "/contacto", "href")} class="relative z-10 text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-6 transition-colors" data-astro-cid-nen7h5rs>${link.dropdownPromoCTA || "Quiero trabajar así"} <span class="text-[15px] leading-none transition-transform group-hover/promo:translate-x-1" data-astro-cid-nen7h5rs>→</span></a></div></div></div></div>` : renderTemplate`<a${addAttribute(link.href, "href")} class="header-link py-4 transition text-white/70 hover:text-white" data-astro-cid-nen7h5rs>${link.label}</a>`)}</nav><div class="relative group dropdown-trigger header-contact-container" data-astro-cid-nen7h5rs><a href="/contacto" class="magnetic contact-btn group flex items-center gap-3 text-[13px] font-semibold text-white" data-astro-cid-nen7h5rs>Contacto<span class="contact-icon flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#090909] transition duration-300 group-hover:opacity-80 group-hover:rotate-45" data-astro-cid-nen7h5rs>→</span></a><!-- Contacto Dropdown Card --><div class="absolute top-[calc(100%+12px)] right-0 mt-2 w-[340px] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50" data-astro-cid-nen7h5rs><div class="rounded-3xl border border-black/10 bg-white/95 backdrop-blur-2xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.1)] text-black before:absolute before:-top-2 before:right-8 before:w-4 before:h-4 before:rotate-45 before:bg-white/95 before:border-l before:border-t before:border-black/10 before:-z-10" data-astro-cid-nen7h5rs><!-- Imagen / Cover --><div class="relative mb-4 overflow-hidden rounded-2xl h-[100px]" data-astro-cid-nen7h5rs><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Equipo Croilab" class="w-full h-full object-cover" data-astro-cid-nen7h5rs><div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" data-astro-cid-nen7h5rs></div></div><!-- Título y resumen --><h4 class="text-[14px] font-bold text-black leading-snug" data-astro-cid-nen7h5rs>Croilab</h4><p class="text-[11px] text-black/50 leading-relaxed mt-1.5" data-astro-cid-nen7h5rs>Ingeniería de conversiones digitales. Estrategia, tecnología y adquisición trabajando juntos.</p><!-- Redes Sociales --><div class="flex items-center gap-2 mt-4" data-astro-cid-nen7h5rs><a href="https://www.instagram.com/croilab" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-colors" aria-label="Instagram" data-astro-cid-nen7h5rs><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nen7h5rs><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-astro-cid-nen7h5rs></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-astro-cid-nen7h5rs></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-astro-cid-nen7h5rs></line></svg></a><a href="https://www.linkedin.com/company/croilab" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-colors" aria-label="LinkedIn" data-astro-cid-nen7h5rs><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nen7h5rs><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" data-astro-cid-nen7h5rs></path><rect x="2" y="9" width="4" height="12" data-astro-cid-nen7h5rs></rect><circle cx="4" cy="4" r="2" data-astro-cid-nen7h5rs></circle></svg></a><a href="https://www.facebook.com/croilab" target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:text-black hover:border-black/30 transition-colors" aria-label="Facebook" data-astro-cid-nen7h5rs><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nen7h5rs><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-astro-cid-nen7h5rs></path></svg></a></div><!-- Botones --><div class="flex items-center gap-2 mt-5" data-astro-cid-nen7h5rs><a href="/contacto" class="flex-1 text-center rounded-xl bg-[#090909] text-white text-[12px] font-semibold py-2.5 transition hover:bg-black/80" data-astro-cid-nen7h5rs>Contactar</a><a href="/contacto" class="flex-1 text-center rounded-xl border border-black/10 text-black text-[12px] font-semibold py-2.5 transition hover:bg-black/5" data-astro-cid-nen7h5rs>Ver más</a></div></div></div></div><button id="menu-toggle" type="button" class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-black/15 md:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú" data-astro-cid-nen7h5rs><span class="block h-[2px] w-5 bg-white" data-astro-cid-nen7h5rs></span><span class="block h-[2px] w-5 bg-white" data-astro-cid-nen7h5rs></span><span class="block h-[2px] w-5 bg-white" data-astro-cid-nen7h5rs></span></button></div><!-- OVERLAY MÓVIL --><div id="mobile-menu" class="fixed inset-0 z-40 md:hidden" aria-hidden="true" data-astro-cid-nen7h5rs><div class="absolute inset-0 bg-black/70 backdrop-blur-md" data-close-menu data-astro-cid-nen7h5rs></div><div class="menu-panel absolute inset-x-0 bottom-0 top-[85px] overflow-y-auto bg-white px-6 pt-6 shadow-[0_-20px_60px_rgba(0,0,0,.5)]" data-astro-cid-nen7h5rs><nav class="flex flex-col pb-10" aria-label="Menú móvil" data-astro-cid-nen7h5rs>${navLinks.map((link) => link.children ? renderTemplate`<div class="flex flex-col border-b border-black/10 py-4" data-astro-cid-nen7h5rs><span class="text-lg font-semibold tracking-tight text-black mb-4" data-astro-cid-nen7h5rs>${link.label}</span><div class="flex flex-col gap-3 pl-4 border-l border-black/10" data-astro-cid-nen7h5rs>${link.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")} class="text-[15px] font-medium text-black/60 hover:text-black transition" data-astro-cid-nen7h5rs>${child.label}</a>`)}</div></div>` : renderTemplate`<a${addAttribute(link.href, "href")} class="border-b border-black/10 py-4 text-lg font-semibold tracking-tight text-black/70 transition hover:text-black" data-astro-cid-nen7h5rs>${link.label}</a>`)}<a href="/contacto" class="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[13px] font-semibold text-[#090909] transition duration-300 hover:opacity-80" data-astro-cid-nen7h5rs>Contacto →</a></nav></div></div></header><!-- Backdrop blur cuando hay dropdown abierto --><div id="dropdown-backdrop" class="fixed inset-0 h-[100vh] bg-black/20 backdrop-blur-md z-40 opacity-0 invisible transition-all duration-300 pointer-events-none" aria-hidden="true" data-astro-cid-nen7h5rs></div>${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/Header.astro", void 0);
//#endregion
//#region src/components/ui/Container.astro
createAstro("https://croilab.com");
var $$Container = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Container;
	const { class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["mx-auto w-full max-w-[1400px] px-6 lg:px-10", className], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/ui/Container.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const serviceLinks = [
		{
			label: "SEO",
			href: "/seo"
		},
		{
			label: "Meta Ads",
			href: "/meta-ads"
		},
		{
			label: "Diseño Web",
			href: "/diseno-web"
		},
		{
			label: "Ecommerce",
			href: "/ecommerce"
		},
		{
			label: "Método Conversiones",
			href: "/conversiones"
		}
	];
	const companyLinks = [
		{
			label: "Proyectos",
			href: "/proyectos"
		},
		{
			label: "Nosotros",
			href: "/nosotros"
		},
		{
			label: "Equipo",
			href: "/equipo"
		},
		{
			label: "Plataforma (Portal)",
			href: "/portal-cliente"
		},
		{
			label: "Blog",
			href: "/blog"
		},
		{
			label: "Contacto",
			href: "/contacto"
		},
		{
			label: "Privacidad y cookies",
			href: "/privacidad"
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<footer class="border-t border-black/10 bg-white">${renderComponent($$result, "Container", $$Container, { "class": "py-16 lg:py-20" }, { "default": ($$result) => renderTemplate`<div class="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]"><div><a href="/" class="group inline-flex items-center" aria-label="Croilab — inicio"><img src="/croilab-logo.svg" alt="Croilab" class="h-7 w-auto transition duration-300 group-hover:opacity-80" width="241" height="53"></a><p class="mt-5 max-w-xs text-sm leading-6 text-muted">Ingeniería de conversiones digitales: estrategia, tecnología y adquisición trabajando juntos.</p><a href="/contacto" class="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-[12px] font-bold text-white transition-all hover:bg-black/80 hover:scale-105 hover:shadow-lg">Quiero trabajar así</a></div><nav aria-label="Servicios"><h3 class="text-[10px] font-medium uppercase tracking-[.2em] text-black/40">Servicios</h3><ul class="mt-5 space-y-3">${serviceLinks.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")} class="text-sm text-muted transition hover:text-black">${link.label}</a></li>`)}</ul><div class="mt-8"><h3 class="text-[10px] font-medium uppercase tracking-[.2em] text-black/40 mb-4">Ubicaciones</h3><div class="flex flex-wrap gap-2"><a href="/seo-barcelona" class="inline-flex items-center justify-center px-3 py-1.5 border border-black/10 rounded-md text-[11px] font-semibold text-black/60 hover:text-black hover:bg-black/5 transition-all">SEO en Barcelona</a><a href="/seo-madrid" class="inline-flex items-center justify-center px-3 py-1.5 border border-black/10 rounded-md text-[11px] font-semibold text-black/60 hover:text-black hover:bg-black/5 transition-all">SEO en Madrid</a></div></div></nav><nav aria-label="Compañía"><h3 class="text-[10px] font-medium uppercase tracking-[.2em] text-black/40">Compañía</h3><ul class="mt-5 space-y-3">${companyLinks.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")} class="text-sm text-muted transition hover:text-black">${link.label}</a></li>`)}</ul></nav><div><h3 class="text-[10px] font-medium uppercase tracking-[.2em] text-black/40">Contacto</h3><p class="mt-5 text-sm leading-6 text-muted">hola@croilab.com</p><div class="mt-2 flex items-center gap-2 text-sm text-muted"><span class="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>Disponible para nuevos proyectos</div></div></div><div class="mt-16 w-full flex justify-center overflow-hidden"><span class="text-[clamp(4rem,20vw,20rem)] font-light leading-none tracking-[-0.05em] select-none text-center w-full bg-gradient-to-t from-white via-black/80 to-black bg-clip-text text-transparent">Croilab</span></div><div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 md:flex-row"><span class="text-[10px] uppercase tracking-[.2em] text-black/35">© 2026 Croilab. Todos los derechos reservados.</span><span class="text-[10px] uppercase tracking-[.2em] text-black/35">Digital conversion laboratory</span></div>` })}</footer>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/CookieConsent.astro
var $$CookieConsent = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div id="cookie-consent" class="fixed inset-x-0 bottom-0 z-[85] hidden p-4 sm:p-6" data-cookie-consent role="region" aria-label="Aviso de cookies" data-astro-cid-kror3uvh><div class="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-black/10 bg-white/95 backdrop-blur-xl shadow-[0_40px_100px_rgba(0,0,0,0.25)]" data-astro-cid-kror3uvh><!-- Fila principal --><div class="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-7" data-astro-cid-kror3uvh><div class="flex items-start gap-4" data-astro-cid-kror3uvh><div class="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-black text-white sm:flex" data-astro-cid-kror3uvh><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-kror3uvh><circle cx="12" cy="12" r="9" data-astro-cid-kror3uvh></circle><circle cx="12" cy="12" r="5" data-astro-cid-kror3uvh></circle><circle cx="12" cy="12" r="1" data-astro-cid-kror3uvh></circle></svg></div><div data-astro-cid-kror3uvh><h3 class="text-lg font-bold tracking-tight text-black" data-astro-cid-kror3uvh>Usamos cookies</h3><p class="mt-1.5 max-w-xl text-sm leading-relaxed text-black/60" data-astro-cid-kror3uvh>Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Puedes elegir cuáles aceptas.</p><button type="button" data-cookie-config class="mt-3 text-sm font-bold text-blue-600 underline-offset-4 hover:underline" data-astro-cid-kror3uvh>Personalizar preferencias</button></div></div><div class="flex shrink-0 flex-col gap-2.5 sm:items-end" data-astro-cid-kror3uvh><button type="button" data-cookie-accept class="magnetic w-full rounded-full bg-black px-6 py-3 text-[13px] font-bold text-white transition hover:scale-[1.03] hover:shadow-lg sm:w-auto" data-astro-cid-kror3uvh>Aceptar todas</button><button type="button" data-cookie-essential class="w-full rounded-full border border-black/10 bg-white px-6 py-3 text-[13px] font-bold text-black/70 transition hover:border-black/20 hover:text-black sm:w-auto" data-astro-cid-kror3uvh>Solo necesarias</button></div></div><!-- Panel de personalización --><div data-cookie-config-panel class="hidden border-t border-black/5 bg-[#f8f9fa] px-6 py-5 sm:px-7" data-astro-cid-kror3uvh><div class="flex flex-col gap-3" data-astro-cid-kror3uvh><label class="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white p-4 opacity-70" data-astro-cid-kror3uvh><span class="flex flex-col" data-astro-cid-kror3uvh><span class="text-sm font-bold text-black" data-astro-cid-kror3uvh>Necesarias</span><span class="text-xs leading-relaxed text-black/50" data-astro-cid-kror3uvh>Imprescindibles para el funcionamiento del sitio.</span></span><span class="rounded-full bg-black/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black/50" data-astro-cid-kror3uvh>Siempre activas</span></label><label class="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white p-4" data-astro-cid-kror3uvh><span class="flex flex-col" data-astro-cid-kror3uvh><span class="text-sm font-bold text-black" data-astro-cid-kror3uvh>Analíticas</span><span class="text-xs leading-relaxed text-black/50" data-astro-cid-kror3uvh>Nos ayudan a entender cómo se usa el sitio y mejorarlo.</span></span><input type="checkbox" data-cookie-analytics class="h-5 w-5 accent-blue-600" data-astro-cid-kror3uvh></label><label class="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white p-4" data-astro-cid-kror3uvh><span class="flex flex-col" data-astro-cid-kror3uvh><span class="text-sm font-bold text-black" data-astro-cid-kror3uvh>Marketing</span><span class="text-xs leading-relaxed text-black/50" data-astro-cid-kror3uvh>Permiten mostrar contenido y anuncios más relevantes.</span></span><input type="checkbox" data-cookie-marketing class="h-5 w-5 accent-blue-600" data-astro-cid-kror3uvh></label></div><div class="mt-4 flex flex-col-reverse items-center gap-2.5 sm:flex-row sm:justify-end" data-astro-cid-kror3uvh><a${addAttribute("/privacidad", "href")} class="text-sm font-medium text-black/50 underline-offset-4 hover:underline" data-astro-cid-kror3uvh>Ver política de privacidad</a><button type="button" data-cookie-save class="w-full rounded-full bg-black px-6 py-3 text-[13px] font-bold text-white transition hover:scale-[1.03] hover:shadow-lg sm:w-auto" data-astro-cid-kror3uvh>Guardar preferencias</button></div></div></div></div>${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/CookieConsent.astro", void 0);
//#endregion
//#region src/data/site.ts
var site = {
	name: "Croilab",
	slogan: "Ingeniería de conversiones digitales",
	description: "Diseñamos sistemas digitales donde estrategia, tecnología y adquisición trabajan juntos para transformar tráfico en clientes.",
	url: "https://croilab.com",
	email: "hola@croilab.com",
	whatsappNumber: "573000000000",
	whatsappMessage: "Hola Croilab, quiero un diagnóstico gratuito de mi negocio."
};
function whatsappLink() {
	return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
}
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://croilab.com");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title = "Croilab — Ingeniería de conversiones digitales", description = "Diseñamos sistemas digitales donde estrategia, tecnología y adquisición trabajan juntos para transformar tráfico en clientes.", lang = "es", rankMathSEO, hideHeaderAndFooter = false } = Astro.props;
	const canonicalURL = new URL(Astro.url.pathname, Astro.site);
	const waLink = whatsappLink();
	const orgSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: site.name,
		slogan: site.slogan,
		url: site.url,
		description: site.description,
		logo: `${site.url}/images/favicon-192x192.png`,
		email: site.email,
		contactPoint: {
			"@type": "ContactPoint",
			email: site.email,
			contactType: "sales",
			availableLanguage: "es"
		}
	};
	return renderTemplate`<html${addAttribute(lang, "lang")}><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${rankMathSEO ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(rankMathSEO)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL.href, "href")}><meta name="robots" content="index, follow"><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><meta property="og:site_name" content="Croilab"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL.href, "content")}><meta name="twitter:card" content="summary"><title>${title}</title>` })}`}<link rel="icon" type="image/png" href="/images/favicon-192x192.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">${renderHead($$result)}</head><body>${!hideHeaderAndFooter && renderTemplate`${renderComponent($$result, "Header", $$Header, {})}`}<main>${renderSlot($$result, $$slots["default"])}</main>${!hideHeaderAndFooter && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`}<div id="scroll-bar-desktop" class="fixed bottom-0 left-0 right-0 z-50 translate-y-full transition-transform duration-500 hidden md:block"><div class="mx-auto max-w-[1400px] px-6 lg:px-10 pb-6 pointer-events-none"><div class="mx-auto w-fit bg-[#090909]/95 backdrop-blur-xl rounded-2xl border border-white/10 px-2 py-2 flex items-center gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.3)] pointer-events-auto"><a href="/contacto" class="flex items-center gap-2.5 rounded-xl bg-white px-5 py-3 text-[13px] font-semibold text-[#090909] transition hover:bg-white/90"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>Agendar llamada</a><a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-[#20ba5a]"><svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z"></path></svg>WhatsApp</a></div></div></div><script type="application/ld+json">${unescapeHTML(JSON.stringify(orgSchema))}<\/script>${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")}${renderComponent($$result, "CookieConsent", $$CookieConsent, {})}</body></html>`;
}, "C:/Users/bdela/Desktop/Croilab/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { renderScript as a, $$Container as i, site as n, whatsappLink as r, $$BaseLayout as t };
