// 通过该文件，把需要用的组件进行全局的注册，因为在markdown中的文件不能使用import引入组件，必须要提前注册好全局的组件
import TableRender from '../senior/4.component/TableRender.vue';
import xminder from './xmind.vue';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueECharts from 'vue-echarts' //注册图表

export default ({
    Vue
}) => {
    Vue.component('TableRender', TableRender);
    Vue.component('xminder', xminder);
    Vue.use(Element)
    Vue.component('chart', VueECharts)
}