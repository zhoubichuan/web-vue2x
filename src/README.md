---
lang: zh-CN
home: true
heroImage: ""
actionText: 先睹为快 →
actionLink: /vueBase/build/1.config
pageClass: page_index
footer: 前端面试
meta:
  - name: keywords
    content: 面试相关,前端学习,前端笔记
---

<template>
  <div id="app">
    <mindmap v-model="data" height="1000"></mindmap>
  </div>
</template>

<script>
import mindmap from '@hellowuxin/mindmap'

export default {
  name: 'App',
  components: {
    mindmap
  },
  data: () => ({
    data: [
      {
        name:"Vue",
        children:
          [
            {
              name:"基础知识",
              children:[
                  {name:"构建基础篇", children: []},
                  {name:"开发技巧", children: []}
              ]
            },
            {
              name:"高级知识",
              children:[
                  {name:"vue组件精讲", children: []}
              ]
            },
            {
              name:"源码知识",
              children:[
                  {name:"Vue源码解析", children: []},
                  {name:"Element源码解析", children: []}
              ]
            }
          ]
      }
    ]
  })
}
</script>
