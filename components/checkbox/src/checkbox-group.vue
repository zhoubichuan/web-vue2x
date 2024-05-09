<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { findComponentsDownward } from "../../assist.js"
import Emitter from "../../emitter.js"

export default {
  name: "VueCheckboxGroup",
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentValue: this.value,
      childrens: [],
    }
  },
  methods: {
    updateModel(update) {
      this.childrens = findComponentsDownward(this, "iCheckbox")
      if (this.childrens) {
        const { value } = this
        this.childrens.forEach((child) => {
          child.model = value

          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0
            child.group = true
          }
        })
      }
    },
    change(data) {
      this.currentValue = data
      this.$emit("input", data)
      this.$emit("on-change", data)
      this.dispatch("VueFormItem", "on-form-change", data)
    },
  },
  mounted() {
    this.updateModel(true)
  },
  watch: {
    value() {
      this.updateModel(true)
    },
  },
}
</script>