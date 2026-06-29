/* ===========================
   VAU-5 Alegaciones · App
   =========================== */

(function () {
  "use strict";

  /* ---------- Render helpers ---------- */

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => {
      if (k === "className") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else node.setAttribute(k, v);
    });
    children.forEach(c => c && node.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
    return node;
  }

  function div(cls, ...children) { return el("div", { className: cls }, ...children); }

  function panelHeader(label, title, summary) {
    return div("panel-header",
      el("p", { className: "panel-label" }, label),
      el("h2", { className: "panel-title" }, title),
      div("panel-summary", el("span", { html: summary }))
    );
  }

  function section(titulo, texto) {
    return div("section",
      el("h3", { className: "section-title" }, titulo),
      el("p", { className: "section-body", html: texto })
    );
  }

  /* ---------- Panel builders ---------- */

  function buildResumen() {
    const panel = div("panel is-active");
    panel.id = "panel-0";

    const args = div("arg-list");
    RESUMEN.argumentos.forEach(a => {
      args.appendChild(
        div("arg-card",
          el("span", { className: "arg-num" }, a.num),
          div("arg-content",
            el("p", { className: "arg-label" }, a.label),
            el("p", { className: "arg-text" }, a.texto)
          )
        )
      );
    });

    const salvedadBox = div("salvedad",
      div("salvedad-title",
        el("span", { html: "✓ " + SALVEDAD.titulo })
      ),
      el("p", { className: "salvedad-body" }, SALVEDAD.texto)
    );

    panel.appendChild(panelHeader("Alegaciones ciudadanas · VAU-5 · Granada", RESUMEN.titulo, RESUMEN.intro));
    const body = div("panel-body");
    const sec = div("section");
    sec.appendChild(el("h3", { className: "section-title" }, "Los ocho argumentos en síntesis"));
    sec.appendChild(args);
    body.appendChild(sec);
    body.appendChild(salvedadBox);
    panel.appendChild(body);
    return panel;
  }

  function buildAlegacion(data, index) {
    const panel = div("panel");
    panel.id = "panel-" + index;

    panel.appendChild(panelHeader(data.num, data.titulo, data.resumen));

    const body = div("panel-body");

    if (data.secciones) {
      data.secciones.forEach(s => {
        if (s.tipo === "alternativas") {
          const sec = div("section");
          sec.appendChild(el("h3", { className: "section-title" }, s.titulo));
          const grid = div("alt-grid");
          s.items.forEach(item => {
            grid.appendChild(
              div("alt-card",
                el("span", { className: "alt-icon" }, item.icono),
                el("p", { className: "alt-title" }, item.titulo),
                el("p", { className: "alt-desc", html: item.desc })
              )
            );
          });
          sec.appendChild(grid);
          body.appendChild(sec);
        } else {
          body.appendChild(section(s.titulo, s.texto));
        }
      });
    }

    panel.appendChild(body);
    return panel;
  }

  function buildPeticion() {
    const panel = div("panel");
    panel.id = "panel-" + (ALEGACIONES.length + 1);

    panel.appendChild(panelHeader(PETICION.num, PETICION.titulo, PETICION.resumen));

    const body = div("panel-body");

    body.appendChild(el("p", { className: "panel-intro", html: PETICION.intro }));

    const sec = div("section");
    sec.appendChild(el("h3", { className: "section-title" }, "Petición formal al órgano competente"));

    const list = div("petition-list");
    PETICION.peticiones.forEach(p => {
      list.appendChild(
        div("petition-item",
          div("petition-num", p.num),
          div("petition-content",
            el("p", { className: "petition-title" }, p.titulo),
            el("p", { className: "petition-text" }, p.texto)
          )
        )
      );
    });
    sec.appendChild(list);
    body.appendChild(sec);

    body.appendChild(
      div("salvedad",
        div("salvedad-title", el("span", { html: "✓ Salvedad expresa: el bypass de Las Gabias" })),
        el("p", { className: "salvedad-body" }, SALVEDAD.texto)
      )
    );

    panel.appendChild(body);
    return panel;
  }

  /* ---------- Header ---------- */

  function buildHeader(tabs) {
    const header = el("header", { className: "site-header" });
    const inner = div("header-inner");

    const meta = div("header-meta");
    const text = div("header-text");

    const badge = div("badge-alert");
    badge.innerHTML = `<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4.5zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg> ${SITE.badge}`;

    text.appendChild(badge);
    text.appendChild(el("h1", { className: "site-title" }, SITE.title));
    text.appendChild(el("p", { className: "site-subtitle", html: SITE.subtitle + "<br>" + SITE.description }));
    meta.appendChild(text);
    inner.appendChild(meta);

    const nav = el("nav", { className: "tabs-nav", "aria-label": "Alegaciones" });
    tabs.forEach((t, i) => {
      const btn = el("button", { className: "tab-btn" + (i === 0 ? " is-active" : ""), type: "button" }, t);
      btn.dataset.index = i;
      nav.appendChild(btn);
    });
    inner.appendChild(nav);
    header.appendChild(inner);
    return header;
  }

  /* ---------- Footer ---------- */

  function buildFooter() {
    const footer = el("footer", { className: "site-footer" });
    const inner = div("footer-inner");
    inner.appendChild(el("span", { className: "footer-text" }, SITE.footer));
    inner.appendChild(el("span", { className: "footer-text" }, SITE.footerNote));
    footer.appendChild(inner);
    return footer;
  }

  /* ---------- Tab switching ---------- */

  function initTabs(header, main) {
    const buttons = header.querySelectorAll(".tab-btn");
    const panels = main.querySelectorAll(".panel");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.index, 10);
        buttons.forEach(b => b.classList.remove("is-active"));
        panels.forEach(p => p.classList.remove("is-active"));
        btn.classList.add("is-active");
        const target = main.querySelector("#panel-" + idx);
        if (target) target.classList.add("is-active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  /* ---------- Bootstrap ---------- */

  function boot() {
    const tabLabels = [RESUMEN.tab, ...ALEGACIONES.map(a => a.tab), PETICION.tab];

    const header = buildHeader(tabLabels);
    const main = el("main");

    main.appendChild(buildResumen());
    ALEGACIONES.forEach((a, i) => main.appendChild(buildAlegacion(a, i + 1)));
    main.appendChild(buildPeticion());

    const footer = buildFooter();

    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);

    initTabs(header, main);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
