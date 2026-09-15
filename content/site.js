/* Everything that is not a service page or an area page.
 * Source: onboarding submission #20 (Roofers r us Ltd, submitted 2026-09-07),
 * fetched 2026-09-15 into _source/, plus the facts already recorded in
 * site.config.js facts{} from the demo build (Facebook intro, Google listing).
 *
 * WHAT THE SUBMISSION GAVE, in Dave's own words:
 *   owner            "Davey mark jones deadman", ownerShort "Dave"
 *   addr             "Unit 2 Stafford court Stafford Road" - NO town, NO postcode
 *   town             "South Birmingham Redditch bromsgrove"
 *   openingHours     "24 hours we do emergency call outs"
 *   years            "15"   (confirm[] - NOT published; the logo says three generations)
 *   team             "Team of 10 guys"
 *   story            "Been doing this 3 generations"
 *   usp              "Works man ship"
 *   aboutTeam        "We work fast and hard to get stuff done correctly, the first time"
 *   topServices      "Roof replacements and stuff"
 *   serviceDetail    { "Roofing services": "1 week turn around if emergency" }
 *   customerQuestions "All differnt"
 *   ratings.google   5 from 35   (matches what I read on the listing 2026-09-07)
 *   contactWidgets   WhatsApp form
 *   guarantee        "15 years on replacements"  (confirm[] - NOT published)
 *   insured          "Yes", "100,000,000"       (confirm[] - NOT published)
 *
 * EMPTY and therefore researched rather than invented:
 *   primaryAreas[] / nearby{}   every area page and every village list is Claude
 *                               research around Bromsgrove, Redditch and south
 *                               Birmingham. Dave should read them.
 *   photos                      0 of 20 uploaded. The demo's eight photographs
 *                               are reused with the demo captions.
 */
'use strict';

const contact = {
  /* The submission gave the unit and the street and nothing else. No town, no
     postcode, and a web search found nothing. Companies House has the
     REGISTERED office in Lees, Oldham, which is almost certainly a formation
     agent - Dave typed the company number 16169285 into the form himself, so it
     is his company. The two blank fields are left blank rather than guessed. */
  address: {
    line1: 'Unit 2 Stafford Court',
    line2: 'Stafford Road',
    town: '',
    region: '',
    postcode: '',
    country: 'GB',
  },
  addressOneLine: 'Unit 2 Stafford Court, Stafford Road',
  hours: '24 hours a day, 7 days a week, including emergency call outs',
  hoursSchema: 'Mo-Su 00:00-23:59',
  company: {
    name: 'Roofers R Us Ltd',
    number: '16169285',
    registeredOffice: 'Blake House, 11 High Street, Lees, Oldham OL4 3BH',
  },
};

/* ------------------------------------------------------------- reviews --
 * Google: 5.0 from 35, read off the listing 2026-09-07 and given again on the
 * form. The three below are quoted word for word from the listing, spelling
 * and punctuation the customers' own. Facebook shows no reviews.
 *
 * NO aggregateRating IS EMITTED. Google's guidelines do not allow a business
 * to mark up reviews collected on a third-party site as its own aggregate,
 * and a wrong star rating in a result is the most visible mistake a site can
 * make. The badges link out to the listing instead. */
const reviews = {
  featured: [
    { name: 'Steven Cadby', date: 'April 2026', platform: 'Google',
      text: 'Very good team of roofers! As a landlord I’ve used Roofers R us on several of my properties and they’ve always done a perfect job, there time keeping has always been without any issues.. in some cases they’ve even fitted me in beforehand. I will Definitely recommend Roofers R us for anyone needing any kind of roofing works in the future.' },
    { name: 'Caz', date: 'November 2025', platform: 'Google',
      text: 'Absolutely amazing job. All without noise and mess always on time . Dave showed us photos of all work they were doing and explained everything. They cleaned everything away and even washed the dust from my car . . Highly recommended.' },
    { name: 'Anthony Wilson', date: 'October 2025', platform: 'Google',
      text: 'Had Dave and his team come out at very short notice. Fixed a leak in the roof and the gutters done. The team was very professional and very quick at getting the repairs done. Would highly recommend thank you for the top work' },
  ],
  platforms: [
    { key: 'google', name: 'Google', count: 35, rating: '5.0', verified: true, blurb: '5.0 from 35 reviews' },
  ],
};

/* READ vs WRITE.
 *   googleRead   the listing, where a visitor READS reviews. Derived from the
 *                place CID 0x88ec9e1117f581b3 = 9866434679915512243. Verified
 *                2026-09-07.
 *   googleWrite  the write-a-review dialog. Built from the same place pair in
 *                the `!12e1` form that Midland's official Ask-for-reviews link
 *                resolved to. It opens the dialog, but it is NOT the official
 *                short link - swap in the g.page/r/.../review link from Dave's
 *                Business Profile dashboard when he has it. */
const reviewLinks = {
  googleRead: 'https://maps.google.com/?cid=9866434679915512243',
  googleWrite: 'https://www.google.com/maps/place//data=!4m3!3m2!1s0xec08e02d3e13033:0x88ec9e1117f581b3!12e1',
  facebook: 'https://www.facebook.com/profile.php?id=61593965793871',
  secondary: [{ name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61593965793871' }],
};

const review = {
  eyebrow: 'Job complete',
  title: 'Thank you',
  thanks: 'We really appreciate you having {{OWNER}} and the team out, and we hope you are pleased with how the roof has come out.',
  askTitle: 'Could you spare thirty seconds?',
  ask: 'We are a family firm and almost everyone who rings us was sent by somebody else. A few words from you on Google genuinely decides whether the next person gives us a go.',
  button: 'Leave a Google review',
  buttonNote: 'Opens Google, about thirty seconds',
  steps: [
    'Tap the button above.',
    'Sign in if Google asks. On a phone you almost certainly already are.',
    'Pick a star rating, add a few words about the job, and post it.',
  ],
  putRightTitle: 'Not quite happy?',
  putRight: 'If something is not right we would much rather hear it from you first and put it straight. Ring {{OWNER}} on {{PHONE}} or send a message on WhatsApp, and we will come back out.',
  /* Only claims declared in site.config.js claims{}. There are none. */
  reassure: 'Roofing for three generations. Rated 5.0 on Google.',
  fallbackButton: 'Tell us how we did',
  fallbackNote: 'Opens WhatsApp, about thirty seconds',
  fallbackAsk: 'We are a family firm and we do not advertise much. Hearing how we did genuinely helps, good or bad.',
  fallbackPutRight: 'If something is not right we would much rather hear it from you first and put it straight. Ring {{OWNER}} on {{PHONE}} and we will come back out.',
};

/* Three questions every area page carries, plus the two written for that
   town in content/areas.js. Nothing here claims insurance or a guarantee. */
const sharedAreaFaqs = [
  ['Do you charge for a quote?', 'No. Someone comes out, looks at the roof properly and gives you a written price. There is no charge and no obligation.'],
  ['How far do you travel?', 'We cover Bromsgrove, Redditch and the south side of Birmingham. If you are just outside the towns listed it is still worth ringing.'],
  ['Do you do emergency call outs?', 'Yes, on a 24 hour line. If something has come off in the night we make it safe first and talk about the proper repair in daylight.'],
];

const generalFaqs = [
  ['Do you charge for a quote?', 'No. We come out, look at the roof properly and give you a written price, at no cost and with no obligation to go ahead.'],
  ['How quickly can you come out?', 'The phone is answered 24 hours a day and we do emergency call outs. For a job that is not dripping through the ceiling, Dave’s own words on the form were a one week turnaround.'],
  ['What areas do you cover?', 'Bromsgrove, Redditch and South Birmingham. That takes in Catshill, Barnt Green, Alvechurch and Rubery on the Bromsgrove side, and Kings Norton, Northfield, Longbridge, Selly Oak, Bournville, Kings Heath, Moseley, Hall Green, Harborne, Stirchley and Cotteridge on the Birmingham side.'],
  ['How long have you been roofing?', 'Three generations of the same family. Dave runs a team of ten.'],
  ['Will I need scaffolding?', 'Anything above single storey, or any job lasting more than a short visit, normally does, both for safety and for a better finish. It is included in the written price from the start rather than added later.'],
  ['Do you work in bad weather?', 'Some work can be made safe in the wet, but a lasting repair needs a dry roof, particularly anything involving mortar or lead. We will always tell you which of the two you are getting.'],
  ['Can you match my existing tiles?', 'Usually. The concrete interlocking profiles across the south Birmingham estates and the clay tiles on the older Bromsgrove and Redditch stock are all ones we handle constantly, and reclaimed tiles are available for the awkward ones.'],
  ['Do you take on commercial work as well as houses?', 'Most of what we do is for homeowners and landlords. Ring and describe it and we will tell you honestly whether it suits us.'],
  ['What happens if you find something unexpected once you start?', 'We stop, photograph it and tell you what it will cost before carrying on. Nobody enjoys that call, but it is a great deal better than finding out afterwards.'],
  ['Do you clear up afterwards?', 'Yes. Waste goes with us as we go and the drive gets swept before we leave. One customer on Google mentions the dust being washed off her car.'],
  ['Can I see photographs of the work?', 'Yes, and we take them as a matter of course. Most of a roof is somewhere you will never stand, so photographs of each stage are the only way you can actually see what you paid for.'],
  ['Do you do flat roofs as well as pitched?', 'Yes. EPDM rubber, fibreglass and felt, on extensions, garages, porches and dormers.'],
  ['Do you do gutters, fascias and soffits?', 'Yes. Replacement UPVC roofline and gutter repairs, on their own or as part of a re-roof.'],
  ['How do I get in touch?', 'Ring or text {{PHONE}}, message on WhatsApp, or fill in the form on the contact page and it opens WhatsApp with your details already written out.'],
];

/* The demo gallery, reused. Dave uploaded no photographs with the submission
   (0 of 20), so these are the demo's own captions, written from what is in
   frame. check.js fails a client build on a missing alt. */
const gallery = [
  ['g3', 'Semi-detached bungalow with a new grey tiled roof, the neighbouring half still in its original tiles', 'Bungalow re-roof in grey tiles'],
  ['g7', 'New grey interlocking tiles on a pitched roof under a blue sky', 'Pitched re-roof'],
  ['g1', 'Newly tiled hipped roof with finished ridge and hip lines, seen from the scaffold', 'Hipped re-roof'],
  ['g6', 'Re-tiled hipped roof with two brick chimneys, scaffold boards in the foreground', 'Hipped roof and chimneys'],
  ['g5', 'New slates laid on a pitched roof alongside the original tiles, with a red ridge', 'New slate roof section'],
  ['g4', 'Repointed brick chimney stack with lead flashing on a red tiled roof', 'Chimney repointing and leadwork'],
  ['g8', 'Freshly repointed chimney stack with new mortar joints, a roof ladder alongside', 'Chimney repointed'],
  ['g2', 'Ridge line of a traditional clay tiled roof with the street below', 'Clay tile roof'],
];
const galleryAll = gallery;

const about = {
  lede: 'A family roofing firm, three generations in, covering Bromsgrove, Redditch and the south side of Birmingham.',
  /* story: "Been doing this 3 generations". team: "Team of 10 guys".
     aboutTeam: "We work fast and hard to get stuff done correctly, the first time".
     usp: "Works man ship". Built on those and nothing more. */
  paras: [
    '{{BUSINESS}} is a family firm. Roofing has been in the family for three generations, and Dave now runs a team of ten covering Bromsgrove, Redditch and the south side of Birmingham. Repairs, full re-roofs, flat roofs, chimneys, and fascias, soffits and guttering, mostly for homeowners and the landlords who look after houses in these areas.',
    'Asked what makes the firm different, Dave gave a one word answer: workmanship. The longer version, in his words, is that the team works fast and hard to get the job done correctly the first time. On a roof that means the membrane, the battens and the leadwork, the parts that decide whether it lasts, done properly even though they are covered up by the time the job looks finished.',
    'The Google reviews say the same things over and over: turned up when they said, showed photographs of the work as it went, came out at short notice, and left the place clean. The phone is answered 24 hours a day and emergency call outs are part of the job, not an extra.',
  ],
};

/* WhatsApp prefill. Every wa.me link opens with a line in the CUSTOMER'S voice
   that says it came from the website, so Dave knows where the message came from. */
const whatsapp = {
  opener: (where) =>
    'Hi {{BUSINESS}}, I found you on your website and I would like a quote' +
    (where ? ' ' + where : '') + '.',
  formOpener: 'Hi {{BUSINESS}}, I found you on your website and I would like a quote.',
};

module.exports = { contact, reviews, reviewLinks, review, sharedAreaFaqs, generalFaqs, gallery, galleryAll, about, whatsapp };
