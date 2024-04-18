export default {
  namespaced: true,
  state: {
    op: {
      id: "note",
      title: "我的笔记",
    },
    currentDate: new Date(),
    workOp: [
      {
        name: "javaScript相关",
        items: [
          {
            title: "我的博客",
            skill: "javaScript+css",
            img: "zhoubichuan.github.io",
            link: "https://github.com/zhoubichuan/zhoubichuan.github.io",
          },
          {
            title: "javascript笔记",
            skill: "javaScript+css",
            img: "web-javaScript",
            link: "/web-javascript/",
          },
        ],
      },
      {
        name: "Vue相关",
        items: [
          {
            title: "web-vue2x",
            skill: "Vuepress",
            img: "web-vue2x",
            link: "/web-vue2x/",
          },
        ],
      },
      {
        name: "React相关",
        items: [
          {
            title: "web-react",
            skill: "Vuepress",
            img: "web-react",
            link: "/web-react/",
          },
        ],
      },
      {
        name: "Node相关",
        items: [
          {
            title: "web-note",
            skill: "Vuepress",
            img: "web-note",
            link: "/web-node/",
          },
        ],
      },
      {
        name: "Express相关",
        items: [
          {
            title: "web-express",
            skill: "Vuepress",
            img: "web-express",
            link: "/web-express/",
          },
        ],
      },
      {
        name: "Koa相关",
        items: [
          {
            title: "web-koa",
            skill: "Vuepress",
            img: "web-koa",
            link: "/web-koa/",
          },
        ],
      },
      {
        name: "Egg相关",
        items: [
          {
            title: "web-egg",
            skill: "Vuepress",
            img: "web-egg",
            link: "/web-egg/",
          },
        ],
      },
      {
        name: "Webpack相关",
        items: [
          {
            title: "web-webpack",
            skill: "Vuepress",
            img: "web-webpack",
            link: "/web-webpack/",
          },
        ],
      },
    ],
  },
};
