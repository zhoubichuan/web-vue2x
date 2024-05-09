<template>
  <div class="layouts-recorder">
    <div class="circle">
      <div class="mask" @click="beginOrStopRecorder"></div>
    </div>
    开始
    <button class="stop" @click="stop">停止</button>
    <button @click="recorder.play()">回放</button>
    <audio :src="form.audioUrl" controls="controls">音频</audio>
    <div class="spectrum">
      <div class="spectrum-left">
        <span :class="{ red: this.voice >= 1 }"></span>
        <span :class="{ red: this.voice >= 2 }"></span>
        <span :class="{ red: this.voice >= 3 }"></span>
        <span :class="{ red: this.voice >= 4 }"></span>
        <span :class="{ red: this.voice >= 5 }"></span>
        <span :class="{ red: this.voice >= 6 }"></span>
        <span :class="{ red: this.voice >= 7 }"></span>
        <span :class="{ red: this.voice >= 8 }"></span>
        <span :class="{ red: this.voice >= 9 }"></span>
        <span :class="{ red: this.voice >= 10 }"></span>
      </div>
      <div class="spectrum-right">
        <span :class="{ red: this.voice >= 1 }"></span>
        <span :class="{ red: this.voice >= 2 }"></span>
        <span :class="{ red: this.voice >= 3 }"></span>
        <span :class="{ red: this.voice >= 4 }"></span>
        <span :class="{ red: this.voice >= 5 }"></span>
        <span :class="{ red: this.voice >= 6 }"></span>
        <span :class="{ red: this.voice >= 7 }"></span>
        <span :class="{ red: this.voice >= 8 }"></span>
        <span :class="{ red: this.voice >= 9 }"></span>
        <span :class="{ red: this.voice >= 10 }"></span>
      </div>
    </div>
  </div>
</template>
<script>
import recording from "./utils.js";
export default {
  name: "VueRecord",
  watch: {
    DB(newDb) {
      if (newDb >= 1 && newDb <= 20) {
        // 显示一格音谱
        this.voice = 1;
      } else if (newDb >= 21 && newDb <= 40) {
        this.voice = 2;
        // 显示二格音谱
      } else if (newDb >= 41 && newDb <= 60) {
        this.voice = 3;
        // 显示三格音谱
      } else if (newDb >= 71 && newDb <= 90) {
        this.voice = 4;
        // 显示四格音谱
      } else if (newDb >= 91 && newDb <= 120) {
        this.voice = 5;
        // 显示五格音谱
      } else if (newDb >= 121 && newDb <= 140) {
        this.voice = 6;
        // 显示六格音谱
      } else if (newDb >= 141 && newDb <= 160) {
        this.voice = 7;
        // 显示七格音谱
      } else if (newDb >= 161 && newDb <= 180) {
        this.voice = 8;
        // 显示八格音谱
      } else if (newDb >= 181 && newDb <= 200) {
        this.voice = 9;
        // 显示九格音谱
      } else if (newDb > 200) {
        this.voice = 10;
        // 显示全部音谱
      }
    },
  },
  methods: {
    clearTimer() {
      if (this.interval) {
        this.num = 60;
        clearInterval(this.interval);
      }
    },
    beginOrStopRecorder() {
      if (this.interval) {
        // 说明已经开始了录音
        this.stop();
      } else {
        this.clearTimer();
        this.startTime = new Date().getTime();
        var that = this;
        // 开始录音
        recording.get((rec) => {
          // 当首次按下时，要获取浏览器的麦克风权限，所以这时要做一个判断处理
          if (rec) {
            // 首次按下，只调用一次
            if (this.flag) {
              this.mouseEnd();
              this.flag = false;
            } else {
              this.recorder = rec;
              this.interval = setInterval(() => {
                if (this.num <= 0) {
                  this.recorder.stop();
                  this.num = 60;
                  this.clearTimer();
                } else {
                  this.num--;
                  this.time = "松开结束（" + this.num + "秒）";
                  this.recorder.start();
                  // 音频采集
                  recording.recorder.onaudioprocess = function (e) {
                    //开始处理音频
                    var buffer = e.inputBuffer.getChannelData(0); //获得缓冲区的输入音频，转换为包含了PCM通道数据的32位浮点数组
                    // 创建变量并迭代来获取最大的buffer中的音量值
                    var maxVal = 0;
                    for (var i = 0; i < buffer.length; i++) {
                      if (maxVal < buffer[i]) {
                        maxVal = buffer[i];
                      }
                    }
                    //显示音量值 在这获取到音量值
                    that.DB = parseInt(maxVal * 10000);
                  };
                }
              }, 1000);
            }
          }
        });
      }
    },
    // 停止录音的方法
    stop() {
      this.clearTimer();
      this.endTime = new Date().getTime();
      this.recorderTime = Math.round((this.endTime - this.startTime) / 1000);
      if (this.recorderTime < 1) {
        console.log("录音时间过短，请重新录入");
        return;
      }
      if (this.recorder) {
        this.recorder.stop();
        // 重置说话时间
        this.num = 60;
        this.time = "按住说话（" + this.num + "秒）";
        // 获取语音二进制文件
        let blob = this.recorder.getBlob();
        let url = URL.createObjectURL(blob);
        // 把得到的url给audio
        this.form.audioUrl = url;
        this.voice = 0;
      }
    },
  },
  data() {
    return {
      DB: 0,
      form: {
        time: "按住说话(60秒)",
        audioUrl: "",
      },
      num: 60, // 按住说话时间
      recorder: null,
      interval: "",
      audioFileList: [], // 上传语音列表
      startTime: "", // 语音开始时间
      endTime: "", // 语音结束
      recorderTime: 0, // 录音时间
      voice: 0,
    };
  },
};
</script>
<style lang="less">
.red {
  background-color: red;
}
.spectrum-left {
  span {
    display: inline-block;
  }
  span:nth-child(1) {
    width: 6px;
    height: 14px;
    border: 1px solid #000;
  }
  span:nth-child(2) {
    width: 6px;
    height: 16px;
    border: 1px solid #000;
  }
  span:nth-child(3) {
    width: 6px;
    height: 18px;
    border: 1px solid #000;
  }
  span:nth-child(4) {
    width: 6px;
    height: 20px;
    border: 1px solid #000;
  }
  span:nth-child(5) {
    width: 6px;
    height: 15px;
    border: 1px solid #000;
  }
  span:nth-child(6) {
    width: 6px;
    height: 15px;
    border: 1px solid #000;
  }
  span:nth-child(7) {
    width: 6px;
    height: 15px;
    border: 1px solid #000;
  }
  span:nth-child(8) {
    width: 6px;
    height: 18px;
    border: 1px solid #000;
  }
  span:nth-child(9) {
    width: 6px;
    height: 12px;
    border: 1px solid #000;
  }
  span:nth-child(10) {
    width: 6px;
    height: 14px;
    border: 1px solid #000;
  }
}
.layouts-recorder {
  margin-top: 30px;
}
.stop {
  margin-left: 130px;
}
.circle {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
}
.mask {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: red;
}
.active .mask {
  border-radius: 2px;
}
</style>