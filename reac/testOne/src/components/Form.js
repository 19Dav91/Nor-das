import React from "react";
import { styles } from "../styles";
import { Icon } from '@iconify/react';
import '../App.css';
const Form = ({ inputtext, setinputtext, todos, settodos }) => {

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputtext !== '') {
            settodos([...todos, { text: inputtext, completed: false }]);
            setinputtext('');
        }
    };
    return <>
        <form className='todo-container'>
            <input
                className='input res todo'
                type='text'
                value={inputtext}
                onChange={(e) => {
                    setinputtext(e.target.value);
                }}
            />
            <button style={styles.class4} className='todo-item button' onClick={submitTodoHandler}>
                <Icon className='button todo' icon="ph:plus-fill" />
            </button>
        </form >

    </>

};
export default Form;