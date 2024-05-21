import { useRef, useState } from "react";

function ValidatedForm() {
  const inputRefs = useRef([]);
  const [validationMessages, setValidationMessages] = useState({});
  const formFields = [
    { label: "Username", validation: (value) => value.length >= 3 },
    { label: "Email", validation: (value) => /\S+@\S+\.\S+/.test(value) },
    { label: "Password", validation: (value) => value.length >= 6 },
  ];

  const handleValidation = (index) => {
    const value = inputRefs.current[index].value;
    const isValid = formFields[index].validation(value);
    setValidationMessages((prev) => ({
      ...prev,
      [index]: isValid ? "Valid" : "Invalid",
    }));
  };

  return (
    <div>
      <h2>Real-time Input Validation</h2>
      {formFields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            onChange={() => handleValidation(index)}
          />
          <span>{validationMessages[index]}</span>
        </div>
      ))}
    </div>
  );
}

export default ValidatedForm;
