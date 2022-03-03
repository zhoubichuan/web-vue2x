---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 三.Vue-Router 4.x

::: tip 前言
补充一些官方文档中没有的，但是实际开发中最好需要了解的内容
:::

- vue-router 4 的新功能

```js
// 守卫不再需要next，并且支持async
router.beforeEach(async (to, from) => {
  // canUserAccess() returns `true` or `false`
  return await canUserAccess(to)
})
```

## 知识结构

- 路由对象
