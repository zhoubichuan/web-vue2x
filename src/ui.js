// import 'static/css/normalize.css'
// import 'static/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import WebElementui from 'web-elementui'
import WebVue from '../components/index.js'
export default {
  install (Vue) {
    Vue.use(ElementUI)
    Vue.use(WebElementui)
    Vue.use(WebVue)
  }
}
