import Alert from "./src/alert.vue"
import Vue from "vue"

Alert.newInstance = (properties) => {
    const props = properties || {}
    const Instance = new Vue({
        data: props,
        render(h) {
            return h(Alert, {
                props: props,
            })
        },
    })
    const component = Instance.$mount()
    document.body.appendChild(component.$el)
    const alert = Instance.$children[0]
    return {
        add(noticeProps) {
            alert.add(noticeProps)
        },
        remove(name) {
            alert.remove(name)
        },
    }
}
Alert.install = function (Vue) {
    Vue.component(Alert.name, Alert)
}
export default Alert