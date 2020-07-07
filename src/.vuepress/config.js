module.exports = {
  // 基础配置
  base: '/Web-Vue/', // 部署站点的基础路径
  description: 'vue相关知识点',
  locales: {
    // 默认标题
    '/': {
      title: 'Vue笔记',
      description: ''
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
  skillsWorker: false, // pwa

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
            text: '基础知识点',
            items: [{
                text: '1.构建基础篇',
                link: '/vueBase/1.buildBase'
              },
              {
                text: '一、开发技巧',
                link: '/skills/skill',
              }, {
                text: '二、常见bug',
                link: '/skills/bug',
              }, {
                text: '三、配置webpack',
                link: '/skills/webpack',
              }, {
                text: '四、配置vscode',
                link: '/skills/vscode',
              }, {
                text: '五、测试',
                link: '/skills/test',
              }, {
                text: '六、权限',
                link: '/skills/prem',
              }, {
                text: '七、国际化',
                link: '/skills/i18n',
              }
            ]
          },
          {
            text: '高级使用技巧',
            items: [{
                text: '1.Vue组件精讲',
                link: '/vueSenior/1.recursionAndDynamics'
              },
              {
                text: '2.使用TypeScript开发vue',
                link: '/vueSenior/typeScript'
              },
            ]
          },
          {
            text: '相关源码解析',
            items: [{
                text: 'vue源码解析',
                link: '/sourceCode/vue'
              },
              {
                text: 'vuex源码解析',
                link: '/sourceCode/vuex'
              },
              {
                text: 'vue-router源码解析',
                link: '/sourceCode/vue-router'
              },
              {
                text: 'Element源码解析',
                link: '/sourceCode/element'
              },
            ]
          }
        ],
        sidebar: {
          '/sourceCode/': ['1.preparation', '2.dataDriven', '3.componentization', '4.deepResponsePrinciple', '5.compile', '6.extend', '7.vueRouter', '8.vuex'],
          '/element/': ['Pagination', 'Dialog', 'Autocomplete', 'Dropdown',
            'DropdownMenu', 'DropdownItem', 'Menu', 'Submenu', 'MenuItem', 'MenuItemGroup', 'Input', 'InputNumber', 'Radio', 'RadioGroup', 'RadioButton', 'Checkbox', 'CheckboxButton', 'CheckboxGroup',
            'Switch', 'Option', 'OptionGroup', 'Button', 'ButtonGroup', 'Table', 'TableColumn', 'DatePicker', 'TimeSelect', 'TimePicker', 'Popover', 'Tooltip', 'Breadcrumb', 'BreadcrumbItem',
            'Form', 'FormItem', 'Tabs', 'TabPane', 'Tag', 'Tree', 'Alert', 'Slider', 'Icon', 'Row', 'Col', 'Upload', 'Progress',
            'Spinner', 'Badge', 'Card', 'Rate', 'Steps', 'Step', 'Carousel', 'Scrollbar', 'CarouselItem', 'Collapse', 'CollapseItem', 'Cascader', 'ColorPicker', 'Transfer',
            'Container', 'Header', 'Aside', 'Main', 'Footer', 'Timeline', 'TimelineItem', 'Link', 'Divider', 'Image', 'Calendar', 'Backtop', 'PageHeader', 'CascaderPanel', 'Avatar', 'Drawer', 'Popconfirm', 'CollapseTransition', 'MessageBox'
          ],
          '/skills/': ['1.node', '2.express', '3.koa', '4.egg'],
          '/vueBase/': ['1.buildBase', '饿了么', '今日头条', '滴滴', '兑吧', '百分点', '海风教育', '海康威视', '沪江', '酷家乐', '寺库', '挖财', '网易', '微医', '携程', '喜马拉雅', '有赞'],
          '/vueSenior/': ['1.recursionAndDynamics', '2.extend', '3.componentCommunication', '4.render']
        }
      }
    }
  }
}