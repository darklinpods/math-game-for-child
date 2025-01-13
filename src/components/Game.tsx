import React, { useState, useEffect } from 'react';
import { generateProblem } from '../utils/mathUtils';

interface GameProps {
  level: number;
  onScoreUpdate: (newScore: number) => void;
  onGameEnd: () => void;
}

/**
 * Game component represents the main game logic and UI for a math game.
 * It manages the game state including the current problem, score, time left, and possible answers.
 * The component receives level, onScoreUpdate, and onGameEnd as props to control the game flow.
 *
 * @param {GameProps} props - The properties passed to the component.
 * @param {number} props.level - The difficulty level of the game.
 * @param {function} props.onScoreUpdate - Callback function to update the score.
 * @param {function} props.onGameEnd - Callback function to handle game end.
 * @returns {JSX.Element} The rendered game UI.
 */
const Game: React.FC<GameProps> = ({ level, onScoreUpdate, onGameEnd }) => {
  const [problem, setProblem] = useState(generateProblem(level));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          onGameEnd();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onGameEnd]);

  useEffect(() => {
    generateAnswers();
  }, [problem]);

  const generateAnswers = () => {
    const correctAnswer = problem.answer;
    const wrongAnswers = new Set<number>();
    while (wrongAnswers.size < 3) {
      const wrongAnswer = Math.floor(Math.random() * (level * 20));
      if (wrongAnswer !== correctAnswer) {
        wrongAnswers.add(wrongAnswer);
      }
    }
    const allAnswers = Array.from(wrongAnswers);
    allAnswers.push(correctAnswer);
    setAnswers(shuffleArray(allAnswers));
  };

  const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === problem.answer) {
      const newScore = score + 1;
      setScore(newScore);
      onScoreUpdate(newScore);
      setProblem(generateProblem(level));
    } else {
      onGameEnd();
    }
  };

  return (
    <div className="game">
      <p>{problem.question}</p>
      <p>剩余时间: {timeLeft}秒</p>
      <div className="answers">
        {answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswerClick(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Game;