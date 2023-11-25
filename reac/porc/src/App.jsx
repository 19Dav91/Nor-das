import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
    const [input, setinput] = useState('');
    const [status, setstatus] = useState('All');
    //     useEffect(()=>{

    //     return ()=>{ /* cleanup code */ }
    //          },[])

    return <>
        <div className='todo-container'>
            <input className='input todo' type='text' />
            <button className='button todo ' onClick={(e) => { }} >Add</button>
        </div>

    </>
}

export default App;
