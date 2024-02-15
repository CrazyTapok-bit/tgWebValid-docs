import { navbar } from "vuepress-theme-hope";

export const ukNavbar = navbar([
  "/",
  {
    text: "Документація",
    icon: "book",
    link: "/docs/README.md",
    activeMatch: "^/docs/$"
  },
  {
    text: "Повний приклад",
    icon: "bolt",
    link: "/docs/example/README.md"
  }
]);
