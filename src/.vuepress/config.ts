import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import head from "./head.js";

export default defineUserConfig({
  base: "/",

  head,
  
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
