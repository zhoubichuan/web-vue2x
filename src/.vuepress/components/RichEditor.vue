<template>
  <div id="ck-editer">
    <ckeditor v-bind="$attrs" v-on="$listeners" :editor="editor"></ckeditor>
    <slot></slot>
  </div>
</template>
  
<script>
import "@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn";
import ckeditor from "@ckeditor/ckeditor5-vue2";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import Vue from "vue";
Vue.use(ckeditor); //全局注册
export default {
  data() {
    return {
      editor: DecoupledEditor,
    };
  }
};
</script>

<style lang="less" scoped>
::v-deep.document-editor {
  border: 1px solid var(--ck-color-base-border);
  border-radius: var(--ck-border-radius);
  display: flex;
  flex-flow: column nowrap;
}

::v-deep.ck.ck-toolbar {
  z-index: 1;
  box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.2);
  border-bottom: 1px solid var(--ck-color-toolbar-border);
  border: 0;
  border-radius: 0;
}

::v-deep.ck.ck-content {
  min-height: 300px;
  line-height: normal;
}
.btn{
  display: inherit;
  margin: 10px auto;
}
</style>