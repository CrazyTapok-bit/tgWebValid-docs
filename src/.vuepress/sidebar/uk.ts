import { sidebar } from "vuepress-theme-hope";

export const ukSidebar = sidebar({
  "/": [
    {
      text: "Документація",
      icon: "laptop-code",
      prefix: "docs/",
      children: "structure",
    },
  ],
  "/docs/": "structure",
});
