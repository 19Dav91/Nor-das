import './App.css';
import React, { useEffect, useState } from 'react';
// import { Icon } from '@iconify/react';
// import { styles } from "./styles";
import Form from './components/Form'
import TodoList from './components/TodoList'
export default function App() {
    const [inputText, setinputText] = useState('');
    const [notes, setnotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes');
        return savedNotes ? JSON.parse(savedNotes) : [];
    });
    const [status, setstatus] = useState('All');
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return <>
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form inputText={inputText}
                notes={notes}
                setinputText={setinputText}
                setnotes={setnotes}
                setstatus={setstatus}
            />
            <TodoList
                setnotes={setnotes}
                notes={notes}
            />

        </div>
    </>
};
