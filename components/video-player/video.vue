<template>
  <div
    class="m-video"
    :class="{ 'u-video-hover': !hidden }"
  >
    <video
      ref="veo"
      :style="`object-fit: ${zoom};`"
      :src="src"
      :poster="veoPoster"
      width="100%"
      height="100%"
      :autoplay="autoplay"
      :controls="!originPlay && controls"
      :loop="loop"
      :muted="autoplay || muted"
      :preload="preload"
      crossorigin="anonymous"
      @loadeddata="poster ? () => false : getPoster()"
      @pause="showPlay ? onPause() : () => false"
      @playing="showPlay ? onPlaying() : () => false"
      @click.prevent.once="onPlay"
      v-bind="$attrs"
    >
      您的浏览器不支持video标签。
    </video>
    <svg
      v-show="originPlay || showPlay"
      class="u-play"
      :class="{ hidden: hidden }"
      :style="`width: ${playWidth}px; height: ${playWidth}px;`"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
      ></path>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M15.25 12L9.75 8.75V15.25L15.25 12Z"
      ></path>
    </svg>
  </div>
</template>
<script>
export default {
  name: "VideoPlayer",
  props: {
    src: {
      // 视频文件url，必传，支持网络地址 https 和相对地址 require('@/assets/files/Bao.mp4')
      type: String,
      required: true,
      default: "",
    },
    poster: {
      // 视频封面url，支持网络地址 https 和相对地址 require('@/assets/images/Bao.jpg')
      type: String,
      default: "",
    },
    second: {
      type: Number,
      default: 0.5,
    },
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 450,
    },
    /*
      参考 MDN 自动播放指南：https://developer.mozilla.org/zh-CN/docs/Web/Media/Autoplay_guide
      Autoplay 功能
      据新政策，媒体内容将在满足以下至少一个的条件下自动播放：
      1.音频被静音或其音量设置为 0
      2.用户和网页已有交互行为（包括点击、触摸、按下某个键等等）
      3.网站已被列入白名单；如果浏览器确定用户经常与媒体互动，这可能会自动发生，也可能通过首选项或其他用户界面功能手动发生
      4.自动播放策略应用到<iframe>或者其文档上
      autoplay：由于目前在最新版的Chrome浏览器（以及所有以Chromium为内核的浏览器）中，
      已不再允许自动播放音频和视频。就算你为video或audio标签设置了autoplay属性也一样不能自动播放！
      解决方法：设置视频 autoplay 时，视频必须设置为静音 muted: true 即可实现自动播放，
      然后用户可以使用控制栏开启声音，类似某宝商品自动播放的宣传视频逻辑
    */
    autoplay: {
      // 视频就绪后是否马上播放
      type: Boolean,
      default: false,
    },
    controls: {
      // 是否向用户显示控件，比如进度条，全屏
      type: Boolean,
      default: true,
    },
    loop: {
      // 视频播放完成后，是否循环播放
      type: Boolean,
      default: false,
    },
    muted: {
      // 是否静音
      type: Boolean,
      default: false,
    },
    preload: {
      // 是否在页面加载后载入视频，如果设置了autoplay属性，则preload将被忽略；
      type: String,
      default: "auto", // auto:一旦页面加载，则开始加载视频; metadata:当页面加载后仅加载视频的元数据 none:页面加载后不应加载视频
    },
    showPlay: {
      // 播放暂停时是否显示播放器中间的暂停图标
      type: Boolean,
      default: true,
    },
    playWidth: {
      // 中间播放暂停按钮的边长
      type: Number,
      default: 96,
    },
    zoom: {
      // video的poster默认图片和视频内容缩放规则
      type: String,
      default: "contain", // none:(默认)保存原有内容，不进行缩放; fill:不保持原有比例，内容拉伸填充整个内容容器; contain:保存原有比例，内容以包含方式缩放; cover:保存原有比例，内容以覆盖方式缩放
    },
  },
  data() {
    return {
      veoPoster: this.poster,
      originPlay: true,
      hidden: false,
    };
  },
  mounted() {
    if (this.autoplay) {
      this.hidden = true;
      this.originPlay = false;
    }
    /*
      自定义设置播放速度，经测试：
      在vue2中需设置：this.$refs.veo.playbackRate = 2
      在vue3中需设置：veo.value.defaultPlaybackRate = 2
    */
    // this.$refs.veo.playbackRate = 2
  },
  methods: {
    /*
      loadeddata 事件在媒体当前播放位置的视频帧（通常是第一帧）加载完成后触发
      preload为none时不会触发
    */
    getPoster() {
      // 在未设置封面时，自动获取视频0.5s对应帧作为视频封面
      // 由于不少视频第一帧为黑屏，故设置视频开始播放时间为0.5s，即取该时刻帧作为封面图
      this.$refs.veo.currentTime = this.second;
      // 创建canvas元素
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      // canvas画图
      canvas.width = this.$refs.veo.videoWidth;
      canvas.height = this.$refs.veo.videoHeight;
      ctx.drawImage(this.$refs.veo, 0, 0, canvas.width, canvas.height);
      // 把canvas转成base64编码格式
      this.veoPoster = canvas.toDataURL("image/png");
    },
    onPlay() {
      if (this.originPlay) {
        this.$refs.veo.currentTime = 0;
        this.originPlay = false;
      }
      if (this.autoplay) {
        this.$refs.veo.pause();
      } else {
        this.hidden = true;
        this.$refs.veo.play();
      }
    },
    onPause() {
      this.hidden = false;
    },
    onPlaying() {
      this.hidden = true;
    },
  },
};
</script>
<style lang="less" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.m-video {
  display: inline-block;
  position: relative;
  background: #000;
  cursor: pointer;
  width:100%;
  height: 100%;
  .u-play {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    fill: none;
    color: #fff;
    pointer-events: none;
    opacity: 0.7;
    transition: opacity 0.3s;
    path {
      stroke: #fff;
    }
  }
  .hidden {
    opacity: 0;
  }
}
.u-video-hover {
  &:hover {
    .u-play {
      opacity: 0.9;
    }
  }
}
</style>