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
    const life = (b.lifecycle || "").toLowerCase();
    if (life === "live" || life === "paused" || life === "draft") return life;
    if ((b.paused_routines || []).length) return "paused";
    return modeClass(b.mode);
  };

  function inboxesOf(d) {
    const ib = d.inboxes || {};
    const cap = d.capacity || {};
    return {
      active: isMissing(ib.active) ? cap.mailboxes_active : ib.active,
      warmed: ib.warmed,
      warming: ib.warming,
      new: ib.new,
      warmup_days: isMissing(ib.warmup_days) ? 14 : ib.warmup_days,
      per_mailbox_day: isMissing(ib.per_mailbox_day) ? cap.per_mailbox_day : ib.per_mailbox_day,
      source: ib.source || cap.source
    };
  }

  function remainingToday(d) {
    const day = d.daily || {};
    if (!isMissing(day.remaining_to_capacity)) return day.remaining_to_capacity;
    const cap = (d.capacity || {}).weekday_ceiling;
    const sends = day.sends;
    if (isMissing(sends) || isMissing(cap)) return null;
    return Math.max(0, Number(cap) - Number(sends));
  }

  function motionOf(d) {
    const rows = d.motion_surface || d.tests;
    return Array.isArray(rows) ? rows : [];
  }

  function journeyStages(fun) {
    return [
      { label: "Contacted", v: fun.contacted },
      { label: "Sent", v: fun.emails_sent },
      { label: "Delivered", v: fun.eligible_delivered },
      { label: "Replies", v: fun.human_replies_non_ooo },
      { label: "Booked", v: fun.booked_held }
    ];
  }

  function journeyCallout(stages) {
    const missing = stages.filter((s) => isMissing(s.v)).map((s) => s.label);
    const zeros = stages.filter((s) => !isMissing(s.v) && Number(s.v) === 0).map((s) => s.label);
    if (!missing.length && !zeros.length) return "";
    const bits = [];
    if (missing.length) {
      bits.push(`Hatched = unread (${missing.join(", ")}). The x-ray cannot locate the bottleneck past a blind step.`);
    }
    if (zeros.length) {
      bits.push(`Red = observed zero (${zeros.join(", ")}). Downstream is starved.`);
    }
    return `<div class="journey-callout">${esc(bits.join(" "))}</div>`;
  }

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
        <div class="fv-c">${i === 0 ? "start" : `← ${esc(conv)}`}</div>
      </div>`;
    }).join("")}</div>
    <div class="funnel-legend">
      <span><i class="lg-navy"></i> Count</span>
      <span><i class="lg-hatch"></i> Unknown</span>
      <span><i class="lg-red"></i> Observed zero</span>
      <span>Conversion is the rate from the previous step</span>
    </div>`;
  }

  function inboxMix(ib) {
    const rows = [
      { label: "Warmed", v: ib.warmed, color: "#12B76A" },
      { label: "Warming", v: ib.warming, color: "#F79009" },
      { label: "New", v: ib.new, color: "#98A2B3" }
    ];
    return `
      <div class="inbox-head">
        <strong>${val(ib.active)}</strong>
        <span>active inboxes · mix unread until Analyst fills warmed / warming / new</span>
      </div>
      ${hBars(rows, Number(ib.active) || 0)}
      <p class="prod-math">New accounts: ${plain(ib.warmup_days)}-day warmup before they add to daily capacity. Do not invent a split from the active count.</p>`;
  }

  function capacityProduction(d) {
    const cap = d.capacity || {};
    const ib = inboxesOf(d);
    const rem = remainingToday(d);
    const day = d.daily || {};
    const rows = [
      { label: "Sent today", v: day.sends, color: "#0A2C3E" },
      { label: "Remaining", v: rem, color: "#FF7420" }
    ];
    return `
      <div class="remain-hero">
        <div>
          <div class="v">${val(rem)}</div>
          <div class="s">Sends today ${plain(day.sends)} · remaining unread until sends are read</div>
        </div>
      </div>
      ${hBars(rows, cap.weekday_ceiling)}
      <p class="prod-math">How capacity is produced: ${plain(ib.active)} inboxes × ${plain(ib.per_mailbox_day)} / mailbox = ${plain(cap.weekday_ceiling)} weekday capacity. Usable after reserve ${plain(cap.usable_after_reserve)}. Scale target ${plain(cap.scale_target_day)} is context, not the headline.</p>
      ${inboxMix(ib)}`;
  }

  function campaignXray(d) {
    const rows = d.campaigns;
    if (rows == null) return emptyState(`Campaigns ${UNKNOWN}.`);
    if (!rows.length) return emptyState("No observed campaigns in this snapshot. Analyst adds campaigns[] only when a provider read exists.");
    return `<div class="camp-list">${rows.map((c) => `
      <article class="camp-card">
        <div class="camp-top">
          <div>
            <h3>${esc(c.name || UNKNOWN)} <span class="camp-id">/ ${esc(c.id || UNKNOWN)}</span></h3>
            <p class="camp-meta">${esc(c.channel || UNKNOWN)}</p>
          </div>
          <span class="pill ${esc((c.status || "flat").toLowerCase())}">${esc(c.status || UNKNOWN)}</span>
        </div>
        <div class="camp-metrics">
          <div><span>Contacted</span><b>${val(c.contacted)}</b></div>
          <div><span>Sent</span><b>${val(c.sent)}</b></div>
          <div><span>Delivered</span><b>${val(c.delivered)}</b></div>
          <div><span>Replies</span><b>${val(c.replies)}</b></div>
          <div><span>Booked</span><b>${val(c.booked)}</b></div>
          <div><span>Bounce</span><b>${val(c.bounce)}</b></div>
        </div>
        <p class="camp-insight">${esc(c.insight || "No insight in this snapshot.")}</p>
        ${sourceLine(c.source)}
      </article>`).join("")}</div>`;
  }

  function testBoard(d) {
    const rows = motionOf(d);
    if (!rows.length) return emptyState("Test surface is empty. Analyst fills motion_surface[] (alias tests[]).");
    const counts = { live: 0, tested: 0, proposed: 0, not_started: 0 };
    rows.forEach((r) => {
      const st = (r.status || "not_started").replace(/-/g, "_");
      if (counts[st] == null) counts[st] = 0;
      counts[st] += 1;
    });
    return `
      <div class="test-legend">
        <span><i class="live"></i> Live ${counts.live || 0}</span>
        <span><i class="tested"></i> Tested ${counts.tested || 0}</span>
        <span><i class="proposed"></i> Proposed ${counts.proposed || 0}</span>
        <span><i class="not_started"></i> Not started ${counts.not_started || 0}</span>
      </div>
      <div class="test-board">${rows.map((r) => {
        const st = (r.status || "not_started").replace(/-/g, "_");
        return `<article class="test-chip ${esc(st)}">
          <div class="test-chip-top">
            <span class="pill ${esc(st)}">${esc((r.status || UNKNOWN).replace(/_/g, " "))}</span>
            <span class="kind">${esc(r.kind || UNKNOWN)}</span>
          </div>
          <h3>${esc(r.label || UNKNOWN)}</h3>
          <p>${esc(r.note || "No note.")}</p>
        </article>`;
      }).join("")}</div>`;
  }

  function goalTrack(goals) {
    if (goals == null) return emptyState(`Goals ${UNKNOWN}.`);
    if (!goals.length) return emptyState("No monthly goals in this snapshot. Analyst fills monthly.goals[].");
    return `<div class="goal-list">${goals.map((g) => {
      const missing = isMissing(g.progress);
      const pct = missing ? 0 : Math.max(0, Math.min(100, Number(g.progress)));
      return `<article class="goal-card">
        <div class="goal-top">
          <h3>${esc(g.label || UNKNOWN)}</h3>
          <span class="pill">${esc(g.status || UNKNOWN)}</span>
        </div>
        <p class="goal-target">Target ${esc(g.target || UNKNOWN)} · baseline ${plain(g.baseline)}</p>
        <div class="goal-track ${missing ? "unknown-track" : ""}">
          ${missing ? "" : `<div class="goal-fill" style="width:${pct}%"></div>`}
        </div>
        <div class="goal-prog">Progress ${val(g.progress)}${missing ? "" : "%"}</div>
        <p class="camp-insight">${esc(g.note || "")}</p>
      </article>`;
    }).join("")}</div>`;
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

  function takeaways(items, fallback) {
    const rows = (items && items.length) ? items : fallback;
    if (!rows || !rows.length) return emptyState("No takeaways in this snapshot.");
    return `<ul class="takeaways">${rows.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
  }

  function nextList(items) {
    if (!items || !items.length) return emptyState("Nothing queued.");
    return `<ol class="next-list">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>`;
  }

  function bnList(bn) {
    if (!bn.length) return emptyState("No bottlenecks in this snapshot.");
    return `<ol class="bn-list">${bn.map((b, i) => `
      <li>
        <span class="rank">${esc(b.rank || i + 1)}</span>
        <div>
          <span class="pill ${esc(b.type || "ops")}">${esc(b.type || UNKNOWN)}</span>
          <strong>${esc(b.item || UNKNOWN)}</strong>
        </div>
      </li>`).join("")}</ol>`;
  }

  function experimentLedger(exps) {
    if (exps == null) return emptyState(`Experiments ${UNKNOWN}.`);
    if (!exps.length) return emptyState("No experiments in this snapshot.");
    return `<div class="exp-list">${exps.map((exp) => `
      <div class="exp-block">
        <div class="k">${esc((exp.status || UNKNOWN).replace(/_/g, " "))}</div>
        <h3>${esc(exp.id || UNKNOWN)}</h3>
        <p>Control ${esc(exp.control || UNKNOWN)}. ${esc(exp.note || "")}</p>
      </div>`).join("")}</div>`;
  }

  function hero(d) {
    const cap = d.capacity || {};
    const fun = d.funnel_baseline || {};
    const day = d.daily || {};
    const meta = d.meta || {};
    const ib = inboxesOf(d);
    const rem = remainingToday(d);

    document.title = `${meta.brand || "Orchidea"} · ${meta.title || "Outbound & GTM Ops Report"}`;
    document.getElementById("brand-name").textContent = meta.brand || "Orchidea";
    document.getElementById("subtitle").textContent =
      `${meta.partner || "Growth Partner"} · ${meta.title || "Outbound & GTM Ops"}`;
    document.getElementById("hero-window").innerHTML =
      `<strong>${esc(meta.timezone || UNKNOWN)}</strong><span>as of ${esc(day.as_of || meta.generated_on || UNKNOWN)}</span>`;
    document.getElementById("offer-copy").textContent = meta.offer_live || UNKNOWN;

    const remTone = isMissing(rem) ? "warn" : "";
    const replyTone = fun.human_replies_non_ooo === 0 ? "miss" : "";
    const mixUnknown = isMissing(ib.warmed) && isMissing(ib.warming) && isMissing(ib.new);

    document.getElementById("hero-stats").innerHTML = [
      `<article class="kpi">
        <div class="k">Sends today</div>
        <div class="v">${val(day.sends)}</div>
        <div class="s">delivered ${val(day.delivered)}</div>
      </article>`,
      `<article class="kpi ${remTone}">
        <div class="k">Remaining today</div>
        <div class="v">${val(rem)}</div>
        <div class="s">to daily capacity</div>
      </article>`,
      `<article class="kpi ${replyTone}">
        <div class="k">Human replies</div>
        <div class="v">${val(fun.human_replies_non_ooo)}</div>
        <div class="s">qualified ${val(fun.qualified_positive_replies)}</div>
      </article>`,
      `<article class="kpi">
        <div class="k">Inboxes</div>
        <div class="v">${val(ib.active)}</div>
        <div class="s">${mixUnknown ? "warmup mix unknown" : `warmed ${plain(ib.warmed)} · warming ${plain(ib.warming)} · new ${plain(ib.new)}`}</div>
      </article>`
    ].join("");
  }

  function daily(d) {
    const ex = d.exec || {};
    const fun = d.funnel_baseline || {};
    const day = d.daily || {};
    const bn = d.bottlenecks || [];
    const next = d.daily && d.daily.decisions_needed ? d.daily.decisions_needed : [];
    const cap = d.capacity || {};
    const stages = journeyStages(fun);

    const bots = d.fleet || [];
    const pulse = bots.length
      ? `<div class="pulse" aria-label="Fleet pulse">${bots.map((b) => {
          const st = fleetState(b);
          return `<span class="pulse-chip ${st}"><i></i>${esc(b.name || UNKNOWN)}</span>`;
        }).join("")}</div>`
      : "";

    const now = next && next[0]
      ? `<div class="now"><span>Focus now</span><strong>${esc(next[0])}</strong></div>`
      : "";

    return `
      <div class="situation">${esc(ex.situation || (day.notes && day.notes[0]) || UNKNOWN)}</div>
      ${now}
      ${pulse}
      <div class="viz-grid">
        <article class="chart-card">
          <div class="chart-head">
            <h2>Remaining to today’s capacity</h2>
            <p>Sent today vs what is left. Inbox mix is how capacity is built — ${plain(cap.mailboxes_active)} × ${plain(cap.per_mailbox_day)} is the production math, not the headline KPI.</p>
          </div>
          ${capacityProduction(d)}
          ${sourceLine(cap.source)}
        </article>
        <article class="chart-card">
          <div class="chart-head">
            <h2>Pipeline x-ray</h2>
            <p>Control ${plain(fun.control)}. Where the bottleneck sits along the OS. Hatched = unknown. Red = observed zero.</p>
          </div>
          ${funnelViz(stages)}
          ${journeyCallout(stages)}
          ${sourceLine(fun.source)}
        </article>
      </div>
      <div class="split">
        ${listBlock("What's happening", ex.happening, "on")}
        ${listBlock("What's not", ex.not_happening, "off")}
      </div>
      <div class="split">
        <article class="list-card">
          <h3>Ranked bottlenecks</h3>
          ${bnList(bn)}
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
    const stages = journeyStages(fun);
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
        <p>Weekly GTM operating review. Judge copy only when human replies exist. Empty keep/kill is omitted, not a four-column void.</p>
      </div>
      <article class="chart-card">
        <div class="chart-head">
          <h2>Week takeaways</h2>
          <p>What a GTM lead would brief from this snapshot.</p>
        </div>
        ${takeaways(w.insights, w.notes)}
      </article>
      <article class="chart-card">
        <div class="chart-head">
          <h2>Journey this week</h2>
          <p>Control ${plain(fun.control)}. Contacted → Sent → Delivered → Replies → Booked.</p>
        </div>
        ${funnelViz(stages)}
        ${journeyCallout(stages)}
        ${sourceLine(fun.source)}
      </article>
      <article class="chart-card">
        <div class="chart-head">
          <h2>Campaign x-ray</h2>
          <p>Observed campaigns only. Others omitted — not invented. Volume, performance, and what we can learn.</p>
        </div>
        ${campaignXray(d)}
      </article>
      <article class="chart-card">
        <div class="chart-head">
          <h2>Test board</h2>
          <p>What we are testing vs not. Untested channels are a bottleneck and an option. EXP-MSG-001 is proposed, not live.</p>
        </div>
        ${testBoard(d)}
      </article>
      ${filled.length ? `<div class="mini-buckets cols-${filled.length}">${bucketHtml}</div>` : ""}
      ${sourceLine(w.source || fun.source)}`;
  }

  function monthly(d) {
    const m = d.monthly || {};
    const cap = d.capacity || {};
    const ib = inboxesOf(d);
    const fun = d.funnel_baseline || {};
    const stages = journeyStages(fun);
    const remMonth = m.remaining_to_capacity;
    const used = m.capacity_used;
    const sends = m.sends;
    const rows = [
      { label: "Sends (month)", v: sends, color: "#0A2C3E" },
      { label: "Capacity used", v: used, color: "#667085" },
      { label: "Remaining", v: remMonth, color: "#FF7420" }
    ];

    return `
      <div class="sec">
        <h2>${esc(m.label || "This month")}</h2>
        <p>What we are working towards, how we are tracking, what we learned, what we will test next. Not a ROAS score.</p>
      </div>
      <article class="chart-card">
        <div class="chart-head">
          <h2>Goal tracking</h2>
          <p>${esc((d.meta && d.meta.offer_live) || "20% revenue growth, or keep working free until hit.")}</p>
        </div>
        ${goalTrack(m.goals)}
      </article>
      <div class="viz-grid">
        <article class="chart-card">
          <div class="chart-head">
            <h2>Remaining to capacity</h2>
            <p>Month remaining, not a ceiling title. Production math sits underneath: ${plain(ib.active)} × ${plain(ib.per_mailbox_day)} / weekday. Warmup mix ${plain(ib.warmed)} / ${plain(ib.warming)} / ${plain(ib.new)}.</p>
          </div>
          ${hBars(rows, cap.weekday_ceiling)}
          <p class="prod-math">Structural production is known. Remaining-to-capacity over the month stays ${UNKNOWN} until Analyst writes monthly.sends / monthly.remaining_to_capacity. Scale target ${plain(cap.scale_target_day)} is context.</p>
          ${sourceLine(m.source || cap.source)}
        </article>
        <article class="chart-card">
          <div class="chart-head">
            <h2>Conversion vs supply</h2>
            <p>Same journey x-ray. If remaining-to-capacity is unknown and replies are zero, conversion is the operating unknown.</p>
          </div>
          ${funnelViz(stages)}
          ${journeyCallout(stages)}
        </article>
      </div>
      <article class="chart-card">
        <div class="chart-head">
          <h2>Channel / offer test ledger</h2>
          <p>Components of outbound we have and have not tried.</p>
        </div>
        ${testBoard(d)}
      </article>
      <div class="split">
        <article class="list-card">
          <h3>Month takeaways</h3>
          ${takeaways(m.insights, m.notes)}
        </article>
        <article class="list-card accent">
          <h3>Next bets</h3>
          ${nextList(m.next_bets)}
        </article>
      </div>
      <article class="chart-card">
        <div class="chart-head">
          <h2>Experiment ledger</h2>
          <p>Proposed is not live.</p>
        </div>
        ${experimentLedger(d.experiments)}
        ${sourceLine(m.source)}
      </article>`;
  }

  function fleet(d) {
    const bots = d.fleet || [];
    const paused = d.paused_routines || [];
    const counts = { live: 0, paused: 0, draft: 0, flat: 0 };
    bots.forEach((b) => { counts[fleetState(b)] = (counts[fleetState(b)] || 0) + 1; });

    const cards = bots.map((b) => {
      const st = fleetState(b);
      const kpi = b.kpi || b.target;
      const workingLabel = isMissing(b.working)
        ? (st === "paused" ? "paused — routine not running" : UNKNOWN)
        : b.working;
      return `<article class="bot ${st}">
        <div class="bot-top">
          <h3>${esc(b.name || UNKNOWN)}</h3>
          <span class="pill ${st}">${esc(st)}</span>
        </div>
        <p class="bot-job">${esc(b.job || UNKNOWN)}</p>
        <div class="bot-kpi">
          <span>KPI it tracks</span>
          <b>${esc(kpi || UNKNOWN)}</b>
        </div>
        <div class="bot-stats">
          <div><span>Actual</span><b>${val(b.actual)}</b></div>
          <div><span>Working?</span><b>${typeof workingLabel === "string" && workingLabel === UNKNOWN ? `<span class="unknown">${UNKNOWN}</span>` : esc(String(workingLabel))}</b></div>
        </div>
        <p class="bot-out"><span>Last outcome</span>${esc(b.last_outcome || UNKNOWN)}</p>
        <p class="bot-id">${esc(b.id || UNKNOWN)} · ${esc(b.mode || UNKNOWN)}</p>
      </article>`;
    }).join("");

    return `
      <div class="sec">
        <h2>Fleet</h2>
        <p>${bots.length} bots. Operational status is live / paused / draft. KPI actual stays unknown until a provider read-back. Paused means the routine is not running — it is not a KPI of zero. Qualification is not in this fleet.</p>
      </div>
      <div class="fleet-legend">
        <span><i class="live"></i> Live ${counts.live}</span>
        <span><i class="paused"></i> Paused ${counts.paused}</span>
        <span><i class="draft"></i> Draft ${counts.draft}</span>
        <span><i class="flat"></i> Other ${counts.flat}</span>
      </div>
      <div class="bot-grid">${cards || emptyState(UNKNOWN)}</div>
      ${paused.length ? `<div class="note-bar">Paused routines: ${paused.map((p) => esc(`${p.owner} · ${p.routine}`)).join(" · ")}</div>` : ""}`;
  }

  function openBoard(d) {
    const items = d.open_items;
    const bn = d.bottlenecks || [];
    if (items == null) return emptyState(`Focus items ${UNKNOWN}.`);

    const cards = bn.length
      ? `<div class="focus-stack">${bn.map((b, i) => `
          <article class="focus-card">
            <div class="focus-gap">
              <div class="focus-kicker">
                <span class="rank">${esc(b.rank || i + 1)}</span>
                <span class="pill ${esc(b.type || "ops")}">${esc(b.type || UNKNOWN)}</span>
              </div>
              <h3>${esc(b.item || UNKNOWN)}</h3>
              <p>${esc(b.gap || b.item || UNKNOWN)}</p>
            </div>
            <div>
              <h4>Where it sits</h4>
              <p>${esc(b.journey || UNKNOWN)}</p>
            </div>
            <div>
              <h4>Unblock</h4>
              <p>${esc(b.unblock || UNKNOWN)}</p>
            </div>
            <div class="focus-test">
              <h4>Test we should / shouldn’t run</h4>
              <p>${esc(b.test || UNKNOWN)}</p>
            </div>
          </article>`).join("")}</div>`
      : emptyState("No bottlenecks in this snapshot.");

    return `
      <div class="sec">
        <h2>Focus</h2>
        <p>Name the gap, where it sits on the journey, the unblock, and the test we should or should not run. Bottlenecks are why. The list is what to do.</p>
      </div>
      ${cards}
      <article class="list-card accent">
        <h3>Do next</h3>
        ${nextList(items)}
      </article>`;
  }

  function footer(d) {
    const meta = d.meta || {};
    const systems = meta.systems || {};
    document.getElementById("footer").innerHTML = `
      <p>${esc(meta.brand || "Orchidea")} · snapshot ${esc(meta.generated_on || UNKNOWN)} · ${esc(meta.timezone || UNKNOWN)} · ${esc(systems.identity || UNKNOWN)} / ${esc(systems.execution || UNKNOWN)} / ${esc(systems.approvals || UNKNOWN)}.</p>
      <p>${(meta.notes || []).map(esc).join(" ")}</p>
      <p>Analyst overwrites data.js. null is ${UNKNOWN}, never 0. Qualification is deleted. No Salesforce.</p>`;
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
