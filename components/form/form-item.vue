<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "VueFormItem",
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
};
</script>