import { t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { S as unescapeHTML, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute, w as createAstro } from "./server_Yceqtf1X.mjs";
import { a as renderScript, i as $$Container } from "./BaseLayout_CUM04enh.mjs";
import { t as services } from "./services_Ye23o-W2.mjs";
//#region src/components/ui/Calculator.astro
createAstro("https://croilab.com");
var $$Calculator = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Calculator;
	const { mode } = Astro.props;
	const config = {
		ecommerce: {
			mode: "ecommerce",
			title: "¿Cuánto más podrías vender?",
			subtitle: "Mueve los controles con tus datos reales y mira en vivo lo que una mejor conversión le haría a tu ingreso.",
			inputs: [
				{
					key: "visitas",
					label: "Visitas mensuales",
					min: 500,
					max: 15e4,
					step: 500,
					value: 1e4
				},
				{
					key: "ticket",
					label: "Ticket promedio",
					min: 10,
					max: 300,
					step: 5,
					value: 60,
					prefix: "$"
				},
				{
					key: "convActual",
					label: "Conversión actual",
					min: .5,
					max: 5,
					step: .1,
					value: 1,
					suffix: "%"
				},
				{
					key: "convNueva",
					label: "Conversión optimizada",
					min: 1,
					max: 10,
					step: .1,
					value: 3,
					suffix: "%"
				}
			],
			results: [
				{
					key: "nuevoIngreso",
					label: "Ingreso proyectado / mes",
					format: "currency"
				},
				{
					key: "ingresoActual",
					label: "Ingreso actual / mes",
					format: "currency"
				},
				{
					key: "ventasNuevas",
					label: "Ventas proyectadas / mes",
					format: "number"
				},
				{
					key: "extraAnual",
					label: "Extra estimado al año",
					format: "currency"
				}
			]
		},
		"meta-ads": {
			mode: "meta-ads",
			title: "¿Cuánto devuelve tu pauta?",
			subtitle: "Simula tu presupuesto, tu ticket y tu costo por cliente para ver el retorno real de tu inversión publicitaria.",
			inputs: [
				{
					key: "presupuesto",
					label: "Presupuesto mensual",
					min: 300,
					max: 5e4,
					step: 100,
					value: 2e3,
					prefix: "$"
				},
				{
					key: "ticket",
					label: "Ticket promedio",
					min: 10,
					max: 300,
					step: 5,
					value: 80,
					prefix: "$"
				},
				{
					key: "cpa",
					label: "Costo por adquisición",
					min: 5,
					max: 100,
					step: 1,
					value: 30,
					prefix: "$"
				},
				{
					key: "margen",
					label: "Margen operativo",
					min: 10,
					max: 80,
					step: 5,
					value: 40,
					suffix: "%"
				}
			],
			results: [
				{
					key: "ingresos",
					label: "Ingresos proyectados / mes",
					format: "currency"
				},
				{
					key: "roas",
					label: "ROAS estimado",
					format: "multi"
				},
				{
					key: "clientes",
					label: "Clientes nuevos / mes",
					format: "number"
				},
				{
					key: "ganancia",
					label: "Ganancia neta / mes",
					format: "currency"
				}
			]
		},
		web: {
			mode: "web",
			title: "¿Cuántos leads pierdes hoy?",
			subtitle: "Compara lo que capturas con tu web actual contra lo que podrías capturar con un diseño pensado para convertir.",
			inputs: [
				{
					key: "visitas",
					label: "Visitas mensuales",
					min: 500,
					max: 15e4,
					step: 500,
					value: 1e4
				},
				{
					key: "convActual",
					label: "Conversión actual",
					min: .5,
					max: 5,
					step: .1,
					value: 1,
					suffix: "%"
				},
				{
					key: "convNueva",
					label: "Conversión con diseño CRO",
					min: 1,
					max: 10,
					step: .1,
					value: 4,
					suffix: "%"
				}
			],
			results: [
				{
					key: "leadsNuevos",
					label: "Leads proyectados / mes",
					format: "number"
				},
				{
					key: "leadsActuales",
					label: "Leads actuales / mes",
					format: "number"
				},
				{
					key: "extraMes",
					label: "Leads extra / mes",
					format: "number"
				},
				{
					key: "extraAnual",
					label: "Leads extra al año",
					format: "number"
				}
			]
		},
		seo: {
			mode: "seo",
			title: "¿Cuánto tráfico estás cediendo?",
			subtitle: "Compara las visitas que recibes según tu posición actual contra las que podrías tener en la primera página.",
			inputs: [
				{
					key: "busquedas",
					label: "Búsquedas mensuales del keyword",
					min: 500,
					max: 2e5,
					step: 500,
					value: 15e3
				},
				{
					key: "posicionActual",
					label: "Tu posición actual",
					min: 1,
					max: 20,
					step: 1,
					value: 8
				},
				{
					key: "posicionNueva",
					label: "Posición objetivo",
					min: 1,
					max: 10,
					step: 1,
					value: 3
				}
			],
			results: [
				{
					key: "visProyectadas",
					label: "Visitas proyectadas / mes",
					format: "number"
				},
				{
					key: "visActuales",
					label: "Visitas actuales / mes",
					format: "number"
				},
				{
					key: "extraMes",
					label: "Visitas extra / mes",
					format: "number"
				},
				{
					key: "extraAnual",
					label: "Visitas extra al año",
					format: "number"
				}
			]
		},
		conversiones: {
			mode: "conversiones",
			title: "¿Cuánto vale optimizar tu embudo?",
			subtitle: "Pon tus números reales y descubre el ingreso que se te escapa hoy entre lo que entra y lo que convierte.",
			inputs: [
				{
					key: "trafico",
					label: "Tráfico mensual",
					min: 500,
					max: 2e5,
					step: 500,
					value: 2e4
				},
				{
					key: "convActual",
					label: "Conversión actual",
					min: .5,
					max: 5,
					step: .1,
					value: 1,
					suffix: "%"
				},
				{
					key: "convNueva",
					label: "Conversión proyectada",
					min: 1,
					max: 10,
					step: .1,
					value: 3.5,
					suffix: "%"
				},
				{
					key: "valorCliente",
					label: "Valor por conversión",
					min: 10,
					max: 1e3,
					step: 10,
					value: 120,
					prefix: "$"
				}
			],
			results: [
				{
					key: "extraMes",
					label: "Ingreso extra / mes",
					format: "currency"
				},
				{
					key: "convProyectadas",
					label: "Conversiones proyectadas / mes",
					format: "number"
				},
				{
					key: "convActuales",
					label: "Conversiones actuales / mes",
					format: "number"
				},
				{
					key: "extraAnual",
					label: "Ingreso extra al año",
					format: "currency"
				}
			]
		}
	}[mode];
	const configJson = JSON.stringify(config);
	const mainResult = config.results[0];
	const restResults = config.results.slice(1);
	return renderTemplate`${maybeRenderHead($$result)}<section class="croi-calculator relative overflow-hidden border-t border-black/10 bg-white"${addAttribute(configJson, "data-croi-config")} data-astro-cid-q4hqaued>${renderComponent($$result, "Container", $$Container, {
		"class": "py-24 lg:py-32",
		"data-astro-cid-q4hqaued": true
	}, { "default": ($$result) => renderTemplate`<div class="reveal-up mx-auto max-w-2xl text-center" data-astro-cid-q4hqaued><div class="mb-8 flex items-center justify-center gap-4" data-astro-cid-q4hqaued><span class="h-px w-9 bg-accent" data-astro-cid-q4hqaued></span><span class="text-[11px] font-medium uppercase tracking-[.24em] text-black/40" data-astro-cid-q4hqaued>Calculadora</span><span class="h-px w-24 bg-black/10" data-astro-cid-q4hqaued></span></div><h2 class="text-[clamp(2.4rem,4.5vw,3.8rem)] font-semibold leading-[.95] tracking-[-.05em] text-black" data-astro-cid-q4hqaued>${config.title}</h2><p class="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-black/50" data-astro-cid-q4hqaued>${config.subtitle}</p></div><div class="reveal-up mt-14 grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]" style="--i:1" data-astro-cid-q4hqaued><!-- CONTROLADORES --><div class="rounded-[2rem] border border-black/10 bg-[#f8f9fa] p-8 lg:p-10" data-astro-cid-q4hqaued>${config.inputs.map((input) => renderTemplate`<div class="mb-9 last:mb-0" data-astro-cid-q4hqaued><div class="mb-3 flex items-center justify-between gap-4" data-astro-cid-q4hqaued><label class="text-[13px] font-semibold text-black" data-astro-cid-q4hqaued>${input.label}</label><span class="croi-value rounded-full bg-white border border-black/10 px-3 py-1 text-[12px] font-bold text-black"${addAttribute(input.key, "data-value-key")} data-astro-cid-q4hqaued></span></div><input type="range" class="croi-range"${addAttribute(input.min, "min")}${addAttribute(input.max, "max")}${addAttribute(input.step, "step")}${addAttribute(input.value, "value")}${addAttribute(input.key, "data-range-key")}${addAttribute(input.label, "aria-label")} data-astro-cid-q4hqaued></div>`)}<p class="mt-8 text-[11px] leading-relaxed text-black/40 border-t border-black/10 pt-6" data-astro-cid-q4hqaued>Valores estimados según métricas promedio del mercado. Tus números reales los definimos juntos en una llamada.</p></div><!-- RESULTADOS --><div class="relative overflow-hidden rounded-[2rem] bg-[#050505] p-8 lg:p-10 border border-white/5" data-astro-cid-q4hqaued><div class="absolute -top-20 right-[-10%] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[90px] animate-glowDrift pointer-events-none" data-astro-cid-q4hqaued></div><div class="absolute -bottom-24 left-[-10%] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[90px] animate-glowDrift pointer-events-none" data-astro-cid-q4hqaued></div><div class="relative z-10" data-astro-cid-q4hqaued><div class="mb-8" data-astro-cid-q4hqaued><div class="mb-1 text-[11px] font-semibold uppercase tracking-[.2em] text-white/40" data-astro-cid-q4hqaued>${mainResult.label}</div><div class="croi-result text-[clamp(2.4rem,3.5vw,3.4rem)] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-white/60"${addAttribute(mainResult.key, "data-result-key")} data-astro-cid-q4hqaued></div></div><div class="grid grid-cols-2 gap-6 border-t border-white/10 pt-8" data-astro-cid-q4hqaued>${restResults.map((result) => renderTemplate`<div data-astro-cid-q4hqaued><div class="mb-1 text-[11px] font-medium uppercase tracking-[.14em] text-white/35" data-astro-cid-q4hqaued>${result.label}</div><div class="croi-result text-xl font-bold text-white"${addAttribute(result.key, "data-result-key")} data-astro-cid-q4hqaued></div></div>`)}</div></div><a href="/contacto" class="relative z-10 mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[13px] font-bold text-black transition-colors hover:bg-blue-400" data-astro-cid-q4hqaued>Quiero estos resultados →</a></div></div>` })}</section>${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/components/ui/Calculator.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/ui/Calculator.astro", void 0);
//#endregion
//#region src/components/MarqueeTestimonials.astro
createAstro("https://croilab.com");
var $$MarqueeTestimonials = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$MarqueeTestimonials;
	const { testimonials, kicker = "Testimonios de Clientes", titleTop = "Resultados que", titleBottom = "hablan por sí solos." } = Astro.props;
	[...testimonials, ...testimonials];
	const track2 = [...testimonials].reverse();
	[...track2, ...track2];
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative bg-white py-32 overflow-hidden border-y border-black/5" data-astro-cid-wix6qhlj><!-- Efectos de Fondo y Luz --><div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" data-astro-cid-wix6qhlj></div><div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] animate-glowDrift pointer-events-none" data-astro-cid-wix6qhlj></div><div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[150px] animate-glowDrift pointer-events-none" data-astro-cid-wix6qhlj></div>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10 text-center mb-20",
		"data-astro-cid-wix6qhlj": true
	}, { "default": ($$result) => renderTemplate`<div class="reveal-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6" data-astro-cid-wix6qhlj><span class="text-[11px] font-bold uppercase tracking-widest text-blue-600" data-astro-cid-wix6qhlj>${kicker}</span></div><h2 class="gsap-title text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-black leading-tight" data-astro-cid-wix6qhlj>${titleTop} <br data-astro-cid-wix6qhlj><span class="italic font-serif font-light text-blue-600" data-astro-cid-wix6qhlj>${titleBottom}</span></h2>` })}<!-- Marquee Area --><div class="relative w-full overflow-hidden flex flex-col gap-6 lg:gap-8 pb-10 perspective-1000" data-astro-cid-wix6qhlj><!-- Track 1 (Left to Right) --><div class="marquee-track flex w-max" data-astro-cid-wix6qhlj><div class="flex gap-6 lg:gap-8 pr-6 lg:pr-8" data-astro-cid-wix6qhlj>${testimonials.map((t) => renderTemplate`<div class="w-[320px] md:w-[400px] shrink-0 p-8 rounded-3xl bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group" data-astro-cid-wix6qhlj><div class="flex gap-1 mb-6 text-yellow-400" data-astro-cid-wix6qhlj>${[...Array(t.rating)].map(() => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" data-astro-cid-wix6qhlj><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-wix6qhlj></polygon></svg>`)}</div><p class="text-[16px] md:text-[18px] font-medium text-black/80 leading-relaxed mb-8" data-astro-cid-wix6qhlj>"${t.quote}"</p><div class="flex items-center gap-4 mt-auto" data-astro-cid-wix6qhlj><div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform" data-astro-cid-wix6qhlj>${t.name.split(" ")[0][0]}${t.name.split(" ")[1]?.[0]}</div><div data-astro-cid-wix6qhlj><div class="text-sm font-bold text-black" data-astro-cid-wix6qhlj>${t.name}</div><div class="text-xs text-black/50" data-astro-cid-wix6qhlj>${t.role}</div></div></div></div>`)}</div><div class="flex gap-6 lg:gap-8 pr-6 lg:pr-8" aria-hidden="true" data-astro-cid-wix6qhlj>${testimonials.map((t) => renderTemplate`<div class="w-[320px] md:w-[400px] shrink-0 p-8 rounded-3xl bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group" data-astro-cid-wix6qhlj><div class="flex gap-1 mb-6 text-yellow-400" data-astro-cid-wix6qhlj>${[...Array(t.rating)].map(() => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" data-astro-cid-wix6qhlj><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-wix6qhlj></polygon></svg>`)}</div><p class="text-[16px] md:text-[18px] font-medium text-black/80 leading-relaxed mb-8" data-astro-cid-wix6qhlj>"${t.quote}"</p><div class="flex items-center gap-4 mt-auto" data-astro-cid-wix6qhlj><div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform" data-astro-cid-wix6qhlj>${t.name.split(" ")[0][0]}${t.name.split(" ")[1]?.[0]}</div><div data-astro-cid-wix6qhlj><div class="text-sm font-bold text-black" data-astro-cid-wix6qhlj>${t.name}</div><div class="text-xs text-black/50" data-astro-cid-wix6qhlj>${t.role}</div></div></div></div>`)}</div></div><!-- Track 2 (Right to Left) --><div class="marquee-track-reverse flex w-max mt-4" data-astro-cid-wix6qhlj><div class="flex gap-6 lg:gap-8 pr-6 lg:pr-8" data-astro-cid-wix6qhlj>${track2.map((t) => renderTemplate`<div class="w-[320px] md:w-[400px] shrink-0 p-8 rounded-3xl bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group" data-astro-cid-wix6qhlj><div class="flex gap-1 mb-6 text-yellow-400" data-astro-cid-wix6qhlj>${[...Array(t.rating)].map(() => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" data-astro-cid-wix6qhlj><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-wix6qhlj></polygon></svg>`)}</div><p class="text-[16px] md:text-[18px] font-medium text-black/80 leading-relaxed mb-8" data-astro-cid-wix6qhlj>"${t.quote}"</p><div class="flex items-center gap-4 mt-auto" data-astro-cid-wix6qhlj><div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform" data-astro-cid-wix6qhlj>${t.name.split(" ")[0][0]}${t.name.split(" ")[1]?.[0]}</div><div data-astro-cid-wix6qhlj><div class="text-sm font-bold text-black" data-astro-cid-wix6qhlj>${t.name}</div><div class="text-xs text-black/50" data-astro-cid-wix6qhlj>${t.role}</div></div></div></div>`)}</div><div class="flex gap-6 lg:gap-8 pr-6 lg:pr-8" aria-hidden="true" data-astro-cid-wix6qhlj>${track2.map((t) => renderTemplate`<div class="w-[320px] md:w-[400px] shrink-0 p-8 rounded-3xl bg-white border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group" data-astro-cid-wix6qhlj><div class="flex gap-1 mb-6 text-yellow-400" data-astro-cid-wix6qhlj>${[...Array(t.rating)].map(() => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" data-astro-cid-wix6qhlj><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-wix6qhlj></polygon></svg>`)}</div><p class="text-[16px] md:text-[18px] font-medium text-black/80 leading-relaxed mb-8" data-astro-cid-wix6qhlj>"${t.quote}"</p><div class="flex items-center gap-4 mt-auto" data-astro-cid-wix6qhlj><div class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform" data-astro-cid-wix6qhlj>${t.name.split(" ")[0][0]}${t.name.split(" ")[1]?.[0]}</div><div data-astro-cid-wix6qhlj><div class="text-sm font-bold text-black" data-astro-cid-wix6qhlj>${t.name}</div><div class="text-xs text-black/50" data-astro-cid-wix6qhlj>${t.role}</div></div></div></div>`)}</div></div><!-- Fades en los bordes para un loop perfecto --><div class="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" data-astro-cid-wix6qhlj></div><div class="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" data-astro-cid-wix6qhlj></div></div></section>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/MarqueeTestimonials.astro", void 0);
//#endregion
//#region src/components/ServiceHub.astro
createAstro("https://croilab.com");
var $$ServiceHub = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ServiceHub;
	const { current } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="relative bg-[#f8f9fa] py-28 border-t border-black/5 overflow-hidden" id="servicios-hub"><div class="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div><div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>${renderComponent($$result, "Container", $$Container, { "class": "relative z-10" }, { "default": ($$result) => renderTemplate`<div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 reveal-up"><div class="max-w-2xl"><span class="text-[11px] font-bold uppercase tracking-[.25em] text-blue-600 mb-5 block">Hub de servicios</span><h2 class="text-[clamp(2.5rem,4vw,3.75rem)] font-bold tracking-tighter text-black leading-[1.05]">Explora el resto de<br><span class="italic font-serif font-light text-black/40">nuestras disciplinas.</span></h2></div><p class="text-black/60 max-w-sm md:pb-2">Cada servicio funciona por separado, pero combinados forman un sistema completo que convierte tráfico en ingresos.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">${services.map((s, i) => {
		const active = s.slug === current;
		return renderTemplate`<a${addAttribute(`/${s.slug}`, "href")}${addAttribute(active ? "page" : void 0, "aria-current")}${addAttribute(["reveal-up group relative overflow-hidden rounded-3xl border p-6 lg:p-7 flex flex-col justify-between min-h-[240px] transition-all duration-500", active ? "bg-[#0a0a0a] border-black text-white shadow-2xl shadow-black/20" : "bg-white border-black/10 hover:border-black/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"], "class:list")}${addAttribute(`--delay: ${i * .07}s;`, "style")}><div class="relative z-10 flex items-start justify-between"><div${addAttribute(["flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-500", active ? "bg-white text-black border-white" : "bg-white text-black border-black/10 shadow-sm group-hover:bg-black/5"], "class:list")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${unescapeHTML(s.icon)}</svg></div><span${addAttribute(["text-[10px] font-bold tracking-[.2em] uppercase", active ? "text-white/40" : "text-black/30"], "class:list")}>${s.num}</span></div><div class="relative z-10"><h3${addAttribute(["text-2xl font-bold tracking-tight mb-3 transition-colors duration-300", active ? "text-white" : "text-black group-hover:text-blue-600"], "class:list")}>${s.name}</h3><p${addAttribute(["text-sm leading-relaxed mb-5", active ? "text-white/60" : "text-black/50"], "class:list")}>${s.desc}</p>${active ? renderTemplate`<span class="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-cyan-300"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>Estás aquí</span>` : renderTemplate`<span class="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-black/40 group-hover:text-blue-600 transition-colors">Ver servicio<span class="transition-transform group-hover:translate-x-1">→</span></span>`}</div></a>`;
	})}</div>` })}</section>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/ServiceHub.astro", void 0);
//#endregion
export { $$MarqueeTestimonials as n, $$Calculator as r, $$ServiceHub as t };
