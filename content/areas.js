/* Area pages. Source: submission #20 gave primaryAreas [] (MISSING), town
 * "South Birmingham Redditch bromsgrove", and the Facebook intro says
 * "Proudly serving Bromsgrove & South Birmingham".
 *
 * `nearby{}` came back EMPTY, so every village list and every local paragraph
 * below is Claude research, not Dave's words. He should read these - he knows
 * which streets he actually works and which he does not.
 *
 * Three bands, all from the three places Dave named:
 *   Bromsgrove district   Bromsgrove, Catshill, Barnt Green, Alvechurch, Rubery
 *   Redditch              Redditch (the new-town estates go INSIDE that page)
 *   South Birmingham      twelve suburbs, Longbridge and Rednal in the south
 *                         west round to Hall Green and Moseley in the south east
 *
 * DELIBERATELY EXCLUDED: the city centre, north and east Birmingham, Solihull,
 * Worcester, Kidderminster and Stratford. Dave said south Birmingham, and a
 * page for somewhere he does not go is the page that reads as spam.
 *
 * No distances: the yard's postcode is not known (the form gave a unit and a
 * street and nothing else), so nothing here says how far anywhere is.
 *
 * NEVER write one paragraph and swap the town name. Each `local` below is
 * about that specific place: its housing stock, roughly when it was built,
 * and the roofing work that follows from it.
 */
'use strict';

module.exports = [
  /* -------------------------------------------------- Bromsgrove district */
  {
    slug: 'roofers-in-bromsgrove', name: 'Bromsgrove', band: 'Bromsgrove district', base: true,
    nearby: ['Aston Fields', 'Charford', 'Sidemoor', 'Stoke Prior', 'Finstall', 'Lickey End'],
    inShort: 'Bromsgrove is the town we call home, and the one Dave names first. Repairs, re-roofs, flat roofs, chimneys and roofline across the whole town, from the Victorian streets round the High Street to the big post-war estates at Charford and Sidemoor.',
    local: 'Bromsgrove is a market town with three distinct kinds of roof. Round the High Street, Aston Fields and the station there is Victorian and Edwardian housing, much of it under plain clay tile or slate on timber that has now done well over a century, so nail fatigue, perished felt where there is any felt at all, and tired chimney pointing are the regular jobs. Charford, Sidemoor and the estates towards the bypass are 1950s to 1970s council and private building, almost all concrete interlocking tile, and a lot of it is on its original covering with the felt underneath long gone brittle. The newer estates towards Stoke Prior and the Perryfields side are younger and mostly need storm repairs, verges and guttering. Being based here, this is the patch we reach fastest.',
    faqs: [
      ['Are you actually based in Bromsgrove?', 'Yes. Bromsgrove is home and it is the first town Dave names when asked where the firm works. It is not a mailing address borrowed for a website.'],
      ['My Charford roof has never been touched since it was built. Is that a problem?', 'Not automatically, but a concrete tile roof from the 1960s is at the age where the felt underneath has usually perished even when the tiles look fine. It is worth a look before it announces itself through a bedroom ceiling.'],
    ],
  },
  {
    slug: 'roofers-in-catshill', name: 'Catshill', band: 'Bromsgrove district',
    nearby: ['Marlbrook', 'Lickey End', 'Bournheath', 'Fairfield', 'Blackwell'],
    inShort: 'We cover Catshill and the villages up the Lickey side of Bromsgrove: Marlbrook, Lickey End, Bournheath and Fairfield. Mostly repairs, re-roofs and roofline on the semis and bungalows that make up most of the village.',
    local: 'Catshill sits on the rise between Bromsgrove and the Lickey Hills, and most of it was built between the wars and the 1970s: semis, a good number of bungalows, and ribbon development along the Stourbridge Road and Golden Cross Lane. Concrete interlocking tile is the norm, with the older village core around the church in clay. The bungalows change the job in a useful way, because a single storey roofline can often be reached from a tower rather than a full scaffold, which keeps fascia, soffit and gutter work noticeably cheaper than on the two storey houses down the hill. Up towards Marlbrook and Blackwell the houses get bigger, older and more exposed to the weather coming off the Lickeys, and moss on north facing slopes is a regular reason for a call.',
    faqs: [
      ['Do I need scaffolding on a bungalow?', 'Often not. A lot of Catshill roofline and gutter work can be done safely off a tower, which takes a real chunk out of the price. We tell you which when we look.'],
      ['Do you go up to Blackwell and Marlbrook?', 'Yes. Both are in the villages we cover from Bromsgrove.'],
    ],
  },
  {
    slug: 'roofers-in-barnt-green', name: 'Barnt Green', band: 'Bromsgrove district',
    nearby: ['Blackwell', 'Cofton Hackett', 'Lickey', 'Hopwood', 'Bittell'],
    inShort: 'We cover Barnt Green, Blackwell, Cofton Hackett and Lickey. Large detached houses under mature trees, which means moss, valleys, chimneys and the leadwork on roofs with a lot of detail.',
    local: 'Barnt Green is one of the leafiest places we work, and the trees are the story. The village grew up around the station from the 1890s onwards, and the roads off Fiery Hill and up towards the Lickeys are lined with big Edwardian and interwar detached houses, many with complex roofs: multiple gables, dormers, long valleys and several chimney stacks each. Clay tile predominates, with slate on the older properties. Under that canopy the north facing slopes hold moisture for months, so moss clearance and gutter work come round regularly, and the valleys and chimney lead on roofs this detailed are where the leaks start. Cofton Hackett and Hopwood add 1930s and post-war housing that is more straightforward, and the newer estates at Cofton on the old Rover land are younger still.',
    faqs: [
      ['My roof has a lot of valleys and gables. Can you handle that?', 'Yes, and it is exactly the kind of roof where the detail matters. Valleys and abutments are where a complicated roof lets go first, and they are renewed in lead rather than patched.'],
      ['How often should a roof under trees be cleared?', 'Around Barnt Green, every couple of years for a north facing slope under a big tree is not unusual. An open slope may never need it.'],
    ],
  },
  {
    slug: 'roofers-in-alvechurch', name: 'Alvechurch', band: 'Bromsgrove district',
    nearby: ['Rowney Green', 'Hopwood', 'Bordesley', 'Withybed Green', 'Barnt Green'],
    inShort: 'We cover Alvechurch and the surrounding hamlets: Rowney Green, Hopwood, Bordesley and Withybed Green. Everything from cottages in the village centre to the 1960s and 70s estates off Red Lion Street.',
    local: 'Alvechurch has an old village centre around the church and The Square, with timber framed and Georgian cottages under clay tile that need a careful hand and matching reclaimed tiles when they are repaired. Around that core the village grew fast in the 1960s and 1970s, and the estates off Red Lion Street, Callow Hill Lane and towards the station are concrete interlocking tile of exactly the age where the covering is weathered and the felt underneath has gone. Out towards Rowney Green and Withybed Green the housing thins into farms and older cottages along the canal. The village is well wooded and low lying by the Arrow, so moss and blocked gutters are a regular call, and the older chimneys need repointing more often than people expect.',
    faqs: [
      ['Can you match the old tiles on a village cottage?', 'Usually. Reclaimed clay tiles are available for most of the older profiles, and matching the existing roof is the whole job on a cottage like that.'],
      ['Do you cover the hamlets around Alvechurch?', 'Yes. Rowney Green, Hopwood, Bordesley and Withybed Green are all covered.'],
    ],
  },
  {
    slug: 'roofers-in-rubery', name: 'Rubery', band: 'Bromsgrove district',
    nearby: ['Rednal', 'Frankley', 'Cofton Hackett', 'Lickey', 'Bartley Green'],
    inShort: 'We cover Rubery, on the boundary between Bromsgrove district and Birmingham, and Frankley and Cofton Hackett either side of it. Mostly 1930s and post-war semis, with the newer housing on the old hospital site.',
    local: 'Rubery sits right on the county line, with the Lickey Hills behind it and the Bristol Road running through. Most of the village is 1930s semis and post-war estates, concrete tile throughout, and the interwar houses in particular are at the age where hips, ridges and verges need re-bedding and the original roofline timber has rotted through more than one coat of paint. The New Rubery development on the old hospital site is a much younger stock and needs storm repairs and dry verge work rather than re-roofs. Frankley, on the Birmingham side, is largely 1960s and 1970s council estate housing with a great deal of flat roofed garaging and porches, and that is where much of our flat roof work in this corner comes from. Weather comes straight over the Lickeys here and gutters overflow in a downpour on more roofs than people realise.',
    faqs: [
      ['Is Rubery in Bromsgrove or Birmingham?', 'Both, depending which side of the road you are on, and it does not matter to us. We cover the whole village and Frankley next to it.'],
      ['Do you do the flat garage roofs on the Frankley estates?', 'Yes. EPDM rubber is usually the right answer for a garage or a porch roof of that age.'],
    ],
  },

  /* -------------------------------------------------------------- Redditch */
  {
    slug: 'roofers-in-redditch', name: 'Redditch', band: 'Redditch',
    nearby: ['Headless Cross', 'Webheath', 'Crabbs Cross', 'Astwood Bank', 'Matchborough', 'Winyates', 'Church Hill', 'Batchley', 'Studley'],
    inShort: 'We cover the whole of Redditch: the old town around Headless Cross, Crabbs Cross and Batchley, and the new town estates at Matchborough, Winyates, Church Hill and Woodrow. Re-roofs on the 1960s and 70s estates are a big part of what we do here.',
    local: 'Redditch is two towns in one. The Victorian needle-making town survives at Headless Cross, Crabbs Cross, Astwood Bank and around the old centre, under clay tile and slate on roofs that are now well past a century old, with the chimney stacks and lead to match. Then there is the new town: from the mid 1960s to the 1980s the Development Corporation built Matchborough, Winyates, Church Hill, Woodrow, Lodge Park and the rest, tens of thousands of houses in a short space of time, nearly all under concrete interlocking tile and a lot of it with shallow pitches, flat roofed porches and garages, and timber roofline that was never meant to last fifty years. Those estates are now reaching the end of their original roof life all at once, which is why full re-roofs, roofline replacement and flat roof renewals in Redditch keep us busy. Webheath and Batchley on the west side and Studley over the Warwickshire line are covered as well.',
    faqs: [
      ['My house is on one of the new town estates. Does it need a whole new roof?', 'Not necessarily, but a 1970s concrete tile roof with its original felt is at the point where a proper look is worth having. Sometimes it is re-bedding the ridges and replacing the roofline; sometimes the felt has gone and a re-roof is the honest answer. We tell you which.'],
      ['Do you cover Astwood Bank and Studley?', 'Yes. Both are on the Redditch side of what we cover.'],
    ],
  },

  /* ------------------------------------------------------ South Birmingham */
  {
    slug: 'roofers-in-kings-norton', name: 'Kings Norton', band: 'South Birmingham',
    nearby: ['Kings Norton Green', 'Hawkesley', 'West Heath', 'Walkers Heath', 'Wythall'],
    inShort: 'We cover Kings Norton and the estates around it: Hawkesley, West Heath, Walkers Heath and out to Wythall. Victorian houses round the Green, interwar semis along the Pershore Road, and the big post-war estates beyond.',
    local: 'Kings Norton has one of the oldest village centres in Birmingham, with the Green, the church and the Saracen’s Head under clay tile that needs matching carefully when it is repaired. Around it the housing runs through every era: Victorian terraces near the station and the canal, large interwar semis and detached houses along the Pershore Road and Westhill Road, and then the post-war council estates at Hawkesley, Walkers Heath and Pool Farm, built quickly in the 1960s and 70s under concrete interlocking tile with a great deal of flat roofed garaging. That last group is where the re-roofs and flat roof renewals come from now, because the original coverings are all reaching the end together. West Heath adds 1930s semis with the hipped roofs and long ridges that need re-bedding, and Wythall over the Worcestershire line is newer and larger.',
    faqs: [
      ['Do you cover the Hawkesley and Pool Farm estates?', 'Yes. The 1960s and 70s houses there are exactly the age where roofs, rooflines and flat garage roofs all come due.'],
      ['Can you repair the roof on an older house by the Green?', 'Yes. Matching the clay tiles is the whole job on a house like that, and we source reclaimed tiles for it.'],
    ],
  },
  {
    slug: 'roofers-in-northfield', name: 'Northfield', band: 'South Birmingham',
    nearby: ['Turves Green', 'West Heath', 'Bartley Green', 'Weoley Castle', 'Allens Cross'],
    inShort: 'We cover Northfield, Turves Green, Allens Cross and Bartley Green. Interwar council semis across most of the area, which means concrete tile, hipped roofs and roofline all coming due together.',
    local: 'Northfield was a village until Birmingham reached it, and between the wars the city built enormous council estates across the area: Allens Cross, Turves Green, the Weoley Castle side and up towards Bartley Green. They are good solid houses, mostly semis with hipped roofs, but they were built in the 1920s and 30s under concrete or clay tile that has now been up for the best part of ninety years. Hips and ridges re-bedded, verges made good, full re-roofs where the felt and battens have gone, and timber roofline replaced in UPVC are the regular jobs, along with a lot of chimney work, because every one of those houses has a stack and most have not been pointed in decades. Along the Bristol Road South there are older Victorian and Edwardian houses under slate, and the newer housing at Turves Green and around the old Longbridge site is younger and needs less.',
    faqs: [
      ['My 1930s council semi still has its original roof. Is that normal?', 'Common, yes. They were well built. But at ninety years old the felt is gone where there was any, the ridges are loose and the battens are tired, so it is worth a proper look before the winter.'],
      ['Do you do the chimney stacks on these houses?', 'Yes, and it is one of the commonest jobs across Northfield. Repointing the stack and renewing the lead at the base is usually what a damp chimney breast needs.'],
    ],
  },
  {
    slug: 'roofers-in-longbridge', name: 'Longbridge', band: 'South Birmingham',
    nearby: ['Rednal', 'Rubery', 'Northfield', 'Turves Green', 'Cofton Park'],
    inShort: 'We cover Longbridge, from the interwar streets built for the car works to the new housing on the old factory site. Two very different kinds of roof, a short walk apart.',
    local: 'Longbridge was built for the Austin, and the older housing round Longbridge Lane, Groveley Lane and towards Rednal is interwar terraces and semis put up for the workforce, concrete and clay tile with hipped roofs and shared chimney stacks that have done ninety years. Those roofs need what interwar roofs everywhere need: ridges and hips re-bedded, verges sorted, chimneys pointed and the lead renewed, and in the end a full re-roof once the felt has gone. Then there is the new Longbridge, built on the factory site over the last fifteen years, with the town centre, the college and hundreds of new houses, where the roofs are young and the work is storm damage, dry verge and ridge fixings that have let go, and guttering. The Cofton Park side is exposed to weather off the Lickeys and gets the worst of the wind.',
    faqs: [
      ['My house on the new Longbridge estate is only a few years old. Why has the verge come loose?', 'Dry verge and dry ridge systems are held by clips and fixings, and those are usually what let go in wind rather than the tile. It is a quick repair on the newer houses.'],
      ['Do you do the older houses along Longbridge Lane?', 'Yes. The interwar houses built for the car works are a large part of what we do in this corner.'],
    ],
  },
  {
    slug: 'roofers-in-rednal', name: 'Rednal', band: 'South Birmingham',
    nearby: ['Rubery', 'Longbridge', 'Cofton Park', 'Lickey', 'Groveley'],
    inShort: 'We cover Rednal, at the foot of the Lickey Hills, and Cofton Park and Groveley next to it. Interwar and post-war semis, a lot of them on the hill and exposed to the weather.',
    local: 'Rednal sits where the city meets the Lickey Hills, and its roofs take more weather than most of south Birmingham because of it. The housing is largely interwar and post-war semis and terraces, on the slopes off Lickey Road and Leach Green Lane and along the Bristol Road, under concrete tile with the hipped roofs and shared chimney stacks of the period. On the higher roads the wind comes straight off the hills, so slipped tiles, lifted ridges and gutters torn off in a storm are what we hear about first after a bad night, and the north facing slopes grow moss under the trees along Cofton Park. The same age of roof means the same underlying jobs as the rest of this side of the city: re-bedding, roofline, chimney pointing, and full re-roofs where the original covering is finished.',
    faqs: [
      ['Why does my roof suffer more than my sister’s in Kings Heath?', 'Exposure. Rednal is higher and the weather comes straight over the Lickeys with nothing in the way. Fixings and mortar that would last in a sheltered street let go sooner here.'],
      ['Do you do emergency call outs to Rednal?', 'Yes, 24 hours. After a storm, this is one of the areas we get called to first.'],
    ],
  },
  {
    slug: 'roofers-in-selly-oak', name: 'Selly Oak', band: 'South Birmingham',
    nearby: ['Selly Park', 'Bournbrook', 'Weoley Castle', 'Harborne', 'Bournville'],
    inShort: 'We cover Selly Oak, Selly Park and Bournbrook. Victorian and Edwardian terraces, a lot of them rented to students, plus the larger houses of Selly Park and the interwar estates at Weoley Castle.',
    local: 'Selly Oak is dominated by the university and the hospital, and the housing shows it. Bournbrook and the streets between the Bristol Road and the railway are Victorian and Edwardian terraces, largely slate, with rear extensions under flat or lean-to roofs and chimney stacks every few yards, and a high proportion of them are student lets managed by landlords who need a roof made watertight quickly and a proper report afterwards. Selly Park, on the other side of the Pershore Road, is bigger Victorian and Edwardian villas with complex roofs, valleys and a lot of leadwork. Weoley Castle, up the hill, is one of the city’s big interwar council estates under concrete tile. Slipped slates from nail fatigue, failed flat roofs on the back extensions and chimney pointing are the everyday jobs here, and we work with several landlords across the area.',
    faqs: [
      ['I am a landlord with a few houses in Selly Oak. Can you look after them?', 'Yes, and we already do that for landlords across the area. One of our Google reviews is from a landlord who uses us on several properties.'],
      ['Why do the slates keep slipping on my Victorian terrace?', 'Nail fatigue. The original iron nails rust through one by one and the slates slide, with no storm to blame. A few can be re-fixed; when it is happening across the whole slope the roof is telling you it needs re-covering.'],
    ],
  },
  {
    slug: 'roofers-in-bournville', name: 'Bournville', band: 'South Birmingham',
    nearby: ['Cotteridge', 'Stirchley', 'Weoley Hill', 'Selly Oak', 'Kings Norton'],
    inShort: 'We cover Bournville, the Cadbury village, and Weoley Hill and the streets around it. Arts and Crafts houses under clay tile with big chimneys and a lot of trees, all owned under the Bournville Village Trust.',
    local: 'Bournville is unlike anywhere else we work. The village was laid out by the Cadburys from the 1890s, and its houses are Arts and Crafts and cottage style, under plain clay tile with steep pitches, sweeping catslide roofs, big chimney stacks and lots of detail at the eaves and dormers. The Bournville Village Trust has standards for what can be done to them, so a repair means matching the existing tile, keeping the roof line as it was and using lead where lead was used, not a quick swap to concrete. The trees the village was planted with are now mature, and under them the north facing slopes grow moss thickly, so clearance and gutter work come round regularly. Weoley Hill, on the other side of the Bristol Road, is 1920s and 30s Trust housing of a similar quality, and Cotteridge and Stirchley next door are the ordinary Victorian and Edwardian terraces of the rest of south Birmingham.',
    faqs: [
      ['Does the Bournville Village Trust affect what you can do?', 'Yes. The Trust expects like for like on the village houses, which suits how we work: matching the clay tile, keeping the details and renewing lead in lead. We tell you if something you have in mind would need their say so.'],
      ['Can you match the plain clay tiles on my house?', 'Yes. Plain clay tiles are still made and reclaimed ones are available for the weathered look, so a repair does not have to show.'],
    ],
  },
  {
    slug: 'roofers-in-kings-heath', name: 'Kings Heath', band: 'South Birmingham',
    nearby: ['Moseley', 'Stirchley', 'Brandwood', 'Billesley', 'Yardley Wood'],
    inShort: 'We cover Kings Heath and Brandwood, Billesley and Yardley Wood beyond it. Victorian and Edwardian terraces off the High Street, and interwar council semis further out.',
    local: 'Kings Heath is a Victorian and Edwardian suburb built along the High Street tram route, and the grid of streets either side of it is terraced housing of that period, mostly under slate with the occasional clay tile, with back extensions, bay window roofs and a chimney stack per house. Those roofs are now well over a hundred years old, so slipped slates from rusted nails, failed lead on the bays and the chimneys, and rotten timber roofline are the regular jobs, and a full re-slate or re-tile where the whole slope has gone. Beyond the Victorian core, Brandwood and Billesley are large interwar council estates under concrete tile, hipped and shared stacks throughout, reaching the same end of life as their equivalents at Northfield. Yardley Wood adds more of the same and some post-war housing. It is a busy, densely built area where scaffold access on terraces needs planning, and we do.',
    faqs: [
      ['Can you get scaffold up on a terraced street?', 'Yes. Terraces in Kings Heath often need the scaffold in the front garden or on the pavement with a licence, and we sort that as part of the job.'],
      ['My bay window roof is leaking. Is that a roofing job?', 'Yes. Bay roofs are usually lead or a small tiled or slated slope, and the lead is nearly always what has failed. It is a common Kings Heath repair.'],
    ],
  },
  {
    slug: 'roofers-in-moseley', name: 'Moseley', band: 'South Birmingham',
    nearby: ['Kings Heath', 'Balsall Heath', 'Sparkhill', 'Hall Green', 'Wake Green'],
    inShort: 'We cover Moseley and Wake Green. Large Victorian and Edwardian houses, many converted into flats, with steep slate roofs, valleys, dormers and tall chimney stacks that need real leadwork.',
    local: 'Moseley is one of the grand Victorian suburbs of Birmingham, and its housing is big: three storey villas and semis on the roads off the Alcester Road and around Moseley Park, with steep slate roofs, dormers, long valleys, ornate ridge tiles and tall chimney stacks with several flues. Many are now flats, which brings freeholders and management companies as well as owners. Roofs this size and age fail in the detail: valleys, the lead round dormers and stacks, and the slates slipping as the nails rust, and because of the height nearly everything needs scaffold and needs doing right first time. Parts of Moseley are a conservation area, so slate is replaced with slate and the ridges and finials are kept. Wake Green and the streets towards Hall Green are later and more modest, interwar semis under clay and concrete tile, and Balsall Heath on the city side is Victorian terracing under slate.',
    faqs: [
      ['Our house is divided into flats. Who do you deal with?', 'Whoever holds the freehold or manages the building, usually a management company or the lead leaseholder. We give a written report with photographs so it can go round the owners.'],
      ['Is Moseley a conservation area?', 'Parts of it are. In those streets slate is replaced with slate and the ridges and details are kept, and we work that way anyway.'],
    ],
  },
  {
    slug: 'roofers-in-hall-green', name: 'Hall Green', band: 'South Birmingham',
    nearby: ['Yardley Wood', 'Springfield', 'Sarehole', 'Shirley', 'Acocks Green'],
    inShort: 'We cover Hall Green, Sarehole and the edge of Shirley. Almost entirely 1930s semis under clay and concrete tile, which means hips, ridges, roofline and chimneys all reaching their age together.',
    local: 'Hall Green is one of the most uniform areas of housing in south Birmingham: street after street of 1930s semis and short terraces, built as the city expanded out along the Stratford Road, with hipped roofs, bay windows, a shared chimney stack per pair and the original timber fascias and soffits. Clay tile on the earlier houses, concrete on the later ones, and both are now ninety years old. The jobs follow directly from that: hips and ridges re-bedded or dry fixed, bay roofs re-leaded, chimneys pointed and capped where the fires are gone, roofline replaced in UPVC after the third or fourth coat of paint has failed, and full re-roofs where the felt has perished. The area is well treed and low lying by the Cole around Sarehole, so gutters and moss come round regularly. Springfield and Sparkhill on the city side are earlier and terraced, Shirley over the Solihull line is similar interwar stock.',
    faqs: [
      ['Every house on my road is the same. Do you know the roof?', 'Yes. The 1930s semi with a hipped roof, a bay and a shared stack is the commonest house in Hall Green and we know exactly where those roofs fail.'],
      ['Do you cover Shirley?', 'The Hall Green side of it, yes. It is the same housing and the same work.'],
    ],
  },
  {
    slug: 'roofers-in-harborne', name: 'Harborne', band: 'South Birmingham',
    nearby: ['Edgbaston', 'Quinton', 'Bearwood', 'Selly Oak', 'Weoley Castle'],
    inShort: 'We cover Harborne, Quinton and the edge of Edgbaston. Victorian terraces around the High Street, big Edwardian houses on the leafier roads, and interwar semis out towards Quinton.',
    local: 'Harborne kept its village high street and grew a mixture of housing around it. Off the High Street and towards the old Harborne railway walk there are streets of Victorian and Edwardian terraces under slate, with the bays, back additions and chimney stacks that go with them. On the quieter roads towards Edgbaston and the golf course the houses are larger Edwardian and interwar homes with more complicated roofs, valleys and plenty of leadwork, and some of the area is conservation protected so slate stays slate. Out towards Quinton and Ridgacre the housing becomes 1930s semis under concrete tile, the same hipped roofs and shared stacks as Hall Green and Northfield. It is a well treed, fairly affluent part of the city where people expect a tidy job and a proper report, and where scaffold on a terrace needs thought about the pavement and the neighbours.',
    faqs: [
      ['Is my street in a conservation area?', 'Parts of Harborne are. If yours is, slate is replaced with slate and the roof line is kept as it was, which is how we work anyway. We will say if a change you have in mind would need permission.'],
      ['Do you work in Quinton?', 'Yes. The interwar semis there are a big part of what we do on this side of the city.'],
    ],
  },
  {
    slug: 'roofers-in-stirchley', name: 'Stirchley', band: 'South Birmingham',
    nearby: ['Cotteridge', 'Bournville', 'Kings Heath', 'Selly Park', 'Ten Acres'],
    inShort: 'We cover Stirchley and Ten Acres. Victorian and Edwardian terraces off the Pershore Road, most of them with back extensions, bay roofs and a chimney each, now being renovated street by street.',
    local: 'Stirchley is a Victorian and Edwardian district along the Pershore Road and the canal, terraced housing built for the works at Bournville and Ten Acres, and it has become one of the busiest parts of south Birmingham for people buying a first house and doing it up. The roofs are mostly slate, over a century old, with the usual pattern of failure: slates slipping as the nails rust, lead on the bays and back additions gone, chimney stacks that have never been pointed, and flat roofs on the rear extensions patched more than once. A lot of what we do here is for owners renovating, where the roof is done properly once as part of the wider job, and for landlords keeping older lets watertight. The terraces are tight to the pavement, so scaffold needs planning, and the loft conversions going in across the area mean more dormers and more lead.',
    faqs: [
      ['I am renovating a terrace in Stirchley. When should the roof be done?', 'Early, before the plastering. A roof that is going to be re-covered or a dormer that is going in should be done before the inside is finished, and we will fit round the rest of the work.'],
      ['Can you sort the flat roof on my back extension?', 'Yes. Those Victorian back additions have usually been felted several times over; EPDM rubber laid on a sound new deck is the lasting answer.'],
    ],
  },
  {
    slug: 'roofers-in-cotteridge', name: 'Cotteridge', band: 'South Birmingham',
    nearby: ['Kings Norton', 'Bournville', 'Stirchley', 'Kings Heath', 'Brandwood'],
    inShort: 'We cover Cotteridge, between Bournville and Kings Norton. Edwardian terraces and semis along the Pershore Road with interwar housing behind, and the trees of Bournville next door.',
    local: 'Cotteridge grew up around the Pershore Road and the tram in the Edwardian years, and the streets off it are terraces and semis of that period, slate and clay tile, with bays, back additions and a chimney stack apiece. Behind them, towards Kings Norton and Brandwood, the housing runs into 1920s and 30s semis under concrete tile with hipped roofs, and there is a good deal of interwar shopping parade along the Pershore Road itself with flat roofs and parapets that leak into the flats above the shops. The Edwardian roofs are at the slipped slate and failed lead stage; the interwar ones need ridges, roofline and chimneys; and the parades need proper flat roofing rather than another coat of something. It is well treed on the Bournville side, so moss and blocked gutters are regular, and it is a compact area where we are often on two or three jobs in the same few streets.',
    faqs: [
      ['I own a flat above a shop on the Pershore Road. Can you look at the roof?', 'Yes. The interwar parades have flat roofs and parapets that leak into the flats above, and a proper EPDM or fibreglass roof with the parapet detail done right is usually the fix.'],
      ['Do you cover both Cotteridge and Kings Norton?', 'Yes. They run into each other and we are often working in both on the same day.'],
    ],
  },
];
