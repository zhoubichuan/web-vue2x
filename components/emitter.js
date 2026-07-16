export default {
    dispatch(componentName, eventName, params) {
        let parent = this.$parent
        let name = parent && parent.$options.name

        while (parent && (!name || name !== componentName)) {
            parent = parent.$parent
            if (parent) name = parent.$options.name
        }

        if (parent) {
            parent.$emit.apply(parent, [eventName].concat(params))
        }
    },
    broadcast(componentName, eventName, params) {
        this.$children.forEach((child) => {
            const name = child.$options.name
            if (name === componentName) {
                child.$emit.apply(child, [eventName].concat(params))
            } else {
                this.broadcast.apply(child, [componentName, eventName].concat([params]))
            }
        })
    }
}
