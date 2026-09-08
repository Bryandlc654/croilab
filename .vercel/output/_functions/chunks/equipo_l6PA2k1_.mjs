import { n as __exportAll, t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_Yceqtf1X.mjs";
import { a as renderScript, i as $$Container, t as $$BaseLayout } from "./BaseLayout_CUM04enh.mjs";
import { t as $$Breadcrumb } from "./Breadcrumb_CM0NWSvp.mjs";
import { t as $$Cta } from "./Cta_Dahp83yV.mjs";
//#region src/pages/equipo.astro
var equipo_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Equipo,
	file: () => $$file,
	url: () => $$url
});
var $$Equipo = createComponent(($$result, $$props, $$slots) => {
	const teamMembers = [
		{
			name: "Bryan",
			role: "CEO & Growth Engineer",
			image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
			bio: "Obsesionado con la analítica y el escalado de negocios. Dirige la estrategia principal de conversión."
		},
		{
			name: "Elena",
			role: "Head of CRO & UX",
			image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
			bio: "Especialista en psicología del consumidor y diseño de interfaces que eliminan la fricción de compra."
		},
		{
			name: "David",
			role: "Lead Performance Media",
			image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
			bio: "Experto en Meta y Google Ads. Su único KPI es el retorno sobre la inversión publicitaria (ROAS)."
		},
		{
			name: "Sofia",
			role: "Technical SEO Expert",
			image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
			bio: "Domina el código fuente y el renderizado en servidor. Hace que Google se enamore de la arquitectura web."
		},
		{
			name: "Carlos",
			role: "Senior Full-Stack Developer",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
			bio: "Construye ecosistemas Headless ultrarrápidos. Si una web tarda más de 2 segundos en cargar, no duerme."
		},
		{
			name: "Andrea",
			role: "Content & Copywriter",
			image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
			bio: "No escribe textos bonitos, escribe textos que venden. Especialista en respuesta directa y gatillos mentales."
		}
	];
	const carouselImages = [
		"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
		"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
		"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
		"https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
		"https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
		"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "El Equipo | Croilab",
		"description": "Conoce al escuadrón de ingenieros, estrategas y desarrolladores detrás de tus conversiones.",
		"data-astro-cid-2z43ptzp": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden bg-[#050505] pt-32 lg:pt-40 pb-20 border-t border-white/10" data-astro-cid-2z43ptzp><div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" data-astro-cid-2z43ptzp></div><div class="grid-bg absolute inset-0 opacity-10 pointer-events-none" data-astro-cid-2z43ptzp></div>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10 text-center",
		"data-astro-cid-2z43ptzp": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Breadcrumb", $$Breadcrumb, {
		"items": [{
			label: "Nosotros",
			href: "/nosotros"
		}, { label: "El Equipo" }],
		"class": "justify-center",
		"data-astro-cid-2z43ptzp": true
	})}<div class="mt-12 mx-auto max-w-4xl" data-astro-cid-2z43ptzp><div class="overflow-hidden hero-title-wrap" data-astro-cid-2z43ptzp><h1 class="hero-title text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[1] tracking-tight text-white mb-8" data-astro-cid-2z43ptzp>Conoce a los <br data-astro-cid-2z43ptzp><span class="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-white/50" data-astro-cid-2z43ptzp>especialistas.</span></h1></div><p class="hero-sub mx-auto max-w-2xl text-[17px] leading-relaxed text-white/50 mb-12" data-astro-cid-2z43ptzp>No delegamos tu negocio a practicantes ni utilizamos plantillas genéricas. Detrás de cada línea de código y cada estrategia de pauta hay un experto senior obsesionado con el ROI.</p><a href="#team" class="magnetic hero-cta inline-flex items-center gap-3 text-[13px] font-semibold text-white/70 hover:text-white transition-colors" data-astro-cid-2z43ptzp>Conocerlos<span class="inline-block transition-transform duration-300 group-hover:translate-y-1" data-astro-cid-2z43ptzp>↓</span></a></div>` })}</section><section class="relative bg-white py-24 lg:py-32 overflow-hidden border-t border-black/5" data-astro-cid-2z43ptzp><div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" data-astro-cid-2z43ptzp></div>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10",
		"data-astro-cid-2z43ptzp": true
	}, { "default": ($$result) => renderTemplate`<div class="max-w-2xl mx-auto text-center mb-20" data-astro-cid-2z43ptzp><span class="text-[11px] font-bold uppercase tracking-[.25em] text-blue-600 mb-6 block" data-astro-cid-2z43ptzp>Nuestro Manifiesto Operativo</span><h2 class="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight text-black leading-[1.1]" data-astro-cid-2z43ptzp>El ADN que nos hace diferentes.</h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto" data-astro-cid-2z43ptzp><!-- Tarjeta 1 (Dark) --><div class="group relative overflow-hidden rounded-[2.5rem] bg-[#050505] p-10 lg:p-14 transition-all duration-500 hover:scale-[1.02] shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white/5" data-spotlight data-astro-cid-2z43ptzp><div class="spotlight-glow" data-astro-cid-2z43ptzp></div><div class="absolute -right-4 -bottom-10 text-[14rem] font-black leading-none text-white/[0.02] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110" data-astro-cid-2z43ptzp>01</div><div class="relative z-10" data-astro-cid-2z43ptzp><h4 class="text-2xl font-bold text-white mb-5" data-astro-cid-2z43ptzp>Menos manos, <br data-astro-cid-2z43ptzp><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" data-astro-cid-2z43ptzp>más mentes.</span></h4><p class="text-[16px] text-white/60 leading-[1.8]" data-astro-cid-2z43ptzp>Preferimos un equipo ultra-especializado y altamente técnico. No financiamos ejércitos de juniors practicando con el presupuesto de los clientes.</p></div></div><!-- Tarjeta 2 (Light / Glass) --><div class="group relative overflow-hidden rounded-[2.5rem] bg-white border border-black/10 p-10 lg:p-14 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]" data-spotlight data-astro-cid-2z43ptzp><div class="spotlight-glow" data-astro-cid-2z43ptzp></div><div class="absolute -right-4 -bottom-10 text-[14rem] font-black leading-none text-black/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110" data-astro-cid-2z43ptzp>02</div><div class="relative z-10" data-astro-cid-2z43ptzp><h4 class="text-2xl font-bold text-black mb-5" data-astro-cid-2z43ptzp>Cero <br data-astro-cid-2z43ptzp><span class="text-black/30 italic" data-astro-cid-2z43ptzp>intermediarios.</span></h4><p class="text-[16px] text-black/60 leading-[1.8]" data-astro-cid-2z43ptzp>Eliminamos a los Account Managers. Aquí te sientas a planear, ejecutar y revisar métricas directamente con el ingeniero a cargo.</p></div></div><!-- Tarjeta 3 (Light / Glass) --><div class="group relative overflow-hidden rounded-[2.5rem] bg-white border border-black/10 p-10 lg:p-14 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]" data-spotlight data-astro-cid-2z43ptzp><div class="spotlight-glow" data-astro-cid-2z43ptzp></div><div class="absolute -right-4 -bottom-10 text-[14rem] font-black leading-none text-black/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110" data-astro-cid-2z43ptzp>03</div><div class="relative z-10" data-astro-cid-2z43ptzp><h4 class="text-2xl font-bold text-black mb-5" data-astro-cid-2z43ptzp>Data sobre <br data-astro-cid-2z43ptzp><span class="text-black/30 italic" data-astro-cid-2z43ptzp>intuición.</span></h4><p class="text-[16px] text-black/60 leading-[1.8]" data-astro-cid-2z43ptzp>Ninguna decisión se toma "porque se ve bonito". Analizamos mapas de calor y hacemos pruebas A/B para respaldar estadísticamente cada cambio.</p></div></div><!-- Tarjeta 4 (Dark Blue / Gradient) --><div class="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-900 to-[#050505] p-10 lg:p-14 transition-all duration-500 hover:scale-[1.02] shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white/10" data-spotlight data-astro-cid-2z43ptzp><div class="spotlight-glow" data-astro-cid-2z43ptzp></div><div class="absolute -right-4 -bottom-10 text-[14rem] font-black leading-none text-white/[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110" data-astro-cid-2z43ptzp>04</div><div class="relative z-10" data-astro-cid-2z43ptzp><div class="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md" data-astro-cid-2z43ptzp><span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" data-astro-cid-2z43ptzp></span><span class="text-[10px] font-bold text-white uppercase tracking-wider" data-astro-cid-2z43ptzp>El KPI Maestro</span></div><h4 class="text-2xl font-bold text-white mb-4" data-astro-cid-2z43ptzp>Obsesión por el ROI.</h4><p class="text-[16px] text-white/60 leading-[1.8]" data-astro-cid-2z43ptzp>Los likes son métricas de vanidad. Nuestro único indicador de éxito es cuánto facturas a fin de mes gracias a nuestros sistemas de conversión.</p></div></div></div>` })}</section><section class="bg-white pb-24" data-astro-cid-2z43ptzp>${renderComponent($$result, "Container", $$Container, { "data-astro-cid-2z43ptzp": true }, { "default": ($$result) => renderTemplate`<div class="relative w-full aspect-[21/9] min-h-[400px] rounded-[3rem] overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] group" data-tilt="3" data-astro-cid-2z43ptzp><div class="absolute inset-0 bg-black/10 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" data-astro-cid-2z43ptzp></div><!-- Usando una imagen que simula un equipo colaborando --><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" alt="Croilab Team" class="w-full h-full object-cover transition-transform duration-[7s] ease-out group-hover:scale-105" data-astro-cid-2z43ptzp><div class="absolute inset-0 z-20 flex flex-col justify-end p-10 lg:p-16 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" data-astro-cid-2z43ptzp><p class="text-2xl lg:text-4xl text-white max-w-3xl font-bold tracking-tight leading-tight" data-astro-cid-2z43ptzp>"Las grandes empresas no se construyen con software. Se construyen con talento."</p></div></div>` })}</section><section class="bg-[#f8f9fa] py-16 overflow-hidden border-y border-black/5" data-astro-cid-2z43ptzp><div class="flex items-center gap-6 animate-marquee whitespace-nowrap" data-astro-cid-2z43ptzp>${carouselImages.map((img) => renderTemplate`<img${addAttribute(img, "src")} alt="Cultura Croilab" class="h-[250px] w-auto aspect-[4/3] object-cover rounded-2xl border border-black/10 shadow-sm" data-astro-cid-2z43ptzp>`)}${carouselImages.map((img) => renderTemplate`<img${addAttribute(img, "src")} alt="Cultura Croilab" aria-hidden="true" class="h-[250px] w-auto aspect-[4/3] object-cover rounded-2xl border border-black/10 shadow-sm" data-astro-cid-2z43ptzp>`)}</div></section><section id="team" class="relative bg-white py-24 lg:py-32" data-astro-cid-2z43ptzp>${renderComponent($$result, "Container", $$Container, { "data-astro-cid-2z43ptzp": true }, { "default": ($$result) => renderTemplate`<div class="text-center max-w-2xl mx-auto mb-16" data-astro-cid-2z43ptzp><h2 class="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-tight text-black leading-[1.1] mb-6" data-astro-cid-2z43ptzp>Los Especialistas</h2><p class="text-[17px] text-black/60" data-astro-cid-2z43ptzp>El talento humano detrás de las máquinas de conversión.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10" data-astro-cid-2z43ptzp>${teamMembers.map((member) => renderTemplate`<div class="group relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-black/5 shadow-sm transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] hover:-translate-y-2" data-spotlight data-team-card data-astro-cid-2z43ptzp><div class="spotlight-glow" data-astro-cid-2z43ptzp></div><!-- Image llena la card --><img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105" loading="lazy" data-astro-cid-2z43ptzp><!-- Overlay gradiente --><div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" data-astro-cid-2z43ptzp></div><div class="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 mix-blend-overlay z-20 transition-colors duration-500 pointer-events-none" data-astro-cid-2z43ptzp></div><!-- Info --><div class="absolute inset-x-0 bottom-0 z-30 p-6 lg:p-8" data-astro-cid-2z43ptzp><div class="translate-y-2 group-hover:translate-y-0 transition-transform duration-500" data-astro-cid-2z43ptzp><p class="text-[11px] font-bold uppercase tracking-[.2em] text-blue-300 mb-2" data-astro-cid-2z43ptzp>${member.role}</p><h3 class="text-2xl lg:text-[1.7rem] font-bold text-white tracking-tight leading-tight mb-2" data-astro-cid-2z43ptzp>${member.name}</h3><p class="text-[13px] leading-relaxed text-white/70 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden" data-astro-cid-2z43ptzp>${member.bio}</p></div></div></div>`)}</div>` })}</section>${renderComponent($$result, "Cta", $$Cta, { "data-astro-cid-2z43ptzp": true })}` })}${renderScript($$result, "C:/Users/bdela/Desktop/Croilab/src/pages/equipo.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bdela/Desktop/Croilab/src/pages/equipo.astro", void 0);
var $$file = "C:/Users/bdela/Desktop/Croilab/src/pages/equipo.astro";
var $$url = "/equipo";
//#endregion
//#region \0virtual:astro:page:src/pages/equipo@_@astro
var page = () => equipo_exports;
//#endregion
export { page };
