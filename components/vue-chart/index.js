import Chart from './src/vue-chart.vue'
/* istanbul ignore next */
Chart.install = function (Vue) {
  Vue.component(Chart.name, Chart)
}
export default Chart
