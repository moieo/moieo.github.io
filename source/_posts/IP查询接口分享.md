---
title: IP查询接口分享
date: 2022-07-23 11:52:58
category: 数据接口
tags: 数据接口
---

#### 阿里云

阿里云`ipip.net`提供的 IP 查询接口

{% tabs aliyun %}

<!-- tab 请求接口 -->

接口地址：https://api.myip.la/cn?json
请求示例

```bash
curl https://api.myip.la/cn?json
```

<!-- endtab -->
<!-- tab 响应结果 -->

```json
{
  "ip": "172.104.94.100",
  "location": {
    "country_code": "JP",
    "country_name": "日本",
    "province": "东京都",
    "city": "品川区",
    "latitude": "35.6130514",
    "longitude": "139.7344198"
  }
}
```

<!-- endtab -->

{% endtabs %}

{% link https://www.myip.la/ 详细文档 %}

#### Moieo Api IP 查询接口

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
