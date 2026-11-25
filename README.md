# cg-whale · 前端页面复刻练习

> ⚠️ 本项目为**个人前端学习练习项目**，页面布局参考 CGTeamwork（厦门创想视角）产品介绍页，
> **并非官方网站，未获授权，不用于任何商业用途。**

## 项目简介
使用 React + Vite + SCSS Module 复刻 CGTeamwork 产品介绍页的单页结构，
用于练习组件拆分、SCSS 模块化样式、响应式布局与静态页面还原度。

## 技术栈
- React 19
- Vite 7（开发 / 构建 / 预览）
- SCSS（每个组件独立 `.module.scss`）
- ESLint 9

## 目录结构
```
cg-whale/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx            # 页面骨架，按板块拼接组件
    ├── App.css
    ├── assets/img/        # 本地图片素材（logo、合作伙伴 logo 等）
    └── components/
        ├── Top/           # 顶部导航
        ├── Home/          # 首页 Banner
        ├── Advantage/     # 功能优势（8 张功能卡片）
        ├── Merit/         # 产品亮点
        ├── Product/       # 产品介绍
        ├── Card_5/        # 视频展示
        ├── Card_6/        # 图文模块
        ├── Card_7/        # 图文模块
        ├── Customer/      # 客户/合作伙伴墙
        └── About/         # 关于我们
```

## 本地运行
```bash
git clone <仓库地址>
cd cg-whale
npm install        # 或 yarn
npm run dev        # 默认 http://localhost:5173
npm run build      # 构建到 dist/
npm run preview    # 预览构建产物
```

## 已实现
- 10 个业务板块组件化拆分，约 1600 行代码
- 单文件 SCSS Module，样式互不污染
- 导航锚点跳转 + 回到顶部
- 合作伙伴 Logo 墙、悬浮微信/公众号二维码提示

## 已知限制
1. 部分图片与视频仍指向原始站点外链，**离线或对方站点变动时会失效**，后续替换为本地素材
2. 仅适配 PC 端为主，移动端适配未完成
3. 无数据交互层，纯静态展示页

## 免责声明
1. CGTeamwork 及厦门创想视角科技有限公司相关的商标、图片、文案等知识产权归其权利人所有。
2. 本项目仅用于个人技术学习与作品展示，不用于商业宣传、线上运营等任何商业行为。
3. 如权利人认为存在侵权，请通过仓库 Issue 联系，将立即删除相关内容或整仓下线。
