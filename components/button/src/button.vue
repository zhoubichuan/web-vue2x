<template>
  <div class="vue-button" :class="type" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "VueButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-button {
  display: inline-block;
  padding: 5px 20px;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
}
.default {
  background-color: #FFFFFF;
}
.primary {
  background-color: #409eff;
}
.success {
  background-color: #67C23A;
}
.warning {
  background-color: #E6A23C;
}
.danger {
  background-color: #F56C6C;
}
</style>