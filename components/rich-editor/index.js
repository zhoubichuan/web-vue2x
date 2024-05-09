import Rich from './src/rich.vue'
/* istanbul ignore next */
Rich.install = function (Vue) {
  Vue.component(Rich.name, Rich)
}
export default Rich
