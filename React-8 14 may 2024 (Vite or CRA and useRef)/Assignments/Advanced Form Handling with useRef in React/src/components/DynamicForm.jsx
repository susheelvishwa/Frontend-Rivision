import  { useRef, useEffect } from "react";

function DynamicForm() {
  const inputRefs = useRef([]);
  const formFields = ["First Name", "Last Name", "Email", "Password"];

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleFocus = (index) => {
    inputRefs.current[index].focus();
  };

  return (
    <div>
      <h2>Dynamic Form Input Focus</h2>
      {formFields.map((field, index) => (
        <div key={index}>
          <label>{field}</label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            onFocus={() => handleFocus(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && index < formFields.length - 1) {
                handleFocus(index + 1);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default DynamicForm;
