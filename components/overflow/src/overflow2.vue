<template>
  <div class="c-text-hide">
    <input
      :id="`group-members_exp${itemData.id}`"
      class="group_class"
      type="checkbox"
    />
    <div :ref="`content${itemData.id}`" class="more-text">
      <label
        v-if="itemData.isExpand"
        class="more-btn cur"
        :for="`group-members_exp${itemData.id}`"
        @click="handleToggleChange($event, itemData)"
      >
        <span class="text">{{ itemData.isShow ? "收起" : "展开" }}</span>
        <i class="el-icon-arrow-down" />
      </label>
      {{ itemData.content }}
      <span v-if="itemData.isShow"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
      >
    </div>
  </div>
</template>
    
<script>
export default {
  name: "TextOverflow2",
  props: {
    textData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    lineNumber: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      lineHeight: 31,
      itemData: {},
    };
  },
  mounted() {
    this.itemData = Object.assign({}, { ...this.textData });
    this.summaryHeight(this.itemData);
  },
  methods: {
    getFontSize(data) {
      return (window.innerWidth / 1920) * data * 100;
    },
    handleToggleChange(event, val) {
      val.isShow = !val.isShow;
      this.itemData = Object.assign({}, this.itemData, { ...val });
      this.$emit("toggleChange", this.itemData);
    },
    getWidth(txt, widht) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.font = this.getFontSize(0.24) + "px Arial";
      return ctx.measureText(txt).width;
    },
    textline(txt, width) {
      const font = this.getFontSize(0.24) + "px";
      if (txt) {
        const txts = txt.split("\n");
        let line = 0;
        for (var key in txts) {
          line += Math.ceil(this.getWidth(txts[key], font) / width);
        }
        return line;
      }
    },
    summaryHeight(itemData) {
      this.$nextTick(() => {
        const lineWidth = this.$refs[`content${itemData.id}`].clientWidth;
        const txt = this.$refs[`content${itemData.id}`].innerText;
        const width = this.getWidth(txt, "24px");
        const line = this.textline(txt, lineWidth);
        if (line >= this.lineNumber) {
          if (width > this.lineNumber * lineWidth - 100) {
            this.itemData = Object.assign({}, this.itemData, {
              isExpand: true,
            });
          } else {
            this.itemData = Object.assign({}, this.itemData, {
              isExpand: false,
            });
          }
        }
        this.$emit("toggleChange", this.itemData);
      });
    },
  },
};
</script>
  
<style lang="scss" scoped>
.c-text-hide {
  display: flex;
  font-size: 24px;
  width: 100%;
  .more-text {
    width: 100%;
    font-size: 24px;
    overflow: hidden;
    line-height: 1.3;
    position: relative;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
    text-align: justify;
    line-break: anywhere;
    width: 100%;
    overflow: ellipsis;
    -webkit-line-clamp: 6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    position: relative;
    .more-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      background-image: linear-gradient(
        88.05deg,
        rgba(255, 255, 255, 0) 0%,
        #fff 25%,
        #fff 100%
      );
      &::before {
        content: "...";
        margin-right: 8px;
        margin-left: 40px;
        transform: translateX(-100%);
      }
      .text {
        color: #7583c9;
        font-size: 24px;
        cursor: pointer;
      }
      .el-icon-arrow-down::before {
        font-size: 16px;
        margin-right: 3px;
      }
    }
  }
  .group_class {
    display: none;
    &:checked + .more-text {
      -webkit-line-clamp: 999;
      max-height: none !important;
    }
    &:checked + .more-text .more-btn {
      margin-top: -12px;
      .text {
        color: #7583c9;
        font-size: 24px;
      }
    }
    &:checked + .more-text .more-btn .el-icon-arrow-down {
      transform: rotate(180deg);
    }
    &:checked + .more-text .more-btn::before {
      display: none;
    }
    &:checked + .more-text::after {
      display: none;
    }
  }
}
</style>
