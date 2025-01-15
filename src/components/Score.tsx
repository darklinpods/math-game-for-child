import React from 'react';

interface AnswerRecord {
  question: string;
  correct: boolean;
}

interface ScoreProps {
  score: number;
  message: string;
  stars: number;
  answerRecords: AnswerRecord[];
  correctAnswers: number;
  totalQuestions: number;
}

const Score: React.FC<ScoreProps> = ({ score, message, stars, answerRecords, correctAnswers, totalQuestions }) => {
  const renderStars = () => {
    let starElements = [];
    for (let i = 0; i < stars; i++) {
      starElements.push(<span key={i} className="star">⭐</span>);
    }
    return starElements;
  };

  const renderAnswerRecords = () => {
    return answerRecords.map((record, index) => (
      <li key={index} className={record.correct ? 'correct' : 'incorrect'}>
        {record.question} - {record.correct ? '正确' : '错误'}
      </li>
    ));
  };

  return (
    <div className="score">
      <p>{message}</p>
      <p>分数: {score}</p>
      <div className="stars">
        {renderStars()}
      </div>
      <p>正确数/总题数: {correctAnswers} / {totalQuestions}</p>
      <ul className="answer-records">
        {renderAnswerRecords()}
      </ul>
    </div>
  );
};

export default Score;