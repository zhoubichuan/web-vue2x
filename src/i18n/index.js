import VueI18n from "vue-i18n";
import cn_ZH from "./cn_ZH";
import en_US from "./en_US";

export default {
  install(Vue){
    Vue.use(VueI18n);

    const i18n = new VueI18n({
      locale: localStorage.getItem("lang") || "cn_ZH", // 语言标识
      messages: {
        cn_ZH, // 中文语言包
        en_US, // 英文语言包
      },
    });
  }
};
