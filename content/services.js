/* Service pages. Source: submission #20.
 *
 * Dave listed ONE service on the form, "Roofing services", with topServices
 * "Roof replacements and stuff" and serviceDetail "1 week turn around if
 * emergency". The seven pages below are the six services the demo homepage
 * already carries (which came from the Facebook intro: "roof repairs, new
 * roofs, flat roofing, guttering and more") plus emergency call outs, which
 * the form's opening hours answer states outright.
 *
 * NO PRICES anywhere. serviceDetail gave none, and an invented price is a
 * claim. NO guarantee length and NO insurance wording: both sit in confirm[]
 * with no certificate attached.
 *
 * customerQuestions came back as "All differnt", so the FAQs are written from
 * the trade, not from Dave's phrasing. Worth replacing with his own words.
 */
'use strict';

module.exports = [
  {
    slug: 'roof-repairs',
    name: 'Roof repairs',
    h1: 'Roof repairs in {{TOWN}}, Redditch and South Birmingham',
    title: 'Roof Repairs in {{TOWN}} | {{BUSINESS}}',
    desc: 'Leaks, slipped tiles, storm damage and failed flashing repaired across {{TOWN}}, Redditch and South Birmingham. 24 hour call out. Call {{PHONE}}.',
    lede: 'Most roofs do not fail all at once. They fail at one detail, and the damage spreads from there.',
    inShort: 'We repair pitched and flat roofs across {{TOWN}}, Redditch and the south side of Birmingham, usually in a single visit. Slipped and cracked tiles, leaks around chimneys and valleys, failed lead flashing, storm damage and blocked or split guttering. The phone is answered 24 hours a day, and we tell you honestly whether the roof needs a repair or a re-cover rather than selling you the bigger job.',
    signsTitle: 'Signs your roof needs looking at',
    signs: [
      'A damp patch on an upstairs ceiling, or a tide mark that grows after heavy rain',
      'Tiles or slates lying in the garden, or a gap visible on the slope from the ground',
      'Water tracking down a chimney breast, which usually means the flashing has gone rather than the roof',
      'Daylight visible through the roof from inside the loft',
      'Mortar dropping out of the ridge, or ridge tiles that look out of line',
      'Guttering overflowing in a downpour, which soaks the brickwork and eventually the wall plate',
    ],
    processTitle: 'How a repair actually goes',
    steps: [
      ['We look at it properly', 'Someone comes out, gets onto the roof where it is safe to, and finds where the water is actually getting in. That is not always where the stain appears inside, which is why guessing from the ground wastes everybody’s money.'],
      ['You get told the truth', 'If it is a repair, we say so. If the covering is at the end of its life and a repair will only buy a year, we say that too and let you decide. We photograph what we find so you can see it yourself.'],
      ['A written price before anything starts', 'Itemised, including access. Nothing begins until you have said yes to it.'],
      ['The repair', 'Matching tiles or slates where we can, new lead dressed and fixed properly where the old work has failed, and ridges rebedded and pointed rather than smeared over.'],
      ['Checked, photographed and cleared up', 'We show you the finished work in photographs, take the waste with us, and sweep down before we leave.'],
    ],
    faqs: [
      ['How quickly can you come out for a leak?', 'The phone is answered 24 hours a day and we do emergency call outs. How fast we can be on the roof depends on the weather and where you are, and we will give you a straight answer when you call rather than a promise we cannot keep.'],
      ['Can you make it safe before a proper repair?', 'Usually yes. A temporary cover keeps the water out until the roof is dry enough to work on properly. We will always tell you which one you are getting so you are not surprised when we come back.'],
      ['Do you work in bad weather?', 'Some work can be made safe in the wet. A lasting repair needs a dry roof, particularly anything involving mortar or lead. We would rather come back than do it twice.'],
      ['Will I need scaffolding for a small repair?', 'Not always. A single slipped tile can often be done off a ladder or a tower. Anything above single storey, or anything taking more than a short visit, normally needs scaffolding for safety and for a better finish. It is priced in from the start.'],
      ['Can you match my existing tiles?', 'Usually. The concrete interlocking profiles on the south Birmingham estates and the clay tiles on the older Bromsgrove and Redditch houses are ones we handle every week, and reclaimed tiles cover the awkward ones.'],
      ['What does a repair cost?', 'It depends entirely on what has failed and how the roof is reached, so we will not quote a figure over the phone and pretend it is accurate. You get a written price after we have looked, before any work starts.'],
    ],
    gallery: ['g4', 'g5', 'g2'],
  },

  {
    slug: 'new-roofs-and-re-roofing',
    name: 'New roofs and re-roofing',
    h1: 'New roofs and re-roofing in {{TOWN}} and South Birmingham',
    title: 'Roof Replacement and Re-Roofing in {{TOWN}} | {{BUSINESS}}',
    desc: 'Full strip and re-cover with breathable membrane, treated battens and new tiles or slates, across {{TOWN}}, Redditch and South Birmingham. Call {{PHONE}}.',
    lede: 'A re-roof is the one job where everything that matters is hidden by the time you see it finished.',
    inShort: 'We strip roofs back to the timbers, re-felt them with a breathable membrane, batten at the correct gauge and re-cover them in new tiles or slates, across {{TOWN}}, Redditch and the south side of Birmingham. Roof replacements are the biggest part of what we do. Because the parts that decide whether a roof lasts are all covered up by the end, we photograph every stage so you can see what went on underneath rather than taking it on trust.',
    signsTitle: 'Signs a roof is past repairing',
    signs: [
      'Repairs are becoming a regular expense rather than a one off',
      'Tiles are delaminating, spalling or crumbling at the edges when handled',
      'The felt under the tiles has torn or perished, visible as sagging strips in the loft',
      'The roof line is dipping between the rafters, or the ridge has a visible sag',
      'Nail fatigue on a slate roof, where slates slip steadily with no storm to blame',
      'You are planning solar, a loft conversion or a long spell in the house and want it done once',
    ],
    processTitle: 'What a full re-roof involves',
    steps: [
      ['Survey and an honest recommendation', 'We get up and look at the deck, the battens and the felt, not just the tiles. Plenty of roofs sent to us for replacement only needed a repair, and we will say so.'],
      ['A written specification', 'Which tile or slate, which membrane, which battens, what happens at the ridge, the hips, the valleys and the abutments, and what the access costs. All of it in writing before anything is ordered.'],
      ['Scaffold and strip', 'The roof is sheeted, the old covering comes off, and the timbers are inspected properly once they are exposed. Anything rotten gets replaced, and you see a photograph of it before it is covered again.'],
      ['Membrane, battens and covering', 'Breathable membrane lapped the right way, treated battens set to the gauge the tile needs, then the new covering laid, fixed and cut in cleanly at every edge.'],
      ['Ridge, verges, leadwork and hand over', 'Ridges and hips bedded or dry fixed, verges finished, lead renewed where it meets chimneys and walls, and the whole job photographed and walked through with you before the scaffold comes down.'],
    ],
    faqs: [
      ['How long does a re-roof take?', 'A typical semi is a matter of days once the scaffold is up, weather allowing. Bigger or more complicated roofs take longer, and the written quote will say how long we expect to be there.'],
      ['Do I have to move out?', 'No. The work is all from the outside. There is noise and there is a scaffold up, but you can live in the house throughout.'],
      ['Can I change the colour or the type of tile?', 'Usually yes. Some conservation areas and estates with covenants restrict it, and we will tell you if that applies to your street.'],
      ['Will my ceilings be affected?', 'No. The covering is stripped from above and the ceilings are untouched. If the felt has been letting water in for years there may already be staining inside, which the new roof stops getting worse.'],
      ['Is it a good time to add roof insulation or a roof window?', 'Yes. With the covering off, both are far cheaper than as a separate job later. Say so at the survey and we will price it in.'],
    ],
    gallery: ['g3', 'g7', 'g1'],
  },

  {
    slug: 'flat-roofing',
    name: 'Flat roofing',
    h1: 'Flat roofing in {{TOWN}}, Redditch and South Birmingham',
    title: 'Flat Roofing in {{TOWN}} | {{BUSINESS}}',
    desc: 'EPDM rubber, fibreglass and felt flat roofs for extensions, garages, porches and dormers across {{TOWN}}, Redditch and South Birmingham. Call {{PHONE}}.',
    lede: 'Flat roofs get a bad name from the way they used to be done. Done properly, a modern one outlasts the extension under it.',
    inShort: 'We replace and repair flat roofs on extensions, garages, porches, bays and dormers across {{TOWN}}, Redditch and the south side of Birmingham. EPDM rubber for most jobs, fibreglass where a hard wearing finish or an awkward shape calls for it, and felt where it is the right match. The board underneath is checked and replaced where it has gone soft, and the falls are set so water actually leaves the roof.',
    signsTitle: 'Signs a flat roof is on its way out',
    signs: [
      'Water pooling and sitting for days after rain rather than draining',
      'Blistering, cracking or bare patches on an old felt roof',
      'A soft or springy feel underfoot, which means the decking has taken water',
      'Damp on the ceiling below, often first at the join with the main house wall',
      'Vegetation growing in the covering, or moss along the edges',
      'The roof has been patched with more than one type of material over the years',
    ],
    processTitle: 'How we do a flat roof',
    steps: [
      ['Survey', 'We look at the covering, the decking under it, the drainage and the upstands where it meets the house. A flat roof that leaks at the wall is a different job from one that leaks in the middle.'],
      ['The right system for the roof', 'EPDM for most domestic roofs, fibreglass where the shape is awkward or the roof gets walked on, felt where it matches what is there. We explain which and why in the quote.'],
      ['Strip and deck', 'Old coverings come off and the boards are inspected. Soft or rotten decking is replaced rather than covered over, and the falls are corrected if water has been sitting.'],
      ['Lay the new roof', 'The membrane or laminate goes down in one piece where possible, dressed up the walls and into the gutter, with trims and outlets fitted so the edges are as sound as the middle.'],
      ['Check and photograph', 'The finished roof is checked for falls and sealed edges, photographed, and the site cleared.'],
    ],
    faqs: [
      ['What is the best material for a flat roof?', 'For most house extensions and garages, EPDM rubber: one sheet, no seams, and it stays flexible. Fibreglass is the choice where the roof is walked on or has lots of upstands and corners. Felt still has its place where it matches an existing roof.'],
      ['Can you put a new roof over the old felt?', 'Sometimes, if the deck is sound and dry. Usually it is a false economy: once the old roof has let water into the boards, covering it seals the damp in. We check before we advise.'],
      ['How long does a flat roof take?', 'A garage or a single storey extension is usually a day or two, weather allowing.'],
      ['Can you add a roof lantern or skylight?', 'Yes, and a re-cover is the ideal time, because the kerb and the flashing are built into the new roof rather than cut into an old one.'],
      ['My flat roof joins a pitched roof. Can you do both?', 'Yes. Where the two meet is where most leaks happen, and having one firm responsible for both sides of the joint is the way to stop it.'],
    ],
    gallery: ['g3', 'g6', 'g7'],
  },

  {
    slug: 'chimneys-and-leadwork',
    name: 'Chimneys and leadwork',
    h1: 'Chimney repairs and leadwork in {{TOWN}} and South Birmingham',
    title: 'Chimney Repairs and Leadwork in {{TOWN}} | {{BUSINESS}}',
    desc: 'Chimney repointing, rebuilds, cowls and new lead flashing across {{TOWN}}, Redditch and South Birmingham. Call {{PHONE}} for a free look.',
    lede: 'A chimney takes more weather than any other part of the house, and the lead around its base is where most roofs first let go.',
    inShort: 'We repoint, rebuild and cap chimney stacks and renew the lead flashing, soakers and back gutters around them, across {{TOWN}}, Redditch and the south side of Birmingham. Failed chimney pointing and tired lead are the two commonest causes of a damp chimney breast on the older red brick houses round here. Both are repairs rather than a new roof, and we say so.',
    signsTitle: 'Signs a chimney needs work',
    signs: [
      'A damp patch or staining on the chimney breast upstairs, worse after rain',
      'Mortar joints on the stack that are open, crumbling or grown over with moss',
      'Bricks spalling on the weather side of the stack',
      'Lead flashing that has lifted, split or been patched with mastic or cement',
      'A leaning stack, or a pot that has moved',
      'An unused chimney with no cap, letting rain straight down the flue',
    ],
    processTitle: 'What chimney work involves',
    steps: [
      ['Inspect the stack and the lead', 'From the roof, not the ground. We look at the pointing, the brick faces, the flaunching around the pots and the lead at the base, and photograph all of it for you.'],
      ['Repoint or rebuild', 'Open joints are raked out and refilled with a mortar that suits the brick. Where the top courses have gone, the stack is taken down to sound brick and rebuilt.'],
      ['Renew the lead', 'Step flashing, aprons, soakers and back gutters in new code lead, dressed and fixed properly, with the chases cut and pointed so it cannot pull out.'],
      ['Cap, cowl and flaunch', 'Unused flues are capped so rain stays out and air still moves. Pots are re-flaunched, and cowls fitted where a working flue needs one.'],
      ['Photograph and clear', 'You see the finished stack in photographs, because you are not going to climb up and look yourself.'],
    ],
    faqs: [
      ['Is it the roof or the chimney that is leaking?', 'On the older houses across Bromsgrove and south Birmingham it is very often the chimney, either the pointing or the lead at the base. It shows as damp on the chimney breast rather than a ceiling. We find out where the water is actually getting in before anything is quoted.'],
      ['Can you just take the chimney down?', 'Yes, if it is unused. Taking a stack down to below the roof line and tiling over is a common job and removes the problem for good. Party wall stacks need the neighbour involved.'],
      ['Does a chimney repair need scaffolding?', 'Nearly always, for safety and to do the job properly. It is included in the written price.'],
      ['Do you replace the lead or seal it?', 'Replace it. Mastic and cement over old lead is a temporary patch at best and it hides the fault. New lead dressed properly is the fix.'],
      ['What is the lead flashing on the photographs?', 'The grey metal where the chimney meets the tiles. It is what keeps water out of that joint, and it is the first thing to check on a damp chimney breast.'],
    ],
    gallery: ['g4', 'g8', 'g6'],
  },

  {
    slug: 'fascias-soffits-and-guttering',
    name: 'Fascias, soffits and guttering',
    h1: 'Fascias, soffits and guttering in {{TOWN}} and South Birmingham',
    title: 'Fascias, Soffits and Guttering in {{TOWN}} | {{BUSINESS}}',
    desc: 'UPVC fascia and soffit replacement, new guttering and gutter repairs across {{TOWN}}, Redditch and South Birmingham. Call {{PHONE}}.',
    lede: 'The roofline is the part of the roof you can see from the pavement, and the part that quietly rots when the gutters are wrong.',
    inShort: 'We replace timber fascias and soffits with UPVC, fit new guttering and downpipes, and repair or realign existing gutters, across {{TOWN}}, Redditch and the south side of Birmingham. Overflowing gutters soak the brickwork and eventually the wall plate the rafters sit on, so a small roofline job now often saves a much bigger one later.',
    signsTitle: 'Signs your roofline needs attention',
    signs: [
      'Paint flaking and timber going soft or green along the fascia board',
      'Gutters overflowing at the corners or the joints in heavy rain',
      'Sagging gutter runs where the brackets have let go',
      'Green staining down the brickwork under a gutter joint',
      'Birds or wasps getting into the roof space through a rotten soffit',
      'Fascias that were capped over old timber years ago and are now bowing',
    ],
    processTitle: 'How a roofline job goes',
    steps: [
      ['Look at what is there', 'We check the fascia timber, the soffit, the felt where it laps into the gutter, and the gutter falls. Capping over rotten wood is not something we do.'],
      ['Written price', 'Replacement or repair, per elevation, with the access included.'],
      ['Strip the old', 'Guttering comes off, then the fascias and soffits, and the rafter ends are checked while they are exposed.'],
      ['Fit the new roofline', 'UPVC fascia boards fixed to sound timber, ventilated soffits so the roof space can breathe, and eaves protection so the felt drains into the gutter rather than behind it.'],
      ['Gutters and downpipes', 'New guttering set to the right fall, joints and outlets sealed, downpipes connected into the drains, and everything tested with water before we leave.'],
    ],
    faqs: [
      ['Can you replace the gutters without the fascias?', 'Yes, if the fascia timber is sound. If it is not, new gutters will be fixed to rotten wood and will sag within a year, so we check first.'],
      ['UPVC or timber?', 'UPVC for almost every house. It does not need painting, it does not rot, and it comes in white, black, brown and woodgrain finishes to suit the house.'],
      ['Do you clear gutters as well?', 'Yes, on their own or as part of a roof maintenance visit.'],
      ['How long does it take?', 'A typical semi is usually a day for the roofline and the guttering together, weather allowing.'],
      ['Does it need scaffolding?', 'On a two storey house, normally yes. Bungalows can often be done from a tower, which makes the job cheaper.'],
    ],
    gallery: ['g3', 'g1', 'g7'],
  },

  {
    slug: 'moss-removal-and-roof-maintenance',
    name: 'Moss removal and roof maintenance',
    h1: 'Moss removal and roof maintenance in {{TOWN}} and South Birmingham',
    title: 'Moss Removal and Roof Maintenance | {{BUSINESS}}',
    desc: 'Roof moss removal, gutter clearing and the small repairs that stop a big bill, across {{TOWN}}, Redditch and South Birmingham. Call {{PHONE}}.',
    lede: 'Moss is not just cosmetic. It holds water against the tiles, blocks the gutters and, when it freezes, lifts the covering.',
    inShort: 'We clear moss from tiled and slate roofs by hand and scraper, clear and check the gutters, and put right the small faults we find while we are up there, across {{TOWN}}, Redditch and the south side of Birmingham. The north facing slopes and tree lined streets around Bournville, Barnt Green and Alvechurch grow it fastest. We do not pressure wash tiled roofs, because it drives water under the covering and strips the surface off concrete tiles.',
    signsTitle: 'Signs a roof needs a maintenance visit',
    signs: [
      'Thick moss along the courses, especially on the north facing slope',
      'Gutters full of moss and grit after every storm',
      'Lumps of moss on the drive and in the borders',
      'A roof that has not been looked at since the house was bought',
      'Small slipped tiles or lifted ridge mortar that have never been dealt with',
      'Blocked outlets causing water to run down the wall in heavy rain',
    ],
    processTitle: 'What a maintenance visit covers',
    steps: [
      ['Clear the moss', 'By hand and scraper, working across the slope, so the tiles are not damaged and nothing is forced under the laps.'],
      ['Clear the gutters and outlets', 'All of the debris out, the outlets checked, and the runs checked for fall and for joints that have started to weep.'],
      ['Look for the small faults', 'Slipped or cracked tiles, ridge mortar that has gone, lead that has lifted. Fixed on the day where they are small, quoted where they are not.'],
      ['Treat where it helps', 'A biocide treatment slows the moss coming back on roofs that grow it badly. We say honestly whether it is worth it for yours.'],
      ['Photograph and report', 'You get photographs of the roof before and after, and a plain list of anything that needs watching.'],
    ],
    faqs: [
      ['Do you pressure wash roofs?', 'No, not tiled or slate roofs. A pressure washer drives water under the tiles, strips the protective surface off concrete tiles and can lift them off the battens. Hand removal is slower and it is the right way.'],
      ['How often should moss be cleared?', 'It depends on the roof. A north facing slope under trees may need looking at every couple of years. An open south facing roof may never need it.'],
      ['Will clearing the moss damage the tiles?', 'Not done by hand. If a tile is already cracked or delaminating it may show up once the moss is off, and we tell you rather than hide it.'],
      ['Can you clear my gutters at the same time?', 'Yes, and we usually do, because the moss ends up in the gutters.'],
      ['Is moss a sign the roof needs replacing?', 'Not on its own. Moss grows on perfectly sound roofs. It is what it hides, and what it does to the gutters, that causes the trouble.'],
    ],
    gallery: ['g2', 'g6', 'g5'],
  },

  {
    slug: 'emergency-roof-repairs',
    name: 'Emergency roof repairs',
    h1: '24 hour emergency roof repairs in {{TOWN}} and South Birmingham',
    title: '24 Hour Emergency Roof Repairs | {{BUSINESS}}',
    desc: 'Storm damage, leaks and tiles down. 24 hour emergency roof repairs across {{TOWN}}, Redditch and South Birmingham. Ring {{PHONE}} any time.',
    lede: 'Roofs do not fail at a convenient hour. The phone is answered 24 hours a day.',
    inShort: 'We do 24 hour emergency call outs across {{TOWN}}, Redditch and the south side of Birmingham. When tiles have come off in a storm, a leak has started coming through a ceiling, or a chimney or flashing has failed, ring {{PHONE}} at any hour. The first visit makes the roof safe and watertight, and the proper repair follows once it is dry, typically within the week.',
    signsTitle: 'Ring straight away if',
    signs: [
      'Tiles, slates or ridge tiles have come off in high wind',
      'Water is coming through a ceiling or running down a wall',
      'A ceiling is bulging or sagging with water behind it',
      'A tree branch or debris has come down on the roof',
      'A flat roof has torn or lifted in a storm',
      'A chimney stack or pot has moved or come down',
    ],
    processTitle: 'What happens when you ring',
    steps: [
      ['You speak to a person', 'Not an answering service. Tell us what has happened and where you are, and we will tell you honestly how soon we can be there.'],
      ['Make it safe', 'Loose tiles and debris taken down before they fall on somebody, and the opening covered or sheeted so the water stops coming in.'],
      ['Stop the leak', 'A temporary repair where a lasting one is not possible in the wet, and a clear explanation of which you are getting.'],
      ['Photograph the damage', 'For your insurer if you are claiming, and for you, so you can see exactly what failed.'],
      ['The proper repair', 'Quoted in writing and done once the roof is dry, usually within the week. Dave’s own words for a typical emergency job are a one week turnaround.'],
    ],
    faqs: [
      ['Do you really answer at night?', 'Yes. The phone is answered 24 hours a day. If it is three in the morning and the water is coming in, ring.'],
      ['Can you help with an insurance claim?', 'We photograph the damage and the repair and give you a written report of what failed, which is what an insurer usually asks for. We do not deal with the insurer on your behalf.'],
      ['Is an emergency call out more expensive?', 'The written price covers what is done. We will tell you what the call out involves before we set off, so there is no surprise on the day.'],
      ['What can I do while I wait?', 'Move anything valuable from under the leak, put a bucket down, and if a ceiling is bulging, pierce it with a screwdriver to let the water out in one place rather than have the ceiling come down. Do not go on the roof.'],
      ['Will the temporary repair hold?', 'Long enough for the roof to dry and the proper repair to be done. We will say how long we expect it to last and when we will be back.'],
    ],
    gallery: ['g4', 'g2', 'g1'],
  },
];
