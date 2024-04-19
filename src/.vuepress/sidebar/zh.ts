import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "文档",
      icon: "laptop-code",
      prefix: "zh/docs/",
      children: "structure",
    },
  ],
  "/zh/docs/": "structure",
});
