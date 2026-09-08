import { t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { c as renderSlot, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute, w as createAstro } from "./server_Yceqtf1X.mjs";
import { i as $$Container, r as whatsappLink } from "./BaseLayout_CUM04enh.mjs";
//#region src/components/ui/Button.astro
createAstro("https://croilab.com");
var $$Button = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Button;
	const { href, variant = "primary", size = "md", type = "button", target, rel, class: className } = Astro.props;
	const classes = [
		"inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300",
		{
			primary: "bg-accent text-black shadow-[0_10px_30px_rgba(8,120,249,.18)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(8,120,249,.25)]",
			dark: "bg-white text-[#090909] hover:bg-accent",
			outline: "border border-black/15 text-black hover:border-accent hover:text-accent",
			ghost: "text-muted hover:text-black"
		}[variant],
		{
			sm: "px-4 py-2.5 text-xs",
			md: "px-6 py-3.5 text-[13px]",
			lg: "px-8 py-4 text-sm"
		}[size],
		className
	].join(" ");
	return renderTemplate`${href ? renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}${addAttribute(target, "target")}${addAttribute(rel, "rel")}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute(classes, "class")}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/ui/Button.astro", void 0);
//#endregion
//#region src/components/ui/Cta.astro
var $$Cta = createComponent(($$result, $$props, $$slots) => {
	const waLink = whatsappLink();
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden border-t border-black/10 bg-white py-32 lg:py-48" data-astro-cid-6iy73elr><!-- Iluminaciones de fondo atractivas (Sin azul, usando blancos puros y grises plateados) --><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" data-astro-cid-6iy73elr></div><div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" data-astro-cid-6iy73elr></div><div class="grid-bg absolute inset-0 opacity-10 pointer-events-none" data-astro-cid-6iy73elr></div>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10",
		"data-astro-cid-6iy73elr": true
	}, { "default": ($$result) => renderTemplate`<div class="reveal-up mx-auto max-w-7xl rounded-[2.5rem] lg:rounded-[3rem] border border-black/10 bg-[#fbfbfb] p-8 lg:p-16 shadow-2xl shadow-black/5 relative overflow-hidden" data-astro-cid-6iy73elr><!-- Abstract Gradients --><div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" data-astro-cid-6iy73elr></div><div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" data-astro-cid-6iy73elr></div><div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10" data-astro-cid-6iy73elr><!-- Lado Izquierdo: Textos --><div class="text-left" data-astro-cid-6iy73elr><div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 bg-white shadow-sm mb-8" data-astro-cid-6iy73elr><div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse" data-astro-cid-6iy73elr></div><span class="text-[10px] font-bold uppercase tracking-[.2em] text-black/70" data-astro-cid-6iy73elr>Disponibilidad Limitada</span></div><h2 class="text-[clamp(2.5rem,5vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-black mb-6" data-astro-cid-6iy73elr>¿Listo para dominar <br data-astro-cid-6iy73elr><span class="font-serif italic font-light text-black/40" data-astro-cid-6iy73elr>tu mercado?</span></h2><p class="text-[16px] lg:text-[18px] leading-relaxed text-black/60 mb-10 max-w-[450px]" data-astro-cid-6iy73elr>Cuéntanos dónde estás hoy y hacia dónde quieres llegar. Analizaremos tu ecosistema digital y te mostraremos exactamente dónde estás perdiendo conversiones.</p><div class="flex flex-col sm:flex-row items-center gap-4" data-astro-cid-6iy73elr><a href="/contacto" data-open-contact class="magnetic group relative flex h-14 items-center justify-center gap-4 rounded-full bg-black px-8 text-[14px] font-bold text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/20 overflow-hidden w-full sm:w-auto" data-astro-cid-6iy73elr><div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" data-astro-cid-6iy73elr></div>Quiero trabajar así<span class="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-45" data-astro-cid-6iy73elr>↗</span></a>${renderComponent($$result, "Button", $$Button, {
		"href": waLink,
		"target": "_blank",
		"rel": "noopener noreferrer",
		"variant": "ghost",
		"class": "!text-black/50 hover:!text-black w-full sm:w-auto",
		"data-astro-cid-6iy73elr": true
	}, { "default": ($$result) => renderTemplate`WhatsApp directo` })}</div></div><!-- Lado Derecho: UI Mockup --><div class="relative hidden lg:block" style="perspective: 1000px;" data-astro-cid-6iy73elr><div class="relative w-full max-w-[420px] ml-auto transition-transform duration-700 ease-out hover:rotate-0" style="transform: rotateY(-10deg) rotateX(5deg);" data-astro-cid-6iy73elr><!-- Calendar Card Mockup --><div class="w-full bg-white rounded-2xl border border-black/10 shadow-[0_30px_60px_rgba(0,0,0,0.08)] p-6 relative z-20" data-astro-cid-6iy73elr><div class="flex items-center justify-between border-b border-black/5 pb-4 mb-4" data-astro-cid-6iy73elr><div class="flex items-center gap-3" data-astro-cid-6iy73elr><div class="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center border border-black/5" data-astro-cid-6iy73elr><svg class="w-5 h-5 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6iy73elr><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-6iy73elr></path></svg></div><div data-astro-cid-6iy73elr><h4 class="text-sm font-bold text-black" data-astro-cid-6iy73elr>Llamada de Alineación</h4><p class="text-[11px] text-black/50" data-astro-cid-6iy73elr>Google Meet • 30 min</p></div></div></div><!-- Mini Calendar Grid --><div class="grid grid-cols-7 gap-1 text-center mb-4" data-astro-cid-6iy73elr>${[
		"L",
		"M",
		"X",
		"J",
		"V",
		"S",
		"D"
	].map((day) => renderTemplate`<span class="text-[9px] font-bold text-black/40 mb-1" data-astro-cid-6iy73elr>${day}</span>`)}<!-- Empty days --><div class="p-1" data-astro-cid-6iy73elr></div><div class="p-1" data-astro-cid-6iy73elr></div><div class="p-1" data-astro-cid-6iy73elr></div><!-- Days -->${Array.from({ length: 12 }).map((_, i) => renderTemplate`<div${addAttribute(`text-[11px] font-medium p-1.5 rounded-md cursor-pointer transition-colors ${i === 8 ? "bg-black text-white shadow-md" : "text-black/70 hover:bg-black/5"}`, "class")} data-astro-cid-6iy73elr>${12 + i}</div>`)}</div><!-- Time Slots --><div class="flex gap-2" data-astro-cid-6iy73elr><div class="flex-1 text-center py-2 rounded-md border border-black/10 text-[11px] font-bold text-black hover:border-black transition-colors cursor-pointer" data-astro-cid-6iy73elr>10:00 AM</div><div class="flex-1 text-center py-2 rounded-md bg-black text-white text-[11px] font-bold shadow-md cursor-pointer" data-astro-cid-6iy73elr>02:30 PM</div><div class="flex-1 text-center py-2 rounded-md border border-black/10 text-[11px] font-bold text-black hover:border-black transition-colors cursor-pointer" data-astro-cid-6iy73elr>04:00 PM</div></div></div><!-- Floating Element: Profile --><div class="absolute -right-8 top-12 w-48 bg-white/90 backdrop-blur-md border border-black/10 rounded-xl p-3 shadow-xl z-30 animate-float" data-astro-cid-6iy73elr><div class="flex items-center gap-3" data-astro-cid-6iy73elr><div class="relative" data-astro-cid-6iy73elr><div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 font-bold text-sm" data-astro-cid-6iy73elr>C</div><div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" data-astro-cid-6iy73elr></div></div><div data-astro-cid-6iy73elr><p class="text-[11px] font-bold text-black leading-tight" data-astro-cid-6iy73elr>Equipo Croilab</p><p class="text-[9px] text-black/50" data-astro-cid-6iy73elr>Estratega asignado</p></div></div></div></div></div></div></div>` })}</section>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/ui/Cta.astro", void 0);
//#endregion
export { $$Cta as t };
