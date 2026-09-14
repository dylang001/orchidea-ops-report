/**
 * Orchidea Outbound / GTM Ops — living snapshot.
 *
 * The Outbound Analyst bot overwrites this file on a schedule.
 * Contract:
 *   - Assign the full object to window.ORCHIDEA_OPS (this file is loaded as a script).
 *   - Missing provider reads MUST be `null`. Never coerce missing to 0.
 *   - 0 means observed zero. [] means none observed. null means unknown.
 *   - Every numeric cluster carries a `source` string.
 *   - Do not invent metrics. Do not add Salesforce.
 *   - Timezone is always Africa/Johannesburg.
 *   - Qualification is deleted — do not put it back in fleet[] or paused_routines.
 *
 * Stable top-level keys (keep these; UI reads them):
 *   meta, exec, goals, capacity, funnel_baseline, fleet, paused_routines,
 *   open_items, bottlenecks, experiments, daily, weekly, monthly
 *
 * Analyst-fillable clusters (added 2026-09-14; seed unknown as null / []):
 *   inboxes              { active, warmed, warming, new, warmup_days, per_mailbox_day, source }
 *                        warmed / warming / new stay null until a mailbox mix read exists.
 *                        Do NOT invent a 20/5 split from active=10.
 *   campaigns[]          Observed campaigns only. Omit others rather than fake stats.
 *                        Fields: id, name, status, channel, contacted, sent, delivered,
 *                        replies, booked, bounce, insight, source
 *   motion_surface[]     Test surface (channels + offer levers). Alias: tests[]
 *                        Fields: id, label, kind (channel|lever), status
 *                        (tested|live|proposed|not_started), note
 *   daily.remaining_to_capacity  null until sends are read (UI will also derive
 *                        weekday_ceiling − daily.sends when both are numeric)
 *   weekly.insights[]    Consultative week takeaways (falls back to weekly.notes)
 *   monthly.insights[]   Month takeaways
 *   monthly.goals[]      Goal tracking toward 20% revenue growth / keep working free
 *                        Fields: id, label, target, progress, baseline, status, note
 *   monthly.next_bets[]  What we will test / do next
 *   monthly.remaining_to_capacity / monthly.sends / monthly.capacity_used
 *                        Month remaining-to-capacity. null until Analyst reads volume.
 *   fleet[].kpi          Human-readable KPI the bot is supposed to track
 *   fleet[].lifecycle    live | paused | draft  (operational status)
 *   fleet[].working      null until a read-back proves the bot is producing the KPI
 *   bottlenecks[].gap, journey, unblock, test
 *                        Consultative Focus fields. item/type/rank stay required.
 *
 * Do not restore Qualification. Do not add Salesforce. Do not invent today's sends,
 * delivered, inbox warmup mix, or campaign performance.
 */
window.ORCHIDEA_OPS = {
  meta: {
    brand: "Orchidea",
    partner: "Growth Partner",
    title: "Outbound & GTM Ops Report",
    generated_on: "2026-09-14",
    timezone: "Africa/Johannesburg",
    offer_live: "Sep 8: 20% revenue growth, or keep working free until hit. No deadline. No ROAS.",
    systems: { identity: "Attio", execution: "Salesforge", approvals: "Notion" },
    notes: [
      "Contacted != enrolled != sent != delivered != replied.",
      "Configuration is not an outcome.",
      "C1-N1 / 48153 is observed control, not replenishment-enabled."
    ]
  },

  exec: {
    situation: "Three stacked gaps — not a send-ceiling lecture. Today's remaining-to-capacity is unknown until Analyst reads sends. The journey goes dark at Delivered, then human replies are observed zero, so we cannot yet split deliverability vs copy. LinkedIn, mass video, and lead magnets are untested. Reply and CRM weekday routines are paused. EXP-MSG-001 is proposed, not live.",
    happening: [
      "Control C1-N1 / 48153 is the live observed campaign (41 contacted, 68 sent, 1 bounce).",
      "10 inboxes are active; warmup mix (warmed / warming / new) is unknown until Analyst reads it.",
      "Sep 8 offer is live: 20% revenue growth, or keep working free until hit. No deadline.",
      "Outbound Analyst is in the fleet as live / building."
    ],
    not_happening: [
      "No live send or delivered read for today — remaining-to-capacity is unknown.",
      "Human replies are observed zero. Qualified positive remains unknown.",
      "Reply Intelligence and CRM weekday routines are paused.",
      "EXP-MSG-001 is proposed, not activated — do not judge copy on zero human replies.",
      "LinkedIn, mass video, and lead magnets are not started. Paid ads is not the motion unless later added.",
      "Prospecting has not filled the queue to scale."
    ],
    source: "seed 2026-09-14 (Analyst first-run pending)"
  },

  goals: {
    year: {
      label: "Year 2026",
      north_star: "20% revenue growth, or keep working free until hit. No deadline. No ROAS.",
      items: ["Efficiency is not scored as ROAS.", "Progress unknown until a revenue baseline is written."]
    },
    quarter: {
      label: "Q3 2026",
      status: "Conversion visibility and untested channels, not the known send ceiling, are the operating review.",
      items: ["Unblock delivered + remaining-to-capacity reads.", "Do not activate copy tests on zero human replies."]
    },
    month: {
      label: "September",
      items: ["Analyst first-run. Remaining-to-capacity unknown. EXP-MSG-001 not activated."]
    },
    week: {
      label: "Week of 2026-09-08",
      items: ["Enable Analyst first-run. Do not judge copy on zero human replies."]
    }
  },

  capacity: {
    mailboxes_active: 10,
    per_mailbox_day: 20,
    weekday_ceiling: 200,
    usable_after_reserve: 160,
    scale_target_day: 300,
    gap: 100,
    source: "Dylan 2026-09-14 — weekday production 10 × 20 = 200"
  },

  inboxes: {
    active: 10,
    warmed: null,
    warming: null,
    new: null,
    warmup_days: 14,
    per_mailbox_day: 20,
    source: "Dylan 2026-09-14 — active count only; warmup mix unread"
  },

  funnel_baseline: {
    control: "C1-N1 / 48153",
    contacted: 41,
    emails_sent: 68,
    eligible_delivered: null,
    salesforge_replies: 0,
    human_replies_non_ooo: 0,
    qualified_positive_replies: null,
    booked_held: 0,
    opportunities: null,
    bounce: 1,
    source: "Salesforge read-back 2026-09-13"
  },

  campaigns: [
    {
      id: "48153",
      name: "C1-N1",
      status: "live",
      channel: "email",
      contacted: 41,
      sent: 68,
      delivered: null,
      replies: 0,
      booked: 0,
      bounce: 1,
      insight: "Only observed control. Not replenishment-enabled. Delivered unread, so we cannot split deliverability vs copy. 0 human replies — do not judge messaging yet.",
      source: "Salesforge read-back 2026-09-13"
    }
  ],

  motion_surface: [
    {
      id: "email_outbound",
      label: "Email outbound",
      kind: "channel",
      status: "live",
      note: "Only live motion. Control C1-N1 / 48153."
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      kind: "channel",
      status: "not_started",
      note: "LI copy still needs Sep-8 contract cleanup before activate."
    },
    {
      id: "mass_video",
      label: "Mass video",
      kind: "channel",
      status: "not_started",
      note: "Not started. Untested channel is a bottleneck and an option."
    },
    {
      id: "lead_magnets",
      label: "Lead magnets",
      kind: "channel",
      status: "not_started",
      note: "Not started. No magnet in this snapshot."
    },
    {
      id: "paid_ads",
      label: "Paid ads",
      kind: "channel",
      status: "not_started",
      note: "Explicitly not the motion unless later added."
    },
    {
      id: "offer",
      label: "Offer",
      kind: "lever",
      status: "live",
      note: "Sep 8: 20% revenue growth, or keep working free until hit."
    },
    {
      id: "guarantee",
      label: "Guarantee",
      kind: "lever",
      status: "live",
      note: "Keep working free until 20% growth is hit. No deadline."
    },
    {
      id: "messaging_cta",
      label: "Messaging / CTA",
      kind: "lever",
      status: "proposed",
      note: "EXP-MSG-001 — Sep 8 verbatim + chat CTA. Proposed, not activated."
    }
  ],

  fleet: [
    {
      name: "Prospecting",
      id: "2556136",
      job: "Build eligible pipeline",
      mode: "prepare",
      lifecycle: "live",
      kpi: "Eligible pipeline depth vs scale",
      target: "eligible pipeline",
      actual: null,
      working: null,
      last_outcome: "queue depth below scale",
      paused_routines: [],
      status: "queue depth below scale"
    },
    {
      name: "Messaging",
      id: "2786717",
      job: "Copy and enroll",
      mode: "audit-first",
      lifecycle: "live",
      kpi: "Qualified positive reply rate",
      target: "qualified positive reply rate",
      actual: null,
      working: null,
      last_outcome: "EXP-MSG-001 proposed, not activated",
      paused_routines: [],
      status: "EXP-MSG-001 proposed, not activated"
    },
    {
      name: "Campaign Operator",
      id: "2818152",
      job: "Approved enroll / pause / create",
      mode: "DRAFT_ONLY",
      lifecycle: "draft",
      kpi: "Approved enroll / pause / create executed",
      target: "approved enroll/pause/create",
      actual: null,
      working: null,
      last_outcome: "no writes without Dylan change-set",
      paused_routines: [],
      status: "no writes without Dylan change-set"
    },
    {
      name: "Reply Intelligence",
      id: "2822878",
      job: "Classify + draft",
      mode: "draft-only",
      lifecycle: "paused",
      kpi: "Replies classified and drafts ready same day",
      target: "classify + draft",
      actual: null,
      working: null,
      last_outcome: "weekday routine paused",
      paused_routines: ["weekday routine"],
      status: "weekday routine paused"
    },
    {
      name: "CRM Data Nerd",
      id: "2908860",
      job: "Keep Attio as truth",
      mode: "preview-then-apply",
      lifecycle: "paused",
      kpi: "Attio records matching outbound truth",
      target: "Attio truth",
      actual: null,
      working: null,
      last_outcome: "weekday routine paused",
      paused_routines: ["weekday routine"],
      status: "weekday routine paused"
    },
    {
      name: "Outbound Analyst",
      id: "2929809",
      job: "Daily / weekly / monthly + this dashboard",
      mode: "live",
      lifecycle: "live",
      kpi: "Provider read-back written to data.js",
      target: "daily/weekly/monthly + dashboard",
      actual: null,
      working: null,
      last_outcome: "building — first-run pending",
      paused_routines: [],
      status: "building"
    }
  ],

  paused_routines: [
    { owner: "Reply Intelligence", routine: "weekday routine", status: "paused" },
    { owner: "CRM Data Nerd", routine: "weekday routine", status: "paused" },
    { owner: "Alfred", routine: "weekly / monthly / quarterly reviews", status: "paused" }
  ],

  open_items: [
    "Get Analyst first-run live so today’s sends, remaining-to-capacity, and delivered stop being unknown",
    "Keep EXP-MSG-001 proposed until there are human replies to judge — do not activate on zero",
    "Decide when to enable Reply + CRM weekday routines (ops pause, not a copy test)",
    "Inbox warmup mix is unread — do not plan new-account capacity until warmed / warming / new is filled",
    "LI copy still needs Sep-8 contract cleanup before that channel is a real test"
  ],

  bottlenecks: [
    {
      rank: 1,
      type: "conversion",
      item: "Journey blind at Delivered; human replies observed zero",
      gap: "Conversion, not the known send ceiling. We cannot split deliverability vs copy because eligible delivered is unknown, and human replies are observed zero after send.",
      journey: "Contacted 41 → Sent 68 → Delivered unknown → Replies 0 → Booked 0",
      unblock: "Analyst first-run must read eligible delivered (and bounces) so the x-ray has a next known step.",
      test: "Do not run EXP-MSG-001 yet. A copy test on zero human replies and unknown delivered teaches nothing."
    },
    {
      rank: 2,
      type: "ops",
      item: "Today’s remaining-to-capacity is unknown",
      gap: "Sends today are unread, so remaining-to-capacity cannot be computed. Dylan already knows the production math (inboxes × per-mailbox). The operating number is how much of today’s capacity is left.",
      journey: "Supply / send step — volume for today is not on the board.",
      unblock: "Analyst reads Salesforge sends today. Remaining = weekday production − sends (null until both exist).",
      test: "Not a channel test. This is a telemetry unblock."
    },
    {
      rank: 3,
      type: "channel",
      item: "Untested channels while email is the only live motion",
      gap: "LinkedIn, mass video, and lead magnets are not started. Paid ads is explicitly not the motion unless later added. The test surface is idle except email + the live offer/guarantee.",
      journey: "Before Contacted — other ways to fill and convert the journey are untried.",
      unblock: "Finish Sep-8 LI copy cleanup before LinkedIn can be a real test. Treat mass video and magnets as ranked next bets, not decoration.",
      test: "EXP-MSG-001 is the only proposed email test. Do not confuse ‘proposed’ with ‘running’."
    },
    {
      rank: 4,
      type: "supply",
      item: "Queue depth far below scale",
      gap: "Prospecting is live but has not filled eligible pipeline to the scale target. Actual pipeline depth is unknown until a read-back.",
      journey: "Before Contacted — the top of the OS is thin.",
      unblock: "Read Prospecting KPI (eligible pipeline depth). Then decide whether supply or conversion is the tighter constraint.",
      test: "Do not add inboxes to ‘fix’ conversion. Warmup mix is also unknown."
    },
    {
      rank: 5,
      type: "ops",
      item: "Paused Reply/CRM weekday routines + DRAFT_ONLY operator",
      gap: "Reply Intelligence and CRM Data Nerd are paused. Campaign Operator writes nothing without a Dylan change-set. Even if replies arrive, classification and Attio truth will lag.",
      journey: "Replies → Booked — the handoff layer is parked.",
      unblock: "Decide when to enable Reply + CRM weekday routines. Keep Operator in draft until there is an approved change-set.",
      test: "Enabling paused routines is an ops decision, not EXP-MSG-001."
    }
  ],

  experiments: [
    {
      id: "EXP-MSG-001",
      status: "proposed_not_activated",
      control: "C1-N1/48153",
      note: "Sep 8 verbatim + chat CTA. Do not activate until human replies exist to judge."
    }
  ],

  daily: {
    as_of: "2026-09-14",
    sends: null,
    delivered: null,
    remaining_to_capacity: null,
    capacity_used: null,
    anomalies: [],
    fleet_blockers_changed: [],
    decisions_needed: [
      "Enable Analyst first-run so sends, remaining-to-capacity, and delivered stop being unknown",
      "Do not activate EXP-MSG-001 on zero human replies",
      "Decide when to enable Reply/CRM paused routines"
    ],
    notes: [
      "Baseline seed — Analyst will overwrite with live provider read-back."
    ],
    source: "seed 2026-09-14 (Analyst first-run pending)"
  },

  weekly: {
    label: "Week of 2026-09-08",
    keep: [],
    kill: [],
    scale: [],
    test: ["EXP-MSG-001 (proposed, not activated)"],
    insights: [
      "Only one observed campaign this week: C1-N1 / 48153 — 41 contacted, 68 sent, delivered unknown, 0 human replies, 0 booked, 1 bounce.",
      "The journey x-ray is blind at Delivered, then red at Replies. That is the conversion bottleneck — not a 200 send-ceiling slide.",
      "Test surface is mostly idle: email + offer/guarantee are live; messaging/CTA is proposed; LinkedIn, mass video, lead magnets, and paid ads are not started.",
      "Keep / kill / scale stay empty until human replies exist to judge. EXP-MSG-001 must not be treated as a running test."
    ],
    notes: ["Insufficient human replies to judge copy."],
    source: "Salesforge read-back 2026-09-13"
  },

  monthly: {
    label: "September 2026",
    trends: [],
    remaining_to_capacity: null,
    sends: null,
    capacity_used: null,
    insights: [
      "The goal is 20% revenue growth, or keep working free until hit. Progress is unknown until a revenue baseline is in this file. This is not a ROAS score.",
      "Remaining-to-capacity over the month is unknown until Analyst reads volume. Production math (10 inboxes × 20/day) is how capacity is made — not the monthly headline.",
      "We have learned that the control is live and silent: 0 human replies, delivered unread. Copy tests are not yet informative.",
      "Next bets sit on the test surface: do not activate EXP-MSG-001 yet; LI needs contract cleanup; mass video and lead magnets are untried."
    ],
    goals: [
      {
        id: "revenue_growth_20",
        label: "20% revenue growth, or keep working free until hit",
        target: "20% revenue growth",
        progress: null,
        baseline: null,
        status: "unknown",
        note: "No deadline. Not scored as ROAS. Analyst fills progress when revenue is readable."
      }
    ],
    next_bets: [
      "Analyst first-run: sends today, remaining-to-capacity, eligible delivered, inbox warmup mix",
      "Hold EXP-MSG-001 as proposed until human replies exist",
      "Finish Sep-8 LinkedIn copy cleanup before that channel is a test",
      "Rank mass video vs lead magnets as the next untested motion — do not pretend they are running"
    ],
    notes: ["Conversion visibility and untested channels dominate. Structural 10 × 20 production is known; remaining-to-capacity is not."],
    source: "seed 2026-09-14"
  }
};
