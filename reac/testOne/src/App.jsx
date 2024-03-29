import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

export default function App() {
    const [inputText, setinputText] = useState('');
    const [notes, setnotes] = useState(() => {
        const savednotes = localStorage.getItem('notes');
        return savednotes ? JSON.parse(savednotes) : [];
    });
    const [status, setstatus] = useState('All');

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return (
        <div className='App'>
            <header>
                <h1>Todo List</h1>
            </header>
            <div>
                <Form
                    inputText={inputText}
                    setinputText={setinputText}
                    notes={notes}
                    setnotes={setnotes}
                    setstatus={setstatus}
                />
            </div>
            <TodoList className={'bg'}
                notes={notes}
                setnotes={setnotes}
                status={status}
            />
        </div>
    );
};
