(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{849:function(t,_,v){"use strict";v.r(_);var s=v(2),a=Object(s.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"vue-的组件开发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue-的组件开发"}},[t._v("#")]),t._v(" Vue 的组件开发")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),_("p",[t._v("通过原生html封装一些组件，相对于一些成熟的"),_("code",[t._v("ui")]),t._v("框架更加简洁、性能更好，可以在移动端使用，通用性更高")])]),t._v(" "),_("h2",{attrs:{id:"_1-组件特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-组件特性"}},[t._v("#")]),t._v(" 1.组件特性")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("从不同角度分析组件的特性")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("构成")]),t._v(" "),_("th",[t._v("易变性")]),t._v(" "),_("th",[t._v("影响因素")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("结构（视觉）")]),t._v(" "),_("td",[t._v("不易变")]),t._v(" "),_("td",[t._v("内容结构、布局类样式")])]),t._v(" "),_("tr",[_("td",[t._v("结构（内容）")]),t._v(" "),_("td",[t._v("较易变")]),t._v(" "),_("td",[t._v("生成 html 的 js 库/框架的源码、平台限定的视图结构描述语言")])]),t._v(" "),_("tr",[_("td",[t._v("表现（主题风格）")]),t._v(" "),_("td",[t._v("很易变")]),t._v(" "),_("td",[t._v("GUI 设计人员的审美和想法、非布局类样式、图标与图片")])]),t._v(" "),_("tr",[_("td",[t._v("行为（交互逻辑）")]),t._v(" "),_("td",[t._v("不易变")]),t._v(" "),_("td",[t._v("交互设计人员的想法")])]),t._v(" "),_("tr",[_("td",[t._v("行为（业务逻辑）")]),t._v(" "),_("td",[t._v("很易变")]),t._v(" "),_("td",[t._v("业务规则")])])])])]),t._v(" "),_("li",[_("p",[t._v("组件封装主要就是为了复用相关代码，所以需要重点考虑不易变的部分")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("易变等级")]),t._v(" "),_("th",[t._v("影响因素")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("不易变")]),t._v(" "),_("td",[t._v("交互方式")])]),t._v(" "),_("tr",[_("td",[t._v("较易变")]),t._v(" "),_("td",[t._v("源码语法")])]),t._v(" "),_("tr",[_("td",[t._v("很易变")]),t._v(" "),_("td",[t._v("业务和人")])])])])])]),t._v(" "),_("h2",{attrs:{id:"_2-组件分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-组件分类"}},[t._v("#")]),t._v(" 2.组件分类")]),t._v(" "),_("ul",[_("li",[t._v("原子性\n"),_("ul",[_("li",[t._v("原子组件：不可再分的 ui 组件（按钮、图标、分割线）")]),t._v(" "),_("li",[t._v("复合组件：由一个以上的原子组件构成（菜单、选项卡、对话框）")])])]),t._v(" "),_("li",[t._v("通用性\n"),_("ul",[_("li",[t._v("通用组件：一般作为公共组件维护")]),t._v(" "),_("li",[t._v("专用组件")])])]),t._v(" "),_("li",[t._v("功能性\n"),_("table",[_("thead",[_("tr",[_("th",[t._v("组件类别")]),t._v(" "),_("th",[t._v("案例组件")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("一.命令输入")]),t._v(" "),_("td",[t._v("按钮组件、下拉菜单组件")])]),t._v(" "),_("tr",[_("td",[t._v("二.数据输入")]),t._v(" "),_("td",[t._v("表单组件、输入框组件、单/复选框组件、级联选择组件、日期拾取器组件、动态渲染组件、动态组件")])]),t._v(" "),_("tr",[_("td",[t._v("三.数据输出")]),t._v(" "),_("td",[t._v("树组件、列表组件、表格组件")])]),t._v(" "),_("tr",[_("td",[t._v("四.信息展示")]),t._v(" "),_("td",[t._v("图标组件、加载状态组件、工具提示组件")])]),t._v(" "),_("tr",[_("td",[t._v("五.容器")]),t._v(" "),_("td",[t._v("手风琴组件、面板组件、选项卡组件、字段集组件")])]),t._v(" "),_("tr",[_("td",[t._v("六.导航")]),t._v(" "),_("td",[t._v("导航菜单组件、面包屑组件、超链接组件")])]),t._v(" "),_("tr",[_("td",[t._v("七.特殊窗口")]),t._v(" "),_("td",[t._v("对话框组件、警告提示组件")])])])])])]),t._v(" "),_("h2",{attrs:{id:"_3-组件开发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-组件开发"}},[t._v("#")]),t._v(" 3.组件开发")]),t._v(" "),_("p",[t._v("编写一个 Vue.js 组件，最重要的是设计好它的接口，一个 Vue.js 组件的接口来自三个部分：props、slots、events。")]),t._v(" "),_("h2",{attrs:{id:"_4-环境搭建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-环境搭建"}},[t._v("#")]),t._v(" 4.环境搭建")]),t._v(" "),_("h2",{attrs:{id:"_5-组件发布"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-组件发布"}},[t._v("#")]),t._v(" 5.组件发布")]),t._v(" "),_("ul",[_("li",[t._v("可以发布到"),_("code",[t._v("npm")]),t._v("仓库")]),t._v(" "),_("li",[t._v("公司内部项目可以发布到私有仓库")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),_("p",[t._v("通过对前端组件的分析，需要重点关注组件中易变性对组件封装的影响，它会对组件的可复用性、可扩展性产生很大影响")])])])}),[],!1,null,null,null);_.default=a.exports}}]);