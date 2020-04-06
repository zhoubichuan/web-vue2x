module.exports = {
  base: '/Web-Vue/', // 部署站点的基础路径
  locales: {
    // 默认标题
    '/': {
      title: 'vue源码学习记录',
      description: '',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/favicon.ico`,
      },
    ],
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
          text: 'Vue源码学习',
          items: [{
              text: '一、数据驱动',
              link: '/driver/',
            },
            {
              text: '二、组件化',
              link: '/components/',
            },
            {
              text: '三、深入响应式原理',
              link: '/principle/',
            },
            {
              text: '四、编译',
              link: '/compile/',
            },
            {
              text: '五、扩展',
              link: '/extend/',
            },
            {
              text: '六、Vue-Router',
              link: '/router/',
            },
            {
              text: '七、Vuex',
              link: '/vuex/',
            },
          ],
        }, ],
        sidebarDepth: 2,
        sidebar: {
          '/driver/': [{
            title: '一、数据驱动',
            collapsable: false,
            children: ['', 'mount', 'render'],
          }, ],
          '/components/': [{
            title: '二、组件化',
            collapsable: false,
            children: [''],
          }, ],
          '/principle/': [{
            title: '三、深入响应式原理',
            collapsable: false,
            children: [''],
          }, ],
          '/compile/': [{
            title: '四、编译',
            collapsable: false,
            children: [''],
          }, ],
          '/extend/': [{
            title: '五、扩展',
            collapsable: false,
            children: [''],
          }, ],
          '/router/': [{
            title: '六、Vue-Router',
            collapsable: false,
            children: [''],
          }, ],
          '/vuex/': [{
            title: '七、Vuex',
            collapsable: false,
            cchildren: [''],
          }, ],
        },
      },
    },
  },
}