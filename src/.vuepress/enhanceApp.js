// 通过该文件，把需要用的组件进行全局的注册，因为在markdown中的文件不能使用import引入组件，必须要提前注册好全局的组件
import TableRender from '../senior/4.component/TableRender.vue';

export default ({
    Vue
}) => {
    Vue.component('TableRender', TableRender);
}
// 昨天发现同时注册多个组件的时候好像有问题，只好换一种方式来实现，将组件通过一个文件抛出，然后使用Vue.use去完成组件的注册
// import components from '../../src/components/index.js';
// const customPlugin = {};
// customPlugin.install = function (Vue, options = {}) {
//     const { components } = options;
//     for (let key in components) {
//         if (Object.prototype.hasOwnProperty.call(components, key)) {
//             Vue.component(key, components[key]);
//         }
//     }
// }

// export default ({
//     Vue
// }) => {
//     Vue.use(customPlugin ,{ components })
// }    