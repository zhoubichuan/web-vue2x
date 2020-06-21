---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-主题
  - name: keywords
    content: vuepress,最新技术文档,vuepress主题
---

# 一、Vue 相关知识点

## 1.介绍下 MVVM（数据的双向绑定）

- M:model 数据模型
- V:view 界面
- MV:作为桥梁负责沟通，view 和 model
- 只关心数据的流传，减少强耦合性，最关键的就是数据的双向绑定
- 关键步骤：
- 1.实现数据监听器 Observer,用 object.defineProperty()重写数组的 get/set。数据更新就在 set 中通知订阅者更新数据。
- 2.实现模板编译 compiler，深度遍历 dom 树，对每个元素节点的指令模板替换数据及订阅数据。
- 3.实现 watch 用于连接 Observer 和 Compiler，能够订阅并接受每一个属性的变动的通知，执行指令绑定对的响应的回调函数，从而更新数据。
  -MVC 和 MVVM 其实区别并不大。都是一种设计思想，主要是 MVC 中 Controller 演变成 MVVM 中的 ViewMode，mvvm 主要解决了 MVC 中大量的 Dom 操作使页面渲染性能降低。

## 2.Vue 实现数据双向绑定的原理：

- 采用数据劫持结合发布订阅，通过 Object.defineProperty()来劫持各个属性的 setter,getter，在数据变动时发布消息给订阅者，触发相应的监听回调。当把一个普通 JavaScript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty()将他们转换为 getter/sertter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。
- Vue 的数据双向绑定，将 MVVM 作为数据绑定的入口，整合 Observer，Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 的数据变化，通过 Compiler 之间的通信桥梁，达到数据变化-->视图更新；视图交互变化（input）-->数据 model 变更双向绑定的效果。

## 3. watch

- 对属性进行监听，允许我们执行异步操作，限制执行该操作的频率，并在我们得到结构前设置中间状态

## 4. 生命周期函数

vue 初始化到渲染的过程

- 1.new Vue
- 2.init --> initEvent --> beforeCreate --> initData（observer...） -->created
- 3.\$mount--> beforeMount
- 4.render
- 5.compiler
- 6.vnode
- 7.path
- 9.dom --> mounted

组件更新

- initData(dep)
- watch(dep)
- render(dep)

- beforeUpdate --> virtual dom --> updated

<!-- - new Vue(创建一个 Vue 对象)->init event（vue 内部初始化事件）->beforeCreate->observer Ddata(开始监听 data 对象的数据变化)->created()->compile(编译模板，把 data 里面的数据和模板生成 html)->beforeMount（还没生成 html 到元素上）->mounted(挂载完成，也就是模板中的 html 渲染到 html 页面中)->beforeUpdate(Virtual Dom) ->updated->beforeDestory->destoryed
- 1.ajax 请求最好放在 created 里面，页面可以访问到 this 了
- 2.关于 dom 的操作要法国在 mounted 里面，在 mounted 前面还没有生成 dom
- 3.每次进入/离开组件都做一些事情，用什么钩子函数
  - 不缓存：进入的时候可以用 created 和 mounted 钩子，离开的时候可以使用 beforeDestory(可以访问 this)和 destoryed
  - 缓存：缓存了组建之后，再次进入组建不会触发 beforeCreated，created,beforeMount,mounted,如果你像每次进入组建都做一些事情的话，你可以放在 activated 进入缓存组件的钩子中 -->

## 5. keep-alive

- 在被 keep-alive 包含的组件/路由，会多出两个生命周期：activated 和 deactiated
- actived 在组件第一次渲染时会被调用，之后每次缓存组件被激活时调用，调用机制：第一次进入缓存路由/组件，在 mounted 后面，beforRouteEnter 守卫传给 next 的回调函数之前调用

## 6. vue 的 spa 如何优化加载速度

- 减少入口文件的体积、静态资源本地缓存、开启 gzip 压缩、使用 ssr,nuxt.js

## 7.key 的作用是什么

- 保证某个元素的 key 在同级元素中具有唯一性，在 Diff 算法中借助元素的 key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重新渲染。

## 8. 谈谈 vue 和 react 组件化的思想

- 我们在各个页面开发的时候，会产生很多重复的功能
- 1.我们在各个页面开发的时候，会产生很多重复的功能，比如，element 中的 xxx，像这种纯粹非页面的 UI，便成为我们常用 UI 组件，最初的前端组件也就仅仅值得是 UI 组件
- 2.随着业务逻辑变得越来越多时，我们就想要我们的组件可以处理很多事，这就是我们常说的组件化，这个组件就不是 UI 组件了，而是包含具体业务的业务组件
- 3.这种开发思想就是分而治之。最大程度降低开发难度和维护成本的效果，并且可以多人协作，每人写不同的组件，最后像搭积木一样把它构成一个页面

## 9.框架区别

- 1、vue 与 AngularJS 的区别

相同点：都支持指令：内置指令和自定义指令；都支持过滤器：内置过滤器和自定义过滤器；都支持双向数据绑定；都不支持低端浏览器。

不同点：AngularJS 的学习成本高，比如增加了 Dependency Injection 特性，而 Vue.js 本身提供的 API 都比较简单、直观；在性能上，AngularJS 依赖对数据做脏检查，所以 Watcher 越多越慢；Vue.js 使用基于依赖追踪的观察并且使用异步队列更新，所有的数据都是独立触发的。

- 2、vue 与 React 的区别

相同点：React 采用特殊的 JSX 语法，Vue.js 在组件开发中也推崇编写.vue 特殊文件格式，对文件内容都有一些约定，两者都需要编译后使用；中心思想相同：一切都是组件，组件实例之间可以嵌套；都提供合理的钩子函数，可以让开发者定制化地去处理需求；都不内置列数 AJAX，Route 等功能到核心包，而是以插件的方式加载；在组件开发中都支持 mixins 的特性。

不同点：React 采用的 Virtual DOM 会对渲染出来的结果做脏检查；Vue.js 在模板中提供了指令，过滤器等，可以非常方便，快捷地操作 Virtual DOM。

## 10.vue 路由的钩子函数

- 全局导航钩子
  - router.beforeEach(to,from,next)
  - router.beforeResolve(to,from,next)
  - router.afterEach(to,from,next)
- 组件内钩子
  - beforeRouteEnter
  - beforeRouteUpdate
  - beforeRouteLeave
- 单独路由独享钩子
  - beforeEnter

## 11.vuex 是什么？怎么使用？哪种功能场景使用它？

只用来读取的状态集中放在 store 中； 改变状态的方式是提交 mutations，这是个同步的事物； 异步逻辑应该封装在 action 中。

在 main.js 引入 store，注入。新建了一个目录 store，… export 。

场景有：单页应用中，组件之间的状态、音乐播放、登录状态、加入购物车

state：Vuex 使用单一状态树,即每个应用将仅仅包含一个 store 实例，但单一状态树和模块化并不冲突。存放的数据状态，不可以直接修改里面的数据。

mutations：mutations 定义的方法动态修改 Vuex 的 store 中的状态或数据。

getters：类似 vue 的计算属性，主要用来过滤一些数据。

action：actions 可以理解为通过将 mutations 里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据。view 层通过 store.dispath 来分发 action。

## 12.Vue 组件间的参数传递

- 1.props:父组件创建属性给子组件，属性可以进行验证、赋给默认值等
- 2.refs:访问子组件的属性或者方法
- 3.$parent:访问父组件的属性或方法；$children:访问子组件的属性或方法
- 4.$emit:父组件订阅子组件事件，$on:父组件发布子组件事件
- 5.vuex：全局共享状态和方法（同步异步）
- 6.provide/inject:父组件提供属性，供子组件访问
- 7.Bus：类似$emit/$on，全局版的发布订阅模式

## 13.Vue 的路由实现：hash 模式 和 history 模式

- hash 模式：
  在浏览器中符号“#”，#以及#后面的字符称之为 hash，用 window.location.hash 读取。
  特点：hash 虽然在 URL 中，但不被包括在 HTTP 请求中；用来指导浏览器动作，对服务端安全无用，hash 不会重加载页面。
- history 模式：
  history 采用 HTML5 的新特性；且提供了两个新方法： pushState()， replaceState()可以对浏览器历史记录栈进行修改，以及 popState 事件的监听到状态变更。
