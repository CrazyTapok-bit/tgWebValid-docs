const head = []

const PRODUCTION = process.env.PRODUCTION
const GTAG = process.env.GTAG
const ADSENSE = process.env.ADSENSE

const IS_GTAG = PRODUCTION && GTAG
const IS_ADSENSE = PRODUCTION && ADSENSE

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

export default head
