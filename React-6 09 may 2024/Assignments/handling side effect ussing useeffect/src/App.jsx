import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        let finalData = await response.json();
        setData(finalData);
        localStorage.setItem("userData", JSON.stringify(finalData));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    function handleMouseMove(event) {
      console.log("Mouse X:", event.clientX);
      console.log("Mouse Y:", event.clientY);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    document.title = "hello";

    return () => {
      document.title = "Old Document Title";
    };
  }, []);

  return (
    <>
      <h1>Saving API response in React component</h1>
      {data.map((todo) => (
        <div
          style={{
            border: "1px solid black",
            margin: "15px",
            padding: "15px",
            backgroundColor: "black",
            color: "red",
          }}
          key={todo.id}
        >
          <p>ID: {todo.id}</p>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          <p>Email: {todo.email}</p>
          <p>Name: {todo.username}</p>
        </div>
      ))}
    </>
  );
};

export default App;
