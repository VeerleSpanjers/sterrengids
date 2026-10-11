/* Sterrengids: navigatie, overzichtspagina's, accordeons en grafieken */
(function () {
  "use strict";

  const SECTIONS = [
    { key: "algemeen", title: "Algemene informatie" },
    { key: "geschiedenis", title: "Geschiedenis" },
    { key: "samenstelling", title: "Samenstelling" },
    { key: "toekomst", title: "Toekomst" }
  ];

  /* Volgorde van de tegels in het hoofdmenu */
  const TOP = ["melkweg", "zonnestelsel", "planeten", "sterrenstelsels", "zwarte-gaten-en-nevels", "sterren-zon-en-kometen"];

  const ICON = {
    chevron: '<svg class="acc-chev" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    left: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
    right: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const nl = (n, d = 0) => Number(n).toLocaleString("nl-NL", { maximumFractionDigits: d });
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
  const sup = (n) => String(n).split("").map((c) => SUP[c] || c).join("");
  const sci = (v) => {
    if (!v) return "0";
    const e = Math.floor(Math.log10(Math.abs(v)));
    const m = Math.round((v / Math.pow(10, e)) * 10) / 10;
    return (m === 1 ? "10" : nl(m, 1) + "×10") + sup(e);
  };

  const itemById = new Map(PLANETS.map((p) => [p.id, p]));
  const hubById = new Map(HUBS.map((h) => [h.id, h]));
  const entity = (id) => itemById.get(id) || hubById.get(id);
  const topOf = (e) => (hubById.has(e.id) ? e.id : (e.group || e.id));

  let charts = [];
  let gid = 0;

  /* ---------- Visuals ---------- */
  function galaxy(size, variant) {
    const uid = ++gid;
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const defs = `
      <radialGradient id="gCore${uid}"><stop offset="0" stop-color="#fffbe6"/><stop offset=".22" stop-color="#ffd98f"/><stop offset=".6" stop-color="#ff9d4d" stop-opacity=".35"/><stop offset="1" stop-color="#ff9d4d" stop-opacity="0"/></radialGradient>
      <radialGradient id="gHalo${uid}"><stop offset="0" stop-color="#5b7cff" stop-opacity=".5"/><stop offset="1" stop-color="#5b7cff" stop-opacity="0"/></radialGradient>
      <radialGradient id="gEll${uid}"><stop offset="0" stop-color="#fff4da"/><stop offset=".3" stop-color="#ffc986" stop-opacity=".85"/><stop offset=".7" stop-color="#c98a45" stop-opacity=".3"/><stop offset="1" stop-color="#c98a45" stop-opacity="0"/></radialGradient>
      <linearGradient id="gArm${uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a9bdff"/><stop offset="1" stop-color="#5f7df0"/></linearGradient>
      <filter id="gBlur${uid}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.4"/></filter>`;
    const dot = (cx, cy) => `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${(0.35 + rnd() * 0.8).toFixed(2)}" fill="#fff" opacity="${(0.5 + rnd() * 0.5).toFixed(2)}"/>`;
    let body = "";

    if (variant === "elliptical") {
      let dots = "";
      for (let n = 0; n < 40; n++) { const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 36; dots += dot(50 + r * Math.cos(a), 50 + r * Math.sin(a)); }
      body = `<g transform="rotate(-20 50 50) translate(0 50) scale(1 .72) translate(0 -50)"><circle cx="50" cy="50" r="46" fill="url(#gEll${uid})"/>${dots}</g>`;
    } else if (variant === "irregular") {
      const blobs = [[36, 42, 15, "#8fb0ff"], [60, 36, 11, "#ffcfa0"], [50, 60, 17, "#9fb8ff"], [70, 62, 9, "#ffe0b8"], [27, 63, 9, "#b9c8ff"], [47, 40, 8, "#fff0d8"]];
      let dots = "";
      for (let n = 0; n < 60; n++) { const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 36; dots += dot(50 + r * Math.cos(a), 50 + r * Math.sin(a)); }
      body = `<g transform="rotate(-14 50 50)">${blobs.map(([x, y, r, c]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}" opacity=".55" filter="url(#gBlur${uid})"/>`).join("")}${dots}</g>`;
    } else {
      const V = { spiral: { rot: -24, sy: 0.62, arms: 4, wind: 3.4, n: 46 }, andromeda: { rot: -38, sy: 0.36, arms: 2, wind: 3.0, n: 64 }, face: { rot: 0, sy: 1, arms: 2, wind: 3.8, n: 56 } }[variant] || { rot: -24, sy: 0.62, arms: 4, wind: 3.4, n: 46 };
      let arms = "";
      for (let k = 0; k < V.arms; k++) {
        const base = (k * 2 * Math.PI) / V.arms;
        let line = "", dots = "";
        for (let t = 0; t <= 1.001; t += 0.02) {
          const th = base + t * V.wind, r = 7 + t * 40;
          line += (t === 0 ? "M" : "L") + (50 + r * Math.cos(th)).toFixed(1) + " " + (50 + r * Math.sin(th)).toFixed(1) + " ";
        }
        for (let n = 0; n < V.n; n++) {
          const t = rnd(), th = base + t * V.wind + (rnd() - 0.5) * 0.55, r = 7 + t * 40 + (rnd() - 0.5) * 6;
          dots += dot(50 + r * Math.cos(th), 50 + r * Math.sin(th));
        }
        arms += `<path d="${line}" fill="none" stroke="url(#gArm${uid})" stroke-width="6" stroke-linecap="round" opacity=".55" filter="url(#gBlur${uid})"/>${dots}`;
      }
      body = `<g transform="rotate(${V.rot} 50 50) translate(0 50) scale(1 ${V.sy}) translate(0 -50)"><circle cx="50" cy="50" r="50" fill="url(#gHalo${uid})"/>${arms}<circle cx="50" cy="50" r="17" fill="url(#gCore${uid})"/></g>`;
    }
    return `<span class="orb orb--galaxy" style="--s:${size}px" aria-hidden="true"><svg viewBox="0 0 100 100" width="100%" height="100%" style="overflow:visible"><defs>${defs}</defs>${body}</svg></span>`;
  }

  function planetOrb(id, size) {
    if (id === "melkweg") return galaxy(size, "spiral");
    return `<span class="orb orb--${id}" style="--s:${size}px" aria-hidden="true"><i class="orb-ring back"></i><i class="orb-body"></i><i class="orb-ring front"></i></span>`;
  }

  function orbFor(e, size) {
    const v = e.visual;
    if (!v) return planetOrb(e.id, size);
    switch (v.kind) {
      case "orb": return planetOrb(v.id, size);
      case "galaxy": return galaxy(size, v.variant);
      default:
        return `<span class="orb orb--${v.kind}" style="--s:${size}px" aria-hidden="true"><i class="orb-ring back"></i><i class="orb-body"></i><i class="orb-ring front"></i></span>`;
    }
  }

  /* Formaten per type object: [tegel, kaart, hero] */
  const SIZES = {
    galaxy: [54, 84, 290],
    blackhole: [28, 38, 118],
    saturnus: [30, 40, 126],
    uranus: [38, 52, 150],
    comet: [44, 62, 200],
    nebula: [50, 72, 220],
    burst: [50, 72, 220],
    pulsar: [50, 72, 220],
    default: [40, 60, 180]
  };
  const kindOf = (e) => (e.id === "melkweg" ? "galaxy" : e.id === "saturnus" || e.id === "uranus" ? e.id : (e.visual && e.visual.kind !== "orb" ? e.visual.kind : "default"));
  const sizeFor = (e, ctx) => (SIZES[kindOf(e)] || SIZES.default)[ctx];
  const tileSize = (e) => sizeFor(e, 0);
  const cardSize = (e) => sizeFor(e, 1);
  const heroSize = (e) => sizeFor(e, 2);

  /* ---------- Menu tiles ---------- */
  function renderTiles() {
    $("#tiles").innerHTML = TOP.map((id) => {
      const e = entity(id);
      return `
      <li><a class="tile" href="#${e.id}" data-id="${e.id}">
        <span class="tile-orb">${orbFor(e, tileSize(e))}</span>
        <span class="tile-name">${esc(e.short)}</span>
        <span class="tile-sub">${esc(e.sub)}</span>
      </a></li>`;
    }).join("");
    $("#q-list").innerHTML = [...HUBS, ...PLANETS].map((e) => `<option value="${esc(e.short)}">`).join("");
  }

  function markActive(id) {
    $$(".tile").forEach((a) => {
      if (a.dataset.id === id) {
        a.setAttribute("aria-current", "page");
        const bar = $(".tiles");
        if (bar.scrollWidth > bar.clientWidth) {
          const li = a.parentElement;
          bar.scrollTo({ left: li.offsetLeft - bar.clientWidth / 2 + li.offsetWidth / 2, behavior: "smooth" });
        }
      } else a.removeAttribute("aria-current");
    });
  }

  /* ---------- Pager ---------- */
  function pagerFor(e) {
    let prev = null, next = null;
    const hub = e.group ? hubById.get(e.group) : null;
    if (hub) {
      const i = hub.items.indexOf(e.id);
      prev = i > 0 ? entity(hub.items[i - 1]) : hub;
      next = i < hub.items.length - 1 ? entity(hub.items[i + 1]) : hub;
      const pl = i > 0 ? "Vorige" : "Terug naar overzicht";
      const nl_ = i < hub.items.length - 1 ? "Volgende" : "Terug naar overzicht";
      return pagerHTML(prev, pl, next, nl_);
    }
    const i = TOP.indexOf(e.id);
    if (i === -1) return "";
    prev = i > 0 ? entity(TOP[i - 1]) : null;
    next = i < TOP.length - 1 ? entity(TOP[i + 1]) : null;
    return pagerHTML(prev, "Vorige", next, "Volgende");
  }

  function pagerHTML(prev, prevLabel, next, nextLabel) {
    return `<div class="pager">
      ${prev ? `<a class="prev" href="#${prev.id}">${ICON.left}<span><small>${prevLabel}</small><strong>${esc(prev.name)}</strong></span></a>` : "<span></span>"}
      ${next ? `<a class="next" href="#${next.id}"><span><small>${nextLabel}</small><strong>${esc(next.name)}</strong></span>${ICON.right}</a>` : ""}
    </div>`;
  }

  /* ---------- Hub page ---------- */
  function renderHub(h) {
    const items = h.items.map(entity);
    const cards = items.map((it) => {
      const idx = it.cardSpecs || h.cardSpecs || [0, 1, 2];
      const specs = idx.map((i) => it.specs[i]).filter(Boolean);
      return `
      <li><a class="card" href="#${it.id}">
        <span class="card-orb">${orbFor(it, cardSize(it))}</span>
        <span class="card-body">
          <span class="card-title">${esc(it.name)}</span>
          <span class="card-sub">${esc(it.sub)}</span>
          <span class="card-lead">${esc(it.lead)}</span>
          <dl class="card-specs">${specs.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        </span>
        <span class="card-go">${ICON.right}</span>
      </a></li>`;
    }).join("");

    const compare = h.compare ? `
      <div class="section-head"><h2>Vergelijk de planeten</h2></div>
      <div class="table-wrap">
        <table class="compare">
          <thead><tr>${COMPARE_HEAD.map((c) => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead>
          <tbody>${COMPARE_ROWS.map((r) => `<tr>${r.map((c, i) => i === 0
            ? `<th scope="row"><a href="#${c.toLowerCase()}">${esc(c)}</a></th>`
            : `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
      <figure class="chart-card wide">
        <figcaption>Vergelijk de planeten op één eigenschap</figcaption>
        <div class="seg" role="group" aria-label="Kies een eigenschap">
          ${COMPARE_METRICS.map((m, i) => `<button type="button" class="seg-btn${i === 0 ? " on" : ""}" data-m="${m.key}" aria-pressed="${i === 0}">${esc(m.label)}</button>`).join("")}
        </div>
        <div class="chart-box tall"><canvas role="img" aria-label="Vergelijking van de planeten"></canvas></div>
        <p class="chart-note">Bron: NASA Planetary Fact Sheet. Bij de reuzenplaneten is de temperatuur gemeten bij 1 bar luchtdruk.</p>
      </figure>` : "";

    $("#content").innerHTML = `
      <p class="crumbs"><a href="#melkweg">Start</a> &nbsp;/&nbsp; ${esc(h.name)}</p>
      <article class="hero">
        <div class="hero-visual">
          <span class="hero-tag">${esc(h.tag)}</span>
          ${orbFor(h, heroSize(h))}
        </div>
        <div class="hero-body">
          <h1>${esc(h.name)}</h1>
          <p class="hero-lead">${esc(h.lead)}</p>
          <div class="badges"><span class="badge">${items.length} onderwerpen</span></div>
          ${h.intro.map((t) => `<p class="hero-text">${esc(t)}</p>`).join("")}
        </div>
      </article>

      <div class="section-head"><h2>Kies een onderwerp</h2></div>
      <ul class="cards">${cards}</ul>

      ${compare}

      <aside class="know"><span class="know-label">Wist je dat</span><p>${esc(h.know)}</p></aside>
      ${pagerFor(h)}`;

    document.title = `${h.name} – Sterrengids`;
    markActive(h.id);

    if (h.compare) setupCompare();
  }

  function setupCompare() {
    const fig = $(".chart-card.wide");
    const canvas = $("canvas", fig);
    const names = PLANET_NAMES;
    let chart = null;

    function draw(key) {
      const m = COMPARE_METRICS.find((x) => x.key === key);
      if (chart) { chart.destroy(); charts = charts.filter((c) => c !== chart); }
      if (!window.Chart) {
        $(".chart-box", fig).innerHTML = '<div class="chart-fail">De grafiek kon niet worden geladen. Controleer je internetverbinding en laad de pagina opnieuw.</div>';
        return;
      }
      chart = barChart(canvas, { labels: names, values: m.values, unit: m.unit, axis: m.axis, highlight: -1 }, baseOptions());
      charts.push(chart);
    }
    $$(".seg-btn", fig).forEach((b) => b.addEventListener("click", () => {
      $$(".seg-btn", fig).forEach((x) => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", String(x === b)); });
      draw(b.dataset.m);
    }));
    draw(COMPARE_METRICS[0].key);
  }

  /* ---------- Item page ---------- */
  function renderItem(p) {
    const hub = p.group ? hubById.get(p.group) : null;

    const accordions = SECTIONS.map((s, n) => {
      const sec = p.sections[s.key];
      return `
      <section class="acc" data-key="${s.key}">
        <h3>
          <button class="acc-btn" type="button" aria-expanded="false" aria-controls="panel-${s.key}" id="btn-${s.key}">
            <span class="acc-num" aria-hidden="true">${n + 1}</span>
            <span class="acc-title">${s.title}<small>${esc(sec.summary)}</small></span>
            ${ICON.chevron}
          </button>
        </h3>
        <div class="acc-panel" id="panel-${s.key}" role="region" aria-labelledby="btn-${s.key}">
          <div class="acc-inner">
            <div class="acc-grid">
              <div class="acc-text">
                ${sec.text.map((t) => `<p>${esc(t)}</p>`).join("")}
                ${sec.facts ? `<ul class="facts">${sec.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
              </div>
              <figure class="chart-card" data-chart="${s.key}"></figure>
            </div>
          </div>
        </div>
      </section>`;
    }).join("");

    const sibs = hub ? `
      <nav class="sibs" aria-label="Meer in ${esc(hub.name)}">
        <a class="sib sib-all" href="#${hub.id}">Alle ${esc(hub.short.toLowerCase())}</a>
        ${hub.items.map((id) => {
          const it = entity(id);
          return `<a class="sib${it.id === p.id ? " on" : ""}" href="#${it.id}"${it.id === p.id ? ' aria-current="page"' : ""}>${esc(it.short)}</a>`;
        }).join("")}
      </nav>` : "";

    const title = p.id === "melkweg" ? "de Melkweg" : p.id === "zonnestelsel" ? "het Zonnestelsel" : (p.short || p.name);

    $("#content").innerHTML = `
      <p class="crumbs"><a href="#melkweg">Start</a> &nbsp;/&nbsp; ${hub ? `<a href="#${hub.id}">${esc(hub.name)}</a> &nbsp;/&nbsp; ` : ""}${esc(p.name)}</p>
      ${sibs}
      <article class="hero">
        <div class="hero-visual">
          <span class="hero-tag">${esc(p.tag)}</span>
          ${orbFor(p, heroSize(p))}
        </div>
        <div class="hero-body">
          <h1>${esc(p.name)}</h1>
          <p class="hero-lead">${esc(p.lead)}</p>
          <div class="badges">${p.badges.map((b) => `<span class="badge">${esc(b)}</span>`).join("")}</div>
          <div class="specs">
            <h2 class="specs-title">Kerngegevens</h2>
            <dl>${p.specs.map(([k, v]) => `<div class="spec"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
          </div>
        </div>
      </article>

      <div class="section-head">
        <h2>Alles over ${esc(title)}</h2>
        <button type="button" id="toggle-all">Alles openklappen</button>
      </div>
      <div class="accs">${accordions}</div>

      <aside class="know"><span class="know-label">Wist je dat</span><p>${esc(p.know)}</p></aside>
      ${pagerFor(p)}`;

    document.title = `${p.name} – Sterrengids`;
    markActive(topOf(p));

    const accs = $$(".acc");
    accs.forEach((acc) => {
      $(".acc-btn", acc).addEventListener("click", () => setOpen(acc, !acc.classList.contains("open"), p));
    });
    $("#toggle-all").addEventListener("click", () => {
      const open = accs.some((a) => !a.classList.contains("open"));
      accs.forEach((a) => setOpen(a, open, p));
    });
    setOpen(accs[0], true, p);
  }

  function setOpen(acc, open, p) {
    acc.classList.toggle("open", open);
    $(".acc-btn", acc).setAttribute("aria-expanded", String(open));
    const fig = $(".chart-card", acc);
    if (open && !fig.dataset.ready) {
      fig.dataset.ready = "1";
      buildChart(fig, p, acc.dataset.key);
    }
    const btn = $("#toggle-all");
    if (btn) btn.textContent = $$(".acc").every((a) => a.classList.contains("open")) ? "Alles dichtklappen" : "Alles openklappen";
  }

  /* ---------- Charts ---------- */
  function baseOptions() {
    return {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 700 },
      font: { family: "Figtree, system-ui, sans-serif", size: 13 }
    };
  }

  function buildChart(fig, p, key) {
    const sec = p.sections[key];
    const cfg = sec.chart || { type: "timeline", title: sec.chartTitle, events: sec.events };

    if (cfg.type === "timeline") return buildTimeline(fig, cfg);

    fig.innerHTML = `
      <figcaption>${esc(cfg.title)}</figcaption>
      <div class="chart-box"><canvas role="img" aria-label="${esc(cfg.title)}"></canvas></div>
      <p class="chart-note">${esc(cfg.note || "")}</p>`;

    if (!window.Chart) {
      $(".chart-box", fig).innerHTML = '<div class="chart-fail">De grafiek kon niet worden geladen. Controleer je internetverbinding en laad de pagina opnieuw.</div>';
      return;
    }
    const canvas = $("canvas", fig);
    const base = baseOptions();
    let chart;
    if (cfg.type === "bar") chart = barChart(canvas, cfg, base);
    else if (cfg.type === "doughnut") chart = doughnutChart(canvas, cfg, base);
    else if (cfg.type === "flux") chart = fluxChart(canvas, cfg, base);
    if (chart) charts.push(chart);
  }

  const gridColor = () => "#e4e8f1";

  function barChart(canvas, cfg, base) {
    const blue = css("--blue"), pale = "#c3d0f4", ink = css("--ink");
    const colorOf = (i) => (cfg.highlight === i ? blue : (cfg.colors ? cfg.colors[i] : pale));
    const fmt = (v) => (cfg.sci ? sci(v) : nl(v, Math.abs(v) < 10 ? 2 : 0));
    const valueLabels = {
      id: "valueLabels",
      afterDatasetsDraw(chart) {
        const { ctx, chartArea } = chart;
        const meta = chart.getDatasetMeta(0);
        ctx.save();
        ctx.font = "700 12px Figtree, system-ui, sans-serif";
        ctx.textBaseline = "middle";
        meta.data.forEach((bar, idx) => {
          const v = cfg.values[idx];
          const text = fmt(v);
          const w = ctx.measureText(text).width;
          const on = cfg.highlight === idx;
          let fits, align, x;
          if (v >= 0) {
            fits = bar.x + w + 12 < chartArea.right;
            align = fits ? "left" : "right"; x = fits ? bar.x + 6 : bar.x - 6;
          } else {
            fits = bar.x - w - 12 > chartArea.left;
            align = fits ? "right" : "left"; x = fits ? bar.x - 6 : bar.x + 6;
          }
          ctx.textAlign = align;
          ctx.fillStyle = fits || !on ? ink : "#fff";
          ctx.fillText(text, x, bar.y);
        });
        ctx.restore();
      }
    };
    const isPow10 = (v) => { const l = Math.log10(v); return Math.abs(l - Math.round(l)) < 1e-9; };
    return new Chart(canvas, {
      type: "bar",
      data: {
        labels: cfg.labels,
        datasets: [{
          data: cfg.values,
          backgroundColor: cfg.values.map((_, i) => colorOf(i)),
          borderRadius: 4,
          maxBarThickness: 26
        }]
      },
      options: {
        ...base,
        indexAxis: "y",
        layout: { padding: { right: 8 } },
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (c) => ` ${fmt(c.parsed.x)} ${cfg.unit}` } }
        },
        scales: {
          x: {
            type: cfg.log ? "logarithmic" : "linear",
            min: cfg.min,
            grid: { color: gridColor() },
            afterBuildTicks: cfg.log ? (axis) => { axis.ticks = axis.ticks.filter((t) => isPow10(t.value)); } : undefined,
            ticks: {
              maxTicksLimit: 8,
              maxRotation: 0,
              color: css("--muted"),
              callback: (v) => {
                if (cfg.log) {
                  if (!isPow10(v)) return "";
                  const n = Math.round(Math.log10(v));
                  return n === 0 ? "1" : "10" + sup(n);
                }
                return nl(v);
              }
            },
            title: { display: true, text: cfg.axis, color: css("--muted") }
          },
          y: { grid: { display: false }, ticks: { color: ink } }
        }
      },
      plugins: [valueLabels]
    });
  }

  function doughnutChart(canvas, cfg, base) {
    const palette = ["#0a3fd6", "#ff7a1a", "#6f93f5", "#f7b27a", "#b9c8f2", "#8a96b3"];
    const total = cfg.values.reduce((a, b) => a + b, 0);
    const pct = (v) => { const p = v / total * 100; return nl(p, p < 10 ? (p < 1 ? 2 : 1) : 0); };
    return new Chart(canvas, {
      type: "doughnut",
      data: {
        labels: cfg.labels.map((l, i) => `${l} (${pct(cfg.values[i])}%)`),
        datasets: [{ data: cfg.values, backgroundColor: palette, borderColor: "#fff", borderWidth: 3, hoverOffset: 6 }]
      },
      options: {
        ...base,
        cutout: "58%",
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 12, boxHeight: 12, padding: 12, color: css("--ink") } },
          tooltip: { callbacks: { label: (c) => ` ${pct(c.parsed)}%` } }
        }
      }
    });
  }

  /* Eenvoudig model (Gough, 1981): L(t) = L0 / (1 + 2/5 * (1 - t/t0)), t0 = 4,57 miljard jaar.
     Voor t = t0 + d (d = jaren vanaf nu) wordt dat L = L0 / (1 - 0,4 * d / 4,57). */
  const lum = (d) => 1 / (1 - 0.4 * d / 4.57);

  function fluxChart(canvas, cfg, base) {
    const steps = [0, 0.5, 1, 1.5, 2, 2.5, 3];
    const labels = steps.map((d) => (d === 0 ? "Nu" : `+${nl(d, 1)} mld jaar`));
    const relative = cfg.au == null;
    const S0 = 1361;
    const values = steps.map((d) => relative ? Math.round(lum(d) * 1000) / 10 : S0 / (cfg.au * cfg.au) * lum(d));
    const blue = css("--blue");
    const datasets = [{
      label: relative ? "Helderheid Zon" : "Zonnestraling op deze planeet",
      data: values, borderColor: blue, backgroundColor: "rgba(10,63,214,.12)", fill: true,
      tension: 0.3, pointRadius: 4, pointBackgroundColor: "#fff", pointBorderColor: blue, pointBorderWidth: 2, borderWidth: 3
    }];
    if (!relative && cfg.au < 2 && cfg.au !== 1) {
      datasets.push({
        label: "Aarde nu (1.361 W/m²)", data: steps.map(() => S0),
        borderColor: css("--orange"), borderDash: [6, 5], pointRadius: 0, borderWidth: 2, fill: false
      });
    }
    const unit = relative ? "%" : "W/m²";
    return new Chart(canvas, {
      type: "line",
      data: { labels, datasets },
      options: {
        ...base,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { display: datasets.length > 1, position: "bottom", labels: { boxWidth: 14, color: css("--ink") } },
          tooltip: { callbacks: { label: (c) => ` ${c.dataset.label}: ${nl(c.parsed.y, relative ? 0 : (c.parsed.y < 10 ? 1 : 0))} ${unit}` } }
        },
        scales: {
          x: { grid: { display: false }, ticks: { maxRotation: 0, autoSkip: true, color: css("--muted") } },
          y: {
            beginAtZero: !relative,
            grid: { color: gridColor() },
            ticks: { callback: (v) => nl(v, v < 10 && v % 1 ? 1 : 0) },
            title: { display: true, text: relative ? "Helderheid (nu = 100%)" : "Zonnestraling (W/m²)", color: css("--muted") }
          }
        }
      }
    });
  }

  /* Tijdlijn als grafiek: genummerde punten op een as + bijschriften */
  function buildTimeline(fig, cfg) {
    const ev = cfg.events;
    fig.innerHTML = `
      <figcaption>${esc(cfg.title)}</figcaption>
      <div class="tl-track" role="list">
        ${ev.map((e, n) => `<button class="tl-dot" type="button" role="listitem" data-n="${n}" aria-label="${esc(e.when)}: ${esc(e.text)}" title="${esc(e.when)}">${n + 1}</button>`).join("")}
      </div>
      <ol class="tl-list">
        ${ev.map((e, n) => `<li class="tl-item" data-n="${n}"><span class="n">${n + 1}</span><span><span class="w">${esc(e.when)}</span>${esc(e.text)}</span></li>`).join("")}
      </ol>
      <p class="chart-note">De punten staan op gelijke afstand en niet op schaal. Klik op een punt voor de gebeurtenis.</p>`;

    const dots = $$(".tl-dot", fig), items = $$(".tl-item", fig);
    const light = (n) => { dots.forEach((d, i) => d.classList.toggle("on", i === n)); items.forEach((it, i) => it.classList.toggle("on", i === n)); };
    dots.forEach((d) => {
      const n = +d.dataset.n;
      d.addEventListener("mouseenter", () => light(n));
      d.addEventListener("focus", () => light(n));
      d.addEventListener("click", () => { light(n); items[n].scrollIntoView({ block: "nearest", behavior: "smooth" }); });
    });
    items.forEach((it) => it.addEventListener("mouseenter", () => light(+it.dataset.n)));
    light(0);
  }

  /* ---------- Routing ---------- */
  function route() {
    const id = decodeURIComponent(location.hash.replace("#", "")) || "melkweg";
    charts.forEach((c) => c.destroy());
    charts = [];
    const e = entity(id) || entity("melkweg");
    if (hubById.has(e.id)) renderHub(e); else renderItem(e);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function init() {
    renderTiles();
    window.addEventListener("hashchange", route);
    route();

    $("#search").addEventListener("submit", (ev) => {
      ev.preventDefault();
      const q = $("#q").value.trim().toLowerCase();
      if (!q) return;
      const all = [...HUBS, ...PLANETS];
      const hit = all.find((p) => p.short.toLowerCase() === q || p.name.toLowerCase() === q)
        || all.find((p) => p.short.toLowerCase().startsWith(q) || p.name.toLowerCase().includes(q));
      if (hit) { location.hash = hit.id; $("#q").value = ""; $("#q").blur(); }
      else { $("#q").setCustomValidity("Geen resultaat"); $("#q").reportValidity(); setTimeout(() => $("#q").setCustomValidity(""), 1500); }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
