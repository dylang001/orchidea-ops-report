window.ORCHIDEA_OPS = {
  "meta": {
    "brand": "Orchidea",
    "partner": "Growth Partner",
    "title": "Outbound & GTM Ops Report",
    "generated_on": "2026-09-15",
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
      "Contacted != enrolled != sent != replied (Delivered stage removed from funnel UI).",
      "Hero KPI = prospects loaded today (unique emails into campaignable paths). SoR for 2026-09-15 not written yet \u2192 hero UNKNOWN.",
      "emails_sent primary first-touch = 160 from SF get_sequence step1 analytics.completed (50239=79+50240=71+50289=10). Not sent-today.",
      "Industry analytics sent caught up: 31 (was 0 lag on 09-14). Enrolled still 88.",
      "Ecom eligible-queue depth 0 after evening49 enroll (09-14 17:57Z). Apify FREE cap / Meta blocked per morning inventory.",
      "Primebox: new NEGATIVE Scott Berry (Evergreen); wrong-person Cuyana+Parachute still pending Dylan yes; 4 unread OOO.",
      "daily.sends=null (mailbox API). Capacity 10\u00d720=200. Fleet 6/6 live; Alfred reviews paused."
    ]
  },
  "exec": {
    "situation": "MATERIAL 09-15 AM: ecom eligible depth 0 (need replenish). Primary first-touch sent\u2248160 (step1 completed). Industry sent\u224831 (lag cleared). New human NEG reply (Scott/Evergreen). 0 qpos. Hero loaded-today UNKNOWN (no 09-15 SoR). Capacity 200; Apify Meta blocked.",
    "happening": [
      "Evening49 enroll applied 09-14 17:57Z \u2192 50239 total 162 / 50240 total 152; eligible-queue emptied to 0.",
      "Industry send lag cleared: step1 completed sum=31 across 50383/85/87/88/92 (enrolled 88).",
      "Primary first-touch step1 completed: 50239=79, 50240=71, 50289=10 (sum 160).",
      "Primebox new: Scott Berry NEGATIVE (Evergreen Hardscaping) 09-14 21:03Z; 4 unread OOO (Justlife, Saie/Laney, SURI/Gyve, Rheal/Charlotte).",
      "Morning inventory 06:09Z: actionable = empty queue + Apify over FREE (Meta blocked) + ceiling 200 vs 300.",
      "RI/CRM routines still live (fleet 6/6); Cuyana+Parachute exact-yes still open."
    ],
    "not_happening": [
      "No 2026-09-15 daily-loaded-prospects.json yet \u2014 hero prospects_loaded_today UNKNOWN.",
      "Sent-today unavailable (mailbox API) \u2014 daily.sends=null.",
      "No qualified positive replies (0 qpos).",
      "LI-C1 50224 HOLD; SaaS 50290 gated; industry replenish off until next CS.",
      "Inbox warmup mix unread."
    ],
    "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z"
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
        "Fill ecom queue toward 150\u2013200/day.",
        "HOLD LI + 50290 + inbox ramp."
      ]
    },
    "month": {
      "label": "September",
      "items": [
        "v2 + SaaS + industry sending with real first-touch footprint.",
        "Capacity 200; refill supply after evening49 drain.",
        "Keep dashboard data.js current after material Operator moves."
      ]
    },
    "week": {
      "label": "Week of 2026-09-15",
      "items": [
        "SCALE: Prospector refill ecom eligible toward 150\u2013200/day (depth 0) \u2014 Apify-free preferred.",
        "RI: triage Scott NEG + clear 2 exact-yes (Cuyana/Parachute).",
        "Watch industry+ecom send health; HOLD LI/50290/mailbox ramp."
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
    "source": "list_mailboxes: 10 active \u00d7 dailyEmailLimit 20 = 200; sent-today N/A so remaining unknown",
    "eligible_ecom": 0,
    "eligible_saas": 0,
    "eligible_industry": null,
    "industry_enrolled": 88,
    "soft_cap_ecom": 200
  },
  "pipeline": {
    "eligible": null,
    "remaining_eligible_depth": 0,
    "target_day": 150,
    "target_day_high": 200,
    "eligible_ecom_depth": 0,
    "eligible_saas": 0,
    "eligible_industry": null,
    "industry_enrolled": 88,
    "soft_cap_ecom": 200,
    "prospects_loaded_today_source": "UNKNOWN \u2014 daily-loaded-prospects.json still date_jhb=2026-09-14 (hero was 302 later that day). No 2026-09-15 SoR yet.",
    "sources": {
      "eligible": "UNKNOWN \u2014 no 2026-09-15 daily-loaded-prospects.json",
      "remaining_eligible_depth": "/home/box/gtm-brain/state/eligible-queue.json counts.eligible=0 (post evening49)",
      "eligible_saas": "/home/box/gtm-brain/state/eligible-queue-saas.json eligible=0",
      "eligible_industry": "null \u2014 no standing industry queue file",
      "industry_enrolled": "SF enrollment totals 88; inventory + get_sequence"
    },
    "note": "Hero prospects loaded today UNKNOWN until Prospector writes 09-15 SoR. Binding supply gap: remaining ecom depth 0 vs 150\u2013200/day. Do not reuse 09-14 hero 260/302."
  },
  "inboxes": {
    "active": 10,
    "warmed": null,
    "warming": null,
    "new": null,
    "warmup_days": 14,
    "per_mailbox_day": 20,
    "source": "list_mailboxes 10 active @20/day; warmup mix and sent-today unavailable"
  },
  "funnel_baseline": {
    "control": "50239 + 50240 (ecommerce v2) + SaaS 50289 primary first-touch; industry 5 + legacy 48153 tracked separately",
    "contacted": 160,
    "emails_sent": 160,
    "emails_sent_as_of": "2026-09-15",
    "emails_sent_source": "SF get_sequence step1 analytics.completed: 50239=79+50240=71+50289=10=160. Step1 active excluded (may be unsent). NOT sent-today. Industry separate=31. Legacy 48153 sent UNKNOWN this endpoint (prior 72).",
    "eligible_delivered": null,
    "salesforge_replies": 5,
    "human_replies_non_ooo": 5,
    "replies_positive": 0,
    "replies_negative": 1,
    "replies_wrong_person": 3,
    "replies_ooo": 6,
    "replies_not_now": 1,
    "qualified_positive_replies": 0,
    "booked_held": null,
    "opportunities": null,
    "bounce": null,
    "bounce_v2": null,
    "industry_enrolled": 88,
    "industry_sent": 31,
    "legacy_48153_sent": null,
    "source": "Primebox list_primebox_threads total=11: human non-OOO=5 (Scott NEG + 3 wrong + Ben NOT_NOW); OOO=6; qpos=0. Sent=step1 completed proxy."
  },
  "campaigns": [
    {
      "id": "50239",
      "name": "C1-N1-v2",
      "status": "live",
      "channel": "email",
      "contacted": 79,
      "sent": 79,
      "delivered": null,
      "replies": null,
      "booked": null,
      "bounce": null,
      "insight": "LIVE ecommerce v2 control. active 145 / total 162. step1 completed (sent proxy) 79. Evening49 grew pool. TEST vs 50240 \u2014 do not declare winner.",
      "url": "https://app.salesforge.ai",
      "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z",
      "active": 145,
      "total": 162,
      "positive": 0,
      "negative": 0
    },
    {
      "id": "50240",
      "name": "EXP-TACTIC-001-v2",
      "status": "live",
      "channel": "email",
      "contacted": 71,
      "sent": 71,
      "delivered": null,
      "replies": null,
      "booked": null,
      "bounce": null,
      "insight": "LIVE ecommerce v2 challenger. active 134 / total 152. step1 completed (sent proxy) 71. TEST vs 50239 at growing n.",
      "url": "https://app.salesforge.ai",
      "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z",
      "active": 134,
      "total": 152,
      "positive": 0,
      "negative": 0
    },
    {
      "id": "50289",
      "name": "C1-SaaS Growth Leaders",
      "status": "live",
      "channel": "email",
      "contacted": 10,
      "sent": 10,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": null,
      "insight": "LIVE SaaS. active 21 / total 22. step1 completed 10. Keep separate from ecommerce.",
      "url": "https://app.salesforge.ai",
      "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z",
      "active": 21,
      "total": 22,
      "positive": 0,
      "negative": 0
    },
    {
      "id": "50383",
      "name": "Health | Appointments offer",
      "status": "live",
      "channel": "email",
      "contacted": 8,
      "sent": 8,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE industry. enrolled 19; step1 completed/sent proxy 8 (lag cleared vs 09-14). Replenish off.",
      "url": "https://app.salesforge.ai",
      "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z",
      "active": 19,
      "total": 19,
      "group": "industry",
      "enrolled": 19,
      "positive": 0,
      "negative": 0
    },
    {
      "id": "50385",
      "name": "Fitness | Trial bookings offer",
      "status": "live",
      "channel": "email",
      "contacted": 7,
      "sent": 7,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE industry. enrolled 21; step1 completed/sent proxy 7. Replenish off.",
      "url": "https://app.salesforge.ai",
      "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z",
      "active": 21,
      "total": 21,
      "group": "industry",
      "enrolled": 21,
      "positive": 0,
      "negative": 0
    },
    {
      "id": "50387",
      "name": "Real Estate | Enquiries/viewings offer",
      "status": "live",
      "channel": "email",
      "contacted": 7,
      "sent": 7,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE industry. enrolled 21; active 20; step1 completed/sent proxy 7. Replenish off.",
      "url": "https://app.salesforge.ai",
      "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z",
      "active": 20,
      "total": 21,
      "group": "industry",
      "enrolled": 21,
      "positive": 0,
      "negative": 0
    },
    {
      "id": "50388",
      "name": "Education | Enrolments offer",
      "status": "live",
      "channel": "email",
      "contacted": 2,
      "sent": 2,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE industry. enrolled 6; step1 completed/sent proxy 2. Replenish off.",
      "url": "https://app.salesforge.ai",
      "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z",
      "active": 6,
      "total": 6,
      "group": "industry",
      "enrolled": 6,
      "positive": 0,
      "negative": 0
    },
    {
      "id": "50392",
      "name": "Home Services | Booked jobs offer",
      "status": "live",
      "channel": "email",
      "contacted": 7,
      "sent": 7,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE industry. enrolled 21; active 20; step1 completed/sent proxy 7. Footnote companyOutreachLimitEnabled=false. Replenish off.",
      "url": "https://app.salesforge.ai",
      "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z",
      "active": 20,
      "total": 21,
      "group": "industry",
      "enrolled": 21,
      "footnote": "companyOutreachLimitEnabled=false",
      "positive": 0,
      "negative": 0
    },
    {
      "id": "48153",
      "name": "C1-N1 (legacy in-flight)",
      "status": "live",
      "channel": "email",
      "contacted": null,
      "sent": null,
      "delivered": null,
      "replies": null,
      "booked": null,
      "bounce": null,
      "insight": "LIVE legacy in-flight only; active 5 / total 116 draining. Sent lifetime UNKNOWN on get_sequence this morning (prior evening 72). NOT in hero emails_sent.",
      "url": "https://app.salesforge.ai",
      "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z",
      "active": 5,
      "total": 116,
      "positive": 0,
      "negative": 0
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
      "total": 71,
      "positive": 0,
      "negative": 0
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
      "insight": "DRAFT \u2014 LI HOLD pending Dylan exact yes.",
      "url": "https://app.salesforge.ai",
      "source": "Prior evening analytics (computedAt ~16:48Z) kept for ecom/SaaS sends; industry enroll from Operator binding + SF enrollment snapshot; sent=0 analytics lag noted",
      "active": 0,
      "total": 0,
      "positive": 0,
      "negative": 0
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
      "insight": "DRAFT \u2014 gated; do not enroll.",
      "url": "https://app.salesforge.ai",
      "source": "Prior evening analytics (computedAt ~16:48Z) kept for ecom/SaaS sends; industry enroll from Operator binding + SF enrollment snapshot; sent=0 analytics lag noted",
      "active": 0,
      "total": 0,
      "positive": 0,
      "negative": 0
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
      "total": 0,
      "positive": 0,
      "negative": 0
    }
  ],
  "motion_surface": [
    {
      "id": "email_ecommerce",
      "label": "Email ecommerce",
      "kind": "channel",
      "status": "live",
      "note": "What: ecommerce cold email on Salesforge. Why live: 50239+50240 running 50/50 with real step1 sends. Dylan next: refill ecom eligible (depth 0) then CO enrolls only to these two.",
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
      "note": "What: five industry meta pilots. Why live: enrolled 88; analytics sent\u224831 (lag cleared). Dylan next: keep replenish off; watch Scott NEG on home-services path; confirm 50392 companyOutreachLimitEnabled=false."
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
      "note": "What: mass video channel. Why not_started: sent-today still null; qpos=0. Dylan next: revisit after readable sent-today + qpos signal."
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
      "note": "What: ecommerce offer \u226420% return / 90d or work free. Why live: Sep 8 offer on v2 sequences. Dylan next: protect offer language (Domitilla learning flag \u2014 do not reintroduce rejected 20%/90-day framing incorrectly)."
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
      "note": "What: industry outcomes \u2014 appointments / trials / enquiries / enrolments / booked jobs. Why live: five pilots enrolled. Dylan next: judge after analytics catch-up, not on enroll-day lag."
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
      "actual": null,
      "gap": "Remaining ecom depth 0 vs 150\u2013200/day; Apify FREE/Meta blocked; hero loaded-today UNKNOWN",
      "measurement": "Unique emails loaded into campaignable paths (daily-loaded-prospects.json)",
      "working": true,
      "last_outcome": "09-15 morning: eligible-queue=0 after evening49; inventory flags Apify over FREE (Meta blocked); prefer Google Ads Transparency / Apify-free fill",
      "paused_routines": [],
      "status": "live \u2014 BINDING supply gap (depth 0)",
      "url": null
    },
    {
      "name": "Messaging",
      "id": "2786717",
      "job": "Copy and experiments",
      "mode": "audit-first",
      "lifecycle": "live",
      "kpi": "Live experiments \u00b7 qpos / sends",
      "target": "qpos rising on live tests",
      "actual": "exps live 3 \u00b7 qpos 0 / primary sends 160; industry sends 31",
      "gap": "0 qpos",
      "measurement": "qpos / primary first-touch step1 completed=160",
      "working": true,
      "last_outcome": "step1 completed primary 160; industry 31; qpos 0 \u2014 do not over-read copy",
      "paused_routines": [],
      "status": "live tests running; rate not scored at small n",
      "url": null,
      "actual_detail": "denom primary step1 completed 160; industry 31; legacy sent UNKNOWN"
    },
    {
      "name": "Campaign Operator",
      "id": "2818152",
      "job": "Approved enroll/pause/create",
      "mode": "apply on Dylan yes",
      "lifecycle": "live",
      "kpi": "Approved CS applied without drift",
      "target": "0 unauthorized SF status changes; enroll only Dylan-yes destinations",
      "actual": "evening49 applied; industry 88 live",
      "gap": "Cannot enroll until Prospector refills; watch unexpected pauses",
      "measurement": "CS fidelity + unexpected-pause watch",
      "working": true,
      "last_outcome": "evening49 enroll 49/49 to 50239/50240 exact-yes; queue\u21920; industry still live",
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
      "actual": "prior 2/2 + new NEG Scott pending triage",
      "gap": "2 Dylan exact-yes still open; new Scott NEG + 4 unread OOO",
      "measurement": "same-day classify+draft (drafts ready / human triaged)",
      "working": true,
      "last_outcome": "Primebox +1 NEG (Scott/Evergreen); Cuyana+Parachute drafts still applied=false; 4 unread OOO",
      "paused_routines": [],
      "status": "live \u2014 weekday triage; new NEG needs same-day classify",
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
      "gap": "No Attio match% yet \u2014 preview-then-apply until first measured sweep",
      "measurement": "% Attio match",
      "working": null,
      "last_outcome": "attio-hygiene-sweep live weekdays 08:00 JHB; match% still null",
      "paused_routines": [],
      "status": "live \u2014 hygiene sweep resumed",
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
      "actual": "daily 09-15 refresh",
      "gap": "Publish data.js to Pages (gh CLI not authed \u2014 browser path)",
      "measurement": "coverage checklist vs active-campaigns.json + hero honesty",
      "working": true,
      "last_outcome": "Daily refresh JHB 09-15: depth 0; primary sent\u2248160; industry sent\u224831; new NEG Scott; WakeParent TLDR",
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
    "BINDING: Prospector refill ecom eligible depth 0 \u2192 150\u2013200/day (Apify FREE/Meta blocked \u2014 use Apify-free sources).",
    "CO: enroll new ecom fills only to 50239/50240 50/50 after refill.",
    "NEW: Scott Berry / Evergreen NEGATIVE \u2014 RI classify+draft (or close); do not chase.",
    "Cuyana WRONG_PERSON: Dylan exact yes suppress Karla + RESEARCH Wendy (wendy@cuyana.com).",
    "Parachute WRONG_PERSON: Dylan exact yes suppress Ariel work + RESEARCH Mehdi; no ariel.kaye@gmail.com without yes.",
    "4 unread OOO (Justlife, Saie/Laney, SURI/Gyve, Rheal/Charlotte) \u2014 RI skip/schedule.",
    "LI-C1 50224 HOLD; SaaS 50290 gated.",
    "Sent-today N/A; daily.sends=null; hero loaded-today UNKNOWN until 09-15 SoR.",
    "HOLD mailbox 20\u219225\u219230 until queue+sends healthy.",
    "50392 companyOutreachLimitEnabled=false \u2014 Operator confirm.",
    "Alfred weekly/monthly/quarterly reviews still paused."
  ],
  "bottlenecks": [
    {
      "rank": 1,
      "type": "supply",
      "item": "Prospector: refill ecom eligible from 0 toward 150\u2013200/day",
      "gap": "eligible-queue counts.eligible=0 after evening49. Apify over FREE / Meta blocked.",
      "journey": "Before Contacted.",
      "unblock": "Owner Prospector \u2014 Apify-free fill (Google Ads Transparency preferred). Why: CO cannot enroll an empty queue.",
      "test": "Not a copy test \u2014 supply fill."
    },
    {
      "rank": 2,
      "type": "decision",
      "item": "Dylan: 2 exact-yes on RI WRONG_PERSON (Cuyana + Parachute)",
      "gap": "Drafts ready; applied=false. Plus new Scott NEG triage.",
      "journey": "Replies \u2192 CRM / next contact.",
      "unblock": "Owner Dylan \u2014 exact yes on suppress+RESEARCH. RI handles Scott NEG same-day.",
      "test": "One variable; no ariel.kaye@gmail.com without yes."
    },
    {
      "rank": 3,
      "type": "ops",
      "item": "Campaign Operator: enroll refill only to 50239/50240 50/50",
      "gap": "Queue empty until Prospector delivers; industry replenish off.",
      "journey": "Eligible \u2192 Enrolled.",
      "unblock": "Owner CO \u2014 wait for eligible items; never 48153/50048.",
      "test": "0 unauthorized SF status mutations."
    },
    {
      "rank": 4,
      "type": "funnel",
      "item": "Messaging: 0 qpos / 160 primary first-touch \u2014 keep sending, do not over-read",
      "gap": "0 qualified positives; industry sent 31; 1 new NEG.",
      "journey": "Sent \u2192 Replies \u2192 Qualified.",
      "unblock": "Owner Messaging \u2014 track 50239 vs 50240; no fake %.",
      "test": "Growing n only; no copy kill this morning."
    },
    {
      "rank": 5,
      "type": "structural",
      "item": "HOLD capacity ramp 200\u2192300 until queue+sends healthy",
      "gap": "Ceiling 200; depth 0; daily.sends null.",
      "journey": "Send capacity.",
      "unblock": "Owner Dylan/CO \u2014 HOLD 20\u219225\u219230.",
      "test": "Scale after queue depth + sent-today known."
    }
  ],
  "experiments": [
    {
      "id": "EXP-TACTIC-001-v2",
      "status": "active",
      "control": "C1-N1-v2/50239",
      "note": "Live 50/50; primary step1 completed ~79+71. TEST at growing n only.",
      "url": "https://app.salesforge.ai"
    },
    {
      "id": "C1-SaaS-50289",
      "status": "active",
      "control": null,
      "note": "Live meetings offer; step1 completed 10.",
      "url": "https://app.salesforge.ai"
    },
    {
      "id": "INDUSTRY-META-5",
      "status": "active",
      "control": null,
      "note": "50383\u201350392 live; enrolled 88; sent proxy 31; replenish off.",
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
    "as_of": "2026-09-15",
    "sends": null,
    "delivered": null,
    "remaining_to_capacity": null,
    "capacity_used": null,
    "anomalies": [
      "BINDING: ecom eligible-queue depth 0 (was 7 on prior dash / 49 pre-evening enroll).",
      "Apify over FREE cap \u2014 Meta prospecting blocked (morning inventory).",
      "Industry send lag cleared: industry_sent 31 (was 0).",
      "Primary first-touch step1 completed 160 (was 56 on 09-14 evening dash) \u2014 methodology = step1 completed only.",
      "New human NEG: Scott Berry / Evergreen.",
      "Hero prospects_loaded_today UNKNOWN (no 09-15 SoR).",
      "daily.sends=null \u2014 sent-today N/A."
    ],
    "fleet_blockers_changed": [
      "Supply flipped to empty ecom queue after evening49.",
      "Industry analytics no longer at 0.",
      "New NEG reply entered Primebox overnight."
    ],
    "reply_intelligence": {
      "outcomes": [
        {
          "account": "Evergreen Hardscaping",
          "old_contact": "Scott Berry",
          "outcome": "NEGATIVE",
          "referral": null,
          "referral_email": null,
          "draft_owner": null,
          "draft_status": "pending_triage",
          "applied": false,
          "decision_needed": "RI: classify+close; do not chase (explicit not interested)"
        },
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
        "new_negative_pending": 1,
        "ooo_unread": 4,
        "ooo_total": 6,
        "already_handled": 1
      },
      "already_handled_note": "Ben NOT_NOW",
      "learning_flag": "Domitilla Cuyana cold used rejected 20%/90-day return language vs Sep 8 revenue offer.",
      "status": "live \u2014 primebox-weekday-triage weekdays 09:00 JHB",
      "weekday_paused": false
    },
    "decisions_needed": [
      "Cuyana: Dylan exact yes suppress Karla + RESEARCH Wendy.",
      "Parachute: Dylan exact yes suppress Ariel + RESEARCH Mehdi.",
      "Approve Prospector Apify-free refill plan (depth 0).",
      "Keep LI-C1 HOLD and 50290 gated; HOLD mailbox ramp."
    ],
    "notes": [
      "KEEP: v2 + 50289 + industry 5 \u2014 live with real send footprint.",
      "KILL: none \u2014 Scott NEG is one lead, not a motion kill.",
      "SCALE: refill ecom eligible 0\u2192150\u2013200/day; enroll only 50239/50240.",
      "HOLD: LI + 50290 + mailbox ramp; industry replenish off.",
      "TEST: 50239 vs 50240 only at growing n; no winners declared."
    ],
    "kpi_proposals": [
      "Prospector: ADD net-adds/day (eligible depth + daily net adds) vs soft_cap path \u2265150 Stage-A before weekday send window.",
      "Campaign Operator: CS fidelity + unexpected-pause watch (0 unauthorized SF status mutations; enroll only Dylan-yes destinations).",
      "Messaging: Live experiments \u00b7 qpos / sends; denom v2+SaaS=56; track 50239 vs 50240; no fake %.",
      "CRM Data Nerd: Attio match% of outbound contacts (preview\u2192apply); leave null until unpaused with real number.",
      "Outbound Analyst: coverage checklist \u2014 all live SF ids in active-campaigns.json appear on dash; refresh \u22641h after material Operator launch."
    ],
    "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z",
    "sends_note": "Sent-today N/A. emails_sent hero=160 = step1 completed primary lanes. Industry 31. Legacy UNKNOWN.",
    "sent_today_note": "N/A \u2014 mailbox API"
  },
  "weekly": {
    "label": "Week of 2026-09-08",
    "keep": [
      "KEEP v2 50239/50240 \u2014 live ecom control with real first-touch footprint; new enrolls stay 50/50 here.",
      "KEEP SaaS 50289 \u2014 live meetings offer with enrolled pool; leave 50290 gated.",
      "KEEP industry meta 5 (50383\u201350392) \u2014 88 enrolled pilots live; watch send lag before judging."
    ],
    "kill": [
      "KILL none this week \u2014 no live motion failed a kill criterion; legacy 50048 already completed."
    ],
    "scale": [
      "SCALE: Fill ecom eligible toward 150\u2013200/day (now remaining depth 7); Operator enrolls new ecom only to 50239/50240 50/50 \u2014 not 48153/50048."
    ],
    "test": [
      "TEST 50239 vs 50240 at growing n before copy kill \u2014 qpos 0 / 56 is too small to judge."
    ],
    "insights": [
      "09-15 AM: ecom depth 0 is binding constraint; evening49 drained queue.",
      "Primary first-touch \u2248160; industry \u224831; qpos 0.",
      "New NEG Scott; 2 WRONG_PERSON exact-yes still open.",
      "Fleet 6/6; Alfred paused; capacity 200 HOLD ramp."
    ],
    "notes": [
      "UX rewrite supersedes prior hero=eligible-depth framing and RI/CRM paused state.",
      "Insufficient proven sent-today to judge capacity utilization."
    ],
    "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z"
  },
  "monthly": {
    "label": "September 2026",
    "trends": [],
    "remaining_to_capacity": null,
    "sends": 160,
    "capacity_used": null,
    "insights": [
      "Three live email motions + industry; primary first-touch \u2248160; industry \u224831.",
      "Capacity 200 vs 300; remaining-to-capacity unread.",
      "Supply volatility: queue filled then drained same day 09-14; 09-15 opens at 0.",
      "RI: human_replies_non_ooo=5 (3 wrong + 1 not-now + 1 neg); qpos=0."
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
      "Refill ecom queue to 150\u2013200/day",
      "Resolve two RI exact-yes decisions",
      "HOLD LI + 50290 + mailbox ramp; industry replenish off"
    ],
    "notes": [
      "Execution + supply dominate. Morning monthly (per-mailbox-day 15 / ceiling 150 / queue4 / legacy 48153-as-control) superseded."
    ],
    "source": "SF get_sequence node step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-15T06:09Z"
  },
  "reply_intelligence": {
    "outcomes": [
      {
        "account": "Evergreen Hardscaping",
        "old_contact": "Scott Berry",
        "outcome": "NEGATIVE",
        "referral": null,
        "referral_email": null,
        "draft_owner": null,
        "draft_status": "pending_triage",
        "applied": false,
        "decision_needed": "RI: classify+close; do not chase (explicit not interested)"
      },
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
      "new_negative_pending": 1,
      "ooo_unread": 4,
      "ooo_total": 6,
      "already_handled": 1
    },
    "already_handled_note": "Ben NOT_NOW",
    "learning_flag": "Domitilla Cuyana cold used rejected 20%/90-day return language vs Sep 8 revenue offer.",
    "status": "live \u2014 primebox-weekday-triage weekdays 09:00 JHB",
    "weekday_paused": false
  },
  "publish_note": "Daily refresh 2026-09-15 JHB \u2014 depth 0; primary sent\u2248160; industry sent\u224831; new NEG Scott; gtm_radar preserved.",
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
        "metric": "3.43% avg \u00b7 10%+ elite",
        "source_name": "Instantly Cold Email Benchmark Report 2026",
        "url": "https://instantly.ai/cold-email-benchmark-report-2026",
        "maps_to": "funnel:replies",
        "summary": "Platform-wide 2026 benchmark: average reply rate 3.43%, top quartile 5.5%+, elite 10%+. Elite senders keep first-touch under 80 words, one CTA, and A/B test weekly.",
        "why_for_us": "C1-N1 is at 0 human replies on 68 sends. Do not grade copy until delivered is known. The number to watch after Analyst first-run is reply rate vs this ladder, not send ceiling.",
        "proof": {
          "type": "bars",
          "caption": "Reply-rate tiers from Instantly 2026 (Jan 1\u2013Dec 18 2025 data window).",
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
              "hint": "0 / 68 \u00b7 delivered unknown"
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
        "metric": "58% step 1 \u00b7 42% follow-ups",
        "source_name": "Instantly Cold Email Benchmark Report 2026",
        "url": "https://instantly.ai/cold-email-benchmark-report-2026",
        "maps_to": "motion:email_outbound",
        "summary": "Same Instantly 2026 set: 58% of replies come from the first touch, 42% from later steps. Sweet spot is 4\u20137 touches; under four leaves replies on the table. Space 3\u20134 days. Step 2 should feel like a reply, not a reminder (~30% lift in their writeup).",
        "why_for_us": "Before judging EXP-MSG-001, confirm C1-N1 actually has 4\u20137 value-adding steps. A one-and-done control cannot be compared to this benchmark.",
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
              "hint": "4\u20137 touches"
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
        "source_name": "Unify GTM \u00b7 Cold Email A/B Testing",
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
        "source_name": "Growtoro \u00b7 Meeting CTA vs Soft Ask",
        "url": "https://growtoro.com/blog/cold-email-cta-meeting-vs-soft-ask-split-test",
        "maps_to": "exp:EXP-MSG-001",
        "summary": "Controlled split across 80k+ sends, same ICP/opener/body, CTA only. Direct meeting ask: 5.2% reply / 8 meetings per 1k. Soft interest-check: 7.8% / 14. Question with no meeting ask: 9.4% / 16, but only if the team converts the thread. Hybrid sequence (question \u2192 soft \u2192 meeting \u2192 breakup) hit 31 meetings / 1k on 40k sends. Calendar links in email 1 cut replies ~30%.",
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
        "source_name": "Calvin Wiltermood \u00b7 lead magnet vs personalization",
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
              "hint": "2.7% reply \u00b7 2% positive"
            },
            {
              "label": "Lead magnet CTA",
              "value": 1041,
              "hint": "1.2% reply \u00b7 8% positive"
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
        "metric": "60\u201390s \u00b7 hook A/B",
        "source_name": "Sendspark \u00b7 AI video personalization for outbound",
        "url": "https://www.sendspark.com/resources/ai-video-personalization-outbound-sales",
        "maps_to": "motion:mass_video",
        "summary": "Vendor playbook, not a third-party benchmark: 60\u201390 second videos, one CTA, send in business hours, A/B the first 5\u201310 seconds. They claim 2x LinkedIn reply vs InMail when the file sits in the native thread. Sequence pattern they recommend: video email \u2192 text follow-up that references the video \u2192 LinkedIn. Score meetings, not views.",
        "why_for_us": "Mass video is not_started. Treat it as a step inside the email sequence after delivered is readable, not a replacement for C1-N1. Do not clone-video blast until inbox warmup mix is known.",
        "proof": {
          "type": "bars",
          "caption": "Vendor-claimed relative lifts vs text email (Sendspark). Not independently audited; confidence = vendor.",
          "rows": [
            {
              "label": "Reply (claimed)",
              "value": 250,
              "hint": "200\u2013300% vs text"
            },
            {
              "label": "Meetings (claimed)",
              "value": 45,
              "hint": "40\u201350% lift"
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
        "source_name": "Unify GTM \u00b7 sequence / follow-up tests",
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
              "hint": "live \u00b7 C1-N1"
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
        "metric": "<2% bounce \u00b7 14-day warmup",
        "source_name": "Instantly Cold Email Benchmark Report 2026",
        "url": "https://instantly.ai/cold-email-benchmark-report-2026",
        "maps_to": "inboxes",
        "summary": "Instantly 2026: keep bounce under 2% or placement drops. New domains start 5\u201310/day and ramp over 4\u20136 weeks. Erratic volume looks like spam. We already policy 14-day warmup and 20/mailbox. The missing read is the warmed / warming / new mix.",
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
        "title": "Industry Meta 5 pilots live \u2014 watch send lag",
        "published": "2026-09-14",
        "channel": "email",
        "confidence": "operator_test",
        "status": "watch",
        "metric": "88 enrolled \u00b7 analytics sent 0",
        "source_name": "Orchidea Operator / Salesforge industry_meta_2026_09_14",
        "url": "https://app.salesforge.ai",
        "maps_to": "funnel:sent",
        "summary": "Five industry pilots (50383/50385/50387/50388/50392) launched ~17:19Z with 88 enrolled. Provider analytics still show sent 0 \u2014 expected lag, not a kill signal yet.",
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
              "hint": "0 \u00b7 lag"
            }
          ]
        }
      },
      {
        "id": "radar-pause-incident-2026-09-14",
        "title": "Unexpected pause watch \u2014 pause-incident rule",
        "published": "2026-09-14",
        "channel": "ops",
        "confidence": "operator_test",
        "status": "watch",
        "metric": "0 unauthorized SF status mutations",
        "source_name": "Orchidea Campaign Operator CS fidelity",
        "url": "https://app.salesforge.ai",
        "maps_to": "fleet:campaign-operator",
        "summary": "Operating rule: treat unexpected Salesforge pauses/status flips as incidents. Only Dylan-yes destinations and approved CS apply. RI+CRM resumes were explicit CO confirms \u2014 not silent unpauses.",
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
        "title": "Capacity path 200\u2192300 \u2014 HOLD ramp",
        "published": "2026-09-14",
        "channel": "ops",
        "confidence": "benchmark",
        "status": "try",
        "metric": "ceiling 200 \u00b7 scale target 300",
        "source_name": "Orchidea mailbox capacity plan",
        "url": "https://app.warmforge.ai",
        "maps_to": "capacity:weekday_ceiling",
        "summary": "Configured weekday ceiling is 10\u00d720=200 with scale target 300. HOLD 20\u219225\u219230 ramp until ecom queue depth and proven sent-today are healthy. daily.sends currently null.",
        "why_for_us": "Ramping mailboxes without queue+send proof burns warmup. Keep usable_after_reserve math; do not hero the 300 target until path is clear.",
        "proof": {
          "type": "bars",
          "caption": "Configured vs scale target (sends today unknown).",
          "rows": [
            {
              "label": "Weekday ceiling",
              "value": 200,
              "hint": "10\u00d720"
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
