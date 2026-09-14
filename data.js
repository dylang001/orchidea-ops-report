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
      "Hero KPI = prospects loaded today (unique emails into campaignable paths), NOT remaining queue depth.",
      "Ecommerce v2 live: 50239 + 50240. SaaS 50289 live. Industry 50383/50385/50387/50388/50392 live (enrolled 88).",
      "Legacy 48153 in-flight only; 50048 completed. 50290 + LI-C1 gated/HOLD.",
      "v2+SaaS emails.sent cumulative 56 — NOT proven sent-today (mailbox API has no sent-today). daily.sends=null.",
      "Pipeline: prospects_loaded_today=260 (SoR daily-loaded-prospects.json); remaining ecom depth 7; saas 0; industry null; industry_enrolled 88.",
      "CO confirmed RI + CRM weekday routines resumed (live)."
    ]
  },
  "exec": {
    "situation": "Hero: 260 prospects loaded today (unique campaignable). Remaining ecom depth 7 vs 150–200/day. daily.sends unknown. Fleet 6/6 live (RI+CRM resumed). Industry 88 enrolled, analytics sent still 0.",
    "happening": [
      "Prospects loaded today = 260 unique (morning 15 + gap-fill 85 + orphan 64 + SaaS 22 + industry 87 → unique 260) from daily-loaded-prospects.json.",
      "Ecommerce v2 50239 (active 135) + 50240 (active 133) live; SaaS 50289 live (active 22).",
      "Industry meta 5 live: enrolled 88; analytics sent still 0 (lag after ~17:19Z launch).",
      "Reply Intelligence resumed (primebox-weekday-triage 09:00 JHB): 2 drafts ready / 2 human triaged; 2 Dylan exact-yes pending.",
      "CRM Data Nerd resumed (attio-hygiene-sweep 08:00 JHB): preview-then-apply; Attio match% still null.",
      "Capacity configured 10×20=200; scale target 300 HOLD until queue+sends healthy."
    ],
    "not_happening": [
      "Sent-today unavailable — do not treat 56 as sent-today (56 = v2+SaaS cumulative emails.sent).",
      "No qualified positive replies yet (0 / 56 first-touch denom).",
      "Ecom remaining eligible-queue depth only 7; Prospector filling ecom next.",
      "LI-C1 50224 HOLD; SaaS 50290 gated; industry replenish off until next CS.",
      "Inbox warmup mix unread."
    ],
    "source": "UX rewrite 2026-09-14 — SoR daily-loaded-prospects.json hero 260; CO RI+CRM resume; mailbox honesty on sends"
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
    "source": "Mailbox capacity: 10×20=200 configured; sent-today unavailable so remaining unknown",
    "eligible_ecom": 7,
    "eligible_saas": 0,
    "eligible_industry": null,
    "industry_enrolled": 88,
    "soft_cap_ecom": 200
  },
  "pipeline": {
    "eligible": 260,
    "remaining_eligible_depth": 7,
    "target_day": 150,
    "target_day_high": 200,
    "eligible_ecom_depth": 7,
    "eligible_saas": 0,
    "eligible_industry": null,
    "industry_enrolled": 88,
    "soft_cap_ecom": 200,
    "prospects_loaded_today_source": "daily-loaded-prospects.json hero_loaded_today=260 (unique emails JHB 2026-09-14). Declared components morning 15 + afternoon gap 85 + orphan 64 + SaaS 22 + industry 87 → unique 260.",
    "sources": {
      "eligible": "/home/box/gtm-brain/state/daily-loaded-prospects.json (hero_loaded_today=260)",
      "remaining_eligible_depth": "/home/box/gtm-brain/state/eligible-queue.json (counts.eligible=7)",
      "eligible_saas": "/home/box/gtm-brain/state/eligible-queue-saas.json (eligible=0)",
      "eligible_industry": "null — no standing industry queue file",
      "industry_enrolled": "active-campaigns.json industry_meta_2026_09_14.enrolled_total=88"
    },
    "note": "Hero is prospects loaded today (write events / unique campaignable) = 260. Remaining ecom queue depth 7 is secondary vs 150–200/day target. Do not hero-split ecom/saas/industry. Industry replenish separate; Prospector filling ecom next."
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
    "source": "emails_sent=56 is v2+SaaS cumulative emails.sent (sequences launched today ≈today but NOT proven sent-today). Industry enroll 88 / analytics sent 0 (lag)."
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
      "note": "What: ecommerce cold email on Salesforge. Why live: C1-N1-v2 50239 + EXP-TACTIC-001-v2 50240 running 50/50 with real sends. Dylan next: approve Prospector ecom fills so CO can enroll only to these two — never 48153/50048.",
      "url": "https://app.salesforge.ai"
    },
    {
      "id": "email_saas",
      "label": "Email SaaS",
      "kind": "channel",
      "status": "live",
      "note": "What: SaaS growth-leaders email motion. Why live: 50289 live with meetings offer (22 enrolled pool). Dylan next: leave 50290 gated; do not open LI/SaaS DG until ecom queue + sends are healthy."
    },
    {
      "id": "email_industry",
      "label": "Email industry",
      "kind": "channel",
      "status": "live",
      "note": "What: five industry meta pilots (health/fitness/RE/education/home services). Why live: 88 enrolled ~17:19Z; analytics sent still 0 (provider lag). Dylan next: watch send lag; keep replenish off until next CS; confirm 50392 companyOutreachLimitEnabled=false if unexpected."
    },
    {
      "id": "linkedin",
      "label": "LinkedIn",
      "kind": "channel",
      "status": "proposed",
      "note": "What: LinkedIn LI-C1 sequence 50224. Why proposed/HOLD: waiting Dylan exact yes. Dylan next: do not activate until email queue+sends path is stable."
    },
    {
      "id": "mass_video",
      "label": "Mass video",
      "kind": "channel",
      "status": "not_started",
      "note": "What: mass video channel. Why not_started: no proven email send baseline yet (daily.sends null). Dylan next: revisit only after sent-today is readable and qpos signal exists."
    },
    {
      "id": "lead_magnets",
      "label": "Lead magnets",
      "kind": "channel",
      "status": "not_started",
      "note": "What: lead-magnet offer tests. Why not_started: score on qualified positives/booked, not reply rate. Dylan next: pair with live RI before any magnet drop."
    },
    {
      "id": "offer_ecom",
      "label": "Offer ecommerce",
      "kind": "lever",
      "status": "live",
      "note": "What: ecommerce offer ≤20% return / 90d or work free. Why live: Sep 8 offer on v2 sequences. Dylan next: protect offer language (Domitilla learning flag — do not reintroduce rejected 20%/90-day framing incorrectly)."
    },
    {
      "id": "offer_saas",
      "label": "Offer SaaS meetings",
      "kind": "lever",
      "status": "live",
      "note": "What: SaaS 90d meeting target; A work-free / B waive month. Why live: on 50289. Dylan next: keep A/B intact; do not bolt booking links onto email 1."
    },
    {
      "id": "offer_industry",
      "label": "Offer industry meta",
      "kind": "lever",
      "status": "live",
      "note": "What: industry outcomes — appointments / trials / enquiries / enrolments / booked jobs. Why live: five pilots enrolled. Dylan next: judge after analytics catch-up, not on enroll-day lag."
    },
    {
      "id": "messaging_cta",
      "label": "Messaging / CTA",
      "kind": "lever",
      "status": "live",
      "note": "What: live CTA/copy tests across ecom deposit-first vs offer-led, SaaS A/B, industry pilots. Why live: sequences running. Dylan next: do not activate EXP-MSG-001 or kill copy at n=56 / 0 qpos."
    }
  ],
  "fleet": [
    {
      "name": "Prospecting",
      "id": "2556136",
      "job": "Load prospects into campaignable paths and keep ecom eligible depth healthy",
      "mode": "prepare",
      "lifecycle": "live",
      "kpi": "Prospects loaded today",
      "target": ">=150/day",
      "actual": 260,
      "gap": "Remaining ecom queue depth 7 vs 150–200/day fill target (hero already 260 unique loaded today)",
      "measurement": "Unique emails loaded into campaignable paths (daily-loaded-prospects.json)",
      "working": true,
      "last_outcome": "260 unique loaded JHB 2026-09-14; remaining ecom depth 7; Prospector filling ecom next (Apify-free preferred)",
      "paused_routines": [],
      "status": "live — hero met; refill ecom depth",
      "url": null
    },
    {
      "name": "Messaging",
      "id": "2786717",
      "job": "Copy and experiments",
      "mode": "audit-first",
      "lifecycle": "live",
      "kpi": "Qualified positive / first-touch sent",
      "target": "score after n",
      "actual": "0 / 56",
      "gap": "0 qpos",
      "measurement": "qpos / first-touch_sent (v2+SaaS denom 56); rate not scored at small n",
      "working": true,
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
      "kpi": "Approved CS applied without drift",
      "target": "0 unauthorized SF status changes; enroll only Dylan-yes destinations",
      "actual": "industry 88 + ecom/saas live",
      "gap": "Enroll new ecom fills only to 50239/50240; watch unexpected pauses",
      "measurement": "CS fidelity + unexpected-pause watch",
      "working": true,
      "last_outcome": "industry meta 5 launched ~17:19Z enroll 88; ecom v2 + 50289 already live; RI+CRM resume confirmed",
      "paused_routines": [],
      "status": "hand-in-hand",
      "url": "https://app.salesforge.ai"
    },
    {
      "name": "Reply Intelligence",
      "id": "2822878",
      "job": "Classify + draft",
      "mode": "draft-only",
      "lifecycle": "live",
      "kpi": "Same-day classify+draft",
      "target": "classify+draft same day",
      "actual": "2 / 2",
      "gap": "2 Dylan exact-yes pending",
      "measurement": "same-day classify+draft (drafts ready / human triaged)",
      "working": true,
      "last_outcome": "CO resumed primebox-weekday-triage weekdays 09:00 JHB; 2 drafts ready / 2 human triaged; Cuyana+Parachute need Dylan exact yes",
      "paused_routines": [],
      "status": "live — weekday triage resumed",
      "url": null,
      "routine": "primebox-weekday-triage weekdays 09:00 JHB"
    },
    {
      "name": "CRM Data Nerd",
      "id": "2908860",
      "job": "Attio truth",
      "mode": "preview-then-apply",
      "lifecycle": "live",
      "kpi": "Attio match% of outbound contacts",
      "target": "% Attio match",
      "actual": null,
      "gap": "No Attio match% yet — preview-then-apply until first measured sweep",
      "measurement": "% Attio match",
      "working": null,
      "last_outcome": "CO resumed attio-hygiene-sweep weekdays 08:00 JHB; match% null until measured",
      "paused_routines": [],
      "status": "live — hygiene sweep resumed",
      "url": "https://app.attio.com",
      "routine": "attio-hygiene-sweep weekdays 08:00 JHB"
    },
    {
      "name": "Outbound Analyst",
      "id": "2929809",
      "job": "Dashboard + reports",
      "mode": "live",
      "lifecycle": "live",
      "kpi": "data.js current + coverage checklist",
      "target": "Pages + brain current; all live SF ids covered",
      "actual": "coverage ok post-1ba45d5",
      "gap": "Keep freshness after material Operator launches",
      "measurement": "coverage checklist vs active-campaigns.json + hero honesty",
      "working": true,
      "last_outcome": "UX rewrite: hero=prospects loaded 260; sends=null; RI/CRM live; gtm_radar preserved+3",
      "paused_routines": [],
      "status": "live",
      "url": "https://dylang001.github.io/orchidea-ops-report/"
    }
  ],
  "paused_routines": [
    {
      "owner": "Alfred",
      "routine": "weekly / monthly / quarterly reviews",
      "status": "paused"
    }
  ],
  "open_items": [
    "SCALE: Prospector fill ecom remaining depth 7 toward 150–200/day; CO enrolls new ecom only to 50239/50240 50/50.",
    "Cuyana WRONG_PERSON: Dylan exact yes to suppress Karla + RESEARCH Wendy (wendy@cuyana.com); Domitilla draft ready, applied=false.",
    "Parachute WRONG_PERSON: Dylan exact yes to suppress Ariel work + RESEARCH Mehdi (mehdi@parachutehome.com); Costa draft ready; do not use ariel.kaye@gmail.com without yes.",
    "Watch industry analytics send lag (88 enrolled, sent still 0).",
    "LI-C1 50224 HOLD until Dylan yes.",
    "SaaS 50290 draft gated.",
    "Sent-today / remaining-to-capacity unknown — mailbox API has no sent-today field (daily.sends=null; funnel emails_sent=56 cumulative).",
    "Inbox warmup mix unread.",
    "HOLD mailbox 20→25→30 ramp until queue+sends healthy.",
    "50392 footnote: companyOutreachLimitEnabled=false — Operator confirm vs peers.",
    "Alfred weekly/monthly/quarterly reviews still paused."
  ],
  "bottlenecks": [
    {
      "rank": 1,
      "type": "supply",
      "item": "Prospector: load ≥143 more ecom eligible toward 150–200/day (depth 7 left)",
      "gap": "Remaining ecom eligible-queue depth 7 vs 150–200/day fill target. Hero loaded-today already 260 unique across paths.",
      "journey": "Before Contacted.",
      "unblock": "Owner Prospector — fill ecom next (prefer Google Ads Transparency / Apify-free; Hayley FREE exhausted). Why: Operator cannot enroll what is not in eligible.",
      "test": "Not a copy test — supply fill."
    },
    {
      "rank": 2,
      "type": "ops",
      "item": "Campaign Operator: enroll new ecom fills only to 50239/50240 50/50",
      "gap": "New ecom must not go to legacy 48153/50048. Industry replenish off until next CS.",
      "journey": "Eligible → Enrolled.",
      "unblock": "Owner CO — enroll Prospector fills to 50239/50240 only. Why: preserve v2 control and avoid legacy drift.",
      "test": "Unexpected-pause watch: 0 unauthorized SF status mutations."
    },
    {
      "rank": 3,
      "type": "decision",
      "item": "Dylan: 2 exact-yes on RI WRONG_PERSON referrals (Cuyana + Parachute)",
      "gap": "2 drafts ready / 2 human triaged; applied=false until exact yes.",
      "journey": "Replies → CRM / next contact.",
      "unblock": "Owner Dylan — exact yes to suppress old contacts + RESEARCH Wendy/Mehdi. Why: drafts stall without approval; RI is live again.",
      "test": "One variable at a time; no ariel.kaye@gmail.com without yes."
    },
    {
      "rank": 4,
      "type": "funnel",
      "item": "Messaging: 0 qpos / 56 first-touch — keep sending, do not over-read",
      "gap": "0 qualified positives at n=56; industry analytics sent still 0.",
      "journey": "Sent → Replies → Qualified.",
      "unblock": "Owner Messaging — track 50239 vs 50240 separately; no fake %. Why: small n invalidates kill/scale on copy.",
      "test": "50239 vs 50240 at growing n; watch industry send lag."
    },
    {
      "rank": 5,
      "type": "structural",
      "item": "HOLD capacity ramp 200→300 until queue+sends healthy",
      "gap": "Configured ceiling 200; scale target 300; daily.sends null; ecom depth 7.",
      "journey": "Send capacity.",
      "unblock": "Owner Dylan/CO — HOLD 20→25→30. Why: ramp without queue+proven sends burns warmup.",
      "test": "Scale horizontally only after queue depth + sent-today known."
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
    "sends": null,
    "delivered": null,
    "remaining_to_capacity": null,
    "capacity_used": null,
    "anomalies": [
      "daily.sends=null — mailbox API has no sent-today field. Do not treat 56 as sent-today; 56 = v2+SaaS cumulative emails.sent.",
      "Hero prospects loaded today = 260 (SoR); remaining ecom eligible depth 7 (secondary) vs 150–200/day.",
      "Industry analytics sent 0 despite live enroll 88 — provider lag after ~17:19Z launch.",
      "Small n: 56 v2+SaaS first-touch denom for messaging; do not over-judge copy."
    ],
    "fleet_blockers_changed": [
      "CO confirmed Reply Intelligence + CRM weekday routines resumed → fleet 6/6 live.",
      "Hero KPI rewritten: prospects loaded today 260 (not remaining depth 7).",
      "daily.sends honesty: null (not 56).",
      "Industry 5 live + enrolled 88; 50239 active 135; 48153 active 10."
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
      "KEEP: v2 + 50289 + industry 5 — proven live motions with real enrollment/send footprint.",
      "KILL: none this week — no motion failed a kill criterion.",
      "SCALE: Fill ecom eligible toward 150–200/day (now remaining depth 7); Operator enrolls new ecom only to 50239/50240 50/50 — not 48153/50048.",
      "HOLD: LI-C1 50224 + SaaS 50290 + mailbox 20→25→30 ramp until queue+sends healthy.",
      "RI resumed: 2 drafts ready / 2 human triaged; 2 Dylan exact-yes pending (Cuyana, Parachute).",
      "CRM resumed: Attio match% still null (preview-then-apply).",
      "Hero: prospects loaded today 260; remaining ecom depth 7 secondary.",
      "remaining_to_capacity unknown while daily.sends is null."
    ],
    "kpi_proposals": [
      "Prospector: ADD net-adds/day (eligible depth + daily net adds) vs soft_cap path ≥150 Stage-A before weekday send window.",
      "Campaign Operator: CS fidelity + unexpected-pause watch (0 unauthorized SF status mutations; enroll only Dylan-yes destinations).",
      "Messaging: qpos / first-touch_sent (denom); track 50239 vs 50240 separately; no fake %.",
      "CRM Data Nerd: Attio match% of outbound contacts (preview→apply); leave null until unpaused with real number.",
      "Outbound Analyst: coverage checklist — all live SF ids in active-campaigns.json appear on dash; refresh ≤1h after material Operator launch."
    ],
    "source": "Analyst P0 industry coverage refresh 2026-09-14 (post-17:19Z launch; no SF re-pull — Operator/Dylan counts + prior evening analytics)",
    "sends_note": "Do not treat prior 56 as sent-today; 56 = v2+SaaS cumulative emails.sent (sequences launched today so ≈today but not proven sent-today). Mailbox API has no sent-today field."
  },
  "weekly": {
    "label": "Week of 2026-09-08",
    "keep": [
      "KEEP v2 50239/50240 — live ecom control with real first-touch footprint; new enrolls stay 50/50 here.",
      "KEEP SaaS 50289 — live meetings offer with enrolled pool; leave 50290 gated.",
      "KEEP industry meta 5 (50383–50392) — 88 enrolled pilots live; watch send lag before judging."
    ],
    "kill": [
      "KILL none this week — no live motion failed a kill criterion; legacy 50048 already completed."
    ],
    "scale": [
      "SCALE: Fill ecom eligible toward 150–200/day (now remaining depth 7); Operator enrolls new ecom only to 50239/50240 50/50 — not 48153/50048."
    ],
    "test": [
      "TEST 50239 vs 50240 at growing n before copy kill — qpos 0 / 56 is too small to judge."
    ],
    "insights": [
      "Hero KPI is prospects loaded today = 260 unique (SoR), not remaining ecom depth 7.",
      "daily.sends=null honesty; funnel emails_sent=56 is v2+SaaS cumulative, not proven sent-today.",
      "Fleet 6/6 live after CO resumed RI (09:00) + CRM (08:00); Alfred reviews still paused.",
      "Binding blockers: refill ecom depth + Dylan exact-yes on 2 RI drafts + HOLD ramp.",
      "Industry 88 enrolled / analytics sent 0 — watch lag, do not kill pilots on lag."
    ],
    "notes": [
      "UX rewrite supersedes prior hero=eligible-depth framing and RI/CRM paused state.",
      "Insufficient proven sent-today to judge capacity utilization."
    ],
    "source": "Analyst UX rewrite 2026-09-14 — SoR hero 260; CO RI+CRM resume; sends honesty"
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
    "learning_flag": "Domitilla Cuyana cold used rejected 20%/90-day return language vs Sep 8 revenue offer.",
    "status": "live — primebox-weekday-triage weekdays 09:00 JHB resumed by CO",
    "weekday_paused": false
  },
  "publish_note": "UX rewrite 2026-09-14 — hero Prospects loaded today=260 (SoR); daily.sends=null; RI+CRM live 6/6; gtm_radar preserved +3; Desktop ready.",
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
      },
      {
        "id": "radar-industry-meta-2026-09-14",
        "title": "Industry Meta 5 pilots live — watch send lag",
        "published": "2026-09-14",
        "channel": "email",
        "confidence": "operator_test",
        "status": "watch",
        "metric": "88 enrolled · analytics sent 0",
        "source_name": "Orchidea Operator / Salesforge industry_meta_2026_09_14",
        "url": "https://app.salesforge.ai",
        "maps_to": "funnel:sent",
        "summary": "Five industry pilots (50383/50385/50387/50388/50392) launched ~17:19Z with 88 enrolled. Provider analytics still show sent 0 — expected lag, not a kill signal yet.",
        "why_for_us": "Do not judge industry copy or kill pilots on enroll-day analytics lag. Watch send catch-up; keep replenish off until next CS.",
        "proof": {
          "type": "bars",
          "caption": "Industry enroll vs analytics sent (same-day lag).",
          "rows": [
            {
              "label": "Enrolled",
              "value": 88,
              "hint": "88"
            },
            {
              "label": "Analytics sent",
              "value": 0,
              "hint": "0 · lag"
            }
          ]
        }
      },
      {
        "id": "radar-pause-incident-2026-09-14",
        "title": "Unexpected pause watch — pause-incident rule",
        "published": "2026-09-14",
        "channel": "ops",
        "confidence": "operator_test",
        "status": "watch",
        "metric": "0 unauthorized SF status mutations",
        "source_name": "Orchidea Campaign Operator CS fidelity",
        "url": "https://app.salesforge.ai",
        "maps_to": "fleet:campaign-operator",
        "summary": "Operating rule: treat unexpected Salesforge pauses/status flips as incidents. Only Dylan-yes destinations and approved CS apply. RI+CRM resumes were explicit CO confirms — not silent unpauses.",
        "why_for_us": "Protects live v2/SaaS/industry from silent pause drift. CO KPI includes unexpected-pause watch alongside enroll fidelity to 50239/50240.",
        "proof": {
          "type": "bars",
          "caption": "Pause-incident posture.",
          "rows": [
            {
              "label": "Allowed pauses",
              "value": 1,
              "hint": "Dylan-yes only"
            },
            {
              "label": "Unauthorized",
              "value": 0,
              "hint": "target 0"
            }
          ]
        }
      },
      {
        "id": "radar-capacity-path-200-300-2026-09-14",
        "title": "Capacity path 200→300 — HOLD ramp",
        "published": "2026-09-14",
        "channel": "ops",
        "confidence": "benchmark",
        "status": "try",
        "metric": "ceiling 200 · scale target 300",
        "source_name": "Orchidea mailbox capacity plan",
        "url": "https://app.warmforge.ai",
        "maps_to": "capacity:weekday_ceiling",
        "summary": "Configured weekday ceiling is 10×20=200 with scale target 300. HOLD 20→25→30 ramp until ecom queue depth and proven sent-today are healthy. daily.sends currently null.",
        "why_for_us": "Ramping mailboxes without queue+send proof burns warmup. Keep usable_after_reserve math; do not hero the 300 target until path is clear.",
        "proof": {
          "type": "bars",
          "caption": "Configured vs scale target (sends today unknown).",
          "rows": [
            {
              "label": "Weekday ceiling",
              "value": 200,
              "hint": "10×20"
            },
            {
              "label": "Scale target",
              "value": 300,
              "hint": "HOLD ramp"
            },
            {
              "label": "Sent today",
              "value": 0,
              "hint": "null / unknown"
            }
          ]
        }
      }
    ]
  }
};
