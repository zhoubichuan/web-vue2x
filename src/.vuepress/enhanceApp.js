// 通过该文件，把需要用的组件进行全局的注册，因为在markdown中的文件不能使用import引入组件，必须要提前注册好全局的组件
import config from "@/config";
import ui from "@/ui";
import directive from "@/directive";
import store from "@/store";
import i18n from "@/i18n";
export default ({ Vue }) => {
  Vue.use(directive);
  Vue.use(ui);
  Vue.use(config);
  Vue.use(store);
  Vue.use(i18n);
};
