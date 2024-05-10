<template>
  <form class="vue-form">
    <slot></slot>
  </form>
</template>
  <script>
export default {
  name: "VueForm",
  provide() {
    return {
      form: this,
    }
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  data() {
    return {
      fields: [],
    };
  },
  created() {
    this.$on("on-form-item-add", (field) => {
      if (field) this.fields.push(field);
    });
    this.$on("on-form-item-remove", (filed) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    });
  },
};
</script>

<style lang="scss" scoped>
.vue-form {
  margin: 10px 0;
}
</style>