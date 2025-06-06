import { useState } from "react";

import { TodoProvider } from "./context";
import AddForm from "./components/AddForm";
import TodoItems from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit ] = useState(null);
  const [editTxt, setEditTxt] = useState("");
  const addTodo = (todo) => {
    const newTodo = [{ id: Date.now(), todo, complete: false }, ...todos];
    setTodos(newTodo);
    // console.log(newTodo);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    console.log(id);
    setTodos((todo) =>
      todo.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, complete: !prevTodo.complete }
          : prevTodo
      )
    );
  };
  const startEdit = (id) => {
    const selectedId = todos.find((todo) => todo.id === id);
    if(selectedId){

      setIsEdit(id);
      setEditTxt(selectedId.todo); // assuming `task` is the text
      console.log(selectedId.todo);
    }
  };
const updateTodo = () => {
  setTodos(prevTodo => prevTodo.map(todo => todo.id === isEdit ? {...todo, todo:editTxt} : todo))
  setIsEdit(null);
  setEditTxt("")
}
  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, deleteTodo, toggleComplete, startEdit, updateTodo }}
      >
        <AddForm isEdit={isEdit} editTxt={editTxt} setEditTxt={setEditTxt} />
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItems todo={todo}></TodoItems>
          </div>
        ))}
      </TodoProvider>
    </>
  );
}

export default App;
