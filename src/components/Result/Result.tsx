import React from "react";
import "./Result.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

interface ResultProps {
  playAgain: () => any;
  moves: number;
}

const Result: React.FC<ResultProps> = ({ playAgain, moves }) => {
  const { width, height } = useWindowSize();

  return (
    <section className="Result container">
      <Confetti width={width} height={height} />
      <h3>You win!</h3>
      <img src="./images/frog.png" alt="" />
      <h4>
        You made <span>{moves}</span> moves
      </h4>
      <button onClick={playAgain}>Play again</button>
    </section>
  );
};

export default Result;
