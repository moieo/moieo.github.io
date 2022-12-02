---
title: 开放接口
date: 2022-10-12 12:50:21
---

## IP 查询接口

{% tabs moieo-api %}

<!-- tab 请求接口 -->

接口地址：https://api.moieo.top/ip/114.114.114.114
请求示例
例如 IP 为：114.114.114.114

```bash
curl https://api.moieo.top/ip/114.114.114.114
```

<!-- endtab -->
<!-- tab 响应结果 -->

```json
{
  "code": 200,
  "msg": "Success",
  "data": {
    "addr": "江苏省南京市",
    "oper": "南京信风网络科技有限公司GreatbitDNS服务器"
  }
}
```

<!-- endtab -->

{% endtabs %}

数据来源于`纯真网络`开源数据库

## Gravatar 反向代理

{% tabs moieo-gravatar %}

<!-- tab 请求接口 -->

请求接口：https://api.moieo.top/gravatar/:mail_md5

| 参数     | 注释             |
| -------- | ---------------- |
| mail_md5 | 邮箱账号 MD5 值  |
| s        | 头像大小(非必要) |

例如：

https://api.moieo.top/gravatar/1cbeb857054d0e1b9ee71e674c470029?s=600

<!-- endtab -->
<!-- tab 请求结果 -->

![请求结果](https://api.moieo.top/gravatar/1cbeb857054d0e1b9ee71e674c470029?s=600)

<!-- endtab -->

{% endtabs %}

## QQ 信息

{% tabs moieo-qqinfo %}

<!-- tab 请求接口 -->

请求接口：https://api.moieo.top/qqinfo/:qq

| 参数 | 注释  |
| ---- | ----- |
| qq   | QQ 号 |

例如：

https://api.moieo.top/qqinfo/884938249

<!-- endtab -->
<!-- tab 请求结果 -->

```json
{
  "code": 200,
  "msg": "Success",
  "data": {
    "gender": 0,
    "nickname": "Moieo."
  }
}
```
<!-- endtab -->

{% endtabs %}
