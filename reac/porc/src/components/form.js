import React, { useState, useEffect } from 'react'
import { styles } from "./styles";
// Import the default CSS 
import { Icon } from '@iconify/react';
import Form from './components/Form';

export default function Form() {
    const [input, setinput] = useState('');
    const [notes, setNotes] = useState([]);
    let subHendler = (e) => {
        e.preventDefault();

    };
    function addNote() {
        if (input !== '') {
            setNotes([...notes, input]);
            setinput('');
        }
    }
    useEffect(() => {

        return () => { /* cleanup code */ }
    }, [])
    const res = notes.map((note) => {
        return <>
            <div className='todo-container' style={styles.class1} >
                {note}
                <div>
                    <button style={styles.class2} onClick={subHendler}>
                        <Icon className='todo-item button btn ' icon="fluent-mdl2:completed-solid" />
                    </button>
                    <button style={styles.class2} onClick={subHendler}>
                        <Icon className='todo-item button btn' icon="material-symbols:delete-outline" />
                    </button>
                </div>
            </div>
        </>
    });

}