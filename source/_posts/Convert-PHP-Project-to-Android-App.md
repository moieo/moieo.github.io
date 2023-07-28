---
title: Convert PHP Project to Android App
date: 2023-07-28 03:03:50
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1690459774651/3bb125aa-73da-4975-af31-c050d37a7850.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp
banner: https://cdn.hashnode.com/res/hashnode/image/upload/v1690459774651/3bb125aa-73da-4975-af31-c050d37a7850.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp
categories:
  - Android
tags:
  - Android
---

## Before Beginning
PHP is an excellent choice for beginners to learn about development of Web App. For a PHP learner, if you want to share your works to others, making it to an Android App is a best choice without establishing a website. Don't worry about matters, what we need is just a mobile phone! 

[HopWeb](https://play.google.com/store/apps/details?id=com.venter.hopweb) App can just make an Android App from a PHP project. 

## Content
* Preparations
* Preview Project
* Customize Your App
* Install & Share Your App
* FAQ

## Preparations
* HopWeb (Version 2.7.0 or above, download via [Google Play](https://play.google.com/store/apps/details?id=com.venter.hopweb))
* An Android phone with Android 8.0 and above. (64-bit ARM CPU is also necessary.)

## Create or Import A PHP project on HopWeb
- Open HopWeb, create a PHP project by pressing **[Create Project]** button. And then check "PHP Template".

![The dialog of creating project](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i7nrd2hfnmgfzpi674r1.jpg)

- If you want to import an existing PHP project, you can press **[IMPORT PROJECT]** button on "Create Project" dialog, and then choose the ZIP file of your project.

- Furthermore, you could download a project that is shared by others on **ideaSky**. As a demonstration, I downloaded the resource named **"Simple User System"**. You can find it by searching RID: IDEA-10002.

![Find a resource on ideaSky](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0i9kol7qhywkcatdp1br.jpg)
![The detail page of ideaSky](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zst9v5i8mywkzkt708e5.jpg)

Go back Home after downloading, and you can see the project. Just open it.

## Preview Project
HopWeb has a built-in **PHP environment**, so that you can preview the PHP project directly through HopWeb.
- Touch the "≡" icon in the left to open project manager.

![The page of project editing](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3wm5dr5obit9mpdzhs5y.jpg)
- Click `index.html` or `index.php` to open the file and preview it by the **green triangle icon** in the bottom right corner.
- Let's register an account, and log in then.

![Register](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hgzqhssoq6o2bunvlqnq.jpg)
![Log in](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jhkzysdyyfmledgui1d4.jpg)

- You can find the registered accounts information in the `data` folder. Clear the content of file `users.json` to delete registered accounts.

![Project manager](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ss71msuyoc0r7lfl2oy7.jpg)

![Data file editing](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wgpkfjtl86rot15xr7d4.jpg)

## Customize Your App
- If you want to use a different icon rather than the default, you need to **import** the icon image file to the project first.

Click **[Import]**-**[Import Media File]**, and choose an image file you like. You can see the image file you imported in the file list after importing.

![Imported file](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rxpgeyprbn5z11ckafjv.jpg)

- Click **[Publish Your Website]**, and click **[Convert to Android App]** then.

![Publish dialog](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6zcc3e0u4v9ub04kkqfr.jpg)

- Click **[Application Icon]** and choose the image file we've just imported.

![Modify App icon](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/quqhvptjlve57xlb0qm3.jpg)

- Modify other information of the App to your liking. **Don't forget to check [Carry PHP Environment].**

![Modify other information](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zn1mrcten95cbupk8jmf.jpg)

- After customizing, press **the OK icon** at the bottom of the page to produce the APK installer file. 

![PHP prompt](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z6kwl9wta5i48q8fu1jt.jpg)
![Conversion finished](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uohztt63rdejs6vo70bx.jpg)

## Install & Share Your App
- After conversion, go back to **the project manager**, and refresh the file list by swiping it down. You can see the produced APK file.

![The APK file in file list](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/byky4yzivm6uopwz72ih.jpg)

- You could open the system file manager App and locate into "Internal storage -> Venter -> HopWeb -> Simple User System", and you will see the APK file. Install by clicking on it.


![The APK file in file manager App](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4gmcode72w932em4e6ri.jpg)
![Install your App](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2m8u93uuenzz5bcd2g4n.jpg)

- Open your App, and the webpage has become a client application. The PHP code can also run as normal.
![App screenshot 1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sdus89azqvwwl7erep6z.jpg)
![App screenshot 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2u6u8rgctstc5t12q9yc.jpg)

## FAQ
* There is an error when open the produced App: The port of PHP environment may be incorrect. You can modify the port in the **Convert to Android App** page. The range of ports is 1024 ~ 65535. Common ports like 8080 are not recommended.
* The PHP project used MySQL: HopWeb will support database server like MySQL in the future version, but not currently supported.
* Incompatible PHP version: The PHP version of HopWeb 2.7.0 is 8.2.8. If your PHP project uses some syntactic features of PHP 7, there may be some problems.
* System requirement of produced App: Require Android 6.0 and above systems. The architecture of CPU must be ARM 64.

