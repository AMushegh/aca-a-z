import React, { useState } from "react";
import "./GameContainer.css";
const GAME_CARDS = [
  { id: 1, value: "A", isGuessed: false },
  { id: 2, value: "A", isGuessed: false },
  { id: 3, value: "B", isGuessed: false },
  { id: 4, value: "B", isGuessed: false },
  { id: 5, value: "C", isGuessed: false },
  { id: 6, value: "C", isGuessed: false },
  { id: 7, value: "D", isGuessed: false },
  { id: 8, value: "D", isGuessed: false },
  { id: 9, value: "E", isGuessed: false },
  { id: 10, value: "E", isGuessed: false },
  { id: 11, value: "G", isGuessed: false },
  { id: 12, value: "G", isGuessed: false },
  { id: 13, value: "H", isGuessed: false },
  { id: 14, value: "H", isGuessed: false },
  { id: 15, value: "L", isGuessed: false },
  { id: 16, value: "L", isGuessed: false },
];

const NUMBER_OF_GUESSED_TO_WIN = 8;

export const GameContainer = () => {
  const [numberOfGuessed, setNumberOfGuessed] = useState(0);
  const [cards, setCards] = useState(GAME_CARDS);
  const [activeCards, setActiveCards] = useState([]);

  const cardClickHandler = (id) => {
    if (activeCards.length === 2) {
      return;
    }

    setActiveCards((prev) => [...prev, id]);

    if (activeCards.length === 1) {
      const firstCardValue = cards.find(
        (card) => card.id === activeCards[0]
      ).value;
      const secondCardValue = cards.find((card) => card.id === id).value;

      if (firstCardValue === secondCardValue) {
        setNumberOfGuessed((prev) => prev + 1);

        const newCards = cards.map((card) => {
          if (card.id === id || card.id === activeCards[0]) {
            return {
              ...card,
              isGuessed: true,
            };
          }
          return card;
        });

        setCards(newCards);
      }

      setTimeout(() => {
        setActiveCards([]);
      }, 800);
    }
  };

  return (
    <div className="game-card-container">
      {cards.map((card) => (
        <div
          className="game-card"
          key={card.id}
          onClick={() => cardClickHandler(card.id)}
        >
          {card.isGuessed || activeCards.includes(card.id) ? card.value : ""}
        </div>
      ))}
      {numberOfGuessed === NUMBER_OF_GUESSED_TO_WIN ? "You Won" : null}
    </div>
  );
};
