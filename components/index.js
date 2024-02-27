import fitImage from "./fit-image/image";
import button from "./button/button";
// import RichEditor from "./rich/rich-editor";
import VideoPlayer from "./video-player/video";
// import PreviewPdf from "./pdf/preview-pdf";
import alert from "./alert/alert";
import component from "./component/component";
import textOverflow from './text-overflow/overflow'
import table from "./table";
import dialog from "./dialog";
import radar from "./radar";
import themeRiver from "./themeRiver";
import treemap from "./treemap";
import menu from "./menu";
import sunburst from "./sunburst";
import display from "./display/display";
import pie from "./pie";
import select from "./select";
import scatter from "./scatter";
import tree from "./tree";
import input from './input'
import form from './form'
let components = {
  fitImage,
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
  textOverflow,
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
