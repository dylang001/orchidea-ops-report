(function () {
  const UNKNOWN = "unknown";
  const ARROW = `<svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const esc = (s) => String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const isMissing = (v) => v === null || v === undefined || v === "";
  const plain = (n) => (isMissing(n) ? UNKNOWN : String(n));

  const val = (n) => {
    if (isMissing(n)) return `<span class="unknown">${UNKNOWN}</span>`;
    if (typeof n === "number") return esc(n.toLocaleString("en-US", { maximumFractionDigits: 2 }));
    return esc(n);
  };

  const valBtn = (n, open) => {
    if (isMissing(n)) {
      return `<button type="button" class="unknown-btn" data-open="${esc(open)}">${UNKNOWN}</button>`;
    }
    if (typeof n === "number") return esc(n.toLocaleString("en-US", { maximumFractionDigits: 2 }));
    return esc(n);
  };

  const rate = (num, den) => {
    if (isMissing(num) || isMissing(den) || den === 0) return UNKNOWN;
    return `${((num / den) * 100).toFixed(1)}%`;
  };

  const sourceLine = (s) => `<div class="src">Source: ${esc(s || UNKNOWN)}</div>`;
  const emptyState = (msg) => `<div class="empty">${esc(msg)}</div>`;

  const ext = (href, label) => {
    if (!href) return "";
    const internal = String(href).charAt(0) === "#";
    const extra = internal ? "" : " target=\"_blank\" rel=\"noopener noreferrer\"";
    return `<a class="ext" href="${esc(href)}"${extra}>${esc(label)}${ARROW}</a>`;
  };

  const linksOf = (d) => (d.meta && d.meta.links) || {};

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
      { key: "contacted", label: "Contacted", v: fun.contacted, def: "People who entered the control. Not the same as enrolled, sent, or delivered." },
      { key: "sent", label: "Sent", v: fun.emails_sent, def: "Messages Salesforge attempted. Includes bounces until delivered is read." },
      { key: "delivered", label: "Delivered", v: fun.eligible_delivered, def: "Eligible delivered. Until this is numeric we cannot split deliverability from copy." },
      { key: "replies", label: "Replies", v: fun.human_replies_non_ooo, def: "Human replies, OOO stripped. Observed zero is not unknown." },
      { key: "booked", label: "Booked", v: fun.booked_held, def: "Held meetings. Downstream of a human reply." }
    ];
  }

  function proofViz(p) {
    if (!p) return "";
    const rows = p.rows || [];
    if (p.type === "split" && rows.length >= 2) {
      return `<div class="proof"><div class="psplit">${rows.slice(0, 2).map((r) =>
        `<div><b>${esc(r.value)}${typeof r.value === "number" ? "%" : ""}</b><span>${esc(r.label)}${r.hint ? " · " + esc(r.hint) : ""}</span></div>`
      ).join("")}</div><div class="proof-cap">${esc(p.caption || "")}</div></div>`;
    }
    const nums = rows.map((r) => Math.abs(Number(r.value) || 0));
    const max = Math.max(1, ...nums);
    return `<div class="proof">${rows.map((r) => {
      const n = Number(r.value);
      const pct = isMissing(r.value) ? 0 : Math.max(4, Math.min(100, (Math.abs(n) / max) * 100));
      return `<div class="pbar">
        <div class="pbar-l">${esc(r.label)}</div>
        <div class="pbar-t"><i style="width:${pct}%"></i></div>
        <div class="pbar-v">${esc(r.hint || String(r.value))}</div>
      </div>`;
    }).join("")}<div class="proof-cap">${esc(p.caption || "")}</div></div>`;
  }

  function funnelViz(d) {
    const fun = d.funnel_baseline || {};
    const stages = journeyStages(fun);
    const missing = stages.filter((s) => isMissing(s.v)).map((s) => s.label);
    const zeros = stages.filter((s) => !isMissing(s.v) && Number(s.v) === 0).map((s) => s.label);
    const stuck = missing[0] || zeros[0] || "";
    const chartH = 140;

    const known = stages.map((s) => (isMissing(s.v) ? 0 : Number(s.v)));
    const max = Math.max(1, ...known);
    const nodes = stages.map((s, i) => {
      const missingV = isMissing(s.v);
      const zero = !missingV && Number(s.v) === 0;
      const prev = i === 0 ? null : stages[i - 1].v;
      let conv = "";
      if (i === 0) {
        conv = "start";
      } else if (!isMissing(prev) && !isMissing(s.v) && Number(prev) !== 0) {
        conv = "from last " + rate(s.v, prev);
      }
      const h = missingV
        ? 64
        : zero
          ? 24
          : Math.max(28, Math.round((Number(s.v) / max) * chartH));
      const barCls = ["j-bar", missingV ? "is-unknown" : "", zero ? "is-zero" : ""]
        .filter(Boolean).join(" ");
      const stepCls = ["j-step", missingV ? "is-unknown" : "", zero ? "is-zero" : "", s.label === stuck ? "is-stuck" : ""]
        .filter(Boolean).join(" ");
      return `<div class="${stepCls}" role="button" tabindex="0" data-open="stage:${esc(s.key)}">
        <div class="j-track" aria-hidden="true">
          <span class="${barCls}" style="height:${h}px"></span>
        </div>
        <span class="j-val">${val(s.v)}</span>
        <span class="j-lab">${esc(s.label)}</span>
        ${conv ? `<span class="j-sub">${esc(conv)}</span>` : ""}
      </div>`;
    }).join("");

    const bits = [];
    if (missing.length) bits.push(`Hatched = unread (${missing.join(", ")}).`);
    if (zeros.length) bits.push(`Red = observed zero (${zeros.join(", ")}).`);

    return `
      <div class="journey" role="list">${nodes}</div>
      ${bits.length ? `<div class="callout">${esc(bits.join(" "))}</div>` : ""}
      ${sourceLine(fun.source)}`;
  }

  function capacityTile(d) {
    const cap = d.capacity || {};
    const ib = inboxesOf(d);
    const rem = remainingToday(d);
    const day = d.daily || {};
    const unknown = isMissing(day.sends) || isMissing(rem);
    const usedPct = unknown || isMissing(cap.weekday_ceiling) || !cap.weekday_ceiling
      ? 0
      : Math.min(100, (Number(day.sends) / Number(cap.weekday_ceiling)) * 100);
    const leftPct = unknown ? 0 : Math.min(100, 100 - usedPct);
    const mixUnknown = isMissing(ib.warmed) && isMissing(ib.warming) && isMissing(ib.new);
    const L = linksOf(d);

    return `
      <p class="tile-kicker">Today’s capacity</p>
      <h2>How much is left</h2>
      <p class="lede">Production math is known. Remaining is not, until sends today are read.</p>
      <div class="battery ${unknown ? "is-unknown" : ""}" aria-hidden="true">
        ${unknown ? "" : `<i class="used" style="width:${usedPct}%"></i><i class="left" style="width:${leftPct}%"></i>`}
      </div>
      <div class="metric-row"><span>Sent today</span><b>${valBtn(day.sends, "kpi:sends")}</b></div>
      <div class="metric-row"><span>Remaining</span><b>${valBtn(rem, "kpi:remaining")}</b></div>
      <div class="metric-row"><span>Weekday production</span><b>${plain(ib.active)} × ${plain(ib.per_mailbox_day)} = ${plain(cap.weekday_ceiling)}</b></div>
      <div class="metric-row"><span>Warmup mix</span><b>${mixUnknown ? valBtn(null, "kpi:inboxes") : `warmed ${plain(ib.warmed)} · warming ${plain(ib.warming)} · new ${plain(ib.new)}`}</b></div>
      <p class="src">${esc(cap.source || ib.source || UNKNOWN)}. New boxes: ${plain(ib.warmup_days)}-day warmup.</p>
      <div class="src-dock" style="margin-top:10px">${ext(L.salesforge, "Salesforge")}${ext(L.warmforge, "Warmforge")}</div>`;
  }

  function campaignCard(c, compact) {
    if (!c) return emptyState("No observed campaign.");
    return `
      <button type="button" class="camp-hit" data-open="campaign:${esc(c.id || "")}">
        <p class="tile-kicker">${esc(c.channel || "email")} · ${esc(c.status || UNKNOWN)}</p>
        <h3>${esc(c.name || UNKNOWN)} <span class="unknown" style="font-style:normal;color:var(--faint)">/ ${esc(c.id || UNKNOWN)}</span></h3>
        <div class="camp-metrics">
          <div><span>Contacted</span><b>${val(c.contacted)}</b></div>
          <div><span>Sent</span><b>${val(c.sent)}</b></div>
          <div><span>Delivered</span><b>${val(c.delivered)}</b></div>
          <div><span>Replies</span><b>${val(c.replies)}</b></div>
          <div><span>Booked</span><b>${val(c.booked)}</b></div>
          <div><span>Bounce</span><b>${val(c.bounce)}</b></div>
        </div>
        ${compact ? "" : `<p style="margin:0;font-size:13px;color:var(--muted)">${esc(c.insight || "")}</p>`}
      </button>
      ${c.url ? `<div class="src-dock" style="margin-top:10px">${ext(c.url, "Open in Salesforge")}</div>` : ""}
      ${sourceLine(c.source)}`;
  }

  function testBoard(d) {
    const rows = motionOf(d);
    if (!rows.length) return emptyState("Test surface is empty.");
    return `<div class="test-board">${rows.map((r) => {
      const st = (r.status || "not_started").replace(/-/g, "_");
      const open = r.url && r.url.indexOf("#radar/") >= 0
        ? `radar:${r.url.split("#radar/")[1]}`
        : `motion:${r.id || r.label}`;
      return `<button type="button" class="test-chip ${esc(st)}" data-open="${esc(open)}">
        <div style="display:flex;justify-content:space-between;gap:6px">
          <span class="pill ${esc(st)}">${esc((r.status || UNKNOWN).replace(/_/g, " "))}</span>
          <span class="kind">${esc(r.kind || UNKNOWN)}</span>
        </div>
        <h3>${esc(r.label || UNKNOWN)}</h3>
        <p>${esc(r.note || "")}</p>
      </button>`;
    }).join("")}</div>`;
  }

  function goalTrack(goals) {
    if (!goals || !goals.length) return emptyState("No monthly goals in this snapshot.");
    return goals.map((g) => {
      const missing = isMissing(g.progress);
      const pct = missing ? 0 : Math.max(0, Math.min(100, Number(g.progress)));
      return `<article>
        <div style="display:flex;justify-content:space-between;gap:8px">
          <h3 style="margin:0;font-size:15px">${esc(g.label || UNKNOWN)}</h3>
          <span class="pill">${esc(g.status || UNKNOWN)}</span>
        </div>
        <p class="lede">Target ${esc(g.target || UNKNOWN)} · baseline ${plain(g.baseline)}</p>
        <div class="goal-track ${missing ? "unknown-track" : ""}">${missing ? "" : `<div class="goal-fill" style="width:${pct}%"></div>`}</div>
        <p class="src">Progress ${val(g.progress)}${missing ? "" : "%"} · ${esc(g.note || "")}</p>
      </article>`;
    }).join("");
  }

  function radarItem(id, d) {
    const items = ((d.gtm_radar || {}).items) || [];
    return items.find((x) => x.id === id) || null;
  }

  function hero(d) {
    const fun = d.funnel_baseline || {};
    const day = d.daily || {};
    const meta = d.meta || {};
    const rem = remainingToday(d);

    document.title = `${meta.brand || "Orchidea"} · ${meta.title || "Outbound & GTM Ops"}`;
    document.getElementById("brand-name").textContent = meta.brand || "Orchidea";
    document.getElementById("subtitle").textContent = `${meta.partner || "Growth Partner"} · ops board`;
    document.getElementById("hero-window").innerHTML =
      `<strong>${esc(meta.timezone || UNKNOWN)}</strong><span>as of ${esc(day.as_of || meta.generated_on || UNKNOWN)}</span>`;

    document.getElementById("hero-stats").innerHTML = [
      `<button type="button" class="kpi miss" data-open="kpi:replies">
        <div class="k">Human replies</div>
        <div class="v">${val(fun.human_replies_non_ooo)}</div>
        <div class="s">qualified ${val(fun.qualified_positive_replies)}</div>
      </button>`,
      `<button type="button" class="kpi warn" data-open="kpi:remaining">
        <div class="k">Remaining today</div>
        <div class="v">${val(rem)}</div>
        <div class="s">sends today ${val(day.sends)} · delivered ${val(day.delivered)}</div>
      </button>`,
      `<button type="button" class="kpi" data-open="kpi:inboxes">
        <div class="k">Inboxes</div>
        <div class="v">${val(inboxesOf(d).active)}</div>
        <div class="s">warmup mix unread</div>
      </button>`
    ].join("");
  }

  function boardToday(d) {
    const ex = d.exec || {};
    const next = (d.daily && d.daily.decisions_needed) || [];
    const bn = d.bottlenecks || [];
    const camp = (d.campaigns || [])[0];
    const L = linksOf(d);

    return `
      <div class="brief">
        <p>${esc(ex.situation || UNKNOWN)}</p>
        ${next[0] ? `<button type="button" class="now-btn" data-open="action:0" title="${esc(next[0])}">Focus now<i>${ARROW}</i></button>` : ""}
      </div>
      <div class="bento">
        <article class="tile span-8 accent-conv">
          <p class="tile-kicker">Journey</p>
          <h2>Where the control dies</h2>
          <p class="lede">Hatched is unread. Red is observed zero. Click a step.</p>
          ${funnelViz(d)}
        </article>
        <article class="tile span-4 accent-ops">
          <p class="tile-kicker">Do this</p>
          <h2>Focus now</h2>
          <div class="stack">
            ${bn.slice(0, 3).map((b, i) => `
              <button type="button" class="rank-btn" data-open="bottleneck:${esc(b.rank || i + 1)}">
                <div class="row">
                  <span class="rank">${esc(b.rank || i + 1)}</span>
                  <div>
                    <span class="pill ${esc(b.type || "ops")}">${esc(b.type || UNKNOWN)}</span>
                    <strong>${esc(b.item || UNKNOWN)}</strong>
                    <p>${esc(b.unblock || "")}</p>
                  </div>
                </div>
              </button>`).join("")}
            <button type="button" class="action-btn" data-tab-jump="focus">
              <strong>All gaps on Focus</strong>
              <p>Name, journey seat, unblock, and the test we should not run yet.</p>
            </button>
          </div>
        </article>
        <article class="tile span-7">
          <p class="tile-kicker">Live campaign</p>
          <h2>Observed control</h2>
          <p class="lede">Only campaigns with a provider read. Nothing invented.</p>
          ${campaignCard(camp, true)}
        </article>
        <article class="tile span-5">${capacityTile(d)}</article>
        <article class="tile span-12">
          <p class="tile-kicker">Systems of record</p>
          <h2>Open the live surface</h2>
          <p class="lede">This board never replaces Attio, Salesforge, or Notion. Unknown means the provider was not read.</p>
          <div class="src-dock">
            ${ext(L.attio, "Attio · identity")}
            ${ext(L.salesforge, "Salesforge · execution")}
            ${ext(L.notion, "Notion · approvals")}
            ${ext(L.warmforge, "Warmforge · inboxes")}
            ${ext(L.dashboard, "This report")}
          </div>
        </article>
      </div>`;
  }

  function boardWeek(d) {
    const w = d.weekly || {};
    const camp = (d.campaigns || [])[0];
    const insights = (w.insights && w.insights.length) ? w.insights : (w.notes || []);
    const filled = [
      ["Keep", w.keep],
      ["Kill", w.kill],
      ["Scale", w.scale],
      ["Test", w.test]
    ].filter((b) => b[1] && b[1].length);

    return `
      <div class="sec">
        <p class="sec-kicker">Weekly operating review</p>
        <h2>${esc(w.label || "This week")}</h2>
        <p>The journey lives on Today. This grain is what we learned from the observed campaign and the idle test surface.</p>
      </div>
      <div class="bento">
        <article class="tile span-7">
          <p class="tile-kicker">Takeaways</p>
          <h2>What a GTM lead would brief</h2>
          ${insights.length ? `<ol class="takeaways">${insights.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>` : emptyState("No takeaways.")}
          ${sourceLine(w.source)}
        </article>
        <article class="tile span-5">
          <p class="tile-kicker">Campaign x-ray</p>
          <h2>C1-N1</h2>
          ${campaignCard(camp, false)}
        </article>
        <article class="tile span-12">
          <p class="tile-kicker">Test surface</p>
          <h2>Live vs idle</h2>
          <p class="lede">Untested channels are a bottleneck and an option. Click a tile for the matching Radar note.</p>
          ${testBoard(d)}
        </article>
        ${filled.length ? `<article class="tile span-12"><p class="tile-kicker">Keep / kill / scale</p><div class="test-board">${filled.map(([title, items]) =>
          `<div class="test-chip"><h3>${esc(title)}</h3><ul class="takeaways">${items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`
        ).join("")}</div></article>` : ""}
      </div>`;
  }

  function boardMonth(d) {
    const m = d.monthly || {};
    const cap = d.capacity || {};
    const ib = inboxesOf(d);
    const exp = d.experiments || [];

    return `
      <div class="sec">
        <p class="sec-kicker">Monthly</p>
        <h2>${esc(m.label || "This month")}</h2>
        <p>Goal tracking, not a ROAS score. Remaining-to-capacity stays unknown until Analyst writes monthly volume.</p>
      </div>
      <div class="bento">
        <article class="tile span-7">
          <p class="tile-kicker">North star</p>
          <h2>Are we tracking the offer?</h2>
          ${goalTrack(m.goals)}
        </article>
        <article class="tile span-5">
          <p class="tile-kicker">Month volume</p>
          <h2>Remaining to capacity</h2>
          <div class="metric-row"><span>Sends (month)</span><b>${val(m.sends)}</b></div>
          <div class="metric-row"><span>Capacity used</span><b>${val(m.capacity_used)}</b></div>
          <div class="metric-row"><span>Remaining</span><b>${val(m.remaining_to_capacity)}</b></div>
          <p class="src">Production ${plain(ib.active)} × ${plain(ib.per_mailbox_day)} / weekday. Scale target ${plain(cap.scale_target_day)} is context.</p>
        </article>
        <article class="tile span-7">
          <p class="tile-kicker">Next bets</p>
          <h2>What we will try</h2>
          ${m.next_bets && m.next_bets.length ? `<ol class="next-list">${m.next_bets.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>` : emptyState("Nothing queued.")}
        </article>
        <article class="tile span-5">
          <p class="tile-kicker">Our experiments</p>
          <h2>Proposed is not live</h2>
          ${exp.length ? exp.map((e) => `
            <button type="button" class="action-btn" data-open="experiment:${esc(e.id || "")}">
              <span class="pill proposed">${esc((e.status || UNKNOWN).replace(/_/g, " "))}</span>
              <strong>${esc(e.id || UNKNOWN)}</strong>
              <p>Control ${esc(e.control || UNKNOWN)}. ${esc(e.note || "")}</p>
            </button>`).join("") : emptyState("No experiments.")}
        </article>
        <article class="tile span-12">
          <p class="tile-kicker">Month takeaways</p>
          ${(m.insights && m.insights.length) ? `<ul class="takeaways">${m.insights.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : emptyState("No takeaways.")}
          ${sourceLine(m.source)}
        </article>
      </div>`;
  }

  function board(d, grain) {
    const g = grain || "today";
    const offer = (d.meta && d.meta.offer_live) || "";
    return `
      <div class="grain">
        <div class="grain-switch" role="tablist" aria-label="Time grain">
          <button type="button" data-grain="today" aria-selected="${g === "today"}">Today</button>
          <button type="button" data-grain="week" aria-selected="${g === "week"}">Week</button>
          <button type="button" data-grain="month" aria-selected="${g === "month"}">Month</button>
        </div>
        <p class="offer-chip">${esc(offer)}</p>
      </div>
      ${g === "week" ? boardWeek(d) : g === "month" ? boardMonth(d) : boardToday(d)}`;
  }

  function fleet(d) {
    const bots = d.fleet || [];
    const paused = d.paused_routines || [];
    const counts = { live: 0, paused: 0, draft: 0 };
    bots.forEach((b) => {
      const st = (b.lifecycle || "draft").toLowerCase();
      counts[st] = (counts[st] || 0) + 1;
    });

    return `
      <div class="sec">
        <p class="sec-kicker">Fleet</p>
        <h2>${bots.length} bots. Status is operational, not a KPI of zero.</h2>
        <p>Actual stays unknown until a provider read-back. Paused means the weekday routine is not running. Qualification is not in this fleet.</p>
      </div>
      <div class="fleet-legend">
        <span class="pill live">Live ${counts.live || 0}</span>
        <span class="pill paused">Paused ${counts.paused || 0}</span>
        <span class="pill draft">Draft ${counts.draft || 0}</span>
      </div>
      <div class="bot-grid" style="margin-top:12px">${bots.map((b) => {
        const st = (b.lifecycle || "draft").toLowerCase();
        const working = isMissing(b.working)
          ? (st === "paused" ? "paused · routine not running" : UNKNOWN)
          : b.working;
        return `<button type="button" class="bot ${esc(st)}" data-open="bot:${esc(b.id || b.name)}">
          <div class="bot-top">
            <h3>${esc(b.name || UNKNOWN)}</h3>
            <span class="pill ${esc(st)}">${esc(st)}</span>
          </div>
          <p class="bot-job">${esc(b.job || UNKNOWN)}</p>
          <div class="bot-kpi"><span>KPI it tracks</span><b>${esc(b.kpi || b.target || UNKNOWN)}</b></div>
          <div class="bot-stats">
            <div><span>Actual</span><b>${val(b.actual)}</b></div>
            <div><span>Working?</span><b>${esc(String(working))}</b></div>
          </div>
          <p class="bot-out"><span>Last outcome</span>${esc(b.last_outcome || UNKNOWN)}</p>
          <p class="bot-id">${esc(b.id || UNKNOWN)} · ${esc(b.mode || UNKNOWN)}</p>
        </button>`;
      }).join("")}</div>
      ${paused.length ? `<div class="note-bar">Paused routines: ${paused.map((p) => esc(`${p.owner} · ${p.routine}`)).join(" · ")}</div>` : ""}`;
  }

  function focusBoard(d) {
    const items = d.open_items || [];
    const bn = d.bottlenecks || [];
    return `
      <div class="sec">
        <p class="sec-kicker">Focus</p>
        <h2>The gap, where it sits, the unblock, the test we should not fake.</h2>
        <p>Overview shows the top three. This page is the full consultative stack, once, not restated as bullet twins.</p>
      </div>
      <div class="focus-stack">${bn.map((b, i) => `
        <article class="focus-card" data-open="bottleneck:${esc(b.rank || i + 1)}" role="button" tabindex="0">
          <div class="focus-gap">
            <div class="focus-kicker">
              <span class="rank">${esc(b.rank || i + 1)}</span>
              <span class="pill ${esc(b.type || "ops")}">${esc(b.type || UNKNOWN)}</span>
            </div>
            <h3>${esc(b.item || UNKNOWN)}</h3>
            <p>${esc(b.gap || "")}</p>
          </div>
          <div><h4>Where it sits</h4><p>${esc(b.journey || UNKNOWN)}</p></div>
          <div><h4>Unblock</h4><p>${esc(b.unblock || UNKNOWN)}</p></div>
          <div class="focus-test"><h4>Test we should / should not run</h4><p>${esc(b.test || UNKNOWN)}</p></div>
        </article>`).join("")}</div>
      <article class="tile" style="margin-top:12px">
        <p class="tile-kicker">Do next</p>
        <ol class="next-list">${items.map((t, i) => `<li><button type="button" class="unknown-btn" style="font-style:normal;color:inherit;font-weight:650" data-open="action:${i}">${esc(t)}</button></li>`).join("")}</ol>
      </article>`;
  }

  function radar(d, filter) {
    const pack = d.gtm_radar || {};
    const items = pack.items || [];
    const active = filter || "all";
    const channels = ["all", ...Array.from(new Set(items.map((x) => x.channel).filter(Boolean)))];
    const shown = active === "all" ? items : items.filter((x) => x.channel === active);

    return `
      <div class="radar-head">
        <div class="sec" style="margin:0">
          <p class="sec-kicker">Radar</p>
          <h2>What other GTM operators are testing</h2>
          <p>Research bot overwrites <code>gtm_radar</code> only. Confidence is labelled. Vendor claims stay vendor. Click a card for the full why-for-us and the source.</p>
        </div>
        <div class="radar-filters">${channels.map((c) =>
          `<button type="button" data-radar-filter="${esc(c)}" aria-selected="${c === active}">${esc(c)}</button>`
        ).join("")}</div>
      </div>
      <div class="radar-grid">${shown.map((item) => `
        <button type="button" class="radar-card" data-open="radar:${esc(item.id)}">
          <div class="meta">
            <span class="pill ${esc(item.status || "watch")}">${esc(item.status || "watch")}</span>
            <span class="pill ${esc(item.confidence || "vendor")}">${esc((item.confidence || "vendor").replace(/_/g, " "))}</span>
            <span class="pill">${esc(item.channel || "")}</span>
          </div>
          <h3>${esc(item.title || UNKNOWN)}</h3>
          <div class="metric">${esc(item.metric || "")}</div>
          ${proofViz(item.proof)}
          <p class="why"><strong>For us.</strong> ${esc(item.why_for_us || item.summary || "")}</p>
          <p class="src">${esc(item.source_name || "")} · ${esc(item.published || "")}</p>
        </button>`).join("") || emptyState("Radar is empty. Research bot fills gtm_radar.items[].")}</div>
      ${sourceLine(pack.source)}`;
  }

  function footer(d) {
    const meta = d.meta || {};
    const systems = meta.systems || {};
    document.getElementById("footer").innerHTML = `
      <p>${esc(meta.brand || "Orchidea")} · snapshot ${esc(meta.generated_on || UNKNOWN)} · ${esc(meta.timezone || UNKNOWN)} · ${esc(systems.identity || UNKNOWN)} / ${esc(systems.execution || UNKNOWN)} / ${esc(systems.approvals || UNKNOWN)}.</p>
      <p>${(meta.notes || []).map(esc).join(" ")}</p>
      <p>Analyst overwrites ops metrics. Research bot overwrites Radar. null is ${UNKNOWN}, never 0. Qualification is deleted. No Salesforce.</p>`;
  }

  function closeDrawer() {
    const el = document.getElementById("drawer");
    el.hidden = true;
    document.body.classList.remove("drawer-open");
  }

  function openDrawer(kicker, title, html) {
    document.getElementById("drawer-kicker").textContent = kicker || "";
    document.getElementById("drawer-title").textContent = title || "";
    document.getElementById("drawer-body").innerHTML = html;
    document.getElementById("drawer").hidden = false;
    document.body.classList.add("drawer-open");
    const closeBtn = document.querySelector("[data-close-drawer].icon-btn");
    if (closeBtn) closeBtn.focus();
  }

  function inspect(key, d) {
    const i = key.indexOf(":");
    const kind = i === -1 ? key : key.slice(0, i);
    const id = i === -1 ? "" : key.slice(i + 1);
    const L = linksOf(d);
    const fun = d.funnel_baseline || {};
    const day = d.daily || {};
    const cap = d.capacity || {};
    const ib = inboxesOf(d);

    if (kind === "kpi" && id === "replies") {
      openDrawer("Headline KPI", "Human replies", `
        <p>This is the conversion question. Observed <b>0</b> is not unknown. Qualified positive remains unread.</p>
        <div class="metric-row"><span>Human replies (non-OOO)</span><b>${val(fun.human_replies_non_ooo)}</b></div>
        <div class="metric-row"><span>Qualified positive</span><b>${val(fun.qualified_positive_replies)}</b></div>
        <div class="metric-row"><span>2026 average (Instantly)</span><b>3.43%</b></div>
        <p>Do not activate EXP-MSG-001 on zero replies while delivered is unknown. That test teaches nothing.</p>
        ${ext(L.salesforge, "Open Salesforge")}
        ${ext("#radar/radar-instantly-2026", "See the 2026 reply ladder")}`);
      return;
    }
    if (kind === "kpi" && id === "remaining") {
      openDrawer("Operating number", "Remaining to today’s capacity", `
        <p>Remaining = weekday production − sends today. Both must be numeric. A missing Salesforge read stays ${UNKNOWN}, never 0.</p>
        <div class="metric-row"><span>Sends today</span><b>${val(day.sends)}</b></div>
        <div class="metric-row"><span>Delivered today</span><b>${val(day.delivered)}</b></div>
        <div class="metric-row"><span>Remaining</span><b>${val(remainingToday(d))}</b></div>
        <div class="metric-row"><span>Weekday production</span><b>${plain(cap.weekday_ceiling)}</b></div>
        <p>The 200 ceiling is how capacity is made (${plain(ib.active)} × ${plain(ib.per_mailbox_day)}). It is not the headline.</p>
        ${ext(L.salesforge, "Read sends in Salesforge")}`);
      return;
    }
    if (kind === "kpi" && id === "inboxes") {
      openDrawer("Supply", "Inboxes and warmup", `
        <p>Active count is seeded. Warmup mix must be read. Do not invent a 20/5 split from 10 actives.</p>
        <div class="metric-row"><span>Active</span><b>${val(ib.active)}</b></div>
        <div class="metric-row"><span>Warmed</span><b>${val(ib.warmed)}</b></div>
        <div class="metric-row"><span>Warming</span><b>${val(ib.warming)}</b></div>
        <div class="metric-row"><span>New</span><b>${val(ib.new)}</b></div>
        <div class="metric-row"><span>Warmup days</span><b>${plain(ib.warmup_days)}</b></div>
        ${sourceLine(ib.source)}
        ${ext(L.warmforge, "Open Warmforge")}
        ${ext("#radar/radar-bounce-warmup", "Bounce and warmup Radar note")}`);
      return;
    }
    if (kind === "kpi" && id === "sends") {
      inspect("kpi:remaining", d);
      return;
    }

    if (kind === "stage") {
      const stages = journeyStages(fun);
      const s = stages.find((x) => x.key === id) || stages[0];
      openDrawer("Journey step", s.label, `
        <p>${esc(s.def)}</p>
        <div class="metric-row"><span>Value</span><b>${val(s.v)}</b></div>
        <div class="metric-row"><span>Control</span><b>${esc(fun.control || UNKNOWN)}</b></div>
        ${sourceLine(fun.source)}
        <p>Contacted ≠ enrolled ≠ sent ≠ delivered ≠ replied.</p>
        ${ext(L.salesforge, "Open Salesforge")}
        ${id === "replies" ? ext("#radar/radar-instantly-2026", "Benchmark reply ladder") : ""}
        ${id === "delivered" ? ext("#radar/radar-bounce-warmup", "Deliverability Radar") : ""}`);
      return;
    }

    if (kind === "campaign") {
      const c = (d.campaigns || []).find((x) => String(x.id) === String(id)) || (d.campaigns || [])[0];
      if (!c) return;
      openDrawer("Campaign", `${c.name} / ${c.id}`, `
        <div class="camp-metrics">
          <div><span>Contacted</span><b>${val(c.contacted)}</b></div>
          <div><span>Sent</span><b>${val(c.sent)}</b></div>
          <div><span>Delivered</span><b>${val(c.delivered)}</b></div>
          <div><span>Replies</span><b>${val(c.replies)}</b></div>
          <div><span>Booked</span><b>${val(c.booked)}</b></div>
          <div><span>Bounce</span><b>${val(c.bounce)}</b></div>
        </div>
        <p>${esc(c.insight || "")}</p>
        ${sourceLine(c.source)}
        ${ext(c.url, "Open in Salesforge")}`);
      return;
    }

    if (kind === "bot") {
      const b = (d.fleet || []).find((x) => String(x.id) === String(id) || x.name === id);
      if (!b) return;
      openDrawer(b.lifecycle || "bot", b.name, `
        <p>${esc(b.job || "")}</p>
        <div class="metric-row"><span>KPI</span><b>${esc(b.kpi || b.target || UNKNOWN)}</b></div>
        <div class="metric-row"><span>Actual</span><b>${val(b.actual)}</b></div>
        <div class="metric-row"><span>Working</span><b>${val(b.working)}</b></div>
        <div class="metric-row"><span>Mode</span><b>${esc(b.mode || UNKNOWN)}</b></div>
        <p>${esc(b.last_outcome || "")}</p>
        ${b.url ? ext(b.url, "Open live surface") : "<p>No live URL on this bot yet. Analyst can set fleet[].url.</p>"}`);
      return;
    }

    if (kind === "bottleneck" || kind === "action") {
      const bn = d.bottlenecks || [];
      const idx = kind === "action" ? 0 : Math.max(0, Number(id) - 1);
      const b = bn[idx] || bn[0];
      if (!b) return;
      openDrawer(`Gap ${b.rank || ""}`, b.item, `
        <p>${esc(b.gap || "")}</p>
        <h3 style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--faint)">Where it sits</h3>
        <p>${esc(b.journey || "")}</p>
        <h3 style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:var(--faint)">Unblock</h3>
        <p>${esc(b.unblock || "")}</p>
        <div class="focus-test"><h4>Test</h4><p>${esc(b.test || "")}</p></div>
        <button type="button" class="now-btn" data-tab-jump="focus" style="margin-top:12px">Open Focus</button>`);
      return;
    }

    if (kind === "experiment") {
      const e = (d.experiments || []).find((x) => x.id === id);
      if (!e) return;
      openDrawer("Our experiment", e.id, `
        <p>Status: ${esc((e.status || "").replace(/_/g, " "))}. Control ${esc(e.control || UNKNOWN)}.</p>
        <p>${esc(e.note || "")}</p>
        ${ext(e.url, "Related Radar note")}
        ${ext("#radar/radar-cta-hybrid", "CTA evidence")}
        ${ext("#radar/radar-ab-before-copy", "Why not to activate yet")}`);
      return;
    }

    if (kind === "motion") {
      const m = motionOf(d).find((x) => x.id === id);
      if (!m) return;
      openDrawer(m.kind || "motion", m.label, `
        <p>Status: ${esc((m.status || "").replace(/_/g, " "))}.</p>
        <p>${esc(m.note || "")}</p>
        ${m.url ? ext(m.url, "Open related note") : ""}`);
      return;
    }

    if (kind === "radar") {
      const item = radarItem(id, d);
      if (!item) return;
      openDrawer(`${item.channel} · ${item.confidence}`.replace(/_/g, " "), item.title, `
        <div class="meta" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
          <span class="pill ${esc(item.status)}">${esc(item.status)}</span>
          <span class="pill ${esc(item.confidence)}">${esc((item.confidence || "").replace(/_/g, " "))}</span>
        </div>
        <p>${esc(item.summary || "")}</p>
        <p class="why"><strong>For Orchidea.</strong> ${esc(item.why_for_us || "")}</p>
        ${proofViz(item.proof)}
        <p class="src">${esc(item.source_name)} · ${esc(item.published || "")} · ${esc(item.metric || "")}</p>
        ${ext(item.url, "Open the source")}`);
      return;
    }

    if (kind === "unknown") {
      openDrawer("Unknown ≠ 0", "Why this is blank", `
        <p><b>null</b> means the provider was not read, or the field is not known. The UI prints “unknown”.</p>
        <p><b>0</b> means we observed zero, for example human replies on C1-N1.</p>
        <p>Never coerce a missing Salesforge / Attio / Notion read to 0. Analyst first-run is what fills today’s sends, remaining, delivered, and inbox mix.</p>`);
    }
  }

  let grain = "today";
  let radarFilter = "all";

  function showTab(name, d) {
    const tab = name === "open" ? "focus" : name === "daily" ? "board" : name;
    document.querySelectorAll(".tocnav button").forEach((b) =>
      b.setAttribute("aria-selected", String(b.dataset.tab === tab))
    );
    document.querySelectorAll(".panel").forEach((p) => {
      const on = p.id === "panel-" + tab;
      p.classList.toggle("active", on);
      p.hidden = !on;
    });
    document.body.className = `tab-${tab} grain-${grain}` + (document.getElementById("drawer").hidden ? "" : " drawer-open");
    const hash = tab === "board" && grain !== "today" ? grain : tab;
    const cur = (location.hash || "").replace("#", "").split("/")[0];
    if (cur !== hash) history.replaceState(null, "", "#" + hash);
  }

  function parseHash() {
    const raw = (location.hash || "#board").replace("#", "");
    const [left, right] = raw.split("/");
    if (left === "week" || left === "weekly") return { tab: "board", grain: "week", radarId: null };
    if (left === "month" || left === "monthly") return { tab: "board", grain: "month", radarId: null };
    if (left === "daily") return { tab: "board", grain: "today", radarId: null };
    if (left === "open") return { tab: "focus", grain, radarId: null };
    if (left === "radar") return { tab: "radar", grain, radarId: right || null };
    if (left === "fleet" || left === "focus" || left === "board") return { tab: left, grain, radarId: null };
    return { tab: "board", grain: "today", radarId: null };
  }

  function render(d) {
    hero(d);
    document.getElementById("panel-board").innerHTML = board(d, grain);
    document.getElementById("panel-fleet").innerHTML = fleet(d);
    document.getElementById("panel-focus").innerHTML = focusBoard(d);
    document.getElementById("panel-radar").innerHTML = radar(d, radarFilter);
    footer(d);
  }

  function boot(d) {
    const parsed = parseHash();
    grain = parsed.grain;
    render(d);
    showTab(parsed.tab, d);
    if (parsed.radarId) inspect("radar:" + parsed.radarId, d);

    document.body.addEventListener("click", (e) => {
      const close = e.target.closest("[data-close-drawer]");
      if (close) { closeDrawer(); return; }

      const jump = e.target.closest("[data-tab-jump]");
      if (jump) {
        closeDrawer();
        showTab(jump.getAttribute("data-tab-jump"), d);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const tabBtn = e.target.closest(".tocnav [data-tab]");
      if (tabBtn) {
        if (tabBtn.dataset.tab === "board") grain = "today";
        showTab(tabBtn.dataset.tab, d);
        window.scrollTo({ top: document.querySelector(".page").offsetTop - 8, behavior: "smooth" });
        return;
      }

      const gBtn = e.target.closest("[data-grain]");
      if (gBtn) {
        grain = gBtn.dataset.grain;
        document.getElementById("panel-board").innerHTML = board(d, grain);
        showTab("board", d);
        return;
      }

      const fBtn = e.target.closest("[data-radar-filter]");
      if (fBtn) {
        radarFilter = fBtn.dataset.radarFilter;
        document.getElementById("panel-radar").innerHTML = radar(d, radarFilter);
        return;
      }

      const open = e.target.closest("[data-open]");
      if (open) {
        const key = open.dataset.open;
        if (key.indexOf("radar:") === 0) {
          showTab("radar", d);
          history.replaceState(null, "", "#" + key.replace(":", "/"));
        }
        inspect(key, d);
      }
    });

    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDrawer();
      if (e.key === "Enter" && e.target.closest("[data-open][role='button']")) {
        const key = e.target.closest("[data-open]").dataset.open;
        if (key) inspect(key, d);
      }
    });

    window.addEventListener("hashchange", () => {
      const p = parseHash();
      grain = p.grain;
      render(d);
      showTab(p.tab, d);
      if (p.radarId) inspect("radar:" + p.radarId, d);
      else closeDrawer();
    });
  }

  if (window.ORCHIDEA_OPS) boot(window.ORCHIDEA_OPS);
  else {
    document.body.insertAdjacentHTML(
      "afterbegin",
      "<p class='load-error'>data.js did not load. Serve this folder with python3 -m http.server 43147</p>"
    );
  }
})();
