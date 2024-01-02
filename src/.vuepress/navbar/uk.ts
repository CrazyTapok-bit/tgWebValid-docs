import { navbar } from "vuepress-theme-hope";

export const ukNavbar = navbar([
  "/",
  {
    text: "Документація",
    icon: "book",
    link: "/docs/README.md",
    activeMatch: "^/docs/$"
  },
  "/docs/example",
]);
