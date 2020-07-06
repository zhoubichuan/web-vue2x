---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 二、Vue 组件精讲

## 1.Vue 组件的三个 API：porps、event、slot

### 1.属性 prop

写通用组件时，props 最好用对象的写法，这样可以针对每个属性设置类型、默认值或自定义校验属性的值

```vue
<template>
  <button :class="'i-button-size' + size" :disabled="disabled"></button>
</template>
<script>
// 判断参数是否是其中之一
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

export default {
  props: {
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"])
      },
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
```

使用组件

```vue
<template>
  <i-button size="large"></i-button>
  <i-button disabled></i-button>
</template>
```

组件中定义了两个属性：尺寸 size 和是否禁用 disabled。其中 size 使用 validator 进行了值得自定义验证，如果传入其他的值会抛出警告。

在使用组件时，也可以传入一些标准的 html 特性，比如 id、class

```vue
<template>
  <i-button id="btn1" class="btn-submit"></i-button>
</template>
```

这样的 html 特性，在组件内的 button 元素上会继承，并不需要在 props 里再次定义，这个特性是默认支持的，如果不期望开启，在组件选项里配置 inheritAttrs:false 就可以禁用了。

### 2.插槽 slot

### 3.自定义事件 event

```vue
<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  methods: {
    handleClick(event) {
      this.$emit("on-click", event)
    },
  },
}
</script>
```

父级使用

```vue
<i-button @on-click="handleClick"></i-button>
```

上面的 click 事件，是在组件内部的 button 元素上声明的，还有另一种方法，直接在父级声明，但为了区分原生事件还是自定义事件，要用到事件修饰符.native，所以上面的示例也可以这样写

```vue
<i-button @click.native="handleClick"></i-button>
```

### 3.组件的通信

## 2.递归组件与动态组件

## 3.vue 的构造器

## 4.组件的通信
