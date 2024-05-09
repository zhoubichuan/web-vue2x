<template>
  <input
    class="input"
    type="text"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>

<script>
import Emitter from "../../emitter.js";
export default {
  name: "VueInput",
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    value(value) {
      this.currentValue = val;
    },
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("VueFormItem", "on-form-change", value);
    },
    handleBlur() {
      this.dispatch("VueFormItem", "on-from-blur", this.currentValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.input{
  height: 20px;
  width: 100%;
}
</style>