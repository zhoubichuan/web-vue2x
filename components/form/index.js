import Form from './src/form.vue'
/* istanbul ignore next */
Form.install = function (Vue) {
  Vue.Form(Form.name, Form)
}
export default Form
