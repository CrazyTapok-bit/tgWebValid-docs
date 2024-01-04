import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import head from "./head.js";

export default defineUserConfig({
  base: "/",

  head,
  
  locales: {
    "/": {
      lang: "uk-UA",
      title: "PHP бібліотека для перевірки користувачів Telegram"
    },
    "/en/": {
      lang: "en-US",
      title: "The PHP library for validate Telegram users"
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
