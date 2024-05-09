import Component from './src/component.vue'
/* istanbul ignore next */
Component.install = function (Vue) {
  Vue.component(Component.name, Component)
}
export default Component
