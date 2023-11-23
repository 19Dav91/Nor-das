import React from 'react';
import Todo from './Todo';
const TodoList = ({todos,settodos,filtertodo})=>{
    return(
        <div className='todo-container'>
            <ul className='todo-list'>
                {filtertodo.map(todo=>(
                    <Todo settodos={settodos}
                    todos={todos}
                    key={todo.id}
                    todo={todo}
                    text={todo.text}
                    />
                ))}
            </ul>
        </div>
    )
};
export default TodoList;