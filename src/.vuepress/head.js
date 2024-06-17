const head = []

const PRODUCTION = true ?? process.env.PRODUCTION
const GTAG = process.env.GTAG
const ADSENSE = process.env.ADSENSE
const MONETAG = "6f9bca78ef751283975bfdda408ebda7"
const MONETAG_ZONE = 73276

const IS_GTAG = PRODUCTION && GTAG
const IS_ADSENSE = PRODUCTION && ADSENSE
const IS_MONETAG = PRODUCTION && MONETAG

// Google tag (gtag.js)
if (IS_GTAG) head.push([
  "script", {
    async: true,
    src: `https://www.googletagmanager.com/gtag/js?id=${GTAG}`
  }
], [
  "script", {},
  `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GTAG}');`
])
// End Google tag (gtag.js)

// Google AdSense
if (IS_ADSENSE) head.push([
  "script", {
    async: true,
    src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE}`,
    crossorigin: "anonymous"
  }
])
// End  Google AdSense

// Monetag
if (IS_MONETAG) head.push([
  "meta", {
    name: "monetag",
    content: MONETAG
  }
])

if (IS_MONETAG_ZONE) head.push([
  "script", {
    src: "https://alwingulla.com/88/tag.min.js",
    "data-zone": MONETAG_ZONE,
    "data-cfasync": "false",
    async: true
  }
])
// End Monetag

export default head
