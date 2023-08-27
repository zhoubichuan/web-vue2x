<template>
  <div class="vue-button"><slot></slot></div>
</template>
<script>
export default {
  name: "VueButton",
};
</script>
<style lang="scss" scoped>
.vue-button {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid gray;
  border-radius: 4px;
}
</style>