---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-主题
  - name: keywords
    content: vuepress,最新技术文档,vuepress主题
---

# 七十九、MessageBox

## 1.实现一个简单的 MessageBox

- Message.vue

```vue
<template>
  <div class="messages" v-if="messages.length">
    <div v-for="m in messages" :key="m.id">
      {{ m.message }}
    </div>
  </div>
</template>
<script>
export default {
  name: "child",
  data() {
    return { messages: [] }
  },
  mounted() {
    this.id = 0
  },
  methods: {
    add(options) {
      let id = this.id++
      let layer = { ...options, id }
      this.messages.push(layer)
      layer.timer = setTimeout(() => {
        this.remove(layer)
      }, options.duration)
    },
    remove(layer) {
      clearTimeout(layer.timer)
      this.messages = this.messages.filter(
        (messages) => messages.id !== layer.id
      )
    },
  },
}
</script>
```

- Message.js

```js
import Vue from "vue"
import MessageComponent from "./Message.vue"
let getInstance = () => {
  let vm = new Vue({
    render: (h) => h(MessageComponent),
  }).$mount()
  document.body.appendChild(vm.$el)
  let component = vm.$children[0]
  return {
    add(options) {
      component.add(options)
    },
  }
}
let instance
let getInst = () => {
  instance = instance || getInstance()
  return instance
}
const Message = {
  info(options) {
    getInst().add(options)
  },
  warn() {},
  success() {},
  error() {},
}
export { Message }
let _Vue
export default {
  install(Vue, options) {
    if (!_Vue) {
      _Vue = Vue
      let $message = {}
      Object.keys(Message).forEach((type) => {
        $message[type] = Message[type]
      })
      Vue.prototype.$message = $message
    }
    Vue.mixin({
      beforeCreate() {
        if (this.$options.info) {
          this._info = this.$options.info
        } else {
          this._info = this.$parent && this.$parent._info
        }
      },
    })
  },
}
```

- demo.vue

```vue
<template>
  <div>
    <button @click="showMessage">弹框</button>
  </div>
</template>
<script>
import Vue from "vue"
import Message from "@/public_components/Message"
Vue.use(Message, { duration: 1000 })
export default {
  name: "parent",
  mounted() {
    console.log(this._info)
  },
  methods: {
    showMessage() {
      this.$message.info({
        message: "错误提示",
        duration: 3000,
      })
    },
  },
}
</script>
```
