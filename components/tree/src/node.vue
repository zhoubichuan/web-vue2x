<template>
  <ul class="tree-ul">
    <li class="tree-li">
      <span class="tree-expand" @click="handleExpand">
        <span v-if="data.children && data.children.length && !data.expand">{{
          "+"
        }}</span>
        <span v-if="data.children && data.children.length && data.expand">{{
          "-"
        }}</span>
      </span>
      <el-checkbox
        v-if="showCheckbox"
        :value="data.checked"
        @input="handleCheck"
      />
      <span>{{ data.title }}</span>
      <template v-if="data.expand && data.children.length">
        <tree-node
          v-for="(item, index) in data.children"
          :key="index"
          :data="item"
          :show-checkbox="showCheckbox"
        />
      </template>
    </li>
  </ul>
</template>
<script>
function findComponentUpward(context, componentName) {
  let parent = context.$parent;
  let name = parent.$options.name;
  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}
export default {
  name: "TreeNode",
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
        tree: findComponentUpward(this, "VueTree"),
    };
  },
  methods: {
    handleExpand() {
      this.$set(this.data, "expand", !this.data.expand);
      if (this.tree) {
        this.tree.emitEvent("on-toggle-expand", this.data);
      }
    },
  },
};
</script>
<style>
.tree-ul .tree-li {
  list-style: none;
  padding-left: 10px;
}
.tree-expand {
  cursor: pointer;
}
</style>