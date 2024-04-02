import React, { useState } from "react";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  const Reponsechanger = (event) => {
    const { id, value } = event.target;
    setAnswers({ ...answers, [id]: value });
  };

  const Reponsedonner = (event) => {
    event.preventDefault();
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <form onSubmit={Reponsedonner}>
        {currentQuestion === 1 && (
          <div>
            <label htmlFor="q1">Question1</label>

            <button type="submit">Soumettre</button>
          </div>
        )}
        {currentQuestion === 2 && (
          <div>
            <label htmlFor="q2">Question 2</label>

            <button type="submit">Soumettre</button>
          </div>
        )}
        {currentQuestion === 3 && (
          <div>
            <label htmlFor="q3">Question 3</label>

            <button type="submit">Soumettre</button>
          </div>
        )}
        {currentQuestion === 4 && (
          <div>
            <h1>oui</h1>
          </div>
        )}
      </form>
    </div>
  );
}

export default Quiz;
