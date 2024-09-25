<template>
    <div class="web-switch">
        <img class="icon" :src="src ? src : require(`./${icon}.png`)" @click="$emit('select')" />
        <span class="text" @click="$emit('select')">{{ text }}</span>
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
    display: inline-block;
    vertical-align: middle;
    width: 58px;
    height: 29px;
    background: #d0edff;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    & > .icon {
        width: 18px;
        height: 18px;
        display: inline-block;
        vertical-align: middle;
        margin-bottom: -0.02rem;
    }
    & > .text {
        font-weight: 400;
        font-size: 15px;
        color: #3a94fe;
    }
}
</style>
