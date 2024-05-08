<template>
  <form class="vue-form">
    <slot></slot>
  </form>
</template>
  <script>
export default {
  name: "VueForm",
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-form {
  margin: 10px 0;
}
</style>