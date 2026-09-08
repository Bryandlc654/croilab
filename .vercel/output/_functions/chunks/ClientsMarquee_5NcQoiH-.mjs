import { t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { r as getWpProjects } from "./wp_I0wGGDjU.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_Yceqtf1X.mjs";
import { i as $$Container } from "./BaseLayout_CUM04enh.mjs";
//#region src/data/clients.ts
var clients = [
	{
		image: "https://croilab.com/wp-content/uploads/2026/03/Diseno-sin-titulo-2026-03-12T170543.336.png",
		alt: "Cliente 1"
	},
	{
		image: "https://croilab.com/wp-content/uploads/2026/03/Diseno-sin-titulo-2026-03-12T171106.320.png",
		alt: "Cliente 2"
	},
	{
		image: "https://croilab.com/wp-content/uploads/2026/03/Diseno-sin-titulo-2026-03-12T171121.941.png",
		alt: "Cliente 3"
	},
	{
		image: "https://croilab.com/wp-content/uploads/2026/03/Diseno-sin-titulo-2026-03-12T171147.100.png",
		alt: "Cliente 4"
	},
	{
		image: "https://croilab.com/wp-content/uploads/2026/03/Diseno-sin-titulo-2026-03-12T184616.193.png",
		alt: "Cliente 5"
	},
	{
		image: "https://croilab.com/wp-content/uploads/2026/03/Diseno-sin-titulo-2026-03-12T170517.880.png",
		alt: "Cliente 6"
	},
	{
		image: "https://croilab.com/wp-content/uploads/2026/03/Diseno-sin-titulo-2026-03-12T170600.928.png",
		alt: "Cliente 7"
	},
	{
		image: "https://croilab.com/wp-content/uploads/2026/03/Diseno-sin-titulo-2026-03-12T171121.941.png",
		alt: "Cliente 8"
	}
];
//#endregion
//#region src/components/ClientsMarquee.astro
var $$ClientsMarquee = createComponent(async ($$result, $$props, $$slots) => {
	let dynamicClients = [];
	try {
		const { items } = await getWpProjects({ per_page: "50" });
		dynamicClients = items.filter((p) => p.croilab_proyecto?.logo_url).map((p) => ({
			image: p.croilab_proyecto.logo_url,
			alt: p.title?.rendered || "Cliente"
		}));
	} catch (e) {
		console.error("Error fetching projects for marquee:", e);
	}
	const clientsToRender = dynamicClients.length > 0 ? dynamicClients : clients;
	return renderTemplate`${maybeRenderHead($$result)}<section class="border-t border-black/10 bg-white py-14" aria-label="Clientes">${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result) => renderTemplate`<p class="reveal-up mb-10 text-center text-[11px] font-medium uppercase tracking-[.24em] text-muted">Confían en nosotros</p>` })}<div class="marquee marquee-mask"><div class="marquee-track">${clientsToRender.map((client) => renderTemplate`<img${addAttribute(client.image, "src")}${addAttribute(client.alt, "alt")} class="mr-24 h-10 w-auto object-contain brightness-0 opacity-50 transition hover:opacity-100" loading="lazy">`)}${clientsToRender.map((client) => renderTemplate`<img${addAttribute(client.image, "src")}${addAttribute(client.alt, "alt")} class="mr-24 h-10 w-auto object-contain brightness-0 opacity-50 transition hover:opacity-100" loading="lazy" aria-hidden="true">`)}</div></div></section>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/ClientsMarquee.astro", void 0);
//#endregion
export { $$ClientsMarquee as t };
