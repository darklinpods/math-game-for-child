# Math Game

## Overview
This project is a fun and interactive math game designed for children to learn basic arithmetic with numbers less than 20. The game features a graphical user interface that makes learning engaging and enjoyable.

## Features
- Interactive math questions with addition, subtraction, multiplication, and division.
- Score tracking to motivate players.
- User-friendly interface suitable for children.

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