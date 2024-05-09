<template>
  <div class="vue-button-group" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "VueButtonGroup",
};
</script>
<style lang="scss" scoped>
.vue-button-group {
  display: inline-block;
  padding: 5px 20px;
  border: 1px solid gray;
  border-radius: 4px;
}
</style>