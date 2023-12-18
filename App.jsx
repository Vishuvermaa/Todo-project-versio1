import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import DeleteTodo1 from "./components/DeleteTodo1";
import DeleteTodo2 from "./components/DeleteTodo2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo></AddTodo>
      <div className="item-container">
        <DeleteTodo1></DeleteTodo1>
        <DeleteTodo2></DeleteTodo2>
      </div>
    </center>
  );
}

export default App;
