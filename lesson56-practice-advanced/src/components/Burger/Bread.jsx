import React from "react";

const Bread = ({ position }) => {
  return (
    <div
      style={{
        background: "orange",
        height: "60px",
        width: "580px",
        borderRadius:
          position === "top" ? "40px 40px 5px 5px" : " 5px 5px 40px 40px",
      }}
    />
  );
};

export default Bread;
