import fitImage from "./fit-image/index.js";
import button from "./button/index.js";
import ButtonGroup from "./button-group/index.js";
// import RichEditor from "./rich/rich-editor";
import VideoPlayer from "./video-player/index.js";
// import PreviewPdf from "./pdf/preview-pdf";
import alert from "./alert/index.js";
import component from "./component/index.js";
import textOverflow from './text-overflow/index.js'
import textOverflow2 from './text-overflow2/index.js'
import table from "./table/index.js";
import checkbox from "./checkbox/index.js";
import CheckboxGroup from "./checkbox-group/index.js";
import menu from "./menu/index.js";
import display from "./display/index.js";
import typer from "./text-typer/index.js";
// import record from "./voice-record/record";
import vueChart from "./vue-chart/index.js";
import tree from "./tree/index.js";
import input from './input/index.js'
import form from './form/index.js'
import FormItem from './form-item/index.js'
import List from './list/index.js'
let components = [
  fitImage,
  // RichEditor,
  VideoPlayer,
  // PreviewPdf,
  table,
  // dialog,
  component,
  // VoiceAssistant,
  checkbox,
  CheckboxGroup,
  menu,
  button,
  ButtonGroup,
  alert,
  display,
  typer,
  form,
  FormItem,
  // record,
  // select,
  vueChart,
  tree,
  textOverflow,
  textOverflow2,
  input,
  List
];
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  // Vue.use(InfiniteScroll)
  // Vue.use(Loading.directive)

  // Vue.prototype.$ELEMENT = {
  //   size: opts.size || '',
  //   zIndex: opts.zIndex || 2000
  // }

  // Vue.prototype.$loading = Loading.service
  // Vue.prototype.$msgbox = MessageBox
  // Vue.prototype.$alert = MessageBox.alert
  // Vue.prototype.$confirm = MessageBox.confirm
  // Vue.prototype.$prompt = MessageBox.prompt
  // Vue.prototype.$notify = Notification
  // Vue.prototype.$message = Message
}
export default {
  install
};
