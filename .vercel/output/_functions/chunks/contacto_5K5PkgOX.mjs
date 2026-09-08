import { n as __exportAll, t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { d as renderTemplate, f as maybeRenderHead, h as defineScriptVars, i as renderComponent, m as addAttribute } from "./server_Yceqtf1X.mjs";
import { i as $$Container, n as site, r as whatsappLink, t as $$BaseLayout } from "./BaseLayout_CUM04enh.mjs";
import { t as $$Breadcrumb } from "./Breadcrumb_CM0NWSvp.mjs";
//#region src/components/Contact.astro
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	const waLink = whatsappLink();
	return renderTemplate`${maybeRenderHead($$result)}<section id="contacto" class="relative overflow-hidden border-t border-black/10 bg-white" data-astro-cid-he3spzz3><div class="grid-bg absolute inset-0 opacity-10" aria-hidden="true" data-astro-cid-he3spzz3></div><!-- Iluminaciones modernas en el fondo (sin azules, puros blancos) --><div class="absolute -bottom-48 left-[-10%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px] animate-glowDrift pointer-events-none" aria-hidden="true" data-astro-cid-he3spzz3></div><div class="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] animate-glowDrift pointer-events-none" aria-hidden="true" data-astro-cid-he3spzz3></div>${renderComponent($$result, "Container", $$Container, {
		"class": "relative z-10 py-24 lg:py-36",
		"data-astro-cid-he3spzz3": true
	}, { "default": ($$result) => renderTemplate`<div class="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20" data-astro-cid-he3spzz3><!-- CABECERA --><div class="reveal-up" data-astro-cid-he3spzz3><div class="mb-8 flex items-center gap-4" data-astro-cid-he3spzz3><span class="h-px w-9 bg-black/20" data-astro-cid-he3spzz3></span><span class="text-[11px] font-medium uppercase tracking-[.24em] text-black/50" data-astro-cid-he3spzz3>Contacto</span></div><h2 class="text-[clamp(2.6rem,4.6vw,4.2rem)] font-semibold leading-[.95] tracking-[-.05em] text-black" data-astro-cid-he3spzz3>Hablemos de tu <span class="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-black to-black/40" data-astro-cid-he3spzz3>próximo</span> crecimiento</h2><p class="mt-8 max-w-md text-[15px] leading-7 text-black/50" data-astro-cid-he3spzz3>Cuéntanos dónde está tu negocio hoy y hacia dónde quieres llevarlo. Sin compromiso.</p><div class="mt-10 flex items-center gap-3" data-astro-cid-he3spzz3><span class="relative flex h-2.5 w-2.5" data-astro-cid-he3spzz3><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" data-astro-cid-he3spzz3></span><span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" data-astro-cid-he3spzz3></span></span><span class="text-xs font-medium uppercase tracking-[.2em] text-black/40" data-astro-cid-he3spzz3>Disponibles · respuesta &lt; 24h</span></div></div><!-- FORMULARIO --><div class="reveal-up relative" style="--i:1" data-astro-cid-he3spzz3><form id="contact-form" class="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.06)]" novalidate data-astro-cid-he3spzz3><div class="grid-bg absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" data-astro-cid-he3spzz3></div><div class="relative z-10 flex flex-col gap-5 p-6 sm:p-8 lg:p-10" data-astro-cid-he3spzz3><div class="flex items-center gap-3 mb-1" data-astro-cid-he3spzz3><span class="h-3 w-3 rounded-full bg-black/20" data-astro-cid-he3spzz3></span><span class="h-3 w-3 rounded-full bg-black/20" data-astro-cid-he3spzz3></span><span class="h-3 w-3 rounded-full bg-black/20" data-astro-cid-he3spzz3></span><span class="ml-3 hidden font-mono text-xs text-black/40 sm:inline" data-astro-cid-he3spzz3>croilab@lab:~/nuevo-proyecto</span></div><div class="flex flex-col gap-1" data-astro-cid-he3spzz3><label for="f-nombre" class="text-xs font-semibold uppercase tracking-[.16em] text-black/50" data-astro-cid-he3spzz3>Nombre</label><input id="f-nombre" name="nombre" type="text" required placeholder="Tu nombre" class="w-full rounded-xl border border-black/10 bg-[#f8f9fa] px-4 py-3.5 text-[15px] text-black placeholder:text-black/30 outline-none transition focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5" data-astro-cid-he3spzz3></div><div class="grid grid-cols-1 gap-5 sm:grid-cols-2" data-astro-cid-he3spzz3><div class="flex flex-col gap-1" data-astro-cid-he3spzz3><label for="f-email" class="text-xs font-semibold uppercase tracking-[.16em] text-black/50" data-astro-cid-he3spzz3>Email</label><input id="f-email" name="email" type="email" required placeholder="tucorreo@empresa.com" class="w-full rounded-xl border border-black/10 bg-[#f8f9fa] px-4 py-3.5 text-[15px] text-black placeholder:text-black/30 outline-none transition focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5" data-astro-cid-he3spzz3></div><div class="flex flex-col gap-1" data-astro-cid-he3spzz3><label for="f-telefono" class="text-xs font-semibold uppercase tracking-[.16em] text-black/50" data-astro-cid-he3spzz3>Teléfono</label><input id="f-telefono" name="telefono" type="tel" placeholder="+57 300 000 0000" class="w-full rounded-xl border border-black/10 bg-[#f8f9fa] px-4 py-3.5 text-[15px] text-black placeholder:text-black/30 outline-none transition focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5" data-astro-cid-he3spzz3></div></div><div class="flex flex-col gap-1" data-astro-cid-he3spzz3><label for="f-mensaje" class="text-xs font-semibold uppercase tracking-[.16em] text-black/50" data-astro-cid-he3spzz3>Mensaje</label><textarea id="f-mensaje" name="mensaje" rows="4" required placeholder="Cuéntanos dónde está tu negocio hoy y hacia dónde quieres llevarlo." class="w-full resize-none rounded-xl border border-black/10 bg-[#f8f9fa] px-4 py-3.5 text-[15px] text-black placeholder:text-black/30 outline-none transition focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5" data-astro-cid-he3spzz3></textarea></div><div id="form-status" class="hidden" data-astro-cid-he3spzz3></div><button type="submit" id="form-submit" class="magnetic group relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-full bg-black px-8 py-4 text-[14px] font-bold text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]" data-astro-cid-he3spzz3><div class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" data-astro-cid-he3spzz3></div><span id="form-submit-label" data-astro-cid-he3spzz3>Enviar mensaje</span><span class="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black" data-astro-cid-he3spzz3>↗</span></button></div></form><!-- Contacto rápido --><div class="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" data-astro-cid-he3spzz3><a${addAttribute(`mailto:${site.email}`, "href")} class="group inline-flex items-center gap-2 text-sm font-medium text-black/60 transition hover:text-black" data-astro-cid-he3spzz3>${site.email}<span class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-astro-cid-he3spzz3>↗</span></a><a${addAttribute(waLink, "href")} target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 text-sm font-medium text-black/60 transition hover:text-black" data-astro-cid-he3spzz3>WhatsApp directo<span class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-astro-cid-he3spzz3>↗</span></a></div></div></div>` })}</section><script>(function(){${defineScriptVars({
		wpBase: "https://darkblue-flamingo-706734.hostingersite.com",
		fluentFormId: 1
	})}
  const form = document.getElementById('contact-form');
  if (form) {
    const status = document.getElementById('form-status');
    const submitBtn = document.getElementById('form-submit');
    const submitLabel = document.getElementById('form-submit-label');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      if (submitBtn) submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Enviando...';
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
        if (submitBtn) submitBtn.disabled = false;
        if (submitLabel) submitLabel.textContent = 'Enviar mensaje';
      }
    });
  }
})();<\/script>`;
}, "C:/Users/bdela/Desktop/Croilab/src/components/Contact.astro", void 0);
//#endregion
//#region src/pages/contacto.astro
var contacto_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contacto,
	file: () => $$file,
	url: () => $$url
});
var $$Contacto = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Contacto | Croilab — Hablemos de tu crecimiento",
		"description": "Escríbenos y hablemos de cómo llevar tu negocio al siguiente nivel. Croilab responde en menos de 24 horas."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative overflow-hidden border-t border-white/5 bg-[#050505]"><!-- Fondos y textura premium --><div class="absolute inset-0 z-0 pointer-events-none"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2564&auto=format&fit=crop" alt="" class="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity"><div class="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/85 to-[#050505]"></div><div class="absolute inset-0 opacity-[0.25] mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div></div><!-- Efectos de iluminación vibrantes --><div class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[150px] pointer-events-none z-0" aria-hidden="true"></div><div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none z-0" aria-hidden="true"></div><div class="grid-bg absolute inset-0 opacity-40 pointer-events-none z-0"></div>${renderComponent($$result, "Container", $$Container, { "class": "relative z-10 pt-32 lg:pt-40" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Breadcrumb", $$Breadcrumb, { "items": [{ label: "Contacto" }] })}<div class="mt-12 max-w-[880px] pb-16 lg:pb-20"><div class="mb-8 flex items-center gap-4"><span class="h-px w-9 bg-white/20"></span><span class="text-[11px] font-medium uppercase tracking-[.24em] text-white/40">Contacto</span></div><h1 class="text-[clamp(3.2rem,6.5vw,6.8rem)] font-semibold leading-[.9] tracking-[-.065em] text-white">Hablemos de tu <span class="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">crecimiento</span></h1><p class="mt-8 max-w-2xl text-[15px] leading-7 text-white/50 md:text-[17px]">Cuéntanos dónde está tu negocio hoy y hacia dónde quieres llevarlo. Respondemos en menos de 24 horas.</p></div>` })}</section>${renderComponent($$result, "Contact", $$Contact, {})}` })}`;
}, "C:/Users/bdela/Desktop/Croilab/src/pages/contacto.astro", void 0);
var $$file = "C:/Users/bdela/Desktop/Croilab/src/pages/contacto.astro";
var $$url = "/contacto";
//#endregion
//#region \0virtual:astro:page:src/pages/contacto@_@astro
var page = () => contacto_exports;
//#endregion
export { page };
