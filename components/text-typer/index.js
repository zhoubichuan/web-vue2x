import Typer from './src/typer.vue'
/* istanbul ignore next */
Typer.install = function (Vue) {
  Vue.component(Typer.name, Typer)
}
export default Typer
