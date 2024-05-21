// src/InteractiveElement.jsx
import  { useRef } from "react";

function InteractiveElement() {
  const divRef = useRef(null);

  const handleClick = () => {
    divRef.current.style.backgroundColor =
      divRef.current.style.backgroundColor === "yellow"
        ? "lightblue"
        : "yellow";
  };

  return (
    <div>
      <h2>Interactive Element</h2>
      <div
        ref={divRef}
        onClick={handleClick}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightblue",
          cursor: "pointer",
        }}
      >
        Click me
      </div>
    </div>
  );
}

export default InteractiveElement;
