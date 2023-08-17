import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import WebElementui from "web-elementui";

export default {
  install(Vue) {
    Vue.use(ElementUI);
    Vue.use(WebElementui);
  },
};
