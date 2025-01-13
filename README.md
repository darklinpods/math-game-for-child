# Math Game

## Overview/简介
This project is a fun and interactive math game designed for children to learn basic arithmetic with numbers less than 20. The game features a graphical user interface that makes learning engaging and enjoyable.

这是一个为儿童设计的数学游戏，旨在帮助他们学习小于20的基本算术。游戏提供了不同的难度级别，并通过图形用户界面进行交互。

## Features/功能
- Interactive math questions with addition, subtraction, multiplication, and division.
- Score tracking to motivate players.
- User-friendly interface suitable for children.
--
- 选择不同的难度级别（简单、中等、困难）
- 倒计时计时器
- 显示四个答案按钮，孩子只需点击按钮即可回答问题
- 记录正确答案的百分比，并根据表现给予星级评价

## Project Structure
```
math-game
├── src
│   ├── components
│   │   ├── App.tsx        # Main component managing game state
│   │   ├── Game.tsx       # Handles game logic and UI
│   │   └── Score.tsx      # Displays current score and messages
│   ├── assets
│   │   └── styles.css      # Styles for the application
│   ├── utils
│   │   └── mathUtils.ts    # Utility functions for math problems
│   └── index.tsx           # Entry point of the application
├── public
│   ├── index.html          # Main HTML file
│   └── manifest.json       # Metadata for the application
├── package.json            # npm configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd math-game
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Game
To start the game, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.