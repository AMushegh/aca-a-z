import "./Card.css";

export const Card = ({
  title,
  description,
  showButton = true,
  clickHandler,
}) => {
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <p>{description}</p>
      {showButton && (
        <button onClick={() => clickHandler(title)}>click me</button>
      )}
    </div>
  );
};
