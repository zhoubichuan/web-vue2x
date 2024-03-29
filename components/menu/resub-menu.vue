<template>
  <sub-menu>
    <template #title>
      {{ data.title }}
    </template>
    <div v-for="(child, index) in data.children" :key="index">
      <menu-item v-if="!child.children">{{ child.title }}</menu-item>
      <vue-resub-menu v-else :data="child"></vue-resub-menu>
    </div>
  </sub-menu>
</template>
<script>
import SubMenu from "./sub-menu";
import MenuItem from "./menu-item";
export default {
  name: "VueResubMenu", //可以使用递归组件
  components: {
    SubMenu,
    MenuItem,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>