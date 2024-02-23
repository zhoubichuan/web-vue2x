import image from "./fit-image/image";
// import RichEditor from "./RichEditor";
import VideoPlayer from "./VideoPlayer";
// import PreviewPdf from "./PreviewPdf";
import table from "./table";
import dialog from "./dialog";
import cascader from "./cascader";
import radar from "./radar";
import themeRiver from "./themeRiver";
import treemap from "./treemap";
import button from "./button";
import menu from "./menu";
import sunburst from "./sunburst";
import alert from "./alert";
import display from "./display";
import pie from "./pie";
import select from "./select";
import scatter from "./scatter";
import tree from "./tree";
import polar from './polar'
import input from './input'
import form from './form'
let components = {
  image,
  // RichEditor,
  VideoPlayer,
  // PreviewPdf,
  // table,
  // dialog,
  // cascader,
  // radar,
  // themeRiver,
  // treemap,
  // menu,
  button,
  // sunburst,
  // alert,
  // display,
  // pie,
  // select,
  // scatter,
  // tree,
  // polar,
  // input,
  // form
};
export default {
  install(Vue) {
    for (let key in components) {
      let item = components[key]
      Vue.component(item.name, item);
    }
  },
};
