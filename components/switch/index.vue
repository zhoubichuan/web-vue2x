<!-- <template>
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
</script> -->

<template>
    <div class="web-switch" :class="component">
        <template v-if="component === 'icon-text'">
            <img class="icon" :src="src ? src : `./${icon}.png`" @click="handleSelect" />
            <span class="text" @click="handleSelect">{{ text }}</span>
        </template>
        <template v-else>
            <span class="text" @click="handleSelect">{{ text }}</span>
            <img class="icon" :src="src ? src : require(`./${icon}.png`)" @click="handleSelect" />
        </template>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "WebSwitch",
    data() {
        return {};
    },
    props: {
        component: {
            type: String,
            default: "icon-text",
        },
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
    methods: {
        handleSelect() {
            this.$emit("select");
        },
    },
    computed: {},
};
</script>
<style lang="scss" socped>
.web-switch {
    &.text-icon {
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
    &.icon-text {
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
}
</style>
