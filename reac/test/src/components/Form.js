import React from "react";
import { styles } from "../styles";
import { Icon } from '@iconify/react';
import '../App.css';

const prevDef = (e) => {
    e.preventDefault();
};
const Form = ({ inputText, filterNotes, setinputText, notes, setnotes }) => {
    const addNote = (e) => {
        prevDef(e);
        if (inputText !== '') {
            setnotes([...notes, { text: inputText, completed: false }]);
            setinputText('');
        }
    };
    return <>
        <form className='todo-container'>
            <input
                className='input res todo'
                type='text'
                value={inputText}
                onChange={(e) => {
                    setinputText(e.target.value);
                }}
            />
            <button style={styles.class4} className='todo-item button' onClick={addNote}>
                <Icon className='button' icon="ph:plus-fill" />
            </button>
            <select className='select input' name="todos" onChange={filterNotes}>
                <option value='All'>All</option>
                <option value='Completed'>Completed</option>
                <option value='Uncompleted'>Uncompleted</option>
            </select>
        </form >
    </>
};
export default Form;