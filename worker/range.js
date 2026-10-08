/* Byte-range support for video, and nothing else.
 *
 * WHY THIS EXISTS
 *   Workers Static Assets ignores the Range header: a request for bytes=0-1 gets the
 *   whole file back with 200 and no Accept-Ranges. Verified on Fairmont 2026-09-16; copied to Expert Roofing 2026-10-07 and to Roofers R Us 2026-10-08.
 *   iOS requires byte-range support to play video - AVFoundation's first request is
 *   exactly bytes=0-1 - so without this the homepage hero loop and the chimney before and after clip
 *   are at risk of not playing on an iPhone at all.
 *
 * SCOPE
 *   wrangler.jsonc routes ONLY /assets/*.mp4 through this Worker (run_worker_first).
 *   Every HTML page, image and stylesheet is still served straight from assets, so
 *   _headers keeps applying to them. _headers does NOT apply to responses built here,
 *   which is why the one header that matters for a media file is set explicitly.
 */
export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);

    const headers = new Headers(res.headers);
    headers.set('X-Content-Type-Options', 'nosniff');

    /* Anything that is not a plain successful fetch passes straight through. */
    if (res.status !== 200) {
      return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
    }
    headers.set('Accept-Ranges', 'bytes');

    const range = request.headers.get('Range');
    if (!range || request.method === 'HEAD') {
      return new Response(res.body, { status: 200, headers });
    }

    const buf = await res.arrayBuffer();
    const size = buf.byteLength;
    const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim());

    /* Multi-range or malformed: serving the whole file is always a valid answer. */
    if (!m || (m[1] === '' && m[2] === '')) {
      return new Response(buf, { status: 200, headers });
    }

    let start, end;
    if (m[1] === '') {                       // suffix range: the last N bytes
      const n = Math.min(Number(m[2]), size);
      start = size - n;
      end = size - 1;
    } else {
      start = Number(m[1]);
      end = m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1);
    }

    if (start >= size || start > end) {
      headers.set('Content-Range', `bytes */${size}`);
      headers.delete('Content-Length');
      return new Response(null, { status: 416, headers });
    }

    headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
    headers.set('Content-Length', String(end - start + 1));
    return new Response(buf.slice(start, end + 1), { status: 206, headers });
  },
};
