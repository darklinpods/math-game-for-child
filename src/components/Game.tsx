import React, { useState, useEffect } from 'react';
import { generateProblem } from '../utils/mathUtils';
import correctSound from '../assets/sounds/correct.mp3';
import incorrectSound from '../assets/sounds/incorrect.mp3';

interface GameProps {
  level: number;
  onScoreUpdate: (newScore: number) => void;
  onGameEnd: () => void;
}

const Game: React.FC<GameProps> = ({ level, onScoreUpdate, onGameEnd }) => {
  const [problem, setProblem] = useState(generateProblem(level));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

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

  const handleAnswerClick = (answer: number) => {
    const correctAudio = new Audio(correctSound);
    const incorrectAudio = new Audio(incorrectSound);

    setSelectedAnswer(answer);

    if (answer === problem.answer) {
      correctAudio.play();
      const newScore = score + 1;
      setScore(newScore);
      onScoreUpdate(newScore);
      setTimeout(() => {
        setProblem(generateProblem(level));
        setSelectedAnswer(null);
      }, 500);
    } else {
      incorrectAudio.play();
      setTimeout(() => {
        onGameEnd();
      }, 500);
    }
  };

  return (
    <div className="game">
      <p>{problem.question}</p>
      <p>剩余时间: {timeLeft}秒</p>
      <div className="answers">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className={
              selectedAnswer === answer
                ? answer === problem.answer
                  ? 'correct'
                  : 'incorrect'
                : ''
            }
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Game;