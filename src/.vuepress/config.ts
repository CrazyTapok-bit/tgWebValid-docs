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
    "/zh/": {
      lang: "zh-CN",
      title: "用于验证 Telegram 用户的 PHP 库"
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
