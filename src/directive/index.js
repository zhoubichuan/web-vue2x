let target = {
  // lazy: require("./lazy.js").default,
  split: require("./split.js").default,
  // drag: require("./drag.js"),
  // screen: require("./screen.js").default,
  // copy: require("./copy.js").default,
  // waves: require("./waves.js").default,
  // perm: require("./perm.js").default,
  // backtop: require("./backtop.js").default,
  // ellipsis: require("./ellipsis.js").default,
  // throttle: require("./throttle.js").default,
  // waterMarker: require("./waterMarker.js").default,
};
export default {
  install(Vue) {
    Object.keys(target).forEach((key) => {
      target[key](Vue);
    });
  },
};
