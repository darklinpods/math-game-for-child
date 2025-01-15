import React, { useState } from 'react';
import Game from './Game';
import Score from './Score';
import '../assets/styles.css';

interface AnswerRecord {
  question: string;
  correct: boolean;
}

const App: React.FC = () => {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('游戏结束!');
  const [gameActive, setGameActive] = useState(true);
  const [level, setLevel] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [stars, setStars] = useState(0);
  const [answerRecords, setAnswerRecords] = useState<AnswerRecord[]>([]);

  const handleScoreUpdate = (newScore: number, question: string, correct: boolean) => {
    setScore(newScore);
    if (correct) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setTotalQuestions(totalQuestions + 1);
    setAnswerRecords([...answerRecords, { question, correct }]);
  };

  const handleGameEnd = () => {
    setGameActive(false);
    calculateStars();
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(parseInt(e.target.value));
    resetGame();
  };

  const resetGame = () => {
    setGameActive(true);
    setScore(0);
    setTotalQuestions(0);
    setCorrectAnswers(0);
    setStars(0);
    setAnswerRecords([]);
  };

  const calculateStars = () => {
    const correctPercent = (correctAnswers / totalQuestions) * 100;
    if (correctPercent >= 90) {
      setStars(3);
    } else if (correctPercent >= 80) {
      setStars(2);
    } else if (correctPercent >= 60) {
      setStars(1);
    } else {
      setStars(0);
    }
    setMessage(`正确率: ${correctPercent.toFixed(2)}%`);
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
          totalQuestions={totalQuestions}
        />
      ) : (
        <Score
          score={score}
          message={message}
          stars={stars}
          answerRecords={answerRecords}
          correctAnswers={correctAnswers}
          totalQuestions={totalQuestions}
        />
      )}
      <button className="restart" onClick={resetGame}>
        重新开始
      </button>
    </div>
  );
};

export default App;