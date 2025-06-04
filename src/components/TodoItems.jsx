import React, { useState } from 'react';
import { useTodo } from "../context";
const TodoItems = ({todo}) => {
  
    const {deleteTodo,toggleComplete, startEdit} = useTodo();
    const toggle = () => {
        toggleComplete(todo.id)
      
    }
  
    return (
      <div>

          <div className={`p-3 bg-gray-800 flex items-center justify-between rounded-md mb-3 ${todo.complete ? "bg-green-900" : ""}` }>
            <div className="flex items-center gap-3">
              <input type="checkbox" value={todo.isComplete} onChange={toggle} />
              <p className={`text-white1 ${todo.complete ? "line-through" : ""}`}>{todo.todo}</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-blue-700 p-2 rounded-xl text-lg text-white" disabled={todo.complete} onClick={() => startEdit(todo.id)}>
                Edit
              </button>
              <button className="bg-red-600 p-2 rounded-xl text-lg text-white" onClick={() => deleteTodo(todo.id)}>
               Delete
              </button>
            </div>
          </div >

      </div>
    );
}

export default TodoItems;
