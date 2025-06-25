import { useState } from "react";

const generateArray = (count) => {
  return Array.from({ length: count }, (_, i) => i + 1);
};

export const List = () => {
  const [list, setList] = useState(() => generateArray(10));

  const addElementHandler = () => {
    let newArr = [...list, list.length + 100];

    setList(newArr);
  };

  const removeElementHandler = (value) => {
    const newArray = list.filter((el) => el !== value);

    setList(newArray);
  };

  return (
    <>
      <button onClick={addElementHandler}>add element</button>
      <ul>
        {list.map((listItem) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => removeElementHandler(listItem)}
            key={listItem}
          >
            {listItem}
          </li>
        ))}
      </ul>
    </>
  );
};
