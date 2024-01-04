import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "Documentation",
      icon: "laptop-code",
      prefix: "docs/",
      children: "structure",
    },
  ],
  "/en/docs/": "structure",
});
