import VueI18n from "vue-i18n";
import cn_ZH from "./cn_ZH";
import en_US from "./en_US";
let lang = "cn_ZH";
try {
  // lang = localStorage.getItem("lang");
} catch (error) {
  console.log(error);
}
export default {
  install(Vue) {
    Vue.use(VueI18n);

    const i18n = new VueI18n({
      locale: lang || "cn_ZH", // 语言标识
      messages: {
        cn_ZH, // 中文语言包
        en_US, // 英文语言包
      },
    });
  },
};
