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
const App = () => {
  return <div></div>;
};

export default App;
