import Image from './src/image.vue'
/* istanbul ignore next */
Image.install = function (Vue) {
  Vue.Image(Image.name, Image)
}
export default Image
