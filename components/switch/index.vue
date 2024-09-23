<template>
    <component :is="component" v-bind="$attrs">
    </component>
</template>
<script>
export default {
    name: "VueSwitch",
    props: {
        component: {
            type: String,
            default: "icon-text",
        },
    },
    components: {
        'icon-text': () => import('./src/icon-text.vue'),
        'text-icon': () => import('./src/text-icon.vue')
    },

};
</script>