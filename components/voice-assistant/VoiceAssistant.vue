
<template>
  <div class="voiceAss" @click="voiceStateChange">
    <div class="handle">
      <div class="img">
        <i :class="voiceState ? 'el-icon-phone-outline' : 'el-icon-phone'" />
        <span>{{ tip }}</span>
      </div>
      <canvas class="canvas" id="canvas"></canvas>
    </div>
    <div class="message">
      <div class="list" v-for="(item, index) in messagelist" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>
   
  <script>
import VoiceCore from "voice-core";
export default {
  name: "VoiceAssistant",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      voiceState: false,
      tip: "语音助手关闭",
      appId: "d57fa021",
      apiKey: "bdb9f90684f6e2be35b3d7fe687b78ff",
      voice: null,
      messagelist: [],
    };
  },
  mounted() {},
  methods: {
    voiceCoreInit(list) {
      this.voice = new VoiceCore(
        {
          onClose: () => {
            this.tip = "语音助手已经关闭";
          },
          onError: (err) => {
            console.info(err);
          },
          matchFailed: (e) => {
            console.info(e);
          },
          textResponse: ({ result }) => {
            this.messagelist.push(result);
          },
          voiceValue: (e) => {
            const canvas = document.getElementById("canvas");
            if (canvas) {
              const canvasCtx = canvas.getContext("2d");
              canvasCtx.fillStyle = "#8FCE5E";
              canvasCtx.clearRect(0, 0, 300, 300);
              if (e > 1) {
                canvasCtx.fillRect(0, 0, 300, 75 + e * 0.75);
              }
            }
          },
          onStart: () => {
            this.tip = "语音助手已经开启";
          },
        },
        this.voiceCommandData(["打开", "切换", "转到", "开启"], list),
        this.appId,
        this.apiKey
      );
    },

    // 生成语音指令
    voiceCommandData(command, list) {
      if (!list || !Array.isArray(list)) {
        return null;
      }
      const textData = [
        {
          id: "exit",
          text: "结束|关闭|结束语音助手|关闭语音助手|退出",
          success: this.voiceSuccessCallback,
        },
      ];
      this.arraysFlatten(list).forEach((item) => {
        if (item.children.length < 1) {
          const text = command
            .map((val) => {
              if (item.name.indexOf("-") > -1) {
                let outText = item.name;
                outText = outText.replace("-", "");
                outText = outText.replace("/", "");
                return val + outText;
              }
              return val + item.name;
            })
            .join("|");
          textData.push({
            id: item.value,
            text,
            success: this.voiceSuccessCallback,
            ...item,
          });
        }
      });
      return textData;
    },

    // 语音匹配成功后调用方法
    voiceSuccessCallback(item) {
      if (item.id === "exit" && this.voice) {
        this.voice.stop();
        this.voiceState = false;
        return;
      }
      if (this.props.callback && typeof this.props.callback === "function") {
        this.props.callback(item);
      }
    },

    // 数组扁平化方法
    arraysFlatten(list, parent) {
      let outputData = [];
      list.forEach((item) => {
        if (item.children.length < 1) {
          outputData.push(
            parent
              ? {
                  ...item,
                  parentId: parent.id,
                }
              : item
          );
        } else {
          outputData = outputData.concat(
            this.arraysFlatten(item.children, item)
          );
        }
      });
      // 对输出数据进行内部去重
      return outputData;
    },

    // 开关语音助手方法
    voiceStateChange() {
      if (!this.voice) {
        return;
      }
      if (!this.voiceState) {
        this.voice.start();
      } else {
        this.voice.stop();
      }
      this.voiceState = !this.voiceState;
    },
  },
  watch: {
    list: {
      handler(val, oldval) {
        this.voiceCoreInit(val);
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
   
<style scoped lang="less">
.voiceAss {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  .handle {
    width: 300px;
    height: 200px;
    position: relative;
    cursor: pointer;
    .img {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 101;
      font-size: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .canvas {
      position: absolute;
      background: #ffffff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      z-index: 100;
      transform: rotateX(180deg);
    }
  }
  .message {
    flex: 1;
  }
}
</style>