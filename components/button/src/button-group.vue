<template>
  <div :class="{ 'button-group': justify === 'center', 'global-group': true }">
    <el-row type="flex" class="row-bg" :justify="justify">
      <el-col><slot></slot></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "VueButtonGroup",
  props: {
    justify: {
      type: String,
      default: "center",
    },
  },
  data() {
    return {
      addModalFlag: false,
    };
  },
};
</script>
<style>
.button-group {
  text-align: center;
}
.global-group {
  margin: 10px 0;
}
</style>