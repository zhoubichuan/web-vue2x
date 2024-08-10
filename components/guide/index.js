import Guide from './src/vue-guide.vue'
/* istanbul ignore next */
Guide.install = function (Vue) {
  Vue.component(Guide.name, Guide)
}
export default Guide
