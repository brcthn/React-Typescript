import React from "react";
import Todo from "../models/todo";
import TodosItem from "./TodosItem";
import classes from "./Todos.module.css";
import { useContext } from "react";
import {TodosContext} from "../store/todos-contex"
const Todos: React.FC = () =>{
    const todosCtx = useContext(TodosContext);
    return(
        <ul className={classes.todos}>
            {todosCtx.items.map((item)=><TodosItem key={item.id} text={item.text} 
            removeTodoItem={todosCtx.removeTodo.bind(null, item.id)}></TodosItem>)}
        </ul>
    )
}
export default Todos;