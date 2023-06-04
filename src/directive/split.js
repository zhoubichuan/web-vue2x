export default (Vue, options = {}) => {
  Vue.directive("split", {
    update(el, bindings, vnode) {
      let ctx = vnode.context; // 获取当前输入框所在的上下文
      ctx[bindings.expression] = el.value.slice(0, 3); // 去当前上下文中 获取 msg 把输入的内容 截取3个放到 msg中
    },
    // 只当用户绑定时生效
    bind(el, bindings, vnode) {
      let ctx = vnode.context; // 获取当前输入框所在的上下文
      ctx[bindings.expression] = el.value.slice(0, 3); // 去当前上下文中 获取 msg 把输入的内容 截取3个放到 msg中
    },
  });
};
