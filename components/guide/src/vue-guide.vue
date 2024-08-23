<template>
    <div v-if="value < steps.length" class="web-guide">
        <div class="content-mask" :class="active">
            <svg class="mask">
                <defs>
                    <mask id="path" class="mask">
                        <rect class="mask" fill="white" />
                        <template v-if="steps[value].path">
                            <path
                                v-for="(item, index) in lightAreas"
                                :x="item.x"
                                :y="item.y"
                                :key="index"
                                :d="d"
                                fill="black"
                            />
                        </template>
                        <template v-else>
                            <rect
                                v-for="(item, index) in lightAreas"
                                :key="index"
                                :x="item.x"
                                :y="item.y"
                                :width="item.width"
                                :height="item.height"
                                :rx="item.radius"
                                fill="black"
                            />
                        </template>
                    </mask>
                </defs>
                <rect
                    v-show="lightAreas.length && (lightAreas[0].x || lightAreas[0].y)"
                    class="mask"
                    fill="rgba(0, 0, 0, 0.7)"
                    mask="url(#path)"
                />
            </svg>
            <div
                v-show="lightAreas.length && (lightAreas[0].x || lightAreas[0].y)"
                class="content-box"
                ref="content"
                :style="`left:${positions.left}px;top:${positions.top}px`"
            >
                <div class="title">{{ steps[value].popover.title }}</div>
                <div class="description">{{ steps[value].popover.description }}</div>
                <div class="bottom">
                    <span class="left">{{ value + 1 }}/{{ steps.length }}</span>
                    <div class="right">
                        <span class="skip" @click="handleSkip">跳过</span>
                        <div v-if="value" class="pre" @click="handlePreSteps">
                            {{ "上一步" }}
                        </div>
                        <div class="next" @click="handleNextSteps">
                            {{ value + 1 === steps.length ? "完成" : "下一步" }}
                        </div>
                    </div>
                </div>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAOCAYAAABth09nAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAElSURBVEiJzda9UcNAEIbhd/HZMxCpBHeAQuPIVAAlkIMZqQJZFRjGEKMSoAMimVAlqARnMAhpCbAjxqCfFcMX3+7tM3czd8I2k+Xr+GA08CodHgv4oOcCY/5XcpBn1fJJ0c3bh8uyUDYA8lPVZFXMRNyZoBeA9weD7okkSHGbXo6yvSvqtPGX6h25KkAkshuuTiSpCuKXUPJfVzZpO71/91H3APhtR6uZvCrktA5gl0YQ+DqdwyGRoEHT2jpR5GZ9JWHTusaQXaarcmF+1VTjdD5YtCltDQFjTAcEdISAEaYjAgwg0BFjgAAjCLTEGCHAEAINMYYIMIZATYwxAnqAAJzclYEgEd+/NTlVFafXLrHesxcIbB9OV84E8QEUzdZz99jXfp8rrHUPPx4vCwAAAABJRU5ErkJggg=="
                    :class="{ icon: true, [steps[value].popover.side]: true }"
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "VueGuide",
    data() {
        return {
            d: "",
            lightAreas: [],
            positions: {},
            index: 0,
            active: "",
        };
    },
    props: {
        value: {
            type: Number,
            default: 0,
        },
        appendToBody: {
            type: Boolean,
            default: true,
        },
        steps: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        transformSize(dis) {
            this.index++;
            return (dis / 1920) * document.documentElement.getBoundingClientRect().width;
        },
        getDomInfo(index) {
            this.lightAreas = [];
            let target = this.steps[index];
            if (target.class) {
                this.active = target.class;
            } else {
                this.active = "";
            }
            let offset = [0, 0, 0, 0];
            if (target.xyOffset) {
                const x = this.transformSize(target.xyOffset[0]);
                const y = this.transformSize(target.xyOffset[1]);
                const x2 = this.transformSize(target.xyOffset[2]);
                const y2 = this.transformSize(target.xyOffset[3]);
                offset = [x, y, x2, y2];
            }
            let rx = 0;
            if (target.rx) {
                rx = this.transformSize(target.rx);
            }
            if (target.index) {
                for (let i = 0; i < target.index.length; i++) {
                    const dom = document.querySelectorAll(target.element)[target.index[i]];
                    if (!dom) return;
                    if (target.handleBefore) {
                        target.handleBefore();
                    }
                    const { x, y, width, height } = dom.getBoundingClientRect();
                    const radius = parseFloat(window.getComputedStyle(dom).getPropertyValue("border-radius") || 0);
                    this.lightAreas.push({
                        x: x + offset[0],
                        y: y + offset[1],
                        width: width + offset[2],
                        height: height + offset[3],
                        radius: rx || radius,
                        class: target.class,
                    });
                }
            } else {
                const dom = document.querySelector(target.element);
                if (!dom) return;
                if (target.handleBefore) {
                    target.handleBefore();
                }
                const { x, y, width, height } = dom.getBoundingClientRect();
                const radius = parseFloat(window.getComputedStyle(dom).getPropertyValue("border-radius") || 0);
                this.lightAreas.push({
                    x: x + offset[0],
                    y: y + offset[1],
                    width: width + offset[2],
                    height: height + offset[3],
                    radius: rx || radius,
                    class: target.class,
                });
            }
            if (target.path) {
                let { x, y } = this.lightAreas[0];
                this.index = 0;
                let offset = [+y, +x];
                if (target.xyOffset) {
                    const x = +this.transformSize(target.xyOffset[0]);
                    const y = +this.transformSize(target.xyOffset[1]);
                    offset[0] += y;
                    offset[1] += x;
                }
                let d = target.path.replace(/(\d+(\.\d+)?)/g, (match) => {
                    return +this.transformSize(match) + offset[this.index % 2];
                });
                this.d = d;
            }

            if (this.lightAreas.length) {
                this.lightAreas.forEach((item) => {
                    const { x, y, width } = item;
                    if (!this.$refs.content) return;
                    const box = this.$refs.content.getBoundingClientRect();
                    const padding = this.transformSize(31);
                    let [ofx, ofy] = [0, 0];
                    if (target.popover.xyOffset) {
                        ofx = this.transformSize(target.popover.xyOffset[0]);
                        ofy = this.transformSize(target.popover.xyOffset[1]);
                    }
                    switch (target.popover.side) {
                        case "left":
                            this.positions = { top: y + ofy, left: x - box.width - padding - ofx };
                            break;
                        case "right":
                            this.positions = { top: y + ofy, left: x + width + padding + ofx };
                            break;
                        case "top":
                            this.positions = { top: y - box.height - this.transformSize(18), left: x };
                            break;
                        case "bottom":
                            this.positions = { top: y + ofy + box.height, left: x + width + padding };
                            break;
                    }
                });
            }
        },
        handlePreSteps() {
            this.$emit("input", this.value - 1);
            this.getDomInfo(this.value - 1);
            if (this.steps[this.value].popover.next) {
                this.steps[this.value].popover.next();
            }
        },
        handleNextSteps() {
            if (this.value < this.steps.length - 1) {
                this.$emit("input", this.value + 1);
                this.getDomInfo(this.value + 1);
            } else {
                this.handleSkip();
            }
            if (this.steps[this.value].popover.next) {
                this.steps[this.value].popover.next();
            }
        },
        handleSkip() {
            this.$emit("close");
            this.$emit("input", this.steps.length + 1);
        },
    },
    mounted() {
        window.onresize = () => {
            this.getDomInfo(this.value);
        };
        if (this.appendToBody) {
            document.body.appendChild(this.$el);
            let timer = setInterval(() => {
                if (this.lightAreas.length && this.lightAreas[0].x) {
                    clearInterval(timer);
                    timer = null;
                }
                this.getDomInfo(0);
            }, 60);
        }
    },
    destroyed() {
        if (this.appendToBody && this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
    },
};
</script>
<style lang="scss">
.web-guide {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 40000001;

    .mask {
        width: 100vw;
        height: 100vh;
    }

    .content-box {
        padding: 30px;
        position: absolute;
        left: 590px;
        top: 0;
        width: 319px;
        background: #3a94fe;
        border-radius: 20px 20px 20px 20px;
        z-index: 100000;

        .title {
            font-weight: bold;
            font-size: 26px;
            color: #ffffff;
        }

        .description {
            font-weight: 400;
            font-size: 24px;
            color: #ffffff;
            line-height: 36px;
            margin-top: 12px;
        }

        .bottom {
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left {
                font-weight: 400;
                font-size: 20px;
                color: #ffffff;
                display: inline-block;
                vertical-align: middle;
            }

            .right {
                font-weight: 400;
                font-size: 20px;
                color: #ffffff;

                .skip {
                    cursor: pointer;
                    display: inline-block;
                    vertical-align: middle;
                }
                .pre {
                    margin-left: 28px;
                    width: 92px;
                    height: 39px;
                    line-height: 39px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 343px 343px 343px 343px;
                    display: inline-block;
                    vertical-align: middle;
                    text-align: center;
                    cursor: pointer;
                    &:hover {
                        background: #3282df;
                    }
                }
                .next {
                    margin-left: 6px;
                    width: 92px;
                    height: 39px;
                    line-height: 39px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 343px 343px 343px 343px;
                    display: inline-block;
                    vertical-align: middle;
                    text-align: center;
                    cursor: pointer;
                    &:hover {
                        background: #3282df;
                    }
                }
            }
        }
        .icon {
            position: absolute;
            height: 14px;
            width: 50px;
            &.top {
                left: 50px;
                bottom: -13px;
            }
            &.right {
                top: 70px;
                left: -31px;
                transform: rotate(90deg);
            }
            &.left {
                top: 70px;
                right: -31px;
                transform: rotate(270deg);
            }
        }
    }
}
</style>
