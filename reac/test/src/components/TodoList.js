import React from 'react';
import '../App.css';
// import { styles } from "../styles";
// import { Icon } from '@iconify/react';
import Todo from './Todo'
const TodoList = ({ notes, setnotes,setstatus, filterNotes }) => {
    return (
        <div className="todo-container">
            <div>
            <select className='select input' name="todos" onChange={(e) => setstatus(e.target.value)}>
                <option value='All'>All</option>
                <option value='Completed'>Completed</option>
                <option value='Uncompleted'>Uncompleted</option>
            </select>
        </div>
            <div className="todo-list">
                <Todo setnotes={setnotes}
                    notes={notes}
                />
            </div>
        </div>
    );
};
export default TodoList;