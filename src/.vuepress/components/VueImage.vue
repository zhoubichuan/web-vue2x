<template>
  <div class="image-fit">
    <img src="/web-vue/assets/img/13.deploy1.1.a358a790.png/" alt="" srcset="">
  </div>
</template>
  
<script>

export default {

};
</script>

<style lang="scss" scoped>
.image-fit {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    max-height: 100%;
    max-width: 100%;
    -webkit-user-drag: none;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
}
</style>