export interface Card {
  id: number;
  name: string;
  img: string;

  status?: "guessed" | "selected" | "guessed-wrong" | "pickable" | "";
}

const cards: Card[] = [
  {
    id: 1,
    name: "blueberry",
    img: "./images/blueberry.png",
  },
  {
    id: 2,
    name: "blueberry",
    img: "./images/blueberry.png",
  },
  {
    id: 3,
    name: "coconut",
    img: "./images/coconut.png",
  },
  {
    id: 4,
    name: "coconut",
    img: "./images/coconut.png",
  },
  {
    id: 5,
    name: "banana",
    img: "./images/banana.png",
  },
  {
    id: 6,
    name: "banana",
    img: "./images/banana.png",
  },
  {
    id: 7,
    name: "watermelon",
    img: "./images/watermelon.png",
  },
  {
    id: 8,
    name: "watermelon",
    img: "./images/watermelon.png",
  },
];

export default cards;
