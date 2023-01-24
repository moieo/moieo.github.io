---
robots: noindex,nofollow
sitemap: false
menu_id: notes
title: 笔记
comments: false
---

{% about avatar:/hello.webp height:96px %}

<br/>

{% endabout %}

{% folding git submodules %}

**拉取 submodule**

{% copy git submodule update --init --recursive %}

**更新 submodule**

{% copy git submodule update --recursive --remote %}

{% endfolding %}


{% folding GnuPG 命令 %}

**生成密钥**
{% copy gpg --gen--key %}

**生成完整功能的密钥**
{%copy gpg --full-generate-key %}

**列出密钥**
{%copy gpg --list-keys %}

**导出公钥**
{%copy gpg --export <name> --output publickey.gpg %}

**导出私钥**
{%copy gpg --export-secret-key <name> --output privatekey.gpg %}

**导出 ASCII 格式密钥**
{%copy gpg --armor --export <name> --output publickey.gpg %}
{%copy gpg --armor --export-secret-key <name> --output privatekey.gpg %}

**发送密钥到公钥服务器**
{%copy gpg --keyserver <keyserver> --send-keys <name> %}

**从公钥服务器搜索密钥**
{%copy gpg --keyserver <keyserver> --search-keys <email/name> %}

**从公钥服务器导入密钥**
{%copy gpg --keyserver <keyserver> --receive-keys <emial/name> %}

**公钥服务器**
{%copy pgp.mit.edu %}
{%copy keyserver.ubuntu.com %}
{%copy pgp.cn %}
{%copy keys.openpgp.org %}

{% endfolding %}
