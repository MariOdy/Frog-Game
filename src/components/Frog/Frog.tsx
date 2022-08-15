import React from "react";
import Game from "../Game/Game";
import "./Frog.css";

const Frog: React.FC = () => {
  const [gameOn, setGameOn] = React.useState(false);
  const playGame = () => setGameOn((prev) => !prev);

  return (
    <section className="container">
      {gameOn ? (
        <Game />
      ) : (
        <div className="Frog container">
          <div className="rules">
            <h3>Rules</h3>
            <p>You need to find and choose same fruits to feed frog)</p>
          </div>
          <div className="choose-btn">
            <button onClick={playGame} >Play game</button>
          </div>

          <div className="relative">
            <img src="./images/frog.png" alt="" />
            <img src="./images/frog-tongue.png" alt="" className="happy-frog" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Frog;
