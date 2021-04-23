module.exports = {
  // 基础配置
  base: '/Web-Vue/', // 部署站点的基础路径
  description: 'vue相关知识点',
  plugins: {
    // 名称：@vuepress/plugin-pwa 网页内容有更新的时候有刷新按钮。可以把网页保存到桌面，当一个app一样
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "有新的内容更新",
        buttonText: "刷新"
      }
    },
    // 名称：@vuepress/plugin-back-to-top 效果：文章看到下面的时候，点击一个图标会回到顶部
    '@vuepress/back-to-top': true,
    // 名称：@vuepress/plugin-active-header-links 效果：页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录。
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    "@vssue/vuepress-plugin-vssue": {
      platform: 'github', //v3的platform是github，v4的是github-v4
      locale: 'zh', //语言
      // 其他的 Vssue 配置
      owner: 'zhoubichuan', //github账户名
      repo: 'Web-Vue', //github一个项目的名称
      clientId: 'Iv1.2923ba5d4de48a3c',//注册的Client ID
      clientSecret: '110210',//注册的Client Secret
      autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
    "vuepress-plugin-boxx": ["vuepress-plugin-boxx"]
  },
  locales: {
    // 默认标题
    '/': {
      title: 'Vue知识专项',
      description: 'Vue相关知识点总结'
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: ''
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  port: 3009,
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: false, // pwa

  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinks: true, // 启用编辑
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
          text: '基础知识',
          items: [{
            text: '1.前端工程化',
            link: '/base/build/1.start'
          },
          {
            text: '2.项目功能点',
            link: '/base/function/1.configureVscode',
          }]
        },
        {
          text: '高级知识',
          items: [{
            text: '1.组件开发',
            link: '/senior/componentElaboration/1.recursionAndDynamics'
          },
          {
            text: '2.TypeScript',
            link: '/senior/typeScript/1.base'
          },
          {
            text: '3.前端工作流',
            link: '/senior/npm/1.base'
          }]
        },
        {
          text: '源码知识',
          items: [{
            text: 'Vue 2',
            link: '/source/vue/1.overview'
          },
          {
            text: 'Vue Router',
            link: '/source/vue-router/1.base'
          },
          {
            text: 'Vuex',
            link: '/source/vuex/1.base'
          }]
        }
        ],
        sidebar: {
          '/base/build/': [
            '1.start',
            '2.webpack',
            '3.file',
            '4.single',
            '5.page',
            '6.module',
            '7.devide',
            '8.project',
            '9.utils',
            '10.ui',
            '11.data',
            '12.skill',
            '13.com',
            '14.data',
            '15.api'],
          '/base/function/': [
            '1.configureVscode',
            '2.developmentSkills',
            '3.configureWebpack',
            '4.projectMonitor',
            '5.unitTesting',
            '6.configurePrem',
            '7.internationalization',
            '8.errorCollection',
            '9.optimize'
          ],
          '/senior/componentElaboration/': [
            '1.recursionAndDynamics', //递归组件与动态组件
            '2.vueConstructor', //Vue 的构造器--extend
            '3.componentCommunication', //Vue 组件的通信
            '4.render',
            '5.api',
            '6.form',
            '7.checkBox',
            '8.dispaly',
            '9.alert',
            '10.renderTable',
            '11.slotScopeTable',
            '12.treeControl'
          ],
          '/senior/npm/': ['1.base'],
          '/senior/typeScript/': ['1.base'],
          '/source/vue/': [
            '1.overview',
            '2.initGlobalAPI',
            '3.initMixin',
            '4.stateMixin',
            '5.eventsMixin',
            '6.lifecycleMixin',
            '7.renderMixin',
            '8.mount',
            '9.ast',
            '10.optimize',
            '11.gencode',
            '12.mount',
            '13._render',
            '14._update'
          ],
          '/source/vue-router/': ['1.base'],
          '/source/vuex/': ['1.base']
        }
      }
    }
  },
}