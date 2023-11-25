import './App.css';
import React, { useEffect, useState } from 'react';
import { styles } from "./styles";
// Import the default CSS 
import { Icon } from '@iconify/react';
import form from './components/form'
function App() {
    const [input, setinput] = useState('');
    const [notes, setNotes] = useState([]);
    const [status, setstatus] = useState('All');
    // let subHendler = (e) => {
    //     e.preventDefault();

    // };
    // function addNote() {

    //     if (input !== '') {
    //         setNotes([...notes, input]);
    //         setinput('');
    //     }
    // }

    // useEffect(() => {
    //     del()
    //     return () => { /* cleanup code */ }
    // }, [])
    // function del() {
    //     console.log(15);
    // }
    // const res = notes.map((note) => {
    //     return <>
    //         <div className='todo-container' style={styles.class1} >
    //             {note}
    //             <div>
    //                 <button style={styles.class2} onClick={subHendler}>
    //                     <Icon className='todo-item button btn ' icon="fluent-mdl2:completed-solid" />
    //                 </button>
    //                 <button onClic={del()} style={styles.class2} onClick={subHendler}>
    //                     <Icon className='todo-item button btn' icon="material-symbols:delete-outline" />
    //                 </button>
    //             </div>
    //         </div>
    //     </>
    // });

    return <>
        <div className='App'>
            <header>
                <h1>Todo List</h1>
            </header>
            <div className='todo-container'>
                <input
                    className='input res todo'
                    type='text'
                    value={input}
                    onChange={(e) => setinput(e.target.value)} />
                <button className='todo-item button ' onClick={addNote} >
                    <Icon className='todo-item button btn' icon="ph:plus-fill" />
                </button>
                <div className="select">
                    <select className='select input ' name="todos" >
                        <option value='All'>All</option>
                        <option value='Completed'>Completed</option>
                        <option value='Uncompleted'>Uncompleted</option>
                    </select>
                </div>

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

