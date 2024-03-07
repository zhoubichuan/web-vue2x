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
// import VoiceAssistant from "./voice-assistant/VoiceAssistant";
import themeRiver from "./themeRiver";
import menu from "./menu";
import sunburst from "./sunburst";
import display from "./display/display";
import typer from "./text-typer/typer";
// import record from "./voice-record/record";
import select from "./select";
import scatter from "./scatter";
import tree from "./tree/tree";
import input from './input/input'
import form from './form/form'
import formItem from './form/form-item'
let components = {
  fitImage,
  // RichEditor,
  VideoPlayer,
  // PreviewPdf,
  // table,
  // dialog,
  component,
  // VoiceAssistant,
  // themeRiver,
  // menu,
  button,
  // sunburst,
  alert,
  display,
  typer,
  form,
  formItem,
  // record,
  // select,
  // scatter,
  tree,
  textOverflow,
  input,
};
export default {
  install(Vue) {
    Vue.component('VoiceAssistant', () => import("./voice-assistant/VoiceAssistant"));
    Vue.component('VueRecord', () => import("./voice-record/record"));
    for (let key in components) {
      let item = components[key]
      Vue.component(item.name, item);
    }
  },
};
