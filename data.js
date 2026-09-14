/**
 * Orchidea Outbound / GTM Ops · living snapshot.
 *
 * The Outbound Analyst bot overwrites this file on a schedule.
 * Contract:
 *   - Assign the full object to window.ORCHIDEA_OPS (this file is loaded as a script).
 *   - Missing provider reads MUST be `null`. Never coerce missing to 0.
 *   - 0 means observed zero. [] means none observed. null means unknown.
 *   - Every numeric cluster carries a `source` string.
 *   - Do not invent metrics. Do not add Salesforce.
 *   - Timezone is always Africa/Johannesburg.
 *   - Qualification is deleted. Do not put it back in fleet[] or paused_routines.
 *
 * Stable top-level keys (keep these; UI reads them):
 *   meta, exec, goals, capacity, funnel_baseline, fleet, paused_routines,
 *   open_items, bottlenecks, experiments, daily, weekly, monthly,
 *   gtm_radar
 *
 * Optional URL fields (omit or null if unknown; UI hides the control):
 *   meta.links.{salesforge,attio,notion,warmforge,dashboard}
 *   campaigns[].url   fleet[].url   motion_surface[].url   experiments[].url
 *
 * Research bot overwrites gtm_radar only. Outbound Analyst overwrites the rest.
 *   gtm_radar.items[] fields: id, title, published, channel, confidence
 *     (benchmark|operator_test|vendor), status (watch|try|skip), summary,
 *     why_for_us, url, source_name, metric, maps_to, proof
 *   proof: { type: bars|split|compare, caption, rows:[{label,value,hint}] }
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
    links: {
      salesforge: "https://app.salesforge.ai",
      attio: "https://app.attio.com",
      notion: null,
      warmforge: "https://app.warmforge.ai",
      dashboard: "https://dylang001.github.io/orchidea-ops-report/"
    },
    notes: [
      "Contacted != enrolled != sent != delivered != replied.",
      "Configuration is not an outcome.",
      "C1-N1 / 48153 is observed control, not replenishment-enabled."
    ]
  },

  exec: {
    situation: "Three stacked gaps, not a send-ceiling lecture. Remaining-to-capacity for today is unknown until Analyst reads sends. The journey goes dark at Delivered, then human replies are observed zero, so we cannot yet split deliverability vs copy. LinkedIn, mass video, and lead magnets are untested. Reply and CRM weekday routines are paused. EXP-MSG-001 is proposed, not live.",
    happening: [
      "Control C1-N1 / 48153 is the live observed campaign (41 contacted, 68 sent, 1 bounce).",
      "10 inboxes are active; warmup mix (warmed / warming / new) is unknown until Analyst reads it.",
      "Sep 8 offer is live: 20% revenue growth, or keep working free until hit. No deadline.",
      "Outbound Analyst is in the fleet as live / building."
    ],
    not_happening: [
      "No live send or delivered read for today. Remaining-to-capacity is unknown.",
      "Human replies are observed zero. Qualified positive remains unknown.",
      "Reply Intelligence and CRM weekday routines are paused.",
      "EXP-MSG-001 is proposed, not activated. Do not judge copy on zero human replies.",
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
    source: "Dylan 2026-09-14 · weekday production 10 × 20 = 200"
  },

  inboxes: {
    active: 10,
    warmed: null,
    warming: null,
    new: null,
    warmup_days: 14,
    per_mailbox_day: 20,
    source: "Dylan 2026-09-14 · active count only; warmup mix unread"
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
      insight: "Only observed control. Not replenishment-enabled. Delivered unread, so we cannot split deliverability vs copy. 0 human replies; do not judge messaging yet.",
      url: "https://app.salesforge.ai",
      source: "Salesforge read-back 2026-09-13"
    }
  ],

  motion_surface: [
    {
      id: "email_outbound",
      label: "Email outbound",
      kind: "channel",
      status: "live",
      note: "Only live motion. Control C1-N1 / 48153.",
      url: "https://app.salesforge.ai"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      kind: "channel",
      status: "not_started",
      note: "LI copy still needs Sep-8 contract cleanup before activate.",
      url: "https://dylang001.github.io/orchidea-ops-report/#radar/radar-multichannel"
    },
    {
      id: "mass_video",
      label: "Mass video",
      kind: "channel",
      status: "not_started",
      note: "Not started. Untested channel is a bottleneck and an option.",
      url: "https://dylang001.github.io/orchidea-ops-report/#radar/radar-video-sequence"
    },
    {
      id: "lead_magnets",
      label: "Lead magnets",
      kind: "channel",
      status: "not_started",
      note: "Not started. No magnet in this snapshot.",
      url: "https://dylang001.github.io/orchidea-ops-report/#radar/radar-lead-magnet-n42k"
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
      note: "EXP-MSG-001 · Sep 8 verbatim + chat CTA. Proposed, not activated.",
      url: "https://dylang001.github.io/orchidea-ops-report/#radar/radar-cta-hybrid"
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
      status: "queue depth below scale",
      url: null
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
      status: "EXP-MSG-001 proposed, not activated",
      url: null
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
      status: "no writes without Dylan change-set",
      url: "https://app.salesforge.ai"
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
      status: "weekday routine paused",
      url: null
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
      status: "weekday routine paused",
      url: "https://app.attio.com"
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
      last_outcome: "building · first-run pending",
      paused_routines: [],
      status: "building",
      url: "https://dylang001.github.io/orchidea-ops-report/"
    }
  ],

  paused_routines: [
    { owner: "Reply Intelligence", routine: "weekday routine", status: "paused" },
    { owner: "CRM Data Nerd", routine: "weekday routine", status: "paused" },
    { owner: "Alfred", routine: "weekly / monthly / quarterly reviews", status: "paused" }
  ],

  open_items: [
    "Get Analyst first-run live so today’s sends, remaining-to-capacity, and delivered stop being unknown",
    "Keep EXP-MSG-001 proposed until there are human replies to judge. Do not activate on zero.",
    "Decide when to enable Reply + CRM weekday routines (ops pause, not a copy test)",
    "Inbox warmup mix is unread. Do not plan new-account capacity until warmed / warming / new is filled.",
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
      journey: "Supply / send step: volume for today is not on the board.",
      unblock: "Analyst reads Salesforge sends today. Remaining = weekday production − sends (null until both exist).",
      test: "Not a channel test. This is a telemetry unblock."
    },
    {
      rank: 3,
      type: "channel",
      item: "Untested channels while email is the only live motion",
      gap: "LinkedIn, mass video, and lead magnets are not started. Paid ads is explicitly not the motion unless later added. The test surface is idle except email + the live offer/guarantee.",
      journey: "Before Contacted: other ways to fill and convert the journey are untried.",
      unblock: "Finish Sep-8 LI copy cleanup before LinkedIn can be a real test. Treat mass video and magnets as ranked next bets, not decoration.",
      test: "EXP-MSG-001 is the only proposed email test. Do not confuse ‘proposed’ with ‘running’."
    },
    {
      rank: 4,
      type: "supply",
      item: "Queue depth far below scale",
      gap: "Prospecting is live but has not filled eligible pipeline to the scale target. Actual pipeline depth is unknown until a read-back.",
      journey: "Before Contacted: the top of the OS is thin.",
      unblock: "Read Prospecting KPI (eligible pipeline depth). Then decide whether supply or conversion is the tighter constraint.",
      test: "Do not add inboxes to ‘fix’ conversion. Warmup mix is also unknown."
    },
    {
      rank: 5,
      type: "ops",
      item: "Paused Reply/CRM weekday routines + DRAFT_ONLY operator",
      gap: "Reply Intelligence and CRM Data Nerd are paused. Campaign Operator writes nothing without a Dylan change-set. Even if replies arrive, classification and Attio truth will lag.",
      journey: "Replies → Booked: the handoff layer is parked.",
      unblock: "Decide when to enable Reply + CRM weekday routines. Keep Operator in draft until there is an approved change-set.",
      test: "Enabling paused routines is an ops decision, not EXP-MSG-001."
    }
  ],

  experiments: [
    {
      id: "EXP-MSG-001",
      status: "proposed_not_activated",
      control: "C1-N1/48153",
      note: "Sep 8 verbatim + chat CTA. Do not activate until human replies exist to judge.",
      url: "https://dylang001.github.io/orchidea-ops-report/#radar/radar-cta-hybrid"
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
      "Baseline seed. Analyst will overwrite with live provider read-back."
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
      "Only one observed campaign this week: C1-N1 / 48153. 41 contacted, 68 sent, delivered unknown, 0 human replies, 0 booked, 1 bounce.",
      "The journey is blind at Delivered, then red at Replies. That is the conversion bottleneck, not a 200 send-ceiling slide.",
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
      "Remaining-to-capacity over the month is unknown until Analyst reads volume. Production math (10 inboxes × 20/day) is how capacity is made, not the monthly headline.",
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
      "Rank mass video vs lead magnets as the next untested motion. Do not pretend they are running."
    ],
    notes: ["Conversion visibility and untested channels dominate. Structural 10 × 20 production is known; remaining-to-capacity is not."],
    source: "seed 2026-09-14"
  },

  gtm_radar: {
    generated_on: "2026-09-14",
    timezone: "Africa/Johannesburg",
    source: "Research seed 2026-09-14. Research bot overwrites gtm_radar only.",
    items: [
      {
        id: "radar-instantly-2026",
        title: "2026 cold email reply ladder",
        published: "2026-01-12",
        channel: "email",
        confidence: "benchmark",
        status: "watch",
        metric: "3.43% avg · 10%+ elite",
        source_name: "Instantly Cold Email Benchmark Report 2026",
        url: "https://instantly.ai/cold-email-benchmark-report-2026",
        maps_to: "funnel:replies",
        summary: "Platform-wide 2026 benchmark: average reply rate 3.43%, top quartile 5.5%+, elite 10%+. Elite senders keep first-touch under 80 words, one CTA, and A/B test weekly.",
        why_for_us: "C1-N1 is at 0 human replies on 68 sends. Do not grade copy until delivered is known. The number to watch after Analyst first-run is reply rate vs this ladder, not send ceiling.",
        proof: {
          type: "bars",
          caption: "Reply-rate tiers from Instantly 2026 (Jan 1–Dec 18 2025 data window).",
          rows: [
            { label: "Elite / top 10%", value: 10.7, hint: "10.7%+" },
            { label: "Top quartile", value: 5.5, hint: "5.5%+" },
            { label: "Average", value: 3.43, hint: "3.43%" },
            { label: "C1-N1 (this week)", value: 0, hint: "0 / 68 · delivered unknown" }
          ]
        }
      },
      {
        id: "radar-followups-58-42",
        title: "42% of replies arrive after email 1",
        published: "2026-01-12",
        channel: "email",
        confidence: "benchmark",
        status: "try",
        metric: "58% step 1 · 42% follow-ups",
        source_name: "Instantly Cold Email Benchmark Report 2026",
        url: "https://instantly.ai/cold-email-benchmark-report-2026",
        maps_to: "motion:email_outbound",
        summary: "Same Instantly 2026 set: 58% of replies come from the first touch, 42% from later steps. Sweet spot is 4–7 touches; under four leaves replies on the table. Space 3–4 days. Step 2 should feel like a reply, not a reminder (~30% lift in their writeup).",
        why_for_us: "Before judging EXP-MSG-001, confirm C1-N1 actually has 4–7 value-adding steps. A one-and-done control cannot be compared to this benchmark.",
        proof: {
          type: "split",
          caption: "Share of all replies by sequence step (Instantly 2026).",
          rows: [
            { label: "Step 1", value: 58, hint: "sets the ceiling" },
            { label: "Follow-ups", value: 42, hint: "4–7 touches" }
          ]
        }
      },
      {
        id: "radar-ab-before-copy",
        title: "Don't A/B copy on a blind funnel",
        published: "2026-01-01",
        channel: "cta",
        confidence: "vendor",
        status: "watch",
        metric: "~1,500 sends / variant",
        source_name: "Unify GTM · Cold Email A/B Testing",
        url: "https://www.unifygtm.com/explore/cold-email-ab-testing",
        maps_to: "exp:EXP-MSG-001",
        summary: "Unify's 2026 testing framework: one variable at a time, pre-segment by intent, ~1,500+ sends per variant, hold-out when you want to measure vs doing nothing. Audience quality caps the result more than copy. They cite Instantly 2026 that 42% of replies come from follow-ups.",
        why_for_us: "EXP-MSG-001 is proposed, not live. Activating a chat-CTA test on 0 human replies and unknown delivered teaches nothing. Unblock delivered first, then test one lever.",
        proof: {
          type: "compare",
          caption: "What a valid copy test needs vs what C1-N1 has today.",
          rows: [
            { label: "Sends per variant (Unify)", value: 1500, hint: "minimum cited" },
            { label: "C1-N1 sent (observed)", value: 68, hint: "control only" },
            { label: "Human replies", value: 0, hint: "observed zero" }
          ]
        }
      },
      {
        id: "radar-cta-hybrid",
        title: "Question CTA, then meeting ask",
        published: "2026-05-29",
        channel: "cta",
        confidence: "operator_test",
        status: "try",
        metric: "9.4% vs 5.2% reply",
        source_name: "Growtoro · Meeting CTA vs Soft Ask",
        url: "https://growtoro.com/blog/cold-email-cta-meeting-vs-soft-ask-split-test",
        maps_to: "exp:EXP-MSG-001",
        summary: "Controlled split across 80k+ sends, same ICP/opener/body, CTA only. Direct meeting ask: 5.2% reply / 8 meetings per 1k. Soft interest-check: 7.8% / 14. Question with no meeting ask: 9.4% / 16, but only if the team converts the thread. Hybrid sequence (question → soft → meeting → breakup) hit 31 meetings / 1k on 40k sends. Calendar links in email 1 cut replies ~30%.",
        why_for_us: "EXP-MSG-001 is Sep 8 verbatim + chat CTA. Chat is closer to a question than a calendar dump. Hold that shape. Do not bolt a booking link onto email 1. Reply Intelligence must be unpaused before a question-CTA can convert threads.",
        proof: {
          type: "bars",
          caption: "Reply rate by first-email CTA (Growtoro, 80k+ sends).",
          rows: [
            { label: "Question, no meeting", value: 9.4, hint: "51% of replies positive" },
            { label: "Soft interest-check", value: 7.8, hint: "38% positive" },
            { label: "Direct meeting + times", value: 5.2, hint: "22% positive" }
          ]
        }
      },
      {
        id: "radar-lead-magnet-n42k",
        title: "Lead magnets reply less, convert better",
        published: "2026-07-01",
        channel: "magnet",
        confidence: "operator_test",
        status: "watch",
        metric: "1 positive / 1,041 vs 1,851",
        source_name: "Calvin Wiltermood · lead magnet vs personalization",
        url: "https://www.linkedin.com/posts/wiltermood_for-fun-ive-been-testing-lead-magnets-vs-activity-7449917411354427392-tqwd",
        maps_to: "motion:lead_magnets",
        summary: "n=42k, US senior sales/leadership at ProServ or SaaS SMBs. Personalization: 2.7% reply, 2% of those positive (1 positive / 1,851). Lead magnet CTA: 1.2% reply, 8% of those positive (1 positive / 1,041). Magnet won on positive-reply efficiency, lost on raw replies. Reddit operators still report magnet-yes then silence unless the next touch is a conversation, not a PDF drop.",
        why_for_us: "Lead magnets are not_started. If we test one, score it on qualified positives and booked, not reply rate. Pair with Reply Intelligence so a 'send it' reply does not die as a file drop.",
        proof: {
          type: "compare",
          caption: "Emails per positive reply (Wiltermood, n=42k).",
          rows: [
            { label: "Personalization", value: 1851, hint: "2.7% reply · 2% positive" },
            { label: "Lead magnet CTA", value: 1041, hint: "1.2% reply · 8% positive" }
          ]
        }
      },
      {
        id: "radar-video-sequence",
        title: "Video is a step, not a channel swap",
        published: "2026-01-01",
        channel: "video",
        confidence: "vendor",
        status: "watch",
        metric: "60–90s · hook A/B",
        source_name: "Sendspark · AI video personalization for outbound",
        url: "https://www.sendspark.com/resources/ai-video-personalization-outbound-sales",
        maps_to: "motion:mass_video",
        summary: "Vendor playbook, not a third-party benchmark: 60–90 second videos, one CTA, send in business hours, A/B the first 5–10 seconds. They claim 2x LinkedIn reply vs InMail when the file sits in the native thread. Sequence pattern they recommend: video email → text follow-up that references the video → LinkedIn. Score meetings, not views.",
        why_for_us: "Mass video is not_started. Treat it as a step inside the email sequence after delivered is readable, not a replacement for C1-N1. Do not clone-video blast until inbox warmup mix is known.",
        proof: {
          type: "bars",
          caption: "Vendor-claimed relative lifts vs text email (Sendspark). Not independently audited; confidence = vendor.",
          rows: [
            { label: "Reply (claimed)", value: 250, hint: "200–300% vs text" },
            { label: "Meetings (claimed)", value: 45, hint: "40–50% lift" },
            { label: "C1-N1 video steps", value: 0, hint: "not started" }
          ]
        }
      },
      {
        id: "radar-multichannel",
        title: "Test email + LinkedIn as one sequence variable",
        published: "2026-01-01",
        channel: "linkedin",
        confidence: "vendor",
        status: "watch",
        metric: "Channel mix is a test lever",
        source_name: "Unify GTM · sequence / follow-up tests",
        url: "https://www.unifygtm.com/explore/cold-email-ab-testing",
        maps_to: "motion:linkedin",
        summary: "Unify lists channel mix (email plus LinkedIn) as a sequence variable to test after subject line, not as a separate 'LinkedIn program' you turn on blindly. Instantly 2026 also maps Mon launch / Wed follow-up / Fri OOO triage; timing is a lever next to channel.",
        why_for_us: "LinkedIn is not_started because Sep-8 copy still needs cleanup. When it is ready, add it as step 2 of C1-N1 (email first, then LI), not as a parallel blast. That matches the Unify 'one variable' rule.",
        proof: {
          type: "bars",
          caption: "Motion surface right now: live vs not started.",
          rows: [
            { label: "Email outbound", value: 100, hint: "live · C1-N1" },
            { label: "LinkedIn", value: 0, hint: "not started" },
            { label: "Mass video", value: 0, hint: "not started" },
            { label: "Lead magnets", value: 0, hint: "not started" }
          ]
        }
      },
      {
        id: "radar-bounce-warmup",
        title: "Bounce under 2%, warmup before volume",
        published: "2026-01-12",
        channel: "ops",
        confidence: "benchmark",
        status: "try",
        metric: "<2% bounce · 14-day warmup",
        source_name: "Instantly Cold Email Benchmark Report 2026",
        url: "https://instantly.ai/cold-email-benchmark-report-2026",
        maps_to: "inboxes",
        summary: "Instantly 2026: keep bounce under 2% or placement drops. New domains start 5–10/day and ramp over 4–6 weeks. Erratic volume looks like spam. We already policy 14-day warmup and 20/mailbox. The missing read is the warmed / warming / new mix.",
        why_for_us: "C1-N1 has 1 bounce on 68 sends (~1.5%), inside the band, but delivered is still unknown so placement is not proven. Do not add inboxes to 'fix' zero replies. Fill warmup mix from Warmforge first.",
        proof: {
          type: "compare",
          caption: "Bounce vs Instantly 2026 guardrail.",
          rows: [
            { label: "Danger line", value: 2, hint: "2% bounce" },
            { label: "C1-N1 bounce", value: 1.47, hint: "1 / 68" }
          ]
        }
      }
    ]
  }
};
