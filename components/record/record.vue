<template>
  <div class="Page">
    <el-form
      style="padding: 0 80px"
      ref="mainFormRef"
      :model="main_form"
      label-width="100px"
      :rules="rules"
    >
      <el-form-item label="声纹采集：" prop="file">
        <el-select
          :disabled="voiceStatus"
          style="width: 200px"
          v-model="main_form.chooseMicDeviceId"
          placeholder="请选择麦克风"
        >
          <el-option
            v-for="item in Mic"
            :key="item.deviceId"
            :label="item.label"
            :value="item.deviceId"
          >
          </el-option>
        </el-select>
        <div class="voiceGather" v-if="main_form.chooseMicDeviceId != ''">
          <el-button style="margin-top: 20px" @click="voiceInput">{{
            voiceStatus ? "取消录音" : "开始录音"
          }}</el-button>
          <!-- 正在录制 -->
          <template v-if="voiceStatus">
            <div class="bo">
              <div
                v-for="(item, index) in RMSList"
                :key="index"
                :style="{ height: (item / 100) * 40 + 'px' }"
                class="RMS"
              ></div>
            </div>
          </template>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import RecordRTC from "recordrtc";

export default {
  name: "VueRecord",
  data() {
    return {
      recorder: "",
      voiceStatus: false, // 是否正在录音
      main_form: {
        chooseMicDeviceId: "", // 选择的麦克风id
      },
      Mic: [], // 可选择的麦克风
      rules: {
        file: [{ required: true, message: "不能为空", trigger: "blur" }],
      },
      RMSList: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
      ],
    };
  },
  created() {},
  mounted() {
    this.getMic();
  },
  methods: {
    // 获取当前页面可以选择的麦克风
    getMic() {
      let that = this;
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // 弹框获取麦克风
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
          navigator.mediaDevices.enumerateDevices().then(function (devices) {
            devices.forEach(function (device) {
              console.log(devices);
              if (device.kind === "audioinput") {
                // 麦克风
                if (
                  device.deviceId != "default" &&
                  device.deviceId != "communications"
                ) {
                  that.Mic.push(device);
                }
              }
            });
          });
          stream.getTracks().forEach((track) => track.stop());
        });
      }
    },

    // 语音输入
    voiceInput() {
      // 正在语音输入
      if (this.voiceStatus) {
        this.stopRecord(); // 停止输入
      } else {
        // 开启语音输入
        this.startRecord();
      }
    },

    // 开始录音
    startRecord() {
      var that = this;
      this.voiceStatus = true;
      // mediaDevices可提供对相机和麦克风等媒体输入设备的连接访问
      window.navigator.mediaDevices
        .getUserMedia({ audio: { deviceId: this.main_form.chooseMicDeviceId } })
        .then((stream) => {
          this.stream = stream;
          this.getVoice();

          this.recorder = RecordRTC(stream, {
            type: "audio",
            mimeType: "audio/wav",
            recorderType: RecordRTC.StereoAudioRecorder,
            desiredSampRate: 16000,
            numberOfAudioChannels: 1, // 单声道
            timeSlice: 1000,
            // bufferSize: 4096, // 缓存大小
            ondataavailable: this.sendData,
          });
          this.recorder.startRecording();
        })
        .catch(function (err) {
          console.log(err);
          console.log("当前浏览器不支持开启麦克风!");
          that.voiceStatus = false;
        });
    },

    // 结束录音
    stopRecord() {
      this.voiceStatus = false;
      if (this.recorder != null) {
        let recorder = this.recorder;
        recorder.stopRecording();
        let stream = this.stream;
        clearInterval(this.timer1);
        this.RMSList = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0,
        ];
        stream.getAudioTracks().forEach((track) => track.stop());
      }
    },

    // 获取音量值大小
    getVoice() {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      // 将麦克风的声音输入这个对象
      const mediaStreamSource = audioContext.createMediaStreamSource(
        this.stream
      );
      // 创建分析节点
      const analyserNode = audioContext.createAnalyser();
      // 连接节点
      mediaStreamSource.connect(analyserNode);
      // 可以实时听到麦克风采集的声音
      // analyserNode.connect(audioContext.destination)

      // 获取音量数据
      const dataArray = new Uint8Array(analyserNode.frequencyBinCount);

      function getVolume() {
        analyserNode.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }
        // 计算平均音量
        const averageVolume = sum / dataArray.length;
        return averageVolume;
      }

      // 每隔一段时间获取一次音量
      this.timer1 = setInterval(() => {
        const volume = getVolume();
        console.log("音量:", Math.round(volume));
        // 在这里可以根据需要进行相应的处理
        this.RMSList.unshift(Math.round(volume));
        this.RMSList.value.pop();
      }, 100);
    },

    // 每timeSlice执行一次
    sendData(blob) {
      var BB = new Blob([blob], { type: "audio/wav; codecs=opus" });
      // var audioURL = window.URL.createObjectURL(BB)

      // 播放
      // const audio = document.createElement('audio')
      // audio.controls = true // 音频是否显示控件
      // audio.src = audioURL
      // audio.play()

      // 下载
      // let a = document.createElement("a");
      // a.href = audioURL;
      // a.download = '测试';
      // a.click();
      // // 释放这个临时的对象url
      // window.URL.revokeObjectURL(audioURL);

      let file = new window.File([BB], "测试.wav");
      console.log(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.Page {
  padding: 20px;
}
</style>