import './App.css';
import React, { useEffect, useState } from 'react';
import { styles } from "./styles";
import { IconButton } from "rsuite"; 
import { Admin, Menu, Reload, Resize, Search,Plus,Completed } from '@rsuite/icons'; 
// Import the default CSS 
import "rsuite/dist/rsuite.min.css"; 

function App() {
    const [input, setinput] = useState('');
    const [notes, setNotes] = useState([]);
    const [status, setstatus] = useState('All');
    let subHendler = (e) => {
        e.preventDefault();

    };
    function addNote() {

        if (input !== '') {
            setNotes([...notes, input]);
            setinput('');
        }
    }

    //     useEffect(()=>{

    //     return ()=>{ /* cleanup code */ }
    //          },[])
    const res = notes.map((note) => {
        return <>
            <form >
                <div style={styles.class1}>
                    {note}
                </div>
                <button style={styles.class2} onClick={subHendler}>
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
        </>
    });

    return <>
        <div className='App'>
            <header>
                <h1>Todo List</h1>
            </header>
            <div className='todo-container'>
                <input
                    className='input todo'
                    type='text'
                    value={input}
                    onChange={(e) => setinput(e.target.value)} />
                <button className='button' onClick={addNote} >
                    <IconButton icon={<Plus />} color="cyan" 
                appearance="primary"  /> 
                <IconButton icon={<Completed />} color="cyan" 
                appearance="primary"  /> 
                </button>
            </div>
        </div>
        <p
            style={
                {
                    color: 'black'
                }}>{res}
        </p>

    </>
}

export default App;

