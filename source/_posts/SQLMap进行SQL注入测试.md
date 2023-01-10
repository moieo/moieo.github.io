---
title: SQLMap进行SQL注入测试
date: 2022-07-31 22:59:35
categories: 网络安全
headimg: https://s2.loli.net/2022/07/31/tJ3lKrcPa5ZqTRy.png
tags:
  - SQL注入
---
## 介绍
### 简介
SQLMap 是一个开源的渗透测试工具，可以用来自动化检测，利用SQL注入漏洞，获取数据库的权限。
它的检测引擎非常强大，针对不同类型的数据库有不同的方案和选项，获取数据库中存储的数据。

目前支持 MySQL、Oracle、PostgreSQL、Microsoft SQL Server、Microsoft Access 等数据库

### 输出级别
> 0：只显示python错误以及严重的信息
> 1：同时显示基本信息和警告信息（默认）
> 2：同时显示debug信息
> 3：同时显示注入的payload
> 4：同时显示HTTP请求
> 5：同时显示HTTP响应头
> 6：同时显示HTTP响应页面

## 安装
> 注：安装SQLMap需要Python环境
{% link https://sqlmap.org SQLMap官网 %}

克隆仓库
```bash
git clone --depth 1 https://github.com/sqlmapproject/sqlmap.git sqlmap
cd sqlmap
python sqlmap.py
```
你也可以将它配置到环境变量中，具体方法请上搜索引擎找
![运行图](https://s2.loli.net/2022/07/31/tJ3lKrcPa5ZqTRy.png)
我这边配置了环境变量，所以可直接执行

## 使用

### 1. 检查是否存在注入
例如注入目标为：http://127.0.0.1:8080/?id=1
则命令如下
```bash
python sqlmap.py -u "http://127.0.0.1:8080/?id=1"
```
执行过程如下
![执行过程](https://preview.cloud.189.cn/image/imageAction?param=0019C6D796D2153341E8C5F5B039E741160935D3B3BD3FCC8760BFFE67AA0F5893088DF709200FDF0276DEB89D39EB6572AAAA1C798F6B4B182B227D741BE33DC5A86AE0B70C423D21B9266E9BB8B40EB9BAB8C0FD3FA882BF07511A8E6DD2C1952338C5319307E16DACB21D14DB992A816E7FB4)
执行完毕后，可看到数据库类型，如果服务器后端使用的是PHP语言，会显示PHP的版本
![执行完毕](https://preview.cloud.189.cn/image/imageAction?param=E8EC8B594170BF8FE209A702F83FE73DF567C58B9556AC9060F915C738A141F269411BCEACE34E4444C882FB6674731590325252AD945018E78288F71AFB98AC5FD7BFEAFC0332B2CC8A054D6167B4160777AC85998D5E47E3B82F07F2521DC27AB571F4D5807E7E4310D7579309813D4C48009E)
如图所示，数据库类型为 `MySQL`
PHP版本为 `8.1.8`

### 2. 查询当前用户下所有数据库
用途：该命令在确定网站存在SQL注入漏洞时，用于查询当前用户下的数据库
```bash
python sqlmap.py -u "http://127.0.0.1:8080/?id=1" --dbs
```
![所有数据库](https://preview.cloud.189.cn/image/imageAction?param=4F06FE8D881B891319D5C5B3B93FC0259210F560FCC1DB67089B507C92FF48EEF7D7B66129F77E606EC5145BC9E931D3D7FA03A0555EBCCEB72B03AA6C50A61692300A0056E40F6C7CFAFE8CB3A180F3E7F64DD63F810BD978883B25FC702B2B5A4F7EF8D4DC051497B4BCFC3EB6D9A9B047F8F1)
运行结束后可看到一些 数据库 的名称，它们将以`[*]`开头
`--dbs`参数缩写成`-D xxx`，该参数为查询`xxx`数据库下的内容

### 3. 获取数据库中的表名
用途：该命令在确定网站存在SQL注入漏洞时，可获取数据库下所有表的名称

`-D` 参数用来指定数据库，例如 `-D moieo`
```bash
python sqlmap.py -u http://127.0.0.1:8080/?id=1 -D moieo --tables
```
![所有数据表](https://preview.cloud.189.cn/image/imageAction?param=1311B58642F6F59AA3858D6CA4508E30CCCC129D856553ACB52B23B84F54C85CFC45F20FDAB7D1AC2705684A6BF3AB3C338AD718CC488EEA8019E45F99B6CAC0F2B91423A8F5490495A5B051FA6AC0987690C6B30528A9D994BE2F20CFFD10FE52C37CE525A2A511A03BF7C4FC897775BAF4ADCD)
运行结束后可看到所有数据表的名称，继续注入可使用 `-T` 参数，该参数为 `--tables`的缩写，用于指定数据表继续注入获取数据

### 4. 获取数据表的字段名
用途：在查询完表名后，指定数据库和数据表进行注入测试，获取该表下所有字段
```bash
python sqlmap.py -u http://127.0.0.1:8080/?id=1 -D moieo -T moieo_comments --columns
```
![所有字段](https://preview.cloud.189.cn/image/imageAction?param=FEB6CE1C01E548FD9329EED2F00B36118315C63A83C984AE0FC841967A79F14F17666E8607EE372CC7D0BC92504C6D6D1F06348FAB4D942C557C44307B014DAB98C055752D5A778DFE327C3E9C011A74ADBDC0DA9EA87324E2360DEECE9E3054D1839E004A33B53956F92DC74C9F632043D6354D)
运行结束后得到所有字段

### 5. 获取数据表内存储的数据
用途：在获取并确定数据表内有字段时使用，可获得数据表内存储的数据
```bash
python sqlmap.py -u http://127.0.0.1:8080/?id=1 -D moieo -T moieo_comments --dump
```
![表内的所有数据](https://preview.cloud.189.cn/image/imageAction?param=5C8D3F2F0A2670464260C7706B949364D3DF5765D5774FAE7BE33CD0979CD7E51F9A418D6070518BD57E00ACB61F23E1219A90827476EBABE2664D25A04D77553B263DF53017C5219411CC51E9EDF451E8490AD61A4F3A3E5F62D8B5BB4F4C95D6A5AD597197F8E1F9FD36ED3DC40CE5B080CBCA)
可以看到，执行结束后可获得数据表内每个字段的数据

## 其他选项
### 1. 获取数据库所有用户
在有权管理所有用户的情况下 `--users` 选项可获得数据库所有用户名

### 2. 获取数据库用户的密码
在有权管理所有用户的情况下 `--passwords` 选项可获得所有用户的密码，该选项获得到的数据是经过哈希算法加密的
可以尝试使用 https://www.cmd5.com/ 硬解

### 3. 获取当前网站数据库的名称
`--current-db` 选项，可获得当前网站数据库的名称

### 4. 获取当前网站数据库使用的用户名称
`--current-user` 选项，用于获取当前用户名称

### 杂项
`--is-dba` 用于判断用户是否管理员权限


`--roles` 列出数据库管理员角色


`--referer`，当`--level`的参数为3或以上，用于指定来源网站，欺骗目标网站，参数为URL


`--sql-shell` 运行自定义SQL语句


`--os-cmd` 或 `--os-shell` 执行任意操作系统命令


`--file-write xxx.php --file-dest xxx.php` 上传文件到数据库服务器，前者为源文件路径，后者为目标数据库服务器的文件路径


`--file-read` 从数据库服务器中读取文件，参数为数据库服务器中的文件路径

