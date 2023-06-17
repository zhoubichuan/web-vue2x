import vuex from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import modules from "./modules";

export default {
  install(Vue) {
    Vue.use(vuex);

    new vuex.Store({
      state,
      getters,
      mutations,
      actions,
      modules,
    });
  },
};
