import React from 'react';
import '../App.css';
import { styles } from "../styles";
import { Icon } from '@iconify/react';

const Todo = ({ status, notes, setnotes, setstatus }) => {

    const deleteNote = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setnotes(newNotes);
    };
    const toggleCompletion = (index) => {
        const newNotes = [...notes];
        newNotes[index].completed = !newNotes[index].completed;
        newNotes[index].backgroundColor = newNotes[index].completed ? 'green' : 'red';
        setnotes(newNotes);
    };
    const filterNotes = notes.filter((note) => {
        if (status === 'All') return true;
        if (status === 'Completed') return note.completed;
        if (status === 'Uncompleted') return !note.completed;
        return true;
    });
    const res = filterNotes.map((note, index) => (
        <div className='todo-container bg' style={{ ...styles.class1, backgroundColor: note.backgroundColor }} key={index}>
            <span className={note.completed ? 'completed' : ''}>{note.text}</span>
            <div>
                <button style={styles.class2} onClick={() => toggleCompletion(index)}>
                    <Icon className='todo-item button btn' icon="fluent-mdl2:completed-solid" />
                </button>
                <button style={styles.class2} onClick={() => deleteNote(index)}>
                    <Icon className='todo-item button btn' icon="material-symbols:delete-outline" />
                </button>
            </div>
        </div>
    ));
    return <>
        
        <div className="todo-list">{res}</div>
    </>
};
export default Todo;
