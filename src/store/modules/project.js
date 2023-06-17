export default {
  namespaced: true,
  state: {
    op: {
      id: "project",
      title: "开源项目",
    },
    currentDate: new Date(),
    workOp: [
      {
        name: "javaScript",
        items: [
          {
            title: "企业网站",
            skill: "javaScript+css",
            img: "website",
            link:"/website/",
          },
          {
            title: "后台管理系统",
            skill: "jQuery+BootStrapt",
            img: "managment",
            link:"/managment/",
          },
          {
            title: "flybird游戏",
            skill: "canvas+css",
            img: "fly-bird",
            link:"/flybird/",
          },
          {
            title: "微信跳一跳游戏",
            skill: "webGL(three.js)+css",
            img: "jump",
            link: "/jump/",
          },
          {
            title: "微信小程序",
            skill: "---",
            link: "wwww.123.com",
          },
          {
            title: "微信公众号",
            skill: "---",
            link: "wwww.123.com",
          },
        ],
      },
      {
        name: "Vue",
        items: [
          {
            title: "微信",
            skill: "Vue+less",
            img: "Project-Vue-weChat",
            link: "/Project-Vue-weChat/",
          },
          {
            title: "饿了么",
            img: "elesell",
            skill: "Vue+less",
            link: "/elesell",
          },
          {
            title: "点餐系统",
            img: "order",
            skill: "Vue+less",
            link: "/order/",
          },
        ],
      },
      {
        name: "React",
        items: [
          {
            title: "zhufengCourseApp",
            img: "classroom",
            skill: "React+TS+less",
            link: "/classroom/",
          },
          {
            title: "weChatApp",
            img: "Project-React-weChat",
            skill: "React+less",
            link: "http://zhoubichuan.github.io/Project-React-weChat",
          },
        ],
      },
      {
        name: "Angular",
        items: [
          {
            title: "珠峰课堂",
            link: "/Project-React.TS-app/",
          },
        ],
      },
      {
        name: "node.js",
        items: [
          {
            title: "CMS系统",
            skill: "Egg.js+AntDesignPro+MySQL",
            link: "wwww.123.com",
          },
        ],
      },
      {
        name: "express",
        items: [
          {
            title: "CMS系统",
            skill: "Egg.js+AntDesignPro+MySQL",
            link: "wwww.123.com",
          },
        ],
      },
      {
        name: "koa",
        items: [
          {
            title: "CMS系统",
            skill: "Egg.js+AntDesignPro+MySQL",
            link: "wwww.123.com",
          },
        ],
      },
      {
        name: "全栈项目",
        items: [
          {
            title: "CMS系统",
            skill: "Egg.js+AntDesignPro+MySQL",
            link: "wwww.123.com",
          },
          {
            title: "多人聊天室",
            skill: "React+Mongodb+websocket",
            link: "wwww.123.com",
          },
          {
            title: "新闻爬虫",
            skill: "cheerio+mysql+nodemailer",
            link: "wwww.123.com",
          },
          {
            title: "珠峰课堂",
            skill: "React+Redux",
            link: "wwww.123.com",
          },
        ],
      },
    ],
  },
};
