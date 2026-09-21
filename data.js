window.ORCHIDEA_OPS = {
  "meta": {
    "brand": "Orchidea",
    "partner": "Growth Partner",
    "title": "Outbound & GTM Ops Report",
    "generated_on": "2026-09-21",
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
      "Hero KPI = prospects loaded today. SoR daily-loaded-prospects.json still date_jhb=2026-09-14 \u2192 hero UNKNOWN for 2026-09-21.",
      "emails_sent primary first-touch = 310 from SF get_sequence step1 analytics.completed (50239=150+50240=138+50289=22). Not sent-today. Was 303 on 09-16.",
      "Industry step1 completed = 88/88 enrolled (unchanged footprint).",
      "Ecom eligible-queue depth 28 (catchup28 filled 2026-09-18; awaiting Dylan exact-yes enroll). Apify FREE still over cap / Meta blocked.",
      "Primebox: still 2 SF-positive (Pemmican, Miami Community Newspapers); NEW since 09-16: Lucky Egg NEG path, WVCEH wrong-contact, Bold Bean OOO. Scott DNC already applied.",
      "daily.sends=null (mailbox API). Capacity 10\u00d720=200. Fleet 6/6 live; Alfred reviews paused.",
      "Daily routine failed 2026-09-18; this is first successful refresh since 2026-09-16. Weekly never run (due Mon 09:15 JHB)."
    ]
  },
  "exec": {
    "situation": "MATERIAL 2026-09-21 AM: ecom eligible 28 (was 0) awaiting Dylan exact-yes catchup28 (14/14 \u2192 50239/50240). Primary first-touch \u2248310 (was \u2248303). Still 2 SF-pos (Pemmican + Miami) with CRM hygiene still cold. Capacity 200. No new SF-positives since 09-16.",
    "happening": [
      "09-18 catchup28 filled eligible-queue to 28; change set awaiting Dylan exact-yes (Deliverable 17 / AcceptAll 11).",
      "Primary first-touch step1 completed: 50239=150, 50240=138 (+7 vs 09-16), 50289=22 (sum 310).",
      "Industry step1 completed sum=88 across 50383/85/87/88/92 (enrolled 88). Sequences deep into step3.",
      "Primebox NEW since 09-16 AM: Lucky Egg NEG path (Luke), WVCEH Wrong contact, Bold Bean OOO; total threads 23 (was 20).",
      "Attio hygiene 09-21 AM: Pemmican + Miami still Propsecting/no reply_status \u2014 preview only, approval required.",
      "Morning inventory 06:18Z: eligible=28, Apify over FREE (Meta blocked), ceiling 200 vs 300, positive_unread=0."
    ],
    "not_happening": [
      "No 2026-09-21 (nor 09-15..09-20) daily-loaded-prospects.json SoR \u2014 hero prospects_loaded_today UNKNOWN.",
      "Sent-today unavailable (mailbox API) \u2014 daily.sends=null.",
      "No booked meetings (meeting_booked label count 0).",
      "catchup28 NOT enrolled yet (awaiting Dylan exact-yes since 09-18).",
      "LI-C1 50224 HOLD; SaaS 50290 gated; industry replenish off until next CS.",
      "Inbox warmup mix unread. data.js live Pages still stale vs local (last known push gap)."
    ],
    "source": "SF get_sequence step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-21T06:18Z + Attio run-basic-report + catchup28 change set + 2026-09-21 attio-hygiene"
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
        "v2 + SaaS + industry first-touch footprint (primary\u2248310; industry 88).",
        "Capacity 200; enroll catchup28 then refill supply.",
        "Keep dashboard data.js current after material Operator/RI moves."
      ]
    },
    "week": {
      "label": "Week of 2026-09-21",
      "items": [
        "Dylan exact-yes: enroll catchup28 (14\u219250239 + 14\u219250240) OR reject AcceptAll subset.",
        "Dylan/RI: Pemmican deep-dive send + Miami Attio person create (exact-yes).",
        "Gyve/SURI OOO follow-up now due (after 2026-09-19).",
        "SCALE refill toward 150\u2013200/day after catchup drains \u2014 Apify-free only.",
        "HOLD LI/50290/mailbox ramp. Watch industry+ecom send health."
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
    "eligible_ecom": 28,
    "eligible_saas": 0,
    "eligible_industry": null,
    "industry_enrolled": 88,
    "soft_cap_ecom": 200
  },
  "pipeline": {
    "eligible": null,
    "remaining_eligible_depth": 28,
    "target_day": 150,
    "target_day_high": 200,
    "eligible_ecom_depth": 28,
    "eligible_saas": 0,
    "eligible_industry": null,
    "industry_enrolled": 88,
    "soft_cap_ecom": 200,
    "prospects_loaded_today_source": "UNKNOWN \u2014 daily-loaded-prospects.json still date_jhb=2026-09-14 (hero was 302). No SoR for 09-15..2026-09-21.",
    "sources": {
      "eligible": "UNKNOWN \u2014 no 2026-09-21 daily-loaded-prospects.json",
      "remaining_eligible_depth": "/home/box/gtm-brain/state/eligible-queue.json counts.eligible=28 (updated 2026-09-18T15:55Z catchup28)",
      "eligible_saas": "/home/box/gtm-brain/state/eligible-queue-saas.json eligible=0",
      "eligible_industry": "null \u2014 no standing industry queue file",
      "industry_enrolled": "SF enrollment totals 88; inventory + get_sequence"
    },
    "note": "Hero prospects loaded today UNKNOWN until Prospector writes 2026-09-21 SoR. Binding: catchup28 (28) awaiting Dylan exact-yes; depth still far below 150\u2013200/day. Do not reuse 09-14 hero 260/302.",
    "attio": {
      "people": 425,
      "companies": 373,
      "deals": 0,
      "outbound_list": 395,
      "note": "Attio run-basic-report people=425 companies=373 deals=0 orchidea_outbound_leads=395. Hygiene 08:11 JHB: 2 positives still cold/missing CRM stage (preview only).",
      "source": "Attio MCP run-basic-report 2026-09-21"
    }
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
    "contacted": 310,
    "emails_sent": 310,
    "emails_sent_as_of": "2026-09-21",
    "emails_sent_source": "SF get_sequence step1 analytics.completed: 50239=150+50240=138+50289=22=310. Step1 active excluded (may be unsent). NOT sent-today. Industry separate=88. Legacy 48153 step1 completed=49.",
    "eligible_delivered": null,
    "salesforge_replies": 13,
    "human_replies_non_ooo": 13,
    "replies_positive": 2,
    "replies_negative": 3,
    "replies_wrong_person": 4,
    "replies_ooo": 10,
    "replies_not_now": 1,
    "qualified_positive_replies": 2,
    "booked_held": null,
    "opportunities": null,
    "bounce": null,
    "bounce_v2": null,
    "industry_enrolled": 88,
    "industry_sent": 88,
    "legacy_48153_sent": 49,
    "source": "Primebox list_primebox_threads total=23: human non-OOO\u224813; OOO replyType=10; SF positive filter=2; wrong_contact=4; negative label=3. Sent=step1 completed proxy.",
    "attio_snapshot": {
      "people": 425,
      "companies": 373,
      "deals": 0,
      "outbound_list": 395,
      "note": "Attio hygiene confirms 2 positives still need stage/next_action (preview)."
    }
  },
  "campaigns": [
    {
      "id": "50239",
      "name": "C1-N1-v2 | Performance Partnership | 3-touch",
      "status": "active",
      "total": 192,
      "active": 142,
      "completed": 22,
      "step1_completed": 150,
      "note": "LIVE SF get_sequence 2026-09-21"
    },
    {
      "id": "50240",
      "name": "EXP-TACTIC-001-v2 | Deposit-first | 3-touch",
      "status": "active",
      "total": 181,
      "active": 126,
      "completed": 27,
      "step1_completed": 138,
      "note": "LIVE SF get_sequence 2026-09-21"
    },
    {
      "id": "50289",
      "name": "C1-SaaS | Growth Leaders | Meetings offer | LIVE",
      "status": "active",
      "total": 22,
      "active": 20,
      "completed": 2,
      "step1_completed": 22,
      "note": "LIVE SF get_sequence 2026-09-21"
    },
    {
      "id": "48153",
      "name": "C1-N1 | Performance Partnership | Fresh Contacts",
      "status": "completed",
      "total": 116,
      "active": 0,
      "completed": 115,
      "step1_completed": 49,
      "note": "legacy \u2014 NEVER seed"
    },
    {
      "id": "50383",
      "name": "Health | Appointments offer",
      "status": "active",
      "total": 19,
      "active": 16,
      "completed": 3,
      "step1_completed": 19,
      "note": "LIVE SF get_sequence 2026-09-21"
    },
    {
      "id": "50385",
      "name": "Fitness | Trial bookings offer",
      "status": "active",
      "total": 21,
      "active": 20,
      "completed": 1,
      "step1_completed": 21,
      "note": "LIVE SF get_sequence 2026-09-21"
    },
    {
      "id": "50387",
      "name": "Real Estate | Enquiries/viewings offer",
      "status": "active",
      "total": 21,
      "active": 17,
      "completed": 4,
      "step1_completed": 21,
      "note": "LIVE SF get_sequence 2026-09-21"
    },
    {
      "id": "50388",
      "name": "Education | Enrolments offer",
      "status": "active",
      "total": 6,
      "active": 5,
      "completed": 1,
      "step1_completed": 6,
      "note": "LIVE SF get_sequence 2026-09-21"
    },
    {
      "id": "50392",
      "name": "Home Services | Booked jobs offer",
      "status": "active",
      "total": 21,
      "active": 19,
      "completed": 2,
      "step1_completed": 21,
      "note": "LIVE SF get_sequence 2026-09-21"
    },
    {
      "id": "50224",
      "name": "LI-C1",
      "status": "draft",
      "note": "HOLD"
    },
    {
      "id": "50290",
      "name": "SaaS DG Hiring",
      "status": "draft",
      "note": "gated \u2014 job_url required"
    },
    {
      "id": "50027",
      "name": "EXP-MSG-001",
      "status": "held",
      "note": "held \u2014 do not activate"
    },
    {
      "id": "50048",
      "name": "EXP-TACTIC-001 legacy",
      "status": "completed",
      "total": 71,
      "completed": 71,
      "note": "legacy completed \u2014 NEVER seed"
    }
  ],
  "motion_surface": [
    {
      "id": "email_ecommerce",
      "label": "Email ecommerce",
      "kind": "channel",
      "status": "live",
      "note": "What: ecommerce cold email on Salesforge. Why live: 50239+50240 running 50/50 with step1\u2248281. Dylan next: refill ecom eligible (depth 0) then CO enrolls only to these two; RI handle Pemmican POS.",
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
      "gap": "Remaining ecom depth 28 vs 150\u2013200/day; catchup28 awaiting enroll; Apify FREE/Meta blocked; hero loaded-today UNKNOWN",
      "measurement": "Unique emails loaded into campaignable paths (daily-loaded-prospects.json)",
      "working": true,
      "last_outcome": "09-18 catchup filled eligible=28; inventory 09-21 Apify over FREE; prefer Google Ads Transparency / Apify-free",
      "paused_routines": [],
      "status": "live \u2014 supply thin (depth 28); catchup awaiting Dylan yes",
      "url": null
    },
    {
      "name": "Messaging",
      "id": "2786717",
      "job": "Copy and experiments",
      "mode": "audit-first",
      "lifecycle": "live",
      "kpi": "Reply quality / experiment ledger",
      "target": "n growing; no fake %",
      "actual": "2 SF-pos / 310 primary FT",
      "gap": "Tiny n; no winner declaration",
      "measurement": "Primebox labels + step1 completed",
      "working": true,
      "last_outcome": "KEEP sending 50239/50240; EXP-MSG-001 held",
      "paused_routines": [],
      "status": "live",
      "url": null
    },
    {
      "name": "Qualification",
      "id": "2817073",
      "job": "QUALIFIED / NURTURE / RESEARCH / REJECT",
      "mode": "classify",
      "lifecycle": "live",
      "kpi": "Qualified positive rate",
      "target": "meeting bar on SF-pos",
      "actual": "2 SF-pos pending RI",
      "gap": "No meetings booked",
      "measurement": "Primebox + RI outcomes",
      "working": true,
      "last_outcome": "2 SF-pos open; Lucky Egg NEG path",
      "paused_routines": [],
      "status": "live",
      "url": null
    },
    {
      "name": "Campaign Operator",
      "id": "2818152",
      "job": "DRAFT_ONLY Salesforge execution",
      "mode": "draft-only",
      "lifecycle": "live",
      "kpi": "Authorized enrolls only",
      "target": "catchup28 after exact-yes",
      "actual": "catchup28 awaiting Dylan",
      "gap": "Cannot enroll without exact-yes",
      "measurement": "change sets applied",
      "working": true,
      "last_outcome": "catchup28 drafted 09-18; not applied",
      "paused_routines": [],
      "status": "live \u2014 blocked on Dylan exact-yes",
      "url": null
    },
    {
      "name": "Reply Intelligence",
      "id": "2822878",
      "job": "Primebox classifications (draft-only)",
      "mode": "draft-only",
      "lifecycle": "live",
      "kpi": "Same-day triage of positives",
      "target": "0 positive unread backlog",
      "actual": "positive_unread=0; 2 pos open next-step",
      "gap": "Pemmican deep-dive + Miami Attio create need Dylan",
      "measurement": "Primebox + drafts",
      "working": true,
      "last_outcome": "Jordan/Stefan handled pos threads; next Dylan decisions open",
      "paused_routines": [],
      "status": "live",
      "url": null
    },
    {
      "name": "CRM Data Nerd",
      "id": "2908860",
      "job": "Attio truth, preview-then-apply",
      "mode": "preview",
      "lifecycle": "live",
      "kpi": "Hygiene previews applied only on exact-yes",
      "target": "positives staged",
      "actual": "2 positives still cold in Attio",
      "gap": "awaiting exact-yes apply",
      "measurement": "hygiene-report.json",
      "working": true,
      "last_outcome": "2026-09-21 hygiene findings (not applied)",
      "paused_routines": [],
      "status": "live",
      "url": null
    }
  ],
  "paused_routines": [
    {
      "owner": "Alfred",
      "item": "weekly/monthly/quarterly reviews",
      "status": "paused"
    }
  ],
  "open_items": [
    {
      "id": "oi-catchup28",
      "text": "Dylan exact-yes: enroll catchup28 (14\u219250239 + 14\u219250240; Deliverable 17 / AcceptAll 11)",
      "status": "open",
      "owner": "Dylan/CO"
    },
    {
      "id": "oi-pemmican",
      "text": "Dylan exact-yes: send Pemmican deep-dive (or tweak) \u2014 draft READY; Jordan ack'd",
      "status": "open",
      "owner": "Dylan/RI"
    },
    {
      "id": "oi-miami",
      "text": "Dylan exact-yes: Attio create Michael Miller / Miami Community Newspapers + CRM stage",
      "status": "open",
      "owner": "Dylan/CRM"
    },
    {
      "id": "oi-gyve",
      "text": "Gyve/SURI OOO follow-up NOW DUE (after 2026-09-19)",
      "status": "open",
      "owner": "RI/CO"
    },
    {
      "id": "oi-refill",
      "text": "SCALE refill ecom eligible toward 150\u2013200/day after catchup drains (depth 28) \u2014 Apify-free",
      "status": "open",
      "owner": "Prospector"
    },
    {
      "id": "oi-primally",
      "text": "Optional: Primally Pure \u2192 kerri@",
      "status": "open",
      "owner": "Dylan"
    },
    {
      "id": "oi-hold",
      "text": "LI-C1 50224 HOLD \u00b7 SaaS 50290 gated \u00b7 mailbox ramp HOLD",
      "status": "open",
      "owner": "Dylan"
    },
    {
      "id": "oi-hero",
      "text": "Hero prospects_loaded_today UNKNOWN (no 2026-09-21 SoR)",
      "status": "open",
      "owner": "Prospector"
    },
    {
      "id": "oi-sends",
      "text": "Sent-today N/A (mailbox API)",
      "status": "open",
      "owner": "Analyst"
    },
    {
      "id": "oi-publish",
      "text": "Live Pages data.js publish still blocked/stale (gh unauth; browser overwrite path)",
      "status": "open",
      "owner": "Analyst"
    },
    {
      "id": "oi-alfred",
      "text": "Alfred weekly/monthly/quarterly reviews still paused",
      "status": "open",
      "owner": "Dylan"
    }
  ],
  "bottlenecks": [
    {
      "rank": 1,
      "type": "decision",
      "item": "Dylan exact-yes: enroll catchup28 (28 ready in eligible-queue)",
      "gap": "eligible=28 since 09-18; not enrolled; far below 150\u2013200/day",
      "journey": "Eligible \u2192 Enrolled.",
      "unblock": "Owner Dylan \u2192 CO apply. Why: queue sitting idle while sequences burn down.",
      "test": "Not a copy test \u2014 enroll gate."
    },
    {
      "rank": 2,
      "type": "decision",
      "item": "Dylan/RI: 2 SF-positive next-steps (Pemmican deep-dive + Miami Attio create)",
      "gap": "SF positive=2; CRM still cold; no meeting booked; open since 09-16",
      "journey": "Replies \u2192 Qualified \u2192 Meeting.",
      "unblock": "Owner RI draft + Dylan exact-yes. CRM preview only until yes.",
      "test": "One variable per reply path; do not declare motion win."
    },
    {
      "rank": 3,
      "type": "supply",
      "item": "Prospector: refill toward 150\u2013200/day after catchup",
      "gap": "depth 28 vs 150\u2013200; Apify over FREE / Meta blocked",
      "journey": "Before Contacted.",
      "unblock": "Owner Prospector \u2014 Apify-free (Google Ads Transparency).",
      "test": "Not a copy test \u2014 supply fill."
    },
    {
      "rank": 4,
      "type": "ops",
      "item": "Gyve/SURI OOO follow-up past due (after 2026-09-19)",
      "gap": "OOO until ~09-18; follow-up not sent",
      "journey": "OOO \u2192 re-engage.",
      "unblock": "Owner RI/CO \u2014 approve follow-up now.",
      "test": "Ops SLA, not copy."
    },
    {
      "rank": 5,
      "type": "structural",
      "item": "HOLD capacity ramp 200\u2192300 until queue+sends healthy",
      "gap": "Ceiling 200; depth 28; daily.sends null",
      "journey": "Send capacity.",
      "unblock": "Owner Dylan/CO \u2014 HOLD 20\u219225\u219230.",
      "test": "Scale after queue depth + sent-today known."
    },
    {
      "rank": 6,
      "type": "funnel",
      "item": "Messaging: 2 SF-pos / 310 primary first-touch \u2014 KEEP sending, no winner",
      "gap": "Tiny n; industry also sending",
      "journey": "Sent \u2192 Replies \u2192 Qualified.",
      "unblock": "Owner Messaging \u2014 track 50239 vs 50240; no fake %.",
      "test": "Growing n only; no copy kill this week."
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
      "note": "50383\u201350392 live; enrolled 88; sent proxy 88; 1 POS (Miami/50387); replenish off.",
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
    "as_of": "2026-09-21",
    "sends": null,
    "delivered": null,
    "remaining_to_capacity": null,
    "capacity_used": null,
    "anomalies": [
      "Ecom eligible 28 (was 0 on 09-16) but catchup28 unenrolled since 09-18",
      "Primary FT 310 (was 303) \u2014 50240 step1 +7",
      "Daily routine failed 2026-09-18; gap until today",
      "Gyve/SURI OOO follow-up past due (after 09-19)"
    ],
    "fleet_blockers_changed": true,
    "reply_intelligence": {
      "primebox_total": 23,
      "positive": 2,
      "negative": 3,
      "wrong_contact": 4,
      "ooo": 10,
      "unread": 8,
      "new_since_prior_daily": [
        "Luke/Lucky Egg NEG path (2026-09-18)",
        "WVCEH Wrong contact (2026-09-17)",
        "Bold Bean Co OOO Amelia (2026-09-17)"
      ],
      "meeting_booked": 0
    },
    "decisions_needed": [
      "Exact-yes enroll catchup28 (14/14 on 50239/50240 incl AcceptAll)?",
      "Exact-yes Pemmican deep-dive send?",
      "Exact-yes Miami Attio person create + CRM stage?",
      "Approve Gyve/SURI OOO follow-up now?"
    ],
    "notes": [
      "Capacity 200; daily.sends=null; hero UNKNOWN",
      "Offer live: 20% revenue growth or work free (Sep 8) \u2014 not ROAS"
    ],
    "kpi_proposals": [],
    "source": "SF get_sequence step1 analytics.completed + list_primebox_threads + list_mailboxes + state/eligible-queue.json + salesforge-inventory-latest.json 2026-09-21T06:18Z + Attio run-basic-report + catchup28 change set + 2026-09-21 attio-hygiene",
    "sends_note": "null \u2014 mailbox API does not expose sent-today",
    "sent_today_note": "UNKNOWN"
  },
  "weekly": {
    "label": "Week of 2026-09-15 \u2192 2026-09-21",
    "keep": [
      "KEEP 50239/50240 live sending (n growing; 2 SF-pos total \u2014 do not KILL on tiny sample)",
      "KEEP industry 5 pilots sending (step1 complete; replenish off)",
      "KEEP SaaS 50289 in-flight (22)"
    ],
    "kill": [],
    "scale": [
      "SCALE enroll catchup28 after Dylan exact-yes, then refill ecom toward 150\u2013200/day Apify-free only"
    ],
    "test": [
      "TEST nothing new this week \u2014 EXP-MSG-001 stays held; no winner on tiny samples"
    ],
    "insights": [
      "FACT: Primary first-touch step1 completed = 310 (50239=150 + 50240=138 + 50289=22); industry step1 = 88/88 enrolled; SF-pos = 2; ecom eligible = 28; capacity = 10\u00d720=200; Attio deals = 0; meeting_booked = 0.",
      "FACT: Week delta vs 2026-09-14 weekly seed: primary FT 56\u2192310; industry analytics lag 0\u219288 step1; SF-pos 0\u21922; ecom eligible 7\u219228.",
      "FACT: catchup28 change set awaiting Dylan exact-yes since 2026-09-18 (Deliverable 17 / AcceptAll 11).",
      "INTERPRETATION: Binding constraint this week is Dylan decision gates (enroll + 2 positive next-steps), not copy quality.",
      "INTERPRETATION: Supply recovered from 0 mid-week to 28 but still far below Stage A 150; without enroll + refill, sequences burn down.",
      "HYPOTHESIS: Accepting AcceptAll subset (11/28) may raise bounce \u2014 watch closely if enrolled.",
      "HYPOTHESIS: Deposit-first 50240 may be over-indexing on positives (Pemmican on 50240) \u2014 do not declare; n too small."
    ],
    "notes": [
      "Full weekly written 2026-09-21 Mon 09:15 JHB routine.",
      "Live Pages publish still blocked."
    ],
    "source": "SF get_sequence step1 analytics.completed 2026-09-21 weekly pull (50239/50240/50289 + industry 50383/85/87/88/92); SF list_primebox_threads total=23; positive filter=2; SF list_mailboxes 10 active \u00d7 dailyEmailLimit 20; Attio run-basic-report people=425 companies=373 deals=0 orchidea_outbound_leads=395; state/eligible-queue.json counts.eligible=28 @ 2026-09-18T15:55Z"
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
        "thread": "Pemmican / rasmus@",
        "label": "positive",
        "status": "open \u2014 deep-dive draft awaiting Dylan"
      },
      {
        "thread": "Miami Community Newspapers / michael@",
        "label": "positive",
        "status": "open \u2014 Attio create + wait on Michael"
      },
      {
        "thread": "Lucky Egg / luke@",
        "label": "negative",
        "status": "path closed/ack 09-18"
      },
      {
        "thread": "WVCEH / info@",
        "label": "wrong_contact",
        "status": "new 09-17"
      },
      {
        "thread": "Gyve/SURI",
        "label": "ooo",
        "status": "follow-up DUE after 09-19"
      }
    ],
    "counts": {
      "positive": 2,
      "negative": 3,
      "wrong_contact": 4,
      "ooo": 10,
      "total": 23
    },
    "already_handled_note": "Scott DNC applied; Cuyana+Parachute Dylan-send side closed",
    "learning_flag": "FACT: 2 SF-pos / ~310 primary FT. INTERPRETATION: too small for KEEP/KILL on copy. HYPOTHESIS: deposit-first 50240 may be over-indexing on positives (Pemmican on 50240) \u2014 do not declare.",
    "status": "live",
    "weekday_paused": false
  },
  "publish_note": "Local latest-weekly.json + open-items + latest-daily weekly block refreshed 2026-09-21 Mon weekly. Live Pages publish still needs browser overwrite to dylang001/orchidea-ops-report main (gh unauthenticated).",
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
