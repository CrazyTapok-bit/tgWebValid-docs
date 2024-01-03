const head = []

const PRODUCTION = process.env.PRODUCTION
const GTAG = process.env.GTAG

const IS_GTAG = PRODUCTION && GTAG

// Google tag (gtag.js)
if (IS_GTAG) head.push([
  "script", { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${GTAG}` }
], [
  "script", {},
  `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GTAG}');`
])
// End Google tag (gtag.js)

export default head
