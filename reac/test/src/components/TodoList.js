import React from 'react';
import Todo from './Todo';
const TodoList = ({todos,settodos,filter})=>{
    return(
        <div className='todo-container'>
            <ul className='todo-list'>
                {filter.map(todo=>(
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