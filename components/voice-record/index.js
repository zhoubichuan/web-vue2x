// import Record from './src/record.vue'
/* istanbul ignore next */
Record.install = function (Vue) {
  Vue.component(Record.name, () => import("./src/record.vue"))
}
export default Record
