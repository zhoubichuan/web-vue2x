<template>
  <div class="xmind">
    <div id="jsmind_container"></div>
  </div>
</template>

<script>
import * as jsMind from "./jsMind.js";

export default {
  name: "index",
  props: {
    tipkey: {
      type: String,
      default: "a",
    },
  },
  data() {
    return {
      mind: {
        a: {
          meta: {
            name: "openlayers mind",
            version: "1.0",
          },
          format: "node_tree",
          data: {
            id: "root",
            topic: "Vue 2.x",
            children: [
              {
                id: "easy",
                topic: "1.init",
                direction: "right",
              },
              {
                id: "open",
                topic: "2.compile",
                direction: "right",
                children: [
                  {
                    id: "open1",
                    topic: "ast",
                  },
                  { id: "open2", topic: "optimize" },
                  {
                    id: "open3",
                    topic: "gencode",
                  },
                ],
              },
              {
                id: "powerful",
                topic: "3.render",
                direction: "right",
              },
              {
                id: "Overlays",
                topic: "4.vnode",
                direction: "right",
              },
              {
                id: "Control",
                topic: "5.patch",
                direction: "right",
              },
              {
                id: "dom",
                topic: "6.dom",
                direction: "right",
              },
            ],
          },
        },
        b: {
          meta: {
            name: "openlayers mind",
            version: "1.0",
          },
          format: "node_tree",
          data: {
            id: "root",
            topic: "Vue 3.x",
            children: [
              {
                id: "easy",
                topic: "1.app",
                direction: "right",
              },
              {
                id: "open",
                topic: "2.render",
                direction: "right",
              },
              {
                id: "powerful",
                topic: "3.patch",
                direction: "right",
                children: [
                  {
                    id: "open1",
                    topic: "其他节点",
                  },
                  { id: "open2", topic: "组件节点" },
                ],
              },
              {
                id: "Overlays",
                topic: "4.compile",
                direction: "right",
                children: [
                  {
                    id: "ast",
                    topic: "ast",
                  },
                  { id: "optimize", topic: "optimize" },
                  {
                    id: "gencode",
                    topic: "gencode",
                  },
                ],
              },
              {
                id: "Control",
                topic: "5.setup",
                direction: "right",
              },
            ],
          },
        },
      },
      // jsMind的选项，更多参数参见jsMind的文档
      // https://github.com/hizzgdev/jsmind/blob/master/docs/zh/index.md
      options: {
        container: "jsmind_container", //容器的ID
        editable: false, // 是否启用编辑
        theme: "primary", //主题

        //options的属性
        // editable : false,       // 是否启用编辑
        mode: "side", // 显示模式========full - 子节点动态分布在根节点两侧 [默认值] side - 子节点只分布在根节点右侧
        support_html: true, // 是否支持节点里的HTML元素
        view: {
          hmargin: 100, // 思维导图距容器外框的最小水平距离
          vmargin: 50, // 思维导图距容器外框的最小垂直距离
          line_width: 1, // 思维导图线条的粗细
          line_color: "#555", // 思维导图线条的颜色
        },
        layout: {
          hspace: 30, // 节点之间的水平间距
          vspace: 20, // 节点之间的垂直间距
          pspace: 13, // 节点与连接线之间的水平间距（用于容纳节点收缩/展开控制器）
        },
        shortcut: {
          enable: true, // 是否启用快捷键
          handles: {}, // 命名的快捷键事件处理器
          mapping: {
            // 快捷键映射
            addchild: 45, // <Insert>
            addbrother: 13, // <Enter>
            editnode: 113, // <F2>
            delnode: 46, // <Delete>
            toggle: 32, // <Space>
            left: 37, // <Left>
            up: 38, // <Up>
            right: 39, // <Right>
            down: 40, // <Down>
          },
        },
      },
    };
  },
  mounted() {
    let jm = new jsMind(this.options);
    jm.show(this.mind[this.$props.tipkey]);
    //jm.disable_edit();//禁止编制
    jm.expand_all(); //展开全部节点
    // jm.add_node(parent_node, nodeid, topic, data);//添加节点
  },
};
</script>

<style>
/* important section */
.jsmind-inner {
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
}

/*box-shadow:0 0 2px #000;*/
.jsmind-inner {
  moz-user-select: -moz-none;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* z-index:1 */
canvas {
  /*position: absolute;*/
  z-index: 1;
}

/* z-index:2 */
jmnodes {
  /*position: absolute;*/
  z-index: 2;
  background-color: rgba(0, 0, 0, 0);
}

/*background color is necessary*/
jmnode {
  position: absolute;
  cursor: default;
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

jmexpander {
  position: absolute;
  width: 14px;
  height: 2px;
  margin-top: 6px;
  background: #333;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}

/* default theme */
jmnode {
  padding: 10px 20px;
  background-color: #fff;
  color: #333;
  border-radius: 20px;
  box-shadow: 1px 1px 1px #666;
  font: 16px/1.125 Verdana, Arial, Helvetica, sans-serif;
}

jmnode:hover {
  box-shadow: 2px 2px 8px #000;
  background-color: #ebebeb;
  color: #333;
}

jmnode.selected {
  background-color: #11f;
  color: #fff;
  box-shadow: 2px 2px 8px #000;
}

jmnode.root {
  font-size: 24px;
}

jmexpander:hover {
  border-color: #000;
}

@media screen and (max-device-width: 1024px) {
  jmnode {
    padding: 5px;
    border-radius: 3px;
    font-size: 14px;
  }

  jmnode.root {
    font-size: 21px;
  }
}

/* primary theme */
jmnodes.theme-primary jmnode {
  background-color: #428bca;
  color: #fff;
  border-color: #357ebd;
}

jmnodes.theme-primary jmnode:hover {
  background-color: #3276b1;
  border-color: #285e8e;
}

jmnodes.theme-primary jmnode.selected {
  background-color: #f1c40f;
  color: #fff;
}

/* warning theme */
jmnodes.theme-warning jmnode {
  background-color: #f0ad4e;
  border-color: #eea236;
  color: #fff;
}

jmnodes.theme-warning jmnode:hover {
  background-color: #ed9c28;
  border-color: #d58512;
}

jmnodes.theme-warning jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* danger theme */
jmnodes.theme-danger jmnode {
  background-color: #d9534f;
  border-color: #d43f3a;
  color: #fff;
}

jmnodes.theme-danger jmnode:hover {
  background-color: #d2322d;
  border-color: #ac2925;
}

jmnodes.theme-danger jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* success theme */
jmnodes.theme-success jmnode {
  background-color: #5cb85c;
  border-color: #4cae4c;
  color: #fff;
}

jmnodes.theme-success jmnode:hover {
  background-color: #47a447;
  border-color: #398439;
}

jmnodes.theme-success jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* info theme */
jmnodes.theme-info jmnode {
  background-color: #5dc0de;
  border-color: #46b8da;
  color: #fff;
}

jmnodes.theme-info jmnode:hover {
  background-color: #39b3d7;
  border-color: #269abc;
}

jmnodes.theme-info jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* greensea theme */
jmnodes.theme-greensea jmnode {
  background-color: #1abc9c;
  color: #fff;
}

jmnodes.theme-greensea jmnode:hover {
  background-color: #16a085;
}

jmnodes.theme-greensea jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* nephrite theme */
jmnodes.theme-nephrite jmnode {
  background-color: #2ecc71;
  color: #fff;
}

jmnodes.theme-nephrite jmnode:hover {
  background-color: #27ae60;
}

jmnodes.theme-nephrite jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* belizehole theme */
jmnodes.theme-belizehole jmnode {
  background-color: #3498db;
  color: #fff;
}

jmnodes.theme-belizehole jmnode:hover {
  background-color: #2980b9;
}

jmnodes.theme-belizehole jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* wisteria theme */
jmnodes.theme-wisteria jmnode {
  background-color: #9b59b6;
  color: #fff;
}

jmnodes.theme-wisteria jmnode:hover {
  background-color: #8e44ad;
}

jmnodes.theme-wisteria jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* asphalt theme */
jmnodes.theme-asphalt jmnode {
  background-color: #34495e;
  color: #fff;
}

jmnodes.theme-asphalt jmnode:hover {
  background-color: #2c3e50;
}

jmnodes.theme-asphalt jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* orange theme */
jmnodes.theme-orange jmnode {
  background-color: #f1c40f;
  color: #fff;
}

jmnodes.theme-orange jmnode:hover {
  background-color: #f39c12;
}

jmnodes.theme-orange jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* pumpkin theme */
jmnodes.theme-pumpkin jmnode {
  background-color: #e67e22;
  color: #fff;
}

jmnodes.theme-pumpkin jmnode:hover {
  background-color: #d35400;
}

jmnodes.theme-pumpkin jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* pomegranate theme */
jmnodes.theme-pomegranate jmnode {
  background-color: #e74c3c;
  color: #fff;
}

jmnodes.theme-pomegranate jmnode:hover {
  background-color: #c0392b;
}

jmnodes.theme-pomegranate jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* clouds theme */
jmnodes.theme-clouds jmnode {
  background-color: #ecf0f1;
  color: #333;
}

jmnodes.theme-clouds jmnode:hover {
  background-color: #bdc3c7;
}

jmnodes.theme-clouds jmnode.selected {
  background-color: #11f;
  color: #fff;
}

/* asbestos theme */
jmnodes.theme-asbestos jmnode {
  background-color: #95a5a6;
  color: #fff;
}

jmnodes.theme-asbestos jmnode:hover {
  background-color: #7f8c8d;
}

jmnodes.theme-asbestos jmnode.selected {
  background-color: #11f;
  color: #fff;
}
</style>
