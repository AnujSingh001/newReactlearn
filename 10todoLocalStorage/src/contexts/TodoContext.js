import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            Id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo : (todo)=>{},
    deleteTodo : (id)=>{},
    updateTodo : (id, todo)=>{},
    toggleComplete : (id)=>{}
})

export const useTodoContext = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider