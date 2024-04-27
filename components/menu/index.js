import MenuItem from "./menu/menu-item";
import Menu from "./menu/menu";
import ResubMenu from "./menu/resub-menu";
import SubMenu from "./menu/sub-menu";
/* istanbul ignore next */
Menu.install = function (Vue) {
  Vue.component(ResubMenu.name, ResubMenu)
  Vue.component(SubMenu.name, SubMenu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(Menu.name, Menu)
}
export default Menu
