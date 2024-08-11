<template>
  <div v-if="value < steps.length" class="web-guide">
    <div class="content-mask">
      <svg class="mask">
        <defs>
          <mask id="path" class="mask">
            <rect class="mask" fill="white"></rect>
            <template v-if="steps[value].path">
              <path v-for="(item, index) in lightAreas" :key="index" :d="d" fill="black" />
            </template>
            <template v-else>
              <rect v-for="(item, index) in lightAreas" :key="index" :x="item.x" :y="item.y" :width="item.width"
                :height="item.height" :rx="item.radius" fill="black" />
            </template>
          </mask>
        </defs>
        <rect class="mask" fill="rgba(0, 0, 0, 0.7)" mask="url(#path)"></rect>
      </svg>
      <div class="content-box" ref="content" :style="`left:${positions.left}px;top:${positions.top}px`">
        <div class="title">{{ steps[value].popover.title }}</div>
        <div class="description">{{ steps[value].popover.description }}</div>
        <div class="bottom">
          <span class="left">{{ value + 1 }}/{{ steps.length }}</span>
          <div class="right">
            <span class="skip" @click="handleSkip">跳过</span>
            <div class="next" @click="handleClick">下一步</div>
          </div>
        </div>
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
      this.index++
      return (dis / 1920) * document.documentElement.getBoundingClientRect().width;
    },
    getDomInfo(index) {
      this.lightAreas = [];
      let target = this.steps[index];
      let offset = [0, 0];
      if (target.xyOffset) {
        const x = this.transformSize(target.xyOffset[0]);
        const y = this.transformSize(target.xyOffset[1]);
        offset = [x, y];
      }
      let rx = 0;
      if (target.rx) {
        rx = this.transformSize(target.rx);
      }
      if (target.index) {
        for (let i = 0; i < target.index.length; i++) {
          const dom = document.querySelectorAll(target.element)[target.index[i]];
          const { x, y, width, height } = dom.getBoundingClientRect();
          const radius = parseFloat(window.getComputedStyle(dom).getPropertyValue("border-radius") || 0);
          this.lightAreas.push({
            x,
            y,
            width: width + offset[0],
            height: height + offset[1],
            radius: rx || radius,
            class: target.class,
          });
        }
      } else {
        const dom = document.querySelector(target.element);
        const { x, y, width, height } = dom.getBoundingClientRect();
        const radius = parseFloat(window.getComputedStyle(dom).getPropertyValue("border-radius") || 0);
        this.lightAreas.push({
          x,
          y,
          width: width + offset[0],
          height: height + offset[1],
          radius: rx || radius,
          class: target.class,
        });
      }
      if (target.path) {
        let { x, y } = this.lightAreas[0]
        this.index = 0;
        let d = target.path.replace(/(\d+(\.\d+)?)/g, (match) => {
          return +this.transformSize(match) + [+y, +x][this.index % 2]
        });
        this.d = d;
      }

      if (this.lightAreas.length) {
        this.lightAreas.forEach((item, j) => {
          const { x, y, width, height } = item;
          const box = this.$refs.content.getBoundingClientRect();
          const padding = this.transformSize(31);
          switch (target.popover.side) {
            case "left":
              this.positions = { top: y, left: x - box.width - padding };
              break;
            case "right":
              this.positions = { top: y, left: x + width + padding };
              break;
            case "top":
              this.positions = { top: y - height, left: x + width + padding };
              break;
            case "bottom":
              this.positions = { top: y + box.height, left: x + width + padding };
              break;
          }
        });
      }
    },
    handleClick() {
      if (this.value < this.steps.length - 1) {
        this.$emit("input", this.value + 1);
        this.getDomInfo(this.value + 1);
      } else {
        this.handleSkip();
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
    }
    if (this.appendToBody) {
      document.body.appendChild(this.$el);
      this.getDomInfo(0);
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
      font-weight: 500;
      font-size: 26px;
      color: #ffffff;
    }

    .description {
      font-weight: 400;
      font-size: 24px;
      color: #ffffff;
    }

    .bottom {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;

      .left {
        font-weight: 400;
        font-size: 20px;
        color: #ffffff;
      }

      .right {
        font-weight: 400;
        font-size: 20px;
        color: #ffffff;

        .skip {
          cursor: pointer;
        }

        .next {
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
        }
      }
    }
  }
}
</style>