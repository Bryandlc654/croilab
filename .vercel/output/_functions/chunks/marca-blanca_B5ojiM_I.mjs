import { n as __exportAll, t as createComponent } from "./compiler_Cff8VUIR.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_Yceqtf1X.mjs";
import { t as $$BaseLayout } from "./BaseLayout_CUM04enh.mjs";
//#region src/pages/marca-blanca.astro
var marca_blanca_exports = /* @__PURE__ */ __exportAll({
	default: () => $$MarcaBlanca,
	file: () => $$file,
	url: () => $$url
});
var $$MarcaBlanca = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"hideHeaderAndFooter": true,
		"title": "Portfolio Marca Blanca · Croilab"
	}, { "default": ($$result) => renderTemplate`<style>
/* =========================================================
   WRAPPER — TOKENS + base styles
   Todo va scoped a .cl-portfolio
   ========================================================= */
.cl-portfolio{
  --bg: #f3f3f1;
  --bg-2: #ebebe8;
  --surface: #ffffff;
  --border: rgba(0,0,0,0.06);
  --border-strong: rgba(0,0,0,0.12);
  --text: #0a0a0a;
  --text-2: #1a1a1a;
  --text-muted: #6b6b6b;
  --text-dim: #9a9a9a;
  --accent: #0a0a0a;
  --sans: 'Be Vietnam Pro', system-ui, -apple-system, sans-serif;
  --serif: 'Instrument Serif', serif;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --r-card: 14px;
  --r-pill: 999px;
  --container: 1280px;

  font-family: var(--sans);
  background: var(--bg);
  color: var(--text);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.015em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}

/* Reset solo dentro del wrapper */
.cl-portfolio, .cl-portfolio *, .cl-portfolio *::before, .cl-portfolio *::after{
  box-sizing: border-box;
}
.cl-portfolio h1, .cl-portfolio h2, .cl-portfolio h3, .cl-portfolio h4,
.cl-portfolio p, .cl-portfolio figure, .cl-portfolio ul, .cl-portfolio ol{
  margin: 0; padding: 0;
}
.cl-portfolio button{
  margin: 0; padding: 0;
  font: inherit; color: inherit;
  background: none; border: none;
  cursor: pointer;
}
.cl-portfolio a{ color: inherit; text-decoration: none; }
.cl-portfolio img{ display: block; max-width: 100%; }
.cl-portfolio ::selection{ background: #0a0a0a; color: #fff; }

.cl-portfolio .container{
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 20px;
}

/* =========================================================
   NAV FLOTANTE STICKY con blur reactivo al scroll
   ========================================================= */
.cl-portfolio .nav-wrap{
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 24px);
  max-width: 1240px;
  z-index: 9999;
  pointer-events: none;
}
.cl-portfolio .nav{
  pointer-events: auto;
  background: rgba(255,255,255,0.42);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid rgba(0,0,0,0.04);
  border-radius: 999px;
  padding: 8px 10px 8px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  box-shadow: 0 4px 18px rgba(0,0,0,0.03);
  transition:
    background .35s var(--ease),
    backdrop-filter .35s var(--ease),
    -webkit-backdrop-filter .35s var(--ease),
    border-color .35s var(--ease),
    box-shadow .35s var(--ease);
}
.cl-portfolio .nav.scrolled{
  background: rgba(255,255,255,0.78);
  backdrop-filter: blur(22px) saturate(180%);
  -webkit-backdrop-filter: blur(22px) saturate(180%);
  border-color: rgba(0,0,0,0.08);
  box-shadow: 0 10px 30px rgba(0,0,0,0.07);
}

.cl-portfolio .logo{
  display: inline-flex;
  align-items: center;
  color: var(--text);
  line-height: 0;
}
.cl-portfolio .logo__svg{
  height: 22px;
  width: auto;
  display: block;
}
@media (min-width: 720px){
  .cl-portfolio .logo__svg{ height: 24px; }
}

.cl-portfolio .nav__center{
  display: none;
  gap: 22px;
  font-size: 14px;
  color: var(--text-2);
  font-weight: 400;
  letter-spacing: -0.01em;
}
.cl-portfolio .nav__center a{ transition: opacity .2s; }
.cl-portfolio .nav__center a:hover{ opacity: .6; }

.cl-portfolio .nav__right{
  display: flex;
  align-items: center;
  gap: 8px;
}

.cl-portfolio .search{
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.6);
  border: 1px solid var(--border);
  padding: 7px 12px 7px 11px;
  border-radius: var(--r-pill);
  color: var(--text-muted);
  font-size: 13.5px;
  cursor: text;
  transition: border-color .2s, background .2s;
}
.cl-portfolio .nav.scrolled .search{ background: var(--surface); }
.cl-portfolio .search:hover{ border-color: var(--border-strong); }
.cl-portfolio .search input{
  background: none; border: none; outline: none;
  font-family: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  color: var(--text);
  font-size: 16px;
  width: 90px;
  min-width: 0;
}
.cl-portfolio .search input::placeholder{ color: var(--text-muted); font-size: 13.5px; }
@media (min-width: 720px){
  .cl-portfolio .search input{ width: 130px; }
}
@media (min-width: 900px){
  .cl-portfolio .nav__center{ display: flex; }
}

/* =========================================================
   HERO
   ========================================================= */
.cl-portfolio .hero{
  padding: clamp(96px, 12vw, 150px) 0 clamp(40px, 5vw, 64px);
}
.cl-portfolio .hero__inner{
  max-width: 1100px;
}
.cl-portfolio .hero__title{
  font-size: clamp(40px, 9vw, 84px);
  font-weight: 400;
  letter-spacing: -0.045em;
  line-height: 0.98;
  color: var(--text);
}
.cl-portfolio .hero__icon{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0.95em;
  height: 0.95em;
  border-radius: 0.18em;
  background: #0a0a0a;
  color: #fff;
  vertical-align: -0.18em;
  margin-right: 0.18em;
  padding: 0.16em;
  position: relative;
  box-shadow:
    0 0.04em 0 rgba(255,255,255,0.05) inset,
    0 -0.04em 0 rgba(0,0,0,0.4) inset,
    0 0.3em 0.5em -0.18em rgba(0,0,0,0.3);
  opacity: 0;
  transform: scale(0.6) rotate(-12deg);
  animation: clIconPop .9s var(--ease-out) .1s forwards;
}
.cl-portfolio .hero__icon svg{ width: 100%; height: 100%; display: block; }
@keyframes clIconPop{
  to{ opacity: 1; transform: scale(1) rotate(0); }
}
.cl-portfolio .hero__title-text{ display: inline; }

@media (min-width: 720px){
  .cl-portfolio .hero__title{
    display: flex;
    align-items: flex-start;
    gap: clamp(14px, 2vw, 24px);
    flex-wrap: nowrap;
  }
  .cl-portfolio .hero__icon{
    width: clamp(56px, 8vw, 86px);
    height: clamp(56px, 8vw, 86px);
    border-radius: 14px;
    padding: 10px;
    margin-right: 0;
    vertical-align: baseline;
    flex-shrink: 0;
    margin-top: 0.04em;
  }
  .cl-portfolio .hero__title-text{
    flex: 1;
    min-width: 0;
    display: block;
  }
}
.cl-portfolio .hero__title em{
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  color: var(--text-muted);
  letter-spacing: -0.025em;
}
.cl-portfolio .hero__word{
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  padding-bottom: 0.05em;
}
.cl-portfolio .hero__word > span{
  display: inline-block;
  transform: translateY(110%);
  animation: clRise 1s var(--ease-out) forwards;
}
@keyframes clRise{ to{ transform: translateY(0); } }

.cl-portfolio .hero__sub{
  margin-top: 24px;
  font-size: clamp(15px, 1.5vw, 17px);
  color: var(--text-muted);
  max-width: 580px;
  line-height: 1.55;
  letter-spacing: -0.01em;
  opacity: 0;
  animation: clFadeUp .9s var(--ease-out) .55s forwards;
}

/* =========================================================
   VSL — Video Sales Letter (facade YouTube)
   ========================================================= */
.cl-portfolio .vsl{
  position: relative;
  margin: clamp(36px, 5vw, 64px) auto 0;
  width: 100%;
  max-width: 920px;
  aspect-ratio: 16 / 9;
  border-radius: 18px;
  overflow: hidden;
  background: #0a0a0a;
  box-shadow:
    0 30px 80px -30px rgba(0,0,0,0.45),
    0 0 0 1px rgba(0,0,0,0.06);
  opacity: 0;
  animation: clFadeUp 1s var(--ease-out) .9s forwards;
}
.cl-portfolio .vsl__btn{
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  border: 0;
  cursor: pointer;
  padding: 0;
  background: #0a0a0a;
  overflow: hidden;
}
.cl-portfolio .vsl__poster{
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .8s var(--ease);
}
.cl-portfolio .vsl__btn:hover .vsl__poster{ transform: scale(1.04); }
.cl-portfolio .vsl__shade{
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 80%),
    linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%);
  pointer-events: none;
}
.cl-portfolio .vsl__play{
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: clamp(72px, 12vw, 110px);
  height: clamp(72px, 12vw, 110px);
  border-radius: 50%;
  background: #fff;
  color: #0a0a0a;
  display: grid;
  place-items: center;
  box-shadow:
    0 20px 50px rgba(0,0,0,0.4),
    0 0 0 6px rgba(255,255,255,0.15);
  transition: transform .4s var(--ease), box-shadow .4s;
  animation: clVslBreathe 2.4s ease-in-out infinite;
}
.cl-portfolio .vsl__play svg{
  width: 38%;
  height: 38%;
  margin-left: 6%;
  display: block;
}
@keyframes clVslBreathe{
  0%, 100%{ transform: translate(-50%, -50%) scale(1); }
  50%{ transform: translate(-50%, -50%) scale(1.04); }
}
.cl-portfolio .vsl__btn:hover .vsl__play{
  transform: translate(-50%, -50%) scale(1.12);
  animation: none;
  box-shadow:
    0 24px 60px rgba(0,0,0,0.55),
    0 0 0 12px rgba(255,255,255,0.18);
}
.cl-portfolio .vsl__play::before,
.cl-portfolio .vsl__play::after{
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.65);
  animation: clVslPulse 2.4s ease-out infinite;
}
.cl-portfolio .vsl__play::after{ animation-delay: 1.2s; }
@keyframes clVslPulse{
  0%{ transform: scale(0.85); opacity: 1; }
  100%{ transform: scale(1.8); opacity: 0; }
}
.cl-portfolio .vsl__cta{
  position: absolute;
  left: 50%;
  bottom: clamp(18px, 3vw, 32px);
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px 8px 12px;
  background: rgba(255,255,255,0.16);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 999px;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.01em;
  white-space: nowrap;
}
.cl-portfolio .vsl__pulse{
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #ff3b30;
  box-shadow: 0 0 0 4px rgba(255,59,48,0.25);
  animation: clVslDot 1.6s ease-in-out infinite;
}
@keyframes clVslDot{
  0%, 100%{ box-shadow: 0 0 0 4px rgba(255,59,48,0.25); }
  50%{ box-shadow: 0 0 0 8px rgba(255,59,48,0.05); }
}
.cl-portfolio .vsl__duration{
  position: absolute;
  top: clamp(14px, 2vw, 20px);
  right: clamp(14px, 2vw, 20px);
  padding: 4px 10px;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 6px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
}
.cl-portfolio .vsl__iframe{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
/* ===== Plyr — estilo Apple (glassmorphism) + llena la caja del VSL ===== */
.cl-portfolio .vsl{
  --plyr-color-main: #ffffff;
  --plyr-video-control-color: #ffffff;
  --plyr-video-control-color-hover: #ffffff;
  --plyr-font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Be Vietnam Pro", sans-serif;
  --plyr-font-size-base: 14px;
  --plyr-font-weight-regular: 400;
  --plyr-font-weight-bold: 500;
  --plyr-control-spacing: 11px;
  --plyr-control-radius: 10px;
  --plyr-range-track-height: 4px;
  --plyr-range-thumb-height: 13px;
  --plyr-range-thumb-shadow: 0 1px 3px rgba(0,0,0,0.4);
  --plyr-video-progress-buffered-background: rgba(255,255,255,0.25);
  --plyr-tooltip-background: rgba(40,40,42,0.9);
  --plyr-tooltip-color: #fff;
  --plyr-tooltip-radius: 8px;
  --plyr-menu-background: rgba(28,28,30,0.72);
  --plyr-menu-color: #f2f2f7;
  --plyr-menu-radius: 14px;
  --plyr-menu-arrow-size: 5px;
}
.cl-portfolio .vsl .plyr{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  --plyr-border-radius: 0;
}
/* Barra de controles flotante con desenfoque tipo Apple */
.cl-portfolio .vsl .plyr--video .plyr__controls{
  background: rgba(22,22,24,0.55);
  -webkit-backdrop-filter: saturate(180%) blur(22px);
  backdrop-filter: saturate(180%) blur(22px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  margin: 0 14px 14px;
  padding: 7px 12px;
  box-shadow: 0 10px 34px rgba(0,0,0,0.4);
}
.cl-portfolio .vsl .plyr--video .plyr__control:hover{
  background: rgba(255,255,255,0.18);
}
.cl-portfolio .vsl .plyr--video .plyr__control[aria-expanded=true]{
  background: rgba(255,255,255,0.22);
}
/* Botón central de play translúcido (glass) */
.cl-portfolio .vsl .plyr__control--overlaid{
  background: rgba(255,255,255,0.16);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.4);
  padding: 20px;
  box-shadow: 0 10px 34px rgba(0,0,0,0.4);
  transition: transform .3s var(--ease), background .3s;
}
.cl-portfolio .vsl .plyr__control--overlaid:hover{
  background: rgba(255,255,255,0.28);
  transform: scale(1.05);
}
/* Menú de Ajustes (calidad / velocidad) con cristal esmerilado */
.cl-portfolio .vsl .plyr__menu__container{
  -webkit-backdrop-filter: blur(22px) saturate(180%);
  backdrop-filter: blur(22px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: 0 12px 40px rgba(0,0,0,0.45);
}
.cl-portfolio .vsl .plyr__menu__container .plyr__control--back::after{
  border-top-color: rgba(255,255,255,0.2);
}
@keyframes clFadeUp{
  from{ opacity: 0; transform: translateY(14px); }
  to{ opacity: 1; transform: translateY(0); }
}

.cl-portfolio .btn{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: var(--r-pill);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.01em;
  border: 1px solid transparent;
  transition: all .25s var(--ease);
}
.cl-portfolio .btn--primary{ background: #0a0a0a; color: #fff; }
.cl-portfolio .btn--primary:hover{
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.18);
}
.cl-portfolio .btn--ghost{
  background: var(--surface);
  border-color: var(--border);
  color: var(--text);
}
.cl-portfolio .btn--ghost:hover{
  border-color: var(--border-strong);
  background: #fff;
}
.cl-portfolio .btn .arr{ transition: transform .3s var(--ease); display: inline-block; }
.cl-portfolio .btn:hover .arr{ transform: translateX(3px); }

/* =========================================================
   TOOLBAR (chips + count)
   ========================================================= */
.cl-portfolio .toolbar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}
.cl-portfolio .chips{
  display: flex;
  gap: 6px;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  max-width: 100%;
}
.cl-portfolio .chips::-webkit-scrollbar{ display: none; }
.cl-portfolio .chip{
  padding: 7px 14px;
  border-radius: var(--r-pill);
  background: var(--surface);
  border: 1px solid var(--border);
  font-size: 13px;
  color: var(--text-2);
  font-weight: 400;
  letter-spacing: -0.01em;
  white-space: nowrap;
  transition: all .25s var(--ease);
  flex-shrink: 0;
}
.cl-portfolio .chip:hover{ border-color: var(--border-strong); }
.cl-portfolio .chip.active{
  background: #0a0a0a;
  color: #fff;
  border-color: #0a0a0a;
}
.cl-portfolio .count{ font-size: 13px; color: var(--text-muted); }
.cl-portfolio .count strong{ color: var(--text); font-weight: 400; }

/* =========================================================
   GRID
   ========================================================= */
.cl-portfolio .gallery{
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding-bottom: 40px;
}
@media (min-width: 720px){
  .cl-portfolio .gallery{ grid-template-columns: repeat(2, 1fr); gap: 20px; }
}

.cl-portfolio .card{
  position: relative;
  border-radius: var(--r-card);
  overflow: hidden;
  aspect-ratio: 4 / 3;
  border: 1px solid var(--border);
  background: var(--surface);
  cursor: pointer;
  isolation: isolate;
  display: block;
  opacity: 0;
  transform: translateY(60px) scale(0.94);
  filter: blur(8px);
  transition:
    opacity 1s var(--ease-out),
    transform 1.2s cubic-bezier(0.22, 1, 0.36, 1),
    filter 1s var(--ease-out),
    border-color .8s var(--ease-out),
    box-shadow 1s var(--ease-out);
}
.cl-portfolio .card.in{
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}
.cl-portfolio .card.is-hidden{ display: none; }
.cl-portfolio .card:hover{
  border-color: var(--border-strong);
  box-shadow: 0 30px 60px -18px rgba(0,0,0,0.25);
  transform: translateY(-6px);
}

/* Imagen real que cubre toda la card */
.cl-portfolio .card__cover{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1);
  transition: transform 1.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}
.cl-portfolio .card:hover .card__cover{ transform: scale(1.07); }
.cl-portfolio .card.is-focused .card__cover{ transform: scale(1.05); }

/* CARD LABEL */
.cl-portfolio .card__label{
  position: absolute;
  left: 12px;
  bottom: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  padding: 7px 12px 7px 10px;
  border-radius: var(--r-pill);
  font-size: 12.5px;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: var(--text);
  z-index: 3;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity .7s var(--ease-out), transform .7s var(--ease-out);
}
.cl-portfolio .card__label::before{
  content: "";
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #0a0a0a;
}
.cl-portfolio .card:hover .card__label{ opacity: 1; transform: translateY(0); }

/* Auto-focus en táctil */
.cl-portfolio .card.is-focused{
  border-color: var(--border-strong);
  box-shadow: 0 20px 40px -18px rgba(0,0,0,0.22);
}
.cl-portfolio .card.is-focused .card__label{
  opacity: 1;
  transform: translateY(0);
}

/* LOAD MORE */
.cl-portfolio .load-wrap{
  display: flex;
  justify-content: center;
  padding: 8px 0 64px;
}
.cl-portfolio .load-wrap.is-hidden{ display: none; }

/* =========================================================
   SECTIONS
   ========================================================= */
.cl-portfolio .section{ padding: clamp(64px, 9vw, 110px) 0; }
.cl-portfolio .section--alt{ background: var(--bg-2); }
.cl-portfolio .section__head{ margin-bottom: 36px; max-width: 760px; }
.cl-portfolio .eyebrow{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--text-muted);
  margin-bottom: 16px;
}
.cl-portfolio .eyebrow::before{
  content: "";
  width: 14px; height: 1px;
  background: var(--text-muted);
}
.cl-portfolio .section__title{
  font-size: clamp(28px, 5vw, 52px);
  font-weight: 400;
  letter-spacing: -0.045em;
  line-height: 1.02;
}
.cl-portfolio .section__title em{
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  color: var(--text-muted);
}
.cl-portfolio .section__sub{
  font-size: 15px;
  color: var(--text-muted);
  margin-top: 16px;
  max-width: 560px;
  line-height: 1.6;
}

/* =========================================================
   PROCESS TIMELINE
   ========================================================= */
.cl-portfolio .process{
  position: relative;
  padding-left: 44px;
}
@media (min-width: 720px){ .cl-portfolio .process{ padding-left: 56px; } }
.cl-portfolio .process__line{
  position: absolute;
  left: 14px;
  top: 16px;
  bottom: 16px;
  width: 2px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}
@media (min-width: 720px){ .cl-portfolio .process__line{ left: 18px; } }
.cl-portfolio .process__line-fill{
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #0a0a0a 75%, rgba(10,10,10,0.6) 100%);
  border-radius: 2px;
  transition: height .15s linear;
  will-change: height;
}
.cl-portfolio .process__line-fill::after{
  content: "";
  position: absolute;
  bottom: -8px; left: 50%;
  width: 18px; height: 18px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(10,10,10,0.6), transparent 70%);
  filter: blur(2px);
  opacity: .7;
}
.cl-portfolio .process__step{
  padding: 26px 0;
  border-bottom: 1px solid var(--border);
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  position: relative;
  transition: opacity .6s var(--ease), transform .6s var(--ease);
  opacity: 0.35;
  transform: translateX(-6px);
}
.cl-portfolio .process__step:first-child{ border-top: 1px solid var(--border); }
.cl-portfolio .process__step.is-active{
  opacity: 1;
  transform: translateX(0);
}
.cl-portfolio .process__dot{
  position: absolute;
  left: -36px;
  top: 30px;
  width: 14px; height: 14px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--border);
  z-index: 2;
  transition: all .5s var(--ease);
}
@media (min-width: 720px){ .cl-portfolio .process__dot{ left: -44px; top: 36px; } }
.cl-portfolio .process__step.is-active .process__dot{
  background: #0a0a0a;
  border-color: #0a0a0a;
  box-shadow: 0 0 0 6px rgba(10,10,10,0.08);
  transform: scale(1.05);
}
.cl-portfolio .process__step.is-active .process__dot::before{
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 1px solid rgba(10,10,10,0.15);
  animation: clPulseRing 2s ease-out infinite;
}
@keyframes clPulseRing{
  0%{ transform: scale(0.8); opacity: 1; }
  100%{ transform: scale(1.6); opacity: 0; }
}
.cl-portfolio .process__n{
  font-family: var(--serif);
  font-style: italic;
  font-size: 22px;
  color: var(--text-dim);
  line-height: 1;
  transition: color .5s var(--ease);
}
.cl-portfolio .process__step.is-active .process__n{ color: var(--text); }
.cl-portfolio .process__title{
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 400;
  letter-spacing: -0.03em;
  margin-bottom: 4px;
  line-height: 1.1;
}
.cl-portfolio .process__desc{
  font-size: 14.5px;
  color: var(--text-muted);
  line-height: 1.55;
  letter-spacing: -0.01em;
}
.cl-portfolio .process__tag{
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  margin-top: 8px;
}
@media (min-width: 860px){
  .cl-portfolio .process__step{
    grid-template-columns: 60px 1fr 160px;
    gap: 24px;
    padding: 36px 0;
    align-items: center;
  }
  .cl-portfolio .process__tag{ text-align: right; margin-top: 0; }
  .cl-portfolio .process__dot{ top: 50%; transform: translateY(-50%); }
  .cl-portfolio .process__step.is-active .process__dot{ transform: translateY(-50%) scale(1.05); }
}

/* =========================================================
   FAQ
   ========================================================= */
.cl-portfolio .faq{ border-top: 1px solid var(--border); }
.cl-portfolio .faq__item{ border-bottom: 1px solid var(--border); }
.cl-portfolio .faq__q{
  width: 100%;
  text-align: left;
  padding: 20px 0;
  font-size: clamp(16px, 1.7vw, 18px);
  font-weight: 400;
  letter-spacing: -0.025em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}
.cl-portfolio .faq__icon{
  width: 24px; height: 24px;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  position: relative;
  flex-shrink: 0;
  transition: transform .4s var(--ease), background .3s;
}
.cl-portfolio .faq__icon::before,
.cl-portfolio .faq__icon::after{
  content: "";
  position: absolute;
  background: var(--text);
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
}
.cl-portfolio .faq__icon::before{ width: 9px; height: 1.4px; }
.cl-portfolio .faq__icon::after{ width: 1.4px; height: 9px; transition: transform .3s var(--ease); }
.cl-portfolio .faq__item.open .faq__icon{ background: #0a0a0a; }
.cl-portfolio .faq__item.open .faq__icon::before,
.cl-portfolio .faq__item.open .faq__icon::after{ background: #fff; }
.cl-portfolio .faq__item.open .faq__icon::after{ transform: translate(-50%, -50%) scaleY(0); }
.cl-portfolio .faq__a{ max-height: 0; overflow: hidden; transition: max-height .55s var(--ease); }
.cl-portfolio .faq__a-inner{
  padding: 0 0 22px;
  color: var(--text-muted);
  font-size: 14.5px;
  line-height: 1.65;
  max-width: 720px;
}

/* =========================================================
   CTA FINAL
   ========================================================= */
.cl-portfolio .cta-final{
  margin: 0 16px clamp(40px, 6vw, 80px);
  border-radius: 22px;
  padding: clamp(48px, 8vw, 100px) clamp(24px, 6vw, 80px);
  background: #0a0a0a;
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cl-portfolio .cta-final::before{
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.07), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(255,255,255,0.04), transparent 50%);
  pointer-events: none;
}
.cl-portfolio .cta-final__eyebrow{
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255,255,255,0.55);
  margin-bottom: 18px;
  position: relative; z-index: 1;
}
.cl-portfolio .cta-final__title{
  font-size: clamp(30px, 6vw, 62px);
  font-weight: 400;
  letter-spacing: -0.045em;
  line-height: 1;
  position: relative; z-index: 1;
}
.cl-portfolio .cta-final__title em{
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  color: rgba(255,255,255,0.55);
}
.cl-portfolio .cta-final__sub{
  font-size: 15px;
  color: rgba(255,255,255,0.65);
  max-width: 460px;
  margin: 20px auto 0;
  line-height: 1.6;
  position: relative; z-index: 1;
}
.cl-portfolio .cta-final__actions{
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 28px;
  position: relative; z-index: 1;
}
.cl-portfolio .cta-final .btn--primary{
  background: #fff; color: #0a0a0a;
}
.cl-portfolio .cta-final .btn--primary:hover{ box-shadow: 0 10px 24px rgba(255,255,255,0.18); }

/* =========================================================
   REVEAL
   ========================================================= */
.cl-portfolio .reveal{
  opacity: 0; transform: translateY(24px);
  transition: opacity .8s var(--ease), transform .8s var(--ease);
}
.cl-portfolio .reveal.in{ opacity: 1; transform: translateY(0); }
@media (prefers-reduced-motion: reduce){
  .cl-portfolio *, .cl-portfolio *::before, .cl-portfolio *::after{
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  .cl-portfolio .card, .cl-portfolio .reveal{ opacity: 1 !important; transform: none !important; }
}
</style>${maybeRenderHead($$result)}<div class="cl-portfolio"><!-- ===== NAV STICKY ===== --><div class="nav-wrap"><div class="nav" id="cl-nav"><a href="#cl-top" class="logo" aria-label="Croilab"><svg class="logo__svg" viewBox="0 0 240.94 53.07" fill="currentColor" aria-hidden="true"><g><path d="M53.41,6.89l-6.34,3.85c-13.18,6.74-29.75,5.98-41.89-.78C3.5,9.03.24,7.01.24,7.01l15.17,15.28c6.83,5.88,17.3,5.33,22.83,0,3.89-3.75,15.17-15.4,15.17-15.4Z"></path><path d="M38.27,37.4c4.86,4.34,9.55,8.83,13.89,13.9.39.46,1.24,1.53,1.24,1.53-13.66-9.88-31.76-12.21-46.58-3.96-1.75.98-6.83,4.2-6.83,4.2l3.97-4.28s11.88-13.17,16.91-14.75c6.15-1.93,12.68-.85,17.39,3.36Z"></path></g><g><path d="M86.26,46.41c-3.55,0-6.72-.84-9.51-2.52-2.79-1.68-4.99-4.1-6.59-7.25-1.6-3.15-2.4-6.92-2.4-11.29s.8-8.17,2.4-11.32c1.6-3.15,3.8-5.57,6.59-7.27,2.79-1.69,5.96-2.54,9.51-2.54,2.17,0,4.2.31,6.11.94s3.6,1.53,5.1,2.73c1.5,1.19,2.74,2.65,3.72,4.36.98,1.71,1.65,3.65,2,5.82h-6.31c-.26-1.31-.71-2.46-1.36-3.46s-1.45-1.85-2.38-2.55-1.99-1.22-3.14-1.57-2.38-.52-3.67-.52c-2.35,0-4.46.59-6.33,1.78-1.87,1.19-3.33,2.92-4.4,5.21-1.07,2.29-1.6,5.09-1.6,8.4s.54,6.11,1.63,8.4c1.08,2.29,2.55,4.02,4.41,5.18,1.86,1.17,3.95,1.75,6.29,1.75,1.29,0,2.5-.18,3.65-.54s2.2-.88,3.14-1.57,1.75-1.54,2.4-2.55,1.11-2.16,1.36-3.45h6.34c-.31,2.02-.95,3.87-1.9,5.56-.96,1.68-2.18,3.15-3.67,4.4-1.49,1.25-3.19,2.21-5.11,2.88s-4.01,1.01-6.27,1.01Z"></path><path d="M107.2,45.85V15.03h5.87v4.96h.33c.57-1.69,1.56-3.01,2.98-3.97,1.42-.96,3.02-1.43,4.82-1.43.39,0,.83.01,1.32.04s.91.07,1.24.12v5.79c-.22-.07-.64-.15-1.27-.22s-1.26-.11-1.9-.11c-1.4,0-2.66.29-3.78.88-1.12.59-1.99,1.4-2.62,2.44-.62,1.04-.94,2.24-.94,3.6v18.72h-6.07Z"></path><path d="M137.98,46.49c-2.89,0-5.41-.66-7.57-1.99-2.16-1.32-3.84-3.18-5.03-5.57-1.19-2.39-1.79-5.17-1.79-8.33s.6-6,1.79-8.4c1.19-2.4,2.87-4.26,5.03-5.58s4.68-1.99,7.57-1.99,5.44.66,7.6,1.99c2.16,1.32,3.84,3.18,5.03,5.58s1.79,5.2,1.79,8.4-.6,5.94-1.79,8.33c-1.19,2.39-2.87,4.25-5.03,5.57s-4.69,1.99-7.6,1.99ZM137.98,41.36c1.87,0,3.42-.49,4.65-1.48s2.13-2.29,2.73-3.92c.6-1.63.9-3.41.9-5.36s-.3-3.77-.9-5.42c-.6-1.65-1.51-2.96-2.73-3.94-1.22-.98-2.77-1.48-4.65-1.48s-3.39.49-4.6,1.48c-1.21.98-2.12,2.29-2.72,3.93s-.9,3.45-.9,5.43.3,3.74.9,5.36c.6,1.63,1.5,2.93,2.72,3.92s2.75,1.48,4.6,1.48Z"></path><path d="M159.25,10.32c-1.05,0-1.94-.35-2.69-1.06s-1.12-1.55-1.12-2.52.37-1.87,1.12-2.56c.74-.7,1.64-1.05,2.69-1.05s1.95.35,2.7,1.05c.75.7,1.13,1.55,1.13,2.56s-.38,1.84-1.13,2.54c-.75.7-1.65,1.05-2.7,1.05ZM156.19,45.85V15.03h6.07v30.82h-6.07Z"></path><path d="M173.55,4.77v41.08h-6.07V4.77h6.07Z"></path><path d="M187.4,46.54c-1.95,0-3.71-.36-5.29-1.09s-2.83-1.79-3.75-3.18c-.92-1.4-1.38-3.11-1.38-5.13,0-1.75.34-3.18,1.01-4.3s1.58-2.01,2.73-2.67c1.15-.66,2.43-1.16,3.83-1.49s2.84-.58,4.29-.74c1.82-.22,3.3-.4,4.44-.54s1.98-.37,2.52-.69.81-.84.81-1.56v-.17c0-1.16-.22-2.13-.66-2.92-.44-.79-1.1-1.4-1.97-1.83s-1.96-.65-3.27-.65-2.5.21-3.46.62-1.75.94-2.34,1.59-1.04,1.31-1.34,2.01l-5.71-1.49c.7-1.84,1.7-3.32,3.01-4.44,1.31-1.12,2.8-1.94,4.49-2.45,1.69-.51,3.44-.77,5.24-.77,1.25,0,2.57.15,3.97.44s2.71.83,3.94,1.6,2.23,1.86,3.01,3.25,1.16,3.22,1.16,5.46v20.46h-5.87v-4.22h-.3c-.4.79-1,1.56-1.79,2.32-.79.75-1.79,1.37-2.99,1.86-1.2.49-2.64.73-4.31.73ZM188.75,41.66c1.65,0,3.07-.32,4.25-.96,1.18-.64,2.08-1.5,2.7-2.56.62-1.07.94-2.2.94-3.39v-3.94c-.22.22-.64.42-1.25.59s-1.32.33-2.11.47c-.79.14-1.55.25-2.29.34s-1.34.17-1.82.22c-1.14.15-2.18.4-3.13.74-.95.35-1.7.85-2.26,1.49-.56.64-.84,1.5-.84,2.56,0,.97.25,1.79.76,2.45.51.66,1.19,1.16,2.05,1.49s1.87.5,3.01.5Z"></path><path d="M223.2,46.46c-1.86,0-3.38-.32-4.56-.95-1.19-.63-2.11-1.37-2.78-2.22s-1.19-1.6-1.56-2.26h-.5v4.82h-5.9V4.77h6.07v15.27h.33c.37-.64.88-1.39,1.53-2.23.65-.85,1.56-1.59,2.73-2.22,1.17-.63,2.72-.95,4.65-.95,2.46,0,4.66.62,6.6,1.87,1.94,1.25,3.47,3.06,4.59,5.43s1.68,5.23,1.68,8.57-.55,6.15-1.65,8.53c-1.1,2.38-2.62,4.21-4.56,5.49-1.94,1.28-4.16,1.92-6.66,1.92ZM221.85,41.31c1.76,0,3.24-.48,4.44-1.43,1.19-.96,2.09-2.25,2.69-3.89s.9-3.47.9-5.51-.3-3.84-.9-5.45-1.49-2.88-2.67-3.82c-1.19-.94-2.67-1.41-4.45-1.41s-3.19.45-4.38,1.34-2.1,2.13-2.7,3.72-.91,3.46-.91,5.61.31,4.01.92,5.64c.62,1.63,1.52,2.9,2.72,3.82s2.65,1.38,4.36,1.38Z"></path></g><path d="M236.74,8.41c-.58,0-1.12-.11-1.63-.33s-.95-.52-1.34-.91-.69-.83-.91-1.34-.33-1.05-.33-1.63.11-1.12.33-1.63.52-.95.91-1.34c.39-.39.83-.69,1.34-.91s1.05-.33,1.63-.33,1.13.11,1.64.33c.51.22.95.52,1.34.91s.69.83.9,1.34c.22.51.33,1.05.33,1.63s-.11,1.12-.33,1.63-.52.95-.9,1.34c-.39.39-.83.69-1.34.91s-1.05.33-1.64.33ZM236.74,7.39c.59,0,1.12-.14,1.6-.43.48-.29.87-.67,1.15-1.15.29-.48.43-1.02.43-1.6s-.14-1.12-.43-1.6c-.29-.48-.67-.87-1.15-1.15s-1.02-.43-1.6-.43-1.12.14-1.6.43-.87.67-1.16,1.15c-.29.48-.43,1.02-.43,1.6s.14,1.12.43,1.6.67.87,1.16,1.15c.48.29,1.02.43,1.6.43ZM235.26,6.13v-3.87h1.96c.16,0,.34.04.53.13s.35.22.48.4.2.41.2.69-.07.53-.21.73-.3.35-.5.45-.38.15-.56.15h-1.41v-.64h1.15c.12,0,.25-.06.38-.17s.2-.29.2-.52-.07-.39-.2-.47-.26-.13-.36-.13h-.79v3.24h-.87ZM237.64,6.13l-.95-1.83h.94l.96,1.83h-.95Z"></path></svg></a><nav class="nav__center"><a href="#cl-proyectos">Proyectos</a><a href="#cl-proceso">Proceso</a><a href="#cl-faq">FAQ</a></nav><div class="nav__right"><label class="search" for="cl-searchInput"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><input type="text" id="cl-searchInput" placeholder="Buscar" autocomplete="off"></label></div></div></div><!-- ===== HERO ===== --><section class="hero" id="cl-top"><div class="container"><div class="hero__inner"><h1 class="hero__title"><span class="hero__icon" aria-hidden="true"><svg viewBox="0 0 54 53" fill="currentColor"><path d="M53.41,6.89l-6.34,3.85c-13.18,6.74-29.75,5.98-41.89-.78C3.5,9.03.24,7.01.24,7.01l15.17,15.28c6.83,5.88,17.3,5.33,22.83,0,3.89-3.75,15.17-15.4,15.17-15.4Z"></path><path d="M38.27,37.4c4.86,4.34,9.55,8.83,13.89,13.9.39.46,1.24,1.53,1.24,1.53-13.66-9.88-31.76-12.21-46.58-3.96-1.75.98-6.83,4.2-6.83,4.2l3.97-4.28s11.88-13.17,16.91-14.75c6.15-1.93,12.68-.85,17.39,3.36Z"></path></svg></span><span class="hero__title-text"><span class="hero__word"><span style="animation-delay:.15s">Portfolio</span></span><span class="hero__word"><span style="animation-delay:.22s">de</span></span><span class="hero__word"><span style="animation-delay:.28s">webs</span></span><span class="hero__word"><span style="animation-delay:.36s"><em>en</em></span></span><span class="hero__word"><span style="animation-delay:.42s"><em>marca</em></span></span><span class="hero__word"><span style="animation-delay:.48s"><em>blanca</em>.</span></span></span></h1><p class="hero__sub">Trabajos que diseñamos y desarrollamos para que tu agencia los entregue como propios.</p><div class="vsl" id="cl-vsl"><button class="vsl__btn" id="cl-vslBtn" type="button" aria-label="Reproducir vídeo"><img class="vsl__poster" src="https://i.ytimg.com/vi/J9-aEZ523bA/maxresdefault.jpg" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/J9-aEZ523bA/hqdefault.jpg';" alt="Vista previa del vídeo" loading="lazy"><span class="vsl__shade"></span><span class="vsl__play"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg></span><span class="vsl__cta"><span class="vsl__pulse"></span>Mira el vídeo</span><span class="vsl__duration">2:34</span></button></div></div></div></section><!-- ===== GALERÍA ===== --><section id="cl-proyectos"><div class="container"><div class="toolbar"><div class="chips" id="cl-chips"><button class="chip active" data-filter="all">Todos</button><button class="chip" data-filter="restauracion">Restauración</button><button class="chip" data-filter="tiendas">Tiendas</button><button class="chip" data-filter="estudios">Estudios</button><button class="chip" data-filter="servicios">Servicios</button></div><span class="count" id="cl-count"><strong>—</strong> proyectos</span></div><div class="gallery" id="cl-gallery"><a href="https://laplayasurfhouse.com" target="_blank" rel="noopener noreferrer" class="card" data-category="restauracion" data-name="La Playa Surf House restaurante"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/laplayasurf.webp" alt="La Playa Surf House · Restaurante" loading="lazy"><span class="card__label">La Playa Surf House · Restaurante</span></a><a href="https://bananabycabana.com/" target="_blank" rel="noopener noreferrer" class="card" data-category="estudios" data-name="Banana parques infantiles"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/banana.webp" alt="Banana · Parques infantiles" loading="lazy"><span class="card__label">Banana · Parques infantiles</span></a><a href="https://vivaterrarestaurant.com" target="_blank" rel="noopener noreferrer" class="card" data-category="restauracion" data-name="Viva Terra restaurante"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/vivaterra.webp" alt="Viva Terra · Restaurante" loading="lazy"><span class="card__label">Viva Terra · Restaurante</span></a><a href="https://bengalaspain.com" target="_blank" rel="noopener noreferrer" class="card" data-category="tiendas" data-name="Bengala cachimbas"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/bengala.jpg" alt="Bengala · Cachimbas" loading="lazy"><span class="card__label">Bengala · Cachimbas</span></a><a href="https://www.figma.com/design/hfdR4POWhuh2A2KTSdI0ak/sitios-web-02?node-id=91-302&p=f&t=td6PovP8NlW8R4lq-0" target="_blank" rel="noopener noreferrer" class="card" data-category="estudios" data-name="Aeternum Collective tatuajes"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/aeternum.png" alt="Aeternum Collective · Estudio de tatuajes" loading="lazy"><span class="card__label">Aeternum Collective · Estudio de tatuajes</span></a><a href="https://inmovahomes.com" target="_blank" rel="noopener noreferrer" class="card" data-category="servicios" data-name="Inmova Homes promotora casas"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/inmova.png" alt="Inmova Homes · Promotora" loading="lazy"><span class="card__label">Inmova Homes · Promotora</span></a><a href="https://www.figma.com/design/0lTJ6Q1eb9Bljn4BA4vJx8/Sitio-Web-01?node-id=891-527&p=f&t=dYnbIMYsGep6daPQ-0" target="_blank" rel="noopener noreferrer" class="card" data-category="tiendas" data-name="Naturdis miel"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/Naturdis.webp" alt="Naturdis · Tienda de miel" loading="lazy"><span class="card__label">Naturdis · Tienda de miel</span></a><a href="https://estudiocabana.com" target="_blank" rel="noopener noreferrer" class="card" data-category="estudios" data-name="Cabana estudio arquitectura"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/cabana.png" alt="Cabana · Estudio de arquitectura" loading="lazy"><span class="card__label">Cabana · Estudio de arquitectura</span></a><a href="https://www.figma.com/design/hfdR4POWhuh2A2KTSdI0ak/sitios-web-02?node-id=230-2&p=f&t=td6PovP8NlW8R4lq-0" target="_blank" rel="noopener noreferrer" class="card" data-category="tiendas" data-name="Upbikers accesorios moto"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/upbikers.png" alt="Upbikers · Accesorios de moto" loading="lazy"><span class="card__label">Upbikers · Accesorios de moto</span></a><a href="https://www.figma.com/design/mmG9kdCcwShW5T4vVWqU9D/Web-Astra-Legal?node-id=1-17&t=r8nRCN2o28q6ZCsB-1" target="_blank" rel="noopener noreferrer" class="card" data-category="servicios" data-name="Astra Legal abogados"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/astra.jpg" alt="Astra Legal · Bufete de abogados" loading="lazy"><span class="card__label">Astra Legal · Bufete de abogados</span></a><a href="https://www.joyeriaparejo.com" target="_blank" rel="noopener noreferrer" class="card" data-category="tiendas" data-name="Joyeria Parejo joyas oro"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/joyeria-parejo.jpg" alt="Joyería Parejo · Joyas" loading="lazy"><span class="card__label">Joyería Parejo · Joyas</span></a><a href="https://www.figma.com/design/TCd2U5Jz33PG006h0vGR4x/web-sanchez-solicitors?node-id=0-1&p=f&t=rucoGPoMpfYMrF8p-0" target="_blank" rel="noopener noreferrer" class="card" data-category="servicios" data-name="Sanchez Solicitors abogados"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/Sanchez.jpg" alt="Sánchez Solicitors · Bufete de abogados" loading="lazy"><span class="card__label">Sánchez Solicitors · Bufete de abogados</span></a><a href="https://www.figma.com/design/0lTJ6Q1eb9Bljn4BA4vJx8/Sitio-Web-01?node-id=660-527&p=f&t=dYnbIMYsGep6daPQ-0" target="_blank" rel="noopener noreferrer" class="card" data-category="tiendas" data-name="Finca aceite oliva"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/finca-de-la-torre.png" alt="Finca · Tienda de aceite" loading="lazy"><span class="card__label">Finca · Tienda de aceite</span></a><a href="https://www.servitecclima.com/" target="_blank" rel="noopener noreferrer" class="card" data-category="servicios" data-name="Servitec aire acondicionado"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/servitec.jpg" alt="Servitec · Aire acondicionado" loading="lazy"><span class="card__label">Servitec · Aire acondicionado</span></a><a href="https://preventiam.com" target="_blank" rel="noopener noreferrer" class="card" data-category="servicios" data-name="Preventiam prevencion riesgos"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/2149154425.webp" alt="Preventiam · Prevención de riesgos" loading="lazy"><span class="card__label">Preventiam · Prevención de riesgos</span></a><a href="https://servinec.com" target="_blank" rel="noopener noreferrer" class="card" data-category="servicios" data-name="Servinec agua caliente"><img class="card__cover" src="https://croilab.com/wp-content/uploads/2026/05/servinec.jpg" alt="Servinec · Agua caliente" loading="lazy"><span class="card__label">Servinec · Agua caliente</span></a></div><div class="load-wrap" id="cl-loadWrap"><button class="btn btn--ghost" id="cl-loadMore">Ver más proyectos <span class="arr">↓</span></button></div></div></section><!-- ===== PROCESO ===== --><section class="section section--alt" id="cl-proceso"><div class="container"><div class="section__head reveal"><span class="eyebrow">Proceso</span><h2 class="section__title">Cuatro pasos. <em>Sin sorpresas.</em></h2><p class="section__sub">Desde el brief hasta la entrega final, así trabajamos contigo.</p></div><div class="process" id="cl-process"><div class="process__line" aria-hidden="true"><div class="process__line-fill" id="cl-processFill"></div></div><div class="process__step"><span class="process__dot" aria-hidden="true"></span><span class="process__n">01</span><div><h3 class="process__title">Brief</h3><p class="process__desc">Una llamada de 30 min. Salimos con un plan claro.</p></div><span class="process__tag">Día 1</span></div><div class="process__step"><span class="process__dot" aria-hidden="true"></span><span class="process__n">02</span><div><h3 class="process__title">Diseño</h3><p class="process__desc">Diseño UX/UI en Figma. Lo ponemos en común contigo hasta dejarlo neto.</p></div><span class="process__tag">Días 2–8</span></div><div class="process__step"><span class="process__dot" aria-hidden="true"></span><span class="process__n">03</span><div><h3 class="process__title">Desarrollo</h3><p class="process__desc">Desarrollamos sobre todo en WordPress + Elementor, salvo excepciones. Todo nativo, sin plugins, para preservar la velocidad de la web.</p></div><span class="process__tag">Días 9–20</span></div><div class="process__step"><span class="process__dot" aria-hidden="true"></span><span class="process__n">04</span><div><h3 class="process__title">Entrega</h3><p class="process__desc">Llamada de presentación, QA y un mes de mantenimiento incluido.</p></div><span class="process__tag">Días 21–30</span></div></div></div></section><!-- ===== FAQ ===== --><section class="section" id="cl-faq"><div class="container"><div class="section__head reveal"><span class="eyebrow">Preguntas frecuentes</span><h2 class="section__title">Lo que <em>siempre</em> nos preguntan.</h2></div><div class="faq"><div class="faq__item"><button class="faq__q">¿Mi cliente sabe que estáis detrás? <span class="faq__icon"></span></button><div class="faq__a"><div class="faq__a-inner">Nunca, somos White Label. Si tenemos contacto con el cliente es a través de tu correo corporativo.</div></div></div><div class="faq__item"><button class="faq__q">¿Qué tecnología usáis? <span class="faq__icon"></span></button><div class="faq__a"><div class="faq__a-inner">WordPress + Elementor, Shopify, PrestaShop y WooCommerce. Lo elegimos contigo según tu proyecto.</div></div></div><div class="faq__item"><button class="faq__q">¿Cómo facturáis? <span class="faq__icon"></span></button><div class="faq__a"><div class="faq__a-inner">Tú facturas a tu cliente. Nosotros te facturamos a ti. Sin contacto directo.</div></div></div><div class="faq__item"><button class="faq__q">¿Cuánto cuesta? <span class="faq__icon"></span></button><div class="faq__a"><div class="faq__a-inner">Todo lo vemos contigo antes de que se lo plantees al cliente, para que calcules márgenes. Nuestros precios van a medida.</div></div></div><div class="faq__item"><button class="faq__q">¿Y los plazos? <span class="faq__icon"></span></button><div class="faq__a"><div class="faq__a-inner">Landings 10–14 días. Webs 25–35 días. E-commerce 6–10 semanas. Por escrito.</div></div></div><div class="faq__item"><button class="faq__q">¿Trabajáis fuera de España? <span class="faq__icon"></span></button><div class="faq__a"><div class="faq__a-inner">Sí, trabajamos con agencias de toda Europa y realizamos trabajos en cualquier idioma.</div></div></div></div></div></section><!-- ===== CTA FINAL ===== --><section id="cl-contacto"><div class="cta-final reveal"><p class="cta-final__eyebrow">Hablemos</p><h2 class="cta-final__title">¿Empezamos un <em>proyecto</em>?</h2><p class="cta-final__sub">Respondemos en 24h con presupuesto y plazos.</p><div class="cta-final__actions"><a href="mailto:hola@croilab.com?subject=Marca%20blanca" class="btn btn--primary">Escríbenos <span class="arr">→</span></a></div></div></section></div><script>
(function(){
  var root = document.querySelector('.cl-portfolio');
  if (!root) return;
  var gallery = root.querySelector('#cl-gallery');
  var cards = Array.prototype.slice.call(gallery.querySelectorAll('.card'));
  var chips = root.querySelectorAll('#cl-chips .chip');
  var countEl = root.querySelector('#cl-count strong');
  var loadWrap = root.querySelector('#cl-loadWrap');
  var loadMoreBtn = root.querySelector('#cl-loadMore');
  var nav = root.querySelector('#cl-nav');
  var searchInput = root.querySelector('#cl-searchInput');

  var activeFilter = 'all';
  var searchQuery = '';
  var visible = 8;
  var STEP = 6;

  /* ===== MÓVIL: enlaces de cards abren en misma pestaña =====
     En desktop mantienen target="_blank". */
  (function fixCardLinksMobile(){
    if (!window.matchMedia('(hover: none)').matches) return;
    root.querySelectorAll('.card[target="_blank"]').forEach(function(a){
      a.removeAttribute('target');
    });
  })();

  /* ===== VSL — Reproductor Plyr sobre YouTube (carga diferida desde CDN) =====
     Usa youtube-nocookie para evitar el "error 153" y mejorar la privacidad.
     YouTube ya no permite forzar 1080p de forma fiable; Plyr ofrece su selector. */
  (function vsl(){
    var btn = root.querySelector('#cl-vslBtn');
    if (!btn) return;
    var VIDEO_ID = 'J9-aEZ523bA';

    // Carga única de Plyr (CSS + JS) desde el CDN
    var plyrPromise = null;
    function loadPlyr(){
      if (plyrPromise) return plyrPromise;
      plyrPromise = new Promise(function(resolve){
        if (window.Plyr){ resolve(); return; }
        if (!document.getElementById('cl-plyr-css')){
          var link = document.createElement('link');
          link.id = 'cl-plyr-css';
          link.rel = 'stylesheet';
          link.href = 'https://cdn.plyr.io/3.7.8/plyr.css';
          document.head.appendChild(link);
        }
        var tag = document.createElement('script');
        tag.src = 'https://cdn.plyr.io/3.7.8/plyr.polyfilled.js';
        tag.onload = function(){ resolve(); };
        document.head.appendChild(tag);
      });
      return plyrPromise;
    }

    btn.addEventListener('click', function(){
      loadPlyr().then(function(){
        var playerDiv = document.createElement('div');
        playerDiv.className = 'vsl__iframe';
        playerDiv.setAttribute('data-plyr-provider', 'youtube');
        playerDiv.setAttribute('data-plyr-embed-id', VIDEO_ID);
        btn.replaceWith(playerDiv);

        var player = new Plyr(playerDiv, {
          autoplay: true,
          captions: { active: false, update: false },
          youtube: { noCookie: true, rel: 0, modestbranding: 1, iv_load_policy: 3, playsinline: 1, cc_load_policy: 0 },
          controls: ['play','progress','current-time','mute','volume','settings','fullscreen'],
          settings: ['quality','speed'],
          quality: {
            default: 1080,
            options: [2160, 1440, 1080, 720, 480, 360, 240],
            forced: true,
            onChange: function(q){ /* Plyr aplica setPlaybackQuality en YouTube */ }
          },
          speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] },
          i18n: {
            play: 'Reproducir', pause: 'Pausa', mute: 'Silenciar', unmute: 'Activar sonido',
            settings: 'Ajustes', speed: 'Velocidad', quality: 'Calidad', normal: 'Normal',
            enterFullscreen: 'Pantalla completa', exitFullscreen: 'Salir de pantalla completa',
            qualityBadge: { 2160: '4K', 1440: 'HD', 1080: 'HD', 720: 'HD', 576: 'SD', 480: 'SD' }
          }
        });

        // Fuerza desactivar subtítulos de YouTube aunque el usuario los tenga por defecto
        player.on('ready', function(){
          try {
            var yt = player.embed;
            if (yt && yt.unloadModule){ yt.unloadModule('captions'); yt.unloadModule('cc'); }
          } catch(_){}
        });
      });
    }, { once: true });
  })();

  /* ===== NAV: activar .scrolled cuando se hace scroll ===== */
  if (nav){
    var navTicking = false;
    function updateNav(){
      if (window.scrollY > 20) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
      navTicking = false;
    }
    window.addEventListener('scroll', function(){
      if (!navTicking){ requestAnimationFrame(updateNav); navTicking = true; }
    }, { passive: true });
    updateNav();
  }

  /* ===== CARD REVEAL via IntersectionObserver ===== */
  var cardIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry, i){
      if (entry.isIntersecting){
        var el = entry.target;
        var delay = i * 90;
        setTimeout(function(){ el.classList.add('in'); }, delay);
        cardIO.unobserve(el);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -80px 0px' });

  function observeVisibleCards(){
    cards.forEach(function(c){
      if (!c.classList.contains('is-hidden') && !c.classList.contains('in')){
        cardIO.observe(c);
      }
    });
  }

  function getMatching(){
    return cards.filter(function(c){
      var okCat = activeFilter === 'all' || c.dataset.category === activeFilter;
      var okSearch = !searchQuery
        || (c.dataset.name || '').toLowerCase().indexOf(searchQuery) !== -1
        || (c.dataset.category || '').toLowerCase().indexOf(searchQuery) !== -1;
      return okCat && okSearch;
    });
  }

  function render(){
    var matching = getMatching();
    cards.forEach(function(c){ c.classList.add('is-hidden'); });
    matching.slice(0, visible).forEach(function(c){ c.classList.remove('is-hidden'); });
    countEl.textContent = Math.min(visible, matching.length) + ' / ' + matching.length;
    if (visible >= matching.length) loadWrap.classList.add('is-hidden');
    else loadWrap.classList.remove('is-hidden');
    observeVisibleCards();
  }

  chips.forEach(function(chip){
    chip.addEventListener('click', function(){
      chips.forEach(function(c){ c.classList.remove('active'); });
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      visible = 8;
      cards.forEach(function(c){ c.classList.remove('in'); });
      render();
    });
  });

  if (searchInput){
    searchInput.addEventListener('input', function(e){
      searchQuery = e.target.value.trim().toLowerCase();
      visible = 8;
      cards.forEach(function(c){ c.classList.remove('in'); });
      render();
    });
  }

  loadMoreBtn.addEventListener('click', function(){
    visible += STEP;
    render();
  });

  render();

  /* ===== Section reveals ===== */
  var revealIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting){ e.target.classList.add('in'); revealIO.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  root.querySelectorAll('.reveal').forEach(function(el){ revealIO.observe(el); });

  /* ===== FAQ ===== */
  root.querySelectorAll('.faq__item').forEach(function(item){
    var q = item.querySelector('.faq__q');
    var a = item.querySelector('.faq__a');
    q.addEventListener('click', function(){
      var open = item.classList.toggle('open');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : '0px';
    });
  });

  /* ===== AUTO-FOCUS de cards en móvil/táctil ===== */
  if (window.matchMedia('(hover: none)').matches){
    var fTicking = false;
    var FOCUS_RANGE = 0.30;
    function updateFocus(){
      var vh = window.innerHeight;
      var center = vh * 0.5;
      var range = vh * FOCUS_RANGE;
      cards.forEach(function(card){
        if (card.classList.contains('is-hidden')){
          card.classList.remove('is-focused');
          return;
        }
        var r = card.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh){
          card.classList.remove('is-focused');
          return;
        }
        var cardCenter = r.top + r.height / 2;
        var dist = Math.abs(cardCenter - center);
        if (dist < range) card.classList.add('is-focused');
        else card.classList.remove('is-focused');
      });
      fTicking = false;
    }
    function onScrollFocus(){
      if (!fTicking){ requestAnimationFrame(updateFocus); fTicking = true; }
    }
    window.addEventListener('scroll', onScrollFocus, { passive: true });
    window.addEventListener('resize', onScrollFocus, { passive: true });
    document.addEventListener('click', function(){ setTimeout(onScrollFocus, 50); }, { passive: true });
    updateFocus();
  }

  /* ===== TIMELINE del proceso ===== */
  (function timeline(){
    var process = root.querySelector('#cl-process');
    if (!process) return;
    var fill = root.querySelector('#cl-processFill');
    var steps = Array.prototype.slice.call(process.querySelectorAll('.process__step'));
    var tTicking = false;

    function update(){
      var rect = process.getBoundingClientRect();
      var vh = window.innerHeight;
      var triggerLine = vh * 0.55;
      var start = -rect.top + triggerLine - 80;
      var end = rect.height - 80;
      var progress = start / end;
      progress = Math.max(0, Math.min(1, progress));
      fill.style.height = (progress * 100) + '%';
      steps.forEach(function(step){
        var sr = step.getBoundingClientRect();
        var dot = step.querySelector('.process__dot');
        var dotY = sr.top + (dot ? dot.offsetTop + 7 : 30);
        if (dotY <= triggerLine + 20) step.classList.add('is-active');
        else step.classList.remove('is-active');
      });
      tTicking = false;
    }

    window.addEventListener('scroll', function(){
      if (!tTicking){ requestAnimationFrame(update); tTicking = true; }
    }, { passive: true });
    window.addEventListener('resize', function(){
      if (!tTicking){ requestAnimationFrame(update); tTicking = true; }
    }, { passive: true });
    update();
  })();
})();
<\/script>` })}`;
}, "C:/Users/bdela/Desktop/Croilab/src/pages/marca-blanca.astro", void 0);
var $$file = "C:/Users/bdela/Desktop/Croilab/src/pages/marca-blanca.astro";
var $$url = "/marca-blanca";
//#endregion
//#region \0virtual:astro:page:src/pages/marca-blanca@_@astro
var page = () => marca_blanca_exports;
//#endregion
export { page };
