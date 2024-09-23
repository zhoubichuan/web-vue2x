<template>
  <div class="wrapper">
    <input id="textOverflow" class="overflow" type="checkbox" />
    <div class="text">
      <label class="btn" for="textOverflow"></label>
      {{ text }}
    </div>
  </div>

  <!-- <div class="wrapper">
    <input id="overflow2" class="overflow" type="checkbox" />
    <div class="text">
      <label class="btn" for="overflow2"></label>
      浮动元素是如何定位的
      正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。
    </div>
  </div> -->
</template>
    
<script>
export default {
  name: "TextOverflow",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
  
<style lang="scss" scoped>
.wrapper {
  display: flex;
  margin: 50px auto;
  width: auto;
  max-width: 800px;
  overflow: hidden;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}
.text {
  font-size: 20px;
  overflow: hidden;
  overflow: ellipsis;
  text-align: justify;
  /* display: flex; */
  /*   display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; */
  position: relative;
  line-height: 1.5;
  max-height: 4.5em;
  transition: 0.3s max-height;
}
.text::before {
  content: "";
  height: calc(100% - 26px);
  float: right;
}
.text::after {
  content: "";
  width: 999vw;
  height: 999vw;
  position: absolute;
  box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
  margin-left: -100px;
}
.btn {
  position: relative;
  float: right;
  clear: both;
  margin-left: 20px;
  font-size: 16px;
  padding: 0 8px;
  background: #3f51b5;
  line-height: 24px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  /* margin-top: -30px; */
}
.btn::after {
  content: "展开";
}
.overflow {
  display: none;
}
.overflow:checked + .text {
  max-height: 200px;
}
.overflow:checked + .text::after {
  visibility: hidden;
}
.overflow:checked + .text .btn::before {
  visibility: hidden;
}
.overflow:checked + .text .btn::after {
  content: "收起";
}
.btn::before {
  content: "...";
  position: absolute;
  left: -5px;
  color: #333;
  transform: translateX(-100%);
}
</style>
