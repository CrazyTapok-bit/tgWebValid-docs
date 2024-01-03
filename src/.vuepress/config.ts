import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  head: [
    // Google tag (gtag.js)
    [
      "script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-Y1B2126VXX" }
    ],
    [
      "script", {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-Y1B2126VXX');`
    ],
    // End Google tag (gtag.js)
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
