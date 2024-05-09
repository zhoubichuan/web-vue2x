import FormItem from '../form/src/form-item.vue'
/* istanbul ignore next */
FormItem.install = function (Vue) {
  Vue.Form(FormItem.name, FormItem)
}
export default FormItem
