export default (Vue, options = {}) => {
  if (!Array.prototype.remove) {
    Array.prototype.remove = function (item) {
      if (!this.length) return;
      var index = this.indexOf(item);
      if (index > -1) {
        this.splice(index, 1);
        return this;
      }
    };
  }
  var init = {
    lazyLoad: false,
    default: "https://",
  };

  var listenList = [];
  var imageCatcheList = [];

  const isAlredyLoad = (imageSrc) => {
    if (imageCatcheList.indexOf(imageSrc) > -1) {
      return true;
    } else {
      return false;
    }
  };
  const isCanShow = (item) => {
    var ele = item.ele;
    var src = item.src;
    var top = ele.getBoundingClientRect().top;
    var windowHeight = window.innerHight;
    if (top + 10 < window.innerHeight) {
      var image = new Image();
      image.src = src;
      image.onload = function () {
        ele.src = src;
        imageCatcheList.push(src);
        listenList.remove(item);
      };
      return true;
    } else {
      return false;
    }
  };

  const onListenScroll = () => {
    window.addEventListener("scroll", function () {
      var length = listenList.length;
      for (let i = 0; i < length; i++) {
        isCanShow(listenList[i]);
      }
    });
  };
  const addListener = (ele, binding) => {
    var imageSrc = binding.value;
    if (isAlredyLoad(imageSrc)) {
      ele.src = imageSrc;
      return false;
    }
    var item = {
      ele: ele,
      src: imageSrc,
    };
    ele.src = init.default;
    if (isCanShow(item)) {
      return;
    }
    listenList.push(item);
    onListenScroll();
  };

  Vue.directive("lazy", {
    inserted: addListener,
    updated: addListener,
  });
};
