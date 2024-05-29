import React, { useState } from "react";
import { PropsWithChildren } from "react";
import Todo from "../models/todo";

type TodosContextType ={
    items: Todo[];
    addTodo:(text:string)=> void;
    removeTodo:(id:string)=>void
}
export const TodosContext = React.createContext<TodosContextType>
    ({
    items:[],
    addTodo:()=>{},
    removeTodo:(id:string)=>{}
})
 const TodosContextProvider:React.FC<PropsWithChildren>= ({children})=>{
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler =(todoText: string)=>{
      const newTodo = new Todo(todoText);
      setTodos((prevState) => { 
        return prevState.concat(newTodo)
      });
    }
  
    const removeTodoItemHandler = (todoId:string)=>{
      setTodos((prevTodos) => { 
        return prevTodos.filter(todo => todoId !== todo.id)
      });
    }
    const contextValue: TodosContextType = {
        items:todos,
        addTodo:addTodoHandler,
        removeTodo:removeTodoItemHandler
    }
    return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>
}
export default TodosContextProvider;