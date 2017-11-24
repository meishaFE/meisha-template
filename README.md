# 梅沙科技-项目模版

## 功能说明

此模板是根据vue官方模板，结合vue-element编写的一套针对后台系统的模板。此模板包含：eslint对js代码的编写约束；vuex及vue-router集成；公共页面（404，登录页，欢迎页）的集成；分页组件（2种结构样式）的集成；弹出层（分为3种规格）的集成；公共头部以及菜单栏的集成；整体系统布局的初始化；fetch.js和类型检测等使用频率高的公共js方法及过滤器集成

## 安装及使用

项目安装之前，确保你的电脑已安装node及npm

```bash
npm install -g vue-cli
vue init meishaFE/meisha-template my-project
cd my-project
git init
npm install
npm run dev
```

## 提pr

1. fork 当前项目
1. clone 自己 github 项目到本地进行开发；pull, commit, push
1. 进入到自己 github 上找到此项目，切换到 Pull request 模块，点击 New pull request 按钮；然后会出现 Comparing changes界面（分支可切换），填写录入修改提交信息之后，点击 Create pull request 按钮即可完成一次 pr 提交

## eslint自定义规则说明

[点击查看](./ESLINT.md)

## TODOS

- [ ] 文档更新
- [ ] 主页面顶级菜单栏组件
