export default {
  namespaced: true,
  state: {
    op: { id: "skill", title: "前端技能" },
    knowledgeOp: [
      {
        title: "静态页面",
        introduce: "熟练使用css+html快速构建页面，对Web标准和兼容性有良好认识",
        content: [
          { skill: "css", ico: "css", score: 95 },
          { skill: "css3", ico: "css3", score: 95 },
          { skill: "less", ico: "less", score: 90 },
          { skill: "sass", ico: "sass", score: 90 },
          { skill: "stylus", ico: "stylus", score: 90 },
          { skill: "html", ico: "html", score: 95 },
          { skill: "html5", ico: "html5", score: 95 },
          { skill: "bootStrap", ico: "bootstrap", score: 80 },
          { skill: "elementUI", ico: "element-ui", score: 80 },
          { skill: "antDesign", ico: "antdesign", score: 80 },
        ],
      },
      {
        title: "jascript",
        introduce:
          "对原生js有深刻的认识，对设计模式、性能优化、监控、安全、可视化有一定的理解和项目实践",
        content: [
          {
            skill: "原生js",
            ico: "javascript",
            score: 90,
            link: "https://github.com/zhoubichuan/web-javascript",
          },
          { skill: "ES6", ico: "es6", score: 90 },
          { skill: "jQuery", ico: "jquery", score: 90 },
          {
            skill: "ajax",
            ico: "ajax",
            score: 90,
            link: "https://github.com/zhoubichuan/web-Ajax",
          },
          { skill: "正则", ico: "regexp", score: 80 },
          { skill: "设计模式", ico: "design-mode", score: 70 },
          { skill: "TypeScript", ico: "typescript", score: 70 },
          {
            skill: "算法",
            ico: "calculate",
            score: 60,
            link: "https://github.com/zhoubichuan/web-arithmetic",
          },
          { skill: "单元测试", ico: "test", score: 70 },
        ],
      },
      {
        title: "框架",
        introduce: "熟练使用常见的框架及相关插件",
        content: [
          { skill: "Vue", ico: "vue", score: 90 },
          { skill: "React", ico: "react", score: 80 },
          { skill: "Dva", ico: "dva", score: 80 },
          { skill: "Angular", ico: "angular", score: 60 },
          { skill: "Ionic", ico: "ionic", score: 60 },
          { skill: "微信小程序", ico: "css", score: 70 },
          { skill: "微信公众号", ico: "css", score: 70 },
        ],
      },
      {
        title: "构建工具：",
        introduce:
          "能够熟练使用webpack搭建项目，提高开发效率，对应特殊的功能能够编写简单的插件",
        content: [
          { skill: "Rollup", ico: "rollup", score: 50 },
          { skill: "Webpack", ico: "webpack", score: 70 },
        ],
      },
      {
        title: "node",
        introduce:
          "能够熟练使用webpack搭建项目，提高开发效率，对应特殊的功能能够编写简单的插件",
        content: [
          { skill: "tcp/ip协议", ico: "tcp-ip", score: 70 },
          { skill: "安全防范", ico: "safe", score: 80 },
          { skill: "服务端渲染", ico: "ssr", score: 80 },
        ],
      },
      {
        title: "node框架",
        introduce: "能够熟练使用node框架，擅长使用常见的功能如：ssr",
        content: [
          {
            skill: "Express",
            ico: "express",
            score: 70,
            link: "https://github.com/zhoubichuan/web-express",
          },
          {
            skill: "Koa",
            ico: "koa",
            score: 70,
            link: "https://github.com/zhoubichuan/web-koa",
          },
          {
            skill: "Egg",
            ico: "egg",
            score: 70,
            link: "https://github.com/zhoubichuan/web-egg",
          },
        ],
      },
      {
        title: "数据库",
        introduce: "能够熟练使用常见的数据库，",
        content: [
          {
            skill: "mySql",
            ico: "mysql",
            score: 60,
            link: "https://github.com/zhoubichuan/web-mysql",
          },
          {
            skill: "mongoDB",
            ico: "mongo-db",
            score: 70,
            link: "https://github.com/zhoubichuan/web-mongodb",
          },
          {
            skill: "Redis",
            ico: "redis",
            score: 80,
            link: "https://github.com/zhoubichuan/web-redis",
          },
        ],
      },
    ],
  },
};
