import { n as __exportAll, t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { n as getWpPosts } from "./wp_I0wGGDjU.mjs";
import { S as unescapeHTML, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_Yceqtf1X.mjs";
import { i as $$Container, t as $$BaseLayout } from "./BaseLayout_CUM04enh.mjs";
import { t as $$Breadcrumb } from "./Breadcrumb_CM0NWSvp.mjs";
//#region src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const { items: posts } = await getWpPosts();
	const formattedPosts = posts.map((post) => {
		let cleanExcerpt = (post.excerpt?.rendered || "").replace(/(<([^>]+)>)/gi, "").trim();
		let imageUrl = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop";
		if (post._embedded && post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0]?.source_url) imageUrl = post._embedded["wp:featuredmedia"][0].source_url;
		return {
			id: post.id,
			title: post.title?.rendered || "Artículo",
			slug: post.slug,
			excerpt: cleanExcerpt,
			date: new Date(post.date).toLocaleDateString("es-ES", {
				year: "numeric",
				month: "long",
				day: "numeric"
			}),
			image: imageUrl
		};
	});
	const featuredPost = formattedPosts.length > 0 ? formattedPosts[0] : null;
	const remainingPosts = formattedPosts.length > 1 ? formattedPosts.slice(1) : [];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Inteligencia de Negocios | Croilab",
		"description": "Artículos sobre optimización de conversiones, SEO, y adquisición de clientes."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden bg-[#050505]"><!-- Iluminación moderna --><div class="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[150px] pointer-events-none" aria-hidden="true"></div>${renderComponent($$result, "Container", $$Container, { "class": "relative z-10 pt-32 lg:pt-40" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Breadcrumb", $$Breadcrumb, { "items": [{ label: "Blog" }] })}<div class="mt-12 max-w-[900px] pb-16 lg:pb-24"><div class="mb-8 flex items-center gap-4"><span class="h-px w-9 bg-white/20"></span><span class="text-[11px] font-medium uppercase tracking-[.24em] text-white/50">Journal</span></div><h1 class="text-[clamp(3.5rem,7vw,7.5rem)] font-bold leading-[0.9] tracking-tight text-white">Inteligencia de <br><span class="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Mercado.</span></h1></div>` })}</section><section class="relative bg-[#050505] pb-32 lg:pb-48">${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result) => renderTemplate`${featuredPost ? renderTemplate`<div class="mb-20 lg:mb-32"><!-- ARTÍCULO DESTACADO (HERO POST) --><article class="group relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"><!-- Imagen Destacada masiva --><a${addAttribute(`/blog/${featuredPost.slug}`, "href")} class="relative aspect-[4/3] lg:aspect-square w-full overflow-hidden rounded-[2.5rem] bg-[#111] border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.02)] block"><div class="absolute inset-0 bg-black/20 z-10 transition-opacity duration-500 group-hover:opacity-0"></div><img${addAttribute(featuredPost.image, "src")}${addAttribute(featuredPost.title, "alt")} loading="lazy" class="h-full w-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105"><div class="absolute top-6 left-6 z-20"><span class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">Destacado</span></div></a><!-- Contenido del Destacado --><div class="flex flex-col justify-center"><span class="text-[11px] font-semibold tracking-widest text-white/40 mb-6 block">${featuredPost.date}</span><a${addAttribute(`/blog/${featuredPost.slug}`, "href")} class="block mb-6"><h2 class="text-[clamp(2rem,3.5vw,4rem)] font-bold tracking-tight text-white leading-[1.1] transition-colors group-hover:text-white/80">${unescapeHTML(featuredPost.title)}</h2></a><p class="text-[17px] leading-[1.8] text-white/50 mb-10 max-w-xl line-clamp-4">${featuredPost.excerpt}</p><div><a${addAttribute(`/blog/${featuredPost.slug}`, "href")} class="inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[13px] font-bold text-black transition-transform duration-300 hover:scale-105">Leer artículo completo<span class="transition-transform duration-300 group-hover:translate-x-1">→</span></a></div></div></article></div>` : null}${remainingPosts.length > 0 && renderTemplate`<div class="border-t border-white/10 pt-20"><h3 class="text-[11px] font-semibold uppercase tracking-[.24em] text-white/40 mb-10">Últimos Artículos</h3><div class="flex flex-col">${remainingPosts.map((post) => renderTemplate`<article class="group relative flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/5 py-12 transition-colors hover:bg-white/[0.02] px-6 -mx-6 rounded-[2rem]"><div class="flex flex-col md:w-7/12"><span class="text-[11px] font-semibold tracking-widest text-white/40 mb-4 block">${post.date}</span><a${addAttribute(`/blog/${post.slug}`, "href")} class="block"><h4 class="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 transition-colors group-hover:text-white/80 leading-[1.2]">${unescapeHTML(post.title)}</h4></a></div><div class="md:w-4/12 flex flex-col items-start md:items-end"><a${addAttribute(`/blog/${post.slug}`, "href")} class="relative w-full aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#111] border border-white/10"><img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} loading="lazy" class="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"><div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-xl transition-transform duration-300 scale-75 group-hover:scale-100"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></div></div></a></div></article>`)}</div></div>`}${formattedPosts.length === 0 && renderTemplate`<div class="py-20 text-center border-t border-white/10 mt-10"><div class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/5 mb-6"><span class="text-2xl text-white/30">!</span></div><h3 class="text-2xl font-semibold text-white mb-2">No hay artículos publicados</h3><p class="text-white/50">Pronto subiremos nuevo contenido.</p></div>`}` })}</section>` })}`;
}, "C:/Users/bdela/Desktop/Croilab/src/pages/blog/index.astro", void 0);
var $$file = "C:/Users/bdela/Desktop/Croilab/src/pages/blog/index.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };
