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
                text: '构建基础篇',
                link: '/vueBase/build/1.config'
              },
              {
                text: '开发技巧',
                link: '/vueBase/skills/skill',
              }
            ]
          },
          {
            text: '高级使用技巧',
            items: [{
                text: '1.Vue组件精讲',
                link: '/vueSenior/use/1.recursionAndDynamics'
              },
              // {
              //   text: '2.使用TypeScript开发vue',
              //   link: '/vueSenior/typeScript'
              // },
            ]
          },
          {
            text: '相关源码解析',
            items: [{
                text: 'vue源码解析',
                link: '/sourceCode/vue/1.preparation'
              },
              // {
              //   text: 'vuex源码解析',
              //   link: '/sourceCode/vuex'
              // },
              // {
              //   text: 'vue-router源码解析',
              //   link: '/sourceCode/vue-router'
              // },
              {
                text: 'Element源码解析',
                link: '/sourceCode/element/Pagination'
              },
            ]
          }
        ],
        sidebar: {
          '/vueBase/skills/': ['bug', 'i18n', 'prem', 'skill', 'test', 'vscode', 'webpack'],
          '/vueBase/build/': ['1.config', '2.webpack', '3.file', '4.single', '5.page', '7.module', '8.project', '9.utils', '10.ui', '11.data', '12.skill', '13.com', '14.data', '15.api'],
          '/vueSenior/use/': ['1.recursionAndDynamics', '2.extend', '3.componentCommunication', '4.render', '5.api'],
          '/sourceCode/vue/': ['1.preparation', '2.dataDriven', '3.componentization', '4.deepResponsePrinciple', '5.compile', '6.extend', '7.vueRouter', '8.vuex'],
          '/sourceCode/element/': ['Pagination', 'Dialog', 'Autocomplete', 'Dropdown',
            'DropdownMenu', 'DropdownItem', 'Menu', 'Submenu', 'MenuItem', 'MenuItemGroup', 'Input', 'InputNumber', 'Radio', 'RadioGroup', 'RadioButton', 'Checkbox', 'CheckboxButton', 'CheckboxGroup',
            'Switch', 'Option', 'OptionGroup', 'Button', 'ButtonGroup', 'Table', 'TableColumn', 'DatePicker', 'TimeSelect', 'TimePicker', 'Popover', 'Tooltip', 'Breadcrumb', 'BreadcrumbItem',
            'Form', 'FormItem', 'Tabs', 'TabPane', 'Tag', 'Tree', 'Alert', 'Slider', 'Icon', 'Row', 'Col', 'Upload', 'Progress',
            'Spinner', 'Badge', 'Card', 'Rate', 'Steps', 'Step', 'Carousel', 'Scrollbar', 'CarouselItem', 'Collapse', 'CollapseItem', 'Cascader', 'ColorPicker', 'Transfer',
            'Container', 'Header', 'Aside', 'Main', 'Footer', 'Timeline', 'TimelineItem', 'Link', 'Divider', 'Image', 'Calendar', 'Backtop', 'PageHeader', 'CascaderPanel', 'Avatar', 'Drawer', 'Popconfirm', 'CollapseTransition', 'MessageBox'
          ],
        }
      }
    }
  }
}