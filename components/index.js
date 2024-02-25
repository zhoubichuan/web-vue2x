import image from "./fit-image/image";
import button from "./button/button";
// import RichEditor from "./rich/rich-editor";
import VideoPlayer from "./video/video-player";
// import PreviewPdf from "./pdf/preview-pdf";
import table from "./table";
import dialog from "./dialog";
import component from "./component/component";
import radar from "./radar";
import themeRiver from "./themeRiver";
import treemap from "./treemap";
import menu from "./menu";
import sunburst from "./sunburst";
import alert from "./alert/alert";
import display from "./display/display";
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
  component,
  // radar,
  // themeRiver,
  // treemap,
  // menu,
  button,
  // sunburst,
  alert,
  display,
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
