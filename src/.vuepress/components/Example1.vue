<template>
  <div>
    <button @click="handleChange('A')">显示 a 组件</button>
    <button @click="handleChange('B')">显示 b 组件</button>
    <button @click="handleChange('C')">显示 c 组件</button>
    <component :is="component"></component>
    <!-- 这里的is动态绑定的是个组件对象(Object)，它直接指向 a/b/c 三个组件中的一个 -->
  </div>
</template>
  <script>
export default {
  components: {
    A: () => import("./child1/a.vue"),
    B: () => import("./child1/b.vue"),
    C: () => import("./child1/c.vue"),
  },
  data() {
    return {
      component: 'A'
    };
  },
  methods: {
    handleChange(component) {
      this.component = component;
    },
  },
};
</script>