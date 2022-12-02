---
title: Nodejs 从零开始写一个 即时通讯程序
date: 2022-06-23 13:04:20
category: 编程语言
tags:
  - Node
---
## 什么是即时通讯？
即时通信（IM）是指能够即时发送和接收互联网消息等的业务。自1998年面世以来，特别是近几年的迅速发展，即时通信的功能日益丰富，逐渐集成了电子邮件、博客、音乐、电视、游戏和搜索等多种功能。即时通信不再是一个单纯的聊天工具，它已经发展成集交流、资讯、娱乐、搜索、电子商务、办公协作和企业客户服务等为一体的综合化信息平台
## 如何在 Web 实现？
WebSocket协议是基于TCP的一种新的网络协议。它实现了浏览器与服务器全双工（Full-duplex）通信，即允许服务器主动发送信息给客户端。因此，在WebSocket中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输，客户端和服务器之间的数据交换变得更加简单。
### WebSocket 的优缺点
- 优点：支持服务器推送消息，支持多个请求
- 缺点：浏览器支持程度不一

## 开始
### 安装 Express
已经安装可以跳过
```bash
npm install -g express-generator
#或
yarn global add express-generator
```
建议使用`yarn`，速度更快
### 创建一个新项目
```bash
express -e "项目名称"
```
安装需要的依赖
```bash
cd "项目名称"
npm install
#或
yarn install
```
启动项目
```bash
yarn start
#或
npm start
```
### 编辑后自动重启项目
安装`nodemon`
```bash
yarn add nodemon
#或
npm install --save nodemon
```
`package.json`里修改相关配置
```json
"scripts": {
    "start": "node ./bin/www.js",
    "dev": "nodemon ./bin/www.js"
 }
```
重命名文件
`bin/www` 重命名成 `bin/www.js`才能自动重启
修改后如下
![package.json](https://img-blog.csdnimg.cn/8d2a3f788fa84c9686f06f736d5f466a.png#pic_center)
重新启动项目
```bash
yarn dev
#或
npm run dev
```
项目目录结构如下
![目录结构](https://img-blog.csdnimg.cn/6b27e21376bf4c65bd8183fbf13b4430.png#pic_center)
浏览器访问`http://127.0.0.1:3000`即可看到如下画面
![浏览器画面](https://img-blog.csdnimg.cn/d5d6951a042e4c0d850438ae0ae0c0a8.png#pic_center)
这样你已经完成了第一步
#### 基本实现
接下来安装需要的模块
```bash
yarn add socket.io
```
创建一个文件夹`sockets`，专门用来写`socket`服务端
在`sockets`文件夹中创建`app.js`
具体内容如下
```javascript
const app = function(server) {
  var io = require('socket.io')(server);
  io.on('connection',function(socket){
    socket.on('login',function(res){ /* 登录 */
      io.emit("登录成功");
    });
  });
}
module.exports = app; /* 导出 */
```
在`bin/www.js`中注册`socket.io`服务
![bin/www.js](https://img-blog.csdnimg.cn/c8336d69cb0d4347bf706c4fd0950f21.png#pic_center)
前端部分
在`public`文件夹创建`index.html`
内容如下
![index.html](https://img-blog.csdnimg.cn/dde1b30f38ee40b88ea53f4e676ed25f.png#pic_center)

浏览器打开：http://127.0.0.1:3000/
你将可以看到 emit 向后端 socket.io 发送的 `hello`

开源仓库：[https://moieo.coding.net/public/pchat/PChat/git/files](https://moieo.coding.net/public/pchat/PChat/git/files)
#### 目前已实现功能
前端：ejs模板
1. 多频道(聊天室)
2. 通过QQ获取昵称和头像
3. 通过 Gravatar / Cravatar 获取头像
4. 聊天Emoji表情、上传图片
5. Markdown / HTML 消息支持
6. 频道成员退出提醒
7. 频道之间不互通
