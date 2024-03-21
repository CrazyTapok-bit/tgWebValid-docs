import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, ukNavbar } from "./navbar/index.js";
import { ukSidebar, enSidebar } from "./sidebar/index.js";

const DOCSEARCH_APPID = process.env.DOCSEARCH_APPID || ""
const DOCSEARCH_APIKEY = process.env.DOCSEARCH_APIKEY || ""
const DOCSEARCH_INDEX = process.env.DOCSEARCH_INDEX || ""

const repo = "CrazyTapok-bit/tgWebValid"

export default hopeTheme({
  hostname: "https://tgwebvalid.com/",

  author: {
    name: "Mr. Anonymous",
    url: "https://github.com/CrazyTapok-bit"
  },

  iconAssets: "fontawesome-with-brands",

  logo: "./logo.svg",

  repo,

  docsRepo: "CrazyTapok-bit/tgWebValid-docs",

  docsBranch: "master",
  
  docsDir: "src",

  navTitle: false,

  footer: "💙💛 Made in Ukraine | MIT Licensed",

  locales: {
    "/": {
      navbar: ukNavbar,
      sidebar: ukSidebar,
      displayFooter: true
    },
    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      displayFooter: true
    },
  },

  plugins: {
    // You should generate and use your own comment service
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },

    sitemap: true,

    seo: true,

    docsearch: {
      appId: DOCSEARCH_APPID,
      apiKey: DOCSEARCH_APIKEY,
      indexName: DOCSEARCH_INDEX
    },

    components: {
      rootComponents: {
        notice: [
          {
            path: "/",
            title: "Кажуть ми круті 😎",
            content: `⭐️ Підтримайте нас, поставте нам зірку на <a target="_blank" rel="noopener noreferrer" href="https://github.com/${repo}">GitHub</a> та станьте нашим спонсором 😊`,
            actions: [
              {
                text: "Спонсорувати 💰",
                link: "https://www.patreon.com/user?u=99188087"
              }
            ]
          },
          {
            path: "/en/",
            title: "They say we are cool 😎",
            content: `⭐️ Support us, star us on <a target="_blank" rel="noopener noreferrer" href="https://github.com/${repo}">GitHub</a> and become our sponsor 😊`,
            actions: [
              {
                text: "Sponsor 💰",
                link: "https://www.patreon.com/user?u=99188087"
              }
            ]
          }
        ]
      }
    },
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      attrs: true,
      component: true,
      imgLazyload: true,
      imgSize: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,
    }
    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
