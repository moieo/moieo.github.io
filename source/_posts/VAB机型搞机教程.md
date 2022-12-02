---
title: VAB机型搞机教程
date: 2022-04-22 18:47:19
author: azzlantern
tags:
  - Android
  - 玩机技巧
---

该教程适用于大多数vab分区设备(比如红米K40)  刷机请备好电脑哦
本教程以`红米K40`为例
温馨提示：
 - 当前教程不适用于小白，如对刷机操作不懂，请勿尝试
 - 数据无价，请备份后操作
 - 刷机不规范，机主两行泪
***
#### 前提条件
首先需要解锁bootloader，不解锁就搞不了咯~
小米设备官方解锁网址：https://www.miui.com/unlock    
注意：解锁bootloader会清除手机的所有内容，记得备份哦！！！  
具体方法：先在我的设备里连续点击5次MIUI版本号开启开发者选项然后进入设置→开发者选项→设备解锁状态，点使用移动网络进行账号和设备的绑定。（绑定一次之后就不要点第二次了，万一你要等168小时才能解锁）    
打开电脑，下载解锁工具并打开，手机进入fastboot模式（关机状态下长按开机键+音量-键）然后连接电脑，进入解锁工具之后会提醒你登录，登录完成后，打开右上角的设置→安装驱动，然后开始解锁  
解锁完成之后手机会自动开机，你会发现第一屏会出现一个解开的🔒的东东，这就代表
解锁bootloader成功啦~    
  
#### 刷入TWRP 
 刷入twrp需要adb工具， 你可以在下面选一个  
  [秋之盒（推荐）](https://wwx.lanzoui.com/iy9yKlzvrih) | [Android-Platform-Tools](https://developer.android.google.cn/studio/releases/platform-tools?hl=zh-cn)
还有k40的[skkk twrp](https://dl.akr-developers.com/?dir=skkk/TWRP/A12/v3.4_A12)  
先把手机重启进入fastboot，然后连接电脑，打开adb命令行  
```shell
fastboot boot [twrp的名称].img
```
等手机进入rec之后，进入高级→ 刷入当前twrp（flash current twrp） 然后就大功告成啦~twrp就固化成功咯。但是刷入其他ROM之后会掉，所以刷入之前点安装ROM后自动重装twrp）或者重启之前再进行上述操作。   
  
#### 安装Magisk   
重启进入twrp，高级→使用Magisk/Magisk Alpha修补boot，修补完成之后，重启系统，去酷安找对应的Magisk/Magiak Alpha版本的Magisk Manager安装包进行安装。安装完成后可能会提示修复运行环境，点确定，然后手机会自动重启。
