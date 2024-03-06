<template>
  <form>
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