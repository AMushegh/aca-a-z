import React, { Fragment, useMemo, useState } from "react";
import Bread from "./Bread";
import { Meat } from "./Meat";
import { Cheese } from "./Cheese";
import { Bacon } from "./Bacon";
import { Salad } from "./Salad";

const INGREDIENTS_ORDER = ["meat", "cheese", "bacon", "salad"];
const INGREDIENTS_ORDER_REVERSED = [...INGREDIENTS_ORDER].reverse();

const ingredientComponentMap = {
  meat: Meat,
  cheese: Cheese,
  bacon: Bacon,
  salad: Salad,
};

const ingredientPriceMap = {
  meat: 4,
  cheese: 3,
  bacon: 2,
  salad: 1,
};
const BurgerContainer = () => {
  const [ingredients, setIngredients] = useState({
    meat: 1,
    salad: 1,
    bacon: 1,
    cheese: 1,
  });

  const addRemoveIngredient = (ingredient, operation) => {
    setIngredients((prev) => ({
      ...prev,
      [ingredient]:
        operation === "add" ? prev[ingredient] + 1 : prev[ingredient] - 1,
    }));
  };

  const totalPrice = useMemo(() => {
    return Object.entries(ingredients).reduce((acc, [type, count]) => {
      acc += ingredientPriceMap[type] * count;
      return acc;
    }, 0);
  }, [ingredients]);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "30%" }}>
        {INGREDIENTS_ORDER.map((item) => {
          return (
            <div key={item}>
              <button
                disabled={ingredients[item] === 0}
                onClick={() => addRemoveIngredient(item, "remove")}
              >
                -
              </button>
              <span>{item}</span>
              <button onClick={() => addRemoveIngredient(item, "add")}>
                +
              </button>
            </div>
          );
        })}
        <div>{totalPrice}</div>
      </div>
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Bread position="top" />
        {INGREDIENTS_ORDER_REVERSED.map((item) => {
          const count = ingredients[item];
          const Component = ingredientComponentMap[item];

          return (
            <Fragment key={item}>
              {[...Array.from({ length: count })].map((_, i) => (
                <Component key={item + "_" + i} />
              ))}
            </Fragment>
          );
        })}
        <Bread />
      </div>
    </div>
  );
};

export default BurgerContainer;
