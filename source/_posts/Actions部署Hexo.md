---
title: 还在手动部署 Hexo？看看这里
date: 2022-11-13 15:36:00
tags:
---

## 简单介绍

Github Pages 是 Github 提供的一个免费的静态页面服务，可以用来部署一些静态页面，例如：Hexo、Jekyll、Hugo 等页面生成器所生成的页面，但是每次在本地写完自己的文章都要执行一次命令来部署，有点麻烦。
> Github Actions 是 Github 的持续集成服务。简单的说，它可以使你的代码仓库自动化执行一些指令或代码。

## 操作过程
![](https://preview.cloud.189.cn/image/imageAction?param=281BC75E051E5845075107DEB33487F12D772DC419885E69B5657F649D444F012ACBC105479225B477E245ADC74C713F818B5AA08B60C3A5BA0CF918A2C5897AEA55B07964E4790457705EE30241333032C74FD89D579128156768E382DD23963DA9D7654725229A8A215C9954A4DF82073C366A)

在你的仓库设置里，有一个 `Pages` 选项，在里面 `Build and deployment` 的 `Source` 选项设置如下
![](https://preview.cloud.189.cn/image/imageAction?param=62F7FA15DF7B2E5253987DE124C904D350C80EE8F6B08722A14E3D3EA52775B14455402D83C9F7FDDF6A3C06C6021B34D303404961F1052C870E36F5039F71E946C312FF4F97CD5EA1F68704E5A3A6F1AB482AAA1BFB19419DE2D838948B89A8C28AF75B446EDB055E665C7F02D929ECA4990735)

在源代码根目录新建文件就，结构如下

![](https://preview.cloud.189.cn/image/imageAction?param=46485EF9EB2A50B38C47FFA0F045157301C7B641AE48358A2472DA9A28C7F79ACB72E227E929F6A349E4F7D5BA2A8C4A5DF5DCA5BBDDA11CD57E993AF6F204BAF949552773D7BA13AFDA01E7168DC309C58C52D548467E7A78176AD3B932D6B9D7F3577FB6D068D0430F504615790532FF82EB44)

.github/dependabot.yml 可以忽略

.github/workflows/build.yml 内容如下

```yaml
name: Deploy Hexo
on:
  push:
    branches: [main] # 改成分支名称
  pull_request:
    branches: [main] # 改成分支名称
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest     
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: recursive
      - name: Use Node.js 
        uses: actions/setup-node@v3
        with:
          node-version: 16.x
      - name: Setup Hexo Blog Dependencies
        run: |
          npm install hexo-cli -g
          npm install
      - name: Build with Hexo
        run: |
          hexo clean
          hexo generate
          ls
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: public
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

完成后推送至 Github，这里必须推送整个 Hexo 的源代码，推送后 在 Actions 里可以看到执行过程和异常命令

![](https://preview.cloud.189.cn/image/imageAction?param=4E42E0004BF5071DA108CBA5006F35D5145F6B7BB403DF926142BBB2CF9E7FB0B0456D652CCB9DAF99252BCCEF5D33CA99E355BB8BAEF088950FF55A6D2B70CA0BCA4F0B23AEC37E9DBCF96D641F0961BE706F9457A3A742ED932DB7A746C82944790DB97D36397D4E727CE520BA65B02FAE644C)

有显示绿色勾说明正常部署，再次查看 Pages 设置 如下
![](https://preview.cloud.189.cn/image/imageAction?param=386EA170E78916C84528E688752D8256E5ED8A31FCA76CC97ABF95935D3CFABE2AD7EB933619ED286908FE1483E02ADE0D3C4ACCAD0A221C9A700D899901215EF5137064FE71BB6366AF02D42BDE0A70FB4EC59627E63C5A83A33E029C63CE6756936FE911C2D3EF45AA8F3C562A5EEFB498A3D2)

我这边已绑定自己的域名，查看效果可自行浏览器访问上图域名查看，有 Visit site 按钮说明自动化部署成功图片，后面可以直接在 Github 内创建 .md 文件编写文章，Github 也自带有 Markdown 的一个预览，比较方便

