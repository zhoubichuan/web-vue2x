import type { GlobalAPI } from 'types/global-api'
import { mergeOptions } from '../util/index'
// #region snippet1
export function initMixin(Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
// #endregion snippet1