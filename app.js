(function () {
  const UNKNOWN = "unknown";

  const esc = (s) => String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const isMissing = (v) => v === null || v === undefined || v === "";

  const val = (n) => {
    if (isMissing(n)) return `<span class="unknown">${UNKNOWN}</span>`;
    if (typeof n === "number") {
      return esc(n.toLocaleString("en-US", { maximumFractionDigits: 1 }));
    }
    return esc(n);
  };

  const plain = (n) => (isMissing(n) ? UNKNOWN : String(n));

  const rate = (num, den) => {
    if (isMissing(num) || isMissing(den) || den === 0) return UNKNOWN;
    return `${((num / den) * 100).toFixed(1)}%`;
  };

  const sourceLine = (s) =>
    `<div class="src">Source: ${esc(s || UNKNOWN)}</div>`;

  const emptyState = (msg) => `<div class="empty">${esc(msg)}</div>`;

  const modeClass = (mode) => {
    const m = (mode || "").toLowerCase();
    if (m === "live") return "live";
    if (m.indexOf("pause") >= 0) return "paused";
    if (m.indexOf("draft") >= 0) return "draft";
    return "flat";
  };

  const fleetState = (b) => {
    if ((b.paused_routines || []).length) return "paused";
    return modeClass(b.mode);
  };

  function hBars(rows, maxHint) {
    const numeric = rows
      .map((r) => (isMissing(r.v) ? 0 : Number(r.v)))
      .filter((n) => n > 0);
    const max = Math.max(maxHint || 0, ...numeric, 1);
    return `<div class="hbar-list">${rows.map((r) => {
      const missing = isMissing(r.v);
      const pct = missing ? 0 : Math.max(2, Math.min(100, (Number(r.v) / max) * 100));
      return `<div class="hbar">
        <div class="hbar-lab">${esc(r.label)}</div>
        <div class="hbar-track ${missing ? "unknown-track" : ""}">
          ${missing ? "" : `<div class="hbar-fill" style="width:${pct}%;background:${r.color || "#0A2C3E"}"></div>`}
        </div>
        <div class="hbar-val">${val(r.v)}</div>
      </div>`;
    }).join("")}</div>`;
  }

  function funnelViz(stages) {
    const known = stages
      .map((s) => (isMissing(s.v) ? null : Number(s.v)))
      .filter((n) => n !== null);
    const max = Math.max(1, ...known, 1);
    return `<div class="funnel-viz">${stages.map((s, i) => {
      const missing = isMissing(s.v);
      const zero = !missing && Number(s.v) === 0;
      const h = missing ? 18 : zero ? 10 : Math.max(14, Math.round((Number(s.v) / max) * 88));
      const prev = i === 0 ? null : stages[i - 1].v;
      const conv = i === 0 ? "start" : rate(s.v, prev);
      return `<div class="fv-col">
        <div class="fv-bar-wrap">
          <div class="fv-bar ${missing ? "is-unknown" : zero ? "is-zero" : ""}" style="height:${h}px"></div>
        </div>
        <div class="fv-n">${val(s.v)}</div>
        <div class="fv-l">${esc(s.label)}</div>
        <div class="fv-c">${esc(conv)}</div>
      </div>`;
    }).join("")}</div>`;
  }

  function gauge(current, target, label) {
    const missing = isMissing(current) || isMissing(target) || !target;
    const pct = missing ? 0 : Math.min(100, (Number(current) / Number(target)) * 100);
    const r = 42;
    const c = 2 * Math.PI * r;
    const dash = missing ? 0 : (pct / 100) * c;
    return `<div class="gauge">
      <svg viewBox="0 0 108 108" width="108" height="108" aria-hidden="true">
        <circle cx="54" cy="54" r="${r}" fill="none" stroke="#EEF1EE" stroke-width="10"/>
        <circle cx="54" cy="54" r="${r}" fill="none" stroke="#FF7420" stroke-width="10"
          stroke-linecap="round" stroke-dasharray="${dash} ${c}"
          transform="rotate(-90 54 54)"/>
      </svg>
      <div class="gauge-mid">
        <strong>${missing ? `<span class="unknown">${UNKNOWN}</span>` : `${Math.round(pct)}%`}</strong>
        <span>${esc(label)}</span>
      </div>
    </div>`;
  }

  function listBlock(title, items, tone) {
    if (items == null) return `<article class="list-card"><h3>${esc(title)}</h3>${emptyState(UNKNOWN)}</article>`;
    if (!items.length) {
      return `<article class="list-card"><h3>${esc(title)}</h3><p class="none">None in this snapshot.</p></article>`;
    }
    return `<article class="list-card">
      <h3>${esc(title)}</h3>
      <ul class="${tone || ""}">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    </article>`;
  }

  function nextList(items) {
    if (!items || !items.length) return emptyState("Nothing queued.");
    return `<ol class="next-list">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>`;
  }

  function hero(d) {
    const cap = d.capacity || {};
    const fun = d.funnel_baseline || {};
    const day = d.daily || {};
    const meta = d.meta || {};

    document.title = `${meta.brand || "Orchidea"} · ${meta.title || "Outbound & GTM Ops Report"}`;
    document.getElementById("brand-name").textContent = meta.brand || "Orchidea";
    document.getElementById("subtitle").textContent =
      `${meta.partner || "Growth Partner"} · ${meta.title || "Outbound & GTM Ops"}`;
    document.getElementById("hero-window").innerHTML =
      `<strong>${esc(meta.timezone || UNKNOWN)}</strong><span>as of ${esc(day.as_of || meta.generated_on || UNKNOWN)}</span>`;
    document.getElementById("offer-copy").textContent = meta.offer_live || UNKNOWN;

    const gapTone = !isMissing(cap.gap) && cap.gap > 0 ? "warn" : "";
    const replyTone = fun.human_replies_non_ooo === 0 ? "miss" : "";

    document.getElementById("hero-stats").innerHTML = [
      `<article class="kpi ${gapTone}">
        <div class="k">Send ceiling</div>
        <div class="v">${val(cap.weekday_ceiling)}</div>
        <div class="s">vs ${val(cap.scale_target_day)} target</div>
      </article>`,
      `<article class="kpi">
        <div class="k">Sends today</div>
        <div class="v">${val(day.sends)}</div>
        <div class="s">delivered ${val(day.delivered)}</div>
      </article>`,
      `<article class="kpi ${replyTone}">
        <div class="k">Human replies</div>
        <div class="v">${val(fun.human_replies_non_ooo)}</div>
        <div class="s">qualified ${val(fun.qualified_positive_replies)}</div>
      </article>`,
      `<article class="kpi warn">
        <div class="k">Capacity gap</div>
        <div class="v">${val(cap.gap)}</div>
        <div class="s">${val(cap.mailboxes_active)} × ${val(cap.per_mailbox_day)}</div>
      </article>`
    ].join("");
  }

  function daily(d) {
    const ex = d.exec || {};
    const cap = d.capacity || {};
    const fun = d.funnel_baseline || {};
    const day = d.daily || {};
    const bn = d.bottlenecks || [];
    const next = d.daily && d.daily.decisions_needed ? d.daily.decisions_needed : [];

    const stages = [
      { label: "Delivered", v: fun.eligible_delivered },
      { label: "Replies", v: fun.human_replies_non_ooo },
      { label: "Qualified", v: fun.qualified_positive_replies },
      { label: "Booked", v: fun.booked_held },
      { label: "Opps", v: fun.opportunities }
    ];

    const capRows = [
      { label: "Ceiling", v: cap.weekday_ceiling, color: "#FF7420" },
      { label: "Usable", v: cap.usable_after_reserve, color: "#0A2C3E" },
      { label: "Target", v: cap.scale_target_day, color: "#12B76A" }
    ];

    const bnHtml = bn.length
      ? `<ol class="bn-list">${bn.map((b) => `
          <li>
            <span class="pill ${esc(b.type || "ops")}">${esc(b.type || UNKNOWN)}</span>
            <strong>${esc(b.item || UNKNOWN)}</strong>
          </li>`).join("")}</ol>`
      : emptyState("No bottlenecks in this snapshot.");

    return `
      <div class="situation">${esc(ex.situation || day.notes && day.notes[0] || UNKNOWN)}</div>
      <div class="viz-grid">
        <article class="chart-card">
          <div class="chart-head">
            <h2>Capacity vs scale</h2>
            <p>Configured ceiling, not sends. Gap ${plain(cap.gap)}/day.</p>
          </div>
          <div class="chart-body">
            ${gauge(cap.weekday_ceiling, cap.scale_target_day, "of 300 target")}
            ${hBars(capRows, cap.scale_target_day)}
          </div>
          ${sourceLine(cap.source)}
        </article>
        <article class="chart-card">
          <div class="chart-head">
            <h2>Funnel</h2>
            <p>Control ${plain(fun.control)}. Contacted ${plain(fun.contacted)} · sent ${plain(fun.emails_sent)} are not this ladder.</p>
          </div>
          ${funnelViz(stages)}
          ${sourceLine(fun.source)}
        </article>
      </div>
      <div class="split">
        ${listBlock("What's happening", ex.happening, "on")}
        ${listBlock("What's not", ex.not_happening, "off")}
      </div>
      <div class="split">
        <article class="list-card">
          <h3>Bottlenecks</h3>
          ${bnHtml}
        </article>
        <article class="list-card accent">
          <h3>Do next</h3>
          ${nextList(next)}
          ${sourceLine(day.source)}
        </article>
      </div>`;
  }

  function weekly(d) {
    const w = d.weekly || {};
    const fun = d.funnel_baseline || {};
    const stages = [
      { label: "Delivered", v: fun.eligible_delivered },
      { label: "Human replies", v: fun.human_replies_non_ooo },
      { label: "Qualified", v: fun.qualified_positive_replies },
      { label: "Booked / held", v: fun.booked_held },
      { label: "Opportunities", v: fun.opportunities }
    ];
    const filled = [
      ["Keep", w.keep, "keep"],
      ["Kill", w.kill, "kill"],
      ["Scale", w.scale, "scale"],
      ["Test", w.test, "test"]
    ].filter((b) => b[1] && b[1].length);
    const bucketHtml = filled.map(([title, items, cls]) =>
      `<article class="mini-bucket ${cls}"><h3>${esc(title)}</h3><ul>${items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></article>`
    ).join("");

    return `
      <div class="sec">
        <h2>${esc(w.label || "This week")}</h2>
        <p>Judge copy only when human replies exist.</p>
      </div>
      <article class="chart-card">
        <div class="chart-head">
          <h2>Conversion ladder</h2>
          <p>Eligible delivered → replies → qualified → booked → opportunities. Control ${plain(fun.control)}.</p>
        </div>
        ${funnelViz(stages)}
        ${sourceLine(fun.source)}
      </article>
      ${filled.length ? `<div class="mini-buckets">${bucketHtml}</div>` : ""}
      <div class="note-bar">Keep / kill / scale: none — human replies are ${plain(fun.human_replies_non_ooo)}.</div>
      <p class="lede">${(w.notes || []).map(esc).join(" ")}</p>
      ${sourceLine(w.source || fun.source)}`;
  }

  function monthly(d) {
    const m = d.monthly || {};
    const cap = d.capacity || {};
    const exp = (d.experiments || [])[0];
    const rows = [
      { label: "Ceiling", v: cap.weekday_ceiling, color: "#FF7420" },
      { label: "Usable", v: cap.usable_after_reserve, color: "#0A2C3E" },
      { label: "Scale target", v: cap.scale_target_day, color: "#12B76A" }
    ];
    const trends = m.trends;
    let trendBlock;
    if (trends == null) trendBlock = emptyState(`Trends ${UNKNOWN}.`);
    else if (!trends.length) trendBlock = emptyState("No monthly trend series yet. Analyst writes monthly.trends[].");
    else {
      trendBlock = hBars(
        trends.map((t, i) => ({
          label: t.label || UNKNOWN,
          v: t.value,
          color: i === 0 ? "#FF7420" : "#0A2C3E"
        }))
      );
    }

    return `
      <div class="sec">
        <h2>${esc(m.label || "This month")}</h2>
        <p>Structural reads. Do not grade copy on a month with zero human replies.</p>
      </div>
      <div class="viz-grid">
        <article class="chart-card">
          <div class="chart-head">
            <h2>Sends per weekday</h2>
            <p>${plain(cap.mailboxes_active)} mailboxes × ${plain(cap.per_mailbox_day)} = ceiling ${plain(cap.weekday_ceiling)}.</p>
          </div>
          <div class="chart-body">
            ${gauge(cap.weekday_ceiling, cap.scale_target_day, "of target")}
            ${hBars(rows, cap.scale_target_day)}
          </div>
          ${sourceLine(cap.source)}
        </article>
        <article class="chart-card">
          <div class="chart-head">
            <h2>Experiment</h2>
            <p>Proposed is not live.</p>
          </div>
          ${exp ? `<div class="exp-block">
            <div class="k">${esc(exp.status || UNKNOWN)}</div>
            <h3>${esc(exp.id || UNKNOWN)}</h3>
            <p>Control ${esc(exp.control || UNKNOWN)}. ${esc(exp.note || "")}</p>
          </div>` : emptyState("No experiments in this snapshot.")}
          ${trendBlock}
          ${sourceLine(m.source)}
        </article>
      </div>
      <p class="lede">${(m.notes || []).map(esc).join(" ")}</p>`;
  }

  function fleet(d) {
    const bots = d.fleet || [];
    const paused = d.paused_routines || [];
    const counts = { live: 0, paused: 0, draft: 0, flat: 0 };
    bots.forEach((b) => { counts[fleetState(b)] = (counts[fleetState(b)] || 0) + 1; });

    const cards = bots.map((b) => {
      const st = fleetState(b);
      return `<article class="bot ${st}">
        <div class="bot-top">
          <h3>${esc(b.name || UNKNOWN)}</h3>
          <span class="pill ${st}">${esc(st === "paused" ? "paused" : (b.mode || UNKNOWN))}</span>
        </div>
        <p class="bot-job">${esc(b.job || UNKNOWN)}</p>
        <div class="bot-stats">
          <div><span>Target</span><b>${esc(b.target || UNKNOWN)}</b></div>
          <div><span>Actual</span><b>${val(b.actual)}</b></div>
        </div>
        <p class="bot-out">${esc(b.last_outcome || UNKNOWN)}</p>
      </article>`;
    }).join("");

    return `
      <div class="sec">
        <h2>Fleet</h2>
        <p>${bots.length} bots. Qualification is out of the fleet. Actual stays unknown until a provider read-back.</p>
      </div>
      <div class="fleet-legend">
        <span><i class="live"></i> Live ${counts.live}</span>
        <span><i class="paused"></i> Paused ${counts.paused}</span>
        <span><i class="draft"></i> Draft ${counts.draft}</span>
        <span><i class="flat"></i> Other ${counts.flat}</span>
      </div>
      <div class="bot-grid">${cards || emptyState(UNKNOWN)}</div>
      ${paused.length ? `<div class="note-bar">Paused: ${paused.map((p) => esc(`${p.owner} · ${p.routine}`)).join(" · ")}</div>` : ""}`;
  }

  function openBoard(d) {
    const items = d.open_items;
    const bn = d.bottlenecks || [];
    if (items == null) return emptyState(`Focus items ${UNKNOWN}.`);
    return `
      <div class="sec">
        <h2>Focus</h2>
        <p>What to do. Bottlenecks are why. Nothing else belongs on this page.</p>
      </div>
      <div class="split">
        <article class="list-card">
          <h3>Why it is stuck</h3>
          <ol class="bn-list">${bn.map((b) => `
            <li>
              <span class="pill ${esc(b.type || "ops")}">${esc(b.type || UNKNOWN)}</span>
              <strong>${esc(b.item || UNKNOWN)}</strong>
            </li>`).join("")}</ol>
        </article>
        <article class="list-card accent">
          <h3>Do next</h3>
          ${nextList(items)}
        </article>
      </div>`;
  }

  function footer(d) {
    const meta = d.meta || {};
    const systems = meta.systems || {};
    document.getElementById("footer").innerHTML = `
      <p>${esc(meta.brand || "Orchidea")} · snapshot ${esc(meta.generated_on || UNKNOWN)} · ${esc(meta.timezone || UNKNOWN)} · ${esc(systems.identity || UNKNOWN)} / ${esc(systems.execution || UNKNOWN)} / ${esc(systems.approvals || UNKNOWN)}.</p>
      <p>${(meta.notes || []).map(esc).join(" ")}</p>
      <p>Analyst overwrites data.js. null is ${UNKNOWN}, never 0. Qualification is deleted from the fleet.</p>`;
  }

  function showTab(name) {
    document.querySelectorAll(".tocnav button").forEach((b) =>
      b.setAttribute("aria-selected", String(b.dataset.tab === name))
    );
    document.querySelectorAll(".panel").forEach((p) =>
      p.classList.toggle("active", p.id === "panel-" + name)
    );
    document.body.className = "tab-" + name;
    if (location.hash.replace("#", "") !== name) {
      history.replaceState(null, "", "#" + name);
    }
  }

  function boot(d) {
    hero(d);
    document.getElementById("panel-daily").innerHTML = daily(d);
    document.getElementById("panel-weekly").innerHTML = weekly(d);
    document.getElementById("panel-monthly").innerHTML = monthly(d);
    document.getElementById("panel-fleet").innerHTML = fleet(d);
    document.getElementById("panel-open").innerHTML = openBoard(d);
    footer(d);
  }

  document.querySelectorAll(".tocnav button").forEach((btn) => {
    btn.addEventListener("click", () => {
      showTab(btn.dataset.tab);
      const page = document.querySelector(".page");
      if (page) window.scrollTo({ top: page.offsetTop - 8, behavior: "smooth" });
    });
  });

  const allowed = { daily: 1, weekly: 1, monthly: 1, fleet: 1, open: 1 };
  const hashTab = () => {
    const h = (location.hash || "").replace("#", "");
    return allowed[h] ? h : "daily";
  };

  window.addEventListener("hashchange", () => showTab(hashTab()));

  if (window.ORCHIDEA_OPS) {
    boot(window.ORCHIDEA_OPS);
    showTab(hashTab());
  } else {
    document.body.insertAdjacentHTML(
      "afterbegin",
      "<p class='load-error'>data.js did not load. Serve this folder with python3 -m http.server 43147</p>"
    );
  }
})();
