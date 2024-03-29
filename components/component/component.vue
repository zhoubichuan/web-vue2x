<template>
  <component :is="tagName" v-bind="tagProps">
    <slot></slot>
  </component>
</template>
  <script>
export default {
  name: "VueComponent",
  props: {
    to: {
      type: String,
      default: "",
    },
    target: {
      type: String,
      default: "_self",
    },
  },
  computed: {
    tagName() {
      return this.to === "" ? "button" : "a"; // 动态渲染不同的标签
    },
    tagProps() {
      // 如果是链接，把这些属性绑定到component上
      let props = {};
      if (this.to) {
        props = {
          target: this.target,
          href: this.to,
        };
      }
      return props;
    },
  },
};
</script>