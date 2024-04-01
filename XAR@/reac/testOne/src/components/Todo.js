import React from "react";
import TodoList from "./TodoList";
import '../App.css'

const Todo = ({ status, setstatus,notes }) => {

    return <>
        <div className="select" onChange={(e) => setstatus(e.target.value)}>
            <select name="todos" className="filter-todo" >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </>
}
export default Todo;