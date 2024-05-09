import Table from './src/table.vue'
/* istanbul ignore next */
Table.install = function (Vue) {
  Vue.component(Table.name, Table)
}
export default Table
