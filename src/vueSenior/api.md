---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# Vue 相关 API 详解

## 1.nextTick

nextTick 是 Vue.js 提供的一个函数，并非浏览器内置。nextTick 函数接受一个回调函数 cb,在下一个 DOM 更新循环之后执行。

```vue
<template>
  <div>
    <p v-if="show" ref="node">内容</p>
    <button @click="handleShow">显示</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    handleShow() {
      this.show = true
      console.log(this.$refs.node) // undefined
      this.$nextTick(() => {
        console.log(this.$refs.node) // <p>内容</p>
      })
    },
  },
}
</script>
```

当`show`为 true 时，p 节点还没有被渲染，打印结果为 undefined,而在 nextTick 回调里，p 已经渲染好了，这时能正确打印出节点。

在 vue 内部使用了`Promise`、`setTimeout`和`setImmediate`三种方法实现 nextTick，在不同的环境中会使用不同的方法。

## 2.v-model 语法糖

v-model 是一个语法糖，可以拆解为 props:value 和 events:input。就是说组件必须提供一个名为 value 的 prop,以及名为 input 的自定义事件，满足这两个条件，使用者就能在自定义组件上使用`v-model`。

```vue
<template>
  <div>
    <button @click="increase(-1)">减 1</button>
    <span style="color: red;padding: 6px">{{ currentValue }}</span>
    <button @click="increase(1)">加 1</button>
  </div>
</template>
<script>
export default {
  name: "InputNumber",
  props: {
    value: {
      type: Number,
    },
  },
  data() {
    return {
      currentValue: this.value,
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
  },
  methods: {
    increase(val) {
      this.currentValue += val
      this.$emit("input", this.currentValue)
    },
  },
}
</script>
```

props 一般不能再组件内修改，它是通过父级修改的，因此实现 v-model 一般会有一个`currentValue`的内部 data,初始时从 value 获取一次值，当 value 修改时，也通过 watch 监听到及时更新；组件不会修改的 value 的值，而是修改 currentValue，同时将修改的值通过自定义事件`input`派发给父组件，父组件接收到后，由父组件修改 value。所以，上面的数字选择器组件可以有下面两种方式实现。

```vue
<template>
  <InputNumber :value="value" @input="handleChange" />
</template>
<script>
import InputNumber from "../components/input-number/input-number.vue"

export default {
  components: { InputNumber },
  data() {
    return {
      value: 1,
    }
  },
  methods: {
    handleChange(val) {
      this.value = val
    },
  },
}
</script>
```

或者

```vue
<template>
  <InputNumber v-model="value" />
</template>
<script>
import InputNumber from "../components/input-number/input-number.vue"

export default {
  components: { InputNumber },
  data() {
    return {
      value: 1,
    }
  },
}
</script>
```

如果你不想用`value`和`input`这两个名字，也可以用`model`选项指定它们的名字

```vue
<template>
  <div>
    <button @click="increase(-1)">减 1</button>
    <span style="color: red;padding: 6px">{{ currentValue }}</span>
    <button @click="increase(1)">加 1</button>
  </div>
</template>
<script>
export default {
  name: "InputNumber",
  props: {
    number: {
      type: Number,
    },
  },
  model: {
    prop: "number",
    event: "change",
  },
  data() {
    return {
      currentValue: this.number,
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
  },
  methods: {
    increase(val) {
      this.currentValue += val
      this.$emit("number", this.currentValue)
    },
  },
}
</script>
```
