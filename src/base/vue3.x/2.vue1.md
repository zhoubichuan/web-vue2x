---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 二.Vue3.x（组件通信）

## 1. props

## 2. \$emit

## 3. expose / ref

```js
// Child.vue
<script setup>
  import { defineExpose } from "vue"
  defineExpose({
      childName: "这是子组件的属性",
      someMethod(){
          console.log("这是子组件的方法")
      }
  })
</script>
```

```vue
// Parent.vue 注意 ref="comp"
<template>
  <child ref="comp"></child>
  <button @click="handlerClick">按钮</button>
</template>
<script setup>
import child from "./child.vue";
import { ref } from "vue";
const comp = ref(null);
const handlerClick = () => {
  console.log(comp.value.childName); // 获取子组件对外暴露的属性
  comp.value.someMethod(); // 调用子组件对外暴露的方法
};
</script>
```

## 4. attrs

## 5. v-model

## 6. provide / inject

## 7. Vuex

## 8.mitt

- 1.首先全局引入

```js{4,5}
import { createApp } from "vue";
const app = createApp({});
import mitt from "mitt";
app.config.globalProperties.$bus = mitt();
app.provide("$bus", $bus);
```

- 2.订阅数据

```js
...
setup(){
  const $bus = inject("$bus")
  $bus.on('customEvent', () => console.log('i got customEvent')
}
...
```

- 3.发布数据

```js
...
setup(){
  const $bus = inject("$bus")
  $bus.emit("customEvent");
}
...
```
