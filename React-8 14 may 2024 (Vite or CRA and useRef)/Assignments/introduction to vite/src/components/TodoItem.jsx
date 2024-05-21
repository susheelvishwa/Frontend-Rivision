function TodoItem({ todo, onClick }) {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
