import { useState } from "react";
import "./App.css";
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyperlinks Text Mark Language",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which hook is used for state in React?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    correctAnswer: 2,
  },
  {
    question: "Which company created React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    correctAnswer: 1,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which symbol is used for JSX expressions?",
    options: ["()", "{}", "[]", "<>"],
    correctAnswer: 1,
  },
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowFeedback(false);
    setSelectedOption(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setShowFeedback(false);
  };

  if (showResult) {
    return (
      <div className="quiz">
        <h2>Quiz Completed.</h2>
        <p>
          Your Score: <strong>{score}</strong> / {questions.length}
        </p>
        <button onClick={handleRestart}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h4>
        Question {currentQuestion + 1} / {questions.length}
      </h4>

      <h2>{questions[currentQuestion].question}</h2>

      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <label
            key={index}
            className={`option ${selectedOption === index ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="option"
              disabled={showFeedback}
              checked={selectedOption === index}
              onChange={() => {
                setSelectedOption(index);
                setShowFeedback(true);
              }}
            />
            {option}
          </label>
        ))}
      </div>

      {showFeedback && (
        <p className="feedback">
          {selectedOption === questions[currentQuestion].correctAnswer
            ? "Correct!"
            : "Incorrect"}
        </p>
      )}

      <button disabled={selectedOption === null} onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
