<template>
  <li class="item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "VueMenuItem",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: block;
}
</style>