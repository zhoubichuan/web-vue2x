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
  /* eslint-disable */
  import pdf from "vue-pdf";
  export default {
    name: "vue_pdf_preview",
    props: {
      // 当前pdf路径
      pdfUrl: {
        type: String,
        default:
          "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
      },
    },
    components: {
      pdf,
    },
    data() {
      return {
        // 总页数
        pageTotalNum: 1,
        // 当前页数
        pageNum: 1,
        // 加载进度
        loadedRatio: 0,
        // 页面加载完成
        curPageNum: 0,
        // 放大系数 默认百分百
        scale: 100,
        // 旋转角度 ‘90’的倍数才有效
        pageRotate: 0,
        // 单击内部链接时触发 (目前我没有遇到使用场景)
        page: 0,
      };
    },
    watch: {},
    computed: {},
    created() {},
    mounted() {},
    methods: {
      //下载PDF
      fileDownload(data, fileName) {
        let blob = new Blob([data], {
          //type类型后端返回来的数据中会有，根据自己实际进行修改
          type: "application/pdf;charset-UTF-8",
        });
        let filename = fileName || "pdf.pdf";
        if (typeof window.navigator.msSaveBlob !== "undefined") {
          window.navigator.msSaveBlob(blob, filename);
        } else {
          var blobURL = window.URL.createObjectURL(blob);
          // 创建隐藏<a>标签进行下载
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
  
      //放大
      scaleD() {
        this.scale += 5;
        this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
      },
  
      //缩小
      scaleX() {
        // scale 是百分百展示 不建议缩放
        if (this.scale == 100) {
          return;
        }
        this.scale += -5;
        console.log(parseInt(this.scale) + "%");
        this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
      },
      // 切换上一页
      prePage() {
        var p = this.pageNum;
        p = p > 1 ? p - 1 : this.pageTotalNum;
        this.pageNum = p;
      },
      // 切换下一页
      nextPage() {
        var p = this.pageNum;
        p = p < this.pageTotalNum ? p + 1 : 1;
        this.pageNum = p;
      },
      // 顺时针选中角度
      clock() {
        this.pageRotate += 90;
      },
      // 逆时针旋转角度
      counterClock() {
        this.pageRotate -= 90;
      },
      // pdf 有密码 则需要输入秘密
      password(updatePassword, reason) {
        updatePassword(prompt('password is "test"'));
        console.log("...reason...");
        console.log(reason);
        console.log("...reason...");
      },
      // 页面加载成功  当前页数
      pageLoaded(e) {
        this.$emit("current", e);
        this.curPageNum = e;
      },
      // 异常监听
      pdfError(error) {
        console.error(error);
      },
      // 打印所有
      pdfPrintAll() {
        this.$refs.pdf.print();
      },
      // 打印 第一页和第二页
      pdfPrint() {
        // 第一个参数 文档打印的分辨率
        // 第二个参数 文档打印的页数
        this.$refs.pdf.print(100, [1, 2]);
      },
      // 获取当前页面pdf的文字信息内容
      logContent() {
        this.$refs.pdf.pdf.forEachPage(function (page) {
          return page.getTextContent().then(function (content) {
            let text = content.items.map((item) => item.str);
            let allStr = content.items.reduce(
              (initVal, item) => (initVal += item.str),
              ""
            );
            console.log(allStr); // 内容字符串
            console.log(text); // 内容数组
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
  