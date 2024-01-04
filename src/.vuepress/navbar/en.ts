import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Documentation",
    icon: "book",
    link: "/docs/README.md",
    activeMatch: "^/docs/$"
  },
  "/docs/example",
]);
