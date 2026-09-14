/**
 * Orchidea Outbound / GTM Ops · living snapshot.
 * Analyst refresh 2026-09-14 ~15:57 JHB off CO+SF verify.
 */
window.ORCHIDEA_OPS = {
  "meta": {
    "brand": "Orchidea",
    "partner": "Growth Partner",
    "title": "Outbound & GTM Ops Report",
    "generated_on": "2026-09-14",
    "timezone": "Africa/Johannesburg",
    "offer_live": "Ecommerce v2: \u226520% better return / 90d or work free. SaaS 50289: more qualified meetings from paid in 90d (A work-free / B waive next month).",
    "systems": {
      "identity": "Attio",
      "execution": "Salesforge",
      "approvals": "Notion"
    },
    "links": {
      "salesforge": "https://app.salesforge.ai",
      "attio": "https://app.attio.com",
      "notion": null,
      "warmforge": "https://app.warmforge.ai",
      "dashboard": "https://dylang001.github.io/orchidea-ops-report/"
    },
    "notes": [
      "Contacted != enrolled != sent != delivered != replied.",
      "Ecommerce NEW enrolls 50/50 \u2192 50239 + 50240.",
      "Legacy 48153 in-flight only (~12 active). Legacy 50048 COMPLETED after uncontacted backfill.",
      "SaaS 50289 LIVE (meetings offer). 50290 + LI-C1 still gated."
    ]
  },
  "exec": {
    "situation": "Operator moved 99 uncontacted onto v2 (50/49). Live ecom: 50239 active 139 / total 141; 50240 active 134 / total 137 \u2014 emails_sent still 0 (watch NY 11\u201317). SaaS 50289 live with 22 enrolled. Queue 7. Capacity 200. Pages data.js still needs publish.",
    "happening": [
      "Ecommerce cutover LIVE: 50239 + 50240 after Dylan backfill of 99 uncontacted.",
      "SaaS C1 Growth Leaders 50289 LIVE (22 enrolled, meetings A/B).",
      "Legacy 50048 marked completed (0 active).",
      "Capacity 10\u00d720=200; Prospector queue eligible=7."
    ],
    "not_happening": [
      "v2 emails_sent still 0 despite 273 active on ecom v2 \u2014 enrolled\u2260sent.",
      "LI-C1 50224 still draft.",
      "SaaS 50290 still draft gated.",
      "Sent-today / remaining-to-capacity unknown.",
      "Inbox warmup mix unread."
    ],
    "source": "Salesforge get_sequence verify + Campaign Operator 2026-09-14 ~13:56Z"
  },
  "goals": {
    "year": {
      "label": "Year 2026",
      "north_star": "20% revenue growth, or keep working free until hit. No deadline. No ROAS.",
      "items": [
        "Not scored as ROAS."
      ]
    },
    "quarter": {
      "label": "Q3 2026",
      "status": "Get v2 + SaaS actually sending; refill queue; then judge copy.",
      "items": [
        "Confirm sends in NY window.",
        "Fill queue toward 150\u2013200/day.",
        "HOLD LI + 50290 + inbox ramp."
      ]
    },
    "month": {
      "label": "September",
      "items": [
        "v2 cutover + SaaS live.",
        "Capacity 200.",
        "Publish dashboard data.js."
      ]
    },
    "week": {
      "label": "Week of 2026-09-08",
      "items": [
        "Watch send lag.",
        "SCALE queue fills to 50239/50240 only.",
        "HOLD LI activate."
      ]
    }
  },
  "capacity": {
    "mailboxes_active": 10,
    "per_mailbox_day": 20,
    "weekday_ceiling": 200,
    "usable_after_reserve": 160,
    "scale_target_day": 300,
    "gap": 100,
    "source": "Salesforge list_mailboxes \u00b7 10\u00d720"
  },
  "inboxes": {
    "active": 10,
    "warmed": null,
    "warming": null,
    "new": null,
    "warmup_days": 14,
    "per_mailbox_day": 20,
    "source": "warmup mix unread"
  },
  "funnel_baseline": {
    "control": "C1-N1-v2 / 50239 + EXP-TACTIC-001-v2 / 50240",
    "contacted": 41,
    "emails_sent": 68,
    "eligible_delivered": null,
    "salesforge_replies": 0,
    "human_replies_non_ooo": 1,
    "qualified_positive_replies": null,
    "booked_held": null,
    "opportunities": null,
    "bounce": 1,
    "source": "Legacy 48153 cumulative send stats; v2/SaaS emails_sent still 0 on get_sequence analytics"
  },
  "campaigns": [
    {
      "id": "50239",
      "name": "C1-N1-v2",
      "status": "live",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE ecom control. activeEnrollment 139 / totalLead 141. emails_sent 0. 50/50 new enrolls with 50240.",
      "url": "https://app.salesforge.ai",
      "source": "get_sequence 2026-09-14"
    },
    {
      "id": "50240",
      "name": "EXP-TACTIC-001-v2",
      "status": "live",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE ecom challenger deposit-first. active 134 / total 137. emails_sent 0. TEST vs 50239 after sends.",
      "url": "https://app.salesforge.ai",
      "source": "get_sequence 2026-09-14"
    },
    {
      "id": "50289",
      "name": "C1-SaaS Growth Leaders",
      "status": "live",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE SaaS meetings offer (Dylan exact-yes). 22 enrolled. A/B work-free vs waive next month. NOT ecommerce.",
      "url": "https://app.salesforge.ai",
      "source": "get_sequence 2026-09-14"
    },
    {
      "id": "48153",
      "name": "C1-N1 (legacy in-flight)",
      "status": "live",
      "channel": "email",
      "contacted": 41,
      "sent": 68,
      "delivered": null,
      "replies": 0,
      "booked": 0,
      "bounce": 1,
      "insight": "Legacy in-flight only. Operator: ~12 active left after uncontacted backfill to v2.",
      "url": "https://app.salesforge.ai",
      "source": "CO + prior SF analytics"
    },
    {
      "id": "50048",
      "name": "EXP-TACTIC-001 (legacy)",
      "status": "completed",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "COMPLETED after uncontacted backfill to v2. active 0 / completed 71.",
      "url": "https://app.salesforge.ai",
      "source": "get_sequence status=completed"
    },
    {
      "id": "50224",
      "name": "LI-C1",
      "status": "draft",
      "channel": "linkedin",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "DRAFT \u2014 HOLD until Dylan yes.",
      "url": "https://app.salesforge.ai",
      "source": "CO"
    },
    {
      "id": "50290",
      "name": "SaaS Demand-Gen Hiring",
      "status": "draft",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "DRAFT gated. Do not enroll.",
      "url": "https://app.salesforge.ai",
      "source": "CO"
    },
    {
      "id": "50027",
      "name": "EXP-MSG-001 (HOLD)",
      "status": "draft",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "Held/superseded by TACTIC-v2.",
      "url": "https://app.salesforge.ai",
      "source": "CO"
    }
  ],
  "motion_surface": [
    {
      "id": "email_ecommerce",
      "label": "Email ecommerce",
      "kind": "channel",
      "status": "live",
      "note": "50239+50240 50/50.",
      "url": "https://app.salesforge.ai"
    },
    {
      "id": "email_saas",
      "label": "Email SaaS",
      "kind": "channel",
      "status": "live",
      "note": "50289 live meetings offer. 50290 gated."
    },
    {
      "id": "linkedin",
      "label": "LinkedIn",
      "kind": "channel",
      "status": "proposed",
      "note": "LI-C1 50224 HOLD until Dylan yes."
    },
    {
      "id": "mass_video",
      "label": "Mass video",
      "kind": "channel",
      "status": "not_started",
      "note": "After sends are real."
    },
    {
      "id": "lead_magnets",
      "label": "Lead magnets",
      "kind": "channel",
      "status": "not_started",
      "note": "Score on qualified positives."
    },
    {
      "id": "offer_ecom",
      "label": "Offer ecommerce",
      "kind": "lever",
      "status": "live",
      "note": "\u226520% return / 90d or work free."
    },
    {
      "id": "offer_saas",
      "label": "Offer SaaS meetings",
      "kind": "lever",
      "status": "live",
      "note": "90d meeting target; A work-free / B waive month."
    },
    {
      "id": "messaging_cta",
      "label": "Messaging / CTA",
      "kind": "lever",
      "status": "live",
      "note": "Live tests: deposit-first vs offer-led (ecom) + SaaS A/B."
    }
  ],
  "fleet": [
    {
      "name": "Prospecting",
      "id": "2556136",
      "job": "Build eligible pipeline",
      "mode": "prepare",
      "lifecycle": "live",
      "kpi": "Eligible vs 150\u2013200/day",
      "target": "\u2265150\u2013200/day",
      "actual": "eligible 7",
      "working": true,
      "last_outcome": "queue 7; SCALE fills to v2 only",
      "paused_routines": [],
      "status": "supply still binding",
      "url": null
    },
    {
      "name": "Messaging",
      "id": "2786717",
      "job": "Copy and experiments",
      "mode": "audit-first",
      "lifecycle": "live",
      "kpi": "Qualified positive reply rate",
      "target": "qpos rate",
      "actual": null,
      "working": null,
      "last_outcome": "ecom v2 + SaaS 50289 live",
      "paused_routines": [],
      "status": "live tests running",
      "url": null
    },
    {
      "name": "Campaign Operator",
      "id": "2818152",
      "job": "Approved enroll/pause/create",
      "mode": "apply on Dylan yes",
      "lifecycle": "live",
      "kpi": "Approved writes executed",
      "target": "change-sets applied",
      "actual": "99 moved to v2; 50289 launched",
      "working": true,
      "last_outcome": "backfill + SaaS live",
      "paused_routines": [],
      "status": "hand-in-hand",
      "url": "https://app.salesforge.ai"
    },
    {
      "name": "Reply Intelligence",
      "id": "2822878",
      "job": "Classify + draft",
      "mode": "draft-only",
      "lifecycle": "paused",
      "kpi": "Same-day classify+draft",
      "target": "classify+draft",
      "actual": null,
      "working": null,
      "last_outcome": "weekday paused",
      "paused_routines": [
        "weekday routine"
      ],
      "status": "paused",
      "url": null
    },
    {
      "name": "CRM Data Nerd",
      "id": "2908860",
      "job": "Attio truth",
      "mode": "preview-then-apply",
      "lifecycle": "paused",
      "kpi": "Attio match outbound",
      "target": "Attio truth",
      "actual": null,
      "working": null,
      "last_outcome": "weekday paused",
      "paused_routines": [
        "weekday routine"
      ],
      "status": "paused",
      "url": "https://app.attio.com"
    },
    {
      "name": "Outbound Analyst",
      "id": "2929809",
      "job": "Dashboard + reports",
      "mode": "live",
      "lifecycle": "live",
      "kpi": "data.js current",
      "target": "Pages + brain current",
      "actual": "brain refreshed; Pages publish blocked",
      "working": true,
      "last_outcome": "refresh off CO 13:56Z facts",
      "paused_routines": [],
      "status": "live",
      "url": "https://dylang001.github.io/orchidea-ops-report/"
    }
  ],
  "paused_routines": [
    {
      "owner": "Reply Intelligence",
      "routine": "weekday routine",
      "status": "paused"
    },
    {
      "owner": "CRM Data Nerd",
      "routine": "weekday routine",
      "status": "paused"
    },
    {
      "owner": "Alfred",
      "routine": "weekly / monthly / quarterly reviews",
      "status": "paused"
    }
  ],
  "open_items": [
    "Publish data.js to GitHub Pages (cloud usage / GH login blocked)",
    "v2 + SaaS emails_sent still 0 \u2014 watch NY 11\u201317 send window",
    "Eligible queue 7 vs 150\u2013200/day \u2014 SCALE fills to 50239/50240 only",
    "LI-C1 50224 HOLD until Dylan yes",
    "SaaS 50290 draft gated",
    "Sent-today / remaining-to-capacity unknown",
    "Inbox warmup mix unread",
    "HOLD mailbox 20\u219225\u219230 ramp",
    "Reply + CRM weekday routines paused"
  ],
  "bottlenecks": [
    {
      "rank": 1,
      "type": "execution",
      "item": "Live sequences enrolled but not sending",
      "gap": "273 active on ecom v2 + 22 SaaS with emails_sent 0.",
      "journey": "Enrolled \u2192 Sent dark.",
      "unblock": "Confirm sender/window health in NY business hours.",
      "test": "Do not judge 50239 vs 50240 until first-touch sends."
    },
    {
      "rank": 2,
      "type": "supply",
      "item": "Queue 7 vs 150\u2013200/day",
      "gap": "Thin eligible pipeline.",
      "journey": "Before Contacted.",
      "unblock": "Prospector fill; CO enrolls ecom to 50239/50240 only.",
      "test": "Not a copy test."
    },
    {
      "rank": 3,
      "type": "structural",
      "item": "Capacity 200 vs 300",
      "gap": "Week-1 done; ramp held.",
      "journey": "Send capacity.",
      "unblock": "HOLD 20\u219225\u219230 until sends+queue healthy.",
      "test": "Scale horizontally later."
    },
    {
      "rank": 4,
      "type": "ops",
      "item": "LI + 50290 gated; Reply/CRM paused",
      "gap": "Channels and triage lag.",
      "journey": "New motions + Replies\u2192Booked.",
      "unblock": "Dylan yes on LI/50290 when ready; decide Reply/CRM enable.",
      "test": "One variable at a time."
    }
  ],
  "experiments": [
    {
      "id": "EXP-TACTIC-001-v2",
      "status": "active",
      "control": "C1-N1-v2/50239",
      "note": "Live 50/50. active 134. TEST after sends.",
      "url": "https://app.salesforge.ai"
    },
    {
      "id": "C1-SaaS-50289",
      "status": "active",
      "control": null,
      "note": "Live SaaS meetings A/B. 22 enrolled.",
      "url": "https://app.salesforge.ai"
    },
    {
      "id": "EXP-MSG-001",
      "status": "held_superseded",
      "control": "was 48153",
      "note": "Do not activate.",
      "url": null
    },
    {
      "id": "LI-C1",
      "status": "draft_hold",
      "control": null,
      "note": "HOLD until Dylan yes.",
      "url": "https://app.salesforge.ai"
    }
  ],
  "daily": {
    "as_of": "2026-09-14",
    "sends": null,
    "delivered": null,
    "remaining_to_capacity": null,
    "capacity_used": null,
    "anomalies": [
      "ecom v2 273 active / emails_sent 0",
      "SaaS 50289 22 enrolled / emails_sent 0",
      "Pages data.js still seed-stale until publish"
    ],
    "fleet_blockers_changed": [
      "99 uncontacted moved to v2",
      "50048 completed",
      "50289 SaaS live"
    ],
    "decisions_needed": [
      "Publish path for data.js (GH login / manual commit)",
      "LI-C1 activate or keep HOLD",
      "50290 keep gated?",
      "When to enable Reply/CRM routines"
    ],
    "notes": [
      "KEEP: v2 ecom + SaaS 50289",
      "KILL: none",
      "SCALE: queue fills \u2192 50239/50240 only",
      "HOLD: LI activate + inbox ramp"
    ],
    "source": "SF verify + CO 13:56Z"
  },
  "weekly": {
    "label": "Week of 2026-09-08",
    "keep": [
      "50239/50240 ecom cutover",
      "SaaS 50289"
    ],
    "kill": [],
    "scale": [
      "Prospector fills \u2192 ecom v2 only"
    ],
    "test": [
      "50239 vs 50240 after sends",
      "SaaS 50289 A/B after sends"
    ],
    "insights": [
      "Portfolio now: ecom v2 + SaaS live; legacy 50048 done; 48153 draining.",
      "Binding issues: send lag + thin queue \u2014 not missing cutover.",
      "Do not activate LI until Dylan exact-yes."
    ],
    "notes": [
      "Insufficient sends to judge copy."
    ],
    "source": "Analyst 2026-09-14"
  },
  "monthly": {
    "label": "September 2026",
    "trends": [],
    "remaining_to_capacity": null,
    "sends": null,
    "capacity_used": null,
    "insights": [
      "Two live motions: ecommerce v2 test + SaaS meetings offer.",
      "Capacity 200 known; remaining-to-capacity unread.",
      "Publish dashboard so Dylan\u2019s daily review matches Salesforge."
    ],
    "goals": [
      {
        "id": "revenue_growth_20",
        "label": "20% revenue growth, or keep working free until hit",
        "target": "20% revenue growth",
        "progress": null,
        "baseline": null,
        "status": "unknown",
        "note": "No deadline. Not ROAS."
      }
    ],
    "next_bets": [
      "Confirm first v2 + SaaS sends",
      "Refill queue to 150\u2013200/day",
      "Publish data.js",
      "HOLD LI + 50290 + inbox ramp"
    ],
    "notes": [
      "Execution + supply dominate."
    ],
    "source": "Analyst 2026-09-14"
  }
,
  "gtm_radar": {
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
}
;
