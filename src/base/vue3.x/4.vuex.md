---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 四.Vuex 4.x

::: tip 前言
补充一些官方文档中没有的，但是实际开发中最好需要了解的内容
:::
安装插件

```sh
npm install vuex-composition-helpers@next -S
```

目录结构

```sh
└── store
    └── index.ts
└── main.ts
```
index.ts
```ts
import { InjectionKey } from "vue"
import {
  ActionTree,
  createStore,
  GetterTree,
  MutationTree,
  Store,
  StoreOptions,
} from "vuex"

declare interface globalStore {
  fakeName: string;
}
const globalStoreState: globalStore = {
  fakeName: "Fake Name",
}
const globalStoreGetters: GetterTree<globalStore, any> = {
  fakeName: (state) => state.fakeName,
}
const globalStoreMutations: MutationTree<globalStore> = {
  UPDATE_FAKE_NAME(state, payload) {
    state.fakeName = payload
  },
}
const globalStoreActions: ActionTree<globalStore, any> = {
  updateFakeName({ commit }, payload) {
    commit("UPDATE_FAKE_NAME", payload)
  },
}
const globalStoreOption: StoreOptions<globalStore> = {
  state: globalStoreState,
  getters: globalStoreGetters,
  mutations: globalStoreMutations,
  actions: globalStoreActions,
}

export const globalStoreKey: InjectionKey<Store<globalStore>> = Symbol()
export default createStore < globalStore > globalStoreOption
```

main.ts

```ts
import { createApp } from "vue"
import App from "./App.vue"
import store, { globalStoreKey } from "./store"

const app = createApp(App)
app.use(store, globalStoreKey)
app.mount("#app")
```

component.vue

```vue
<template>
  <p>{{ fakeName }}</p>
</template>
<script lang="ts">
import { defineComponent, inject, reactive, ref } from "vue"
import { useStore } from "vuex"
import { globalStoreKey } from "../store"
import { useState, useActions } from "vuex-composition-helpers"

export default defineComponent({
  setup() {
    // 通过key拿到特定的store
    const store = useStore(globalStoreKey)
    // 这里的 useActions 类似之前vuex的mapActions
    const { updateFakeName } = useActions(store, ["updateFakeName"])

    return {
      // 这里的 useState 类似之前vuex的 mapGetters
      ...useState(store, ["fakeName"]),
    }
  },
})
</script>
```
