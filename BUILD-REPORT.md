# Roofers R Us Ltd - build-out report

Submission **#20** (Roofers r us Ltd, submitted 2026-09-07), fetched 2026-09-15
into `_source/`. Built 2026-09-15. Marked `built` in the CRM.

**PREVIEW LIVE** at https://innov8-workflows.github.io/Roofers-R-Us/ since 2026-09-15: the
Actions workflow now deploys `_staging/` (noindex on every page, robots.txt
disallows all). `_staging/` is committed to the repo because CI has no site-kit.
Regenerate and push after any change:

```
node build.js && STAGING_BASE=Roofers-R-Us node generate.js && git add -A && git commit -m "..." && git push
```

```
node build.js        # rebuilds the demo homepage from _src/body.html (kit engine)
node generate.js     # writes _site/ - the whole 37 page site
node preview.js      # then http://localhost:8080
node C:/Users/Jay/.claude/site-kit/engine/check.js     # client mode, validates _site/
```

For the GitHub Pages preview (served from a subfolder, noindex on every page):

```
STAGING_BASE=Roofers-R-Us node generate.js && STAGING_BASE=Roofers-R-Us node preview.js
```

Going live on a real domain means Cloudflare Workers with `_site/` (`/site-golive`),
with `origin` in site.config.js set to the domain first.

---

## Pages: 37

| Type | Count | Paths |
|---|---|---|
| Homepage | 1 | `/` - the demo, preserved (see the diff below) |
| Service | 7 | `/services/<slug>/` |
| Area | 18 | `/roofers-in-<town>/` |
| Hubs | 5 | `/services/` `/areas-we-cover/` `/our-work/` `/faqs/` `/reviews/` |
| Company | 2 | `/about/` `/contact/` |
| Legal | 2 | `/privacy-policy/` `/terms/` |
| Review card | 1 | `/review/` - noindex, not in the sitemap, the card Dave texts a customer |
| Error | 1 | `/404.html` |

35 URLs in `sitemap.xml`. Crawled all 35 reachable pages from `/` in headless
Chrome: **every page 200, one h1, a canonical, every JSON-LD block parses, zero
console errors, zero failed requests.** Hero video advancing, transformation
video playing on scroll. Payload 0.98 MB of the 2 MB client budget.
`check.js` passes in client mode.

### Services (7)

`roof-repairs` · `new-roofs-and-re-roofing` · `flat-roofing` ·
`chimneys-and-leadwork` · `fascias-soffits-and-guttering` ·
`moss-removal-and-roof-maintenance` · `emergency-roof-repairs`

Dave listed ONE service on the form ("Roofing services"). The first six are the
services the demo homepage already carried, taken from the Facebook intro. The
seventh comes from his opening hours answer: "24 hours we do emergency call
outs". `topServices` was "Roof replacements and stuff", so re-roofing is written
as the biggest part of the work.

### Areas (18) - `primaryAreas` was EMPTY

`town` was "South Birmingham Redditch bromsgrove". Expanded by research:

| Band | Areas |
|---|---|
| Bromsgrove district | Bromsgrove *(home)*, Catshill, Barnt Green, Alvechurch, Rubery |
| Redditch | Redditch (the new-town estates sit inside the page) |
| South Birmingham | Kings Norton, Northfield, Longbridge, Rednal, Selly Oak, Bournville, Kings Heath, Moseley, Hall Green, Harborne, Stirchley, Cotteridge |

**Deliberately excluded**: the city centre, north and east Birmingham, Solihull,
Worcester, Kidderminster, Stratford. Dave said south Birmingham.

**No distances anywhere.** The yard's postcode is unknown (see below).

**No service x area matrix.** Bromsgrove is not the market for it and
`topServices` did not justify it.

---

## From the submission vs researched

| From submission #20 | Researched by Claude |
|---|---|
| Owner "Davey mark jones deadman", short **Dave** (only "Dave" is published) | Every area page's local paragraph |
| Address "Unit 2 Stafford court Stafford Road" - **no town, no postcode** | Every `nearby` village list (`nearby{}` was empty) |
| Phone, email, WhatsApp | Which suburbs make up "South Birmingham" |
| Hours "24 hours we do emergency call outs" | All FAQs (`customerQuestions` was "All differnt") |
| Team of 10, "Been doing this 3 generations", usp "Works man ship" | All service page content (`serviceDetail` was one line) |
| Google 5.0 from 35 (matches the listing) | Legal page wording |
| Company number 16169285 (typed into the scheme number box) | |

`serviceDetail` "1 week turn around if emergency" is quoted, attributed to Dave,
on the emergency page and in the FAQs.

---

## confirm[] - NONE published, no certificate attached to any

| Field | Dave wrote | Certificate | On the site |
|---|---|---|---|
| Years in business | 15 | no | No. The logo says "three generations" and that is all the site says. |
| Public liability insurance | Yes | no | No. The word "insured" appears nowhere. |
| Cover amount | 100,000,000 | no | No. |
| Accreditations | "What's this mean" | no | No. The demo's accreditation trust slot now reads "24 hour call outs". |
| Competent person scheme | "Dunno" | no | No. |
| Registration number | 16169285 | no | Used as the **company number** in the footer and legal pages: it is the Companies House number for ROOFERS R US LTD. |
| Guarantee | 15 years on replacements | no | No. Terms say materials carry manufacturer warranties, nothing else. |

`claims: {}` in site.config.js. Get the insurance certificate and the guarantee
in writing and these go on with one edit each.

---

## Still outstanding

- **Postcode and town of the yard.** "Unit 2 Stafford Court, Stafford Road" is
  all we have; a web search found nothing. The contact page shows the two
  lines and the schema carries no locality. Companies House has the registered
  office at Blake House, 11 High Street, Lees, Oldham OL4 3BH, which is almost
  certainly a formation agent.
- **Dave's surname.** The owner field reads "Davey mark jones deadman". Not
  published.
- **Domain.** "Preferred website address" was blank. `origin` in site.config.js
  is the GitHub Pages host for now; change it once and every canonical, og:url
  and schema @id follows.
- **Photographs.** 0 of 20 uploaded. The site reuses the demo's eight.
- **Google Ask-for-reviews link.** `/review/` uses the write-dialog URL derived
  from the place id (verified 200). Swap in the `g.page/r/.../review` link from
  the Business Profile dashboard when Dave has it.
- **The two Facebook pages.** Only id 61593965793871 (tagline matches the logo)
  is linked. The other "Roofers R Us Ltd" page (id 61566150702737, Hollyhock
  Rd) claims 15-year guarantees and 50+ reviews and is not used.
- GA4 id and the Apps Script `/exec` URL: both files are inert until set in
  site.config.js.
- A proper branded OG card (`/link-card`): `og-home.jpg` and `card-review.jpg`
  are 1200x630 crops of the owner photo for now.

`[PLACEHOLDER]` markers: **none**. check.js client mode would fail otherwise.

---

## The homepage diff

The demo homepage was **not restructured**. Section order before and after:
`top, services, transformations, gallery, why, reviews, about, areas, contact`.
The hero section is byte-identical. The three `<video>` elements are identical.
`hero.mp4` and `t1.mp4` are untouched in git.

What DID change in `_src/body.html`, all of it filling a placeholder the demo
was built with, using an answer from the form:

1. Trust strip slot 4: "Accreditations [Placeholder]" is now "24 hour call outs".
2. The "more before and after pairs drop in here" note now links to `/our-work/`.
3. The about placeholder paragraph now carries Dave's usp and aboutTeam answers.
4. "Dave [Surname to confirm]" is now "Dave".
5. The "send your full town list" chip is now a Redditch chip, and the areas lede
   names Redditch.
6. Opening hours: "24 hours, emergency call outs".
7. The footer accreditation placeholder is gone; the footer service and area
   links now point at the real pages; the company number and Privacy / Terms
   links are in the foot bar.

Two further lines differ because the shared kit `template.html` changed between
the demo build and today (nav `justify-content`, drawer `visibility`). Those are
the kit's own fixes, not this build's.

On the way into `_site/`, build-pages.js additionally injects a canonical, og:
tags and the LocalBusiness / WebPage / BreadcrumbList schema into the head, and
swaps every base64 data: URI for its real file (19 assets, 2.73 MB to 0.10 MB).
Same bytes, addressed differently. The one "still inline" warning it prints is
the literal text inside the hero's HTML comment, not a payload.

---

## Schema

Every page: `RoofingContractor` (one node, `@id` `#business`, referenced
everywhere), `WebPage`, `BreadcrumbList`. Service pages add `Service` +
`OfferCatalog` (no prices). Area pages add `City` + a narrowed `Service`. Pages
with a visible FAQ block add `FAQPage`. **No `aggregateRating`**: Google's
guidelines do not allow a business to mark up third-party reviews as its own
aggregate. The rating is shown as text and the badges link to the listing.
