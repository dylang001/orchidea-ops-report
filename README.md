# Orchidea Outbound & GTM Ops Report

Private exec dashboard for Dylan Angloher. Open it to see system status, bottlenecks, and what to do next.

The UI never hardcodes metrics. It renders `window.ORCHIDEA_OPS` from [`data.js`](data.js). The Outbound Analyst bot overwrites that file on a schedule.

This is outbound GTM ops, not ecommerce ads. There is no Salesforce surface. Qualification is not in the fleet.

## Local preview

From the repo root:

```bash
python3 -m http.server 43147 --bind 127.0.0.1
```

Then open [http://127.0.0.1:43147](http://127.0.0.1:43147).

## What you should see

Orchidea mark in the header. Sticky strip: **send ceiling · sends today · human replies · capacity gap**. Tabs: **Overview | Weekly | Monthly | Fleet | Focus**.

| Tab | Reads from | Shows |
| --- | --- | --- |
| Overview | `exec`, `capacity`, `funnel_baseline`, `bottlenecks`, `daily.decisions_needed` | Situation, capacity vs 300, funnel chart, happening / not, bottlenecks, do next |
| Weekly | `funnel_baseline`, `weekly` | Conversion ladder. Keep/kill/scale only if they have items |
| Monthly | `capacity`, `experiments`, `monthly.trends` | Ceiling vs target, experiment ledger |
| Fleet | `fleet[]` | Six bots. No Qualification |
| Focus | `open_items`, `bottlenecks` | Why it is stuck + do next |

Timezone is always **Africa/Johannesburg**. Commercial offer is one line, not a metric.

## Refresh contract (Outbound Analyst)

Overwrite `data.js`. Do not edit `index.html`, `app.js`, or `styles.css` to change a number.

1. Read providers. Identity is Attio. Execution is Salesforge. Approvals are Notion.
2. Rebuild `window.ORCHIDEA_OPS`. Keep the same top-level keys, including `exec`.
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

Weekday send ceiling is **200** (10 × 20) vs scale target **300**. Gap **100**.

## Deploy

Static site. No build step.

**Live URL:** [https://dylang001.github.io/orchidea-ops-report/](https://dylang001.github.io/orchidea-ops-report/)

Hosted on GitHub Pages from [`dylang001/orchidea-ops-report`](https://github.com/dylang001/orchidea-ops-report) (`main`, site root). `robots.txt` is `Disallow: /` and the HTML is `noindex`. Each page load cache-busts `data.js` with `?t=` + `Date.now()`.

**Analyst refresh:** overwrite **only** `data.js` on that repo's `main` and push. Do not invent metrics. Do not paste secrets. `vercel.json` (if you also git-connect Vercel) sets `Cache-Control: no-cache` on `data.js`. Do not use Vercel `cleanUrls` — it 404'd `/` while `/data.js` still served.

Do not commit tokens. Do not paste Salesforge / Attio / Notion secrets into `data.js`.

## Seed snapshot

Baseline `as_of` **2026-09-14**. Ceiling updated to 200. Qualification removed from fleet. Funnel baseline from Salesforge read-back 2026-09-13 (`eligible_delivered` and `qualified_positive_replies` remain `null`).
