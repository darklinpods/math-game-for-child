import React from 'react';

interface ScoreProps {
  score: number;
  message: string;
  stars: number;
}

const Score: React.FC<ScoreProps> = ({ score, message, stars }) => {
  const renderStars = () => {
    let starElements = [];
    for (let i = 0; i < stars; i++) {
      starElements.push(<span key={i} className="star">⭐</span>);
    }
    return starElements;
  };

  return (
    <div className="score">
      <p>{message}</p>
      <p>分数: {score}</p>
      <div className="stars">
        {renderStars()}
      </div>
    </div>
  );
};

export default Score;