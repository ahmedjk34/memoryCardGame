import React from "react";
function Header({ score, highestScore, resetHighestScore }) {
  return (
    <div className="header">
      <h1>{score}</h1>
      <h1>{highestScore}</h1>
      <button onClick={resetHighestScore}>fsdfds</button>
    </div>
  );
}
export default Header;
