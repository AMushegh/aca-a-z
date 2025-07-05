import { useRef } from "react";

const RefTestContainer = () => {
  const containerRef = useRef(null);

  const handleClick = () => {
    if (containerRef.current) {
      console.log("Container clicked:", containerRef.current);
    } else {
      console.log("Container ref is not set");
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      style={{ width: "500px", height: "500px", background: "red" }}
    ></div>
  );
};

export default RefTestContainer;
