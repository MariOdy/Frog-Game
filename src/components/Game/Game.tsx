import React from "react";
import "./Game.css";
import Card from "./Cardd";
import useGame from "./useGame";
import Result from "../Result/Result";

const Game: React.FC = () => {
  const { state, onCardClick, haveWon, playAgain } = useGame();

  const { cards } = state;

  if (haveWon) {
    return <Result playAgain={playAgain} />;
  }

  return (
    <section className="Game container">
      <ul className="all-cards">
        {cards.map((card) => (
          <li key={card.id}>
            <Card card={card} onClick={onCardClick} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Game;
