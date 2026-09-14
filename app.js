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
    const chartH = 120;

    const known = stages.map((s) => (isMissing(s.v) ? 0 : Number(s.v)));
    const max = Math.max(1, ...known);
    const nodes = stages.map((s, i) => {
      const missingV = isMissing(s.v);
      const zero = !missingV && Number(s.v) === 0;
      const prev = i === 0 ? null : stages[i - 1].v;
      let conv = "";
      if (i === 0) {
        conv = "people";
      } else {
        conv = s.key === "sent" ? "messages" : s.key === "contacted" ? "people" : "baseline";
      }
      const h = missingV
        ? 56
        : zero
          ? 0
          : Math.max(0, Math.round((Number(s.v) / max) * 110));
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
    const f = d.funnel_baseline || {}, day = d.daily || {}, meta = d.meta || {};
    const bots = d.fleet || [], prospect = bots.find(b => /prospect/i.test(b.name));
    const date = day.as_of || meta.generated_on;
    const eligibleLabel = typeof prospect?.actual === "string" ? prospect.actual.replace(/^eligible\s+/i, "") : prospect?.actual;
    const today = new Intl.DateTimeFormat('en-CA', {timeZone: meta.timezone || 'Africa/Johannesburg'}).format(new Date());
    document.title = 'Orchidea · Daily brief';
    document.getElementById('brand-name').textContent = '';
    document.getElementById('subtitle').textContent = 'Daily brief';
    document.getElementById('hero-window').innerHTML = `<strong><span class="fresh-dot ${date !== today ? 'stale' : ''}"></span> Snapshot ${esc(date || UNKNOWN)}</strong><span>${date === today ? 'Today’s snapshot' : 'Check snapshot freshness'} · ${esc(meta.timezone || UNKNOWN)}</span>`;
    document.getElementById('hero-stats').innerHTML = [
      ['Today’s sends', val(day.sends), `of ${plain((d.capacity || {}).weekday_ceiling)} configured capacity`, 'kpi:sends'],
      ['Human replies', val(f.human_replies_non_ooo), 'Cumulative baseline · excludes out of office', 'kpi:replies'],
      ['Prospects loaded today', val(d.pipeline?.eligible ?? eligibleLabel), prospect?.target || prospect?.kpi || 'Daily target not supplied', prospect ? `bot:${prospect.id}` : 'unknown:pipeline'],
      ['Bots running', `${bots.filter(b => b.lifecycle === 'live').length}<small> / ${bots.length}</small>`, `${bots.filter(b => b.lifecycle === 'paused').length} paused · outcomes reviewed separately`, 'fleet-summary']
    ].map(([label,value,note,key]) => `<button class="kpi" data-open="${esc(key)}"><span class="k">${label}</span><span class="v">${value}</span><span class="s">${esc(note)}</span><span class="kpi-arrow">↗</span></button>`).join('');
  }

  function campaignPortfolio(d) {
    const all = d.campaigns || [];
    const statuses = ['all', ...new Set(all.map(c => c.status || 'unknown'))];
    const shown = all.filter(c => (campaignFilter === 'all' || c.status === campaignFilter) && `${c.name} ${c.id} ${c.channel}`.toLowerCase().includes(campaignSearch.toLowerCase()));
    return `<article class="tile portfolio span-12">
      <div class="section-heading"><div><p class="tile-kicker">Campaign portfolio</p><h2>Every campaign. One view.</h2><p class="lede">Latest observed totals, not today’s sends. Open a campaign for evidence.</p></div><span class="count-label">${all.length} campaigns</span></div>
      <div class="portfolio-tools"><div class="status-filters" aria-label="Filter campaigns">${statuses.map(st => `<button data-campaign-filter="${esc(st)}" aria-pressed="${campaignFilter === st}">${esc(st === 'all' ? 'All campaigns' : st)} <span>${st === 'all' ? all.length : all.filter(c => c.status === st).length}</span></button>`).join('')}</div><label class="campaign-search">Search<input type="search" id="campaign-search" placeholder="Name, ID or channel" value="${esc(campaignSearch)}"></label></div>
      <div class="table-scroll" tabindex="0" role="region" aria-label="Campaign performance"><table class="campaign-table"><thead><tr><th scope="col">Campaign</th><th scope="col">Status</th><th scope="col">Sent</th><th scope="col">Delivered</th><th scope="col">Replies</th><th scope="col">Booked</th><th scope="col">Bounces</th><th scope="col">Readout</th></tr></thead><tbody>${shown.map(c => `<tr><th scope="row"><button data-open="campaign:${esc(c.id)}" class="campaign-name">${esc(c.name)} <span>↗</span></button><small>${esc(c.channel)} · ${esc(c.id)}</small></th><td><span class="status-tag ${esc(c.status)}">${esc(c.status)}</span></td>${['sent','delivered','replies','booked','bounce'].map(k => `<td>${isMissing(c[k]) ? '<span class="data-dash" title="Not measured in this snapshot">—</span>' : val(c[k])}</td>`).join('')}<td><span class="readout ${c.status === 'live' && c.sent === 0 ? 'attention' : ''}">${c.status === 'live' ? c.sent === 0 ? 'No sends observed' : 'View results' : c.status === 'completed' ? 'Completed' : c.status === 'paused' ? 'Paused' : 'Not activated'}</span></td></tr>`).join('') || '<tr><td colspan="8" class="empty">No campaigns match these filters.</td></tr>'}</tbody></table></div>
      <div class="table-note"><span>— Not measured · 0 Observed zero · Live is the recorded activation state</span>${ext(linksOf(d).salesforge, 'Open Salesforge')}</div>
    </article>`;
  }

  function fleetSummary(d) {
    const bots = d.fleet || [];
    return `<article class="tile span-8"><div class="section-heading"><div><p class="tile-kicker">Bot accountability</p><h2>Is the work getting done?</h2></div><button class="text-button" data-tab-jump="fleet">View fleet ↗</button></div><div class="accountability">${bots.map(b => `<button class="accountability-row" data-open="bot:${esc(b.id)}"><span><strong>${esc(b.name)}</strong><small>${esc(b.kpi || b.target || 'Target not supplied')}</small></span><span class="bot-evidence">${val(b.actual)}</span><span class="status-tag ${esc(b.lifecycle)}">${esc(b.lifecycle || UNKNOWN)}</span></button>`).join('')}</div><p class="src">Operational status does not establish KPI attainment. Numeric actuals, targets and reporting periods are needed to score performance.</p></article>`;
  }

  function experimentList(d) {
    return (d.experiments || []).map(e => `<button class="experiment-row" data-open="experiment:${esc(e.id)}"><div><span class="status-tag ${esc(e.status)}">${esc((e.status || UNKNOWN).replace(/_/g,' '))}</span><h3>${esc(e.id)}</h3><p>${esc(e.note || '')}</p></div><span>↗</span></button>`).join('') || emptyState('No experiments recorded.');
  }

  function boardToday(d) {
    const bn = [...(d.bottlenecks || [])].sort((a,b) => a.rank-b.rank), ex = d.exec || {};
    const cap = d.capacity || {};
    const capPct = typeof cap.weekday_ceiling === 'number' && cap.scale_target_day > 0 ? Math.min(100,cap.weekday_ceiling/cap.scale_target_day*100) : null;
    return `<section class="executive-summary"><div><p class="tile-kicker">Your operating picture</p><h1>${bn.length ? 'Unblock today.<br>Build tomorrow.' : 'Your daily operating review.'}</h1><p>${bn.length ? esc(bn[0].item) + '. ' + esc(bn[0].unblock || '') : 'Review the latest results, campaign activity and next decisions.'}</p><button class="primary-button" data-tab-jump="focus">Review ${bn.length} priorities <span>↗</span></button></div><aside class="briefing-note"><span class="note-heading">Latest analyst briefing</span><p>${esc(ex.situation || 'No briefing supplied.')}</p><details><summary>What changed & evidence</summary><ul>${(ex.happening || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>${sourceLine(ex.source)}</details></aside></section>
      <div class="bento">
        ${campaignPortfolio(d)}
        <article class="tile span-8"><div class="section-heading"><div><p class="tile-kicker">Outbound results</p><h2>Where visibility breaks</h2><p class="lede">Cumulative baseline. People and messages are different units.</p></div><span class="status-tag draft">Baseline</span></div>${funnelViz(d)}<p class="data-note">Delivery and qualification must be measured before judging copy or calculating a reply conversion rate.</p></article>
        <article class="tile span-4"><p class="tile-kicker">Production readiness</p><h2>Capacity to grow</h2><div class="capacity-display"><strong>${val(cap.weekday_ceiling)}</strong><span>/ ${plain(cap.scale_target_day)}<br>target sends per weekday</span></div><div class="capacity-scale ${capPct === null ? 'unknown-track' : ''}">${capPct === null ? '' : `<i style="width:${capPct}%"></i>`}</div><div class="metric-row"><span>Sent today</span><b>${valBtn(d.daily?.sends,'kpi:sends')}</b></div><div class="metric-row"><span>Remaining today</span><b>${valBtn(remainingToday(d),'kpi:remaining')}</b></div><div class="metric-row"><span>Inbox warmup mix</span><b>${valBtn(inboxesOf(d).warmed,'kpi:inboxes')}</b></div><p class="src">Configured capacity, not achieved output. ${esc(cap.source || '')}</p></article>
        ${fleetSummary(d)}
        <article class="tile span-4"><p class="tile-kicker">Reporting coverage</p><h2>What we can’t judge yet</h2><div class="coverage-list">${[['Daily delivery',d.daily?.delivered],['Qualified replies',d.funnel_baseline?.qualified_positive_replies],['Meetings held',d.funnel_baseline?.booked_held],['Reviews completed',d.daily?.reviews_completed]].map(([label,v]) => `<div><span>${label}</span><b>${isMissing(v) ? 'Not measured' : val(v)}</b></div>`).join('')}</div><p class="data-note">The next analyst refresh needs these outcomes to close the daily review.</p></article>
        <article class="tile span-8"><p class="tile-kicker">Experiment agenda</p><h2>What to test next</h2><p class="lede">Recorded experiments and their current gates. Resolve execution gaps before interpreting results.</p>${experimentList(d)}</article>
        <article class="tile span-4"><p class="tile-kicker">Decisions for you</p><h2>Clear the next step</h2>${(d.daily?.decisions_needed || []).map((x,i) => `<button class="decision-link" data-open="decision:${i}"><span>${esc(x)}</span><span>↗</span></button>`).join('') || emptyState('No decisions recorded.')}<div class="src-dock">${ext(linksOf(d).attio,'Attio')}${ext(linksOf(d).notion,'Notion')}</div></article>
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
          <h2>${esc(camp?.name || "No observed campaign")}</h2>
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
        <div class="grain-switch" role="group" aria-label="Reporting period">
          <button type="button" data-grain="today" aria-pressed="${g === "today"}">Today</button>
          <button type="button" data-grain="week" aria-pressed="${g === "week"}">Week</button>
          <button type="button" data-grain="month" aria-pressed="${g === "month"}">Month</button>
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
        <h1>The team behind the numbers.</h1>
        <p>Review each bot’s responsibility, target and latest outcome. Running status alone does not mean a target was met.</p>
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
            <div><span>Execution verified?</span><b>${esc(String(working))}</b></div>
          </div>
          <p class="bot-out"><span>Last outcome</span>${esc(b.last_outcome || UNKNOWN)}</p>
          <p class="bot-id">${esc(b.id || UNKNOWN)} · ${esc(b.mode || UNKNOWN)}</p>
        </button>`;
      }).join("")}</div>
      ${paused.length ? `<div class="note-bar">Paused routines: ${paused.map((p) => esc(`${p.owner} · ${p.routine}`)).join(" · ")}</div>` : ""}`;
  }

  function focusBoard(d) {
    const bn = [...(d.bottlenecks || [])].sort((a,b) => a.rank-b.rank);
    return `<div class="page-heading"><div><p class="tile-kicker">Decision room</p><h1>Give today a clear direction.</h1><p>Work down the priorities. Each one connects a gap to the next action and its test boundary.</p></div><span class="large-count">${bn.length}<small>priorities</small></span></div>
      <div class="focus-layout"><div class="focus-stack">${bn.map((b,i) => `<details class="priority" ${i === 0 ? 'open' : ''}><summary><span class="priority-rank">${esc(b.rank || i+1).padStart(2,'0')}</span><div><span class="tile-kicker">${esc(b.type || 'Operations')}</span><h2>${esc(b.item)}</h2><p>${esc(b.gap || '')}</p></div><span class="expand-symbol">+</span></summary><div class="priority-body"><div class="priority-location"><span>Journey stage</span><strong>${esc(b.journey || UNKNOWN)}</strong></div><div class="action-path"><div><span class="step-dot"></span><h3>Next action</h3><p>${esc(b.unblock || UNKNOWN)}</p></div><div><span class="step-dot outline"></span><h3>Testing boundary</h3><p>${esc(b.test || UNKNOWN)}</p></div></div><button class="text-button" data-open="bottleneck:${esc(b.rank || i+1)}">Open full brief ↗</button></div></details>`).join('') || emptyState('No priorities recorded.')}</div>
      <aside class="focus-sidebar"><article class="tile"><p class="tile-kicker">Your decisions</p><h2>Awaiting direction</h2>${(d.daily?.decisions_needed || []).map((x,i) => `<button class="decision-link" data-open="decision:${i}">${esc(x)} <span>↗</span></button>`).join('') || emptyState('No decisions recorded.')}<p class="src">Actions in connected systems still require their normal approval workflow.</p></article><article class="tile"><p class="tile-kicker">Operating checklist</p><h2>Keep in view</h2><ol class="open-checklist">${(d.open_items || []).map((x,i) => `<li><button data-open="action:${i}">${esc(x)}</button></li>`).join('')}</ol></article></aside></div>`;
  }

  function radar(d, filter) {
    const pack = d.gtm_radar || {}, items = pack.items || [], active = filter || 'all';
    const channels = ['all', ...new Set(items.map(x => x.channel).filter(Boolean))];
    const shown = (active === 'all' ? [...items] : items.filter(x => x.channel === active)).sort((a,b) => String(b.published || '').localeCompare(String(a.published || '')));
    return `<div class="page-heading"><div><p class="tile-kicker">Research radar</p><h1>Outside signals.<br>Useful next moves.</h1><p>Research worth considering, with the evidence and what it means for Orchidea.</p></div><span class="large-count">${items.length}<small>signals tracked</small></span></div><div class="radar-layout"><aside class="radar-sidebar"><h2>Explore the feed</h2><div class="radar-filters">${channels.map(c => `<button data-radar-filter="${esc(c)}" aria-pressed="${c === active}">${esc(c === 'all' ? 'All signals' : c)}<span>${c === 'all' ? items.length : items.filter(x => x.channel === c).length}</span></button>`).join('')}</div><div class="radar-key"><h3>Read the evidence</h3><p><strong>Benchmark</strong> Broad reference data.</p><p><strong>Operator test</strong> A practitioner’s result.</p><p><strong>Vendor</strong> A provider’s claim.</p><p>These are external findings, not Orchidea results.</p></div></aside><div class="research-feed">${shown.map(item => `<article class="feed-item"><div class="feed-byline"><span class="source-avatar" aria-hidden="true">${esc((item.source_name || 'R').slice(0,1))}</span><div><strong>${esc(item.source_name || 'Source not supplied')}</strong><small>${esc(item.published || 'Date not supplied')} · ${esc(item.channel || '')}</small></div><span class="status-tag ${esc(item.status)}">${esc(item.status || 'watch')}</span></div><button class="feed-title" data-open="radar:${esc(item.id)}"><h2>${esc(item.title)}</h2><span>↗</span></button><p>${esc(item.summary || '')}</p>${item.proof ? `<div class="feed-evidence"><span class="evidence-label">${esc((item.confidence || 'vendor').replace(/_/g,' '))} · ${esc(item.metric || '')}</span>${proofViz(item.proof)}</div>` : ''}<div class="feed-implication"><span>For Orchidea</span><p>${esc(item.why_for_us || 'Application not yet assessed.')}</p></div><div class="feed-actions">${ext(item.url,'Read source')}<button class="text-button" data-open="radar:${esc(item.id)}">Review evidence ↗</button></div></article>`).join('') || emptyState('No research signals in this category.')}${sourceLine(pack.source)}</div></div>`;
  }

  function footer(d) {
    document.getElementById('footer').innerHTML = `<p>Orchidea / Daily brief</p><p>Snapshot ${esc(d.meta?.generated_on || UNKNOWN)} · ${esc(d.meta?.timezone || 'Africa/Johannesburg')}</p><div class="src-dock">${ext(linksOf(d).salesforge,'Salesforge')}${ext(linksOf(d).attio,'Attio')}${ext(linksOf(d).warmforge,'Warmforge')}</div>`;
  }
  let drawerTrigger = null;

  function closeDrawer() {
    const el = document.getElementById("drawer");
    el.hidden = true;
    document.body.classList.remove("drawer-open");
    if (drawerTrigger?.isConnected) drawerTrigger.focus();
  }

  function openDrawer(kicker, title, html) {
    if (document.getElementById("drawer").hidden) drawerTrigger = document.activeElement;
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

    if (kind === 'fleet-summary') { showTab('fleet', d); window.scrollTo({top:0,behavior:'smooth'}); return; }
    if (kind === 'action' || kind === 'decision') {
      const text = kind === 'decision' ? d.daily?.decisions_needed?.[Number(id)] : d.open_items?.[Number(id)];
      if (!text) return;
      openDrawer(kind === 'decision' ? 'Decision needed' : 'Operating checklist', text, `<p>This item is recorded in the ${esc(d.daily?.as_of || d.meta?.generated_on || UNKNOWN)} snapshot.</p>${sourceLine(d.daily?.source)}<p>Review the related priorities before applying changes in the connected system.</p><button class="primary-button" data-tab-jump="focus">Review priorities ↗</button>`);
      return;
    }
    if (kind === "kpi" && id === "replies") {
      openDrawer("Headline KPI", "Human replies", `
        <p>This is the conversion question. The cumulative human reply baseline is separate from campaign-level provider replies. Qualified positive remains unread.</p>
        <div class="metric-row"><span>Human replies (non-OOO)</span><b>${val(fun.human_replies_non_ooo)}</b></div>
        <div class="metric-row"><span>Qualified positive</span><b>${val(fun.qualified_positive_replies)}</b></div>
        ${sourceLine(fun.source)}
        <p>Do not activate EXP-MSG-001 on zero replies while delivered is unknown. Delivery is needed to interpret a reply rate.</p>
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
        ${b.url ? ext(b.url, "Open live surface") : "<p>No destination supplied for this bot.</p>"}`);
      return;
    }

    if (kind === "bottleneck" || kind === "action") {
      const bn = d.bottlenecks || [];
      const idx = kind === "action" ? 0 : Math.max(0, Number(id) - 1);
      const b = bn.find(x => String(x.rank) === id) || bn[idx];
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
        <p><b>null</b> means the provider was not read, or the field is not known. This metric has not been measured in the snapshot.</p>
        <p><b>0</b> means we observed zero, as distinct from an unread field.</p>
        <p>Never coerce a missing Salesforge / Attio / Notion read to 0. Analyst first-run is what fills today’s sends, remaining, delivered, and inbox mix.</p>`);
    }
  }

  let campaignFilter = "all";
  let campaignSearch = "";
  let grain = "today";
  let radarFilter = "all";

  function showTab(name, d) {
    const tab = name === "open" ? "focus" : name === "daily" ? "board" : name;
    document.querySelectorAll(".tocnav button").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.tab === tab))
    );
    document.querySelectorAll(".panel").forEach((p) => {
      const on = p.id === "panel-" + tab;
      p.classList.toggle("active", on);
      p.hidden = !on;
    });
    document.body.className = `tab-${tab} grain-${grain}` + (document.getElementById("drawer").hidden ? "" : " drawer-open");
    if (window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const panel = document.getElementById('panel-' + tab);
      gsap.killTweensOf(panel);
      gsap.fromTo(panel, {opacity:0.65, y:5}, {opacity:1, y:0, duration:0.3, clearProps:'transform,opacity'});
    }
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

    document.body.addEventListener('input', e => {
      if (e.target.id !== 'campaign-search') return;
      campaignSearch = e.target.value;
      const old = document.querySelector('.portfolio');
      const holder = document.createElement('div'); holder.innerHTML = campaignPortfolio(d);
      old.querySelector('tbody').replaceWith(holder.querySelector('tbody'));
    });
    document.body.addEventListener("click", (e) => {
      const cf = e.target.closest('[data-campaign-filter]');
      if (cf) { campaignFilter = cf.dataset.campaignFilter; document.querySelector('.portfolio').outerHTML = campaignPortfolio(d); document.querySelector(`[data-campaign-filter="${CSS.escape(campaignFilter)}"]`)?.focus(); return; }
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
        if (tabBtn.dataset.tab === "board") {
          grain = "today";
          document.getElementById("panel-board").innerHTML = board(d, grain);
        }
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
      if (e.key === 'Tab' && !document.getElementById('drawer').hidden) {
        const focusable = [...document.querySelectorAll('.drawer button, .drawer a[href], .drawer [tabindex="0"]')].filter(el => !el.hidden && !el.disabled);
        const first = focusable[0], last = focusable[focusable.length-1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
      if ((e.key === "Enter" || e.key === " ") && e.target.closest("[data-open][role='button']")) {
        e.preventDefault();
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
