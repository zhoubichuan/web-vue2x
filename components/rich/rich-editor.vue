<template>
  <div class="ck-editer">
    <ckeditor v-bind="$attrs" v-on="$listeners" :editor="editor"></ckeditor>
    <web-button class="save" @click="handleSave">保存</web-button>
  </div>
</template>
  
<script>
import "@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
export default {
  name: "RichEditor",
  data() {
    return {
      editor: DecoupledEditor,
    };
  },
  methods: {
    handleSave() {
      this.$emit("save");
    },
  },
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
.save {
  display: inherit;
  margin: 10px auto;
}
</style>