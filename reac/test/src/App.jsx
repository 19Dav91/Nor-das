import './App.css';
import React, { useEffect, useState } from 'react';
// import { Icon } from '@iconify/react';
import { styles } from "./styles";
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
    }, [notes, status]);
    const filterNotes = notes.filter((note) => {
        if (status === 'All') return true;
        if (status === 'Completed') return note.completed;
        if (status === 'Uncompleted') return !note.completed;
        return true;
    });
    return <>
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                notes={notes}
                setnotes={setnotes}
                setinputText={setinputText}
                setstatus={setstatus}
            />
            <TodoList
                filterNotes={filterNotes}
                setnotes={setnotes}
                notes={notes}
            />
        </div>
    </>
};
