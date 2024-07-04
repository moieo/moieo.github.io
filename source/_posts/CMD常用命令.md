---
title: CMD常用命令
date: 2024-07-04 20:37:38
cover:
categories:
 - Windows
tags:
 - Windows
---
### 查看目录文件

```cmd
dir
```

### 查看本机 IP

```cmd
ipconfig
```

### 清除屏幕

```cmd
cls
```

### 复制文件

```cmd
move 路径\文件名 路径\文件名
```

### 删除文件

```cmd
del 文件名
```

### 测试网络是否畅通

```cmd
ping [IP/主机名]
```

### 列出所有任务及进程号

```cmd
tasklist
```

### 路由跟踪

```cmd
tracert [IP/主机名]
```

### 组策略

```cmd
gpedit.msc
```

### IP地址侦测器

```cmd
nslookup
```

### 资源管理器

```cmd
explorer
```

### 注销

```cmd
logoff
```

## 关机

```cmd
shutdown -r -t 0
```

#### 倒计时 60 秒关机

```cmd
shutdown
```

### 本地用户和组

```cmd
lusrmgr.msc
```

### 本地用户设置

```cmd
services.msc
```

### 记事本

```cmd
notepad
```

### 垃圾整理

```cmd
cleanmgr
```

### 开始信使服务

```cmd
net start messenger
```

### 停止信使服务

```cmd
net stop messenger
```

### 计算机管理

```cmd
compmgmt.msc
```

### DVD 播放

```cmd
dvdplay
```

### 启动字符映射表

```cmd
charmap
```

### 磁盘管理

```cmd
diskmgmt.msc
```

### 计算器

```cmd
calc
```

### 磁盘碎片整理

```cmd
dfrg.msc
```

### Chkdsk 磁盘检查

```cmd
chkdsk
```

### 设备管理器

```cmd
devmgmt.msc
```

### 注册表编辑器

```cmd
regedit
```

### 检查Windows版本

```cmd
winver
```

### 扫描错误并复原

```cmd
sfc /scannow
```

### 任务管理器

```cmd
taskmgr
```

### 写字板

```cmd
write
```

### 屏幕键盘

```cmd
osk
```

### 打开控制台

```cmd
mmc
```

### 关机/重启/注销/休眠/定时

 - 关机 `shutdown /s`
 - 重启 `shutdown /r`
 - 注销 `shutdown /l`
 - 休眠 `shutdown /h /f`
 - 取消关机 `shutdown /a`
 - 定时关机 `shutdown /s /t` (3600秒后关机)

### 清除本地DNS缓存

```cmd
ipconfig /flushdns
```

### 服务管理

#### 显示当前正在运行的服务

 ```cmd
net start
 ```

#### 启动指定的服务

```cmd
net start [服务名]
```

#### 停止指定服务

```cmd
net stop [服务名]
```