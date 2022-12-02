---
title: Vite+Vue+TypeScript项目中vue无默认导出的问题
date: 2022-08-06 14:25:35
tags:
  - vite
  - vue
  - Node
category: 编程语言
---

## 问题如下

在 Vite2 + Vue3 + TypeScript 项目中使用 `vue-property-decorator` 遇到报错
日志如下

![日志](https://preview.cloud.189.cn/image/imageAction?param=766594FFCD6CA4C718626CEDC8F1DE6E53E87ECFD5FCB015D9D97AB318E48505315B93286B9740E49FF217B5B9570D8C9425C88FDD0B301932A7325D80AC70336BAFFAE95F3D619318CE8A6A42E17685EA3FB52A9C1A1A6B421F9CC2F89FB69CCA863C9ADB2DD7ECA51A06932CF1F70AABADFA85)

在新建一个 vue-cli 项目后，发现 package.json 里引用的是 `vue-class-component@^8.0.0-0`
应该是 vue-class-component 的 7.x.x 版本的缘故

## 解决方案

这里用的 pnpm
卸载掉 vue-class-component，然后指定 8.0.0-0 版本安装

使用 CDN 的话，cdn 也要引用 8.x.x 版本才行

```bash
pnpm remove vue-class-component
pnpm add vue-class-component@^8.0.0-0
```
