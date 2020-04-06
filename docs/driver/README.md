## 1.new Vue 发生了什么

```js
function Vue(options) {
  this._init(options)
}
```

```js
Vue.prototype._init=function(options){
  const vm = this
  vm._uid = uid++
  let startTag, endTag
  vm._isVue = true
  if(options && options._isComponent){
    initInternalComponent(vm, options)
  }else{
    <!-- 合并配置 -->
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    )
  }
  if(process.env.NODE_ENV !== 'production'){
    initProxy(vm)
  }else{
    vm._renderProxy = vm
  }
  vm._self =vm
  <!-- 初始化生命周期 -->
  initLifecycle(vm)
  <!-- 初始化事件中心 -->
  initEvents(vm)
  <!-- 初始化渲染 -->
  initRenders(vm)
  callHook(vm,'beforeCreate')
  initInjections(vm)
  <!-- 初始化data -->
  initState(vm)
  initProvide(vm)
  callHook(vm,'created')

  if(vm.$options.el){
    vm.$mount(vm.$options.el)
  }
}
```

## 2.Vue 实例挂载的实现

```js
const mount = Vue.prototype.$mount //1.缓存原型上的$mount方法
Vue.prototype.$mount = function (el, hydrating) {
  //2.重新定义$mount方法
  el = el && query(el)
  const options = this.$options
  if (!options._render) {
    //3.如果没有定义render方法，会把el或者template字符串转换成render方法
    let template = options.template
    if (template) {
      if (typeof template === 'string') {
        if (template.chartAt(0) === '#') {
          template = idToTemplate(template)
        }
      } else if (template.nodeType) {
        template = template.innerHTML
      }
    } else if (el) {
      template = getOuterHTML(el)
    }
    if (template) {
      const { render, staticRenderFns } = compileToFunctions(
        //4.将tempalte转换成render方法
        template,
        {
          shouldDecodeNewlines,
          shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments,
        },
        this
      )
      options.render = render
      options.staticRenderFns = staticRenderFns
    }
  }
  return mount.call(this, el, hydrating)
}
```

```js
Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}
```

```js
export function mountComponent(vm, el, hydrating) {
  vm.$el = el
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode
  }
  callHook(vm, 'beforeMount')
  let updateComponent
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
  } else {
    updateComponent = () => {
      //vm._render生成虚拟Node,然后调用vm._update更新DOM
      vm._update(vm._render(), hydrating)
    }
  }
  new Watcher( //渲染watch
    vm,
    updateComponent,
    noop,
    {
      before() {
        if (vm._isMounted) {
          callHook(vm, 'beforeUpdate')
        }
      },
    },
    true
  )
  hydrating = false
  if ((vm.$vnode = null)) {
    //vm.$vnode实例的父虚拟Node
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
```
