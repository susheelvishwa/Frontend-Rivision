import { useRef } from "react";

function CustomFormHandler() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log("Form Data:", data);
    alert("Form Submitted!");
  };

  return (
    <div>
      <h2>Custom Form Submission Handling</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input name="fullName" type="text" required />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" required />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomFormHandler;
