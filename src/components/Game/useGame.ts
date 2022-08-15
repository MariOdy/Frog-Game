import { useState } from "react";
import "./Game.css";
import gameCards, { Card as ICard } from "./cards";

const newGame = () => {
  const cards = [...gameCards].sort(() => Math.random() - 0.5);

  return { cards };
};

const useGame = () => {
  const [state, setState] = useState(newGame);

  const onCardClick = (card: ICard) => {
    setState((prev) => {
      const selectedCard = prev.cards.find((c) => c.status === "selected");

      if (selectedCard) {
        const guessedRight = selectedCard.name === card.name;

        return {
          ...prev,
          cards: prev.cards.map((c) => {
            if ([card.id, selectedCard.id].includes(c.id)) {
              return {
                ...c,
                status: guessedRight ? "guessed" : "guessed-wrong",
              };
            }
            return {
              ...c,
              status: c.status === "guessed-wrong" ? "pickable" : c.status,
            };
          }),
        };
      }

      return {
        ...prev,
        cards: prev.cards.map((c) => {
          if (c.id === card.id) {
            return {
              ...card,
              status: "selected",
            };
          }
          return c;
        }),
      };
    });
  };

  let haveWon = false;

  if (state.cards.every((c) => c.status === "guessed")) {
    haveWon = true;
  }

  const playAgain = () => {
    setState(newGame());
  };

  return { state, onCardClick, haveWon, playAgain };
};

export default useGame;
