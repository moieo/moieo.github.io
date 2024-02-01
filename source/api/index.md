---
title: 开放接口
date: 2022-10-12 12:50:21
---
<!-- TOC depthFrom:2 orderedList:true -->

- [BaseURL](#baseurl)
- [POST IP查询](#post-ip查询)
  - [请求参数](#请求参数)
  - [返回结果](#返回结果)
  - [返回数据结构](#返回数据结构)
- [POST 圆周率查询](#post-圆周率查询)
  - [请求参数](#请求参数-1)
  - [返回结果](#返回结果-1)
  - [返回数据结构](#返回数据结构-1)

<!-- /TOC -->

## BaseURL
  - https://api.moieo.cn

## POST IP查询

POST /ip/{ip}

根据 IPv4 地址查询所在归属地的地址

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|ip|path|string| 是 |需要查询的 IPv4 地址|
|timestamp|header|string| 是 |时间戳 (ms)|

> 返回示例

> 成功

```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "ip": "8.8.2.2",
    "ip_number": 134742530,
    "location": "美国科罗拉多州布隆菲尔德市",
    "net_service": "Level3通信股份有限公司"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none|状态码|请求后的状态代码|
|» msg|string|true|none|消息|状态说明|
|» data|object|true|none|数据|存储请求结果|
|»» ip|string|true|none|IPv4 地址|所查询的 IPv4 地址|
|»» ip_number|integer|true|none|IPv4 整数|IPv4 的十进制值|
|»» location|string|true|none|位置|IPv4 所在归属地的位置|
|»» net_service|string|true|none|互联网服务商|IPv4 地址对应的互联网服务商|

## POST 圆周率查询

POST /pi/{pi}

根据 出生日期，查询在圆周率小数点后所出现的位置

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pi|path|string| 是 |年月日|
|timestamp|header|string| 是 |时间戳(ms)|

> 返回示例

> 成功

```json
{
  "code": 200,
  "msg": "Success",
  "data": {
    "date": "20050520",
    "position": "146457109"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none|状态码|请求后的状态代码|
|» msg|string|true|none|消息|状态说明|
|» data|object¦null|false|none|数据|存储请求结果|
|»» date|string|false|none|日期|请求参数中的出生日期年月日|
|»» position|string|false|none|位置|所在圆周率中的位置|
