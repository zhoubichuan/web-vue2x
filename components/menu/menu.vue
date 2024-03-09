<template>
  <ul class="menu">
    <slot></slot>
  </ul>
</template>
<script>
import SubMenu from "./sub-menu";
import MenuItem from "./menu-item";
export default {
  name: "VueMenu", //可以使用递归组件
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
<style lang="scss" scoped>
.menu {
  cursor: pointer;
}
</style>