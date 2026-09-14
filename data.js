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
    situation: "Send ceiling is 200/day against a 300 scale target. Human replies are observed zero. Today’s sends are unknown until Analyst first-run.",
    happening: [
      "Weekday ceiling is 200 (10 mailboxes × 20).",
      "Control C1-N1 / 48153 is the live observed control.",
      "Outbound Analyst is in the fleet as live / building."
    ],
    not_happening: [
      "No live send or delivered read for today.",
      "Reply Intelligence and CRM weekday routines are paused.",
      "EXP-MSG-001 is proposed, not activated.",
      "Prospecting has not filled the queue to scale."
    ],
    source: "seed 2026-09-14 (Analyst first-run pending)"
  },

  goals: {
    year: {
      label: "Year 2026",
      north_star: "20% revenue growth, or keep working free until hit. No deadline. No ROAS.",
      items: ["Efficiency is not scored as ROAS."]
    },
    quarter: {
      label: "Q3 2026",
      status: "Capacity is the structural bottleneck.",
      items: ["Scale target 300 vs weekday ceiling 200."]
    },
    month: {
      label: "September",
      items: ["100-send gap vs 300. EXP-MSG-001 not activated."]
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
    source: "Dylan 2026-09-14 — weekday ceiling 200"
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

  fleet: [
    {
      name: "Prospecting",
      id: "2556136",
      job: "Build eligible pipeline",
      mode: "prepare",
      target: "eligible pipeline",
      actual: null,
      last_outcome: "queue depth below scale",
      paused_routines: [],
      status: "queue depth below scale"
    },
    {
      name: "Messaging",
      id: "2786717",
      job: "Copy and enroll",
      mode: "audit-first",
      target: "qualified positive reply rate",
      actual: null,
      last_outcome: "EXP-MSG-001 proposed, not activated",
      paused_routines: [],
      status: "EXP-MSG-001 proposed, not activated"
    },
    {
      name: "Campaign Operator",
      id: "2818152",
      job: "Approved enroll / pause / create",
      mode: "DRAFT_ONLY",
      target: "approved enroll/pause/create",
      actual: null,
      last_outcome: "no writes without Dylan change-set",
      paused_routines: [],
      status: "no writes without Dylan change-set"
    },
    {
      name: "Reply Intelligence",
      id: "2822878",
      job: "Classify + draft",
      mode: "draft-only",
      target: "classify + draft",
      actual: null,
      last_outcome: "weekday routine paused",
      paused_routines: ["weekday routine"],
      status: "weekday routine paused"
    },
    {
      name: "CRM Data Nerd",
      id: "2908860",
      job: "Keep Attio as truth",
      mode: "preview-then-apply",
      target: "Attio truth",
      actual: null,
      last_outcome: "weekday routine paused",
      paused_routines: ["weekday routine"],
      status: "weekday routine paused"
    },
    {
      name: "Outbound Analyst",
      id: "2929809",
      job: "Daily / weekly / monthly + this dashboard",
      mode: "live",
      target: "daily/weekly/monthly + dashboard",
      actual: null,
      last_outcome: "building",
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
    "Get Analyst first-run live so today’s sends/delivered stop being unknown",
    "Decide when to enable Reply + CRM weekday routines",
    "Close or accept the 100-send gap (200 ceiling vs 300 target)",
    "Do not activate EXP-MSG-001 until there are human replies to judge",
    "LI copy still needs Sep-8 contract cleanup before activate"
  ],

  bottlenecks: [
    { rank: 1, item: "Send capacity 200/day vs 300 target", type: "structural" },
    { rank: 2, item: "Queue depth far below scale", type: "supply" },
    { rank: 3, item: "Paused Reply/CRM routines + DRAFT_ONLY operator", type: "ops" }
  ],

  experiments: [
    {
      id: "EXP-MSG-001",
      status: "proposed_not_activated",
      control: "C1-N1/48153",
      note: "Sep 8 verbatim + chat CTA"
    }
  ],

  daily: {
    as_of: "2026-09-14",
    sends: null,
    delivered: null,
    capacity_used: null,
    anomalies: [],
    fleet_blockers_changed: [],
    decisions_needed: [
      "Enable Analyst daily/weekly/monthly routines after first-run",
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
    test: ["EXP-MSG-001 (not activated)"],
    notes: ["Insufficient human replies to judge copy."],
    source: "Salesforge read-back 2026-09-13"
  },

  monthly: {
    label: "September 2026",
    trends: [],
    notes: ["Structural capacity gap dominates."],
    source: "seed 2026-09-14"
  }
};
