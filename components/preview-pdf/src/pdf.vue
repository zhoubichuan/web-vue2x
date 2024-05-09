<template>
  <div class="pdf">
    <div class="show">
      <pdf
        ref="pdf"
        :src="pdfUrl"
        :page="pageNum"
        :rotate="pageRotate"
        @password="password"
        @progress="loadedRatio = $event"
        @page-loaded="pageLoaded($event)"
        @num-pages="pageTotalNum = $event"
        @error="pdfError($event)"
        @link-clicked="page = $event"
      >
      </pdf>
    </div>

    <div class="pdf_footer">
      <div class="info">
        <div>当前页数/总页数：{{ pageNum }}/{{ pageTotalNum }}</div>
        <div>进度：{{ loadedRatio }}</div>
        <div>页面加载成功: {{ curPageNum }}</div>
      </div>
      <div class="operate">
        <div class="btn" @click.stop="clock">顺时针</div>
        <div class="btn" @click.stop="counterClock">逆时针</div>
        <div class="btn" @click.stop="prePage">上一页</div>
        <div class="btn" @click.stop="nextPage">下一页</div>
        <div class="btn" @click="scaleD">放大</div>
        <div class="btn" @click="scaleX">缩小</div>
        <div class="btn" @click="pdfPrint()">打印所有指定页</div>
        <div class="btn" @click="pdfPrintAll()">打印所有</div>
        <div class="btn" @click="logContent()">获取页面信息</div>
        <div class="btn" @click="fileDownload(pdfUrl, 'pdf文件')">下载</div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "PreviewPdf",
  props: {
    pdfUrl: {
      type: String,
      default: "/web-vue2x/阿里前端开发规范.pdf",
    },
  },
  components: {
    pdf: () => import("vue-pdf"),
  },
  data() {
    return {
      pageTotalNum: 1,
      pageNum: 1,
      loadedRatio: 0,
      curPageNum: 0,
      scale: 100,
      pageRotate: 0,
      page: 0,
    };
  },
  methods: {
    fileDownload(data, fileName) {
      let blob = new Blob([data], {
        type: "application/pdf;charset-UTF-8",
      });
      let filename = fileName || "pdf.pdf";
      if (typeof window.navigator.msSaveBlob !== "undefined") {
        window.navigator.msSaveBlob(blob, filename);
      } else {
        var blobURL = window.URL.createObjectURL(blob);
        var tempLink = document.createElement("a");
        tempLink.style.display = "none";
        tempLink.href = blobURL;
        tempLink.setAttribute("download", filename);
        if (typeof tempLink.download === "undefined") {
          tempLink.setAttribute("target", "_blank");
        }
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
      }
    },
    scaleD() {
      this.scale += 5;
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },
    scaleX() {
      if (this.scale == 100) {
        return;
      }
      this.scale += -5;
      console.log(parseInt(this.scale) + "%");
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },
    prePage() {
      var p = this.pageNum;
      p = p > 1 ? p - 1 : this.pageTotalNum;
      this.pageNum = p;
    },
    nextPage() {
      var p = this.pageNum;
      p = p < this.pageTotalNum ? p + 1 : 1;
      this.pageNum = p;
    },
    clock() {
      this.pageRotate += 90;
    },
    counterClock() {
      this.pageRotate -= 90;
    },
    password(updatePassword, reason) {
      updatePassword(prompt('password is "test"'));
      console.log("...reason...");
      console.log(reason);
      console.log("...reason...");
    },
    pageLoaded(e) {
      this.$emit("current", e);
      this.curPageNum = e;
    },
    pdfError(error) {
      console.error(error);
    },
    pdfPrintAll() {
      this.$refs.pdf.print();
    },
    pdfPrint() {
      this.$refs.pdf.print(100, [1, 2]);
    },
    logContent() {
      this.$refs.pdf.pdf.forEachPage(function (page) {
        return page.getTextContent().then(function (content) {
          let text = content.items.map((item) => item.str);
          let allStr = content.items.reduce(
            (initVal, item) => (initVal += item.str),
            ""
          );
        });
      });
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.pdf {
  padding: 20px;
  .show {
    overflow: auto;
    margin: auto;
    max-width: 75%;
    height: 80vh;
    // max-height: 530px;
  }
  .pdf_footer {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 0;
    background-color: rgba(255, 255, 255, 0.5);
    .info {
      display: flex;
      flex-wrap: wrap;
      div {
        width: 30%;
      }
    }
    .operate {
      margin: 10px 0 0;
      display: flex;
      flex-wrap: wrap;
      div {
        // width: 80px;
        text-align: center;
        font-size: 15px;
      }
      .btn {
        cursor: pointer;
        margin: 5px 10px;
        width: 120px;
        border-radius: 10px;
        padding: 5px;
        color: #fff;
        background-color: #3dcbbc;
      }
    }
  }
}
</style>
  