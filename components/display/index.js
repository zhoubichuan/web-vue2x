import Display from './src/display.vue'
/* istanbul ignore next */
Display.install = function (Vue) {
  Vue.Display(Display.name, Display)
}
export default Display
