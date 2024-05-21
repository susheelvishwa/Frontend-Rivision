import DynamicForm from "./components/DynamicForm";
import ValidatedForm from "./components/ValidatedForm";
import CustomFormHandler from "./components/CustomFormHandler";

function App() {
  return (
    <div>
      <h1>React useRef Form Examples</h1>
      <DynamicForm />
      <ValidatedForm />
      <CustomFormHandler />
    </div>
  );
}

export default App;
