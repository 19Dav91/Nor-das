import React from "react";
import { styles } from "../styles";
import { Icon } from '@iconify/react';
import '../App.css';

const prevDef = (e) => {
    e.preventDefault();
};
const Form = ({ inputText, setinputText, notes, setnotes }) => {
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
        </form >
    </>
};
export default Form;