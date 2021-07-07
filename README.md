# 前言

在此之前对 [Rax.js 官方文档](https://rax.js.org/docs/guide/about) 进行 [学习阅读](https://juejin.cn/post/6979875262095687711) 对 Rax 框架大致了解，之后进行实战项目的练习和熟悉。

## 背景

因在线上实在找不到有关于 **Rax.js** 框架的实战项目教程或视频（收费除外），因基于 **React.js** 封装，故个人寻找了较为合适的 React 实战项目视频《[通过React, Gatsby, GraphQL构建响应式旅游网站【中英字幕，分P】](https://www.bilibili.com/video/BV1Yr4y1F7WZ?p=1)》，进行 **Rax.js + Ts + eslint** 简单重构，并且对每个页面功能点进行了详细的注释。

> 在期间同步进行着 [React](https://zh-hans.reactjs.org/) 官网文档的阅读，确实触类旁通。

# 项目总览

### PC 端

![1.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86847cdefc8e4347bf50a0c8719da32e~tplv-k3u1fbpfcp-watermark.image)

### 移动端

![2.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b78b0f7fe864065a29c37487ce8ac92~tplv-k3u1fbpfcp-watermark.image)

### 主要目录

> 对项目主要目录进行解读

```txt
.
├── README.md
├── package.json
├── src	// 主目录
│   ├── app.json
│   ├── app.ts
│   ├── assets	// 静态文件目录
│   │   ├── images	// 图片
│   │   │   ├── 1.jpg
│   │   │   ├── 2.jpg
│   │   │   ├── 21062901.jpeg
│   │   │   ├── 21062902.jpeg
│   │   │   ├── 21063001.jpeg
│   │   │   ├── 3.jpg
│   │   │   └── 4.jpg
│   │   └── svg	// 导航栏 bar
│   │       └── bar.svg
│   ├── components	// 头和尾组件
│   │   ├── Footer
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   └── Header
│   │       ├── index.module.css
│   │       └── index.tsx
│   ├── config.ts
│   ├── global.css	// 全局样式
│   ├── pages	// 页面目录
│   │   ├── Demo	// 练手的小 Demo，与本项目无关
│   │   │   ├── components
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   ├── Email
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   ├── Hero
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   ├── Home	// 主页面
│   │   │   └── index.tsx
│   │   ├── Stats
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   ├── Testimonials
│   │   │   ├── index.module.css
│   │   │   └── index.tsx
│   │   └── Trips
│   │       ├── index.module.css
│   │       └── index.tsx
│   ├── typings.d.ts	// ts 配置文件
│   └── utils	// 工具方法（就一个嘿嘿）
│       └── index.ts
└── tsconfig.json

```

# 项目实战

进行项目实战之前，首先需要将 [Rax.js](https://rax.js.org/docs/guide/create-out) 基础框架搭建好噢。

> 关于内置的配置个人选择的是
>
> - ` App (Build universal application) `
> - `Web 单页面应用`
> - `TypeScript`

## 配置

### app.json

> 应用配置路由信息

```tsx
{
  "routes": [
    {
      "path": "/",
      "source": "pages/Home/index"
    }
  ],
  "window": {
    "title": "柃木🎈"
  }
}
```

### Header

![3.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7eec79e4cf3b464590218891a68e2c64~tplv-k3u1fbpfcp-watermark.image)

项目头部导航栏


### Hero

![4.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74e4eb7f57f440648ab85882f5e976ca~tplv-k3u1fbpfcp-watermark.image)

主页的巨幕视频及项目介绍


### Trips

![5.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af953b89a0af44ee8664027d7bc21f2f~tplv-k3u1fbpfcp-watermark.image)

旅游页面


### Testimonials

![6.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8cae7f2199e54f3b9f9eed2bf08e489d~tplv-k3u1fbpfcp-watermark.image)

客户评价推荐页面


### State

![image-20210703201258728.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9283e6e47d894f768f67327363649221~tplv-k3u1fbpfcp-watermark.image)

特点页面


### Email

![7.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca6b3b2c231444c5b4390f36eff5e2d4~tplv-k3u1fbpfcp-watermark.image)

邮箱页面


### Footer

![8.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09d8dbc7c4fd4200a288657afafdce34~tplv-k3u1fbpfcp-watermark.image)

项目底部栏


# 后言

## 最终项目

> 当以上内容完成后，再进行一次项目的最终展示效果：

### PC

![9.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c78292ba18ac4c2ea3992718ece1a0a6~tplv-k3u1fbpfcp-watermark.image)

### 移动

![10.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a605d9e80f154a519e459bb756acc5ac~tplv-k3u1fbpfcp-watermark.image)

视频教程技术栈是 `React, Gatsby, GraphQL` ，在期间用了一些技巧，对这个项目进行 `Rax` 的重构，以及一些 React 的周边插件，也都是用 Rax 官网文档例子进行对应的替换。

在期间主要熟悉了 JSX 语法，部分 Hooks 使用，ts 语法以及 Rax 的基础内容。但薄弱的地方在于几个方面：

- 各组件的通信，数据流等
- Rax 的后端网络通信
- 测试（自己对这一块十分欠缺）
- 构建部署

个人认为后续可以优化的地方：

- css 转为 sass
- 锚点的过渡应使用 tranform 等，尝试过，但没有很好地实现出来
- Home 应转为一个真正地 layout 布局
- 进一步组件模块化
- 打包构建（薄弱）

最后感想对于学好 Rax 需要打好 React 基础，虽然有许多触类旁通的地方，但还是需要自己一丝不苟地学习，学完还得要在适当的场景下会用才行。

> 若有改进请指点一二噢！Thank~