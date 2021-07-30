module.exports = {
  // 基础配置
  base: '/Web-Vue', // 部署站点的基础路径
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
      clientId: 'Iv1.2923ba5d4de48a3c', //注册的Client ID
      clientSecret: '110210', //注册的Client Secret
      autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
    "vuepress-plugin-boxx": ["vuepress-plugin-boxx"]
  },
  locales: {
    // 默认标题
    '/': {
      title: 'Vue知识专项',
      description: '不积硅步，无以至千里'
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
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  port: 3009,
  dest: 'dist', // 指定 vuepress 的输出目录
  serviceWorker: true, // pwa

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
                text: '一.Vue的工程化',
                link: '/base/engine/1.start'
              },
              {
                text: '二.Vue功能模块',
                link: '/base/project/1.configure',
              }
            ]
          },
          {
            text: '高级知识',
            items: [{
                text: '一.Vue组件开发',
                link: '/senior/component/1.recursion'
              },
              {
                text: '二.TypeScript',
                link: '/senior/typeScript/1.base'
              },
              {
                text: '三.npm专题',
                link: '/senior/npm/1'
              },
              {
                text: '四.Vue3.0',
                link: '/senior/vue3/1.index'
              }
            ]
          },
          {
            text: 'Vue2.0源码',
            items: [{
                text: '一.Vue/cli',
                link: '/source/vue-cli/inde'
              }, {
                text: '二.Vue2.0',
                link: '/source/vue2/inde'
              },
              {
                text: '三.Vue Router',
                link: '/source/vue-router/1.base'
              },
              {
                text: '四.Vuex',
                link: '/source/vuex/1.base'
              }
            ]
          },
          {
            text: 'Vue3.0源码',
            items: [{
                text: '一.Vue3.0',
                link: '/source/vue3/1.index'
              },
              {
                text: '二.Vue Router3',
                link: '/source/vue-router3/1.base'
              },
              {
                text: '三.Vuex3',
                link: '/source/vuex3/1.index'
              }
            ]
          },
          {
            text: 'Vue项目',
            items: [{
                text: '点餐系统',
                link: 'https://github.com/zhoubichuan/order-vue.git'
              },
              {
                text: 'ElementUI组件',
                link: 'https://github.com/zhoubichuan/Web-ElementUI.git'
              }
            ]
          },
          {
            text: 'Vue相关资料',
            items: [{
                text: 'Vue官网',
                link: 'https://cn.vuejs.org'
              },
              {
                text: '深入浅出Vue.js',
                link: 'https://cn.vuejs.org'
              },
              {
                text: 'Vue.js权威指南',
                link: 'https://cn.vuejs.org'
              }
            ]
          }
        ],
        sidebar: {
          '/base/engine/': [
            '1.start',
            '2.webpack',
            '3.env',
            '4.single',
            '5.page',
            '6.module',
            '7.devide',
            '8.project',
            '9.utils',
            '10.ui',
            '11.data',
            '12.skill',
            '13.module',
            '14.package',
            '15.api',
            '16.message'
          ],
          '/base/project/': [
            '1.configure',
            '2.skill',
            '3.configureWebpack',
            '4.projectMonitor',
            '5.unitTesting',
            '6.configurePrem',
            '7.internationalization',
            '8.errorCollection',
            '9.optimize'
          ],
          '/senior/component/': [
            '1.recursion', //递归组件与动态组件
            '2.dynamics',
            '3.extend', //Vue 的构造器--extend
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
          '/senior/npm/': [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
          ],
          '/senior/vue3/': [
            '1.index',
          ],
          '/senior/typeScript/': [
            '1.base'
          ],
          '/source/vue-cli/': [
            'inde'
          ],
          '/source/vue2/': [
            'inde',
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
          '/source/vue-router/': [
            '1.base'
          ],
          '/source/vuex/': [
            '1.base'
          ],
          '/source/vue3/': [
            '1.index',
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
          '/source/vue-router3/': [
            '1.base'
          ],
          '/source/vuex3/': [
            '1.index'
          ]
        }
      }
    }
  },
}