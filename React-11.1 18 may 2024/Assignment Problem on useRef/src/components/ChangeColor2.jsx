import { useRef } from "react";

function ChangeColor2() {
  const divRef = useRef(null);

  const handleChangeColor = () => {
    // Generate a random color
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    // Change the background color of the div
    divRef.current.style.backgroundColor = randomColor;
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      >
        Color Box
      </div>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
}

export default ChangeColor2;
