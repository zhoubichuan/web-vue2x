<template>
  <label>
    <span>
      <input
        v-if="group"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        v-model="model"
        @change="change"
      />
      <input
        v-else
        type="checkbox"
        :disabled="disabled"
        :checked="currentValue"
        @change="change"
      />
    </span>
    <slot></slot>
  </label>
</template>

<script>
import Emitter from "../../emitter.js";
import { findComponentUpward } from "../../assist.js";
export default {
  name: "VueCheckbox",
  mixins: [Emitter],
  props: {
    label: {
      type: [String, Number, Boolean],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number, Boolean],
      default: false,
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true,
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false,
    },
  },
  data() {
    return {
      currentValue: this.value,
      model: [],
      group: false,
      parent: null,
    };
  },
  watch: {
    value(value) {
      if (value === this.trueValue || value === this.falseValue) {
        this.updateMode();
      } else {
        throw `Value should be trueValue of falseValue`;
      }
    },
  },
  methods: {
    updateModel() {
      this.currentValue = this.value === this.trueValue;
    },
    change(event) {
      if (this.disabled) {
        return false;
      }
      const checked = event.target.checked;
      this.currentValue = checked;
      const value = checked ? this.trueValue : this.falseValue;
      this.$emit("input", value);
      if (this.group) {
        this.parent.change(this.model);
      } else {
        this.$emit("on-change", value);
        this.dispatch("VueFormItem", "on-form-change", value);
      }
    },
  },
  mounted() {
    this.parent = findComponentUpward(this, "VueCheckboxGroup");
    if (this.parent) {
      this.group = true;
    }
    if (this.group) {
      this.parent.updateModel(true);
    } else {
      this.updateModel();
    }
  },
};
</script>