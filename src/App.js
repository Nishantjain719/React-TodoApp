import logo from "./logo.svg";
import "./App.css";
import MyForm from "./components/MyForm";
import Validation from "./components/Validation";
import FetchUser from "./components/FetchUser";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
