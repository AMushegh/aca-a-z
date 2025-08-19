import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("dashboard");
  };

  return (
    <div>
      <button onClick={clickHandler}>go to dashboard</button>
    </div>
  );
};

export default Home;
