import React from "react";
import "./cards.scss";

const CARDS_DATA: Record<string, string>[] = [
  {
    nameCards: "Action (set A)",
    imgCards: "./img/cry.jpg",
  },
  {
    nameCards: "Action (set B)",
    imgCards: "./img/open.jpg",
  },
  {
    nameCards: "Vegetables",
    imgCards: "./img/vegetables.jpg",
  },
  {
    nameCards: "Transport",
    imgCards: "./img/transport.jpg",
  },
  {
    nameCards: "Animal (set A)",
    imgCards: "./img/cat.jpg",
  },
  {
    nameCards: "Animal (set B)",
    imgCards: "./img/bird.jpg",
  },
  {
    nameCards: "Clothes",
    imgCards: "./img/skirt.jpg",
  },
  {
    nameCards: "Emotions",
    imgCards: "./img/sad.jpg",
  },
];

export function CardsContainer(): JSX.Element {
  return (
    <div className="cards-container">
      {CARDS_DATA.map((el) => Card(el))}
    </div>
  );
}

function Card(el: Record<string, string>): JSX.Element {
  return (
    <div className="card">
      <img src={el.imgCards} alt={el.nameCards}></img>
      <span>{el.nameCards}</span>
    </div>
  );
}
