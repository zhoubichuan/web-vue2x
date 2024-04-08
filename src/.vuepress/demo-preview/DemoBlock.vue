<template>
  <div
    :key="pageIndex"
    ref="code"
    :class="{
      'demo-block': true,
      blockClass: true,
      'full-screen': open,
      hover: hovering,
    }"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div @click="pageIndex++" class="reflesh">刷新</div>
    <div @click="handleClick" class="screen">全屏/自适应</div>
    <div v-if="!show" class="content"></div>
    <div v-else :class="{ 'demo-content': true }">
      <slot name="demo"></slot>
    </div>
    <div v-if="show" class="meta" ref="meta">
      <div class="description" v-if="$slots.description">
        <slot name="description"></slot>
      </div>
      <div class="code-content">
        <slot name="source"></slot>
      </div>
    </div>
    <div
      v-if="show"
      class="demo-block-control"
      :class="{ 'is-fixed': fixedControl }"
      :style="{ width: fixedControl ? `${codeContentWidth}px` : 'unset' }"
      ref="control"
      @click="isExpanded = !isExpanded"
    >
      <transition name="arrow-slide">
        <i :class="[iconClass, { hovering: hovering }, 'icon']"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
      <span
        v-show="!copied"
        :class="['copy-action', { 'copying ': copied }]"
        @click.stop="copyCode"
        >{{ copiedText }}</span
      >
      <transition name="bounce">
        <span v-show="copied" class="copy-action copy-action-success">{{
          copiedText
        }}</span>
      </transition>
    </div>
  </div>
</template>

<script type="text/babel">
import defaultLang from "./i18n/default_lang.json";
export default {
  data() {
    return {
      show: false,
      open: false,
      hovering: false,
      copied: false,
      isExpanded: false,
      fixedControl: false,
      codeContentWidth: 0,
      scrollParent: null,
      pageIndex: 0,
    };
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    compoLang() {
      return this.options.locales || defaultLang;
    },
    langConfig() {
      return this.compoLang.filter((config) => config.lang === this.$lang)[0][
        "demo-block"
      ];
    },
    blockClass() {
      return `demo-${this.$lang} demo-${this.$router.currentRoute.path
        .split("/")
        .pop()}`;
    },
    iconClass() {
      return this.isExpanded ? "caret-top" : "caret-bottom";
    },
    controlText() {
      return this.isExpanded
        ? this.langConfig["hide-text"]
        : this.langConfig["show-text"];
    },
    copiedText() {
      return this.copied
        ? this.langConfig["copy-success"]
        : this.langConfig["copy-text"];
    },
    codeArea() {
      return this.$el.getElementsByClassName("meta")[0];
    },
    codeAreaHeight() {
      if (this.$el.getElementsByClassName("description").length > 0) {
        return (
          this.$el.getElementsByClassName("description")[0].clientHeight +
          this.$el.getElementsByClassName("code-content")[0].clientHeight +
          20
        );
      }
      return this.$el.getElementsByClassName("code-content")[0].clientHeight;
    },
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
    handleClick() {
      this.open = !this.open;
      this.show = !this.show;
      this.$nextTick(() => {
        this.show = !this.show;
      });
    },
    copyCode() {
      if (this.copied) {
        return;
      }
      const pre = this.$el.querySelectorAll("pre")[0];
      pre.setAttribute("contenteditable", "true");
      pre.focus();
      document.execCommand("selectAll", false, null);
      this.copied = document.execCommand("copy");
      pre.removeAttribute("contenteditable");
      setTimeout(() => {
        this.copied = false;
      }, 1500);
    },
    scrollHandler() {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight;
      this.$refs.control.style.left = this.fixedControl ? `${left}px` : "0";
    },
    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener("scroll", this.scrollHandler);
    },
  },
  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : "0";
      if (!val) {
        this.fixedControl = false;
        this.$refs.control.style.left = "0";
        this.removeScrollHandler();
        return;
      }
      setTimeout(() => {
        this.scrollParent = document;
        this.scrollParent &&
          this.scrollParent.addEventListener("scroll", this.scrollHandler);
        this.scrollHandler();
      }, 200);
    },
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
    this.$nextTick(() => {
      let codeContent = this.$el.getElementsByClassName("code-content")[0];
      this.codeContentWidth = this.$el.offsetWidth;
      if (this.$el.getElementsByClassName("description").length === 0) {
        if (codeContent) {
          codeContent.style.width = "100%";
          codeContent.borderRight = "none";
        }
      }
    });
  },
  beforeDestroy() {
    this.removeScrollHandler();
  },
};
</script>
<style scoped lang="less">
.demo-block {
  position: relative;
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin-top: 15px;
  margin-bottom: 15px;
  &.full-screen {
    position: fixed;
    height: 100vh !important;
    width: 100vw !important;
    left: 0;
    top: 0;
    background: white;
    z-index: 100000;
    margin: 0;
    padding: 0;
    border: none;
    .demo-content {
      padding: 24px;
      height: calc(100% - 48px);
      & > div {
        height: 100%;
        border: 1px solid red;
      }
    }
  }
  .reflesh {
    left: 24px;
    top: 0;
    // position: absolute;
    float: left;
    line-height: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 10000;
    &::before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: lightgray;
      margin-right: 10px;
    }
  }
  .screen {
    right: 24px;
    top: 0;
    // position: absolute;
    float: right;
    line-height: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 10000;
    &::before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: lightgray;
      margin-right: 10px;
    }
  }
  .content {
    height: 100%;
  }
  .demo-content {
    padding: 24px;
    & > div {
      height: 100%;
    }
  }
}

.demo-block.hover {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
}
.demo-block code {
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
}
.demo-block .demo-button {
  float: right;
}
.demo-block .meta {
  background-color: #282c34;
  border: solid 1px #ebebeb;
  border-radius: 3px;
  overflow: hidden;
  height: 0;
  transition: height 0.2s;
}
.demo-block .description {
  padding: 20px;
  box-sizing: border-box;
  border: solid 1px #ebebeb;
  border-radius: 3px;
  font-size: 14px;
  line-height: 22px;
  color: #666;
  word-break: break-word;
  margin: 10px;
  background-color: #fafafa;
}
.demo-block .demo-block-control {
  border-top: solid 1px #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #fafafa;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
}
.demo-block .demo-block-control.is-fixed {
  position: fixed;
  bottom: 0;
  width: 660px;
  z-index: 999;
}
.demo-block .demo-block-control .icon {
  font-family: element-icons !important;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
}
.demo-block .demo-block-control .caret-top::before {
  content: "";
  position: absolute;
  right: 50%;
  width: 0;
  height: 0;
  border-bottom: 6px solid #ccc;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
}
.demo-block .demo-block-control .caret-bottom::before {
  content: "";
  position: absolute;
  right: 50%;
  width: 0;
  height: 0;
  border-top: 6px solid #ccc;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
}
.demo-block .demo-block-control i {
  font-size: 16px;
  line-height: 44px;
  transition: 0.3s;
}
.demo-block .demo-block-control i.hovering {
  transform: translateX(-40px);
}
.demo-block .demo-block-control > span {
  position: absolute;
  transform: translateX(-30px);
  font-size: 14px;
  line-height: 44px;
  transition: 0.3s;
  display: inline-block;
}
.demo-block .demo-block-control .copy-action {
  right: 0px;
  color: #409eff;
}
.demo-block .demo-block-control.copying {
  transform: translateX(-44px);
}
.demo-block .demo-block-control .copy-action-success {
  color: #f5222d;
}
.demo-block .demo-block-control:hover {
  color: #409eff;
  background-color: #f9fafc;
}
.demo-block .demo-block-control .text-slide-enter,
.demo-block .demo-block-control .text-slide-leave-active {
  opacity: 0;
  transform: translateX(10px);
}
.demo-block .demo-block-control .bounce-enter-active {
  animation: bounce-in 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.demo-block .demo-block-control .control-button {
  line-height: 26px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  padding-left: 5px;
  padding-right: 25px;
}
</style>