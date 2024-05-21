// src/UncontrolledInput.jsx
import  { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    alert(`Current value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h2>Uncontrolled Input</h2>
      <input ref={inputRef} type="text" placeholder="Type something" />
      <button onClick={handleInputChange}>Show Value</button>
      <p>Current Value: {inputRef.current ? inputRef.current.value : ""}</p>
    </div>
  );
}

export default UncontrolledInput;
