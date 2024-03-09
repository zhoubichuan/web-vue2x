<template>
  <div>
    <div class="title" @click="change">
      <slot name="title"></slot>
    </div>
    <div v-show="flag" class="sub">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "VueSubMenu", //可以使用递归组件
  data() {
    return { flag: false };
  },
  methods: {
    change() {
      this.flag = !this.flag;
    },
  },
};
</script>
<style>
.sub {
  padding-left: 10px;
}
</style>