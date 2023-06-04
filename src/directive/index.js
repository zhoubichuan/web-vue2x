let target = {
  lazy: require("./lazy.js").default,
  split: require("./split.js").default,
};
export default {
  install(Vue) {
    Object.keys(target).forEach((key) => {
      target[key](Vue);
    });
  },
};
