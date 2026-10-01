const PAGES = ["img/paginas/p01.webp", "img/paginas/p02.webp", "img/paginas/p03.webp", "img/paginas/p04.webp", "img/paginas/p05.webp", "img/paginas/p06.webp", "img/paginas/p07.webp", "img/paginas/p08.webp", "img/paginas/p09.webp", "img/paginas/p10.webp", "img/paginas/p11.webp", "img/paginas/p12.webp", "img/paginas/p13.webp", "img/paginas/p14.webp", "img/paginas/p15.webp", "img/paginas/p16.webp", "img/paginas/p17.webp", "img/paginas/p18.webp", "img/paginas/p19.webp", "img/paginas/p20.webp", "img/paginas/p21.webp", "img/paginas/p22.webp", "img/paginas/p23.webp", "img/paginas/p24.webp", "img/paginas/p25.webp", "img/paginas/p26.webp", "img/paginas/p27.webp", "img/paginas/p28.webp", "img/paginas/p29.webp", "img/paginas/p30.webp", "img/paginas/p31.webp", "img/paginas/p32.webp", "img/paginas/p33.webp", "img/paginas/p34.webp", "img/paginas/p35.webp", "img/paginas/p36.webp", "img/paginas/p37.webp", "img/paginas/p38.webp", "img/paginas/p39.webp", "img/paginas/p40.webp", "img/paginas/p41.webp", "img/paginas/p42.webp", "img/paginas/p43.webp", "img/paginas/p44.webp", "img/paginas/p45.webp", "img/paginas/p46.webp", "img/paginas/p47.webp", "img/paginas/p48.webp", "img/paginas/p49.webp", "img/paginas/p50.webp", "img/paginas/p51.webp", "img/paginas/p52.webp", "img/paginas/p53.webp", "img/paginas/p54.webp", "img/paginas/p55.webp", "img/paginas/p56.webp", "img/paginas/p57.webp", "img/paginas/p58.webp", "img/paginas/p59.webp", "img/paginas/p60.webp", "img/paginas/p61.webp", "img/paginas/p62.webp", "img/paginas/p63.webp", "img/paginas/p64.webp", "img/paginas/p65.webp", "img/paginas/p66.webp", "img/paginas/p67.webp", "img/paginas/p68.webp", "img/paginas/p69.webp", "img/paginas/p70.webp"];
const THUMBS = ["img/miniaturas/t01.webp", "img/miniaturas/t02.webp", "img/miniaturas/t03.webp", "img/miniaturas/t04.webp", "img/miniaturas/t05.webp", "img/miniaturas/t06.webp", "img/miniaturas/t07.webp", "img/miniaturas/t08.webp", "img/miniaturas/t09.webp", "img/miniaturas/t10.webp", "img/miniaturas/t11.webp", "img/miniaturas/t12.webp", "img/miniaturas/t13.webp", "img/miniaturas/t14.webp", "img/miniaturas/t15.webp", "img/miniaturas/t16.webp", "img/miniaturas/t17.webp", "img/miniaturas/t18.webp", "img/miniaturas/t19.webp", "img/miniaturas/t20.webp", "img/miniaturas/t21.webp", "img/miniaturas/t22.webp", "img/miniaturas/t23.webp", "img/miniaturas/t24.webp", "img/miniaturas/t25.webp", "img/miniaturas/t26.webp", "img/miniaturas/t27.webp", "img/miniaturas/t28.webp", "img/miniaturas/t29.webp", "img/miniaturas/t30.webp", "img/miniaturas/t31.webp", "img/miniaturas/t32.webp", "img/miniaturas/t33.webp", "img/miniaturas/t34.webp", "img/miniaturas/t35.webp", "img/miniaturas/t36.webp", "img/miniaturas/t37.webp", "img/miniaturas/t38.webp", "img/miniaturas/t39.webp", "img/miniaturas/t40.webp", "img/miniaturas/t41.webp", "img/miniaturas/t42.webp", "img/miniaturas/t43.webp", "img/miniaturas/t44.webp", "img/miniaturas/t45.webp", "img/miniaturas/t46.webp", "img/miniaturas/t47.webp", "img/miniaturas/t48.webp", "img/miniaturas/t49.webp", "img/miniaturas/t50.webp", "img/miniaturas/t51.webp", "img/miniaturas/t52.webp", "img/miniaturas/t53.webp", "img/miniaturas/t54.webp", "img/miniaturas/t55.webp", "img/miniaturas/t56.webp", "img/miniaturas/t57.webp", "img/miniaturas/t58.webp", "img/miniaturas/t59.webp", "img/miniaturas/t60.webp", "img/miniaturas/t61.webp", "img/miniaturas/t62.webp", "img/miniaturas/t63.webp", "img/miniaturas/t64.webp", "img/miniaturas/t65.webp", "img/miniaturas/t66.webp", "img/miniaturas/t67.webp", "img/miniaturas/t68.webp", "img/miniaturas/t69.webp", "img/miniaturas/t70.webp"];
const SECTIONS = [
  { title: "Portada", by: "Revista Monos Sabios · Nº 1", kind: "Nº 1", from: 1, to: 2 },
  { title: "Bienvenida e índice", by: "“Les deseamos una buena, atenta y tranquila lectura”", kind: "Editorial", from: 3, to: 3 },
  { title: "Recomendaciones", by: "Vito · Tahiel · Juan", kind: "Recomendaciones", from: 4, to: 6 },
  { title: "La reseña de Los Monos Sabios", by: "The French Dispatch", kind: "Reseña", from: 7, to: 7 },
  { title: "Intermisión 01", by: "“El Mono Sabio no vive en sus ideas, las materializa.”", kind: "Intermisión", from: 8, to: 8 },
  { title: "Méndigo", by: "Capítulo 1", kind: "Historieta", from: 9, to: 13 },
  { title: "Máscaras", by: "Capítulo 1", kind: "Historieta", from: 14, to: 26 },
  { title: "Dinima & The World", by: "Historieta a color", kind: "Historieta", from: 27, to: 39 },
  { title: "Astromelia", by: "El sueño de los despiertos", kind: "Historieta", from: 40, to: 49 },
  { title: "Intermisión 02", by: "“…por el simple gusto de caminar.”", kind: "Intermisión", from: 50, to: 50 },
  { title: "El Cuervo Desgajado", by: "Vito Fortino Blanco", kind: "Cuento", from: 51, to: 57 },
  { title: "El Palacio Sin Tiempo", by: "Juan Cruz Arias Pereyra", kind: "Relato", from: 58, to: 66 },
  { title: "Cierre y Nº 2", by: "Los Monos Sabios cierran el telón, por esta vez", kind: "Cierre", from: 67, to: 70 }
];
const N = PAGES.length;
const $ = id => document.getElementById(id);
const app = $("app"), mq = matchMedia("(max-width: 900px)");
let p = 1, mode = mq.matches ? "single" : "double";
const hashP = parseInt((location.hash.match(/p=(\d+)/) || [])[1], 10);
if (hashP) p = Math.min(N, Math.max(1, hashP));

// Estado del efecto de pase de página (ver bloque PASE DE PÁGINA al final)
let pendingFlip = null, lastVis = null, lastMode = null;

function vis() {
  if (mode === "single") return [p];
  if (p === 1) return [1];
  const l = p % 2 === 0 ? p : p - 1;
  return l + 1 <= N ? [l, l + 1] : [l];
}
function go(n) {
  p = Math.max(1, Math.min(N, n));
  render(true);
  if (mq.matches) app.classList.remove("mob-open");
}
function next() { const v = vis(); pendingFlip = "next"; go(mode === "single" ? p + 1 : v[v.length - 1] + 1); }
function prev() { const v = vis(); pendingFlip = "prev"; go(mode === "single" ? p - 1 : v[0] - 1); }

// índice
SECTIONS.forEach((s, i) => {
  const b = document.createElement("button");
  b.className = "sec";
  b.innerHTML = `<span class="num">${String(s.from).padStart(2, "0")}</span><span><span class="t editorial-heading"><span class="compressed-heading"></span></span><span class="by"></span></span>`;
  b.querySelector(".t .compressed-heading").textContent = s.title;
  b.querySelector(".by").textContent = s.by;
  b.onclick = () => go(s.from);
  s.el = b;
  $("p-indice").appendChild(b);
});
// miniaturas
const thumbs = PAGES.map((src, i) => {
  const b = document.createElement("button");
  b.className = "th";
  b.setAttribute("aria-label", "Ir a la página " + (i + 1));
  b.innerHTML = `<img alt="" loading="lazy"><span>${i + 1}</span>`;
  b.querySelector("img").src = THUMBS[i];
  b.onclick = () => go(i + 1);
  $("grid").appendChild(b);
  return b;
});
$("teaserImg").src = THUMBS[67];
$("teaser").onclick = () => go(68);

function render(anim) {
  if (typeof resetZoom === "function") resetZoom(true);
  const flipDir = pendingFlip; pendingFlip = null;
  const v = vis(), first = v[0], last = v[v.length - 1];
  const book = $("book");
  book.innerHTML = "";
  v.forEach((n, i) => {
    const b = document.createElement("button");
    const isLeft = v.length === 2 && i === 0;
    b.className = "pg";
    b.setAttribute("aria-label", "Página " + n + (isLeft ? ", volver" : ", avanzar"));
    b.innerHTML = `<img alt="Página ${n}" draggable="false">`;
    b.querySelector("img").src = PAGES[n - 1];
    b.onclick = isLeft ? prev : next;
    book.appendChild(b);
  });
  fit();
  const flipped = anim && flipDir && pageTurn(flipDir, lastVis, lastMode, v);
  if (anim && !flipped) { book.classList.remove("flip"); void book.offsetWidth; book.classList.add("flip"); }
  lastVis = v; lastMode = mode;
  let cur = SECTIONS[0];
  SECTIONS.forEach(s => {
    if (first >= s.from && first <= s.to) cur = s;
    s.el.classList.toggle("on", v.some(n => n >= s.from && n <= s.to));
  });
  fitInlineHeadings();
  thumbs.forEach((t, i) => t.classList.toggle("on", v.includes(i + 1)));
  $("counterText").textContent = (v.length === 2 ? `Págs. ${first}-${last}` : `Pág. ${first}`) + ` / ${N}`;
  fitInlineHeadings();
  $("range").max = N; $("range").value = first;
  $("range").style.setProperty("--fill", ((first - 1) / (N - 1) * 100) + "%");
  $("prev").disabled = first <= 1;
  $("next").disabled = last >= N;
  $("mDouble").setAttribute("aria-pressed", mode === "double");
  $("mSingle").setAttribute("aria-pressed", mode === "single");
  history.replaceState(null, "", "#p=" + first);
  // precarga de las páginas siguientes
  [last + 1, last + 2].forEach(n => { if (n <= N) new Image().src = PAGES[n - 1]; });
}

const RATIO = 660 / 933;
function fit() {
  const box = $("stageIn"), k = vis().length;
  const w = box.clientWidth - 12, h = box.clientHeight - 12;
  const ph = Math.max(100, Math.min(h, (w - (k - 1) * 2) / (k * RATIO)));
  document.querySelectorAll(".pg").forEach(el => { el.style.height = ph + "px"; el.style.width = ph * RATIO + "px"; });
}
addEventListener("resize", fit);
$("sb").addEventListener("transitionend", fit);

function setTab(name) {
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t.dataset.tab === name));
  ["indice", "paginas", "nosotros"].forEach(k => $("p-" + k).hidden = k !== name);
}
function openSb(tab) {
  if (tab) setTab(tab);
  if (mq.matches) app.classList.add("mob-open"); else app.classList.remove("closed");
}
document.querySelectorAll(".tab").forEach(t => t.onclick = () => setTab(t.dataset.tab));
$("closeSb").onclick = () => mq.matches ? app.classList.remove("mob-open") : app.classList.add("closed");
$("openSb").onclick = () => openSb();
$("backdrop").onclick = () => app.classList.remove("mob-open");
$("bIndice").onclick = () => openSb("indice");
$("bPaginas").onclick = () => openSb("paginas");
$("prev").onclick = prev;
$("next").onclick = next;
$("mDouble").onclick = () => { mode = "double"; render(true); };
$("mSingle").onclick = () => { mode = "single"; render(true); };
$("range").oninput = e => go(+e.target.value);
document.addEventListener("keydown", e => {
  if (e.target.tagName === "INPUT") return;
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
  if ((e.key === "ArrowUp" || e.key === "ArrowDown") && zoom.z > 1) {
    e.preventDefault();
    panBy(0, e.key === "ArrowUp" ? ZOOM_CONFIG.keyPanStep : -ZOOM_CONFIG.keyPanStep, true);
  }
  if (e.key === "Escape") app.classList.remove("mob-open");
  if ((e.key === "f" || e.key === "F") && !e.ctrlKey && !e.metaKey && !e.altKey && !isTypingTarget(e.target)) {
    e.preventDefault();
    toggleFullscreen();
  }
});
// deslizar con el dedo en el celular
let tx = null, ty = null, tt = 0;
$("stage").addEventListener("touchstart", e => {
  if (e.touches.length !== 1) { tx = null; return; }        // dos dedos: no es un deslizamiento
  tx = e.touches[0].clientX; ty = e.touches[0].clientY; tt = Date.now();
}, { passive: true });
$("stage").addEventListener("touchend", e => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; tx = null;
  const fast = Date.now() - tt < 300;                         // un toque rápido alcanza con menos recorrido
  const horizontal = Math.abs(dx) > Math.abs(dy) * 1.2;
  if (horizontal && Math.abs(dx) > (fast ? 30 : 50) && zoom.z === 1) dx < 0 ? next() : prev();
});
/* =====================================================================
   ZOOM Y DESPLAZAMIENTO DEL VISOR
   viewport  = #stageIn   (overflow: hidden, tamaño fijo del área central)
   capa      = #zoomLayer (translate + scale; el spread completo es una sola superficie)
   ===================================================================== */
const ZOOM_CONFIG = {
  minZoom: 1,                // zoom mínimo (100%)
  maxZoom: 4,                // zoom máximo (400%)
  wheelSensitivity: 0.0015,  // cuánto zoom por unidad de rueda (100 de deltaY ≈ 15%)
  keyPanStep: 100,           // px que mueven ↑ / ↓
  transitionMs: 150          // duración de la transición del zoom
};
const zoom = { z: 1, x: 0, y: 0 };   // estado: escala y desplazamiento en px de pantalla
const viewport = $("stageIn"), layer = $("zoomLayer"), badge = $("zoomBadge");
viewport.style.setProperty("--zoom-ms", ZOOM_CONFIG.transitionMs + "ms");

// Límites del desplazamiento:
// - si la revista ampliada es más grande que el visor, sus bordes no pueden entrar en el visor
//   (se recorre toda la página, pero nunca queda fondo vacío de más);
// - si es más chica en algún eje, puede moverse en ese eje pero sin salirse del visor.
function clampPan() {
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  const w = layer.offsetWidth * zoom.z, h = layer.offsetHeight * zoom.z;
  const mx = Math.abs(w - vw) / 2, my = Math.abs(h - vh) / 2;
  zoom.x = Math.min(mx, Math.max(-mx, zoom.x));
  zoom.y = Math.min(my, Math.max(-my, zoom.y));
}
function applyZoom(animate) {
  if (zoom.z <= ZOOM_CONFIG.minZoom + 0.001) { zoom.z = ZOOM_CONFIG.minZoom; zoom.x = 0; zoom.y = 0; }
  clampPan();
  viewport.classList.toggle("dragging", !animate);
  layer.style.transform = zoom.z === 1 && !zoom.x && !zoom.y ? "" :
    `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.z})`;
  viewport.classList.toggle("zoomed", zoom.z > 1);
  badge.hidden = zoom.z === 1;
  badge.textContent = Math.round(zoom.z * 100) + "%";
}
function resetZoom(instant) {
  zoom.z = 1; zoom.x = 0; zoom.y = 0;
  applyZoom(!instant);
}
// Zoom manteniendo fijo el punto (clientX, clientY) de la pantalla. Reutilizable para pinch.
function zoomAt(clientX, clientY, newZ, animate = true) {
  newZ = Math.min(ZOOM_CONFIG.maxZoom, Math.max(ZOOM_CONFIG.minZoom, newZ));
  const r = viewport.getBoundingClientRect();
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;   // centro de la capa sin transformar
  const dx = (clientX - cx - zoom.x) / zoom.z;                  // punto bajo el cursor, en coords. de la revista
  const dy = (clientY - cy - zoom.y) / zoom.z;
  zoom.x = clientX - cx - newZ * dx;
  zoom.y = clientY - cy - newZ * dy;
  zoom.z = newZ;
  applyZoom(animate);
}
function panBy(dx, dy, animate = false) {
  if (zoom.z === 1) return;
  zoom.x += dx; zoom.y += dy;
  applyZoom(animate);
}

// Rueda: solo dentro del visor (no se bloquea la rueda en el resto de la web)
viewport.addEventListener("wheel", e => {
  e.preventDefault();
  const delta = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;   // líneas → px (Firefox)
  zoomAt(e.clientX, e.clientY, zoom.z * Math.exp(-delta * ZOOM_CONFIG.wheelSensitivity));
}, { passive: false });

// Arrastre con mouse (o lápiz) cuando hay zoom
let drag = null, dragMoved = false;
viewport.addEventListener("pointerdown", e => {
  if (zoom.z === 1 || e.button !== 0 || e.pointerType === "touch") return;
  if (e.target.closest(".zoom-badge")) return;
  e.preventDefault();
  drag = { id: e.pointerId, lx: e.clientX, ly: e.clientY };
  dragMoved = false;
  viewport.setPointerCapture(e.pointerId);
  viewport.classList.add("dragging");
});
viewport.addEventListener("pointermove", e => {
  if (!drag || e.pointerId !== drag.id) return;
  const dx = e.clientX - drag.lx, dy = e.clientY - drag.ly;
  if (Math.abs(dx) + Math.abs(dy) > 0) dragMoved = true;
  drag.lx = e.clientX; drag.ly = e.clientY;
  panBy(dx, dy, false);
});
function endDrag(e) {
  if (!drag || e.pointerId !== drag.id) return;
  drag = null;
  viewport.classList.remove("dragging");
}
viewport.addEventListener("pointerup", endDrag);
viewport.addEventListener("pointercancel", endDrag);

// Con zoom, un clic sobre la página no cambia de página (se usa para arrastrar)
viewport.addEventListener("click", e => {
  if (e.target.closest(".zoom-badge")) return;
  if (zoom.z > 1 || dragMoved) { e.stopPropagation(); e.preventDefault(); dragMoved = false; }
}, true);
badge.addEventListener("click", () => resetZoom(false));

// Si cambia el tamaño de la ventana, recalcular límites
addEventListener("resize", () => applyZoom(false));
$("sb").addEventListener("transitionend", () => applyZoom(false));

/* =====================================================================
   TÍTULOS COMPRIMIDOS EN LÍNEA
   transform no cambia el ancho de layout: se compensa el hueco con margin-right.
   ===================================================================== */
function fitInlineHeadings() {
  const s = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--heading-compress")) || 1;
  document.querySelectorAll(".compressed-heading--inline").forEach(el => {
    el.style.marginRight = (-(1 - s) * el.offsetWidth) + "px";
  });
}
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitInlineHeadings);
addEventListener("resize", fitInlineHeadings);

/* =====================================================================
   PANTALLA COMPLETA
   Se pone en fullscreen solo el visor (#stage: flechas + revista).
   ===================================================================== */
const FULLSCREEN_CONFIG = {
  idleHideMs: 2000,     // ms sin mover el mouse para ocultar controles
  enterGraceMs: 3000    // al entrar, controles visibles al menos este tiempo
};
const stageEl = $("stage"), segGroup = document.querySelector(".seggroup");
const segHome = { parent: segGroup.parentNode, next: segGroup.nextSibling };

// Estado del visor centralizado (lectura); page/mode/zoom siguen viviendo donde ya estaban.
const viewerState = {
  get page() { return p; },
  get displayMode() { return mode; },
  get zoom() { return zoom.z; },
  get panX() { return zoom.x; },
  get panY() { return zoom.y; },
  isFullscreen: false
};

function isTypingTarget(el) {
  return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "SELECT" || el.isContentEditable);
}
function nativeFsElement() { return document.fullscreenElement || document.webkitFullscreenElement || null; }
function enterFullscreen() {
  const req = stageEl.requestFullscreen || stageEl.webkitRequestFullscreen;
  if (req) {
    const r = req.call(stageEl);
    if (r && r.catch) r.catch(() => setFullscreenUI(true));   // si el navegador lo rechaza, modo CSS
  } else {
    setFullscreenUI(true);                                    // p. ej. iPhone: pantalla completa simulada
  }
}
function exitFullscreen() {
  if (nativeFsElement()) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  else setFullscreenUI(false);
}
function toggleFullscreen() { viewerState.isFullscreen ? exitFullscreen() : enterFullscreen(); }

function setFullscreenUI(on) {
  if (viewerState.isFullscreen === on) return;
  viewerState.isFullscreen = on;
  stageEl.classList.toggle("is-fullscreen", on);
  // El selector Una/Doble página se muestra dentro del visor mientras dura la pantalla completa
  if (on) $("fsBar").insertBefore(segGroup, $("fsExit"));
  else segHome.parent.insertBefore(segGroup, segHome.next);
  resetZoom(true);                       // comportamiento predecible: 100% y centrado
  requestAnimationFrame(() => { fit(); applyZoom(false); fitInlineHeadings(); });
  if (on) wakeControls(FULLSCREEN_CONFIG.enterGraceMs); else { clearTimeout(idleTimer); stageEl.classList.remove("fs-idle"); }
}
function onFsChange() { setFullscreenUI(nativeFsElement() === stageEl); }
document.addEventListener("fullscreenchange", onFsChange);
document.addEventListener("webkitfullscreenchange", onFsChange);

$("fsBtn").onclick = enterFullscreen;
$("fsExit").onclick = exitFullscreen;
// Escape para el modo simulado (en el nativo lo maneja el navegador)
document.addEventListener("keydown", e => { if (e.key === "Escape" && viewerState.isFullscreen && !nativeFsElement()) setFullscreenUI(false); });

// Auto-ocultar controles en pantalla completa
let idleTimer = null;
function wakeControls(delay = FULLSCREEN_CONFIG.idleHideMs) {
  if (!viewerState.isFullscreen) return;
  stageEl.classList.remove("fs-idle");
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    const overControl = stageEl.querySelector(".arrow:hover, .fs-bar:hover, .zoom-badge:hover");
    if (drag || overControl) return wakeControls();          // no ocultar durante drag o sobre un control
    stageEl.classList.add("fs-idle");
  }, delay);
}
["pointermove", "pointerdown", "wheel", "touchstart"].forEach(ev => stageEl.addEventListener(ev, () => wakeControls(), { passive: true }));
document.addEventListener("keydown", () => wakeControls());

render(false);

/* =====================================================================
   PASE DE PÁGINA (efecto flipbook)
   Solo al avanzar/retroceder de a una página o spread (flechas, teclado, clic, deslizar).
   Saltos desde el índice, la barra o miniaturas usan el fundido de siempre.
   Usa únicamente transform/opacity sobre 2 o 3 capas temporales, que se borran al terminar.
   ===================================================================== */
const FLIP_CONFIG = {
  durationMs: 650,     // duración del giro de la hoja
  easing: "cubic-bezier(.45,.05,.25,1)"
};
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
let flipCleanup = null;

function pageTurn(dir, oldV, oldMode, newV) {
  if (flipCleanup) flipCleanup();                       // si había un giro en curso, se termina ya
  if (reduceMotion.matches || !oldV || oldMode !== mode || oldV.length !== newV.length) return false;
  const adjacent = dir === "next" ? newV[0] === oldV[oldV.length - 1] + 1 : newV[newV.length - 1] === oldV[0] - 1;
  if (!adjacent) return false;

  const pg = $("book").querySelector(".pg");
  const pw = pg.offsetWidth, ph = pg.offsetHeight;
  const layer = document.createElement("div");
  layer.className = "flip-layer";
  const face = (n, cls) => `<div class="flip-face ${cls}"><img src="${PAGES[n - 1]}" alt="" draggable="false"></div>`;
  const box = (left) => `left:${left}px;width:${pw}px;height:${ph}px`;
  let leafHTML, keyframes;

  if (newV.length === 2) {
    // Doble página: gira la hoja sobre el lomo; del otro lado queda la página vieja hasta que la tapa la hoja
    const [oL, oR] = oldV, [nL, nR] = newV;
    if (dir === "next") {
      layer.innerHTML = `<div class="flip-static" style="${box(0)}">${face(oL, "")}</div>` +
        `<div class="flip-leaf" style="${box(pw + 2)};transform-origin:-1px 50%">${face(oR, "flip-front")}${face(nL, "flip-back")}</div>`;
      keyframes = [{ transform: "rotateY(0deg)" }, { transform: "rotateY(-180deg)" }];
    } else {
      layer.innerHTML = `<div class="flip-static" style="${box(pw + 2)}">${face(oR, "")}</div>` +
        `<div class="flip-leaf" style="${box(0)};transform-origin:calc(100% + 1px) 50%">${face(oL, "flip-front")}${face(nR, "flip-back")}</div>`;
      keyframes = [{ transform: "rotateY(0deg)" }, { transform: "rotateY(180deg)" }];
    }
  } else {
    // Una página: la hoja vieja se levanta desde el borde izquierdo (avanzar) o la nueva baja sobre la vieja (retroceder)
    const o = oldV[0], n = newV[0];
    if (dir === "next") {
      layer.innerHTML = `<div class="flip-leaf" style="${box(0)};transform-origin:0 50%">${face(o, "flip-front")}</div>`;
      keyframes = [{ transform: "rotateY(0deg)", opacity: 1 }, { transform: "rotateY(-95deg)", opacity: 1, offset: .9 }, { transform: "rotateY(-100deg)", opacity: 0 }];
    } else {
      layer.innerHTML = `<div class="flip-static" style="${box(0)}">${face(o, "")}</div>` +
        `<div class="flip-leaf" style="${box(0)};transform-origin:0 50%">${face(n, "flip-front")}</div>`;
      keyframes = [{ transform: "rotateY(-100deg)", opacity: 0 }, { transform: "rotateY(-95deg)", opacity: 1, offset: .1 }, { transform: "rotateY(0deg)", opacity: 1 }];
    }
  }

  $("zoomLayer").appendChild(layer);
  const leaf = layer.querySelector(".flip-leaf");
  const opts = { duration: FLIP_CONFIG.durationMs, easing: FLIP_CONFIG.easing, fill: "forwards" };
  const anim = leaf.animate(keyframes, opts);
  const shades = [...layer.querySelectorAll(".flip-leaf .flip-face")].map(f =>
    f.animate([{ "--flip-shade": 0 }, { "--flip-shade": 1, offset: .5 }, { "--flip-shade": 0 }], opts));
  let done = false;
  flipCleanup = () => {
    if (done) return; done = true;
    anim.cancel(); shades.forEach(a => a.cancel());
    layer.remove(); flipCleanup = null;
  };
  anim.onfinish = flipCleanup;
  return true;
}
