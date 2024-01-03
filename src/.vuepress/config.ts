import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
    // Google Tag Manager
    [
      "script", {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T5DV934H');`
    ],
    // End Google Tag Manager
    // Google Tag Manager (noscript)
    [
      "script", {},
      `(function() {
        var noscriptIframe = document.createElement('noscript');
        var iframe = document.createElement('iframe');
        iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-T5DV934H";
        iframe.height = '0';
        iframe.width = '0';
        iframe.style.display = 'none';
        iframe.style.visibility = 'hidden';
        noscriptIframe.appendChild(iframe);
        setTimeout(() => document.body.prepend(noscriptIframe));
      })();`
    ]
    // End Google Tag Manager (noscript)
  ],
  
  locales: {
    "/": {
      lang: "uk-UA",
      title: "Тайтл",
      description: "Опис",
    },
    "/en/": {
      lang: "en-US",
      title: "Англ. тайтл",
      description: "Англ. опис",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
