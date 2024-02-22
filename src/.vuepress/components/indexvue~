<template>
  <div class="demo-page">
    <!-- <div class="handle">
      <input
        class="select"
        type="text"
        v-model="value"
      >
      <button @click="handleClick">
        修改
      </button>
    </div> -->
    <remoteLoad :url="url" />
  </div>
</template>
  <script>
import remoteLoad from "./remote.vue";
export default {
  components: {
    remoteLoad,
  },
  data() {
    return {
      value: "http://localhost:8090/resume/echarts/?1-2-13-1.vue",
      // url: localStorage.currentMapDemoUrl,
    };
  },
  computed: {
    url() {
      let [type, name] = location.search.replace("?", "").split("&");
      if (!type) {
        type = "echarts";
      } else {
        type = type.split("=")[1];
      }
      if (!name) {
        name = "echarts";
      } else {
        name = name.split("=")[1];
      }
      // type = "openlayers";
      // name = "1-1-0-0.vue";
      // return `http://localhost:3010/web-${type}/demo/${name}`;
      return `https://zhoubichuan.com/web-${type}/demo/${name}`;
    },
  },
  methods: {
    handleClick() {
      localStorage.currentMapDemoUrl = this.value;
    },
  },
};
</script>

<style>
.demo-page {
  height: 100vh;
  width: 100%;
  position: relative;
}
.handle {
  position: absolute;
  left: 0;
}
.select {
  width: 400px;
}
.map {
  height: 400px;
  width: 100%;
}
</style>