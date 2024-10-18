const path = require("path");
const httpRequest = require("./public/mock/http.js");
const Webpack = require("webpack");
const bodyParser = require("body-parser");

module.exports = {
  title: "Vue2.x学习笔记",
  description: "风浪没平息 我宣告奔跑的意义",
  base: "/web-vue2x/", // 部署站点的基础路径
  port: 3009,
  head: [
    ['link', { rel: 'icon', href: '/home.svg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ["script", { src: "/dll/vendor.dll.js" }],
    [
      "script",
      {
        src: "https://webapi.amap.com/maps?v=2.0&key=46c9ed4e2d25a0e0ee7c883fd5b1a0c8",
      },
    ],
    [
      "script",
      {
        src: "https://webapi.amap.com/ui/1.1/main.js?v=1.1.1",
      },
    ],
  ],
  define: {
    env: {
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  beforeDevServer(app, server, compiler) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    httpRequest(app);
  },
  alias: {
    mock: path.resolve(__dirname, "../../mock/"),
    "@": path.resolve(__dirname, "../../src/"),
  },
  postcss: {
    plugins: [require("autoprefixer")],
  },
  stylus: { preferPathResolver: "webpack" },
  less: {},
  scss: {
    data: `
    @import "~@/assets/style/var.scss";
    @import "~@/assets/style/variables.scss";
    @import "~@/assets/style/reset.scss";
    @import "~@/assets/style/mixins.scss";
    `,
  },
  sass: { indentedSyntax: true },
  dest: "web-vue2x", // 指定 vuepress 的输出目录
  markdown: {
    toc: { includeLevel: [2, 3] },
    lineNumbers: true, // 代码块显示行号
  },
  plugins: [
    // 设置环境变量
    new Webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "'production'",
        BASE_API: "'/'",
      },
    }),
    new Webpack.DllReferencePlugin({
      manifest: require(path.resolve(
        __dirname,
        "public/dll/vendor-manifest.json"
      )),
      name: "[name]_[hash]",
      context: process.cwd(),
    }),
    [require("./demo-preview")],
    [
      "vuepress-plugin-anchor-toc",
      {
        showDepth: 1,
        customClass: "your-customClass",
        ignore: ["/", "/api/"],
      },
    ],
    ['fulltext-search'],
    // 只要把这个放进 config的plugins中就可以了
    [
      "sakura",
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: "...", // 绝对路径
        },
      },
    ],
    [
      // 名称：@vuepress/plugin-pwa 网页内容有更新的时候有刷新按钮。可以把网页保存到桌面，当一个app一样
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "有新的内容更新",
          buttonText: "刷新",
        },
      },
    ],
    [
      "copyright",
      {
        authorName: "zhoubichuan@icloud.com", // 选中的文字将无法被复制
        minLength: 30, // 如果长度超过  30 个字符
      },
    ],
    // [
    //   "vuepress-plugin-nuggets-style-copy",
    //   {
    //     copyText: "复制代码",
    //     tip: {
    //       content: "复制成功",
    //     },
    //   },
    // ],
    ["@vuepress/back-to-top"],
    ["@vuepress/medium-zoom"],
    ["@vuepress/nprogress"],
    [
      // 名称：@vuepress/plugin-active-header-links 效果：页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录。
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      },
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: "github", //v3的platform是github，v4的是github-v4
        locale: "zh", //语言
        // 其他的 Vssue 配置
        owner: "zhoubichuan", //github账户名
        repo: "web-vue2x", //github一个项目的名称
        clientId: "Iv1.2923ba5d4de48a3c", //注册的Client ID
        clientSecret: "110210", //注册的Client Secret
        autoCreateIssue: true, // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了
      },
    ],
    ["vuepress-plugin-boxx"],
  ],
  // 主题配置
  themeConfig: {
    repo: "https://gitee.com/zhoubichuan/web-vue2x", // 源码地址
    repoLabel: "查看源码", // (查看源码的)组件名称
    docsBranch: "master", // git 源仓库 仓库分支
    editLinks: true, // 编辑链接
    docsDir: "src", // 假如文档不是放在仓库的根目录下
    editLinkText: "在gitee上编辑此页",
    sidebarDepth: 2,
    lastUpdated: "上次更新", // 获取每个文件最后一次 git 提交的时间戳
    nav: require("./nav.js"),
    sidebar: require("./sidebar.js"),
    searchMaxSuggestoins: 10,
  },
};
