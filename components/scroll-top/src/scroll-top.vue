<template>
  <div
    v-if="isSmall"
    data-log-control="返回顶部"
    @click="backTop"
    class="icon-text-scroll"
    v-show="flagShow"
  >
    &nbsp;&nbsp;&nbsp;&nbsp;TOP
  </div>
  <div
    v-else
    data-log-control="返回顶部"
    @click="backTop"
    class="text-scroll"
    v-show="flagShow"
  >
    TOP
  </div>
</template>
<script>
export default {
  name: "VueScrollTop",
  props: {
    scrollWrapper: {
      require: true,
    },
    isSmall: {
      type: Boolean,
      require: false,
    },
  },
  data() {
    return {
      flagShow: false,
    };
  },
  mounted() {
    this.scrollWrapper.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    this.scrollWrapper.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    backTop() {
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5);
        this.$parent.$refs.wrap.scrollTop = this.scrollTop + ispeed;
        if (this.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      let scrollTop = this.scrollWrapper.scrollTop;
      this.scrollTop = scrollTop;
      if (this.scrollTop > 10) {
        this.flagShow = true;
      } else {
        this.flagShow = false;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.text-scroll {
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  min-width: 50px;
  height: 44px;
  color: #6994ff;
  font-size: 16px;
  border: 2px solid #6994ff;
  opacity: 1;
  border-radius: 6px;
  background: #ffffff;
  &:hover {
    cursor: pointer;
    color: #fff;
    background: #6994ff;
  }
}
.icon-text-scroll {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-around;
  padding-top: 3px;
  min-width: 80px;
  height: 44px;
  color: #6994ff;
  font-size: 16px;
  border: 2px solid #6994ff;
  opacity: 1;
  border-radius: 6px;
  background: #ffffff
    url("#ffffff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAMAAABU4iNhAAAATlBMVEUAAABgj/9ol/9qlf9ok/9pk/9olf9nk/9plP9ok/9ok/9plP9olP9ok/9olP9pk/9plP9plP9ok/9plP9plP9olP9ok/9ok/9olP9plP/158hoAAAAF3RSTlMAECAwQFBgb3CAkKCwuL/AzM/Q2ODw/CrYfgEAAAC1SURBVDjL7dTLEsIgDAXQVOqramtrtc3//6gUSkgQKCs3ejchk7NgwgwA38mu0B0R26oENtOE+CigB1wy91UZ1NmiBOcNSlDLLPVwkRnKoJFJyqGVCergi8kodfB5N+WWXBZB1ZlaXxLUQ1glxCmDJKOUQy8jVEAmP2gtIJdEWyt7AYUkattBQCkd3ZvmJGAgLR3Wi571kWAo5bRSbLehlFPIyWT+UhVI87hj0a/YjHhV8At5A1O0J0nyFXxWAAAAAElFTkSuQmCC) no-repeat 0.12rem 53%")
    no-repeat 12px 53%;
  background-size: 18px 20px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #6994ff
      url("#6994ff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAMAAABU4iNhAAAASFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////neHiwAAAAF3RSTlMAECAwQFBgb3CAkKCwuL/AzM/Q2ODw/CrYfgEAAACpSURBVDjL7dTJEsIgDAbgIHWrWu2ief83tQMlTShLTl7qfwmZfAcmzADwmxyU7ozYGQ1scc6ooCd06Y0S1inBGmWwTAUs0Qjm6QbmaICfGg3w/XLlkaUE7dPV5pahK4RFQpoySDJJOVxlggrI5IY2AnJJtPOyF1BIor4dBJQy0KNrLgJG0tNhueh1PhKMpZway3YbSzmFkszmL61CusedVL9iO+Hdwh7yBUEAJJxihvOTAAAAAElFTkSuQmCC) no-repeat 0.12rem 53%")
      no-repeat 12px 53%;
    background-size: 18px 20px;
  }
}
</style>