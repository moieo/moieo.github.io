---
title: 使用 Caddy 部署 Vue 等单页面Web应用
date: 2023-01-25 16:19:21
cover: https://preview.cloud.189.cn/image/imageAction?param=0D9365D5533D6BCDBA4686599C3CE86CECD4F6A6BD93D903ED43FB918E50BC51091505DCC6AF4371F042CF9C1F11452DA0C6D8D3292B7607282A60F41FA119002DDBE1FA137A6034367F152C4EDBB32E3891CB9A3DB741C48D802DD204BF93F245C7DF48E68A71A88E86FF4CC8AB567779AC0EB3
banner: https://preview.cloud.189.cn/image/imageAction?param=0D9365D5533D6BCDBA4686599C3CE86CECD4F6A6BD93D903ED43FB918E50BC51091505DCC6AF4371F042CF9C1F11452DA0C6D8D3292B7607282A60F41FA119002DDBE1FA137A6034367F152C4EDBB32E3891CB9A3DB741C48D802DD204BF93F245C7DF48E68A71A88E86FF4CC8AB567779AC0EB3
categories:
  - Vue
  - Node
tags:
  - Caddy
  - Node
---

# 安装 Caddy

Caddy 是一个 Go 语言编写的开源 HTTP 服务器

> Caddy 有下面这些开箱即用的特性:
> - 全自动支持 HTTP/2 协议，无需任何配置。
> - Caddy 使用 Let’s Encrypt 让你的站点全自动变成 HTTPS，无需任何配置。
> - 合理使用多核多核 得益于 go 的特性
> - 完全支持 IPv6 环境
> - Caddy 对 WebSockets 有很好的支持
> - 自动把 Markdown 转成 HTML
> - Caddy 对 log 格式的定义很容易
> - 易于部署 得益于 go 的特性，caddy 只是一个小小的二进制文件，没有依赖，很好部署
> - 得益于 Go 的跨平台特性，Caddy 很容易的支持了三大主流系统：Windows、 Linux、Mac
> 来自 知乎 [@shooter](https://zhuanlan.zhihu.com/p/144208057)

{% link "https://caddyserver.com/" "Caddy 官网" icon:"/favicon.ico" desc:false %}

{% link "https://caddyserver.com/download" "下载 Caddy" icon:"/favicon.ico" desc:false %}

本文配置 均使用 `Caddyfile` 文件
# 基本配置

HTTP + HTTPS
```conf
moieo.cn {
  root * /srv/http # 网站根目录
  file_serve # 启用文件系统
}
```

HTTP
```conf
http://moieo.cn {
  root * /srv/http # 网站根目录
  file_serve # 启用文件系统
}
```
反之只用 HTTPS

# Vue 等单页面应用部署

```conf
moieo.cn {
  root * /srv/http # 网站的根目录
  encode gzip zstd # 开启 gzip

  route {
    # 找不到文件时 使用 index.html
    # 解决 history 路由模式 404 的问题
    try_files {path} /index.html
    file_server # 开启文件系统
  }

  # 处理日志
  log {
    output file /data/moieo.cn.log # 保存文件
    format console # 日志格式
    level INFO # 日志级别
  }
}

```
# 开启 Caddy

{%copy ./caddy start --config ./Caddyfile %}

# 文档

{% link "https://caddyserver.com/docs/" "Caddy 官方文档" icon:"/favicon.ico" desc:false %}

{% link "https://caddy2.dengxiaolong.com/docs/" "Caddy 中文文档" icon:"/favicon.ico" desc:false %}
中文文档访问速度快
