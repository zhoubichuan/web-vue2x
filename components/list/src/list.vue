<template>
    <div class="resource-entry">
        <img class="left"
            src="data:image/png;base64,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"
            @click="() => handleClick('left')" />
        <img class="right"
            src="data:image/png;base64,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"
            @click="() => handleClick('right')" />
        <div class="header">
            <div class="title" @click="handleSkip">
                {{ title }}
                <img class="img"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAAAAXNSR0IArs4c6QAAAKlJREFUOE9jZCATMJKpj4E6GqWDJh1nZGBg+fnjh+/rbWUv8LkGxUaZoEmXGRgYdP4zMNz49eOHIz7NKBpFvbok2Dg49jMyMGgQ0ozhR2I1Yw0cYjTjDFVCmvFGB4rm//8vPF2fbwgLaaI1MjAwnHmyLs+UoEaynEpIE8hW6kQHMTZh9aNM0KTTDAwMJoRSDYZTQYmc4f9/jl8/f3qSlMhJyZvUyY+k2AgAu2+DFRhqgHMAAAAASUVORK5CYII=" />
            </div>
        </div>
        <div class="body" ref="body">
            <ul class="list-box">
                <li class="list-item" v-for="(item, index) in data" :key="index" @click="handleSelect(item)"></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: "VueList",
    props: {
        title: {
            type: String,
            default: ''
        },
    },
    data: {
        type: Array,
        default: () => []
    },
    methods: {
        transformSize(dis) {
            return (dis / 1920) * document.documentElement.getBoundingClientRect().width;
        },
        handleClick(tip) {
            let distance = this.$refs.box[0].clientWidth + this.transformSize(12);
            this.$refs.content.scrollBy({
                left: (tip === "left" ? -1 : 1) * distance,
                behavior: "smooth",
            });
        },
        handleSelect(item) {
            item.clickHandler && item.clickHandler();
        },
        handleSkip() {
            this.$router.push({
                path: "/xxxxx",
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.resource-entry {
    margin: 0 30px;
    height: 242px;
    border-radius: 20px;
    position: relative;
    border: 1px solid transparent;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(45deg, rgba(218, 247, 255, 1), rgba(255, 255, 255, 0.85)),
        linear-gradient(45deg,
            rgba(82.00000271201134, 218.00000220537186, 255, 1),
            rgba(82.00000271201134, 218.00000220537186, 255, 0.18000000715255737),
            rgba(82.00000271201134, 218.00000220537186, 255, 0.4000000059604645),
            rgba(82.00000271201134, 218.00000220537186, 255, 0.75));

    .left {
        position: absolute;
        left: 0;
        top: 102px;
        width: 28px;
        height: 92px;
        cursor: pointer;
        z-index: 1;
    }

    .right {
        position: absolute;
        right: 0;
        top: 102px;
        width: 28px;
        height: 92px;
        cursor: pointer;
        z-index: 1;
    }

    .header {
        display: flex;
        margin: 0 0 12px 20px;
        padding-top: 16px;

        .title {
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 24px;
            color: #1c5292;
            cursor: pointer;

            .u3-icon {
                margin-left: 4px;
            }
        }

        .img {
            height: 20px;
            width: 14px;
            margin-left: 4px;
        }
    }

    .content {
        white-space: nowrap;
        overflow: auto hidden;
        padding-bottom: 19px;
        margin: 0 20px;

        &::-webkit-scrollbar-track-piece {
            background: transparent;
        }

        &::-webkit-scrollbar {
            width: 100px;
            height: 8px;
            background-color: transparent;
            cursor: pointer;
        }

        &::-webkit-scrollbar-thumb {
            -webkit-border-radius: 5px !important;
            border-radius: 100px 100px 100px 100px;
            background: #b1daff;
            border: none;
            cursor: pointer;
        }

        .link-list {
            height: 150px;

            .link-item {
                width: 201px;
                height: 150px;
                background-image: linear-gradient(45deg, rgba(184, 240, 255, 1), rgba(255, 255, 255, 0.9)),
                    linear-gradient(45deg,
                        rgba(82.00000271201134, 218.00000220537186, 255, 1),
                        rgba(82.00000271201134, 218.00000220537186, 255, 0.18000000715255737),
                        rgba(82.00000271201134, 218.00000220537186, 255, 0.4000000059604645),
                        rgba(82.00000271201134, 218.00000220537186, 255, 0.75));
                border-radius: 16px 16px 16px 16px;
                margin-left: 12px;
                display: inline-block;
                position: relative;
                overflow: hidden;
                cursor: pointer;

                &:first-child {
                    margin-left: 0;
                }

                &.no-border {
                    border: none;
                }

                .img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }

                .box {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    background: rgba(0, 0, 0, 0.2);
                    padding: 10px;
                    box-sizing: border-box;

                    .text {
                        font-weight: 400;
                        font-size: 18px;
                        color: #ffffff;
                        line-height: 27px;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        word-break: break-all;
                        white-space: break-spaces;
                    }
                }
            }
        }
    }
}
</style>
