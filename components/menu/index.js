import MenuItem from "./src/menu-item.vue";
import Menu from "./src/menu.vue";
import ResubMenu from "./src/resub-menu.vue";
import SubMenu from "./src/sub-menu.vue";
/* istanbul ignore next */
Menu.install = function (Vue) {
  Vue.component(ResubMenu.name, ResubMenu)
  Vue.component(SubMenu.name, SubMenu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(Menu.name, Menu)
}
export default Menu
