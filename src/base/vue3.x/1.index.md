---
lang: zh-CN
sidebarDepth: 0
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# Vue3.x 全家桶

::: tip 前言
这里将介绍 vue3.x 项目开发所需要的技术选型，以及相关基础知识的介绍
:::

## 1.脚手架

::: warning 前言
**vue-cli3.x，[参考文档](https://cli.vuejs.org/zh/)**
:::
### 1.1 VueCLI
- vue create demo
- npm run serve
- npm install

## 2.vue3.x 全家桶

::: warning 前言
**vue3.x：渐进式 js 框架，[参考文档](https://v3.cn.vuejs.org/)**

**vue-router4.x：vue 官方路由管理器，[参考文档](https://next.router.vuejs.org/zh/)**

**vuex4.x：vue 状态管理器，[参考文档](https://next.vuex.vuejs.org/zh/index.html)**
:::
### 2.1vue3.x
#### 2.1.1 创建应用(main.js)
- Vue.createApp()
- app.use()
- app.mount()
#### 2.1.2 模板语法(template)
- teleport
- 插值表达式
- 指令
  - v-html
  - v-bind(\:)
  - v-once
  - v-if
  - v-show
  - v-on(@)
  - ref
#### 2.1.3 setup
- ref
- reactive
- readonly
- toRefs
- computed
- watch
- watchEffect
- provide/inject
#### 2.1.4 生命周期
- setup
- onBeforeMount
- onMounted
- onBeforeUpdate
- onUpdated
- onBeforeUnmount
- onUnmounted
- onErrorCaptured
- onRenderTracked
- onRenderTriggered

## 3.UI 组件库

::: warning 前言
**element plus，饿了么推出的 UI 组件库，[参考文档](https://element-plus.gitee.io/zh-CN/)**
:::

## 4.工具类（参考 vue2.x 部分）

::: warning 前言
**axios，基于 promise 的网络请求库，[参考文档](http://www.axios-js.com/zh-cn/docs/)**

**Moment.js，JavaScript 日期处理类库，[参考文档](http://momentjs.cn/)**

**lodash，一个一致性、模块化、高性能的 JavaScript 实用工具库，[参考文档](https://www.lodashjs.com/)**

**vue-devtools，是专门调试 vue 项目的调试工具[查看工具](https://github.com/vuejs/devtools)**

**Vue performance Devtool，是专门检查 vue 组件性能的测试工具[查看工具](https://github.com/vuejs/devtools)**

**VueUse，基本 Vue 组合实用程序的集合，[参考文档](http://www.axios-js.com/zh-cn/docs/)**

:::

## 5.css 预处理器（参考 vue2.x 部分）

::: warning 前言
**SASS，世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言！，[参考文档](https://www.sass.hk/)**

**Less，是一门向后兼容的 CSS 扩展语言，[参考文档](https://less.bootcss.com/)**

**Stylus，富于表现力、动态的、健壮的 CSS，[参考文档](https://www.stylus-lang.cn/)**
:::

## 6.代码校验（参考 vue2.x 部分）

::: warning 前言
**eslint，可组装的 JavaScript 和 JSX 检查工具，[参考文档](https://eslint.bootcss.com)**

**vue3 风格指南，官方的 Vue 特有代码的风格指南，[参考文档](https://v3.cn.vuejs.org/style-guide/)**
:::
