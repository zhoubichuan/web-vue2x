<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Emitter from "../../emitter.js";
export default {
  name: "VueFormItem",
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  mixins: [Emitter],
  mounted() {
    if (this.prop) {
      this.dispatch("VueForm", "on-form-item-add", this);
      this.setRules();
    }
  },
  beforeDestroy() {
    if (this.prop) {
      this.dispatch("VueForm", "on-form-item-remove", this);
    }
  },
  methods: {
    setRules() {
      this.$on("on-form-blur", this.onFieldBlur);
      this.$on("on-form-change", this.onFieldChange);
    },
    onFieldBlur() {
      if (typeof this.validate === "function") {
        this.validate("blur");
      }
    },
    onFieldChange() {
      if (typeof this.validate === "function") {
        this.validate("change");
      }
    },
  },
};
</script>
