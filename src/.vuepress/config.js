module.exports = {
  // 基础配置
  base: '/Web-Vue/', // 部署站点的基础路径
  locales: {
    // 默认标题
    '/': {
      title: 'Vue笔记',
      description: ''
    }
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
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
            text: 'Vue源码解析',
            link: '/base/html',
            items: [{
                text: '一、准备工作',
                link: '/base/1.preparation',
              },
              {
                text: '二、数据驱动',
                link: '/base/2.dataDriven',
              },
              {
                text: '三、组件化',
                link: '/base/3.componentization',
              },
              {
                text: '四、深入响应式原理',
                link: '/base/4.deepResponsePrinciple',
              },
              {
                text: '五、编译',
                link: '/base/5.compile',
              },
              {
                text: '六、扩展',
                link: '/base/6.extend',
              },
              {
                text: '七、Vue-Router',
                link: '/base/7.vueRouter',
              },
              {
                text: '八、Vuex',
                link: '/base/8.vuex',
              }
            ],
          },
          // {
          //   text: 'Element源码解析',
          //   link: '/frame/Vue',
          //   items: [{
          //     text: '一、Vue',
          //     link: '/frame/1.Vue',
          //   }, {
          //     text: '二、React',
          //     link: '/frame/2.React',
          //   }, {
          //     text: '三、Angular',
          //     link: '/frame/3.Angular',
          //   }, {
          //     text: '四、小程序',
          //     link: '/frame/4.小程序',
          //   }]
          // },
          // {
          //   text: 'Vue开发技巧',
          //   link: '/service/node',
          //   items: [{
          //     text: '一、Node',
          //     link: '/service/1.node',
          //   }, {
          //     text: '二、Express',
          //     link: '/service/2.express',
          //   }, {
          //     text: '三、Koa',
          //     link: '/service/3.koa',
          //   }, {
          //     text: '四、Egg',
          //     link: '/service/4.egg',
          //   }]
          // },
          // {
          //   text: 'Vue相关插件',
          //   link: '/article/',
          //   items: [{
          //     text: '阿里巴巴',
          //     link: '/article/阿里巴巴',
          //   }, {
          //     text: '饿了么',
          //     link: '/article/饿了么',
          //   }, {
          //     text: '百分点',
          //     link: '/article/百分点',
          //   }, {
          //     text: '宝宝树',
          //     link: '/article/宝宝树',
          //   }, {
          //     text: '滴滴',
          //     link: '/article/滴滴',
          //   }, {
          //     text: '兑吧',
          //     link: '/article/兑吧',
          //   }, {
          //     text: '海风教育',
          //     link: '/article/宝海风教育',
          //   }, {
          //     text: '海康威视',
          //     link: '/article/海康威视',
          //   }, {
          //     text: '沪江',
          //     link: '/article/沪江',
          //   }, {
          //     text: '今日头条',
          //     link: '/article/今日头条',
          //   }, {
          //     text: '酷家乐',
          //     link: '/article/酷家乐',
          //   }, {
          //     text: '蘑菇街',
          //     link: '/article/蘑菇街',
          //   }, {
          //     text: '寺库',
          //     link: '/article/寺库',
          //   }, {
          //     text: '挖财',
          //     link: '/article/挖财',
          //   }, {
          //     text: '网易',
          //     link: '/article/网易',
          //   }, {
          //     text: '微医',
          //     link: '/article/微医',
          //   }, {
          //     text: '喜马拉雅',
          //     link: '/article/喜马拉雅',
          //   }, {
          //     text: '携程',
          //     link: '/article/携程',
          //   }, {
          //     text: '有赞',
          //     link: '/article/有赞',
          //   }]
          // }
        ],
        sidebar: {
          '/base/': ['1.preparation', '2.dataDriven', '3.componentization', '4.deepResponsePrinciple', '5.compile', '6.extend', '7.vueRouter', '8.vuex'],
          // '/frame/': ['1.Vue', '2.React', '3.Angular', '4.小程序'],
          // '/service/': ['1.node', '2.express', '3.koa', '4.egg'],
          // '/article/': ['阿里巴巴', '蘑菇街', '饿了么', '今日头条', '滴滴', '兑吧', '百分点', '海风教育', '海康威视', '沪江', '酷家乐', '寺库', '挖财', '网易', '微医', '携程', '喜马拉雅', '有赞']
        }
      }
    }
  }
}