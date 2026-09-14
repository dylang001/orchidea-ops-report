# Orchidea Outbound & GTM Ops Report

Private exec dashboard for Dylan Angloher. Open it to see bottlenecks, remaining-to-capacity, the journey x-ray, and what to test next.

The UI never hardcodes metrics. It renders `window.ORCHIDEA_OPS` from [`data.js`](data.js). The Outbound Analyst bot overwrites that file on a schedule.

This is outbound GTM ops, not ecommerce ads. There is no Salesforce surface. Qualification is not in the fleet.

## Local preview

From the repo root:

```bash
python3 -m http.server 43147 --bind 0.0.0.0
```

Then open [http://127.0.0.1:43147](http://127.0.0.1:43147).

## What you should see

Orchidea mark in the header. Sticky KPIs: **human replies · remaining today · inboxes**. Tabs: **Board | Fleet | Focus | Radar**. Board has a Today / Week / Month grain so the funnel is not redrawn three times.

Click a KPI, journey step, campaign, bot, bottleneck, or Radar card to open a detail drawer. Live system chips link out to Attio / Salesforge / Warmforge when `meta.links` is set.

| Tab | Reads from | Shows |
| --- | --- | --- |
| Board · Today | `exec`, `funnel_baseline`, `campaigns[]`, `capacity`, `inboxes`, `bottlenecks`, `meta.links` | Briefing, interactive journey x-ray, top gaps, live campaign, remaining-to-capacity, source dock |
| Board · Week | `weekly.insights`, `campaigns[]`, `motion_surface[]` | Takeaways, campaign x-ray, test surface. Keep/kill/scale only if they have items. No second funnel |
| Board · Month | `monthly.goals[]`, volume fields, `experiments`, `next_bets` | Offer tracking, month remaining, next bets. Not ROAS |
| Fleet | `fleet[]` | Six bots. Click a card for KPI / actual / live URL. No Qualification |
| Focus | `bottlenecks[]`, `open_items` | Full gap cards (once) |
| Radar | `gtm_radar.items[]` | Experiments other GTM operators are running, with proof charts, source URL, and why-for-us. Research bot overwrites this cluster only |

Hashes: `#board` `#week` `#month` `#fleet` `#focus` `#radar` `#radar/<item-id>`. Old `#daily` / `#weekly` / `#monthly` / `#open` still resolve.

Timezone is always **Africa/Johannesburg**. Commercial offer is one line, not a metric.

Capacity is shown as **sends today vs remaining to today’s capacity**. How capacity is produced (N inboxes × per-mailbox, 14-day warmup for new accounts) is a breakdown, not the headline. Do not lead with “send ceiling 200”.

## Refresh contract (Outbound Analyst)

Overwrite **only** `data.js`. Do not edit `index.html`, `app.js`, or `styles.css` to change a number.

1. Read providers. Identity is Attio. Execution is Salesforge. Approvals are Notion.
2. Rebuild `window.ORCHIDEA_OPS`. Keep the same top-level keys (including `exec`, `inboxes`, `campaigns`, `motion_surface`).
3. Set `meta.generated_on` and `daily.as_of` to the Johannesburg calendar date of the pull.
4. Put a `source` string on every numeric cluster.
5. Do not add Qualification back. Do not invent live metrics.
6. Commit and push `data.js` to `dylang001/orchidea-ops-report` `main`. GitHub Pages is the live URL.

### null ≠ 0

| Value | Meaning | UI |
| --- | --- | --- |
| `null` | Provider was not read, or the field is not known | **unknown** |
| `0` | Observed zero (example: `human_replies_non_ooo: 0`) | `0` |
| `[]` | None observed | empty state, not unknown |

Never coerce a missing Salesforge / Attio / Notion read to `0`. Funnel steps may be `null`. Contacted ≠ enrolled ≠ sent ≠ delivered ≠ replied. Configuration is not an outcome.

Do **not** invent today’s sends, delivered, inbox warmup mix (`inboxes.warmed` / `warming` / `new`), or campaign performance. Remaining-to-capacity stays unknown until `daily.sends` (or `daily.remaining_to_capacity`) is numeric.

### Analyst-fillable keys (keep stable)

Existing top-level keys stay: `meta`, `exec`, `goals`, `capacity`, `funnel_baseline`, `fleet`, `paused_routines`, `open_items`, `bottlenecks`, `experiments`, `daily`, `weekly`, `monthly`, `gtm_radar`.

Optional URL fields (omit or `null`; the UI hides the control): `meta.links.{salesforge,attio,notion,warmforge,dashboard}`, `campaigns[].url`, `fleet[].url`, `motion_surface[].url`, `experiments[].url`.

### Research bot (`gtm_radar`)

Overwrite **only** `gtm_radar`. Do not invent Orchidea send/reply metrics here.

Each `items[]` row: `id`, `title`, `published`, `channel` (email|linkedin|video|magnet|cta|ops), `confidence` (benchmark|operator_test|vendor), `status` (watch|try|skip), `summary`, `why_for_us`, `url`, `source_name`, `metric`, `maps_to`, `proof` `{ type: bars|split|compare, caption, rows:[{label,value,hint}] }`.

Label vendor claims as `vendor`. Link the source. Never paste a number that is not in that source.

| Key | Fill when you have a read | Notes |
| --- | --- | --- |
| `inboxes.active` | mailbox count | Seeded 10 |
| `inboxes.warmed` / `warming` / `new` | warmup mix | Stay **null** until read. Never invent a split |
| `inboxes.warmup_days` | policy | Seeded 14 |
| `inboxes.per_mailbox_day` | send cap per box | Seeded 20 |
| `campaigns[]` | observed campaigns only | Omit others. Do not fake a portfolio |
| `motion_surface[]` (alias `tests[]`) | channel + offer levers | `status`: `tested` \| `live` \| `proposed` \| `not_started` |
| `daily.sends` / `daily.delivered` / `daily.remaining_to_capacity` | today | Remaining also derives as ceiling − sends when both numeric |
| `weekly.insights[]` | consultative bullets | Falls back to `weekly.notes` |
| `monthly.goals[]` | goal tracking | `progress` / `baseline` stay null until revenue is readable. Not ROAS |
| `monthly.sends` / `monthly.remaining_to_capacity` / `monthly.capacity_used` | month volume | Stay null until read |
| `monthly.insights[]` / `monthly.next_bets[]` | takeaways + next tests | |
| `fleet[].kpi` | KPI the bot is supposed to track | `actual` and `working` stay null until read-back |
| `fleet[].lifecycle` | `live` \| `paused` \| `draft` | Operational status, not a KPI |
| `bottlenecks[].gap` / `journey` / `unblock` / `test` | Focus copy | `item` / `type` / `rank` stay required |

`capacity.weekday_ceiling` / `gap` / `scale_target_day` remain for production math. The UI does not hero the ceiling.

## Deploy

Static site. No build step.

**Live URL:** [https://dylang001.github.io/orchidea-ops-report/](https://dylang001.github.io/orchidea-ops-report/)

Hosted on GitHub Pages from [`dylang001/orchidea-ops-report`](https://github.com/dylang001/orchidea-ops-report) (`main`, site root). `robots.txt` is `Disallow: /` and the HTML is `noindex`. Bump the `?v=` query on `app.js` / `styles.css` after a UI change so browsers do not keep a stale report. `data.js` is loaded with `Date.now()` cache-bust, then `app.js`.

**Analyst refresh:** overwrite **only** `data.js` on that repo's `main` and push. Do not invent metrics. Do not paste secrets. `vercel.json` (if you also git-connect Vercel) sets `Cache-Control: no-cache` on `data.js`. Do not use Vercel `cleanUrls`; it 404'd `/` while `/data.js` still served.

Do not commit tokens. Do not paste Salesforge / Attio / Notion secrets into `data.js`.

## Seed snapshot

Baseline `as_of` **2026-09-14**. Funnel from Salesforge read-back 2026-09-13 (`eligible_delivered` and `qualified_positive_replies` remain `null`). Inbox warmup mix unread. Today’s sends unread. One observed campaign: C1-N1 / 48153. EXP-MSG-001 proposed, not activated. Qualification removed from fleet.
