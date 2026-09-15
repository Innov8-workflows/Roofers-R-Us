/* Writes _site/. Required by generate.js - run `node generate.js`.
 *
 * The homepage is COPIED from the root index.html. See the header of
 * generate.js for what is injected on the way through and why.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const G = require('./generate.js');
const { shell, crumbTrail, ctaBand, waHref, faqBlock, svg, esc, tok, asset, B, ORIGIN, T,
        cfg, SERVICES, AREAS, SITE, OUT, ROOT, ASSETS, buildCss,
        bizNode, webPage, faqSchema, BIZ_ID, STAGING, FB_PATH } = G;

const urls = [];
const write = (rel, html, addToSitemap = true) => {
  const p = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, html);
  if (addToSitemap && rel.endsWith('index.html')) {
    urls.push(ORIGIN + B + rel.replace(/index\.html$/, ''));
  }
};

/* ------------------------------------------------------------- clean out -- */
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

/* ---------------------------------------------------------------- assets -- */
fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
let copied = 0;
for (const f of fs.readdirSync(ASSETS)) {
  fs.copyFileSync(path.join(ASSETS, f), path.join(OUT, 'assets', f));
  copied++;
}
fs.writeFileSync(path.join(OUT, 'assets', 'site.css'), buildCss());
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

/* ---------------------------------------------------------------- _headers --
 * script-src 'unsafe-inline': the demo homepage is a single self-contained file
 * with inline <script>, and every generated page carries its inline nav script.
 * img-src / media-src data: the homepage may still carry data: URIs for
 * anything not in _src/assets. Both tested against the built site, not assumed.
 * connect-src carries both Apps Script hosts so the lead beacon survives the
 * /exec 302 once leadLog.exec is set. */
const CSP = [
  "default-src 'self'",
  "base-uri 'none'",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://www.google-analytics.com https://*.google-analytics.com",
  "media-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com " +
    "https://*.analytics.google.com https://*.googletagmanager.com " +
    "https://script.google.com https://script.googleusercontent.com",
  "form-action 'self'",
  "manifest-src 'none'",
  "worker-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

fs.writeFileSync(path.join(OUT, '_headers'), `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Cross-Origin-Opener-Policy: same-origin
  Permissions-Policy: accelerometer=(), autoplay=(self), camera=(), display-capture=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), usb=(), xr-spatial-tracking=()
  Content-Security-Policy: ${CSP}

https://:worker.:account.workers.dev/*
  X-Robots-Tag: noindex, nofollow
`);

/* ------------------------------------------------------------- homepage --
   Copied. Not regenerated, not re-encoded, no video replaced. */
const homeSrc = path.join(ROOT, 'index.html');
if (!fs.existsSync(homeSrc)) throw new Error('index.html missing - run `node build.js` first');
let home = fs.readFileSync(homeSrc, 'utf8');

/* canonical, og: tags and Search Console tag - the kit template emits none */
home = home.replace('</title>', '</title>\n<link rel="canonical" href="' + ORIGIN + B + '">');
{
  const CARD = ORIGIN + asset('og-home.jpg');
  const tags = [
    '<meta property="og:type" content="website">',
    '<meta property="og:site_name" content="' + esc(T.BUSINESS) + '">',
    '<meta property="og:locale" content="en_GB">',
    '<meta property="og:title" content="' + esc(cfg.title) + '">',
    '<meta property="og:description" content="' + esc(cfg.description) + '">',
    '<meta property="og:url" content="' + ORIGIN + B + '">',
    '<meta property="og:image" content="' + CARD + '">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta property="og:image:alt" content="' + esc(T.BUSINESS) + ' - roofers in ' + esc(T.TOWN) + ', Redditch and ' + esc(T.AREA2) + '">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:image" content="' + CARD + '">',
  ].join('\n');
  home = home.replace('</title>', '</title>\n' + tags);
}
if (cfg.searchConsole && cfg.searchConsole.verification) {
  home = home.replace('</title>',
    '</title>\n<meta name="google-site-verification" content="' + cfg.searchConsole.verification + '">');
}

/* LocalBusiness + WebPage + Breadcrumb on the homepage. NO FAQPage - the
   homepage has no FAQ section and a block whose questions are not on the page
   is cloaking. */
{
  const homeSchema = [bizNode(), ...webPage('', cfg.title, cfg.description, [['Home', null]])];
  home = home.replace('</head>',
    homeSchema.map(s => '<script type="application/ld+json">' + JSON.stringify(s) + '</script>').join('\n') + '\n</head>');
}

/* base64 -> real files. Same bytes, addressed differently. Nothing re-encoded. */
const MIME = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.mp4': 'video/mp4' };
{
  const before = Buffer.byteLength(home);
  let swapped = 0;
  for (const f of fs.readdirSync(ASSETS)) {
    const mime = MIME[path.extname(f).toLowerCase()];
    if (!mime) continue;
    const needle = 'data:' + mime + ';base64,' + fs.readFileSync(path.join(ASSETS, f)).toString('base64');
    if (!home.includes(needle)) continue;
    home = home.split(needle).join(asset(f));
    swapped++;
  }
  const after = Buffer.byteLength(home);
  console.log(`  homepage: ${swapped} assets un-inlined, ${(before / 1048576).toFixed(2)} MB -> ${(after / 1048576).toFixed(2)} MB`);
  const left = (home.match(/data:(image|video)\/[a-z0-9]+;base64,/g) || []).length;
  if (left) console.log(`  WARNING: ${left} base64 payload(s) still inline - an asset in the page is not in _src/assets`);
}

/* the homepage links out to the new pages with root-absolute hrefs; on a Pages
   project site they need the subfolder prefix, so the STAGING build adds it. */
if (STAGING) {
  home = home.replace('</title>', '</title>\n<meta name="robots" content="noindex,nofollow">');
  /* Skip paths that already carry the prefix: the asset swap above used
     asset(), which is already B-prefixed. Without this guard those became
     /Roofers-R-Us/Roofers-R-Us/assets/... and every image on the preview
     homepage 404ed (2026-09-15). */
  const already = B.slice(1).replace(/[.*+?^${}()|[]\]/g, '\$&');
  home = home.replace(new RegExp('(href|src)="/(?!/|' + already + ')', 'g'), '$1="' + B);
  /* the homepage stylesheet-free build has no url() to rewrite */
}
fs.writeFileSync(path.join(OUT, 'index.html'), home);
urls.push(ORIGIN + B);

/* ------------------------------------------------------------- fragments -- */
const svcCard = s => `<a class="linkcard" href="${B}services/${s.slug}/">
  <span>${esc(s.name)}<small>${esc(tok(s.lede))}</small></span>${svg('arrow')}</a>`;

const areaCard = a => `<a class="linkcard" href="${B}${a.slug}/">
  <span>${esc(a.name)}<small>${esc(a.band)}</small></span>${svg('arrow')}</a>`;

/* Facts only: hours from the form, the tagline from the logo, the Google
   rating read off the listing. No insurance, no guarantee - neither is
   evidenced. */
const sideCard = (where) => `<div class="side">
  <div class="side-card">
    <h2>Get a free quote</h2>
    <p>Someone comes out, looks at the roof properly and gives you a written price. No charge, no obligation.</p>
    <a class="btn btn-primary" href="tel:${T.PHONE_TEL}" data-track="call">${svg('phone')}Call ${T.PHONE}</a>
    <a class="btn btn-ghost" href="${waHref(where)}" target="_blank" rel="noopener">WhatsApp us</a>
    <div class="factrow">${svg('clock')}<span>${esc(SITE.contact.hours)}</span></div>
    <div class="factrow">${svg('star')}<span>Rated 5.0 on Google from 35 reviews</span></div>
    <div class="factrow">${svg('users')}<span>Family firm, three generations, a team of ten</span></div>
    <div class="factrow">${svg('pin')}<span>${esc(T.TOWN)}, Redditch and ${esc(T.AREA2)}</span></div>
  </div>
</div>`;

const galleryFigs = ids => `<div class="pg-grid">` + ids.map(id => {
  const g = SITE.galleryAll.find(x => x[0] === id);
  if (!g) throw new Error('gallery id not in content/site.js: ' + id);
  return `<figure><img loading="lazy" src="${asset(id + '.webp')}" alt="${esc(g[1])}"><figcaption>${esc(g[2])}</figcaption></figure>`;
}).join('') + `</div>`;

const REGION = `${T.TOWN}, Redditch and ${T.AREA2}`;

/* ---------------------------------------------------------- services hub -- */
{
  const crumbs = [['Home', B], ['Services', null]];
  const title = 'Roofing Services in {{TOWN}} | {{BUSINESS}}';
  const desc = 'Roof repairs, re-roofing, flat roofs, chimneys, roofline and guttering, moss removal and 24 hour call outs across {{TOWN}}, Redditch and South Birmingham.';
  const faqs = SITE.generalFaqs.slice(0, 5);
  write('services/index.html', shell({
    slug: 'services', title, desc,
    schema: [bizNode(), ...webPage('services', title, desc, crumbs), faqSchema(faqs)],
    body: `<section class="page-head"><div class="wrap">${crumbTrail(crumbs)}
  <h1>Roofing services in ${esc(T.TOWN)} and ${esc(T.AREA2)}</h1>
  <p class="lede">Seven things we do, all of them properly. Everything below is covered across ${esc(REGION)}.</p>
</div></section>
<section class="sec s-light"><div class="wrap"><div class="two-col">
  <div class="prose">
    <h2>In short</h2>
    <div class="inshort"><p>${esc(T.BUSINESS)} covers roof repairs, full re-roofs, flat roofing, chimney work and leadwork, fascias, soffits and guttering, moss removal and roof maintenance, and 24 hour emergency call outs. We are a family firm, three generations in, with a team of ten working across ${esc(REGION)}. Quotes are free and in writing.</p></div>
    <h2>What we do</h2>
    <div class="linkgrid">${SERVICES.map(svcCard).join('')}</div>
    <h2>Not sure which one you need?</h2>
    <p>Most people ring about a leak and are not certain whether it is a repair or the roof reaching the end of its life. That is a perfectly normal place to start. Someone comes out, gets on the roof, finds where the water is actually getting in, and tells you honestly which of the two you are looking at. If it is a repair, we say so.</p>
    <h2>Frequently asked questions</h2>
    ${faqBlock(faqs)}
    ${ctaBand('Want someone to take a look?', 'Free written quotes and a phone that is answered 24 hours a day.')}
  </div>
  ${sideCard()}
</div></div></section>`,
  }));
}

/* -------------------------------------------------------------- services -- */
for (const s of SERVICES) {
  const crumbs = [['Home', B], ['Services', B + 'services/'], [s.name, null]];
  const others = SERVICES.filter(x => x.slug !== s.slug);
  const faqs = s.faqs;
  const svcSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: tok(s.name), serviceType: tok(s.name),
    provider: { '@id': BIZ_ID },
    description: tok(s.inShort),
    areaServed: AREAS.map(a => ({ '@type': 'City', name: a.name })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog', name: 'Roofing services',
      /* no price anywhere: serviceDetail gave none */
      itemListElement: SERVICES.map(x => ({
        '@type': 'Offer', itemOffered: { '@type': 'Service', name: tok(x.name) } })),
    },
  };
  write(`services/${s.slug}/index.html`, shell({
    slug: `services/${s.slug}`, title: s.title, desc: s.desc,
    schema: [bizNode(), ...webPage(`services/${s.slug}`, s.title, s.desc, crumbs), svcSchema, faqSchema(faqs)],
    body: `<section class="page-head"><div class="wrap">${crumbTrail(crumbs)}
  <h1>${esc(tok(s.h1))}</h1>
  <p class="lede">${esc(tok(s.lede))}</p>
</div></section>
<section class="sec s-light"><div class="wrap"><div class="two-col">
  <div class="prose">
    <h2>In short</h2>
    <div class="inshort"><p>${esc(tok(s.inShort))}</p></div>

    <h2>${esc(s.signsTitle)}</h2>
    <ul>${s.signs.map(x => `<li>${esc(tok(x))}</li>`).join('')}</ul>

    <h2>${esc(s.processTitle)}</h2>
    <div class="steps">${s.steps.map(([h, p]) =>
      `<div class="step"><h3>${esc(tok(h))}</h3><p>${esc(tok(p))}</p></div>`).join('')}</div>

    ${galleryFigs(s.gallery)}

    ${ctaBand('Want someone to take a look?', 'Free written quote, and we answer the phone 24 hours a day.', 'for ' + s.name.toLowerCase())}

    <h2>${esc(s.name)} near you</h2>
    <p>We cover ${esc(REGION)}. Pick your area for what the work tends to look like there.</p>
    <div class="areas-cols">${AREAS.map(a =>
      `<a href="${B}${a.slug}/">${esc(s.name)} in ${esc(a.name)}</a>`).join('')}</div>

    <h2>Frequently asked questions</h2>
    ${faqBlock(faqs)}

    <h2>Other services</h2>
    <div class="linkgrid">${others.map(svcCard).join('')}</div>
  </div>
  ${sideCard('for ' + s.name.toLowerCase())}
</div></div></section>`,
  }));
}

/* ------------------------------------------------------------- areas hub -- */
{
  const crumbs = [['Home', B], ['Areas we cover', null]];
  const title = 'Areas We Cover | {{BUSINESS}}';
  const desc = 'Roofers covering ' + AREAS.slice(0, 6).map(a => a.name).join(', ') + ' and ' + (AREAS.length - 6) + ' more across {{TOWN}}, Redditch and South Birmingham. Call {{PHONE}}.';
  const faqs = [
    ['How far do you travel?', 'Bromsgrove, Redditch and the south side of Birmingham. That is the patch Dave gave us and the one the vans are in every day.'],
    ['What if I am just outside your area?', 'Ring anyway. The list is a guide rather than a fence, and depending on the job it is often still worth us coming out.'],
    ['Do you charge more for the areas further away?', 'No. Everywhere on this page is priced the same way. If a job were genuinely too far to do properly we would tell you rather than adding a travel charge.'],
    ['Which areas do you get to fastest?', 'Bromsgrove and the villages round it, because that is home. After a storm, Rednal, Rubery and Longbridge on the Lickey side are usually the first calls.'],
  ];
  const bands = [...new Set(AREAS.map(a => a.band))];
  write('areas-we-cover/index.html', shell({
    slug: 'areas-we-cover', title, desc,
    schema: [bizNode(), ...webPage('areas-we-cover', title, desc, crumbs), faqSchema(faqs)],
    body: `<section class="page-head"><div class="wrap">${crumbTrail(crumbs)}
  <h1>Areas we cover</h1>
  <p class="lede">${AREAS.length} areas across ${esc(REGION)}, from the Lickey Hills to the Stratford Road.</p>
</div></section>
<section class="sec s-light"><div class="wrap"><div class="two-col">
  <div class="prose">
    <h2>In short</h2>
    <div class="inshort"><p>We work across three patches: Bromsgrove and the villages round it, Catshill, Barnt Green, Alvechurch and Rubery; Redditch, old town and new; and the south side of Birmingham, from Longbridge and Rednal in the south west, through Northfield, Selly Oak, Bournville and Kings Norton, round to Kings Heath, Moseley and Hall Green. Every area below is priced the same way, with no travel charge.</p></div>
    ${bands.map(band => `<h2>${esc(band)}</h2>
    <div class="linkgrid">${AREAS.filter(a => a.band === band).map(areaCard).join('')}</div>`).join('\n    ')}

    <h2>Not sure if you are in range?</h2>
    <p>The list is a guide, not a boundary. If you are a little outside it, ring and describe the job. Depending on what it is and what else we have on, it is often still worth us coming out, and if it genuinely is not we will say so.</p>

    ${ctaBand('Check your postcode', 'Tell us where you are and we will tell you straight away whether we cover it.')}

    <h2>Frequently asked questions</h2>
    ${faqBlock(faqs)}
  </div>
  ${sideCard()}
</div></div></section>`,
  }));
}

/* ----------------------------------------------------------------- areas -- */
for (const a of AREAS) {
  const crumbs = [['Home', B], ['Areas we cover', B + 'areas-we-cover/'], [a.name, null]];
  const title = `Roofers in ${a.name} | ${T.BUSINESS}`;
  const desc = `Roofers covering ${a.name}${a.nearby.length ? ' and ' + a.nearby.slice(0, 3).join(', ') : ''}. Repairs, re-roofing, flat roofs and guttering. 24 hour call out. Call ${T.PHONE}.`;
  const faqs = [...a.faqs, ...SITE.sharedAreaFaqs];
  const placeSchema = {
    '@context': 'https://schema.org', '@type': 'City', name: a.name,
    containedInPlace: { '@type': 'AdministrativeArea', name: a.band === 'South Birmingham' ? 'Birmingham' : T.COUNTY },
  };
  const svcSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: `Roofing in ${a.name}`, serviceType: 'Roofing',
    provider: { '@id': BIZ_ID },
    description: tok(a.inShort),
    areaServed: { '@type': 'City', name: a.name },
  };
  write(`${a.slug}/index.html`, shell({
    slug: a.slug, title, desc,
    schema: [bizNode(), ...webPage(a.slug, title, desc, crumbs), placeSchema, svcSchema, faqSchema(faqs)],
    body: `<section class="page-head"><div class="wrap">${crumbTrail(crumbs)}
  <h1>Roofers in ${esc(a.name)}</h1>
  <p class="lede">${a.base ? esc(a.name) + ' is home.' : a.band === a.name ? esc(a.name) + ' is one of the three areas Dave named first.' : esc(a.name) + ' is part of our ' + esc(a.band) + ' patch.'} Repairs, re-roofing, flat roofs, chimneys and guttering, with a 24 hour line.</p>
</div></section>
<section class="sec s-light"><div class="wrap"><div class="two-col">
  <div class="prose">
    <h2>In short</h2>
    <div class="inshort"><p>${esc(tok(a.inShort))}</p></div>

    <h2>Roofing in ${esc(a.name)}</h2>
    <p>${esc(tok(a.local))}</p>

    <h2>What we do in ${esc(a.name)}</h2>
    <div class="linkgrid">${SERVICES.map(svcCard).join('')}</div>

    ${ctaBand('Need a roofer in ' + a.name + '?', 'Free written quote, and a phone that is answered 24 hours a day.', 'in ' + a.name)}

    <h2>Areas we cover around ${esc(a.name)}</h2>
    <p>As well as ${esc(a.name)} itself we cover ${a.nearby.map(n => esc(n)).join(', ')} and the streets between.</p>
    <div class="areas-cols">${AREAS.filter(x => x.slug !== a.slug).map(x =>
      `<a href="${B}${x.slug}/">Roofers in ${esc(x.name)}</a>`).join('')}</div>

    <h2>Frequently asked questions</h2>
    ${faqBlock(faqs)}
  </div>
  ${sideCard('in ' + a.name)}
</div></div></section>`,
  }));
}

/* ----------------------------------------------------------------- about -- */
{
  const crumbs = [['Home', B], ['About', null]];
  const title = 'About {{BUSINESS}} | Family Roofers in {{TOWN}}';
  const desc = 'A family roofing firm, three generations in, covering {{TOWN}}, Redditch and South Birmingham with a team of ten. Rated 5.0 on Google. Call {{PHONE}}.';
  write('about/index.html', shell({
    slug: 'about', title, desc,
    schema: [bizNode(), ...webPage('about', title, desc, crumbs)],
    body: `<section class="page-head"><div class="wrap">${crumbTrail(crumbs)}
  <h1>About ${esc(T.BUSINESS)}</h1>
  <p class="lede">${esc(SITE.about.lede)}</p>
</div></section>
<section class="sec s-light"><div class="wrap"><div class="two-col">
  <div class="prose">
    <h2>Who we are</h2>
    ${SITE.about.paras.map(p => `<p>${esc(tok(p))}</p>`).join('\n    ')}
    <div class="pg-grid" style="grid-template-columns:1fr 1fr">
      <figure><img loading="lazy" src="${asset('about1.webp')}" alt="Dave from ${esc(T.BUSINESS)} standing beside the sign-written company van, with a scaffolded re-roof behind him"><figcaption>Dave and the van on site</figcaption></figure>
      <figure><img loading="lazy" src="${asset('about2.webp')}" alt="${esc(T.BUSINESS)} logo and strapline on the rear doors of the van"><figcaption>Roofing for three generations</figcaption></figure>
    </div>
    <h2>What you can expect</h2>
    <ul>
      <li>A free quote, in writing, before anything starts</li>
      <li>Photographs of each stage, including the parts of the roof you cannot get to</li>
      <li>The phone answered 24 hours a day, and emergency call outs</li>
      <li>Waste taken with us as we go, and the drive swept before we leave</li>
      <li>Done correctly the first time, in Dave’s words</li>
    </ul>
    ${ctaBand('Want a quote from us?', 'Ring, message on WhatsApp, or send a couple of photographs and we will tell you what we think.')}
  </div>
  ${sideCard()}
</div></div></section>`,
  }));
}

/* --------------------------------------------------------------- reviews --
   The public READ page. Real reviews only, quoted verbatim, credited to the
   platform. /review/ (singular) is the different thing: the card Dave texts a
   customer, written by pages-review.js. */
{
  const crumbs = [['Home', B], ['Reviews', null]];
  const title = 'Reviews | {{BUSINESS}} | Rated 5.0 on Google';
  const desc = '{{BUSINESS}} is rated 5.0 from 35 reviews on Google. Read what customers across {{TOWN}}, Redditch and South Birmingham say about the roofing work.';
  const R = SITE.reviews;
  const L = SITE.reviewLinks;
  write('reviews/index.html', shell({
    slug: 'reviews', title, desc,
    schema: [bizNode(), ...webPage('reviews', title, desc, crumbs)],
    body: `<section class="page-head"><div class="wrap">${crumbTrail(crumbs)}
  <h1>What our customers say</h1>
  <p class="lede">Rated 5.0 from 35 reviews on Google. Every review below is quoted word for word, spelling and all.</p>
</div></section>
<section class="sec s-light"><div class="wrap"><div class="two-col">
  <div class="prose">
    <h2>In short</h2>
    <div class="inshort"><p>${esc(T.BUSINESS)} has 35 reviews on Google with an average of 5.0. The three below are the most recent that customers have written in full. The rest are on the listing, which is where you should read them, because we cannot edit what is there.</p></div>
    <h2>From Google</h2>
    ${R.featured.map(r => `<div class="rv-card"><b>${esc(r.name)}</b><small>${esc(r.platform)} review, ${esc(r.date)}</small><div class="rv-stars" aria-label="5 out of 5">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>${esc(r.text)}</p></div>`).join('\n    ')}
    <h2>Read them all</h2>
    <div class="linkgrid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">
      <a class="linkcard" href="${esc(L.googleRead)}" target="_blank" rel="noopener"><span>Google<small>5.0 from 35 reviews</small></span>${svg('star')}</a>
      <a class="linkcard" href="${esc(L.facebook)}" target="_blank" rel="noopener"><span>Facebook<small>Follow our latest jobs</small></span><svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${FB_PATH}</svg></a>
    </div>
    <h2>Had us out recently?</h2>
    <p>A few words on Google takes about thirty seconds and genuinely decides whether the next person gives a small family firm a go. <a href="${esc(L.googleWrite)}" target="_blank" rel="noopener">Leave a Google review</a>.</p>
    ${ctaBand('Want your roof done the same way?', 'Free written quote, and we answer the phone 24 hours a day.')}
  </div>
  ${sideCard()}
</div></div></section>`,
  }));
}

/* --------------------------------------------------------------- our work -- */
{
  const crumbs = [['Home', B], ['Our work', null]];
  const title = 'Our Work | Roofing Photographs | {{BUSINESS}}';
  const desc = 'Photographs of re-roofs, chimney repointing, slate and tile work carried out across {{TOWN}}, Redditch and South Birmingham by {{BUSINESS}}.';
  write('our-work/index.html', shell({
    slug: 'our-work', title, desc,
    schema: [bizNode(), ...webPage('our-work', title, desc, crumbs)],
    body: `<section class="page-head"><div class="wrap">${crumbTrail(crumbs)}
  <h1>Our work</h1>
  <p class="lede">${SITE.galleryAll.length} photographs of finished roofs, chimney work and jobs in progress from around ${esc(REGION)}.</p>
</div></section>
<section class="sec s-light"><div class="wrap">
  <div class="prose" style="max-width:none">
    <h2>In short</h2>
    <div class="inshort" style="max-width:70ch"><p>Every photograph below is our own work. Most of a roof is somewhere you will never stand, which is exactly why we photograph each stage as we go: the membrane, the battens and the leadwork are the parts that decide whether a roof lasts, and they are all hidden by the time the job looks finished. The homepage carries a before and after of the chimney repoint.</p></div>
    ${galleryFigs(SITE.galleryAll.map(g => g[0]))}
    ${ctaBand('Want your roof to look like this?', 'Free written quote, and we answer the phone 24 hours a day.')}
  </div>
</div></section>`,
  }));
}

/* ------------------------------------------------------------------ faqs -- */
{
  const crumbs = [['Home', B], ['FAQs', null]];
  const title = 'Roofing FAQs | {{BUSINESS}} | {{TOWN}} and South Birmingham';
  const desc = 'Common questions about roof repairs, re-roofing, quotes, scaffolding, emergency call outs and the areas covered, answered by {{BUSINESS}}.';
  write('faqs/index.html', shell({
    slug: 'faqs', title, desc,
    schema: [bizNode(), ...webPage('faqs', title, desc, crumbs), faqSchema(SITE.generalFaqs)],
    body: `<section class="page-head"><div class="wrap">${crumbTrail(crumbs)}
  <h1>Frequently asked questions</h1>
  <p class="lede">The things people actually ring and ask, answered straight.</p>
</div></section>
<section class="sec s-light"><div class="wrap"><div class="two-col">
  <div class="prose">
    ${faqBlock(SITE.generalFaqs)}
    ${ctaBand('Still not sure?', 'Ring and ask. We would rather answer a question than have you guess.')}
  </div>
  ${sideCard()}
</div></div></section>`,
  }));
}

/* --------------------------------------------------------------- contact -- */
{
  const crumbs = [['Home', B], ['Contact', null]];
  const title = 'Contact {{BUSINESS}} | Roofers in {{TOWN}}';
  const desc = 'Call {{PHONE}} 24 hours a day, message on WhatsApp, or email {{EMAIL}}. Roofers covering {{TOWN}}, Redditch and South Birmingham.';
  const a = SITE.contact.address;
  write('contact/index.html', shell({
    slug: 'contact', title, desc,
    schema: [bizNode(), ...webPage('contact', title, desc, crumbs)],
    body: `<section class="page-head"><div class="wrap">${crumbTrail(crumbs)}
  <h1>Contact us</h1>
  <p class="lede">We answer the phone 24 hours a day. Quotes are free and in writing.</p>
</div></section>
<section class="sec s-light"><div class="wrap"><div class="two-col">
  <div class="prose">
    <h2>How to reach us</h2>
    <div class="linkgrid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">
      <a class="linkcard" href="tel:${T.PHONE_TEL}" data-track="call"><span>Call or text<small>${T.PHONE}</small></span>${svg('phone')}</a>
      <a class="linkcard" href="${waHref()}" target="_blank" rel="noopener" data-track="whatsapp"><span>WhatsApp<small>${T.PHONE}</small></span>${svg('send')}</a>
      <a class="linkcard" href="mailto:${T.EMAIL}"><span>Email<small>${T.EMAIL}</small></span>${svg('mail')}</a>
      <a class="linkcard" href="${esc(T.FACEBOOK)}" target="_blank" rel="noopener"><span>Facebook<small>Message the page</small></span><svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${FB_PATH}</svg></a>
    </div>

    <h2>Send us the job</h2>
    <p>The quickest way is the form on the <a href="${B}#contact">homepage</a>, which opens WhatsApp with your details already written out. A photograph of the problem and a rough idea of what you want is usually enough for us to tell you what you are dealing with.</p>

    <h2>Where we are</h2>
    <p>${esc(a.line1)}<br>${esc(a.line2)}</p>

    <h2>Opening hours</h2>
    <p>${esc(SITE.contact.hours)}. If something has come off the roof in the middle of the night, ring. We would far rather make it safe first and talk about the proper repair in daylight.</p>

    <h2>Areas we cover</h2>
    <p>${esc(REGION)}. <a href="${B}areas-we-cover/">See the full list of ${AREAS.length} areas</a>.</p>

    ${ctaBand('Send a photograph', 'A couple of pictures on WhatsApp and a rough description is usually enough for us to tell you what you are dealing with.')}
  </div>
  ${sideCard()}
</div></div></section>`,
  }));
}

/* ----------------------------------------------------------------- legal --
   No insurance wording and no guarantee length anywhere in these: both sit in
   confirm[] with no certificate attached. */
const legalShell = (slug, h1, title, desc, inner) => {
  const crumbs = [['Home', B], [h1, null]];
  write(`${slug}/index.html`, shell({
    slug, title, desc,
    schema: [bizNode(), ...webPage(slug, title, desc, crumbs)],
    body: `<section class="page-head"><div class="wrap">${crumbTrail(crumbs)}
  <h1>${esc(h1)}</h1>
</div></section>
<section class="sec s-light"><div class="wrap"><div class="prose">${inner}</div></div></section>`,
  }));
};

legalShell('privacy-policy', 'Privacy policy',
  'Privacy Policy | {{BUSINESS}}',
  'How {{BUSINESS}} collects, uses and stores the personal information you give us.',
  `<p>This policy explains what ${esc(T.BUSINESS)} does with the personal information you give us. It was last updated in September 2026.</p>
   <h2>Who we are</h2>
   <p>${esc(SITE.contact.company.name)}, company number ${esc(SITE.contact.company.number)}. You can reach us on <a href="tel:${T.PHONE_TEL}">${T.PHONE}</a> or at <a href="mailto:${T.EMAIL}">${T.EMAIL}</a>.</p>
   <h2>What we collect</h2>
   <p>Only what you give us when you get in touch: your name, your phone number, your email address if you use it, the address of the property and whatever you tell us about the job. We do not buy data about you from anyone else.</p>
   <h2>Why we hold it</h2>
   <p>To quote for your work, to carry it out, and to contact you about it afterwards. If you become a customer we keep a record of the work so we can come back to it if you need us to.</p>
   <h2>Who we share it with</h2>
   <p>Nobody, other than where we genuinely have to in order to do the job, such as a scaffolding contractor who needs the address. We do not sell your details and we do not pass them to marketing companies.</p>
   <h2>How long we keep it</h2>
   <p>Enquiries that do not turn into work are deleted once they are clearly not going anywhere. Customer records are kept for as long as we might reasonably need to refer back to the work.</p>
   <h2>Your rights</h2>
   <p>You can ask us what we hold about you, ask us to correct it, or ask us to delete it. Contact us on the details above and we will deal with it. If you are not happy with how we have handled it you can complain to the Information Commissioner’s Office at ico.org.uk.</p>
   <h2>This website</h2>
   <p>The site sets no advertising or tracking cookies unless you accept them on the banner. Declining does not affect your quote or how we handle your enquiry.</p>`);

legalShell('terms', 'Terms and conditions',
  'Terms and Conditions | {{BUSINESS}}',
  'The terms on which {{BUSINESS}} quotes for and carries out roofing work.',
  `<p>These are the terms on which ${esc(T.BUSINESS)} quotes for and carries out work. They were last updated in September 2026, and nothing in them affects your statutory rights.</p>
   <h2>Quotations</h2>
   <p>Quotes are free and given in writing after we have looked at the roof. A quote covers the work described in it. If we find something once work starts that could not reasonably have been seen beforehand, typically rotten timber under an existing covering, we stop, tell you what it will cost and get your agreement before carrying on.</p>
   <h2>Booking and access</h2>
   <p>We will agree a start date with you. You will need to give us reasonable access to the property and, where the job requires it, to a neighbouring property. Where scaffolding is needed it is included in the quoted price unless the quote says otherwise.</p>
   <h2>Payment</h2>
   <p>Payment terms are set out on your quote.</p>
   <h2>Materials</h2>
   <p>Tiles, membranes and other materials carry their own manufacturer warranties, which are separate from anything we agree with you and which we will point you to.</p>
   <h2>Cancellation</h2>
   <p>Where you engage us as a consumer away from our premises you have a statutory right to cancel within fourteen days. If you ask us to start within that period and then cancel, we may charge for work already done.</p>
   <h2>Complaints</h2>
   <p>If something is not right, ring ${esc(T.OWNER)} on <a href="tel:${T.PHONE_TEL}">${T.PHONE}</a>. We would much rather hear about it and put it right than have you live with it.</p>`);

/* ------------------------------------------------------------------- 404 -- */
{
  const title = 'Page not found | {{BUSINESS}}';
  const desc = 'That page does not exist. Try our services, the areas we cover, or ring {{PHONE}}.';
  fs.writeFileSync(path.join(OUT, '404.html'), shell({
    slug: '404', title, desc,
    schema: [bizNode()],
    body: `<section class="page-head"><div class="wrap">
  <h1>That page does not exist</h1>
  <p class="lede">It may have moved, or the link may be wrong. Here is where most people are heading.</p>
</div></section>
<section class="sec s-light"><div class="wrap"><div class="prose">
  <h2>Try one of these</h2>
  <div class="linkgrid">
    <a class="linkcard" href="${B}"><span>Home</span>${svg('arrow')}</a>
    <a class="linkcard" href="${B}services/"><span>Services</span>${svg('arrow')}</a>
    <a class="linkcard" href="${B}areas-we-cover/"><span>Areas we cover</span>${svg('arrow')}</a>
    <a class="linkcard" href="${B}our-work/"><span>Our work</span>${svg('arrow')}</a>
    <a class="linkcard" href="${B}faqs/"><span>FAQs</span>${svg('arrow')}</a>
    <a class="linkcard" href="${B}contact/"><span>Contact</span>${svg('arrow')}</a>
  </div>
  ${ctaBand('Or just ring us', 'We answer the phone 24 hours a day.')}
</div></div></section>`,
  }), 'utf8');
}

/* -------------------------------------------------- review landing page -- */
require('./pages-review.js')({ write, G });

/* ------------------------------------------------------------- analytics -- */
{
  const GA4 = (cfg.analytics && cfg.analytics.ga4) || '';
  const src = fs.readFileSync(path.join(__dirname, 'analytics-src.js'), 'utf8');
  if (src.split('{{GA4_ID}}').length - 1 !== 1) throw new Error('analytics-src.js must contain exactly one {{GA4_ID}}');
  fs.writeFileSync(path.join(OUT, 'assets', 'analytics.js'), src.split('{{GA4_ID}}').join(GA4));
  console.log('  analytics.js written' + (GA4 ? ' (GA4 ' + GA4 + ', consent gated)' : ' (NO GA4 ID - inert)'));
}

/* ------------------------------------------------------------ lead beacon -- */
{
  const EXEC = (cfg.leadLog && cfg.leadLog.exec) || '';
  const src = fs.readFileSync(path.join(__dirname, 'lead-src.js'), 'utf8');
  if (src.split('{{LEAD_EXEC_URL}}').length - 1 !== 1) throw new Error('lead-src.js must contain exactly one exec URL placeholder');
  if (EXEC && !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(EXEC)) throw new Error('leadLog.exec is not a deployed /exec URL: ' + EXEC);
  fs.writeFileSync(path.join(OUT, 'assets', 'lead.js'), src.split('{{LEAD_EXEC_URL}}').join(EXEC));
  console.log('  lead.js written' + (EXEC ? ' (logging live)' : ' (NO EXEC URL YET - inert)'));
}

/* ------------------------------------------------------- sitemap + robots -- */
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  `\n</urlset>\n`);

fs.writeFileSync(path.join(OUT, 'robots.txt'),
  STAGING
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}${B}sitemap.xml\n`);

console.log(`${STAGING ? '_staging' : '_site'}: ${urls.length} pages, ${copied + 1} assets`);
console.log(`  ${SERVICES.length} services, ${AREAS.length} areas, ${urls.length - SERVICES.length - AREAS.length} other`);
if (STAGING) console.log(`  STAGING build - noindex on every page, robots.txt disallows all`);
