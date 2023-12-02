import React from 'react';
import '../App.css';
// import { styles } from "../styles";
// import { Icon } from '@iconify/react';
import Todo from './Todo'
const TodoList = ({ notes, setnotes, setstatus, status }) => {
    return <>
        <div >

            <Todo setnotes={setnotes}
                notes={notes}
                status={status}
            />
        </div>
        <div className="todo-list">

        </div>
    </>;
};
export default TodoList;