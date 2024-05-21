// src/FocusableInput.jsx
import { useEffect, useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Focusable Input</h2>
      <input ref={inputRef} type="text" placeholder="Focus on me" />
    </div>
  );
}

export default FocusableInput;
