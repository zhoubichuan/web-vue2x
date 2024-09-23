<template>
    <component :is="component" v-bind="$attrs">
    </component>
</template>
<script>
export default {
    name: "VueOverflow",
    props: {
        component: {
            type: String,
            default: "overflow1",
        },
    },
    components: {
        overflow1: () => import('./src/overflow1.vue'),
        overflow2: () => import('./src/overflow2.vue')
    },

};
</script>