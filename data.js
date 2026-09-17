window.ORCHIDEA_OPS = {
  "meta": {
    "brand": "Orchidea",
    "partner": "Growth Partner",
    "title": "Outbound & GTM Ops Report",
    "generated_on": "2026-09-17",
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
      "Workspace contacts are unique; sequence totals are enrollment rows and may overlap.",
      "Date-filtered Salesforge send, delivery, and opt-out events are not exposed in the current MCP read.",
      "Ten active sequences are visible; five industry descriptions still say DRAFT ONLY while active."
    ]
  },
  "exec": {
    "situation": "17 Sep portfolio read: 1,399 unique Salesforge contacts, 875 unassigned, and 524 in at least one sequence. Ten active sequences show 599 enrollment rows and 377 contacts in progress. The immediate operating risks are 56 failed v2 contacts and direct first-name greetings on catch-all-capable campaigns, not mailbox capacity.",
    "happening": [
      "1,399 unique contacts are loaded; 875 have no sequence membership and 524 are in at least one sequence.",
      "C1-N1-v2 and Deposit-first-v2 are the largest queues at 145 and 127 contacts in progress, with 28 failed contacts each.",
      "All 10 mailboxes are active at 20/day, for 200 configured emails/day; tracking domains are active.",
      "Primebox has 11 lead-replied threads and 2 positive threads in the current lifetime read; sequence attribution is incomplete.",
      "Offer and risk-reversal language is present in the live copy, but greeting rendering still uses direct first-name fields."
    ],
    "not_happening": [
      "Salesforge MCP does not provide a reliable date-filtered send, delivery, or opt-out event log.",
      "The 875 unassigned contacts are not all send-ready: 401 have unknown validation and 61 are tagged verification_blocked.",
      "No booked meeting or opportunity value is observed in the current Salesforge read-back.",
      "The five industry pilot descriptions still say DRAFT ONLY while their sequence status is active."
    ],
    "source": "Salesforge MCP read-back 2026-09-17; current state, lifetime counters, Primebox, and unique workspace contact counts"
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
        "v2 + SaaS + industry sending with real first-touch footprint (primary≈303; industry 88).",
        "Capacity 200; refill supply after weekday37 drain.",
        "Keep dashboard data.js current after material Operator/RI moves."
      ]
    },
    "week": {
      "label": "Week of 2026-09-15",
      "items": [
        "SCALE: Prospector refill ecom eligible toward 150–200/day (depth 0) — Apify-free preferred.",
        "RI: triage 2 SF-positives (Pemmican + Miami) same-day; CRM hygiene preview already flagged.",
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
    "source": "Salesforge MCP list_mailboxes 2026-09-17 · 10 active × 20/day = 200 configured/day",
    "eligible_ecom": null,
    "eligible_saas": null,
    "eligible_industry": null,
    "industry_enrolled": 88,
    "soft_cap_ecom": 200
  },
  "pipeline": {
    "eligible": null,
    "remaining_eligible_depth": null,
    "target_day": 150,
    "target_day_high": 200,
    "eligible_ecom_depth": null,
    "eligible_saas": null,
    "eligible_industry": null,
    "industry_enrolled": 88,
    "soft_cap_ecom": 200,
    "prospects_loaded_today_source": "UNKNOWN · no date-specific loaded-prospects SoR in Salesforge MCP; workspace total is 1,399 from list_contacts.",
    "sources": {
      "eligible": "UNKNOWN — no 2026-09-16 daily-loaded-prospects.json",
      "remaining_eligible_depth": "/home/box/gtm-brain/state/eligible-queue.json counts.eligible=0 (updated 2026-09-15T08:56Z post weekday37)",
      "eligible_saas": "/home/box/gtm-brain/state/eligible-queue-saas.json eligible=0",
      "eligible_industry": "null — no standing industry queue file",
      "industry_enrolled": "SF enrollment totals 88; inventory + get_sequence",
      "workspace_contacts": "Salesforge MCP list_contacts 2026-09-17 total=1,399",
      "unique_enrolled": "Salesforge MCP list_contacts 2026-09-17 · 524 contacts with a non-empty sequence list",
      "unassigned": "Salesforge MCP list_contacts 2026-09-17 · 875 contacts with an empty sequence list",
      "validation_status": "Salesforge MCP list_contacts 2026-09-17 · customVars.verification_status counts",
      "sequence_load_status": "Salesforge MCP list_contacts 2026-09-17 · customVars.sequence_load_status counts"
    },
    "note": "Workspace total is 1,399 unique contacts; 875 are unassigned and 524 have at least one sequence. Daily loaded-prospect count remains unknown.",
    "attio": {
      "people": 424,
      "companies": 372,
      "deals": 0,
      "outbound_list": 395,
      "note": "Attio run-basic-report people=424 companies=372 deals=0 orchidea_outbound_leads=395. Hygiene 08:21 JHB flagged 2 positives needing CRM stage update (preview only).",
      "source": "Attio MCP run-basic-report + list-objects + list-lists 2026-09-16"
    },
    "workspace_contacts": 1399,
    "unique_enrolled": 524,
    "unassigned": 875,
    "validation_status": {
      "Deliverable": 918,
      "Deliverable/AcceptAll": 19,
      "UnDeliverable": 21,
      "UnDeliverable/AcceptAll": 40,
      "unknown": 401
    },
    "sequence_load_status": {
      "candidate_not_enrolled": 810,
      "enrolled": 39,
      "enrolling_50048_seed": 16,
      "enrolling_c1n1_batch1": 15,
      "internal_canary_only": 3,
      "ready_for_draft_enrollment": 69,
      "verification_blocked": 61,
      "approved_for_draft_enrollment": 1,
      "ready_for_enrollment": 3,
      "removed_from_sequence_pending_verification": 1,
      "unset": 381
    }
  },
  "inboxes": {
    "active": 10,
    "warmed": null,
    "warming": null,
    "new": null,
    "warmup_days": 14,
    "per_mailbox_day": 20,
    "source": "Salesforge MCP list_mailboxes 2026-09-17 · warmup mix not exposed"
  },
  "funnel_baseline": {
    "control": "50239 + 50240 + 50289 primary first-touch; five industry pilots + legacy 48153 tracked separately",
    "contacted": 303,
    "emails_sent": 303,
    "emails_sent_as_of": "2026-09-16",
    "emails_sent_source": "Salesforge prior Analyst read-back: primary first-touch proxy 50239=150 + 50240=131 + 50289=22 = 303. Current portfolio lifetime email-action totals are separate.",
    "eligible_delivered": null,
    "salesforge_replies": 11,
    "human_replies_non_ooo": 11,
    "replies_positive": 2,
    "replies_negative": 2,
    "replies_wrong_person": 3,
    "replies_ooo": 9,
    "replies_not_now": 1,
    "qualified_positive_replies": 2,
    "booked_held": null,
    "opportunities": null,
    "bounce": null,
    "bounce_v2": null,
    "industry_enrolled": 88,
    "industry_sent": 88,
    "legacy_48153_sent": 49,
    "source": "Salesforge MCP 2026-09-17 · Primebox total=20, lead_replied=11, ooo=9, positive filter=2; date-filtered delivered and bounce totals unavailable.",
    "attio_snapshot": {
      "people": 424,
      "companies": 372,
      "deals": 0,
      "outbound_list": 395,
      "note": "Attio run-basic-report people=424 companies=372 deals=0 orchidea_outbound_leads=395. Hygiene 08:21 JHB flagged 2 positives needing CRM stage update (preview only).",
      "source": "Attio MCP run-basic-report + list-objects + list-lists 2026-09-16"
    }
  },
  "campaigns": [
    {
      "id": "50239",
      "name": "C1-N1-v2",
      "status": "live",
      "channel": "email",
      "contacted": 150,
      "sent": 150,
      "delivered": null,
      "replies": 2,
      "booked": null,
      "bounce": 2,
      "insight": "LIVE ecommerce v2 control. 145 active / 192 total, 150 lifetime sends, 2 replies, 2 bounces, and 28 failed contacts. Offer and work-free guarantee are present; greeting still uses {{first_name}}.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 145,
      "total": 192,
      "positive": 0,
      "negative": null,
      "failed": 28
    },
    {
      "id": "50240",
      "name": "EXP-TACTIC-001-v2",
      "status": "live",
      "channel": "email",
      "contacted": 138,
      "sent": 138,
      "delivered": null,
      "replies": 2,
      "booked": null,
      "bounce": 5,
      "insight": "LIVE ecommerce v2 challenger. 127 active / 181 total, 138 lifetime sends, 2 replies, 5 bounces, and 28 failed contacts. Positive Primebox attribution is not reliable at sequence level.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 127,
      "total": 181,
      "positive": null,
      "negative": null,
      "failed": 28
    },
    {
      "id": "50289",
      "name": "C1-SaaS Growth Leaders",
      "status": "live",
      "channel": "email",
      "contacted": 21,
      "sent": 21,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "LIVE SaaS meetings offer. 21 active / 22 total and 21 lifetime sends with no replies yet.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 21,
      "total": 22,
      "positive": 0,
      "negative": null,
      "failed": 0
    },
    {
      "id": "50383",
      "name": "Health | Appointments offer",
      "status": "live",
      "channel": "email",
      "contacted": 19,
      "sent": 19,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 2,
      "insight": "Industry live. 17 active / 19 total, 19 lifetime sends, 2 bounces, and no replies. Review deliverability before adding more contacts.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 17,
      "total": 19,
      "positive": 0,
      "negative": null,
      "failed": 0
    },
    {
      "id": "50385",
      "name": "Fitness | Trial bookings offer",
      "status": "live",
      "channel": "email",
      "contacted": 21,
      "sent": 21,
      "delivered": null,
      "replies": 1,
      "booked": null,
      "bounce": 0,
      "insight": "Industry live. 20 active / 21 total, 21 lifetime sends, and 1 reply.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 20,
      "total": 21,
      "positive": 0,
      "negative": null,
      "failed": 0
    },
    {
      "id": "50387",
      "name": "Real Estate | Enquiries/viewings offer",
      "status": "live",
      "channel": "email",
      "contacted": 21,
      "sent": 21,
      "delivered": null,
      "replies": 2,
      "booked": null,
      "bounce": 1,
      "insight": "Industry live. 18 active / 21 total, 21 lifetime sends, 2 replies, 1 bounce, and 1 positive in campaign analytics. Small sample.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 18,
      "total": 21,
      "positive": 1,
      "negative": null,
      "failed": 0
    },
    {
      "id": "50388",
      "name": "Education | Enrolments offer",
      "status": "live",
      "channel": "email",
      "contacted": 6,
      "sent": 6,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "insight": "Industry live. 5 active / 6 total, 6 lifetime sends, and no replies.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 5,
      "total": 6,
      "positive": 0,
      "negative": null,
      "failed": 0
    },
    {
      "id": "50392",
      "name": "Home Services | Booked jobs offer",
      "status": "live",
      "channel": "email",
      "contacted": 21,
      "sent": 21,
      "delivered": null,
      "replies": 1,
      "booked": null,
      "bounce": 0,
      "insight": "Industry live. 19 active / 21 total, 21 lifetime sends, and 1 reply.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 19,
      "total": 21,
      "positive": 0,
      "negative": null,
      "failed": 0
    },
    {
      "id": "48153",
      "name": "C1-N1 (legacy in-flight)",
      "status": "live",
      "channel": "email",
      "contacted": 49,
      "sent": 77,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 3,
      "insight": "Legacy live queue. 5 active / 116 total, 49 unique contacted, 77 lifetime sends, 3 bounces, and 1 failed contact.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 5,
      "total": 116,
      "positive": 0,
      "negative": null,
      "failed": 1
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
      "insight": "Completed legacy sequence. 71 contacts completed; no email actions are reported in the current analytics.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 0,
      "total": 71,
      "positive": 0,
      "negative": null,
      "failed": 0
    },
    {
      "id": "50224",
      "name": "LI-C1",
      "status": "draft",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": null,
      "insight": "Draft; not activated.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 0,
      "total": 0,
      "positive": null,
      "negative": null,
      "failed": 0
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
      "bounce": null,
      "insight": "Draft; not activated.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 0,
      "total": 0,
      "positive": null,
      "negative": null,
      "failed": 0
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
      "bounce": null,
      "insight": "Draft hold; not activated.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics",
      "active": 0,
      "total": 0,
      "positive": null,
      "negative": null,
      "failed": 0
    },
    {
      "id": "48450",
      "name": "R1 | Not Interested | Close the Conversation",
      "status": "live",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "failed": 0,
      "active": 0,
      "total": 0,
      "positive": 0,
      "negative": null,
      "insight": "Active closeout route with no current contacts or sends.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics"
    },
    {
      "id": "46471",
      "name": "RETIRED | LI-F1 | Dylan Founder Outreach | HOLD",
      "status": "paused",
      "channel": "email",
      "contacted": 0,
      "sent": 0,
      "delivered": null,
      "replies": 0,
      "booked": null,
      "bounce": 0,
      "failed": 19,
      "active": 0,
      "total": 19,
      "positive": null,
      "negative": null,
      "insight": "Paused retired sequence with 19 failed contacts and no sends.",
      "url": "https://app.salesforge.ai",
      "source": "Salesforge MCP list_sequences 2026-09-17 · lifetime sequence analytics"
    }
  ],
  "motion_surface": [
    {
      "id": "email_ecommerce",
      "label": "Email ecommerce",
      "kind": "channel",
      "status": "live",
      "note": "What: ecommerce cold email on Salesforge. Why live: 50239+50240 running 50/50 with step1≈281. Dylan next: refill ecom eligible (depth 0) then CO enrolls only to these two; RI handle Pemmican POS.",
      "url": "https://app.salesforge.ai"
    },
    {
      "id": "email_saas",
      "label": "Email SaaS",
      "kind": "channel",
      "status": "live",
      "note": "What: SaaS growth-leaders email motion. Why live: 50289 live with meetings offer (22 enrolled; step1=22). Dylan next: leave 50290 gated; do not open LI/SaaS DG until ecom queue + sends are healthy."
    },
    {
      "id": "email_industry",
      "label": "Email industry",
      "kind": "channel",
      "status": "live",
      "note": "What: five industry pilots. Why live: 88 enrolled / step1=88; Miami POS on 50387. Dylan next: replenish off until next CS; RI triage Miami."
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
      "actual": null,
      "gap": "Remaining ecom depth 0 vs 150–200/day; Apify FREE/Meta blocked; hero loaded-today UNKNOWN",
      "measurement": "Unique emails loaded into campaignable paths (daily-loaded-prospects.json)",
      "working": true,
      "last_outcome": "09-16 AM: eligible-queue=0 after weekday37; inventory flags Apify over FREE (Meta blocked); prefer Google Ads Transparency / Apify-free fill",
      "paused_routines": [],
      "status": "live — BINDING supply gap (depth 0)",
      "url": null
    },
    {
      "name": "Messaging",
      "id": "2786717",
      "job": "Copy and experiments",
      "mode": "audit-first",
      "lifecycle": "live",
      "kpi": "Live experiments · qpos / sends",
      "target": "qpos rising on live tests",
      "actual": "exps live 3 · qpos 2 SF-pos / primary sends 303; industry sends 88",
      "gap": "2 SF-positives — do not over-read copy win; n still small",
      "measurement": "qpos / primary first-touch step1 completed=303",
      "working": true,
      "last_outcome": "step1 completed primary 303; industry 88; SF-pos 2 — TEST only, no winner",
      "paused_routines": [],
      "status": "live tests running; rate not scored at small n",
      "url": null,
      "actual_detail": "denom primary step1 completed 303; industry 88; legacy step1=49"
    },
    {
      "name": "Campaign Operator",
      "id": "2818152",
      "job": "Approved enroll/pause/create",
      "mode": "apply on Dylan yes",
      "lifecycle": "live",
      "kpi": "Approved CS applied without drift",
      "target": "0 unauthorized SF status changes; enroll only Dylan-yes destinations",
      "actual": "morning22+weekday37 applied 09-15; industry 88 live; Scott DNC applied",
      "gap": "Cannot enroll until Prospector refills; watch unexpected pauses",
      "measurement": "CS fidelity + unexpected-pause watch",
      "working": true,
      "last_outcome": "09-15: +59 ecom enrolls to 50239/50240; queue→0; Evergreen DNC applied",
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
      "actual": "2 SF-pos need same-day triage; Scott closed/DNC; Cuyana+Parachute Dylan-send closed",
      "gap": "Pemmican + Miami POS drafts/next-step; Primally Pure optional kerri@ research; Gyve OOO after 09-19",
      "measurement": "same-day classify+draft (drafts ready / human triaged)",
      "working": true,
      "last_outcome": "Primebox +2 POS (Pemmican/Miami); Scott DNC done; 8 unread mostly OOO + AX CAPITAL auto",
      "paused_routines": [],
      "status": "live — weekday triage; 2 positives need same-day classify+draft",
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
      "gap": "No Attio match% yet; hygiene 09-16 flagged 2 positives cold/missing in Attio (preview)",
      "measurement": "% Attio match",
      "working": null,
      "last_outcome": "attio-hygiene-sweep 2026-09-16 08:21 JHB — findings on Pemmican + Miami; applied=false",
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
      "actual": "daily 09-16 refresh",
      "gap": "Publish data.js to Pages (gh CLI not authed — browser path)",
      "measurement": "coverage checklist vs active-campaigns.json + hero honesty",
      "working": true,
      "last_outcome": "Daily refresh JHB 09-16: depth 0; primary sent≈303; industry sent≈88; 2 SF-pos; WakeParent TLDR",
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
    "BINDING: Prospector refill ecom eligible depth 0 → 150–200/day (Apify FREE/Meta blocked — use Apify-free sources).",
    "CO: enroll new ecom fills only to 50239/50240 50/50 after refill.",
    "NEW: Pemmican Project POS (rasmus@) — RI classify+draft / Dylan next-step; CRM hygiene preview only.",
    "NEW: Miami Community Newspapers POS (michael@) — RI classify+draft; Attio person missing (hygiene preview).",
    "Optional: Primally Pure WRONG_PERSON → research kerri@ (Bethany thread).",
    "Gyve/SURI OOO — follow-up after 2026-09-19.",
    "LI-C1 50224 HOLD; SaaS 50290 gated.",
    "Sent-today N/A; daily.sends=null; hero loaded-today UNKNOWN until 09-16 SoR.",
    "HOLD mailbox 20→25→30 until queue+sends healthy.",
    "50392 companyOutreachLimitEnabled=false — Operator confirm.",
    "Alfred weekly/monthly/quarterly reviews still paused."
  ],
  "bottlenecks": [
    {
      "rank": 1,
      "type": "supply",
      "item": "Prospector: refill ecom eligible from 0 toward 150–200/day",
      "gap": "eligible-queue counts.eligible=0 after weekday37. Apify over FREE / Meta blocked.",
      "journey": "Before Contacted.",
      "unblock": "Owner Prospector — Apify-free fill (Google Ads Transparency preferred). Why: CO cannot enroll an empty queue.",
      "test": "Not a copy test — supply fill."
    },
    {
      "rank": 2,
      "type": "decision",
      "item": "Dylan/RI: 2 SF-positive replies (Pemmican + Miami Community Newspapers)",
      "gap": "SF positive label=2; CRM still cold/missing; no meeting booked yet.",
      "journey": "Replies → Qualified → Meeting.",
      "unblock": "Owner RI draft + Dylan next-step. CRM hygiene preview only until exact-yes.",
      "test": "One variable per reply path; do not declare motion win."
    },
    {
      "rank": 3,
      "type": "ops",
      "item": "Campaign Operator: enroll refill only to 50239/50240 50/50",
      "gap": "Queue empty until Prospector delivers; industry replenish off.",
      "journey": "Eligible → Enrolled.",
      "unblock": "Owner CO — wait for eligible items; never 48153/50048.",
      "test": "0 unauthorized SF status mutations."
    },
    {
      "rank": 4,
      "type": "funnel",
      "item": "Messaging: 2 SF-pos / 303 primary first-touch — keep sending, no winner",
      "gap": "2 positives at small n; industry sent 88; 1 prior NEG closed.",
      "journey": "Sent → Replies → Qualified.",
      "unblock": "Owner Messaging — track 50239 vs 50240; no fake %.",
      "test": "Growing n only; no copy kill this morning."
    },
    {
      "rank": 5,
      "type": "structural",
      "item": "HOLD capacity ramp 200→300 until queue+sends healthy",
      "gap": "Ceiling 200; depth 0; daily.sends null.",
      "journey": "Send capacity.",
      "unblock": "Owner Dylan/CO — HOLD 20→25→30.",
      "test": "Scale after queue depth + sent-today known."
    }
  ],
  "experiments": [
    {
      "id": "EXP-TACTIC-001-v2",
      "status": "active",
      "control": "C1-N1-v2/50239",
      "note": "Live 50/50; primary step1 completed ~150+131. TEST at growing n only. 1 POS on challenger.",
      "url": "https://app.salesforge.ai"
    },
    {
      "id": "C1-SaaS-50289",
      "status": "active",
      "control": null,
      "note": "Live meetings offer; step1 completed 22.",
      "url": "https://app.salesforge.ai"
    },
    {
      "id": "INDUSTRY-META-5",
      "status": "active",
      "control": null,
      "note": "50383–50392 live; enrolled 88; sent proxy 88; 1 POS (Miami/50387); replenish off.",
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
    "as_of": "2026-09-17",
    "sends": null,
    "delivered": null,
    "remaining_to_capacity": null,
    "capacity_used": null,
    "anomalies": [
      "Date-filtered send, delivery, and opt-out events are unavailable from the Salesforge MCP read.",
      "C1-N1-v2 and Deposit-first-v2 each show 28 failed contacts; failure reasons are not exposed by list_sequences."
    ],
    "fleet_blockers_changed": [
      "Portfolio data is current; failed-contact detail and dated delivery telemetry remain blocked."
    ],
    "reply_intelligence": {
      "outcomes": [
        {
          "account": "The Pemmican Project",
          "old_contact": "Rasmus Roed Bentsen",
          "outcome": "POSITIVE",
          "referral": null,
          "referral_email": "rasmus@pemmicanproject.com",
          "draft_owner": null,
          "draft_status": "pending_triage",
          "applied": false,
          "decision_needed": "RI: classify+draft deep-dive; Dylan next-step. Sequence 50240. CRM hygiene preview only."
        },
        {
          "account": "Miami's Community Newspapers",
          "old_contact": "Michael Miller",
          "outcome": "POSITIVE",
          "referral": null,
          "referral_email": "michael@communitynewspapers.com",
          "draft_owner": null,
          "draft_status": "pending_triage",
          "applied": false,
          "decision_needed": "RI: classify+draft Tell-me-more; Attio person missing — CRM create needs Dylan yes. Sequence 50387."
        },
        {
          "account": "Evergreen Hardscaping",
          "old_contact": "Scott Berry",
          "outcome": "NEGATIVE",
          "referral": null,
          "referral_email": null,
          "draft_owner": null,
          "draft_status": "closed",
          "applied": true,
          "decision_needed": "Done — DNC hsberry@ + info@ applied 2026-09-15"
        },
        {
          "account": "Cuyana",
          "old_contact": "Karla",
          "outcome": "WRONG_PERSON",
          "referral": "Wendy",
          "referral_email": "wendy@cuyana.com",
          "draft_owner": "Domitilla",
          "draft_status": "dylan_send_closed",
          "applied": true,
          "decision_needed": "Dylan-send side closed 09-15; optional suppress+RESEARCH still open if not already applied"
        },
        {
          "account": "Parachute",
          "old_contact": "Ariel",
          "outcome": "WRONG_PERSON",
          "referral": "Mehdi",
          "referral_email": "mehdi@parachutehome.com",
          "draft_owner": "Costa",
          "draft_status": "dylan_send_closed",
          "applied": true,
          "decision_needed": "Dylan-send side closed 09-15; optional suppress+RESEARCH still open if not already applied"
        }
      ],
      "counts": {
        "human_triaged": 3,
        "drafts_ready": 0,
        "dylan_exact_yes_needed": 2,
        "new_positive_pending": 2,
        "ooo_unread": 7,
        "ooo_total": 9,
        "already_handled": 2
      },
      "already_handled_note": "Scott DNC applied; Ben NOT_NOW; Cuyana+Parachute Dylan-send closed",
      "learning_flag": "Domitilla Cuyana cold used rejected 20%/90-day return language vs Sep 8 revenue offer.",
      "status": "live — primebox-weekday-triage weekdays 09:00 JHB",
      "weekday_paused": false
    },
    "decisions_needed": [
      "Investigate and repair or suppress the 56 failed v2 contacts",
      "Apply and preview {{greeting}} across active copy before expanding catch-all outreach",
      "Route the 69 ready_for_draft_enrollment and 3 ready_for_enrollment contacts"
    ],
    "notes": [
      "Current state is from Salesforge MCP. 200/day is configured capacity, not observed daily sends.",
      "Workspace totals are unique contacts; sequence totals are enrollment rows and may overlap."
    ],
    "kpi_proposals": [
      "Prospector: ADD net-adds/day (eligible depth + daily net adds) vs soft_cap path ≥150 Stage-A before weekday send window.",
      "Campaign Operator: CS fidelity + unexpected-pause watch (0 unauthorized SF status mutations; enroll only Dylan-yes destinations).",
      "Messaging: Live experiments · qpos / sends; denom v2+SaaS=56; track 50239 vs 50240; no fake %.",
      "CRM Data Nerd: Attio match% of outbound contacts (preview→apply); leave null until unpaused with real number.",
      "Outbound Analyst: coverage checklist — all live SF ids in active-campaigns.json appear on dash; refresh ≤1h after material Operator launch."
    ],
    "source": "Salesforge MCP read-back 2026-09-17",
    "sends_note": "Sent-today N/A. emails_sent hero=303 = step1 completed primary lanes. Industry 88. Legacy step1=49.",
    "sent_today_note": "N/A — mailbox API"
  },
  "weekly": {
    "label": "Week of 2026-09-15",
    "keep": [
      "Keep the offer-led structure and 90-day work-free / waive-next-month risk reversal; Real Estate has the strongest small-sample signal at 2/21, including 1 positive in campaign analytics."
    ],
    "kill": [],
    "scale": [],
    "test": [
      "Greeting rendering with {{greeting}} across named, large-company catch-all, and small-company catch-all contacts",
      "Failed-contact repair in both v2 queues before adding more volume"
    ],
    "insights": [
      "The full workspace reads 1,399 contacts: 875 unassigned and 524 in at least one sequence.",
      "Ten active sequences show 599 enrollment rows and 377 contacts in progress; these rows may overlap unique people.",
      "The two v2 campaigns hold 272 contacts in progress and 56 failed contacts, so queue quality is the immediate supply issue.",
      "All 10 mailboxes are active at 20/day, for 200 configured emails/day. The API does not expose a trustworthy date-bounded send or delivery count.",
      "Primebox contains 11 lead-replied threads and 2 positive threads in the current lifetime read."
    ],
    "notes": [
      "Offer and guarantee direction is sound; greeting rendering and failed-contact cleanup come first."
    ],
    "source": "Salesforge MCP read-back 2026-09-17"
  },
  "monthly": {
    "label": "September 2026",
    "trends": [],
    "remaining_to_capacity": null,
    "sends": null,
    "capacity_used": null,
    "insights": [
      "Pipeline inventory is 1,399 workspace contacts, with 875 unassigned and 524 in at least one sequence.",
      "Configured capacity is 10 active mailboxes × 20/day = 200/day. Observed daily sends and delivered totals remain unread in the provider API.",
      "Offer and work-free risk reversal are live across the main campaign families. Direct first-name greetings still need to be replaced with the catch-all-safe greeting field.",
      "56 failed contacts in the two v2 campaigns are the main queue-quality risk before scale."
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
      "Repair or suppress the 56 failed v2 contacts",
      "Apply and preview {{greeting}} across live sequences",
      "Route the 69 ready_for_draft_enrollment and 3 ready_for_enrollment contacts",
      "Add a date-filtered send and delivery read to the Analyst refresh"
    ],
    "notes": [
      "Dashboard is a current-state operating view; lifetime counters and unique contact counts are labeled separately."
    ],
    "source": "Salesforge MCP read-back 2026-09-17"
  },
  "reply_intelligence": {
    "outcomes": [
      {
        "account": "The Pemmican Project",
        "old_contact": "Rasmus Roed Bentsen",
        "outcome": "POSITIVE",
        "referral": null,
        "referral_email": "rasmus@pemmicanproject.com",
        "draft_owner": null,
        "draft_status": "pending_triage",
        "applied": false,
        "decision_needed": "RI: classify+draft deep-dive; Dylan next-step. Sequence 50240. CRM hygiene preview only."
      },
      {
        "account": "Miami's Community Newspapers",
        "old_contact": "Michael Miller",
        "outcome": "POSITIVE",
        "referral": null,
        "referral_email": "michael@communitynewspapers.com",
        "draft_owner": null,
        "draft_status": "pending_triage",
        "applied": false,
        "decision_needed": "RI: classify+draft Tell-me-more; Attio person missing — CRM create needs Dylan yes. Sequence 50387."
      },
      {
        "account": "Evergreen Hardscaping",
        "old_contact": "Scott Berry",
        "outcome": "NEGATIVE",
        "referral": null,
        "referral_email": null,
        "draft_owner": null,
        "draft_status": "closed",
        "applied": true,
        "decision_needed": "Done — DNC hsberry@ + info@ applied 2026-09-15"
      },
      {
        "account": "Cuyana",
        "old_contact": "Karla",
        "outcome": "WRONG_PERSON",
        "referral": "Wendy",
        "referral_email": "wendy@cuyana.com",
        "draft_owner": "Domitilla",
        "draft_status": "dylan_send_closed",
        "applied": true,
        "decision_needed": "Dylan-send side closed 09-15; optional suppress+RESEARCH still open if not already applied"
      },
      {
        "account": "Parachute",
        "old_contact": "Ariel",
        "outcome": "WRONG_PERSON",
        "referral": "Mehdi",
        "referral_email": "mehdi@parachutehome.com",
        "draft_owner": "Costa",
        "draft_status": "dylan_send_closed",
        "applied": true,
        "decision_needed": "Dylan-send side closed 09-15; optional suppress+RESEARCH still open if not already applied"
      }
    ],
    "counts": {
      "human_triaged": 3,
      "drafts_ready": 0,
      "dylan_exact_yes_needed": 2,
      "new_positive_pending": 2,
      "ooo_unread": 7,
      "ooo_total": 9,
      "already_handled": 2
    },
    "already_handled_note": "Scott DNC applied; Ben NOT_NOW; Cuyana+Parachute Dylan-send closed",
    "learning_flag": "Domitilla Cuyana cold used rejected 20%/90-day return language vs Sep 8 revenue offer.",
    "status": "live — primebox-weekday-triage weekdays 09:00 JHB",
    "weekday_paused": false
  },
  "publish_note": "Daily refresh 2026-09-16 JHB — depth 0; primary sent≈303; industry sent≈88; 2 SF-pos; gtm_radar preserved.",
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
