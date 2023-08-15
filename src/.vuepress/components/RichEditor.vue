<template>
  <div id="ck-editer">
    <ckeditor v-bind="$attrs" v-on="$listeners" :editor="editor"></ckeditor>
  </div>
</template>
  
<script>
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
export default {
  data() {
    return {
      editor: DecoupledEditor,
    };
  },
};
</script>

<style lang="less">
.document-editor {
  border: 1px solid var(--ck-color-base-border);
  border-radius: var(--ck-border-radius);
  display: flex;
  flex-flow: column nowrap;
}
.ck.ck-toolbar {
  z-index: 1;
  box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.2);
  border-bottom: 1px solid var(--ck-color-toolbar-border);
  border: 0;
  border-radius: 0;
}
.ck.ck-content {
  min-height: 300px;
  line-height: normal;
}
</style>