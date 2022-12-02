---
title: 如何在手机上操作Adb？
date: 2022-01-24 20:44:17
tags:
  - Termux
  - Adb
  - Android
---

#### 前言
没有电脑在手机里执行一些adb命令很不方便，比如我想激活`冰箱`，想用一些需要使用adb授权/激活的软件，必须要有电脑才行，但是自 `Android 11` 以后，在 `开发者选项` 内新增了一个 `无线调试` 👀（爱死了）
文章使用的环境：
  机型：Redmi K40
  Android版本：12
  系统：MIUI 13
  终端：Termux
  网络：WLAN（必须在 WLAN 环境）
<!-- more -->
#### 准备工作

下载`platform-tools`工具包
[百度网盘](https://pan.baidu.com/s/1Vn6FkLeh1WduP0ABMewI3g?pwd=1hqg) (提取码自动填充)


[123云盘](https://www.123pan.com/s/k3arVv-Inxb)


[OneDrive](https://8bn4kc-my.sharepoint.com/:u:/g/personal/moieo_8bn4kc_onmicrosoft_com/Ea9Ia_oy-QxKuQI5RY-1CboB5p2JruL9wULMK4ELk8sAKQ?e=Za1qD0)

失效了请评论区留言

#### 安装终端模拟器
这里选用 [Termux](http://termux.com)，你也可以使用其他的终端

#### 开始
将文件 `platform-tools.zip` 解压到 终端的工作目录
以使用 百度网盘 app 下载为例
执行以下命令
```shell
apt-get install unzip -y
unzip -d $HOME /storage/emulated/0/BaiduNetdisk/platform-tools.zip
cd platform-tools
```

#### 授权
以 MIUI 13 为例：设置 -> 我的设备 -> 全部参数 -> 多次点击 MIUI 版本
设置 -> 更多设置 -> 开发者选项 -> 将 USB 调试 、无线调试、USB安装、USB调试（安全模式）全部打开
注：不打开 USB安装 无法使用 `adb install` 命令安装软件

将 设置 放在后台，打开终端
在 `platform-tools` 目录里执行（不管他目录名，能用就行，可以用`ls`命令看一下目录里有没有`adb`文件）
先输入以下命令，注意不要按回车😅
```shell
adb pair [ip]:[port]
```
关于 自己手机在局域网内的 IP 怎么看，请自行百度（无线调试选项页面内有写）

以我的为例
IP：`192.168.1.4`
端口：`37363`
端口查看：将 把 `Termux` 和 `设置` 分屏，为什么要`分屏`后面说，设置里打开 `开发者选项` 里的 `无线调试` 页面，点击`使用配对码配对`，显示的对话框中有写 IP地址和端口号

命令为：
```shell
adb pair 192.168.1.4:37363
```
按下回车后输入 对话框 中显示的 `WLAN 配对码`
成功后在 `无线调试` 页面 `已配对的设备` 会多出一个条目
输入`adb devices`命令，查看已连接设备

```shell
┌─[ecodemo@localhost] - [~] - [一 1月 24, 21:55]
└─[$] <> adb devices
List of devices attached
adb-e1a41494-SFEISs._adb-tls-connect._tcp.      device
```

连接成功
注：只需配对一次，后续只需要打开无线调试开关，输入`adb device`即可

#### 为什么要分屏？
不分屏会导致配对不上，当你把 设置 放在后台的时候，对话框会被关闭，关闭之后就无法成功配对，分屏可以解决

#### 关于解决 Termux 在 Android 12 内运行 时被系统杀死
这个问题遇到的，时候我也很头疼，自己也没有电脑🤫，全靠 Termux 写点代码
Android 12 最大进程 32 个，超出后自动将已开启的进程杀死
Termux 出现 `[Process completed (signal 9) - press Enter]`的提示
可使用 adb/root 等方式修改
解决方案来自 Termux [Issue](https://github.com/termux/termux-app/issues/2366)
连接 adb 后执行以下命令解决
```shell
adb shell "/system/bin/device_config set_sync_disabled_for_tests persistent; /system/bin/device_config put activity_manager max_phantom_processes 2147483647"
```
只需执行一次即可，命令无输出
root 执行以下命令
```shell
su -c "/system/bin/device_config set_sync_disabled_for_tests persistent; /system/bin/device_config put activity_manager max_phantom_processes 2147483647"
```

#### 关于 adb 的一些使用

1.安装软件
```shell
adb install -r -d xxx.apk
```
`-r` 参数为覆盖安装
`-d` 参数为降级安装（可用于给软件降级，不丢数据）

详情：[https://blog.csdn.net/u014589884/article/details/120113281](https://blog.csdn.net/u014589884/article/details/120113281)

#### 为啥本文没图片？
😅找不到好用不跑路的图床，前一阵子，写的文章 `了解计算机` 上传了一张图片表格（现在换成了MarkDown）再图床，一个礼拜后 404 了🐶

酷安 [@Moieo](http://www.coolapk.com/u/1512829)
鹅群：724862228
