import React from "react";
import classes from "./TodoItem.module.css";
const TodosItem: React.FC<{text:string, removeTodoItem:(event:React.MouseEvent) => void}> = (props) =>{
    return(
       <li className={classes.item} onClick={props.removeTodoItem}>{props.text}</li>
    )
}
export default TodosItem;