# 数学游戏

这是一个为儿童设计的数学游戏，旨在帮助他们学习小于20的基本算术。游戏提供了不同的难度级别，并通过图形用户界面进行交互。

## 功能

- 选择不同的难度级别（简单、中等、困难）
- 倒计时计时器
- 显示四个答案按钮，孩子只需点击按钮即可回答问题
- 记录正确答案的百分比，并根据表现给予星级评价

## 安装和运行

1. 克隆仓库：
   ```sh
   git clone https://github.com/your-username/math-game.git
   cd math-game
   ```
2. 安装依赖：
   ```sh
   npm install
   ```
3. 运行：
   ```sh
   npm start
   ```
## 项目结构

```sh
math-game
├── public
│   ├── index.html
│   └── manifest.json
├── src
│   ├── assets
│   │   └── styles.css
│   ├── components
│   │   ├── App.tsx
│   │   ├── Game.tsx
│   │   └── Score.tsx
│   ├── utils
│   │   └── mathUtils.ts
│   └── index.tsx
├── .gitignore
├── package.json
├── tsconfig.json
└── README.ch-n.md
```
