// import VoiceAssistant from './src/VoiceAssistant.vue'
/* istanbul ignore next */
VoiceAssistant.install = function (Vue) {
  Vue.component(VoiceAssistant.name, () => import("./src/VoiceAssistant.vue"))
}
export default VoiceAssistant
