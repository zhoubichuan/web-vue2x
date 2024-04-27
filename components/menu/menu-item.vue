<template>
  <li>
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