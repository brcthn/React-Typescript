
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-contex";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo></NewTodo>
      <Todos></Todos>
    </TodosContextProvider>
  );
}

export default App;
