<template>
  <div>
    <ClientOnly>
      <a href="/Example1.vue">下载</a>
      <div class="container">
        <slot></slot>
      </div>
      <div>
        <!-- <code>{{ require("./Example1.vue").default }}</code> -->
      </div>
    </ClientOnly>
  </div>
</template>
<script>
export default {
  name: "Container",
  data() {
    return {
      show: false,
    };
  },
  methods: {},
  mounted() {
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 200px;
  width: 100%;
  height: 200px;
  border: 1px solid lightcoral;
  border-radius: 5px;
  padding: 5px;
}
</style>
