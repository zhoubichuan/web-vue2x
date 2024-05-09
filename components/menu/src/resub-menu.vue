<template>
  <sub-menu>
    <template #title>
      {{ data.title }}
    </template>
    <div v-for="(child, index) in data.children" :key="index">
      <menu-item v-if="!child.children">{{ child.title }}</menu-item>
      <vue-resub-menu v-else :data="child"></vue-resub-menu> <!-- 2.添加限定条件 -->
    </div>
  </sub-menu>
</template>

<script>
import SubMenu from "./sub-menu";
import MenuItem from "./menu-item";
export default {
  name: "VueResubMenu", // 1.添加名称标识
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