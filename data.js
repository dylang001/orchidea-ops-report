/**
 * Orchidea Outbound / GTM Ops · living snapshot.
 * Analyst P0 industry coverage refresh 2026-09-14 JHB (post-17:19Z industry launch).
 */
window.ORCHIDEA_OPS = {
  "meta": {
    "brand": "Orchidea",
    "partner": "Growth Partner",
    "title": "Outbound & GTM Ops Report",
    "generated_on": "2026-09-14",
    "timezone": "Africa/Johannesburg",
    "offer_live": "Ecommerce live Sep 8: 20% revenue growth OR work free (not ROAS). SaaS 50289: qualified meetings offer. Industry meta 5 pilots live.",
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
      "Ecommerce v2 live: 50239 + 50240. SaaS 50289 live. Industry 50383/50385/50387/50388/50392 live (enrolled 88).",
      "Legacy 48153 remains in-flight only; 50048 is completed.",
      "50290 + LI-C1 remain gated/HOLD.",
      "v2+SaaS first-touch sends 56 (prior evening analytics). Industry analytics sent 0 — provider lag after ~17:19Z launch.",
      "Pipeline split: eligible_ecom=7, eligible_saas=0, eligible_industry=null, industry_enrolled=88."
    ]
  },
  "exec": {
    "situation": "Three live email motions: ecom v2 (56 sends), SaaS 50289 (3 of those), industry 88 enrolled (sent 0 analytics lag). Queue thin. Capacity 200.",
    "happening": [
      "Ecommerce v2 50239 (active 135) + 50240 (active 133) live with 53 sends.",
      "SaaS 50289 live with qualified-meetings offer and 3 sends (active 22).",
      "Industry meta 5 sequences live: enrolled 88 total (19+21+21+6+21); launched ~17:19Z; analytics sent still 0 (lag).",
      "Two human replies triaged WRONG_PERSON/referral; two drafts ready (on-demand; RI weekday paused).",
      "Capacity 10×20=200; scale target 300, gap 100."
    ],
    "not_happening": [
      "No qualified positive replies yet (0 / 56 first-touch).",
      "No industry standing eligible queue (eligible_industry=null).",
      "LI-C1 50224 HOLD; SaaS 50290 gated.",
      "Sent-today / remaining-to-capacity unknown (mailbox API).",
      "Inbox warmup mix unread."
    ],
    "source": "Analyst P0 industry coverage refresh 2026-09-14 (post-17:19Z launch; no SF re-pull — Operator/Dylan counts + prior evening analytics)"
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
      "status": "v2 + SaaS + industry sending/enrolled; refill ecom queue; then judge copy.",
      "items": [
        "Confirm sends in NY window (ecom/SaaS done; watch industry lag).",
        "Fill ecom queue toward 150–200/day.",
        "HOLD LI + 50290 + inbox ramp."
      ]
    },
    "month": {
      "label": "September",
      "items": [
        "v2 cutover + SaaS live + industry 88 enrolled.",
        "Capacity 200.",
        "Publish dashboard data.js with full live coverage."
      ]
    },
    "week": {
      "label": "Week of 2026-09-08",
      "items": [
        "Watch industry analytics lag + ecom send health.",
        "SCALE queue fills to 50239/50240 only.",
        "HOLD LI activate; industry replenish off until next CS."
      ]
    }
  },
  "capacity": {
    "mailboxes_active": 10,
    "per_mailbox_day": 20,
    "weekday_ceiling": 200,
    "usable_after_reserve": 160,
    "scale_target_day": 300,
    "scale_target": 300,
    "gap": 100,
    "remaining_to_capacity": null,
    "source": "Mailbox capacity: 10×20; sent-today unavailable",
    "eligible_ecom": 7,
    "eligible_saas": 0,
    "eligible_industry": null,
    "industry_enrolled": 88,
    "soft_cap_ecom": 200
  },
  "pipeline": {
    "eligible_ecom": 7,
    "eligible_saas": 0,
    "eligible_industry": null,
    "industry_enrolled": 88,
    "soft_cap_ecom": 200,
    "saas_enrolled_cleared": 22,
    "sources": {
      "eligible_ecom": "/home/box/gtm-brain/state/eligible-queue.json (counts.eligible=7 @ 13:25Z)",
      "eligible_saas": "/home/box/gtm-brain/state/eligible-queue-saas.json (eligible=0; enrolled_cleared=22 @ 13:31Z)",
      "eligible_industry": "null — no standing industry queue file",
      "industry_enrolled": "active-campaigns.json industry_meta_2026_09_14.enrolled_total=88; launched ~17:19Z"
    },
    "note": "eligible_industry is null (no standing queue), not 0. industry_enrolled is live enrollment, not queue depth."
  },
  "inboxes": {
    "active": 10,
    "warmed": null,
    "warming": null,
    "new": null,
    "warmup_days": 14,
    "per_mailbox_day": 20,
    "source": "Mailbox API exposes daily limit only; warmup mix and sent-today unavailable"
  },
  "funnel_baseline": {
    "control": "50239 + 50240 (ecommerce v2); SaaS 50289 + industry 5 tracked separately",
    "contacted": 56,
    "emails_sent": 56,
    "eligible_delivered": null,
    "salesforge_replies": 2,
    "human_replies_non_ooo": 2,
    "qualified_positive_replies": 0,
    "booked_held": null,
    "opportunities": null,
    "bounce": 1,
    "bounce_v2": 1,
    "industry_enrolled": 88,
    "industry_sent": 0,
    "source": "v2+SaaS first-touch from prior evening analytics; industry enroll 88 / sent 0 (analytics lag)"
  },
  "campaigns": [
    {
      "id": "50239",
      "name": "C1-N1-v2",
      "status": "live",
      "channel": "email",
      "contacted": 33,
      "sent": 33,
      "delivered": null,
      "replies": 1,
      "booked": null,
      "bounce": 1,
      "insight": "LIVE ecommerce v2 control. active 135 / total 141. Analytics sends real; test vs 50240 at small n.",
      "url": "https://app.salesforge.ai",
      "source": "Prior evening analytics (computedAt ~16:48Z) kept for ecom/SaaS sends; industry enroll from Operator binding + SF enrollment snapshot; sent=0 analytics lag noted",
      "active": 135,
      "total": 141
    },
    {
      "id": "50240",
      "name": "EXP-TACTIC-001-v2",
      "status": "live",
      "channel": "email",
      "contacted": 20,
      "sent": 20,
      "delivered": null,
      "replies": 1,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE ecommerce v2 challenger. active 133 / total 137. Test vs 50239 at small n.",
      "url": "https://app.salesforge.ai",
      "source": "Prior evening analytics (computedAt ~16:48Z) kept for ecom/SaaS sends; industry enroll from Operator binding + SF enrollment snapshot; sent=0 analytics lag noted",
      "active": 133,
      "total": 137
    },
    {
      "id": "50289",
      "name": "C1-SaaS Growth Leaders",
      "status": "live",
      "channel": "email",
      "contacted": 3,
      "sent": 3,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE SaaS qualified-meetings offer. active 22 / total 22. Keep separate from ecommerce.",
      "url": "https://app.salesforge.ai",
      "source": "Prior evening analytics (computedAt ~16:48Z) kept for ecom/SaaS sends; industry enroll from Operator binding + SF enrollment snapshot; sent=0 analytics lag noted",
      "active": 22,
      "total": 22
    },
    {
      "id": "50383",
      "name": "Health | Appointments offer",
      "status": "live",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE industry pilot. enrolled/active 19/19; analytics sent 0 (lag after ~17:19Z launch). Replenish off.",
      "url": "https://app.salesforge.ai",
      "source": "Operator industry enroll+launch 2026-09-14; SF enrollment snapshot",
      "active": 19,
      "total": 19,
      "group": "industry",
      "enrolled": 19
    },
    {
      "id": "50385",
      "name": "Fitness | Trial bookings offer",
      "status": "live",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE industry pilot. enrolled/active 21/21; analytics sent 0 (lag). Replenish off.",
      "url": "https://app.salesforge.ai",
      "source": "Operator industry enroll+launch 2026-09-14; SF enrollment snapshot",
      "active": 21,
      "total": 21,
      "group": "industry",
      "enrolled": 21
    },
    {
      "id": "50387",
      "name": "Real Estate | Enquiries/viewings offer",
      "status": "live",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE industry pilot. enrolled/active 21/21; analytics sent 0 (lag). Replenish off.",
      "url": "https://app.salesforge.ai",
      "source": "Operator industry enroll+launch 2026-09-14; SF enrollment snapshot",
      "active": 21,
      "total": 21,
      "group": "industry",
      "enrolled": 21
    },
    {
      "id": "50388",
      "name": "Education | Enrolments offer",
      "status": "live",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE industry pilot. enrolled/active 6/6; analytics sent 0 (lag). Replenish off.",
      "url": "https://app.salesforge.ai",
      "source": "Operator industry enroll+launch 2026-09-14; SF enrollment snapshot",
      "active": 6,
      "total": 6,
      "group": "industry",
      "enrolled": 6
    },
    {
      "id": "50392",
      "name": "Home Services | Booked jobs offer",
      "status": "live",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE industry pilot. enrolled/active 21/21; analytics sent 0 (lag). Footnote: companyOutreachLimitEnabled=false. Replenish off.",
      "url": "https://app.salesforge.ai",
      "source": "Operator industry enroll+launch 2026-09-14; SF enrollment snapshot",
      "active": 21,
      "total": 21,
      "group": "industry",
      "enrolled": 21,
      "footnote": "companyOutreachLimitEnabled=false"
    },
    {
      "id": "48153",
      "name": "C1-N1 (legacy in-flight)",
      "status": "live",
      "channel": "email",
      "contacted": 44,
      "sent": 72,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 1,
      "insight": "LIVE legacy in-flight only; no new enrolls. active 10 / total 116 draining.",
      "url": "https://app.salesforge.ai",
      "source": "Prior evening analytics (computedAt ~16:48Z) kept for ecom/SaaS sends; industry enroll from Operator binding + SF enrollment snapshot; sent=0 analytics lag noted",
      "active": 10,
      "total": 116
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
      "insight": "COMPLETED; superseded/backfilled.",
      "url": "https://app.salesforge.ai",
      "source": "Prior evening analytics (computedAt ~16:48Z) kept for ecom/SaaS sends; industry enroll from Operator binding + SF enrollment snapshot; sent=0 analytics lag noted",
      "active": 0,
      "total": 71
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
      "insight": "DRAFT — LI HOLD pending Dylan exact yes.",
      "url": "https://app.salesforge.ai",
      "source": "Prior evening analytics (computedAt ~16:48Z) kept for ecom/SaaS sends; industry enroll from Operator binding + SF enrollment snapshot; sent=0 analytics lag noted",
      "active": 0,
      "total": 0
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
      "insight": "DRAFT — gated; do not enroll.",
      "url": "https://app.salesforge.ai",
      "source": "Prior evening analytics (computedAt ~16:48Z) kept for ecom/SaaS sends; industry enroll from Operator binding + SF enrollment snapshot; sent=0 analytics lag noted",
      "active": 0,
      "total": 0
    },
    {
      "id": "50027",
      "name": "EXP-MSG-001 (HOLD / superseded)",
      "status": "draft",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "HELD/superseded; do not activate.",
      "url": "https://app.salesforge.ai",
      "source": "Prior evening analytics (computedAt ~16:48Z) kept for ecom/SaaS sends; industry enroll from Operator binding + SF enrollment snapshot; sent=0 analytics lag noted",
      "active": 0,
      "total": 0
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
      "id": "email_industry",
      "label": "Email industry",
      "kind": "channel",
      "status": "live",
      "note": "50383/50385/50387/50388/50392 live; enrolled 88; analytics sent 0 (lag); replenish off."
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
      "note": "≥20% return / 90d or work free."
    },
    {
      "id": "offer_saas",
      "label": "Offer SaaS meetings",
      "kind": "lever",
      "status": "live",
      "note": "90d meeting target; A work-free / B waive month."
    },
    {
      "id": "offer_industry",
      "label": "Offer industry meta",
      "kind": "lever",
      "status": "live",
      "note": "Appointments / trials / enquiries / enrolments / booked jobs — 5 pilots."
    },
    {
      "id": "messaging_cta",
      "label": "Messaging / CTA",
      "kind": "lever",
      "status": "live",
      "note": "Live tests: deposit-first vs offer-led (ecom) + SaaS A/B + industry pilots."
    }
  ],
  "fleet": [
    {
      "name": "Prospecting",
      "id": "2556136",
      "job": "Build eligible pipeline",
      "mode": "prepare",
      "lifecycle": "live",
      "kpi": "Eligible vs 150–200/day",
      "target": "≥150–200/day",
      "actual": "eligible_ecom 7; eligible_saas 0; eligible_industry null",
      "working": true,
      "last_outcome": "ecom queue 7 @ 13:25Z; saas cleared 22; no industry standing queue",
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
      "target": "qpos / first-touch_sent",
      "actual": "qpos 0 / first-touch sent 56 (rate not scored)",
      "working": null,
      "last_outcome": "ecom v2 + SaaS 50289 + industry 5 live; qpos 0 at n=56 first-touch",
      "paused_routines": [],
      "status": "live tests running; rate not scored at small n",
      "url": null
    },
    {
      "name": "Campaign Operator",
      "id": "2818152",
      "job": "Approved enroll/pause/create",
      "mode": "apply on Dylan yes",
      "lifecycle": "live",
      "kpi": "CS fidelity + unexpected-pause watch",
      "target": "0 unauthorized SF status changes",
      "actual": "industry 88 live + prior ecom/saas",
      "working": true,
      "last_outcome": "industry meta 5 launched ~17:19Z enroll 88; ecom v2 + 50289 already live",
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
      "actual": "2 drafts ready (on-demand)",
      "working": false,
      "last_outcome": "2 drafts ready; 2 Dylan exact yes decisions needed; weekday paused",
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
      "kpi": "Attio match% outbound",
      "target": "Attio match% of outbound contacts",
      "actual": null,
      "working": false,
      "last_outcome": "weekday paused; match% null until unpaused",
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
      "kpi": "data.js current + coverage checklist",
      "target": "Pages + brain current; all live SF ids covered",
      "actual": "P0 industry coverage refresh",
      "working": true,
      "last_outcome": "P0: industry 5 + pipeline split + fleet honesty; weekly/monthly superseded morning stale",
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
    "P0 coverage: industry 50383/50385/50387/50388/50392 live + enrolled 88 now on dash (launched ~17:19Z after prior 17:07 refresh).",
    "Queue ecom eligible 7 vs 150–200/day — SCALE fills to 50239/50240 only; saas eligible 0 (22 cleared to 50289); industry no standing queue.",
    "Cuyana WRONG_PERSON: Dylan exact yes to suppress Karla + RESEARCH Wendy (wendy@cuyana.com); Domitilla draft ready, applied=false.",
    "Parachute WRONG_PERSON: Dylan exact yes to suppress Ariel work + RESEARCH Mehdi (mehdi@parachutehome.com); Costa draft ready; do not use ariel.kaye@gmail.com without yes.",
    "LI-C1 50224 HOLD until Dylan yes.",
    "SaaS 50290 draft gated.",
    "Sent-today / remaining-to-capacity unknown — mailbox API has no sent-today field.",
    "Inbox warmup mix unread.",
    "HOLD mailbox 20→25→30 ramp.",
    "Reply + CRM weekday routines paused.",
    "50392 footnote: companyOutreachLimitEnabled=false — Operator confirm vs peers.",
    "KPI proposals: Prospector net-adds/day; Operator CS fidelity + unexpected-pause watch; Messaging qpos/denom; CRM Attio match%; Analyst coverage checklist vs active-campaigns.json."
  ],
  "bottlenecks": [
    {
      "rank": 1,
      "type": "supply",
      "item": "Ecom queue thin",
      "gap": "eligible_ecom 7 vs 150–200/day; eligible_saas 0; eligible_industry null.",
      "journey": "Before Contacted.",
      "unblock": "Prospector fill ecom; CO enrolls ecom to 50239/50240 only. Industry replenish off.",
      "test": "Not a copy test."
    },
    {
      "rank": 2,
      "type": "funnel",
      "item": "No qualified positives yet",
      "gap": "56 v2+SaaS first-touch sends, 2 human replies, 0 qpos; industry sent 0 analytics.",
      "journey": "Sent → Replies → Qualified.",
      "unblock": "Keep sending; do not over-read small n; watch industry analytics catch-up.",
      "test": "50239 vs 50240 at small n."
    },
    {
      "rank": 3,
      "type": "structural",
      "item": "Capacity 200 vs 300 target",
      "gap": "Scale gap 100.",
      "journey": "Send capacity.",
      "unblock": "HOLD 20→25→30 until sends+queue healthy.",
      "test": "Scale horizontally later."
    },
    {
      "rank": 4,
      "type": "ops",
      "item": "RI decisions pending",
      "gap": "Two WRONG_PERSON/referral outcomes need Dylan exact yes; RI weekday paused.",
      "journey": "Replies → CRM / next contact.",
      "unblock": "Suppress old contacts and research referrals only after exact yes.",
      "test": "One variable at a time."
    }
  ],
  "experiments": [
    {
      "id": "EXP-TACTIC-001-v2",
      "status": "active",
      "control": "C1-N1-v2/50239",
      "note": "Live 50/50; 53 ecommerce v2 sends. TEST at small n only.",
      "url": "https://app.salesforge.ai"
    },
    {
      "id": "C1-SaaS-50289",
      "status": "active",
      "control": null,
      "note": "Live qualified-meetings offer; 3 sends.",
      "url": "https://app.salesforge.ai"
    },
    {
      "id": "INDUSTRY-META-5",
      "status": "active",
      "control": null,
      "note": "50383/50385/50387/50388/50392 live; enrolled 88; analytics sent 0 (lag); replenish off.",
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
      "note": "HOLD until Dylan exact yes.",
      "url": "https://app.salesforge.ai"
    }
  ],
  "daily": {
    "as_of": "2026-09-14",
    "sends": 56,
    "delivered": null,
    "remaining_to_capacity": null,
    "capacity_used": null,
    "anomalies": [
      "Mailbox API has no sent-today or remaining-to-capacity field.",
      "eligible_ecom 7; eligible_saas 0; eligible_industry null; industry_enrolled 88.",
      "Industry analytics sent 0 despite live enroll — provider lag after ~17:19Z launch.",
      "Small n: 56 v2+SaaS first-touch; do not over-judge copy."
    ],
    "fleet_blockers_changed": [
      "Industry 5 live + enrolled 88 (post prior 17:07 refresh).",
      "50239 active corrected to 135; 48153 active corrected to 10.",
      "Fleet honesty: RI/CRM working false; Messaging actual qpos 0 / first-touch 56 (rate not scored).",
      "Weekly/monthly rewritten — morning per-mailbox-day 15 / ceiling 150 / queue depth four / legacy 48153-as-control killed."
    ],
    "reply_intelligence": {
      "outcomes": [
        {
          "account": "Cuyana",
          "old_contact": "Karla",
          "outcome": "WRONG_PERSON",
          "referral": "Wendy",
          "referral_email": "wendy@cuyana.com",
          "draft_owner": "Domitilla",
          "draft_status": "ready",
          "applied": false,
          "decision_needed": "Dylan exact yes: suppress Karla + RESEARCH Wendy"
        },
        {
          "account": "Parachute",
          "old_contact": "Ariel",
          "outcome": "WRONG_PERSON",
          "referral": "Mehdi",
          "referral_email": "mehdi@parachutehome.com",
          "draft_owner": "Costa",
          "draft_status": "ready",
          "applied": false,
          "decision_needed": "Dylan exact yes: suppress Ariel work + RESEARCH Mehdi; no ariel.kaye@gmail.com without yes"
        }
      ],
      "counts": {
        "human_triaged": 2,
        "drafts_ready": 2,
        "dylan_exact_yes_needed": 2,
        "ooo_skipped": 1,
        "already_handled": 1
      },
      "already_handled_note": "Ben NOT_NOW",
      "learning_flag": "Domitilla Cuyana cold used rejected 20%/90-day return language vs Sep 8 revenue offer."
    },
    "decisions_needed": [
      "Cuyana: Dylan exact yes to suppress Karla + RESEARCH Wendy (wendy@cuyana.com); Domitilla draft ready, applied=false.",
      "Parachute: Dylan exact yes to suppress Ariel work + RESEARCH Mehdi (mehdi@parachutehome.com); Costa draft ready; no ariel.kaye@gmail.com without yes.",
      "Keep LI-C1 50224 on HOLD and 50290 gated.",
      "Do not ramp mailbox limits until sends and queue are healthy.",
      "Operator: confirm 50392 companyOutreachLimitEnabled=false intentional."
    ],
    "notes": [
      "KEEP: v2 + 50289 + industry 5.",
      "KILL: none.",
      "SCALE: ecom queue → 50239/50240 only; industry replenish off until next CS.",
      "HOLD: LI + 50290 + mailbox ramp.",
      "RI: 2 drafts ready (on-demand); weekday paused; 2 Dylan exact yes needed.",
      "Pipeline: eligible_ecom=7, eligible_saas=0, eligible_industry=null, industry_enrolled=88.",
      "KPI proposals: Prospector net-adds/day; Operator CS fidelity + unexpected-pause watch; Messaging qpos/denom; CRM Attio match%; Analyst coverage checklist vs active-campaigns.json.",
      "remaining_to_capacity unknown.",
      "Prospector: ADD net-adds/day (eligible depth + daily net adds) vs soft_cap path ≥150 Stage-A before weekday send window.",
      "Campaign Operator: CS fidelity + unexpected-pause watch (0 unauthorized SF status mutations; enroll only Dylan-yes destinations).",
      "Messaging: qpos / first-touch_sent (denom); track 50239 vs 50240 separately; no fake %.",
      "CRM Data Nerd: Attio match% of outbound contacts (preview→apply); leave null until unpaused with real number.",
      "Outbound Analyst: coverage checklist — all live SF ids in active-campaigns.json appear on dash; refresh ≤1h after material Operator launch."
    ],
    "kpi_proposals": [
      "Prospector: ADD net-adds/day (eligible depth + daily net adds) vs soft_cap path ≥150 Stage-A before weekday send window.",
      "Campaign Operator: CS fidelity + unexpected-pause watch (0 unauthorized SF status mutations; enroll only Dylan-yes destinations).",
      "Messaging: qpos / first-touch_sent (denom); track 50239 vs 50240 separately; no fake %.",
      "CRM Data Nerd: Attio match% of outbound contacts (preview→apply); leave null until unpaused with real number.",
      "Outbound Analyst: coverage checklist — all live SF ids in active-campaigns.json appear on dash; refresh ≤1h after material Operator launch."
    ],
    "source": "Analyst P0 industry coverage refresh 2026-09-14 (post-17:19Z launch; no SF re-pull — Operator/Dylan counts + prior evening analytics)"
  },
  "weekly": {
    "label": "Week of 2026-09-08",
    "keep": [
      "50239/50240 ecom v2",
      "SaaS 50289",
      "Industry meta 5 (50383–50392)"
    ],
    "kill": [],
    "scale": [
      "Prospector fills → ecom v2 only"
    ],
    "test": [
      "50239 vs 50240 at small n"
    ],
    "insights": [
      "Portfolio: ecom v2 + SaaS + industry live; legacy 48153 draining (active 10); 50048 done.",
      "Control for NEW ecom enrolls is 50239 (not legacy 48153). Capacity 10×20=200 (not 10×15).",
      "Pipeline split: eligible_ecom 7 / eligible_saas 0 / eligible_industry null / industry_enrolled 88.",
      "56 v2+SaaS first-touch sends real; industry analytics sent 0 (lag). 2 human replies, 0 qpos.",
      "Binding issues: thin ecom queue + RI exact-yes; not missing cutover/coverage after this P0."
    ],
    "notes": [
      "This weekly slice supersedes morning baseline (killed: per-mailbox-day 15 / ceiling 150, queue depth four, legacy 48153-as-control).",
      "Insufficient sends to judge copy; industry send lag expected post-launch."
    ],
    "source": "Analyst P0 industry coverage refresh 2026-09-14 (post-17:19Z launch; no SF re-pull — Operator/Dylan counts + prior evening analytics)"
  },
  "monthly": {
    "label": "September 2026",
    "trends": [],
    "remaining_to_capacity": null,
    "sends": 56,
    "capacity_used": null,
    "insights": [
      "Three live email motions: ecommerce v2 test, SaaS qualified-meetings, industry meta 5 pilots (88 enrolled).",
      "Capacity 200 (10×20) vs scale target 300; remaining-to-capacity unread.",
      "Pipeline honesty: ecom eligible 7, saas 0, industry null standing queue.",
      "RI has two WRONG_PERSON/referral decisions awaiting Dylan exact yes."
    ],
    "goals": [
      {
        "id": "revenue_growth_20",
        "label": "20% revenue growth, or keep working free until hit",
        "target": "20% revenue growth",
        "progress": null,
        "baseline": null,
        "status": "unknown",
        "note": "Offer live Sep 8. Not ROAS."
      }
    ],
    "next_bets": [
      "Keep v2 + 50289 + industry sending",
      "Refill ecom queue to 150–200/day",
      "Resolve two RI exact-yes decisions",
      "HOLD LI + 50290 + mailbox ramp; industry replenish off"
    ],
    "notes": [
      "Execution + supply dominate. Morning monthly (per-mailbox-day 15 / ceiling 150 / queue4 / legacy 48153-as-control) superseded."
    ],
    "source": "Analyst P0 industry coverage refresh 2026-09-14 (post-17:19Z launch; no SF re-pull — Operator/Dylan counts + prior evening analytics)"
  },
  "reply_intelligence": {
    "outcomes": [
      {
        "account": "Cuyana",
        "old_contact": "Karla",
        "outcome": "WRONG_PERSON",
        "referral": "Wendy",
        "referral_email": "wendy@cuyana.com",
        "draft_owner": "Domitilla",
        "draft_status": "ready",
        "applied": false,
        "decision_needed": "Dylan exact yes: suppress Karla + RESEARCH Wendy"
      },
      {
        "account": "Parachute",
        "old_contact": "Ariel",
        "outcome": "WRONG_PERSON",
        "referral": "Mehdi",
        "referral_email": "mehdi@parachutehome.com",
        "draft_owner": "Costa",
        "draft_status": "ready",
        "applied": false,
        "decision_needed": "Dylan exact yes: suppress Ariel work + RESEARCH Mehdi; no ariel.kaye@gmail.com without yes"
      }
    ],
    "counts": {
      "human_triaged": 2,
      "drafts_ready": 2,
      "dylan_exact_yes_needed": 2,
      "ooo_skipped": 1,
      "already_handled": 1
    },
    "already_handled_note": "Ben NOT_NOW",
    "learning_flag": "Domitilla Cuyana cold used rejected 20%/90-day return language vs Sep 8 revenue offer."
  },
  "publish_note": "P0 industry coverage refresh 2026-09-14 — industry 88 + pipeline split + fleet honesty; gtm_radar preserved; weekly/monthly rewritten.",
  "gtm_radar": {
    "generated_on": "2026-09-14",
    "timezone": "Africa/Johannesburg",
    "source": "Research seed 2026-09-14. Research bot overwrites gtm_radar only.",
    "items": [
      {
        "id": "radar-instantly-2026",
        "title": "2026 cold email reply ladder",
        "published": "2026-01-12",
        "channel": "email",
        "confidence": "benchmark",
        "status": "watch",
        "metric": "3.43% avg · 10%+ elite",
        "source_name": "Instantly Cold Email Benchmark Report 2026",
        "url": "https://instantly.ai/cold-email-benchmark-report-2026",
        "maps_to": "funnel:replies",
        "summary": "Platform-wide 2026 benchmark: average reply rate 3.43%, top quartile 5.5%+, elite 10%+. Elite senders keep first-touch under 80 words, one CTA, and A/B test weekly.",
        "why_for_us": "C1-N1 is at 0 human replies on 68 sends. Do not grade copy until delivered is known. The number to watch after Analyst first-run is reply rate vs this ladder, not send ceiling.",
        "proof": {
          "type": "bars",
          "caption": "Reply-rate tiers from Instantly 2026 (Jan 1–Dec 18 2025 data window).",
          "rows": [
            {
              "label": "Elite / top 10%",
              "value": 10.7,
              "hint": "10.7%+"
            },
            {
              "label": "Top quartile",
              "value": 5.5,
              "hint": "5.5%+"
            },
            {
              "label": "Average",
              "value": 3.43,
              "hint": "3.43%"
            },
            {
              "label": "C1-N1 (this week)",
              "value": 0,
              "hint": "0 / 68 · delivered unknown"
            }
          ]
        }
      },
      {
        "id": "radar-followups-58-42",
        "title": "42% of replies arrive after email 1",
        "published": "2026-01-12",
        "channel": "email",
        "confidence": "benchmark",
        "status": "try",
        "metric": "58% step 1 · 42% follow-ups",
        "source_name": "Instantly Cold Email Benchmark Report 2026",
        "url": "https://instantly.ai/cold-email-benchmark-report-2026",
        "maps_to": "motion:email_outbound",
        "summary": "Same Instantly 2026 set: 58% of replies come from the first touch, 42% from later steps. Sweet spot is 4–7 touches; under four leaves replies on the table. Space 3–4 days. Step 2 should feel like a reply, not a reminder (~30% lift in their writeup).",
        "why_for_us": "Before judging EXP-MSG-001, confirm C1-N1 actually has 4–7 value-adding steps. A one-and-done control cannot be compared to this benchmark.",
        "proof": {
          "type": "split",
          "caption": "Share of all replies by sequence step (Instantly 2026).",
          "rows": [
            {
              "label": "Step 1",
              "value": 58,
              "hint": "sets the ceiling"
            },
            {
              "label": "Follow-ups",
              "value": 42,
              "hint": "4–7 touches"
            }
          ]
        }
      },
      {
        "id": "radar-ab-before-copy",
        "title": "Don't A/B copy on a blind funnel",
        "published": "2026-01-01",
        "channel": "cta",
        "confidence": "vendor",
        "status": "watch",
        "metric": "~1,500 sends / variant",
        "source_name": "Unify GTM · Cold Email A/B Testing",
        "url": "https://www.unifygtm.com/explore/cold-email-ab-testing",
        "maps_to": "exp:EXP-MSG-001",
        "summary": "Unify's 2026 testing framework: one variable at a time, pre-segment by intent, ~1,500+ sends per variant, hold-out when you want to measure vs doing nothing. Audience quality caps the result more than copy. They cite Instantly 2026 that 42% of replies come from follow-ups.",
        "why_for_us": "EXP-MSG-001 is proposed, not live. Activating a chat-CTA test on 0 human replies and unknown delivered teaches nothing. Unblock delivered first, then test one lever.",
        "proof": {
          "type": "compare",
          "caption": "What a valid copy test needs vs what C1-N1 has today.",
          "rows": [
            {
              "label": "Sends per variant (Unify)",
              "value": 1500,
              "hint": "minimum cited"
            },
            {
              "label": "C1-N1 sent (observed)",
              "value": 68,
              "hint": "control only"
            },
            {
              "label": "Human replies",
              "value": 0,
              "hint": "observed zero"
            }
          ]
        }
      },
      {
        "id": "radar-cta-hybrid",
        "title": "Question CTA, then meeting ask",
        "published": "2026-05-29",
        "channel": "cta",
        "confidence": "operator_test",
        "status": "try",
        "metric": "9.4% vs 5.2% reply",
        "source_name": "Growtoro · Meeting CTA vs Soft Ask",
        "url": "https://growtoro.com/blog/cold-email-cta-meeting-vs-soft-ask-split-test",
        "maps_to": "exp:EXP-MSG-001",
        "summary": "Controlled split across 80k+ sends, same ICP/opener/body, CTA only. Direct meeting ask: 5.2% reply / 8 meetings per 1k. Soft interest-check: 7.8% / 14. Question with no meeting ask: 9.4% / 16, but only if the team converts the thread. Hybrid sequence (question → soft → meeting → breakup) hit 31 meetings / 1k on 40k sends. Calendar links in email 1 cut replies ~30%.",
        "why_for_us": "EXP-MSG-001 is Sep 8 verbatim + chat CTA. Chat is closer to a question than a calendar dump. Hold that shape. Do not bolt a booking link onto email 1. Reply Intelligence must be unpaused before a question-CTA can convert threads.",
        "proof": {
          "type": "bars",
          "caption": "Reply rate by first-email CTA (Growtoro, 80k+ sends).",
          "rows": [
            {
              "label": "Question, no meeting",
              "value": 9.4,
              "hint": "51% of replies positive"
            },
            {
              "label": "Soft interest-check",
              "value": 7.8,
              "hint": "38% positive"
            },
            {
              "label": "Direct meeting + times",
              "value": 5.2,
              "hint": "22% positive"
            }
          ]
        }
      },
      {
        "id": "radar-lead-magnet-n42k",
        "title": "Lead magnets reply less, convert better",
        "published": "2026-07-01",
        "channel": "magnet",
        "confidence": "operator_test",
        "status": "watch",
        "metric": "1 positive / 1,041 vs 1,851",
        "source_name": "Calvin Wiltermood · lead magnet vs personalization",
        "url": "https://www.linkedin.com/posts/wiltermood_for-fun-ive-been-testing-lead-magnets-vs-activity-7449917411354427392-tqwd",
        "maps_to": "motion:lead_magnets",
        "summary": "n=42k, US senior sales/leadership at ProServ or SaaS SMBs. Personalization: 2.7% reply, 2% of those positive (1 positive / 1,851). Lead magnet CTA: 1.2% reply, 8% of those positive (1 positive / 1,041). Magnet won on positive-reply efficiency, lost on raw replies. Reddit operators still report magnet-yes then silence unless the next touch is a conversation, not a PDF drop.",
        "why_for_us": "Lead magnets are not_started. If we test one, score it on qualified positives and booked, not reply rate. Pair with Reply Intelligence so a 'send it' reply does not die as a file drop.",
        "proof": {
          "type": "compare",
          "caption": "Emails per positive reply (Wiltermood, n=42k).",
          "rows": [
            {
              "label": "Personalization",
              "value": 1851,
              "hint": "2.7% reply · 2% positive"
            },
            {
              "label": "Lead magnet CTA",
              "value": 1041,
              "hint": "1.2% reply · 8% positive"
            }
          ]
        }
      },
      {
        "id": "radar-video-sequence",
        "title": "Video is a step, not a channel swap",
        "published": "2026-01-01",
        "channel": "video",
        "confidence": "vendor",
        "status": "watch",
        "metric": "60–90s · hook A/B",
        "source_name": "Sendspark · AI video personalization for outbound",
        "url": "https://www.sendspark.com/resources/ai-video-personalization-outbound-sales",
        "maps_to": "motion:mass_video",
        "summary": "Vendor playbook, not a third-party benchmark: 60–90 second videos, one CTA, send in business hours, A/B the first 5–10 seconds. They claim 2x LinkedIn reply vs InMail when the file sits in the native thread. Sequence pattern they recommend: video email → text follow-up that references the video → LinkedIn. Score meetings, not views.",
        "why_for_us": "Mass video is not_started. Treat it as a step inside the email sequence after delivered is readable, not a replacement for C1-N1. Do not clone-video blast until inbox warmup mix is known.",
        "proof": {
          "type": "bars",
          "caption": "Vendor-claimed relative lifts vs text email (Sendspark). Not independently audited; confidence = vendor.",
          "rows": [
            {
              "label": "Reply (claimed)",
              "value": 250,
              "hint": "200–300% vs text"
            },
            {
              "label": "Meetings (claimed)",
              "value": 45,
              "hint": "40–50% lift"
            },
            {
              "label": "C1-N1 video steps",
              "value": 0,
              "hint": "not started"
            }
          ]
        }
      },
      {
        "id": "radar-multichannel",
        "title": "Test email + LinkedIn as one sequence variable",
        "published": "2026-01-01",
        "channel": "linkedin",
        "confidence": "vendor",
        "status": "watch",
        "metric": "Channel mix is a test lever",
        "source_name": "Unify GTM · sequence / follow-up tests",
        "url": "https://www.unifygtm.com/explore/cold-email-ab-testing",
        "maps_to": "motion:linkedin",
        "summary": "Unify lists channel mix (email plus LinkedIn) as a sequence variable to test after subject line, not as a separate 'LinkedIn program' you turn on blindly. Instantly 2026 also maps Mon launch / Wed follow-up / Fri OOO triage; timing is a lever next to channel.",
        "why_for_us": "LinkedIn is not_started because Sep-8 copy still needs cleanup. When it is ready, add it as step 2 of C1-N1 (email first, then LI), not as a parallel blast. That matches the Unify 'one variable' rule.",
        "proof": {
          "type": "bars",
          "caption": "Motion surface right now: live vs not started.",
          "rows": [
            {
              "label": "Email outbound",
              "value": 100,
              "hint": "live · C1-N1"
            },
            {
              "label": "LinkedIn",
              "value": 0,
              "hint": "not started"
            },
            {
              "label": "Mass video",
              "value": 0,
              "hint": "not started"
            },
            {
              "label": "Lead magnets",
              "value": 0,
              "hint": "not started"
            }
          ]
        }
      },
      {
        "id": "radar-bounce-warmup",
        "title": "Bounce under 2%, warmup before volume",
        "published": "2026-01-12",
        "channel": "ops",
        "confidence": "benchmark",
        "status": "try",
        "metric": "<2% bounce · 14-day warmup",
        "source_name": "Instantly Cold Email Benchmark Report 2026",
        "url": "https://instantly.ai/cold-email-benchmark-report-2026",
        "maps_to": "inboxes",
        "summary": "Instantly 2026: keep bounce under 2% or placement drops. New domains start 5–10/day and ramp over 4–6 weeks. Erratic volume looks like spam. We already policy 14-day warmup and 20/mailbox. The missing read is the warmed / warming / new mix.",
        "why_for_us": "C1-N1 has 1 bounce on 68 sends (~1.5%), inside the band, but delivered is still unknown so placement is not proven. Do not add inboxes to 'fix' zero replies. Fill warmup mix from Warmforge first.",
        "proof": {
          "type": "compare",
          "caption": "Bounce vs Instantly 2026 guardrail.",
          "rows": [
            {
              "label": "Danger line",
              "value": 2,
              "hint": "2% bounce"
            },
            {
              "label": "C1-N1 bounce",
              "value": 1.47,
              "hint": "1 / 68"
            }
          ]
        }
      }
    ]
  }
};
