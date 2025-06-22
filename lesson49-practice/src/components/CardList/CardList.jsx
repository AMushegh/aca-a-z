import { Card } from "../Card/Card";

import "./CardList.css";

const CARD_LIST = [
  { id: 1, title: "JavaScript", desc: "test desc for JS" },
  { id: 2, title: "React", desc: "test desc for React" },
  { id: 3, title: "HTML", desc: "test desc for HTML" },
  { id: 4, title: "CSS", desc: "test desc for CSS" },
];

export const CardList = () => {
  const clickHandler = (title) => {
    console.log(title);
  };

  return (
    <div className="card-list">
      {CARD_LIST.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.desc}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
};
