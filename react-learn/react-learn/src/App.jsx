import React, { useState, useEffect } from "react";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });
  const [counter, setCounter] = useState(50);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleReponseDonnee = (event) => {
    event.preventDefault();
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <form onSubmit={handleReponseDonnee}>
        {currentQuestion === 1 && (
          <div>
            <label htmlFor="q1">Question 1</label>
            <button type="submit">Option 1</button>
            <button type="submit">Option 2</button>
            <div className="App">
              <h1>Counter: {counter}</h1>
            </div>
          </div>
        )}
        {currentQuestion === 2 && (
          <div>
            <label htmlFor="q2">Question 2</label>
            <button type="submit">Option 1</button>
            <button type="submit">Option 2</button>
            <div className="App">
              <h1>Counter: {counter}</h1>
            </div>
          </div>
        )}
        {currentQuestion === 3 && (
          <div>
            <label htmlFor="q3">Question 3</label>
            <button type="submit">Option 1</button>
            <button type="submit">Option 2</button>
            <div className="App">
              <h1>Counter: {counter}</h1>
            </div>
          </div>
        )}
        {currentQuestion === 4 && (
          <div>
            <h1>Bravo !! Tu as terminé le quiz</h1>
          </div>
        )}
      </form>
    </div>
  );
}

export default Quiz;
