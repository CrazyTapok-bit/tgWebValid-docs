import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Documentation",
    icon: "book",
    link: "/en/docs/README.md",
    activeMatch: "^/en/docs/$"
  },
  {
    text: "Full example",
    icon: "bolt",
    link: "/en/docs/example/README.md"
  }
]);
