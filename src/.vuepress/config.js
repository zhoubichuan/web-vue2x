module.exports = {
  // 基础配置
  base: '/Web-Vue/', // 部署站点的基础路径
  description: 'vue相关知识点',
  locales: {
    // 默认标题
    '/': {
      title: 'Vue学习总结',
      description: 'Vue学习总结'
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
                text: '1.构建基础篇',
                link: '/base/build/1.config'
              },
              {
                text: '2.项目功能点',
                link: '/base/function/skill',
              }
            ]
          },
          {
            text: '高级知识',
            items: [{
                text: '1.组件精讲',
                link: '/senior/componentElaboration/1.recursionAndDynamics'
              },
              {
                text: '2.TypeScript',
                link: '/senior/typeScript/1.base'
              },
              {
                text: '3.前端工作流',
                link: '/senior/npm/1.base'
              },

            ]
          },
          {
            text: '源码知识',
            items: [{
                text: '1.vue源码解析',
                link: '/source/vue/1.preparation'
              },
              {
                text: '2.vuex源码解析',
                link: '/source/vuex/1.base'
              },
              {
                text: '3.vue-router源码解析',
                link: '/source/vue-router/1.base'
              },
              {
                text: '4.element源码解析',
                link: '/source/element/Pagination'
              },
            ]
          }
        ],
        sidebar: {
          '/base/build/': ['1.config', '2.webpack', '3.file', '4.single', '5.page', '6.module', '7.devide', '8.project', '9.utils', '10.ui', '11.data', '12.skill', '13.com', '14.data', '15.api'],
          '/base/function/': ['skill', 'bug', 'webpack', 'vscode', 'test', 'prem', 'i18n'],
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
          '/source/vue/': ['1.preparation', '2.dataDriven', '3.componentization', '4.deepResponsePrinciple', '5.compile', '6.extend', '7.vueRouter', '8.vuex'],
          '/source/vue-router/': ['1.base'],
          '/source/vuex/': ['1.base'],
          '/source/element/': ['Pagination', 'Dialog', 'Autocomplete', 'Dropdown',
            'DropdownMenu', 'DropdownItem', 'Menu', 'Submenu', 'MenuItem', 'MenuItemGroup', 'Input', 'InputNumber', 'Radio', 'RadioGroup', 'RadioButton', 'Checkbox', 'CheckboxButton', 'CheckboxGroup',
            'Switch', 'Option', 'OptionGroup', 'Button', 'ButtonGroup', 'Table', 'TableColumn', 'DatePicker', 'TimeSelect', 'TimePicker', 'Popover', 'Tooltip', 'Breadcrumb', 'BreadcrumbItem',
            'Form', 'FormItem', 'Tabs', 'TabPane', 'Tag', 'Tree', 'Alert', 'Slider', 'Icon', 'Row', 'Col', 'Upload', 'Progress',
            'Spinner', 'Badge', 'Card', 'Rate', 'Steps', 'Step', 'Carousel', 'Scrollbar', 'CarouselItem', 'Collapse', 'CollapseItem', 'Cascader', 'ColorPicker', 'Transfer',
            'Container', 'Header', 'Aside', 'Main', 'Footer', 'Timeline', 'TimelineItem', 'Link', 'Divider', 'Image', 'Calendar', 'Backtop', 'PageHeader', 'CascaderPanel', 'Avatar', 'Drawer', 'Popconfirm', 'CollapseTransition', 'MessageBox'
          ],
        }
      }
    }
  },
}