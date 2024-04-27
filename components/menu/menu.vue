<template>
  <ul class="menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "VueMenu",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  cursor: pointer;
}
</style>