import { n as __exportAll, t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { a as getWpServices, o as getWpSettings, r as getWpProjects, s as getWpTestimonials, t as getWpCases } from "./wp_I0wGGDjU.mjs";
import { S as unescapeHTML, a as Fragment, c as renderSlot, d as renderTemplate, f as maybeRenderHead, h as defineScriptVars, i as renderComponent, m as addAttribute, w as createAstro } from "./server_Yceqtf1X.mjs";
import { a as renderScript, i as $$Container, n as site, r as whatsappLink, t as $$BaseLayout } from "./BaseLayout_CUM04enh.mjs";
import { t as $$Cta } from "./Cta_Dahp83yV.mjs";
import { n as serviceCases } from "./serviceCases_BJih09Jl.mjs";
import { t as services } from "./services_Ye23o-W2.mjs";
import { t as $$ClientsMarquee } from "./ClientsMarquee_5NcQoiH-.mjs";
//#region src/components/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="hero" class="relative min-h-screen overflow-hidden bg-[#090909] text-white" data-astro-cid-ge2uvauf><!-- BACKGROUND ANIMATION (X shape with 2 circles) --><div class="absolute inset-0 z-0 flex flex-col items-center justify-center opacity-90 mix-blend-screen" data-astro-cid-ge2uvauf><div class="loader-wrapper -translate-y-[670px]" data-astro-cid-ge2uvauf><div class="loader border border-white/30" data-astro-cid-ge2uvauf></div></div><div class="loader-wrapper" data-astro-cid-ge2uvauf><div class="loader border border-white/30" data-astro-cid-ge2uvauf></div></div></div><!-- GRID & TEXTURES --><div class="grid-bg-invert absolute inset-0 opacity-15" data-astro-cid-ge2uvauf></div><div class="noise-overlay" data-astro-cid-ge2uvauf></div><!-- HERO CONTENT --><div class="relative z-20 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 pb-24 pt-44 lg:px-10" data-astro-cid-ge2uvauf><div class="w-full flex flex-col items-center text-center" data-astro-cid-ge2uvauf><div class="hero-title-wrap overflow-hidden" data-astro-cid-ge2uvauf><h1 class="hero-title max-w-[850px] text-[clamp(4rem,7.2vw,7.8rem)] font-semibold leading-[.86] tracking-[-.075em] text-white" data-astro-cid-ge2uvauf>No diseñamos<span class="block font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300 pb-4 pr-2" data-astro-cid-ge2uvauf>páginas.</span><span class="block" data-astro-cid-ge2uvauf>Creamos<span class="relative inline-block text-white font-serif italic font-normal" data-astro-cid-ge2uvauf>conversiones<span class="absolute -right-3 top-1 h-2 w-2 rounded-full bg-white animate-pulseSoft" data-astro-cid-ge2uvauf></span></span></span></h1></div><p class="hero-subtitle mt-9 max-w-[580px] text-[15px] leading-7 text-white/60 md:text-[17px] opacity-0 translate-y-4" data-astro-cid-ge2uvauf>Diseñamos sistemas digitales donde estrategia, tecnología y adquisición trabajan juntos para transformar tráfico en clientes.</p><div class="mt-9 flex flex-wrap items-center justify-center gap-4" data-astro-cid-ge2uvauf><a href="/contacto" data-open-contact class="magnetic hero-btn opacity-0 translate-y-4 group flex items-center gap-5 rounded-full bg-white px-6 py-3.5 text-[13px] font-semibold text-[#090909] shadow-[0_10px_30px_rgba(255,255,255,.18)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(255,255,255,.25)]" data-astro-cid-ge2uvauf>Iniciar proyecto<span class="flex h-7 w-7 items-center justify-center rounded-full bg-[#090909]/15 transition-all duration-300 group-hover:bg-[#090909] group-hover:text-white group-hover:rotate-45" data-astro-cid-ge2uvauf>→</span></a><a href="#proyectos" class="magnetic hero-btn opacity-0 translate-y-4 group flex items-center gap-5 rounded-full bg-white/[0.05] border border-white/10 px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white/[0.1] hover:border-white/20" data-astro-cid-ge2uvauf>Ver portafolio</a></div></div></div></section>${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/Hero.astro", void 0);
//#endregion
//#region src/components/TechStack.astro
var $$TechStack = createComponent(async ($$result, $$props, $$slots) => {
	const fallbackTools = [
		{
			name: "Claude",
			short: "Anthropic · IA",
			icon: "M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"
		},
		{
			name: "ChatGPT",
			short: "OpenAI",
			icon: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
		},
		{
			name: "Gemini",
			short: "Google IA",
			icon: "M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
		},
		{
			name: "Search Console",
			short: "Google",
			icon: "M9.5 3a6.5 6.5 0 1 0 3.9 11.7l5.5 5.5 1.6-1.6-5.5-5.5A6.5 6.5 0 0 0 9.5 3zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zM9.5 6.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM19.2 3.8l-1.5 1.5 1 1 1.5-1.5z"
		},
		{
			name: "Analytics",
			short: "Google",
			icon: "M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 0 1-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z"
		}
	];
	let dynamicTools = [];
	try {
		const settings = await getWpSettings();
		if (settings.stack && settings.stack.items && settings.stack.items.length > 0) dynamicTools = settings.stack.items;
	} catch (e) {
		console.error("Error fetching stack settings:", e);
	}
	const tools = dynamicTools.length > 0 ? dynamicTools : fallbackTools;
	return renderTemplate`${maybeRenderHead($$result)}<section class="border-t border-white/5 bg-[#050505] py-16 lg:py-20" aria-label="Nuestro stack" data-astro-cid-ceyfej33>${renderComponent($$result, "Container", $$Container, { "data-astro-cid-ceyfej33": true }, { "default": ($$result) => renderTemplate`<p class="mb-10 text-center text-[11px] font-medium uppercase tracking-[.24em] text-white/40" data-astro-cid-ceyfej33>Nuestro stack</p>` })}<div class="marquee marquee-mask" data-astro-cid-ceyfej33><div class="stack-track" data-astro-cid-ceyfej33>${[...tools, ...tools].map((tool) => renderTemplate`<div class="group mx-10 flex items-center justify-center opacity-60 transition hover:opacity-100 sm:mx-14" data-astro-cid-ceyfej33>${tool.image ? renderTemplate`<img${addAttribute(tool.image, "src")}${addAttribute(tool.name, "alt")} class="h-10 w-auto max-w-[150px] object-contain transition-transform duration-500 group-hover:scale-110 brightness-0 invert opacity-80" loading="lazy" data-astro-cid-ceyfej33>` : renderTemplate`<div class="flex items-center gap-4" data-astro-cid-ceyfej33><svg viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8 shrink-0 text-white transition-transform duration-500 group-hover:scale-110" aria-hidden="true" data-astro-cid-ceyfej33><path${addAttribute(tool.icon, "d")} data-astro-cid-ceyfej33></path></svg><div class="text-left" data-astro-cid-ceyfej33><div class="whitespace-nowrap text-[15px] font-bold text-white" data-astro-cid-ceyfej33>${tool.name}</div><div class="whitespace-nowrap text-[10px] uppercase tracking-[.18em] text-white/40" data-astro-cid-ceyfej33>${tool.short}</div></div></div>`}</div>`)}</div></div></section>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/TechStack.astro", void 0);
//#endregion
//#region src/components/AboutAgency.astro
var $$AboutAgency = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden border-t border-black/10 bg-white py-24 lg:py-40" data-astro-cid-dwlbqo7i><!-- GRID & TEXTURES --><div class="grid-bg absolute inset-0 opacity-15 z-0" data-astro-cid-dwlbqo7i></div><div class="noise-overlay z-0" style="position: absolute; inset: 0; pointer-events: none; background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;); opacity: 0.04; mix-blend-mode: overlay;" data-astro-cid-dwlbqo7i></div><!-- BLUE ILLUMINATION (AURA) --><div class="glow-agency" data-astro-cid-dwlbqo7i></div><!-- DECORATIVE FLOATING ELEMENTS --><!-- Left floating elements --><div class="absolute left-[10%] top-[20%] h-[300px] w-[300px] rounded-full border border-black/5 opacity-50 animate-float" aria-hidden="true" data-speed="0.2" data-astro-cid-dwlbqo7i></div><div class="absolute left-[15%] top-[15%] h-[150px] w-[150px] rounded-full border border-dashed border-black/10 opacity-40 animate-spinSlow" aria-hidden="true" data-speed="0.5" data-astro-cid-dwlbqo7i></div><div class="absolute left-[5%] top-[50%] h-3 w-3 rounded-full bg-blue-400/40 shadow-[0_0_15px_rgba(100,200,255,0.8)] animate-pulseSoft" aria-hidden="true" data-speed="-0.3" data-astro-cid-dwlbqo7i></div><div class="absolute left-[20%] bottom-[20%] h-[60px] w-[60px] rounded-full border border-blue-500/20 opacity-60 animate-floatSlow" aria-hidden="true" data-speed="0.4" data-astro-cid-dwlbqo7i></div><!-- Right floating elements --><div class="absolute right-[5%] bottom-[10%] h-[400px] w-[400px] rounded-full border border-black/5 opacity-30 animate-floatSlow" aria-hidden="true" data-speed="-0.1" data-astro-cid-dwlbqo7i></div><div class="absolute right-[12%] bottom-[30%] h-2 w-2 rounded-full bg-white opacity-60 animate-pulseSoft" aria-hidden="true" style="animation-delay: 1s;" data-speed="-0.5" data-astro-cid-dwlbqo7i></div><div class="absolute right-[25%] top-[25%] h-[120px] w-[120px] rounded-full border border-dashed border-blue-400/20 opacity-50 animate-spinSlow" aria-hidden="true" style="animation-delay: 2s; animation-direction: reverse;" data-speed="0.3" data-astro-cid-dwlbqo7i></div>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10 flex flex-col items-center text-center",
		"data-astro-cid-dwlbqo7i": true
	}, { "default": ($$result) => renderTemplate`<div class="flex flex-col items-center mb-16 w-full max-w-[900px]" data-astro-cid-dwlbqo7i><!-- KICKER --><div class="reveal-up mb-8 flex items-center gap-4" data-astro-cid-dwlbqo7i><span class="h-px w-9 bg-blue-400/50" data-astro-cid-dwlbqo7i></span><span class="text-[11px] font-medium uppercase tracking-[.24em] text-blue-300/60" data-astro-cid-dwlbqo7i>Acerca de nosotros</span><span class="h-px w-9 bg-blue-400/50" data-astro-cid-dwlbqo7i></span></div><!-- MAIN TEXT --><h2 class="title-reveal max-w-[800px] text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-.04em] text-black" data-astro-cid-dwlbqo7i>Obsesionados con la<span class="text-black font-serif italic font-normal drop-shadow-[0_0_10px_rgba(100,200,255,0.3)]" data-astro-cid-dwlbqo7i>data</span>.<span class="block text-black/40 mt-2" data-astro-cid-dwlbqo7i>Creadores de</span><span class="relative inline-block mt-2" data-astro-cid-dwlbqo7i>conversiones<span class="absolute -right-4 top-2 h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulseSoft shadow-[0_0_10px_rgba(8,120,249,0.8)]" data-astro-cid-dwlbqo7i></span></span>.</h2><!-- DESCRIPTION --><p class="reveal-up mt-8 max-w-[600px] text-[16px] leading-relaxed text-black/50" data-astro-cid-dwlbqo7i>Diseñamos ecosistemas digitales donde la estética premium se encuentra con estrategias de adquisición implacables. Olvídate de proyectos interminables; construimos para escalar tu negocio hoy.</p><!-- CTA --><div class="reveal-up mt-12" data-astro-cid-dwlbqo7i><a href="#contacto" class="group flex items-center gap-5 rounded-full bg-black px-8 py-4 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,.25)]" data-astro-cid-dwlbqo7i>Agendar una llamada<span class="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:bg-white group-hover:text-black" data-astro-cid-dwlbqo7i>→</span></a></div></div><div class="reveal-up relative w-full max-w-[900px] perspective-1000" data-astro-cid-dwlbqo7i><!-- Video Container --><div class="glass-panel relative aspect-video w-full overflow-hidden rounded-3xl animate-float" id="video-container" data-speed="-0.15" data-astro-cid-dwlbqo7i><!-- Glow behind image --><div class="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent mix-blend-screen opacity-50 z-0 animate-glowDrift pointer-events-none" data-astro-cid-dwlbqo7i></div><!-- The Cover --><div id="video-cover" class="absolute inset-0 z-10 cursor-pointer flex items-center justify-center group" data-astro-cid-dwlbqo7i><img src="/images/video-cover.jpg" alt="Croilab Cover" class="absolute inset-0 h-full w-full object-cover object-center opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition duration-700" data-astro-cid-dwlbqo7i><!-- Play Button --><div class="relative z-20 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30" data-astro-cid-dwlbqo7i><svg class="h-10 w-10 ml-2" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-dwlbqo7i><path d="M8 5v14l11-7z" data-astro-cid-dwlbqo7i></path></svg></div></div><!-- The iframe (hidden by default) --><div id="video-player" class="absolute inset-0 z-20 hidden bg-black" data-astro-cid-dwlbqo7i><iframe id="youtube-iframe" class="w-full h-full" width="1093" height="615" src="" title="Croilab Agencia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-astro-cid-dwlbqo7i></iframe></div><!-- Inner Shadow / Frame --><div class="absolute inset-0 rounded-3xl border border-black/10 ring-1 ring-inset ring-white/5 pointer-events-none z-30" data-astro-cid-dwlbqo7i></div></div></div>` })}</section>${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/components/AboutAgency.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/AboutAgency.astro", void 0);
//#endregion
//#region src/components/PartnerEstrategico.astro
var $$PartnerEstrategico = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative w-full min-h-[85vh] flex items-center justify-center bg-white px-4 py-32 overflow-hidden border-t border-black/5" data-astro-cid-5uxcjybr><!-- Glows Radiales (Light Mode - Blue/Cyan) --><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent rounded-full blur-[100px] animate-glowDrift pointer-events-none" data-astro-cid-5uxcjybr></div><!-- Background Grid --><div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" data-astro-cid-5uxcjybr></div><!-- Container for central content and floating images --><div class="relative w-full max-w-6xl mx-auto flex flex-col items-center text-center z-10" data-astro-cid-5uxcjybr><!-- Central Text Block --><div class="max-w-3xl mx-auto mb-10 z-20 relative px-4" data-astro-cid-5uxcjybr><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 mb-8 mx-auto" data-astro-cid-5uxcjybr><span class="text-[10px] font-bold uppercase tracking-widest" data-astro-cid-5uxcjybr>Enfoque a Resultados</span></div><h2 class="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tight text-black mb-8 leading-[1.05] gsap-title" data-astro-cid-5uxcjybr><span class="font-normal italic text-black/40 font-serif" data-astro-cid-5uxcjybr>Tu partner estratégico</span><br data-astro-cid-5uxcjybr> en el mundo digital</h2><p class="text-black/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto" data-astro-cid-5uxcjybr>No perdemos tiempo con post-its inútiles ni con informes kilométricos que nadie lee. Vamos directo al grano: pensar, ejecutar y adaptar una estrategia que tenga sentido para tu negocio. <strong class="text-black font-semibold" data-astro-cid-5uxcjybr>Acción, no burocracia.</strong></p><a href="/contacto" class="inline-flex items-center justify-center px-10 py-4 text-[15px] font-bold text-white transition-all duration-300 bg-[#090909] rounded-full hover:bg-blue-600 hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)]" data-astro-cid-5uxcjybr>Inicia un proyecto</a></div><!-- Floating Cards --><!-- Top Left --><div aria-hidden="true" class="absolute floating-card pos-tl hidden md:block z-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-black/10 rounded-2xl overflow-hidden bg-white" data-astro-cid-5uxcjybr><img alt="Team member" class="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:scale-110 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkPtBXOC8qYDiPm217BOQpUfZGXmCpXm-4XwVE_WZAwg2h6zuRMTr9kRfSgDFd6FhNaTdxAgJOTDQ3xDOBICP3iIAfWZxQYxFk1xLXN2PeCSFQ98BRlrHSF3Md653AzFvO4rMeIB2o2MkbuNiEUcOjpC1t7zlb8bSXM01xCJW_sQjaAN5Mzq5Tue7Z7b0smHBJM3aaV9N51fFu_wmlGS75GVA-IIPIiIvqgFXRpVrFjRonHW3RD1pl" data-astro-cid-5uxcjybr></div><!-- Top Right --><div aria-hidden="true" class="absolute floating-card pos-tr hidden md:block z-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-black/10 rounded-2xl overflow-hidden bg-white" data-astro-cid-5uxcjybr><img alt="Team member" class="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:scale-110 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU03tREVagGYAahjY3-tHyLYjtLI8U_ZAs8OIfTbL63EappGLUxV0ep9kR2Ac9Yp46ipSu4-MtBQOSBVS5vzZ-Bq_u7b5_maEhtdZGhkZZP-zGN3lZv9nQLhPMXQXJlkrXOXViokqNsvPjWTIz3nt5q-CErBpV7ATGsStFubbl2fJHvCBN-UWFipK4EaEbfgbXTQvRYZtCxvOrI3bXuQ5B-7gVKpWU8kWLzUiGyDRRWUwm7aEGVjsw" data-astro-cid-5uxcjybr></div><!-- Middle Left --><div aria-hidden="true" class="absolute floating-card pos-ml hidden lg:block z-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-black/10 rounded-2xl overflow-hidden bg-white" data-astro-cid-5uxcjybr><img alt="Team member" class="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:scale-110 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO9bC3e22X2OZoJa0GjYgtYcz2tNLbm2v1EHrL2vYAqDiXEckfH9-juHMmX0Va3ilAvUBBlKHQRcwObzzinpiCDCTje_fE4WAYsQTBA3ylBnXmrJQK8yCiIs5LX-zr0DQ_8D025pRFfrMrUg9qPtQ-muD4igih8CrYbGZxtcZ7GCHPOHPT3GeHAZoEldflo3b-ouqlR_vyGxBTXJRctYGcKqqZkQ9wbZg1eWm7wTJa5V-YPMS1Q7a6" data-astro-cid-5uxcjybr></div><!-- Middle Right --><div aria-hidden="true" class="absolute floating-card pos-mr hidden lg:block z-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-black/10 rounded-2xl overflow-hidden bg-white" data-astro-cid-5uxcjybr><img alt="Team member" class="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:scale-110 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGIXSrAeRNRTgu05AEDXy5oiuSXOARmeEYE8WgFdI7Ka4msBRjfc2Q3nC8Hx9JQh8RiOX8PYq2BxiX01vEgF2XQrA5gtGt4JhvTVuer_XtHIlTwLB0z7ZR5QqVaQiJ-upWOBPoSqNQ_uri2L7J30oShie2O6RFO5h3hp7LPqWuUTrcDW7ByHaPQFnIzlU589SKUTw30HEMWKISh51GyJTt_wgFqgx1G-OyhuL0nceSc5-vA0V6761K" data-astro-cid-5uxcjybr></div><!-- Bottom Left --><div aria-hidden="true" class="absolute floating-card pos-bl hidden md:block z-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-black/10 rounded-2xl overflow-hidden bg-white" data-astro-cid-5uxcjybr><img alt="Team member" class="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:scale-110 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4VfKawM_uN1ekqw-3izvht76q0D1qGAKb23QSc9xG6uD5plChBv6QvD6oXaKBDFUdF_SlViIWKnjBj-Jg7iJ30Bqcl8mB-PwnDLd0WGNfCi3BG6V5zWJI-WsZIkcX0zuI8z0YwlceH1SZnC54nL16Df3xPn1pwhRrXv6T4j7nHKp0mj6evVIURKulVh3ovzwBJPWkYm66_3hV4iERu8JcxAbilV3iYZdbMceTNTAQeuTgQtO2TRpn" data-astro-cid-5uxcjybr></div><!-- Bottom Right --><div aria-hidden="true" class="absolute floating-card pos-br hidden md:block z-0 shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-black/10 rounded-2xl overflow-hidden bg-white" data-astro-cid-5uxcjybr><img alt="Team member" class="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 hover:grayscale-0 hover:scale-110 hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBekG4WfUyQ5wreUF95AyTtmjA4PmV1YNgZWHSPpzZiRBb-x5KZoBNVoL7EmPBmP6sb78VRmYOE7GHdDZcJjtNyV1qHfbhlteKOZRUZTBZMW4GgkmRocPlIq3rfBkYTPvlnV2VagZhGwX4KRZBmZt_eL6lC7ZdD5iE_YrhrKg3PxYe0Mtdkr27WTEtyJyCk6Rk8pqIEOlUuwvua9X1p1Paby5uOzJUTfa2uESpXWSGtT08fsy_5XX-d" data-astro-cid-5uxcjybr></div></div></section>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/PartnerEstrategico.astro", void 0);
//#endregion
//#region src/components/Services.astro
var $$Services = createComponent(async ($$result, $$props, $$slots) => {
	const bentoClasses = [
		"md:col-span-2 md:row-span-2",
		"md:col-span-1 md:row-span-1",
		"md:col-span-1 md:row-span-1",
		"md:col-span-2 md:row-span-1",
		"md:col-span-1 md:row-span-1"
	];
	let dynamicServices = [];
	try {
		const { items } = await getWpServices({ per_page: "20" });
		dynamicServices = items.map((s) => {
			const data = s.croilab_servicio || {};
			return {
				num: data.num || "00",
				name: s.title?.rendered || "Servicio",
				slug: s.slug,
				desc: data.desc || "",
				icon: data.icon || "",
				features: data.features || []
			};
		});
	} catch (e) {
		console.error("Error fetching services:", e);
	}
	const services$1 = dynamicServices.length > 0 ? dynamicServices : services;
	return renderTemplate`${maybeRenderHead($$result)}<section id="servicios" class="border-t border-black/10 bg-white relative overflow-hidden"><!-- Textura de fondo sutil --><div class="grid-bg absolute inset-0 opacity-10"></div>${renderComponent($$result, "Container", $$Container, { "class": "py-24 lg:py-40 relative z-10 flex flex-col items-center" }, { "default": ($$result) => renderTemplate`<div class="flex flex-col items-center text-center mb-20 w-full max-w-[900px]"><div class="reveal-up mb-8 flex items-center gap-4"><span class="h-px w-9 bg-blue-400/50"></span><span class="text-[11px] font-medium uppercase tracking-[.24em] text-blue-300/60">Servicios</span><span class="h-px w-9 bg-blue-400/50"></span></div><h2 class="title-reveal text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-.04em] text-black">No vendemos horas,<span class="block text-black/40 mt-2">buscamos</span><span class="relative inline-block mt-2 font-serif italic text-black drop-shadow-[0_0_10px_rgba(100,200,255,0.3)]">crecimiento.<span class="absolute -right-4 top-2 h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulseSoft shadow-[0_0_10px_rgba(8,120,249,0.8)]"></span></span></h2><p class="reveal-up mt-8 max-w-[600px] text-[16px] leading-relaxed text-black/50">Nos alejamos del modelo de agencia 360 que intenta hacerlo todo en lugar de enfocarse en crecer el negocio. Cinco disciplinas, un único objetivo: convertir tráfico en ingresos.</p></div><div class="grid w-full grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">${services$1.map((s, idx) => renderTemplate`<a${addAttribute(`/${s.slug}`, "href")}${addAttribute(`reveal-up group relative overflow-hidden rounded-3xl border border-black/10 transition duration-500 hover:border-black/20 p-8 lg:p-12 flex flex-col justify-between ${bentoClasses[idx % 5]}`, "class")} data-speed="0.03" data-spotlight><div class="spotlight-glow"></div><div class="absolute inset-0 bg-black/5 backdrop-blur-md"></div><div class="absolute -inset-px opacity-0 transition duration-700 group-hover:opacity-100 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent pointer-events-none"></div><span class="absolute -right-4 -bottom-8 text-[clamp(120px,15vw,250px)] font-bold leading-none tracking-tighter text-black/[0.02] transition duration-700 group-hover:text-black/[0.04] group-hover:scale-105 pointer-events-none select-none z-0">${s.num}</span>${s.slug === "seo" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(`<!-- MOCKUP: SEARCH CONSOLE PREMIUM -->
        <div class="absolute right-8 top-12 w-[340px] rounded-2xl border border-black/10 bg-white/90 backdrop-blur-xl p-5 pointer-events-none opacity-20 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-y-2 shadow-2xl z-10 hidden md:block">
          
          <!-- Header / Filters -->
          <div class="flex justify-between items-center mb-4">
            <div class="flex gap-2 items-center">
              <div class="h-4 w-4 bg-blue-500 rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <svg class="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <div class="h-3 w-24 bg-black/20 rounded-full"></div>
            </div>
            <div class="h-3 w-12 bg-black/10 rounded-full"></div>
          </div>

          <!-- 4 Metric Cards -->
          <div class="grid grid-cols-4 gap-2 mb-4">
            <!-- Clicks (Active) -->
            <div class="bg-blue-500/10 border border-blue-500/30 rounded p-2 flex flex-col gap-1 transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-75">
              <span class="text-[8px] text-blue-400/70 uppercase font-semibold leading-none">Clics</span>
              <span class="text-sm font-bold text-blue-400 leading-none" style="text-shadow: 0 0 8px rgba(96,165,250,0.4)">124K</span>
            </div>
            <!-- Impressions (Active) -->
            <div class="bg-purple-500/10 border border-purple-500/30 rounded p-2 flex flex-col gap-1 transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-150">
              <span class="text-[8px] text-purple-400/70 uppercase font-semibold leading-none">Impres.</span>
              <span class="text-sm font-bold text-purple-400 leading-none">2.4M</span>
            </div>
            <!-- CTR (Inactive) -->
            <div class="bg-black/5 border border-black/5 rounded p-2 flex flex-col gap-1 transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-200">
              <span class="text-[8px] text-black/40 uppercase font-semibold leading-none">CTR</span>
              <span class="text-sm font-bold text-black/80 leading-none">5.2%</span>
            </div>
            <!-- Position (Inactive) -->
            <div class="bg-black/5 border border-black/5 rounded p-2 flex flex-col gap-1 transition-all duration-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-300">
              <span class="text-[8px] text-black/40 uppercase font-semibold leading-none">Pos.</span>
              <span class="text-sm font-bold text-black/80 leading-none">12.4</span>
            </div>
          </div>

          <!-- Chart Area -->
          <div class="relative h-28 w-full mt-2 border-t border-black/5 pt-3">
            <!-- Grid Lines -->
            <div class="absolute inset-0 flex flex-col justify-between pt-3 pb-1">
              <div class="w-full h-px bg-black/5"></div>
              <div class="w-full h-px bg-black/5"></div>
              <div class="w-full h-px bg-black/5"></div>
            </div>

            <!-- SVG Line Chart -->
            <svg class="absolute inset-0 h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
              <defs>
                <!-- Blue Gradient for Clicks -->
                <linearGradient id="gscBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3" />
                  <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
                </linearGradient>
                <!-- Purple Gradient for Impressions -->
                <linearGradient id="gscPurple" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#a855f7" stop-opacity="0.15" />
                  <stop offset="100%" stop-color="#a855f7" stop-opacity="0" />
                </linearGradient>
              </defs>
              
              <!-- Purple Area & Line (Impressions) -->
              <path d="M0,38 C15,35 25,25 40,28 C55,30 70,15 85,10 L100,2 L100,40 L0,40 Z" fill="url(#gscPurple)" class="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500" />
              <path d="M0,38 C15,35 25,25 40,28 C55,30 70,15 85,10 L100,2" fill="none" stroke="#a855f7" stroke-width="1" stroke-dasharray="2" class="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500" />

              <!-- Blue Area & Line (Clicks) -->
              <path d="M0,35 C20,35 30,15 50,25 C70,35 85,10 100,5 L100,40 L0,40 Z" fill="url(#gscBlue)" class="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500" />
              <path d="M0,35 C20,35 30,15 50,25 C70,35 85,10 100,5" fill="none" stroke="#60a5fa" stroke-width="1.5" class="stroke-dasharray-150 stroke-dashoffset-150 group-hover:animate-[draw_1.5s_ease-out_forwards]" style="animation-delay: 200ms;" />
            </svg>
            
            <!-- Animated Scanner / Tooltip Line -->
            <div class="absolute top-3 bottom-0 w-[1px] bg-black/20 opacity-0 group-hover:opacity-100 group-hover:animate-[scan-x_6s_ease-in-out_infinite] delay-1000">
              <div class="absolute top-[20%] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa] border-2 border-[#161616]"></div>
            </div>
          </div>
        </div>`)}` })}`}${s.slug === "meta-ads" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(`<!-- MOCKUP: META ADS PREMIUM -->
        <div class="absolute right-6 top-8 w-[200px] rounded-xl border border-black/10 bg-white/90 backdrop-blur-md p-4 pointer-events-none opacity-20 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-y-2 shadow-2xl z-10 hidden md:block">
          
          <!-- Status Bar -->
          <div class="flex items-center gap-2 mb-3">
            <div class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <div class="h-2 w-20 bg-black/30 rounded"></div>
          </div>

          <!-- Metric: ROAS -->
          <div class="bg-blue-500/10 border border-blue-500/20 rounded p-2 mb-2 flex justify-between items-end transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div class="flex flex-col gap-1.5">
              <div class="h-1.5 w-8 bg-blue-400/50 rounded"></div>
              <div class="flex items-center gap-1">
                <span class="text-[11px] font-bold text-blue-400 leading-none">4.8x ROAS</span>
              </div>
            </div>
            <div class="flex gap-0.5 items-end h-4">
              <div class="w-1 bg-blue-500/40 h-[40%] rounded-t-sm origin-bottom group-hover:animate-[grow_1s_ease-out]"></div>
              <div class="w-1 bg-blue-500/60 h-[70%] rounded-t-sm origin-bottom group-hover:animate-[grow_1s_ease-out_0.1s]"></div>
              <div class="w-1 bg-blue-400 h-[100%] rounded-t-sm origin-bottom group-hover:animate-[grow_1s_ease-out_0.2s]"></div>
            </div>
          </div>

          <!-- Metric: CPA -->
          <div class="bg-black/5 border border-black/5 rounded p-2 mb-3 flex justify-between items-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            <div class="flex flex-col gap-1.5">
              <div class="h-1.5 w-8 bg-black/20 rounded"></div>
              <span class="text-[10px] font-semibold text-black/80 leading-none">$12.50 CPA</span>
            </div>
            <div class="h-4 w-4 rounded-full border-2 border-black/20 border-t-green-400 animate-spin" style="animation-duration: 2s;"></div>
          </div>

          <!-- Target Audience Dots -->
          <div class="relative h-12 w-full border-t border-black/5 pt-2 flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
            <div class="absolute inset-0 flex items-center justify-center opacity-30">
              <div class="w-8 h-8 rounded-full border border-blue-500/50 absolute"></div>
              <div class="w-16 h-16 rounded-full border border-blue-500/30 absolute"></div>
            </div>
            <div class="h-1.5 w-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] animate-pulse"></div>
            <div class="absolute w-1 h-1 bg-white rounded-full top-3 left-4 animate-ping"></div>
            <div class="absolute w-1 h-1 bg-white rounded-full bottom-3 right-5 animate-ping" style="animation-duration: 1.5s;"></div>
          </div>
          
        </div>`)}` })}`}${s.slug === "diseno-web" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(`<!-- MOCKUP: PREMIUM WEB DESIGN (UI EDITOR) -->
        <div class="absolute right-4 top-8 w-[180px] rounded-lg border border-black/10 bg-white/90 backdrop-blur-md overflow-hidden pointer-events-none opacity-20 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-y-2 shadow-2xl z-10 hidden md:block">
          
          <!-- MacOS Toolbar -->
          <div class="flex items-center gap-1.5 border-b border-black/5 px-3 py-2 bg-white/[0.02]">
            <div class="w-1.5 h-1.5 rounded-full bg-red-400/80"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-yellow-400/80"></div>
            <div class="w-1.5 h-1.5 rounded-full bg-green-400/80"></div>
          </div>

          <!-- Editor Canvas -->
          <div class="p-3 flex flex-col gap-2 relative">
            
            <!-- Hero Block -->
            <div class="w-full flex gap-2">
              <div class="flex-1 flex flex-col gap-1.5">
                <div class="h-2 w-full bg-black/20 rounded-sm"></div>
                <div class="h-2 w-3/4 bg-black/10 rounded-sm"></div>
                <div class="h-1.5 w-1/2 bg-black/5 rounded-sm mt-1"></div>
                <!-- CTA -->
                <div class="h-3 w-10 bg-blue-500 rounded-sm mt-1 relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
              </div>
              <!-- Image Block -->
              <div class="w-12 h-12 bg-black/5 rounded flex items-center justify-center border border-black/5 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500"></div>
                <svg class="w-4 h-4 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
            </div>

            <!-- Features Row -->
            <div class="flex gap-2 w-full mt-1">
              <div class="flex-1 h-6 bg-black/5 rounded-sm border border-black/5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
              <div class="flex-1 h-6 bg-black/5 rounded-sm border border-black/5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
              <div class="flex-1 h-6 bg-black/5 rounded-sm border border-black/5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400"></div>
            </div>

            <!-- Mouse Cursor Animation -->
            <div class="absolute bottom-[-5px] right-[-5px] opacity-0 group-hover:animate-[cursor-move_3s_ease-in-out_infinite] z-20">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="black" stroke-width="1.5"><path d="M4 2v20l5.5-5.5H18L4 2z"/></svg>
              <!-- Click Ripple -->
              <div class="absolute top-[-2px] left-[-2px] w-4 h-4 rounded-full border border-blue-400 scale-0 group-hover:animate-[click-ripple_3s_ease-in-out_infinite]"></div>
            </div>
            
          </div>
        </div>`)}` })}`}${s.slug === "ecommerce" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(`<!-- MOCKUP: ECOMMERCE PREMIUM (FAN OUT) -->
        <div class="absolute right-8 top-1/2 -translate-y-1/2 w-[120px] h-[120px] pointer-events-none flex items-center justify-center z-10">
          
          <!-- Card 1 (Bottom, moves left) -->
          <div class="absolute w-[110px] bg-white/95 border border-black/10 rounded-lg p-2 shadow-xl backdrop-blur-md transition-all duration-700 ease-out transform group-hover:-translate-x-16 group-hover:translate-y-2 group-hover:-rotate-12 opacity-0 group-hover:opacity-60 z-10 delay-100">
            <div class="w-full h-10 bg-black/5 rounded mb-2"></div>
            <div class="h-1.5 w-3/4 bg-black/20 rounded mb-1"></div>
            <div class="h-2.5 w-1/3 bg-blue-500/30 rounded"></div>
          </div>

          <!-- Card 2 (Middle, moves right) -->
          <div class="absolute w-[110px] bg-white/95 border border-black/10 rounded-lg p-2 shadow-xl backdrop-blur-md transition-all duration-700 ease-out transform group-hover:translate-x-16 group-hover:translate-y-2 group-hover:rotate-12 opacity-0 group-hover:opacity-60 z-20 delay-150">
            <div class="w-full h-10 bg-black/5 rounded mb-2"></div>
            <div class="h-1.5 w-3/4 bg-black/20 rounded mb-1"></div>
            <div class="h-2.5 w-1/3 bg-purple-500/30 rounded"></div>
          </div>

          <!-- Card 3 (Top, Main) -->
          <div class="absolute w-[130px] bg-white/95 border border-black/20 rounded-lg p-2.5 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-out transform translate-y-4 group-hover:-translate-y-8 group-hover:scale-110 opacity-30 group-hover:opacity-100 z-30 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div class="w-full h-14 bg-gradient-to-tr from-blue-500/20 to-transparent border border-blue-500/20 rounded mb-2.5 relative overflow-hidden flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-400 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <!-- Shine -->
              <div class="absolute top-0 bottom-0 w-6 bg-black/20 skew-x-[-20deg] -left-10 group-hover:animate-[shine_2s_ease-in-out_infinite]"></div>
            </div>
            <div class="h-1.5 w-full bg-black/30 rounded mb-1.5"></div>
            <div class="h-1.5 w-2/3 bg-black/10 rounded mb-2.5"></div>
            <div class="flex justify-between items-center border-t border-black/5 pt-2">
              <span class="text-[9px] font-bold text-black/80 leading-none">$129</span>
              <div class="h-3 w-12 bg-blue-500 rounded shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            </div>
          </div>

        </div>`)}` })}`}${s.slug === "conversiones" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(`<!-- MOCKUP: CONVERSIONS PREMIUM -->
        <div class="absolute right-8 top-10 w-[180px] rounded-xl border border-black/10 bg-white/90 backdrop-blur-md p-4 pointer-events-none opacity-20 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-y-2 shadow-2xl z-10 hidden md:flex flex-col items-center gap-2">
          
          <!-- Level 1: Traffic -->
          <div class="w-full h-8 rounded bg-blue-500/10 border border-blue-500/20 relative overflow-hidden transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex items-center justify-between px-2">
            <span class="text-[9px] uppercase font-bold text-blue-400">Tráfico</span>
            <span class="text-[10px] font-bold text-black/80">100%</span>
          </div>
          
          <!-- Level 2: Leads -->
          <div class="w-3/4 h-8 rounded bg-purple-500/10 border border-purple-500/20 relative overflow-hidden transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 flex items-center justify-between px-2">
            <span class="text-[9px] uppercase font-bold text-purple-400">Leads</span>
            <span class="text-[10px] font-bold text-black/80">45%</span>
          </div>

          <!-- Level 3: Sales -->
          <div class="w-1/2 h-8 rounded bg-green-500/10 border border-green-500/20 relative overflow-hidden transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300 flex items-center justify-between px-2 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
            <span class="text-[9px] uppercase font-bold text-green-400">Ventas</span>
            <span class="text-[10px] font-bold text-black/80">12%</span>
          </div>

          <!-- Animated Conversion Particle -->
          <div class="absolute top-2 left-[50%] ml-[-3px] w-1.5 h-4 bg-white rounded-full shadow-[0_0_8px_white] opacity-0 group-hover:animate-[drop_2.5s_ease-in-out_infinite] delay-1000"></div>

        </div>`)}` })}`}<div class="relative z-10 flex flex-col h-full justify-between gap-12"><div class="flex items-start justify-between"><div class="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-xl transition duration-500 group-hover:bg-black/10 group-hover:text-black">${unescapeHTML(s.icon)}</div><span class="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 border border-black/10 text-sm text-black opacity-0 -translate-x-4 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-black/10 group-hover:text-black">→</span></div><div><span class="text-[10px] font-medium tracking-[.2em] text-blue-300/50 mb-4 block uppercase">${s.num} — Disciplina</span><h3 class="text-3xl lg:text-4xl font-semibold text-black mb-4 transition duration-500 group-hover:translate-x-2">${s.name}</h3><p class="text-[15px] leading-relaxed text-black/50 max-w-md">${s.desc}</p>${s.features && s.features.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-5">${s.features.map((f) => renderTemplate`<span class="px-2.5 py-1 text-[10px] font-semibold text-black/60 bg-black/5 border border-black/10 rounded-full transition-colors group-hover:bg-black/10 group-hover:text-black/90">${f.title}</span>`)}</div>`}</div></div></a>`)}</div>` })}</section>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/Services.astro", void 0);
//#endregion
//#region src/data/differentiators.ts
var differentiators = [
	{
		num: "01",
		title: "Datos sobre opiniones",
		description: "Cada decisión se basa en datos del embudo, no en intuiciones. Medimos, iteramos y repetimos lo que funciona."
	},
	{
		num: "02",
		title: "Enfoque en conversión",
		description: "Cada diseño y cada campaña existe con un único objetivo: convertir tráfico en ingresos reales."
	},
	{
		num: "03",
		title: "Velocidad de ejecución",
		description: "Equipos reducidos y procesos ágiles para pasar del diagnóstico a resultados en semanas, no en meses."
	},
	{
		num: "04",
		title: "Transparencia total",
		description: "Reportes claros y métricas accesibles. Siempre sabes qué está haciendo tu inversión y por qué."
	}
];
//#endregion
//#region src/components/Differentiators.astro
var $$Differentiators = createComponent(async ($$result, $$props, $$slots) => {
	let dynamicDiffs = [];
	try {
		const settings = await getWpSettings();
		if (settings.differentiators && settings.differentiators.items && settings.differentiators.items.length > 0) dynamicDiffs = settings.differentiators.items;
	} catch (e) {
		console.error("Error fetching differentiators:", e);
	}
	const differentiators$1 = dynamicDiffs.length > 0 ? dynamicDiffs : differentiators;
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden border-t border-black/10 bg-white text-black"><div class="grid-bg absolute inset-0" aria-hidden="true"></div>${renderComponent($$result, "Container", $$Container, { "class": "relative z-10 py-24 lg:py-36" }, { "default": ($$result) => renderTemplate`<div class="reveal-up flex flex-wrap items-end justify-between gap-10"><div class="max-w-[780px]"><div class="mb-8 flex items-center gap-4"><span class="h-px w-9 bg-accent"></span><span class="text-[11px] font-medium uppercase tracking-[.24em] text-black/40">Diferenciales</span><span class="h-px w-24 bg-black/10"></span></div><h2 class="text-[clamp(3rem,6.8vw,6.5rem)] font-semibold leading-[.9] tracking-[-.065em]"><span class="block text-black/15">Por qué Croilab</span><span class="block text-accent">marca la diferencia</span></h2></div></div><div class="mt-20 lg:mt-28 grid gap-16 lg:grid-cols-2 lg:items-center"><!-- LADO IZQUIERDO: IMAGEN --><div class="reveal-up relative w-full aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden"><!-- Overlay sutil para unificar colores --><div class="absolute inset-0 bg-black/20 z-10 transition-colors duration-500 hover:bg-transparent"></div><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Por qué elegir Croilab" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"></div><!-- LADO DERECHO: LISTA EDITORIAL --><ul class="flex flex-col w-full">${differentiators$1.map((d, i) => renderTemplate`<li class="reveal-up border-t border-black/10 last:border-b"${addAttribute(`--i:${i}`, "style")}><div class="group relative flex flex-col sm:flex-row sm:items-start lg:items-center justify-between gap-6 py-8 transition-colors duration-300"><div class="flex items-start gap-4 sm:gap-6"><span class="text-xs font-medium tracking-[.2em] text-black/35 transition-colors duration-300 group-hover:text-accent mt-2 sm:mt-1">${d.num}</span><div class="space-y-3 max-w-lg"><h3 class="text-2xl sm:text-3xl lg:text-[2rem] font-semibold leading-tight tracking-[-.04em] text-black transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent">${d.title}</h3><p class="text-sm leading-relaxed text-black/45 transition-colors duration-300 group-hover:text-black/70">${d.description}</p></div></div><span class="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 text-lg text-black transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white sm:flex">↗</span></div></li>`)}</ul></div>` })}</section>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/Differentiators.astro", void 0);
//#endregion
//#region src/components/SuccessCasesHome.astro
var $$SuccessCasesHome = createComponent(async ($$result, $$props, $$slots) => {
	function parseResult(raw, label) {
		const m = raw.match(/^([+\-]?)([\d.,]+)(.*)$/);
		if (m) {
			const num = m[2].replace(/,/g, ".");
			const target = parseFloat(num);
			return {
				prefix: m[1] || "",
				num: m[2],
				suffix: m[3] || "",
				target: isNaN(target) ? null : target,
				label
			};
		}
		return {
			prefix: "",
			num: raw,
			suffix: "",
			target: null,
			label
		};
	}
	function barHeight(value) {
		const m = value.match(/(\d+(?:[.,]\d+)?)/);
		let n = m ? parseFloat(m[1].replace(/,/g, ".")) : 0;
		n = Math.min(n, 100);
		return Math.max(n, 12);
	}
	let wpCases = [];
	try {
		const { items } = await getWpCases({ per_page: "3" });
		wpCases = items.map((c) => {
			const data = c.croilab_caso || {};
			return {
				slug: c.slug,
				client: data.client || c.title?.rendered || "Cliente",
				industry: data.industry || "Industria",
				image: data.image || "",
				description: data.description || "",
				result: data.result || "",
				metric: data.metric || "",
				solution: data.solution || "",
				actions: (data.actions || []).map((a) => a.action),
				metrics: data.metrics || []
			};
		});
	} catch (e) {
		console.error("Error fetching cases:", e);
	}
	const panels = (wpCases.length > 0 ? wpCases : serviceCases).map((c) => ({
		slug: c.slug,
		client: c.client,
		industry: c.industry,
		image: c.image,
		summary: c.description,
		result: parseResult(c.result, c.metric),
		achieved: c.solution,
		actions: c.actions.slice(0, 3),
		bars: c.metrics.map((m) => ({
			value: m.value,
			label: m.label,
			barHeight: barHeight(m.value)
		}))
	}));
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative bg-[#f8f9fa] py-32 lg:py-40 border-t border-black/5 overflow-hidden" id="success-cases" data-astro-cid-irnfovrx><div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" data-astro-cid-irnfovrx></div><div class="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" data-astro-cid-irnfovrx></div><div class="grid-bg absolute inset-0 opacity-[0.03] pointer-events-none" data-astro-cid-irnfovrx></div>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10",
		"data-astro-cid-irnfovrx": true
	}, { "default": ($$result) => renderTemplate`<div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 reveal-up" data-astro-cid-irnfovrx><div class="max-w-2xl" data-astro-cid-irnfovrx><span class="text-[11px] font-bold uppercase tracking-[.25em] text-blue-600 mb-5 block" data-astro-cid-irnfovrx>Casos de éxito</span><h2 class="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter text-black leading-[1.03]" data-astro-cid-irnfovrx>Resultados que<br data-astro-cid-irnfovrx><span class="italic font-serif font-light text-black/40" data-astro-cid-irnfovrx>se tocan.</span></h2></div><a href="/proyectos" class="reveal-up group flex items-center gap-3 text-[14px] font-bold text-black transition-all hover:text-blue-600 pb-2" data-astro-cid-irnfovrx>Ver todos los casos<span class="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 transition-transform group-hover:translate-x-1" data-astro-cid-irnfovrx>→</span></a></div><div class="flex flex-wrap gap-2.5 mb-12 reveal-up" role="tablist" aria-label="Casos de éxito" data-astro-cid-irnfovrx>${panels.map((p, i) => renderTemplate`<button type="button" role="tab"${addAttribute(i === 0, "aria-selected")} data-tab${addAttribute(i, "data-idx")}${addAttribute(["relative px-6 py-3 rounded-full text-sm font-bold border transition-all duration-300", i === 0 ? "bg-black text-white border-black shadow-lg" : "bg-white text-black/60 border-black/10 hover:border-black/20 hover:text-black"], "class:list")} data-astro-cid-irnfovrx>${p.client}</button>`)}</div>${panels.map((p, i) => renderTemplate`<div${addAttribute(i === 0 ? "sc-panel" : "sc-panel hidden", "class")}${addAttribute(i, "data-panel")} role="tabpanel" data-astro-cid-irnfovrx><div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:auto-rows-[minmax(200px,auto)]" data-astro-cid-irnfovrx><!-- CARD A: Imagen + resumen corto --><article class="relative group overflow-hidden rounded-[2rem] lg:row-span-2 border border-black/5 bg-white flex flex-col" data-astro-cid-irnfovrx><div class="relative w-full h-56 lg:h-[46%] overflow-hidden" data-astro-cid-irnfovrx><img${addAttribute(p.image, "src")}${addAttribute(p.client, "alt")} class="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" data-astro-cid-irnfovrx><div class="absolute inset-0 bg-gradient-to-t from-white to-transparent" data-astro-cid-irnfovrx></div><div class="absolute top-5 left-5 bg-white/80 backdrop-blur-md border border-black/5 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[.15em] text-black shadow-sm" data-astro-cid-irnfovrx>${p.industry}</div></div><div class="flex-1 p-8 flex flex-col justify-between" data-astro-cid-irnfovrx><div data-astro-cid-irnfovrx><div class="text-[11px] font-bold tracking-[.2em] text-black/30 uppercase mb-2" data-astro-cid-irnfovrx>Cliente</div><h3 class="text-2xl font-bold text-black tracking-tight mb-4" data-astro-cid-irnfovrx>${p.client}</h3><p class="text-[15px] leading-relaxed text-black/60" data-astro-cid-irnfovrx>${p.summary}</p></div><a${addAttribute(`/casos/${p.slug}`, "href")} class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-black group-hover:text-blue-600 transition-colors" data-astro-cid-irnfovrx>Ver caso completo<span class="transition-transform group-hover:translate-x-1" data-astro-cid-irnfovrx>→</span></a></div></article><!-- CARD B: Qué se ha conseguido --><article class="relative overflow-hidden rounded-[2rem] lg:row-span-2 border border-black/10 bg-white p-8 flex flex-col" data-astro-cid-irnfovrx><div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6" data-astro-cid-irnfovrx><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-irnfovrx><path d="M20 6 9 17l-5-5" data-astro-cid-irnfovrx></path></svg></div><h4 class="text-lg font-bold text-black mb-3 flex items-center gap-2" data-astro-cid-irnfovrx>Qué se ha conseguido</h4><p class="text-[15px] leading-relaxed text-black/50 mb-6" data-astro-cid-irnfovrx>${p.achieved}</p><ul class="mt-auto space-y-3.5" data-astro-cid-irnfovrx>${p.actions.map((a) => renderTemplate`<li class="flex items-start gap-3 text-[14px] text-black/70" data-astro-cid-irnfovrx><span class="text-blue-600 font-bold mt-0.5" data-astro-cid-irnfovrx>✓</span>${a}</li>`)}</ul></article><!-- CARD C: % (resultado) --><article class="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#0a0a0a] text-white p-8 flex flex-col justify-center shadow-2xl shadow-black/20" data-astro-cid-irnfovrx><div class="absolute -top-8 -right-8 w-32 h-32 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" data-astro-cid-irnfovrx></div><span class="text-[10px] font-bold uppercase tracking-[.2em] text-white/40 mb-4 relative z-10" data-astro-cid-irnfovrx>Resultado clave</span><div class="text-[clamp(3rem,5vw,4.5rem)] font-extrabold leading-none relative z-10" data-astro-cid-irnfovrx>${p.result.prefix}<span class="sc-pct-num"${addAttribute(p.result.target, "data-target")} data-astro-cid-irnfovrx>${p.result.num}</span>${p.result.suffix}</div><div class="text-[11px] font-bold uppercase tracking-widest text-cyan-300 mt-3 relative z-10" data-astro-cid-irnfovrx>${p.result.label}</div></article><!-- CARD D: Gráficos --><article class="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-8 flex flex-col justify-center" data-astro-cid-irnfovrx><span class="text-[10px] font-bold uppercase tracking-[.2em] text-black/30 mb-5" data-astro-cid-irnfovrx>Crecimiento</span><div class="flex items-end justify-between gap-3 h-36" data-astro-cid-irnfovrx>${p.bars.map((b) => renderTemplate`<div class="flex flex-col items-center justify-end gap-2 flex-1 min-w-0 h-full" data-astro-cid-irnfovrx><span class="text-[10px] font-bold text-black/70 leading-none truncate max-w-full" data-astro-cid-irnfovrx>${b.value}</span><div class="relative w-full flex-1 min-h-0 bg-blue-50/70 border border-black/5 rounded-t-lg overflow-hidden" data-astro-cid-irnfovrx><div class="sc-bar absolute bottom-0 left-0 right-0 rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-400"${addAttribute(`--h: ${b.barHeight}%`, "style")} data-astro-cid-irnfovrx></div></div><span class="text-[9px] text-black/40 uppercase tracking-wide leading-tight text-center" data-astro-cid-irnfovrx>${b.label}</span></div>`)}</div></article></div></div>`)}` })}</section>${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/components/SuccessCasesHome.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/SuccessCasesHome.astro", void 0);
//#endregion
//#region src/components/ContactModal.astro
var $$ContactModal = createComponent(($$result, $$props, $$slots) => {
	const waLink = whatsappLink();
	return renderTemplate`${maybeRenderHead($$result)}<!-- Modal de contacto (abierto por [data-open-contact]) --><div id="contact-modal" class="fixed inset-0 z-[90] hidden items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" data-contact-modal aria-hidden="true"><!-- Backdrop --><div class="absolute inset-0 bg-black/60 backdrop-blur-md" data-contact-close></div><!-- Card --><div class="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.35)]"><div class="grid-bg absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true"></div><!-- Header --><div class="relative z-10 flex items-center justify-between px-7 pt-7 pb-4 border-b border-black/5"><div><h3 id="contact-modal-title" class="text-2xl font-bold tracking-tight text-black">Iniciar proyecto</h3><p class="mt-1 text-sm text-black/50">Cuéntanos tu objetivo y te respondemos en menos de 24h.</p></div><button type="button" data-contact-close aria-label="Cerrar" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5 text-black/60 transition hover:bg-black/10 hover:text-black"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div><!-- Form --><form id="contact-modal-form" class="relative z-10 flex flex-col gap-4 px-7 py-6" novalidate><div class="flex flex-col gap-1"><label for="cm-nombre" class="text-xs font-semibold uppercase tracking-[.16em] text-black/50">Nombre</label><input id="cm-nombre" name="nombre" type="text" required placeholder="Tu nombre" class="w-full rounded-xl border border-black/10 bg-[#f8f9fa] px-4 py-3 text-[15px] text-black placeholder:text-black/30 outline-none transition focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5"></div><div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div class="flex flex-col gap-1"><label for="cm-email" class="text-xs font-semibold uppercase tracking-[.16em] text-black/50">Email</label><input id="cm-email" name="email" type="email" required placeholder="tucorreo@empresa.com" class="w-full rounded-xl border border-black/10 bg-[#f8f9fa] px-4 py-3 text-[15px] text-black placeholder:text-black/30 outline-none transition focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5"></div><div class="flex flex-col gap-1"><label for="cm-telefono" class="text-xs font-semibold uppercase tracking-[.16em] text-black/50">Teléfono</label><input id="cm-telefono" name="telefono" type="tel" placeholder="+57 300 000 0000" class="w-full rounded-xl border border-black/10 bg-[#f8f9fa] px-4 py-3 text-[15px] text-black placeholder:text-black/30 outline-none transition focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5"></div></div><div class="flex flex-col gap-1"><label for="cm-mensaje" class="text-xs font-semibold uppercase tracking-[.16em] text-black/50">Mensaje</label><textarea id="cm-mensaje" name="mensaje" rows="3" required placeholder="¿Qué resultado quieres conseguir?" class="w-full resize-none rounded-xl border border-black/10 bg-[#f8f9fa] px-4 py-3 text-[15px] text-black placeholder:text-black/30 outline-none transition focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5"></textarea></div><div id="cm-status" class="hidden"></div><button type="submit" id="cm-submit" class="magnetic group relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-full bg-black px-8 py-4 text-[14px] font-bold text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]"><div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]"></div><span id="cm-submit-label">Enviar mensaje</span><span class="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">↗</span></button><div class="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between"><a${addAttribute(`mailto:${site.email}`, "href")} class="group inline-flex items-center gap-1.5 text-xs font-medium text-black/50 transition hover:text-black">${site.email}</a><a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-1.5 text-xs font-medium text-black/50 transition hover:text-black">WhatsApp directo <span class="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span></a></div></form></div></div><script>(function(){${defineScriptVars({
		wpBase: "https://darkblue-flamingo-706734.hostingersite.com",
		fluentFormId: 1
	})}
  (() => {
    const modal = document.getElementById('contact-modal');
    if (!modal) return;

    const form = document.getElementById('contact-modal-form');
    const closeEls = modal.querySelectorAll('[data-contact-close]');
    const status = document.getElementById('cm-status');
    const submitBtn = document.getElementById('cm-submit');
    const submitLabel = document.getElementById('cm-submit-label');

    function open() {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      const first = form && form.querySelector('input');
      if (first) setTimeout(() => first.focus(), 50);
    }

    function close() {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (status) { status.classList.add('hidden'); status.textContent = ''; }
    }

    // Abrir al hacer click en cualquier [data-open-contact]
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-open-contact]');
      if (!trigger) return;
      e.preventDefault();
      open();
    });

    closeEls.forEach((el) => el.addEventListener('click', close));

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    if (form && submitBtn && submitLabel) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!form.reportValidity()) return;

        submitBtn.disabled = true;
        submitLabel.textContent = 'Enviando...';
        if (status) {
          status.classList.remove('hidden');
          status.className = 'rounded-lg bg-black/5 px-4 py-3 text-sm text-black/60';
          status.textContent = 'Enviando tu mensaje, un momento...';
        }

        const getVal = (name) => {
          const el = form.elements[name];
          return el ? el.value : '';
        };

        const payload = {
          form_id: fluentFormId,
          data: {
            nombre: getVal('nombre'),
            email: getVal('email'),
            telefono: getVal('telefono'),
            mensaje: getVal('mensaje'),
          },
        };

        try {
          const res = await fetch(\`\${wpBase}/wp-json/fluentform/submit\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          if (res.ok) {
            if (status) {
              status.className = 'rounded-lg bg-green-500/10 px-4 py-3 text-sm font-medium text-green-700';
              status.textContent = '¡Mensaje enviado! Te responderemos en menos de 24 horas.';
            }
            form.reset();
          } else {
            throw new Error('HTTP ' + res.status);
          }
        } catch (err) {
          if (status) {
            status.className = 'rounded-lg bg-red-500/10 px-4 py-3 text-sm font-medium text-red-600';
            status.textContent = 'Algo salió mal al enviar. Escríbenos por WhatsApp o correo mientras resolvemos el envío.';
          }
        } finally {
          submitBtn.disabled = false;
          submitLabel.textContent = 'Enviar mensaje';
        }
      });
    }
  })();
})();<\/script>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/ContactModal.astro", void 0);
//#endregion
//#region src/components/AgencyComparison.astro
var $$AgencyComparison = createComponent(($$result, $$props, $$slots) => {
	const comparisons = [
		{
			other: "Te cobran por tareas o paquetes cerrados",
			croilab: "Nos asociamos a tu crecimiento y nos enfocamos en el ROI"
		},
		{
			other: "Delegas tu proyecto a practicantes o juniors",
			croilab: "Trabajas directo con ingenieros y estrategas senior"
		},
		{
			other: "Diseños de plantillas que todos usan",
			croilab: "Ecosistemas digitales a medida basados en CRO"
		},
		{
			other: "Comunicación lenta, oscura e ineficiente",
			croilab: "Transparencia total y visibilidad en tiempo real"
		},
		{
			other: "Obsesión por métricas vanidosas (Likes)",
			croilab: "Obsesión absoluta por las conversiones y ventas"
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden border-t border-black/10 bg-white text-black py-24 lg:py-36"><div class="grid-bg absolute inset-0 opacity-[0.03] pointer-events-none"></div>${renderComponent($$result, "Container", $$Container, { "class": "relative z-10" }, { "default": ($$result) => renderTemplate`<div class="max-w-3xl mx-auto text-center mb-16 lg:mb-20 reveal-up"><span class="text-[11px] font-bold uppercase tracking-[.25em] text-black/50 mb-6 block">El Estándar vs Nosotros</span><h2 class="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[0.95] tracking-tight text-black mb-6">Por qué somos <br class="hidden sm:block"><span class="italic font-serif font-light text-black/40">la opción lógica.</span></h2><p class="text-[16px] md:text-[18px] text-black/60 max-w-xl mx-auto leading-relaxed">Deja de perder tiempo y dinero con agencias tradicionales que no entienden de negocios. Nosotros operamos como un socio estratégico de crecimiento y rentabilidad.</p></div><div class="grid lg:grid-cols-2 gap-8 items-stretch"><!-- Columna Con Croilab --><div class="reveal-up relative flex"><div class="w-full bg-[#050505] rounded-3xl p-8 lg:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.25)] relative overflow-hidden border border-white/10 flex flex-col"><div class="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] animate-glowDrift pointer-events-none"></div><div class="flex items-center justify-center mb-8"><div class="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></div></div><h3 class="text-center text-2xl lg:text-3xl font-bold text-white mb-10 relative z-10">Con Croilab</h3><ul class="space-y-6 relative z-10 flex-1">${comparisons.map((item) => renderTemplate`<li class="flex flex-col items-center text-center gap-1.5"><span class="text-blue-400 flex-shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span><span class="text-[14px] md:text-[15px] font-medium text-white/90 leading-relaxed">${item.croilab}</span></li>`)}</ul></div></div><!-- Columna Agencias Tradicionales --><div class="reveal-up relative flex" style="--delay: 0.15s;"><div class="w-full bg-white rounded-3xl p-8 lg:p-10 border border-black/5 shadow-sm relative overflow-hidden flex flex-col"><div class="absolute top-0 right-0 w-[300px] h-[300px] bg-black/[0.04] rounded-full blur-[100px] animate-glowDrift pointer-events-none"></div><div class="flex items-center justify-center mb-8"><div class="w-12 h-12 rounded-full bg-black/5 text-black/50 flex items-center justify-center"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div></div><h3 class="text-center text-2xl lg:text-3xl font-bold text-black/40 mb-10">Agencias Tradicionales</h3><ul class="space-y-6 relative z-10 flex-1">${comparisons.map((item) => renderTemplate`<li class="flex flex-col items-center text-center gap-1.5 opacity-60"><span class="text-black flex-shrink-0"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></span><span class="text-[14px] md:text-[15px] font-medium text-black leading-relaxed">${item.other}</span></li>`)}</ul></div></div></div>` })}</section>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/AgencyComparison.astro", void 0);
//#endregion
//#region src/components/WorkProcess.astro
var $$WorkProcess = createComponent(($$result, $$props, $$slots) => {
	const steps = [
		{
			id: "auditoria",
			num: "01",
			title: "Auditoría & Estrategia",
			desc: "Definimos una hoja de ruta enfocada 100% en aumentar tu rentabilidad y conversiones.",
			color: "from-blue-600 to-cyan-400"
		},
		{
			id: "ux",
			num: "02",
			title: "UX & Copywriting",
			desc: "Estructuramos la información y escribimos textos persuasivos que atacan los puntos de dolor.",
			color: "from-blue-600 to-cyan-400"
		},
		{
			id: "ui",
			num: "03",
			title: "Diseño UI Premium",
			desc: "Aplicamos una capa visual de alta gama que posiciona tu marca como líder indiscutible del sector.",
			color: "from-blue-600 to-cyan-400"
		},
		{
			id: "dev",
			num: "04",
			title: "Desarrollo Headless",
			desc: "Programamos tu web con Astro.js y React para lograr tiempos de carga menores a 1 segundo.",
			color: "from-blue-600 to-cyan-400"
		},
		{
			id: "qa",
			num: "05",
			title: "QA & Testing",
			desc: "Auditoría técnica exhaustiva en todos los dispositivos para garantizar cero fallos antes de salir en vivo.",
			color: "from-blue-600 to-cyan-400"
		},
		{
			id: "cro",
			num: "06",
			title: "Lanzamiento & CRO",
			desc: "Publicamos la web y comenzamos a medir con mapas de calor para optimizar continuamente la conversión.",
			color: "from-blue-600 to-cyan-400"
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative bg-white py-32 overflow-hidden border-t border-black/5" data-astro-cid-kab3iyy4><div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" data-astro-cid-kab3iyy4></div>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10",
		"data-astro-cid-kab3iyy4": true
	}, { "default": ($$result) => renderTemplate`<div class="text-center max-w-3xl mx-auto mb-20 reveal-up" data-astro-cid-kab3iyy4><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6" data-astro-cid-kab3iyy4><span class="text-[11px] font-bold uppercase tracking-widest text-blue-600" data-astro-cid-kab3iyy4>Nuestro Sistema</span></div><h2 class="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight text-black leading-tight mb-6" data-astro-cid-kab3iyy4>Un proceso diseñado <br data-astro-cid-kab3iyy4><span class="italic font-serif font-light text-blue-600" data-astro-cid-kab3iyy4>para no fallar.</span></h2><p class="text-lg text-black/60" data-astro-cid-kab3iyy4>Dejamos la improvisación para los amateurs. Cada fase de nuestro desarrollo está calculada para convertir clics en clientes reales.</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pb-20" data-astro-cid-kab3iyy4>${steps.map((step, index) => renderTemplate`<div class="group reveal-up flex flex-col h-full"${addAttribute(`--delay: ${index * .1}s;`, "style")} data-astro-cid-kab3iyy4><!-- Contenedor del mockup --><div class="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-8 perspective-1000 border border-black/10 bg-white p-2 flex-shrink-0" data-astro-cid-kab3iyy4><div class="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-[1.5rem] transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-0" data-astro-cid-kab3iyy4></div><div class="w-full h-full rounded-xl overflow-hidden relative z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] transform group-hover:-rotate-y-6 group-hover:rotate-x-6 group-hover:scale-[1.02] transition-transform duration-700 flex items-center justify-center bg-slate-50 p-4" data-astro-cid-kab3iyy4><div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" data-astro-cid-kab3iyy4></div><div class="shimmer-effect absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 mix-blend-overlay" data-astro-cid-kab3iyy4></div><!-- MOCKUPS HTML CUSTOM --><div class="w-full h-full backdrop-blur-md rounded-lg p-3 relative overflow-hidden flex flex-col group-hover:scale-105 transition-transform duration-700 bg-white border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)]" data-astro-cid-kab3iyy4><!-- Mac header dot --><div class="flex gap-1.5 mb-4 relative z-20" data-astro-cid-kab3iyy4><div class="w-2 h-2 rounded-full bg-gray-200" data-astro-cid-kab3iyy4></div><div class="w-2 h-2 rounded-full bg-gray-200" data-astro-cid-kab3iyy4></div><div class="w-2 h-2 rounded-full bg-gray-200" data-astro-cid-kab3iyy4></div></div><!-- 1. Auditoría (High-End SaaS Widget) -->${step.id === "auditoria" && renderTemplate`<div class="flex-1 flex flex-col justify-between relative bg-white rounded-lg shadow-sm border border-gray-100 p-3 overflow-hidden" data-astro-cid-kab3iyy4><!-- Top Stats --><div class="flex justify-between items-start z-10 relative" data-astro-cid-kab3iyy4><div data-astro-cid-kab3iyy4><div class="text-[8px] font-semibold text-gray-400 uppercase tracking-wider mb-1" data-astro-cid-kab3iyy4>Conversión</div><div class="text-2xl font-black text-gray-900 leading-none" data-astro-cid-kab3iyy4>4.2%</div></div><div class="bg-emerald-50 text-emerald-600 font-bold text-[8px] px-1.5 py-0.5 rounded flex items-center gap-0.5 shadow-sm border border-emerald-100" data-astro-cid-kab3iyy4><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-kab3iyy4><path d="m18 15-6-6-6 6" data-astro-cid-kab3iyy4></path></svg>+124%</div></div><!-- Decorative Circle in background --><div class="absolute -right-4 top-2 w-16 h-16 rounded-full border-[4px] border-gray-50 flex items-center justify-center z-0" data-astro-cid-kab3iyy4><div class="w-10 h-10 rounded-full border-[3px] border-blue-50 border-t-blue-500 transform -rotate-45 group-hover:rotate-[315deg] transition-transform duration-1000 ease-out" data-astro-cid-kab3iyy4></div></div><!-- Smooth Line Chart --><div class="absolute bottom-0 left-0 w-full h-[55%] z-10" data-astro-cid-kab3iyy4><svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" data-astro-cid-kab3iyy4><!-- Gradient Fill --><linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1" data-astro-cid-kab3iyy4><stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25" data-astro-cid-kab3iyy4></stop><stop offset="100%" stop-color="#3b82f6" stop-opacity="0" data-astro-cid-kab3iyy4></stop></linearGradient><path d="M0,100 C20,80 30,90 50,60 C70,30 80,40 100,15 L100,100 Z" fill="url(#chartGrad)" class="opacity-0 group-hover:opacity-100 transition-opacity duration-700" data-astro-cid-kab3iyy4></path><!-- Curved Line --><path d="M0,100 C20,80 30,90 50,60 C70,30 80,40 100,15" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" class="dash-anim drop-shadow-[0_4px_4px_rgba(37,99,235,0.4)]" data-astro-cid-kab3iyy4></path><!-- Target Dot --><circle cx="100" cy="15" r="4" fill="white" stroke="#2563eb" stroke-width="2" class="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500" data-astro-cid-kab3iyy4></circle><circle cx="100" cy="15" r="8" fill="#3b82f6" class="opacity-0 group-hover:opacity-30 transition-opacity duration-500 delay-500 animate-ping" data-astro-cid-kab3iyy4></circle><!-- Dotted Guide Line --><line x1="100" y1="15" x2="100" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 2" class="opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-500" data-astro-cid-kab3iyy4></line></svg></div></div>`}<!-- 2. UX & Copywriting (Wireframe Figma Style) -->${step.id === "ux" && renderTemplate`<div class="flex-1 flex flex-col relative w-full h-full bg-white rounded-lg shadow-sm border border-gray-100 p-2 overflow-hidden" data-astro-cid-kab3iyy4><!-- Figma Toolbar --><div class="absolute top-2 left-1/2 -translate-x-1/2 bg-gray-900 rounded-full px-3 py-1.5 flex gap-2 items-center shadow-lg z-20" data-astro-cid-kab3iyy4><div class="w-3 h-3 border-2 border-white/50 rounded-sm" data-astro-cid-kab3iyy4></div><div class="w-3 h-3 text-white/50 flex items-center justify-center" data-astro-cid-kab3iyy4><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kab3iyy4><path d="M5 12h14M12 5v14" data-astro-cid-kab3iyy4></path></svg></div><div class="text-[10px] font-bold text-white/50 font-serif" data-astro-cid-kab3iyy4>T</div></div><!-- Web Wireframe --><div class="mt-7 mx-auto w-[92%] h-full bg-gray-50 border border-gray-200 rounded-t-lg p-2.5 relative group-hover:bg-blue-50/30 transition-colors duration-500" data-astro-cid-kab3iyy4><!-- Grid guidelines --><div class="absolute inset-0 flex justify-between px-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" data-astro-cid-kab3iyy4><div class="w-px h-full bg-blue-200/50" data-astro-cid-kab3iyy4></div><div class="w-px h-full bg-blue-200/50" data-astro-cid-kab3iyy4></div><div class="w-px h-full bg-blue-200/50" data-astro-cid-kab3iyy4></div><div class="w-px h-full bg-blue-200/50" data-astro-cid-kab3iyy4></div></div><div class="w-full flex gap-2 h-full" data-astro-cid-kab3iyy4><!-- Left: Text --><div class="flex-1 flex flex-col gap-1.5 pt-2 relative z-10" data-astro-cid-kab3iyy4><div class="w-full h-3 bg-gray-300 rounded group-hover:bg-blue-300 transition-colors duration-500" data-astro-cid-kab3iyy4></div><div class="w-2/3 h-3 bg-gray-300 rounded group-hover:bg-blue-300 transition-colors duration-500" data-astro-cid-kab3iyy4></div><div class="w-full h-1.5 bg-gray-200 rounded mt-1.5" data-astro-cid-kab3iyy4></div><div class="w-5/6 h-1.5 bg-gray-200 rounded" data-astro-cid-kab3iyy4></div><div class="w-1/2 h-4 bg-gray-900 rounded mt-1.5 group-hover:bg-blue-600 transition-colors duration-500 shadow-sm" data-astro-cid-kab3iyy4></div></div><!-- Right: Image placeholder --><div class="flex-1 bg-white border-2 border-dashed border-gray-300 rounded-md relative flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-50 transition-colors duration-500" data-astro-cid-kab3iyy4><svg class="w-5 h-5 text-gray-300 group-hover:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kab3iyy4><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-kab3iyy4></path></svg><!-- Cursor Arrow appearing on hover --><div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-300 z-30" data-astro-cid-kab3iyy4><svg class="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-kab3iyy4><path d="M4 2v20l5.5-5.5H18z" stroke="white" stroke-width="1.5" data-astro-cid-kab3iyy4></path></svg></div></div></div></div></div>`}<!-- 3. UI Premium (Light) -->${step.id === "ui" && renderTemplate`<div class="flex-1 relative overflow-hidden bg-gradient-to-br from-white to-blue-50/60 rounded-lg border border-gray-100 shadow-[0_10px_40px_rgba(59,130,246,0.10)]" data-astro-cid-kab3iyy4><!-- decorative glows --><div class="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl" data-astro-cid-kab3iyy4></div><div class="absolute -bottom-6 -left-6 w-16 h-16 bg-cyan-400/20 rounded-full blur-2xl" data-astro-cid-kab3iyy4></div><!-- Mini Nav --><div class="relative z-10 flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-white/80 backdrop-blur-sm" data-astro-cid-kab3iyy4><div class="flex items-center gap-1.5" data-astro-cid-kab3iyy4><div class="w-4 h-4 rounded-md bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.4)]" data-astro-cid-kab3iyy4></div><div class="w-6 h-1.5 bg-gray-900 rounded-full" data-astro-cid-kab3iyy4></div></div><div class="flex items-center gap-1.5" data-astro-cid-kab3iyy4><div class="w-5 h-1.5 bg-black/20 rounded-full" data-astro-cid-kab3iyy4></div><div class="w-5 h-1.5 bg-black/20 rounded-full" data-astro-cid-kab3iyy4></div><div class="w-8 h-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-sm" data-astro-cid-kab3iyy4></div></div></div><!-- Hero --><div class="relative z-10 px-3 pt-3 pb-2" data-astro-cid-kab3iyy4><div class="flex items-center gap-1 mb-1.5" data-astro-cid-kab3iyy4><div class="w-8 h-1.5 rounded-full bg-blue-600" data-astro-cid-kab3iyy4></div><div class="w-5 h-1.5 rounded-full bg-blue-200" data-astro-cid-kab3iyy4></div></div><div class="flex items-center gap-1 mb-2" data-astro-cid-kab3iyy4><div class="w-10 h-1.5 rounded-full bg-black/70" data-astro-cid-kab3iyy4></div><div class="w-7 h-1.5 rounded-full bg-black/40" data-astro-cid-kab3iyy4></div></div><div class="flex items-center gap-1.5 mb-2.5" data-astro-cid-kab3iyy4><div class="w-9 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_2px_8px_rgba(59,130,246,0.35)]" data-astro-cid-kab3iyy4></div><div class="w-7 h-3 rounded-full bg-black/10" data-astro-cid-kab3iyy4></div></div><!-- Feature card row --><div class="grid grid-cols-2 gap-1.5" data-astro-cid-kab3iyy4><div class="bg-white rounded-md border border-gray-100 p-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.04)]" data-astro-cid-kab3iyy4><div class="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 mb-1" data-astro-cid-kab3iyy4></div><div class="w-8 h-1 bg-black/60 rounded-full mb-1" data-astro-cid-kab3iyy4></div><div class="w-6 h-1 bg-black/20 rounded-full" data-astro-cid-kab3iyy4></div></div><div class="bg-white rounded-md border border-gray-100 p-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.04)]" data-astro-cid-kab3iyy4><div class="flex items-center justify-between mb-1" data-astro-cid-kab3iyy4><div class="text-[8px] font-black text-gray-900 leading-none" data-astro-cid-kab3iyy4>+45%</div><div class="w-3 h-1.5 rounded-full bg-emerald-100" data-astro-cid-kab3iyy4></div></div><div class="w-6 h-1 bg-black/30 rounded-full mb-1" data-astro-cid-kab3iyy4></div><div class="flex items-end gap-0.5 h-3" data-astro-cid-kab3iyy4><div class="flex-1 h-1 bg-blue-200 rounded-sm" data-astro-cid-kab3iyy4></div><div class="flex-1 h-2 bg-blue-300 rounded-sm" data-astro-cid-kab3iyy4></div><div class="flex-1 h-1.5 bg-blue-400 rounded-sm" data-astro-cid-kab3iyy4></div><div class="flex-1 h-3 bg-blue-600 rounded-sm" data-astro-cid-kab3iyy4></div></div></div></div></div></div>`}<!-- 4. Dev (Light - Code Editor) -->${step.id === "dev" && renderTemplate`<div class="flex-1 flex flex-col relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50" data-astro-cid-kab3iyy4><!-- Editor top bar --><div class="flex items-center justify-between px-3 py-2 bg-gray-900 border-b border-gray-800" data-astro-cid-kab3iyy4><div class="flex items-center gap-1.5" data-astro-cid-kab3iyy4><div class="w-2 h-2 rounded-full bg-red-400" data-astro-cid-kab3iyy4></div><div class="w-2 h-2 rounded-full bg-yellow-400" data-astro-cid-kab3iyy4></div><div class="w-2 h-2 rounded-full bg-green-400" data-astro-cid-kab3iyy4></div></div><div class="flex items-center gap-1.5" data-astro-cid-kab3iyy4><div class="w-10 h-1.5 bg-white/20 rounded-full" data-astro-cid-kab3iyy4></div><div class="w-4 h-3 rounded bg-gradient-to-r from-blue-500 to-cyan-400" data-astro-cid-kab3iyy4></div></div></div><!-- Code lines --><div class="flex-1 p-3 font-mono text-[9px] leading-relaxed text-gray-700 overflow-hidden" data-astro-cid-kab3iyy4><div class="flex gap-2" data-astro-cid-kab3iyy4><span class="text-gray-300" data-astro-cid-kab3iyy4>1</span><span data-astro-cid-kab3iyy4><span class="text-pink-500" data-astro-cid-kab3iyy4>import</span> <span class="text-gray-800" data-astro-cid-kab3iyy4>${"{"} ref ${"}"}</span> <span class="text-pink-500" data-astro-cid-kab3iyy4>from</span> <span class="text-emerald-600" data-astro-cid-kab3iyy4>'vue'</span></span></div><div class="flex gap-2" data-astro-cid-kab3iyy4><span class="text-gray-300" data-astro-cid-kab3iyy4>2</span><span data-astro-cid-kab3iyy4><span class="text-blue-500" data-astro-cid-kab3iyy4>const</span> perf = ref(<span class="text-orange-500" data-astro-cid-kab3iyy4>99</span>)</span></div><div class="flex gap-2" data-astro-cid-kab3iyy4><span class="text-gray-300" data-astro-cid-kab3iyy4>3</span><span data-astro-cid-kab3iyy4><span class="text-blue-500" data-astro-cid-kab3iyy4>function</span> <span class="text-yellow-500" data-astro-cid-kab3iyy4>build</span>() ${"{"}</span></div><div class="flex gap-2 pl-4" data-astro-cid-kab3iyy4><span class="text-gray-300" data-astro-cid-kab3iyy4>4</span><span data-astro-cid-kab3iyy4><span class="text-blue-500" data-astro-cid-kab3iyy4>return</span> <span class="text-emerald-600" data-astro-cid-kab3iyy4>'Blazing Fast'</span></span></div><div class="flex gap-2" data-astro-cid-kab3iyy4><span class="text-gray-300" data-astro-cid-kab3iyy4>5</span><span data-astro-cid-kab3iyy4>${"}"}</span></div><div class="flex gap-2" data-astro-cid-kab3iyy4><span class="text-gray-300" data-astro-cid-kab3iyy4>6</span><span class="text-gray-500" data-astro-cid-kab3iyy4>build()</span></div></div><!-- loading bar --><div class="px-3 pb-2" data-astro-cid-kab3iyy4><div class="w-full h-1 bg-gray-200 rounded-full overflow-hidden" data-astro-cid-kab3iyy4><div class="h-full w-2/3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full group-hover:w-full transition-all duration-1000" data-astro-cid-kab3iyy4></div></div></div></div>`}<!-- 5. QA (Light - Test Checklist) -->${step.id === "qa" && renderTemplate`<div class="flex-1 flex flex-col gap-2 justify-center" data-astro-cid-kab3iyy4>${[
		{
			title: "w-2/3",
			sub: "w-1/3",
			done: true
		},
		{
			title: "w-1/2",
			sub: "w-1/4",
			done: true
		},
		{
			title: "w-3/4",
			sub: "w-1/2",
			done: false
		}
	].map((item, i) => renderTemplate`<div class="w-full bg-gray-50 rounded-md border border-gray-200 p-2 flex items-center gap-2 group-hover:bg-blue-50/50 group-hover:border-blue-100 transition-colors"${addAttribute(`transition-delay: ${i * .1}s`, "style")} data-astro-cid-kab3iyy4><div${addAttribute(`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${item.done ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]" : "bg-gray-200"}`, "class")} data-astro-cid-kab3iyy4>${item.done && renderTemplate`<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-kab3iyy4><path d="M20 6 9 17l-5-5" data-astro-cid-kab3iyy4></path></svg>`}</div><div class="flex-1" data-astro-cid-kab3iyy4><div${addAttribute(`${item.title} h-1.5 bg-gray-300 rounded-full mb-1 group-hover:bg-blue-300 transition-colors`, "class")} data-astro-cid-kab3iyy4></div><div${addAttribute(`${item.sub} h-1 bg-gray-200 rounded-full group-hover:bg-blue-200 transition-colors`, "class")} data-astro-cid-kab3iyy4></div></div><div class="text-[8px] font-bold uppercase tracking-wide \${item.done ? 'text-emerald-500' : 'text-gray-400'}" data-astro-cid-kab3iyy4>Ok</div></div>`)}<!-- Pass badge --><div class="flex items-center gap-1.5 px-2" data-astro-cid-kab3iyy4><div class="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-[8px] font-bold text-emerald-600" data-astro-cid-kab3iyy4>Pasó</div><div class="px-2 py-0.5 rounded-full bg-gray-50 border border-gray-200 text-[8px] font-bold text-gray-400" data-astro-cid-kab3iyy4>Pendiente</div></div></div>`}<!-- 6. CRO (Light - Heatmap Analytics) -->${step.id === "cro" && renderTemplate`<div class="flex-1 relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50" data-astro-cid-kab3iyy4><!-- Mini top bar --><div class="w-full h-6 bg-gray-100 border-b border-gray-200 flex items-center px-2 gap-1.5" data-astro-cid-kab3iyy4><div class="flex gap-1" data-astro-cid-kab3iyy4><div class="w-1.5 h-1.5 rounded-full bg-gray-300" data-astro-cid-kab3iyy4></div><div class="w-1.5 h-1.5 rounded-full bg-gray-300" data-astro-cid-kab3iyy4></div><div class="w-1.5 h-1.5 rounded-full bg-gray-300" data-astro-cid-kab3iyy4></div></div><div class="mx-auto w-16 h-2 bg-gray-200 rounded-full" data-astro-cid-kab3iyy4></div></div><!-- Page skeleton --><div class="w-3/4 h-6 bg-gray-200 mt-3 mx-auto rounded" data-astro-cid-kab3iyy4></div><div class="w-1/3 h-2.5 bg-blue-100 mt-1.5 mx-auto rounded-full" data-astro-cid-kab3iyy4></div><div class="grid grid-cols-2 gap-2 mt-3 px-4" data-astro-cid-kab3iyy4><div class="h-10 bg-white rounded border border-gray-200" data-astro-cid-kab3iyy4></div><div class="h-10 bg-white rounded border border-gray-200" data-astro-cid-kab3iyy4></div></div><!-- Heatmap overlays --><div class="absolute top-[42%] left-1/2 w-16 h-16 bg-red-400/60 blur-xl rounded-full mix-blend-multiply animate-pulse" data-astro-cid-kab3iyy4></div><div class="absolute top-[30%] right-1/4 w-12 h-12 bg-yellow-400/60 blur-lg rounded-full mix-blend-multiply animate-pulse" style="animation-delay: 1s" data-astro-cid-kab3iyy4></div><div class="absolute bottom-[10%] left-1/4 w-10 h-10 bg-blue-500/50 blur-lg rounded-full mix-blend-multiply animate-pulse" style="animation-delay: 0.5s" data-astro-cid-kab3iyy4></div><!-- Conversion badge --><div class="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm flex items-center gap-1.5" data-astro-cid-kab3iyy4><span class="w-1.5 h-1.5 rounded-full bg-emerald-500" data-astro-cid-kab3iyy4></span><span class="text-[8px] font-bold text-gray-700" data-astro-cid-kab3iyy4>+32% CRO</span></div></div>`}</div></div><!-- Flotante --><div class="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-xl shadow-lg border border-black/5 flex items-center justify-center animate-float z-20"${addAttribute(`animation-delay: ${index * .2}s;`, "style")} data-astro-cid-kab3iyy4><div${addAttribute(`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} opacity-20 absolute`, "class")} data-astro-cid-kab3iyy4></div><span class="text-xs font-black text-black relative z-10" data-astro-cid-kab3iyy4>${step.num}</span></div></div><!-- Text Box --><div class="text-left flex-1 flex flex-col" data-astro-cid-kab3iyy4><h3 class="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors" data-astro-cid-kab3iyy4>${step.title}</h3><p class="text-sm text-black/60 leading-relaxed flex-1" data-astro-cid-kab3iyy4>${step.desc}</p></div></div>`)}</div><div class="mt-4 mx-auto max-w-4xl bg-black rounded-[2.5rem] p-12 text-center relative overflow-hidden reveal-up" data-astro-cid-kab3iyy4><!-- Glows --><div class="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" data-astro-cid-kab3iyy4></div><div class="absolute top-1/2 right-0 w-64 h-64 bg-cyan-400/30 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" data-astro-cid-kab3iyy4></div><div class="relative z-10" data-astro-cid-kab3iyy4><h3 class="text-3xl font-bold text-white mb-4" data-astro-cid-kab3iyy4>¿Listo para iniciar este proceso?</h3><p class="text-white/70 mb-8 max-w-xl mx-auto" data-astro-cid-kab3iyy4>No pierdas más tiempo ni dinero en estrategias que no te traen clientes reales. Empieza con el primer paso hoy.</p><a href="/contacto" class="inline-flex items-center justify-center bg-white text-black font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(255,255,255,0.2)]" data-astro-cid-kab3iyy4>Quiero trabajar con ustedes</a></div></div>` })}</section>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/WorkProcess.astro", void 0);
//#endregion
//#region src/components/ClientPortal.astro
var $$ClientPortal = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden border-t border-black/5 bg-[#f8f9fa] text-black py-32 lg:py-48"><div class="grid-bg absolute inset-0 opacity-[0.03]" aria-hidden="true"></div><!-- Luces volumétricas --><div class="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] animate-glowDrift pointer-events-none" aria-hidden="true"></div><div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-glowDrift pointer-events-none" aria-hidden="true"></div>${renderComponent($$result, "Container", $$Container, { "class": "relative z-10" }, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-20 items-center"><!-- COPY --><div class="reveal-up"><div class="mb-8 flex items-center gap-4"><span class="h-px w-9 bg-blue-500"></span><span class="text-[11px] font-bold uppercase tracking-[.25em] text-blue-500">Portal de Clientes</span></div><h2 class="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tighter text-black mb-8">Transparencia absoluta. <br><span class="italic font-serif font-light text-black/40">Control en tiempo real.</span></h2><p class="text-[16px] leading-relaxed text-black/60 mb-12 max-w-lg">Olvídate de los hilos de correo interminables y las agencias que desaparecen. Te damos acceso a un <strong>entorno operativo exclusivo</strong> donde ves el código subido, las campañas activas y el ROI en tiempo real.</p><!-- FEATURES LIST --><div class="space-y-6"><div class="flex items-start gap-4 group"><div class="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center flex-shrink-0 mt-1 transition-transform group-hover:scale-110"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div><div><h4 class="text-[15px] font-bold text-black mb-1">Métricas en Vivo</h4><p class="text-[14px] text-black/50 leading-relaxed">Conexión directa a GA4 y Meta Ads. Tus KPIs sin filtros.</p></div></div><div class="flex items-start gap-4 group"><div class="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center flex-shrink-0 mt-1 transition-transform group-hover:scale-110"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div><div><h4 class="text-[15px] font-bold text-black mb-1">Gestión de Tareas (Kanban)</h4><p class="text-[14px] text-black/50 leading-relaxed">Aprueba diseños, solicita cambios y ve en qué estamos trabajando hoy.</p></div></div><div class="flex items-start gap-4 group"><div class="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center flex-shrink-0 mt-1 transition-transform group-hover:scale-110"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div><div><h4 class="text-[15px] font-bold text-black mb-1">Repositorio de Entregables</h4><p class="text-[14px] text-black/50 leading-relaxed">Todos tus assets, copys, y reportes mensuales a un clic de distancia.</p></div></div></div></div><!-- MOCKUP: PORTAL DEL CLIENTE (LIGHT SAAS STYLE) --><div class="reveal-up relative" style="--i:1"><!-- Borde Gradiente --><div class="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-b from-black/5 via-black/5 to-transparent z-0 pointer-events-none"></div><div class="relative z-10 flex flex-col rounded-[2rem] bg-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]"><!-- Browser chrome --><div class="flex items-center gap-3 px-6 py-4 border-b border-black/5 bg-[#f8f9fa]"><div class="flex gap-2"><span class="h-3 w-3 rounded-full bg-[#FF5F56]"></span><span class="h-3 w-3 rounded-full bg-[#FFBD2E]"></span><span class="h-3 w-3 rounded-full bg-[#27C93F]"></span></div><div class="mx-auto flex h-7 items-center justify-center rounded-md bg-white border border-black/5 px-6 text-[11px] font-mono text-black/40 shadow-sm"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 opacity-50"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>app.croilab.com</div></div><!-- Dashboard Layout --><div class="flex flex-col md:flex-row h-full"><!-- Sidebar --><div class="hidden md:flex flex-col w-[200px] border-r border-black/5 bg-[#f8f9fa] p-4 gap-1"><div class="flex items-center gap-3 mb-8 px-2 mt-2"><div class="w-7 h-7 rounded-md bg-blue-500 flex items-center justify-center shadow-md"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg></div><span class="text-[13px] font-bold text-black tracking-wide">Croilab</span></div><div class="text-[10px] font-bold text-black/30 uppercase tracking-wider mb-2 px-2">Menu</div><a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 text-[12px] font-bold border border-blue-100"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>Overview</a><a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-black/50 hover:text-black hover:bg-black/5 text-[12px] font-medium transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>Sprint Board</a><a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-black/50 hover:text-black hover:bg-black/5 text-[12px] font-medium transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>Analytics</a><a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-black/50 hover:text-black hover:bg-black/5 text-[12px] font-medium transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>Assets</a><div class="mt-auto pt-4 border-t border-black/5"><div class="flex items-center gap-3 px-2"><div class="w-8 h-8 rounded-full bg-black/5 overflow-hidden"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" class="w-full h-full object-cover grayscale opacity-80" alt="User"></div><div><div class="text-[11px] font-bold text-black">Acme Corp.</div><div class="text-[9px] text-black/40">Plan Enterprise</div></div></div></div></div><!-- Main Area --><div class="flex-1 p-6 lg:p-8 bg-white"><div class="flex items-center justify-between mb-8"><div><h3 class="text-[18px] font-bold text-black mb-1">Bienvenido de nuevo</h3><p class="text-[13px] text-black/40">Aquí está el resumen de tu proyecto esta semana.</p></div><div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/5 border border-black/5 text-[11px] font-medium text-black/60 shadow-sm"><span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>Sistema Operativo</div></div><!-- Top Stats --><div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"><div class="p-4 rounded-xl bg-[#f8f9fa] border border-black/5 hover:border-black/10 transition-colors cursor-pointer group"><div class="text-[11px] font-bold text-black/40 mb-2">ROAS Semanal</div><div class="flex items-end justify-between"><div class="text-2xl font-bold text-black"><span data-counter="4.2" data-decimals="1" data-suffix="x">0.0x</span></div><div class="text-[10px] font-bold text-green-500 flex items-center group-hover:-translate-y-1 transition-transform"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>12%</div></div></div><div class="p-4 rounded-xl bg-[#f8f9fa] border border-black/5 hover:border-black/10 transition-colors cursor-pointer group"><div class="text-[11px] font-bold text-black/40 mb-2">Conversión Base</div><div class="flex items-end justify-between"><div class="text-2xl font-bold text-black"><span data-counter="3.8" data-decimals="1" data-suffix="%">0.0%</span></div><div class="text-[10px] font-bold text-green-500 flex items-center group-hover:-translate-y-1 transition-transform"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>0.5%</div></div></div><div class="p-4 rounded-xl bg-[#f8f9fa] border border-black/5 hover:border-black/10 transition-colors cursor-pointer group col-span-2"><div class="text-[11px] font-bold text-black/40 mb-2">Velocidad (Web Vitals)</div><div class="flex items-center gap-4"><div class="text-2xl font-bold text-black"><span data-counter="99" data-decimals="0">0</span><span class="text-[12px] text-black/30 ml-1">/100</span></div><div class="flex-1 h-2 bg-black/5 rounded-full overflow-hidden border border-black/5"><div class="h-full w-[99%] bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div></div></div></div></div><!-- Active Sprint Board --><div><div class="flex items-center justify-between mb-4"><h4 class="text-[13px] font-bold text-black">Sprint Actual <span class="text-black/30 font-normal ml-2">Semana 3</span></h4><a href="#" class="text-[11px] font-bold text-blue-500 hover:text-blue-600">Ver Kanban completo →</a></div><div class="space-y-3"><!-- Task 1 --><div class="flex items-center justify-between p-3 rounded-lg bg-[#f8f9fa] border border-black/5"><div class="flex items-center gap-3"><div class="w-4 h-4 rounded-full border-2 border-green-500 flex items-center justify-center bg-green-50"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg></div><div class="text-[12px] font-medium text-black/40 line-through">Lanzamiento Campaña Meta Retargeting</div></div><div class="flex items-center gap-3"><div class="flex -space-x-2"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" class="w-5 h-5 rounded-full border-2 border-white grayscale"></div><span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-green-100 text-green-600">Hecho</span></div></div><!-- Task 2 --><div class="flex items-center justify-between p-3 rounded-lg bg-blue-50/50 border border-blue-100 shadow-sm"><div class="flex items-center gap-3"><div class="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center bg-white"><div class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></div></div><div class="text-[12px] font-bold text-black">Test A/B: Botón Checkout vs Sticky</div></div><div class="flex items-center gap-3"><span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-blue-100 text-blue-600 border border-blue-200">En curso</span></div></div><!-- Task 3 --><div class="flex items-center justify-between p-3 rounded-lg bg-[#f8f9fa] border border-black/5"><div class="flex items-center gap-3"><div class="w-4 h-4 rounded-full border-2 border-black/20 bg-white"></div><div class="text-[12px] font-medium text-black/60">Auditoría SEO Técnico Mensual</div></div><div class="flex items-center gap-3"><span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-black/5 text-black/40">Pendiente</span></div></div></div></div></div></div></div><!-- Reflejo Suelo --><div class="absolute -bottom-10 left-[10%] right-[10%] h-[30px] bg-gradient-to-t from-blue-500/10 to-transparent blur-xl pointer-events-none z-0"></div></div></div>` })}</section>${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/components/ClientPortal.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/ClientPortal.astro", void 0);
//#endregion
//#region src/components/Projects.astro
var $$Projects = createComponent(async ($$result, $$props, $$slots) => {
	let wpProjects = [];
	try {
		const { items } = await getWpProjects();
		wpProjects = items;
	} catch (e) {
		console.error("Error fetching projects from WP:", e);
	}
	let projects = wpProjects.map((wpProj) => {
		let cleanDesc = (wpProj.content?.rendered || "").replace(/(<([^>]+)>)/gi, "").trim();
		if (cleanDesc.length > 150) cleanDesc = cleanDesc.slice(0, 150) + "...";
		return {
			title: wpProj.title?.rendered || "Proyecto",
			description: cleanDesc,
			category: wpProj?.croilab_proyecto?.category || "Proyecto",
			image: wpProj.imagen_url || wpProj?.croilab_proyecto?.imagen_url || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
			link: `/proyectos/${wpProj.slug}`
		};
	});
	if (projects.length > 0) while (projects.length < 15) projects.push(...projects);
	else projects = Array(15).fill({
		title: "Proyecto",
		description: "Descripción...",
		category: "Proyecto",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
		link: "#"
	});
	projects = projects.slice(0, 15);
	return renderTemplate`${maybeRenderHead($$result)}<section id="proyectos" class="projects-section relative bg-white border-t border-black/10 overflow-hidden w-full min-h-[190vh] lg:min-h-[180vh] flex flex-col items-center justify-start" data-astro-cid-ftq3vvlr><!-- Iluminaciones de fondo (más fuertes para que resalten sobre el blanco) --><div class="absolute -top-40 -left-20 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] animate-glowDrift pointer-events-none mix-blend-multiply" aria-hidden="true" data-astro-cid-ftq3vvlr></div><div class="absolute top-40 right-[-10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-glowDrift pointer-events-none mix-blend-multiply" aria-hidden="true" data-astro-cid-ftq3vvlr></div><div class="absolute bottom-40 left-[20%] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[90px] animate-glowDrift pointer-events-none mix-blend-multiply" aria-hidden="true" data-astro-cid-ftq3vvlr></div><!-- Título de la sección (separador del hero) --><div class="absolute top-20 lg:top-32 w-full flex flex-col items-center z-10" data-astro-cid-ftq3vvlr><div class="reveal-up mb-6 flex items-center gap-4" data-astro-cid-ftq3vvlr><span class="h-px w-9 bg-blue-400/50" data-astro-cid-ftq3vvlr></span><span class="text-[11px] font-medium uppercase tracking-[.24em] text-blue-400/80" data-astro-cid-ftq3vvlr>Portafolio</span><span class="h-px w-9 bg-blue-400/50" data-astro-cid-ftq3vvlr></span></div><h2 class="title-reveal text-center text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-.04em] text-black" data-astro-cid-ftq3vvlr>Resultados <span class="font-serif italic font-normal text-black drop-shadow-[0_0_10px_rgba(100,200,255,0.3)]" data-astro-cid-ftq3vvlr>tangibles</span>.</h2></div><!-- Envoltura de la grid que animaremos con transform: scale --><!-- Reducimos el mt final para que la cuadrícula quede cerca del título --><div class="projects-grid-wrapper relative mt-48 lg:mt-64 w-[130vw] h-[150vh] lg:w-[85vw] lg:h-[145vh] flex items-center justify-center z-20" data-astro-cid-ftq3vvlr><div class="projects-grid grid grid-cols-5 grid-rows-3 gap-2 md:gap-4 w-full h-full p-2 md:p-4" data-astro-cid-ftq3vvlr>${projects.map((project, i) => renderTemplate`<a${addAttribute(project.link, "href")}${addAttribute(`project-grid-item relative overflow-hidden rounded-xl md:rounded-2xl group block ${i === 7 ? "is-center z-20" : "z-0"}`, "class")} data-astro-cid-ftq3vvlr><!-- Imagen de fondo --><img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-astro-cid-ftq3vvlr><!-- El overlay general ha sido removido para que las imágenes estén al 100% de brillo --><!-- Contenido (Visible en la grid final o al hacer hover) --><div class="project-content absolute inset-0 p-3 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent" data-astro-cid-ftq3vvlr><span class="text-[9px] md:text-xs font-semibold uppercase tracking-widest text-white/70 mb-1 md:mb-2" data-astro-cid-ftq3vvlr>${project.category}</span><h3 class="text-sm md:text-2xl font-bold text-white leading-tight" data-astro-cid-ftq3vvlr>${project.title}</h3></div></a>`)}</div></div></section>${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/components/Projects.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/Projects.astro", void 0);
//#endregion
//#region src/data/testimonials.ts
var testimonials = [
	{
		quote: "En tres meses nuestra tasa de conversión creció un 47%. Croilab entiende de negocio, no solo de páginas.",
		author: "Laura Gómez",
		role: "Directora de Marketing · Altawind"
	},
	{
		quote: "Pasamos de depender de la publicidad a tener un sistema de adquisición predecible y medible.",
		author: "Martín Ríos",
		role: "Fundador · Voltex"
	},
	{
		quote: "El diagnóstico cambió la forma en que entendemos nuestra tienda. Los resultados se notaron desde el primer mes.",
		author: "Camila Torres",
		role: "CEO · Meridian"
	}
];
//#endregion
//#region src/components/ui/SectionTitle.astro
createAstro("https://croilab.com");
var $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionTitle;
	const { kicker, description, align = "left", class: className } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([
		"reveal-up",
		align === "center" && "mx-auto text-center",
		className
	], "class:list")}>${kicker && renderTemplate`<div${addAttribute(["mb-8 flex items-center gap-4", align === "center" && "justify-center"], "class:list")}><span class="h-px w-9 bg-accent"></span><span class="text-[11px] font-medium uppercase tracking-[.24em] text-muted">${kicker}</span>${align === "center" && renderTemplate`<span class="h-px w-9 bg-accent"></span>`}</div>`}<h2 class="text-[clamp(2.6rem,4.6vw,4.2rem)] font-semibold leading-[.95] tracking-[-.05em] text-black">${renderSlot($$result, $$slots["default"])}</h2>${description && renderTemplate`<p${addAttribute(["mt-8 max-w-md text-[15px] leading-7 text-muted", align === "center" && "mx-auto"], "class:list")}>${description}</p>`}</div>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/ui/SectionTitle.astro", void 0);
//#endregion
//#region src/components/Testimonials.astro
var $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
	const initials = (name) => name.split(" ").map((n) => n[0]).join("").slice(0, 2);
	let dynamicTestimonials = [];
	try {
		const { items } = await getWpTestimonials({ per_page: "10" });
		dynamicTestimonials = items.map((t) => {
			const data = t.croilab_testimonio || {};
			return {
				quote: data.quote || t.title?.rendered || "",
				author: data.author || "Cliente",
				role: data.role || "Rol",
				avatar: data.avatar || null,
				stars: data.stars ? parseInt(data.stars, 10) : 5
			};
		});
	} catch (e) {
		console.error("Error fetching testimonials:", e);
	}
	const testimonials$1 = dynamicTestimonials.length > 0 ? dynamicTestimonials : testimonials;
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden border-t border-black/10 bg-white"><div class="grid-bg absolute inset-0 opacity-15" aria-hidden="true"></div><div class="blue-light -top-40 left-[-10%] opacity-60" data-parallax="0.2" aria-hidden="true"></div>${renderComponent($$result, "Container", $$Container, { "class": "relative z-10 py-24 lg:py-32" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "SectionTitle", $$SectionTitle, {
		"kicker": "Testimonios",
		"align": "center",
		"description": "Lo que dicen quienes ya convirtieron con nosotros."
	}, { "default": ($$result) => renderTemplate`Resultados que <span class="text-accent">hablan</span>` })}<div class="reveal-up relative mx-auto mt-16 min-h-[440px] max-w-5xl sm:min-h-[400px] lg:min-h-[380px]">${testimonials$1.map((t, i) => renderTemplate`<figure class="quote-block absolute inset-0 flex flex-col items-center justify-center px-4 text-center"${addAttribute(`--i:${i}`, "style")}><span aria-hidden="true" class="select-none text-7xl font-semibold leading-none text-accent lg:text-8xl">"</span><blockquote class="mt-4 max-w-3xl text-[clamp(1.5rem,3.2vw,2.9rem)] font-semibold leading-snug tracking-[-.03em] text-black">${t.quote}</blockquote><div class="mt-6 flex justify-center text-yellow-400">${Array.from({ length: t.stars || 5 }).map(() => renderTemplate`<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`)}</div><figcaption class="mt-4 flex items-center gap-3">${t.avatar ? renderTemplate`<img${addAttribute(t.avatar, "src")}${addAttribute(t.author, "alt")} class="h-10 w-10 rounded-full object-cover" loading="lazy">` : renderTemplate`<span class="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">${initials(t.author)}</span>`}<span class="text-left"><span class="block text-sm font-semibold text-black">${t.author}</span><span class="block text-xs text-muted">${t.role}</span></span></figcaption><div class="mt-8 h-1 w-28 overflow-hidden rounded-full bg-black/10"><span class="quote-bar block h-full w-full origin-left rounded-full bg-accent"></span></div></figure>`)}</div>` })}</section>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/Testimonials.astro", void 0);
//#endregion
//#region src/components/Faq.astro
var $$Faq = createComponent(async ($$result, $$props, $$slots) => {
	const fallbackFaqs = [
		{
			q: "¿Qué es exactamente lo que hacen?",
			a: "Somos una agencia de ingeniería de conversiones. No diseñamos webs bonitas por diseñar. Construimos sistemas digitales completos: adquisición de tráfico (SEO, Meta Ads), diseño de landing pages de alta conversión, y optimización de embudos para que cada visita tenga la máxima probabilidad de convertirse en cliente."
		},
		{
			q: "¿Cuánto cuesta contratarlos?",
			a: "Cada proyecto es único. Trabajamos con mensualidades desde $500 USD dependiendo del alcance. Lo primero es una llamada de 30 minutos donde analizamos tu situación actual y te proponemos una estrategia con un ROI proyectado claro. Sin compromiso, sin sorpresas."
		},
		{
			q: "¿Cuánto tiempo tarda en verse resultados?",
			a: "Depende del canal. Con Meta Ads puedes ver resultados desde la primera semana. El SEO toma entre 3 y 6 meses para generar tráfico orgánico consistente. El diseño web y CRO muestran mejoras en tasas de conversión en 30-60 días. Todo se mide con datos, no con suposiciones."
		},
		{
			q: "¿Trabajan con empresas pequeñas o solo grandes?",
			a: "Trabajamos con negocios que tienen claridad de que quieren escalar. Desde emprendimientos facturando $10K/mes hasta empresas consolidadas. Lo importante es que tengas un producto o servicio validado y ganas de crecer con una estrategia seria."
		},
		{
			q: "¿Por qué no contrato una agencia más barata?",
			a: "Puedes, y tal vez funcione a corto plazo. La diferencia es que nosotros no vendemos 'posiciones en Google' o 'likes en Instagram'. Vendemos clientes reales, facturación medible y sistemas que escalan. Una agencia barata que no genera ROI te cuesta más que una cara que sí lo hace."
		},
		{
			q: "¿Cómo es el proceso de trabajo?",
			a: "1) Llamada de diagnóstico y alineación. 2) Propuesta estratégica con KPIs claros. 3) Onboarding y configuración (5-7 días). 4) Ejecución continua con reportes semanales. 5) Optimización mensual basada en datos. Tienes acceso a tu portal del cliente para seguir todo en tiempo real."
		}
	];
	let dynamicFaqs = [];
	try {
		const settings = await getWpSettings();
		if (settings.faq && settings.faq.items && settings.faq.items.length > 0) dynamicFaqs = settings.faq.items;
	} catch (e) {
		console.error("Error fetching FAQ settings:", e);
	}
	const faqs = dynamicFaqs.length > 0 ? dynamicFaqs : fallbackFaqs;
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden border-t border-black/10 bg-[#f8f9fa]">${renderComponent($$result, "Container", $$Container, { "class": "py-24 lg:py-36" }, { "default": ($$result) => renderTemplate`<div class="reveal-up flex flex-wrap items-end justify-between gap-10"><div class="max-w-[780px]"><div class="mb-8 flex items-center gap-4"><span class="h-px w-9 bg-accent"></span><span class="text-[11px] font-medium uppercase tracking-[.24em] text-black/40">FAQ</span><span class="h-px w-24 bg-black/10"></span></div><h2 class="text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[.92] tracking-[-.055em] text-black"><span class="block text-black/15">Resolvemos tus</span><span class="block">dudas antes de que las tengas.</span></h2></div><!-- BADGE --><div class="hidden items-center gap-6 md:flex" data-parallax="0.15"><div class="relative flex h-28 w-28 items-center justify-center"><span class="absolute inset-0 rounded-full border border-dashed border-black/20 animate-spinSlow"></span><span class="text-center text-[10px] uppercase leading-4 tracking-[.2em] text-black/40">lab<br>system<br>06</span></div></div></div><div class="mx-auto mt-16 lg:mt-20 max-w-4xl">${faqs.map((faq, i) => renderTemplate`<div class="faq-item reveal-up group mb-4 overflow-hidden rounded-2xl border border-black/10 bg-white transition-colors duration-500 hover:border-black/20 last:mb-0"${addAttribute(`--i:${i}`, "style")} data-faq-item><button type="button" class="faq-head flex w-full cursor-pointer items-center justify-between gap-6 px-7 py-6 text-left lg:px-9"${addAttribute(i === 0 ? "true" : "false", "aria-expanded")}><span class="flex items-center gap-5"><span class="faq-num text-xs font-medium tracking-[.2em] text-black/30 transition-colors duration-300 group-hover:text-accent">${String(i + 1).padStart(2, "0")}</span><span class="text-[16px] font-semibold tracking-tight text-black lg:text-[17px]">${faq.q}</span></span><span class="faq-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-lg font-light text-black/50">+</span></button><div class="faq-body" style="height: 0; opacity: 0;"><div class="faq-inner px-7 pb-7 lg:px-9 lg:pb-8"><p class="border-l-2 border-accent/20 pl-6 text-[15px] leading-relaxed text-black/55">${faq.a}</p></div></div></div>`)}</div>` })}</section>${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/components/Faq.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/Faq.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const wpEndpoint = "https://darkblue-flamingo-706734.hostingersite.com/wp-json/wp/v2/pages?slug=inicio";
	let rankMathSEO = null;
	try {
		const res = await fetch(wpEndpoint);
		if (res.ok) {
			const pages = await res.json();
			if (pages && pages.length > 0) rankMathSEO = pages[0].rank_math_head || null;
		}
	} catch (e) {
		console.error("Error fetching home page SEO:", e);
	}
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "rankMathSEO": rankMathSEO }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "Projects", $$Projects, {})}${renderComponent($$result, "ClientsMarquee", $$ClientsMarquee, {})}${renderComponent($$result, "TechStack", $$TechStack, {})}${renderComponent($$result, "AboutAgency", $$AboutAgency, {})}${renderComponent($$result, "PartnerEstrategico", $$PartnerEstrategico, {})}${renderComponent($$result, "Services", $$Services, {})}${renderComponent($$result, "Differentiators", $$Differentiators, {})}${renderComponent($$result, "SuccessCasesHome", $$SuccessCasesHome, {})}${renderComponent($$result, "AgencyComparison", $$AgencyComparison, {})}${renderComponent($$result, "WorkProcess", $$WorkProcess, {})}${renderComponent($$result, "ClientPortal", $$ClientPortal, {})}${renderComponent($$result, "Testimonials", $$Testimonials, {})}${renderComponent($$result, "Faq", $$Faq, {})}${renderComponent($$result, "Cta", $$Cta, {})}${renderComponent($$result, "ContactModal", $$ContactModal, {})}` })}`;
}, "C:/Users/bdela/Desktop/Croilab/src/pages/index.astro", void 0);
var $$file = "C:/Users/bdela/Desktop/Croilab/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
