// import 'static/css/normalize.css'
// import 'static/css/reset.css'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import WebElementui from "web-elementui";
import ckeditor from "@ckeditor/ckeditor5-vue2";
import "@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn";
export default {
  install(Vue) {
    Vue.use(ElementUI);
    Vue.use(WebElementui);
    Vue.use(ckeditor);
  },
};
