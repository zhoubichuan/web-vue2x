<script>
import { get, set, debounce } from "lodash";
export default {
  name: "VueChart",
  abstract: true,
  render() {
    let vnode = this.$slots.default[0];
    if (vnode) {
      let event = get(vnode, "data.on.click");
      if (typeof event === "function") {
        set(vnode, "data.on.click", debounce(event, 1000));
      }
      this.$nextTick(function () {
        console.log(vnode.elm);
        set(vnode, "elm.style.backgroundColor", "red");
      });
    }
    return vnode;
  },
};
</script>
