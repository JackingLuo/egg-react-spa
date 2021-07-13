# egg-react-webpack-boilerplate

基于 Egg + AntD + Webpack + ReactSPA + SSR 骨架项目

## 文档

- https://www.yuque.com/easy-team/egg-react/online
- https://zhuanlan.zhihu.com/easywebpack

## 依赖

- [easywebpack](https://github.com/easy-team/easywebpack) ^4.x.x
- [easywebpack-react](https://github.com/easy-team/easywebpack-react) ^4.x.x
- [egg-view-react-ssr](https://github.com/easy-team/egg-view-react-ssr) ^2.1.0
- [egg-webpack](https://github.com/easy-team/egg-webpack) ^4.x.x
- [egg-webpack-react](https://github.com/easy-team/egg-webpack-react) ^2.0.0

## 使用

#### 安装 cli

```bash
npm install easywebpack-cli -g
```

#### 安装依赖

```bash
npm install
```

#### 本地开发启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001

#### 模拟发布模式

- 首先在本地或者 ci 构建好 jsbundle 文件

```bash
npm run build
```

- 然后,启动应用

```bash
npm start
```

#### 生产部署

- 1.首先在本地或者 ci 构建好 jsbundle 文件

```bash
//会生成一个public文件夹和在config文件夹中生成一个manifest.json文件
easy clean all
easy build prod
```

- 2.将整个项目用命令打包成 zip 上传到服务器（中间层）

```bash
easy zip  //需要 npm install --production
或者
easy zip --deps --nodejs
```

- 3.启动项目

```bash
npm start （对应scripts命令：egg-scripts start --port 7001 --workers 4）

或

// 服务后台运行，退出命令行，保证进程不退出
npm run backend（对应scripts命令：nohup egg-scripts start --port 7001 --workers 4 &）
```
