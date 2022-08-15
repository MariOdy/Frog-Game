import React, { useRef } from "react";
import "./Cardd.css";
import { Card as ICard } from "./cards";

interface RecentCardProps {
  card: ICard;
  onClick: (card: ICard) => any;
}

const Card: React.FC<RecentCardProps> = ({ card, onClick }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { img, name, status } = card;

  const handleClick = () => {
    if (ref.current) {
      ref.current.style.animation = "none";
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      ref.current.offsetHeight;
      ref.current.style.animation = "";
    }


    
    onClick(card);
  };

  return (
    <button
      className="card"
      data-status={status}
      onClick={handleClick}
      disabled={status === "guessed" || status === "selected"}
      ref={ref}
    >
      <img src={img} alt={name} />
    </button>
  );
};

export default Card;
