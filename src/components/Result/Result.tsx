import React from "react";
import "./Result.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const Result: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <section className="Result container">
      <Confetti width={width} height={height} />
      <h3>You win!</h3>
      <img src="./images/frog.png" alt="" />
      <button>Play again</button>
    </section>
  );
};

export default Result;
