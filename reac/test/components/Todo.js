import React from "react";
const Todo = ({ text, todos, settodos, todo }) => {
    const deleteHeader = () => {
        settodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHeader = () => {
        settodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed?'completed':''}`}>{text}</li>    
            <button onClick={completeHeader} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHeader} className="trash-btn">
                <i className="fa fa-trash"></i>
            </button>
        </div>
    )
};
export default Todo;