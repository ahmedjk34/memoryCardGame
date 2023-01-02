import React, { useState } from "react";
import Card from "./card";

function GridHolder({ updateScore, updateHighestScore, resetScore }) {
  const [gameVar, setGameVar] = useState(0);
  const [flag, setFlag] = useState(0);

  function gameControl() {
    setGameVar((prev) => prev + 1);
  }
  function randomInteger() {
    return Math.floor(Math.random() * 10);
  }
  const array = [];
  for (let i = 1; i <= 8; i++) array.push(`${i}.webp`);
  return (
    <div className="gridHolder">
      {array.map((element, key) => {
        return (
          <Card
            src={element}
            key={key}
            order={randomInteger()}
            gameControl={gameControl}
            updateScore={updateScore}
            updateHighestScore={updateHighestScore}
            resetScore={resetScore}
          ></Card>
        );
      })}
    </div>
  );
}
export default GridHolder;
