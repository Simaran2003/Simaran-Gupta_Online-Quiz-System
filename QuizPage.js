import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/quiz/${id}`).then((res) => setQuiz(res.data));
  }, [id]);

  const submitQuiz = async () => {
    const res = await axios.post("http://localhost:8080/quiz/attempt", {
      quizId: id,
      answers,
    });
    setScore(res.data.score);
  };

  return quiz ? (
    <div className="container">
      <h2>{quiz.title}</h2>
      {quiz.questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          {q.options.map((opt) => (
            <label key={opt}>
              <input type="radio" name={q.id} value={opt} onChange={() => setAnswers({ ...answers, [q.id]: opt })} />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={submitQuiz}>Submit</button>
      {score !== null && <p>Your Score: {score}</p>}
    </div>
  ) : (
    <p>Loading quiz...</p>
  );
};

export default QuizPage;
