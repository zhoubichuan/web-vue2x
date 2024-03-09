<template>
  <SubMenu>
    <template #title>
      {{ data.title }}
    </template>
    <div v-for="(child, index) in data.children" :key="index">
      <MenuItem v-if="!child.children">{{ child.title }}</MenuItem>
      <ReSub v-else :data="child"></ReSub>
    </div>
  </SubMenu>
</template>
<script>
import SubMenu from "./sub-menu";
import MenuItem from "./menu-item";
export default {
  name: "VueResubMenu", //可以使用递归组件
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