---
robots: noindex
sitemap: false
menu_id: friends
title: 友链
seo_title: 友链
toc_title: 友链索引
# comments: false
---

## 各位朋友们

{% friends api:https://api.moieo.cn/friends %}

## 来自酷安的朋友们

{% friends coolapk %}

## 关于友链

**关于交换友链**
本站非常热衷于交换友链，但贵站需满足一下条件：

- 添加本站在贵站的友链之中
- 贵站符合法法律法规，且无广告、非盈利性
- 贵站高质量、原创创作 (优先)
- 非下列域名后缀 (优先)
  - .tk
  - .ml
  - .ga
  - .gq
  - .cf
  - .eu.org
  - .vercel.app
  - .netlify.app

### 如何加入友链？

{% timeline %}

<!-- node 第一步：将本站添加至贵站友链 -->

本站友链信息：

{% codeblock lang:yaml %}
title: 晴雨笔记
avatar: https://blog.moieo.net/favicon.ico
url: https://blog.moieo.net
description: 素白青韵，简静安然
{% endcodeblock %}

<!-- node 第二步：提交友链申请 -->

发送邮件至 `moe@moieo.net`
主题：晴雨笔记友链申请
内容格式：
{% codeblock lang:yaml %}
title: xxx # 网站标题
avatar: xxx # 头像
url: xxx # 地址
description: xxx # 描述
{% endcodeblock %}

{% endtimeline %}

### 不想发邮件？自助提交

{% timeline %}

<!-- node 第一步：将本站添加至贵站友链 -->

本站友链信息：

{% codeblock lang:yaml %}
title: 晴雨笔记
avatar: https://blog.moieo.net/favicon.ico
url: https://blog.moieo.net
description: 素白青韵，简静安然
{% endcodeblock %}

<!-- node 第二步：提交友链申请 -->

申请地址：[https://github.com/moieo/rainbow-friends/issues](https://github.com/moieo/rainbow-friends/issues)

选择 `友情链接模板`

按照模板在双引号内修改你自己的信息

{% endtimeline %}
