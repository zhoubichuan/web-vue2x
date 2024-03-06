<template>
  <div class="text-type-writer">
    <pre
      class="text-type-writer-line"
      v-for="(item, index) in content"
      :key="index"
    >
      {{ item.typewriter }}
    </pre>
  </div>
</template>

<script>
export default {
  name: "TextTyper",
  props: {
    tip: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String | Array,
      default: "",
    },
  },
  data() {
    return {
      content: Array.isArray(this.text)
        ? this.text.map((o) => ({
            content: o,
            typewriter: "",
            index: 0,
            visible: false,
            timer: null,
          }))
        : [
            {
              content: this.text,
              typewriter: "",
              index: 0,
              visible: false,
              timer: null,
            },
          ],
    };
  },
  mounted() {
    this.typingLine(this.content, 0);
  },
  methods: {
    typingLine(data, index) {
      data[index].visible = true;
      if (data[index].index <= data[index].content.length) {
        data[index].typewriter = data[index].content.slice(
          0,
          data[index].index++
        );
        data[index].timer = setTimeout(() => {
          this.typingLine(data, index);
        }, 50);
      } else {
        clearTimeout(data[index].timer);
        data[index].visible = false;
        this.typingLine(data, index + 1);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.text-type-writer {
  width: auto;
  padding: 10px;
  border: 1px dashed red;
  border-radius: 5px;
  .text-type-writer-line {
    line-height: 1.2;
    font-size: 20px;
    color: rgb(96, 109, 121);
    white-space: pre-wrap;
    word-wrap: break-word;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
  }
  .text-type-writer-cursor {
    width: 0px;
    height: 100%;
    border-left: 2px solid transparent;
    animation: typing 3s steps(16) forwards, cursor 1s infinite;
    -webkit-animation: typing 3s steps(16) forwards, cursor 1s infinite;
  }
}
/* animation */
@keyframes typing {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
@keyframes cursor {
  50% {
    border-color: #5e7ce0;
  }
}
@-webkit-keyframes typing {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
@-webkit-keyframes cursor {
  50% {
    border-color: #5e7ce0;
  }
}
</style>
