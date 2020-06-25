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
            link: '/vue/html',
            items: [{
                text: '一、准备工作',
                link: '/vue/1.preparation',
              },
              {
                text: '二、数据驱动',
                link: '/vue/2.dataDriven',
              },
              {
                text: '三、组件化',
                link: '/vue/3.componentization',
              },
              {
                text: '四、深入响应式原理',
                link: '/vue/4.deepResponsePrinciple',
              },
              {
                text: '五、编译',
                link: '/vue/5.compile',
              },
              {
                text: '六、扩展',
                link: '/vue/6.extend',
              },
              {
                text: '七、Vue-Router',
                link: '/vue/7.vueRouter',
              },
              {
                text: '八、Vuex',
                link: '/vue/8.vuex',
              }
            ],
          },
          {
            text: 'Element源码解析',
            items: [{
              text: '一、Pagination',
              link: '/element/Pagination',
            }, {
              text: '二、Dialog',
              link: '/element/Dialog',
            }, {
              text: '三、Autocomplete',
              link: '/element/Autocomplete',
            }, {
              text: '四、Dropdown',
              link: '/element/Dropdown',
            }, {
              text: '五、DropdownMenu',
              link: '/element/DropdownMenu',
            }, {
              text: '六、DropdownItem',
              link: '/element/DropdownItem',
            }, {
              text: '七、Menu',
              link: '/element/Menu',
            }, {
              text: '八、Submenu',
              link: '/element/Submenu',
            }, {
              text: '九、MenuItem',
              link: '/element/MenuItem',
            }, {
              text: '十、MenuItemGroup',
              link: '/element/MenuItemGroup',
            }, {
              text: '十一、Input',
              link: '/element/Input',
            }, {
              text: '十二、InputNumber',
              link: '/element/InputNumber',
            }, {
              text: '十三、Radio',
              link: '/element/Radio',
            }, {
              text: '十四、RadioGroup',
              link: '/element/RadioGroup',
            }, {
              text: '十五、RadioButton',
              link: '/element/RadioButton',
            }, {
              text: '十六、Checkbox',
              link: '/element/Checkbox',
            }, {
              text: '十七、CheckboxButton',
              link: '/element/CheckboxButton',
            }, {
              text: '十八、CheckboxGroup',
              link: '/element/CheckboxGroup',
            }, {
              text: '十九、Switch',
              link: '/element/Switch',
            }, {
              text: '二十、Option',
              link: '/element/Option',
            }, {
              text: '二十一、OptionGroup',
              link: '/element/OptionGroup',
            }, {
              text: '二十二、Button',
              link: '/element/Button',
            }, {
              text: '二十三、ButtonGroup',
              link: '/element/ButtonGroup',
            }, {
              text: '二十四、Table',
              link: '/element/Table',
            }, {
              text: '二十五、TableColumn',
              link: '/element/TableColumn',
            }, {
              text: '二十六、DatePicker',
              link: '/element/DatePicker',
            }, {
              text: '二十七、TimeSelect',
              link: '/element/TimeSelect',
            }, {
              text: '二十八、TimePicker',
              link: '/element/TimePicker',
            }, {
              text: '二十九、Popover',
              link: '/element/Popover',
            }, {
              text: '三十、Tooltip',
              link: '/element/Tooltip',
            }, {
              text: '三十一、Breadcrumb',
              link: '/element/Breadcrumb',
            }, {
              text: '三十二、BreadcrumbItem',
              link: '/element/BreadcrumbItem',
            }, {
              text: '三十三、Form',
              link: '/element/Form',
            }, {
              text: '三十四、FormItem',
              link: '/element/FormItem',
            }, {
              text: '三十五、Tabs',
              link: '/element/Tabs',
            }, {
              text: '三十六、TabPane',
              link: '/element/TabPane',
            }, {
              text: '三十七、Tag',
              link: '/element/Tag',
            }, {
              text: '三十八、Tree',
              link: '/element/Tree',
            }, {
              text: '三十九、Alert',
              link: '/element/Alert',
            }, {
              text: '四十、Slider',
              link: '/element/Slider',
            }, {
              text: '四十一、Icon',
              link: '/element/Icon',
            }, {
              text: '四十二、Row',
              link: '/element/Row',
            }, {
              text: '四十三、Col',
              link: '/element/Col',
            }, {
              text: '四十四、Upload',
              link: '/element/Upload',
            }, {
              text: '四十五、Progress',
              link: '/element/Progress',
            }, {
              text: '四十六、Spinner',
              link: '/element/Spinner',
            }, {
              text: '四十七、Badge',
              link: '/element/Badge',
            }, {
              text: '四十八、Card',
              link: '/element/Card',
            }, {
              text: '四十九、Rate',
              link: '/element/Rate',
            }, {
              text: '五十、Steps',
              link: '/element/Steps',
            }, {
              text: '五十一、Step',
              link: '/element/Step',
            }, {
              text: '五十二、Carousel',
              link: '/element/Carousel',
            }, {
              text: '五十三、Scrollbar',
              link: '/element/Scrollbar',
            }, {
              text: '五十四、CarouselItem',
              link: '/element/CarouselItem',
            }, {
              text: '五十五、Collapse',
              link: '/element/Collapse',
            }, {
              text: '五十六、CollapseItem',
              link: '/element/CollapseItem',
            }, {
              text: '五十七、Cascader',
              link: '/element/Cascader',
            }, {
              text: '五十八、ColorPicker',
              link: '/element/ColorPicker',
            }, {
              text: '五十九、Transfer',
              link: '/element/Transfer',
            }, {
              text: '六十一、Container',
              link: '/element/Container',
            }, {
              text: '六十二、Header',
              link: '/element/Header',
            }, {
              text: '六十三、Aside',
              link: '/element/Aside',
            }, {
              text: '六十四、Main',
              link: '/element/Main',
            }, {
              text: '六十五、Footer',
              link: '/element/Footer',
            }, {
              text: '六十六、Timeline',
              link: '/element/Timeline',
            }, {
              text: '六十七、TimelineItem',
              link: '/element/TimelineItem',
            }, {
              text: '六十八、Link',
              link: '/element/Link',
            }, {
              text: '六十九、Divider',
              link: '/element/Divider',
            }, {
              text: '七十、Image',
              link: '/element/Image',
            }, {
              text: '七十一、Calendar',
              link: '/element/Calendar',
            }, {
              text: '七十二、Backtop',
              link: '/element/Backtop',
            }, {
              text: '七十三、PageHeader',
              link: '/element/PageHeader',
            }, {
              text: '七十四、CascaderPanel',
              link: '/element/CascaderPanel',
            }, {
              text: '七十五、Avatar',
              link: '/element/Avatar',
            }, {
              text: '七十六、Drawer',
              link: '/element/Drawer',
            }, {
              text: '七十七、Popconfirm',
              link: '/element/Popconfirm',
            }, {
              text: '七十八、CollapseTransition',
              link: '/element/CollapseTransition',
            }, {
              text: '七十九、MessageBox',
              link: '/element/MessageBox',
            }]
          },
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
          '/vue/': ['1.preparation', '2.dataDriven', '3.componentization', '4.deepResponsePrinciple', '5.compile', '6.extend', '7.vueRouter', '8.vuex'],
          '/element/': ['Pagination', 'Dialog', 'Autocomplete', 'Dropdown',
            'DropdownMenu', 'DropdownItem', 'Menu', 'Submenu', 'MenuItem', 'MenuItemGroup', 'Input', 'InputNumber', 'Radio', 'RadioGroup', 'RadioButton', 'Checkbox', 'CheckboxButton', 'CheckboxGroup',
            'Switch', 'Option', 'OptionGroup', 'Button', 'ButtonGroup', 'Table', 'TableColumn', 'DatePicker', 'TimeSelect', 'TimePicker', 'Popover', 'Tooltip', 'Breadcrumb', 'BreadcrumbItem',
            'Form', 'FormItem', 'Tabs', 'TabPane', 'Tag', 'Tree', 'Alert', 'Slider', 'Icon', 'Row', 'Col', 'Upload', 'Progress',
            'Spinner', 'Badge', 'Card', 'Rate', 'Steps', 'Step', 'Carousel', 'Scrollbar', 'CarouselItem', 'Collapse', 'CollapseItem', 'Cascader', 'ColorPicker', 'Transfer',
            'Container', 'Header', 'Aside', 'Main', 'Footer', 'Timeline', 'TimelineItem', 'Link', 'Divider', 'Image', 'Calendar', 'Backtop', 'PageHeader', 'CascaderPanel', 'Avatar', 'Drawer', 'Popconfirm', 'CollapseTransition', 'MessageBox'
          ],
          // '/service/': ['1.node', '2.express', '3.koa', '4.egg'],
          // '/article/': ['阿里巴巴', '蘑菇街', '饿了么', '今日头条', '滴滴', '兑吧', '百分点', '海风教育', '海康威视', '沪江', '酷家乐', '寺库', '挖财', '网易', '微医', '携程', '喜马拉雅', '有赞']
        }
      }
    }
  }
}