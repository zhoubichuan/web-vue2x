export default {
  namespaced: true,
  state: {
    content: [],
    op: {
      id: "about",
      title: "关于我",
    },
    cardOp: [
      {
        title: "个人信息",
        content: ['一名活跃的前端爱好者', "经常逛github、掘金等前端活跃的平台", "有对开源社区做过一些贡献", "擅长vue和react技术"],
      },
      {
        title: "工作经验",
        content: ["有ui框架的开发经验", "有数据可视化项目开发经验", "有vue2、vue3项目开发经验，有react项目开发经验", "有全栈项目开发经验（node）"],
      },
      {
        title: "工作意向",
        content: ["高级前端开发、node开发工程师"],
      },
    ],
  },
};
