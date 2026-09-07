// copy library: C:\Users\Jay\.claude\site-kit\copy\roofing.js
module.exports = {
  name: 'Roofers R Us Ltd',
  trade: 'roofing',

  /* 'demo' allows placeholders and a 4 MB payload.
     'client' forbids placeholders, forbids base64 video, and drops the budget to 2 MB. */
  mode: 'demo',

  /* Contractor Bold: the roofing direction. Near-black ground, hard-edged cards,
     dense rhythm. It is also the register the client's own logo lives in: a
     white lockup on a black plate. */
  direction: 'contractor-bold',

  title: 'Roofers R Us Ltd | Roofers in Bromsgrove and South Birmingham',
  description: 'Roof repairs, re-roofing, flat roofs, chimneys and guttering across Bromsgrove and South Birmingham. Rated 5.0 on Google from 35 reviews. Free quotes.',

  /* The official logo is pure white on a black plate, so it carries no colour
     of its own. The brand swatch comes from Logo-icon.jpg, the same roof mark in
     the client's slate blue (average rgb 85,99,120). Second colour is the
     terracotta of the brick and clay tile that fills every photograph. The ink
     is the exact plate colour behind the logo, rgb(16,19,24), so the hero logo
     sits on the same black it was designed on. */
  palette: {
    brand: '#556378', 'brand-rgb': '85,99,120',
    'brand-lt': '#8C9CB6',
    'brand-dp': '#3D4A5C',
    brand2: '#B4503A', 'brand2-rgb': '180,80,58',
    'brand2-lt': '#D97C64',
    'brand2-dk': '#7E3527',
    'on-brand2': '#FFF4F0',

    ink: '#101318', 'ink-rgb': '16,19,24',
    'ink-1': '#171B22',
    'ink-2': '#20262F',
    'ink-deep': '#080A0E', 'ink-deep-rgb': '8,10,14',

    'band-bg': '#0C1015',
    'band-g1': '#151B24',
    'band-g2': '#1F1412',
    'chip-core-bg': '#2A3340',

    /* The logo is a 2.64:1 lockup (roof mark over two lines of type), not a
       square badge. body.html overrides .hero-logo aspect-ratio to match, so
       these are true widths with no dead space above and below. */
    'hero-logo': 'clamp(250px,46vw,560px)',
    'hero-logo-sm': 'min(86vw,340px)',
    'hero-logo-gap': '22px',
    'hero-logo-gap-sm': '14px',
    'hero-h1': 'clamp(24px,4.1vw,41px)',
  },

  /* A claim here is a statement that the client supplied evidence.
     NOTHING is declared. No insurance certificate, accreditation or guarantee
     document has been seen. A second Facebook page in the same name advertises
     "up to 15-year guarantees" but it is not the page that matches the logo, so
     it is not used anywhere. "Roofing for three generations" appears only
     because it is the strapline printed inside the client's own logo artwork
     and on the van. */
  claims: {},

  facebook: 'https://www.facebook.com/profile.php?id=61593965793871',
  google: 'https://maps.google.com/?cid=9866434679915512243',

  /* Where each fact came from, so the next session does not have to re-derive it. */
  facts: {
    PHONE:     { value: '07490 870599', source: 'facebook/about intro AND Google Business Profile (both show the same number)', seen: '2026-09-07' },
    TOWN:      { value: 'Bromsgrove', source: 'facebook/about intro: "Proudly serving Bromsgrove & South Birmingham"; Google pin sits in south Birmingham', seen: '2026-09-07' },
    AREAS:     { value: 'Bromsgrove and South Birmingham', source: 'facebook/about intro. No fuller town list anywhere public', seen: '2026-09-07' },
    SERVICES:  { value: 'roof repairs, new roofs, flat roofing, guttering "and more"', source: 'facebook/about intro', seen: '2026-09-07' },
    EMAIL:     { value: 'roofersrus@mail.com', source: 'read off the van livery in about-owner.jpg, CONFIRM with the client before go-live', seen: '2026-09-07' },
    OWNER:     { value: 'Dave', source: 'three separate Google reviews name "Dave" as the person on site; surname unknown', seen: '2026-09-07' },
    GOOGLE:    { value: '5.0 from 35 reviews, listed as "Roofers R Us Limited", no website on the listing', source: 'Google Maps place 0xec08e02d3e13033:0x88ec9e1117f581b3', seen: '2026-09-07' },
    FACEBOOK:  { value: '1.3K followers, 0 reviews, page id 61593965793871', source: 'facebook/reviews', seen: '2026-09-07' },
    FB_TWIN:   { value: 'A second "Roofers R Us Ltd" page, id 61566150702737, Hollyhock Rd Birmingham, 18 followers, claims 15-year guarantees and 50+ reviews. Not matched to the logo, NOT used.', source: 'facebook search', seen: '2026-09-07' },
    COMPANIES_HOUSE: { value: 'ROOFERS R US LTD 16169285, active, incorporated 7 Jan 2025, registered office Blake House, 11 High Street, Lees, Oldham OL4 3BH. May be a formation-agent address or a different company entirely - confirm', source: 'find-and-update.company-information.service.gov.uk', seen: '2026-09-07' },
    TAGLINE:   { value: 'Roofing for three generations', source: 'printed inside logo-official.png and on the van', seen: '2026-09-07' },
  },

  tokens: {
    BUSINESS: 'Roofers R Us Ltd',
    BUSINESS_SHORT: 'Roofers R Us',
    TOWN: 'Bromsgrove',
    AREA2: 'South Birmingham',
    PHONE: '07490 870599',
    PHONE_TEL: '+447490870599',
    PHONE_WA: '447490870599',
    EMAIL: 'roofersrus@mail.com',
    FACEBOOK: 'https://www.facebook.com/profile.php?id=61593965793871',
    GOOGLE: 'https://maps.google.com/?cid=9866434679915512243',
  },
};
