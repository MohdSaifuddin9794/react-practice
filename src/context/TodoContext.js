import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
        id: "1",
        todo: "Welcome context",
        complete: false
    },
],
addTodo: (todo) => {},
updateTodo: () => {},
startEdit: (id)  => {},
deleteTodo:(id) => {},
toggleComplete:(id) => {}
})

export const TodoProvider = TodoContext.Provider;

export function useTodo(){
    return useContext(TodoContext)
}