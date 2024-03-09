<template>
    <label>
      <span>
        <input
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
  export default {
    name: "VueCheckbox",
    props: {
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
      }
    },
    methods: {
      change(event) {
        if (this.disabled) {
          return false
        }
  
        const checked = event.target.checked
        this.currentValue = checked
  
        const value = checked ? this.trueValue : this.falseValue
        this.$emit("input", value)
        this.$emit("on-change", value)
      },
    },
  }
  </script>