import { useState } from "react";

export const useToggle = (defaultValue) => {
  const [condition, setCondition] = useState(defaultValue);

  return [condition, () => setCondition((prev) => !prev)];
};
