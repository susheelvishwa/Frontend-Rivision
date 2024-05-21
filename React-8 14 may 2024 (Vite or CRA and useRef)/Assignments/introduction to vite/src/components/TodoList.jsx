import TodoItem from "./TodoItem";

function TodoList({ todos, onTodoClick }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onClick={() => onTodoClick(index)} />
      ))}
    </ul>
  );
}

export default TodoList;
