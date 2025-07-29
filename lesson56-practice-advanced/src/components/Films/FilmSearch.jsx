import React from "react";
import { Input } from "antd";

export const FilmSearch = ({ value, onChange }) => {
  return (
    <Input
      value={value}
      size="large"
      placeholder="input search text"
      onChange={({ target: { value } }) => onChange(value)}
    />
  );
};
