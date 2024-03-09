<template>
  <li>
    <slot></slot>
  </li>
</template>
<script>
import SubMenu from "./sub-menu";
import MenuItem from "./menu-item";
export default {
  name: "VueMenuItem", //可以使用递归组件
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    SubMenu,
    MenuItem,
  },
};
</script>