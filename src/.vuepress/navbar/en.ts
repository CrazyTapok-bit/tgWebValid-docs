import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Documentation",
    icon: "book",
    link: "/en/docs/README.md",
    activeMatch: "^/en/docs/$"
  },
  "/en/docs/example",
]);
