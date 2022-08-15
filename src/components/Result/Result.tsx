import React from "react";
import "./Result.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

interface ResultProps {
  playAgain: () => any;
}

const Result: React.FC<ResultProps> = ({ playAgain }) => {
  const { width, height } = useWindowSize();

  return (
    <section className="Result container">
      <Confetti width={width} height={height} />
      <h3>You win!</h3>
      <img src="./images/frog.png" alt="" />
      <button onClick={playAgain}>Play again</button>
    </section>
  );
};

export default Result;
