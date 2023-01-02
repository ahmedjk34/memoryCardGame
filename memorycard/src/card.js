import React, { useState } from "react";
function Card({
  src,
  key,
  order,
  gameControl,
  updateScore,
  updateHighestScore,
  resetScore,
}) {
  const [flag, setFlag] = useState(1);
  function gameLogic() {
    gameControl();
    if (flag) {
      updateScore();
      setFlag(0);
    } else {
      updateHighestScore();
      resetScore();
    }
  }
  return (
    <img
      src={require(`./images/${src}`)}
      style={{ order: order }}
      onClick={gameLogic}
    ></img>
  );
}
export default Card;
