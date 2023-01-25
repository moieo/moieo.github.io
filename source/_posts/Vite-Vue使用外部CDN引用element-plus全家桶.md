---
title: Vite+Vue使用外部CDN引用element-plus全家桶
date: 2022-08-05 23:08:38
tags:
  - vue
  - vite
  - Node
category: 编程语言
cover: https://preview.cloud.189.cn/image/imageAction?param=A9FC5FECFA532F69F5D582DAA5A9DDEC8F99A65F1E1FF358E524C2C868E78354EEA5CE96240C004B29CE9A4275BBCF8B755BF685B3BE3959DF7FFBD66048F578970C8B6A9C2597E322B9A3CD2886369BE58BBAD96A0FFE22D3372C9DF325E983BB7B922930F462B0A939E0AC39F11B07E549C09A
---

参考：[vue3+vite2增加element-plus的CDN链接打包构建](https://juejin.cn/post/6992027986383863838)

网上 Vite.js 的资料少，踩了不少坑
在掘金中找到一篇资料，但还是避免不了遇到了一些奇奇怪怪的问题

我这边使用的 `vite-plugin-cdn-import` 插件

![解决](https://preview.cloud.189.cn/image/imageAction?param=A9FC5FECFA532F69F5D582DAA5A9DDEC8F99A65F1E1FF358E524C2C868E78354EEA5CE96240C004B29CE9A4275BBCF8B755BF685B3BE3959DF7FFBD66048F578970C8B6A9C2597E322B9A3CD2886369BE58BBAD96A0FFE22D3372C9DF325E983BB7B922930F462B0A939E0AC39F11B07E549C09A)

编辑 `vite.config.ts`
```typescript
import { Plugin as importToCDN } from "vite-plugin-cdn-import";
```

```typescript
importToCDN({
  modules: [
    {
      name: "vue",
      var: "Vue",
      path: "//unpkg.com/vue@next",
    },
    {
      name: "vuex",
      var: "Vuex",
      path: "//unpkg.com/vuex@next",
    },
    {
      name: "vue-class-component",
      var: "VueClassComponent",
      path: "//unpkg.com/vue-class-component@next",
    },
    {
      name: "element-plus",
      var: "ElementPlus",
      path: "//unpkg.com/element-plus",
      css: "//unpkg.com/element-plus/dist/index.css",
    },
  ],
}),
```
用原文中的方法会出现错误
原因参考：使用了pinia或其他依赖于vue的库

![报错](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67a34ca36df04992a0af368cc34c322d~tplv-k3u1fbpfcp-zoom-1.awebp)

上面方式可解决
