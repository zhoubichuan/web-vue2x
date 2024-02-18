<template>
  <component
    :is="remote"
    v-if="remote"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
import Vue from "vue/dist/vue.common.js";
import { loadModule } from "vue3-sfc-loader/dist/vue2-sfc-loader.js";
export default {
  name: "AsyncComponent",
  inheritAttrs: false,
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      remote: null,
    };
  },
  watch: {
    url: {
      immediate: true,
      handler(url) {
        url && this.load(url);
      },
    },
  },
  methods: {
    // 加载
    async load(url) {
      const com = await loadModule(url, {
        moduleCache: {
          vue: Vue,
        },
        // 获取文件
        async getFile(url) {
          const res = await fetch(url);
          if (!res.ok) {
            throw Object.assign(new Error(`${res.statusText}  ${url}`), {
              res,
            });
          }
          return {
            getContentData: (asBinary) =>
              asBinary ? res.arrayBuffer() : res.text(),
          };
        },
        // 添加样式
        addStyle(textContent) {
          const style = Object.assign(document.createElement("style"), {
            textContent,
          });
          const ref = document.head.getElementsByTagName("style")[0] || null;
          document.head.insertBefore(style, ref);
        },
      });
      this.remote = com;
    },
  },
};
</script>