import React, { useState } from 'react';
import Game from './Game';
import Score from './Score';
import "../assets/styles.css";

/**
 * App component is the main component of the math game application.
 * It manages the game state including score, message, game activity, level, and stars.
 * It renders a selection for game levels, the Game component during active game play,
 * and the Score component when the game ends. It also provides a button to restart the game.
 *
 * @returns {JSX.Element} The JSX element representing the App component.
 */
const App: React.FC = () => {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("游戏结束!");
  const [gameActive, setGameActive] = useState(true);
  const [level, setLevel] = useState(1);
  const [stars, setStars] = useState(0);

  const handleScoreUpdate = (newScore: number) => {
    setScore(newScore);
  };

  const handleGameEnd = () => {
    setGameActive(false);
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(parseInt(e.target.value));
  };

  return (
    <div className="app-container">
      <h1>算术先锋</h1>
      <label>
        选择级别:
        <select value={level} onChange={handleLevelChange}>
          <option value={1}>简单</option>
          <option value={2}>中等</option>
          <option value={3}>困难</option>
        </select>
      </label>
      {gameActive ? (
        <Game
          level={level}
          onScoreUpdate={handleScoreUpdate}
          onGameEnd={handleGameEnd}
        />
      ) : (
        <Score score={score} message={message} stars={stars} />
      )}
      <button
        onClick={() => {
          setGameActive(true);
          setScore(0);
        }}
      >
        重新开始
      </button>
    </div>
  );
};

export default App;