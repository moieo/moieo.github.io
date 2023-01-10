---
title: AdGuard看门狗效果不好？试试这种个Shell脚本
date: 2023-01-10 20:26:00
cover:
categories: Android
tags:
  - Android
  - Adb
  - 广告过滤
---

# 什么是 AdGuard
知道的可以跳过，留给不知道的人 {% emoji blobcat ablobcatrainbow height:3em %}

AdGuard 是摆脱恼人广告、在线跟踪，保护您远离恶意软件的最佳选择。AdGuard 使您网络冲浪更快速，更安全，更便捷！

{% link https://adguard.com "AdGuard 官网" icon:https://adguard.com/img/favicons/favicon.ico?version=3933 %}

# 为什么会写这个脚本
- AdGuard 经常被系统杀死
- 看门狗偶尔失效

# 运行脚本

## 使用 adb shell 或 rish
系统自带 curl 可以直接用下面的
判断有没有 curl，执行 `ls /system/bin/curl`
显示 `/system/bin/curl` 就表示有 curl

{% copy adb shell "mkdir -p /sdcard/Moieo; curl https://moieo.gitee.io/KeepAdGuard.sh > /sdcard/Moieo/KeepAdGuard.sh; sh /sdcard/Moieo/KeepAdGuard.sh start" %}

用 rish 请把 `adb shell` 改成 `./rish -c`

系统没有 curl，直接下载脚本

{% link https://moieo.gitee.io/KeepAdGuard.sh KeepAdGuard.sh %}

## 使用 root
Termux 直接 root 授权后执行 adb shell 双引号里的内容

