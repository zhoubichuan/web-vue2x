import Guide from "./src/guide";
Guide.install = function (Vue) {
    Vue.component(Guide.name, Guide);
};
export default Guide;
// 1.支持svg复杂形状
// 2.回调函数支持dom操作
// 3.支持窗口大小变化
