import { t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { a as Fragment, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute, w as createAstro } from "./server_Yceqtf1X.mjs";
//#region src/components/ui/Breadcrumb.astro
createAstro("https://croilab.com");
var $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Breadcrumb;
	const { items = [] } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<nav aria-label="Migas de pan" class="text-[11px] font-medium uppercase tracking-[.2em] text-white/40"><ol class="flex flex-wrap items-center gap-2"><li><a href="/" class="transition hover:text-white">Inicio</a></li>${items.map((item) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<li aria-hidden="true" class="text-white/25">/</li><li>${item.href ? renderTemplate`<a${addAttribute(item.href, "href")} class="transition hover:text-white">${item.label}</a>` : renderTemplate`<span aria-current="page" class="text-white">${item.label}</span>`}</li>` })}`)}</ol></nav>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/ui/Breadcrumb.astro", void 0);
//#endregion
export { $$Breadcrumb as t };
