import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './components/Form'
// import { Icon } from '@iconify/react';
import { styles } from "./styles";
import Todo from './components/Todo'

export default function App() {
    const [inputtext, setinputtext] = useState('');
    const [todos, settodos] = useState(() => {
        const savedtodos = localStorage.getItem('todos');
        return savedtodos ? JSON.parse(savedtodos) : [];
    });
    const [status, setstatus] = useState('All');
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos, status]);
    return <>
        <div className='App'>
            <header>
                <h1>Todo List</h1>
            </header>
            <Form
                inputtext={inputtext}
                todos={todos}
                settodos={settodos}
                setinputtext={setinputtext}
            />
            <Todo
                todos={todos}
                settodos={settodos}
                setstatus={setstatus}
            />
        </div>
    </>
};
