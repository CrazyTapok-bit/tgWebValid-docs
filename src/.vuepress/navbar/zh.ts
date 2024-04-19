import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "文档",
    icon: "book",
    link: "/zh/docs/README.md",
    activeMatch: "^/zh/docs/$"
  },
  {
    text: "完整示例",
    icon: "bolt",
    link: "/zh/docs/example/README.md"
  }
]);
