import React, { useState } from "react";
import "./App.css";
import GridHolder from "./GridHolder";
import Header from "./Header";
function App() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(() => {
    return localStorage.getItem("highestScore")
      ? localStorage.getItem("highestScore")
      : 0;
  });

  function updateScore() {
    setScore((prev) => prev + 1);
  }
  function updateHighestScore() {
    if (score > highestScore) {
      setHighestScore(score);
      localStorage.setItem("highestScore", score);
    }
  }
  function resetScore() {
    setScore(0);
    window.location.reload();
  }
  function resetHighestScore() {
    if (score == 0) {
      localStorage.setItem("highestScore", 0);
      setHighestScore(0);
    } else alert("Can't reset while playing !");
  }
  return (
    <>
      <Header
        score={score}
        highestScore={highestScore}
        resetHighestScore={resetHighestScore}
      ></Header>
      <GridHolder
        updateScore={updateScore}
        updateHighestScore={updateHighestScore}
        resetScore={resetScore}
      ></GridHolder>
    </>
  );
}

export default App;
