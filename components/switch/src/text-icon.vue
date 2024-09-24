<template>
    <div class="web-switch">
        <span class="text" @click="$emit('select')">{{ text }}</span>
        <img class="icon" :src="src ? src : require(`./${icon}.png`)" @click="$emit('select')" />
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "VueSwitch",
    data() {
        return {};
    },
    props: {
        src: {
            type: String,
            default: "",
        },
        icon: {
            type: String,
            default: "row",
        },
        text: {
            type: String,
            default: "切换",
        },
    },
    methods: {},
    computed: {},
};
</script>
<style lang="scss" socped>
.web-switch {
    & > .text {
        font-weight: 400;
        font-size: 16px;
        color: #3a94fe;
    }
    & > .icon {
        width: 10px;
        height: 10px;
        margin-left: 4px;
    }
}
</style>
