<template>
  <div ref="code">
    <ClientOnly>
      <!-- <a href="/Example1.vue">下载</a> -->
      <div class="container" v-if="show">
        <slot>
          <iframe
            ref="iframe"
            :src="url"
            width="100%"
            height="520"
            frameborder="no"
            border="0"
            scrolling="yes"
          ></iframe>
        </slot>
      </div>
      <div v-else>...正在加载中</div>
      <div>
        <!-- <code>{{ require("./Example1.vue").default }}</code> -->
      </div>
    </ClientOnly>
  </div>
</template>
<script>
export default {
  name: "Container",
  props: {
    url: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleScroll() {
      let judge =
        window.innerHeight + window.scrollY > this.$refs.code.offsetTop + 100;
      if (judge) {
        this.show = true;
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
    handleLoading() {
      var parFrame = this.refs.iframe;
      if (parFrame.attachEvent) {
        parFrame.attachEvent("onload", function () {
          console.log("ie"); //IE，不包含edge
        });
      } else {
        parFrame.onload = function () {
          console.log("iframe加载完成");
        };
      }
    },
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  border: 1px solid lightcoral;
  border-radius: 5px;
  padding: 5px;
}
</style>
