export default {
    broadcast(componentName, eventName, params) {
        this.$children.forEach((child) => {
            const name = child.$options.name
            if (name === componentName) {
                child.$emit.apply(child, [eventName].concat(params))
            } else {
                broadcast.apply(child, [componentName, eventName].concat([params]))
            }
        })
    }
}