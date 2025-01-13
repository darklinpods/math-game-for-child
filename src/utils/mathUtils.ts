export const generateProblem = (level: number) => {
  let maxNumber;
  switch (level) {
    case 1:
      maxNumber = 10;
      break;
    case 2:
      maxNumber = 20;
      break;
    case 3:
      maxNumber = 50;
      break;
    default:
      maxNumber = 10;
  }

  const num1 = Math.floor(Math.random() * maxNumber);
  const num2 = Math.floor(Math.random() * maxNumber);
  const question = `${num1} + ${num2}`;
  const answer = num1 + num2;
  return { question, answer };
};

export function checkAnswer(userAnswer: number, correctAnswer: number): boolean {
    return userAnswer === correctAnswer;
}