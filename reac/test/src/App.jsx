import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
export default function App() {
    const [input, setinput] = useState('');
    const [todos, settodos] = useState([]);
    const [status, setstatus] = useState('all');
    const [filtertodo, setfiltertodo] = useState([]);

    useEffect(() => {
        getLocalTodos();
    }, []);
    useEffect(() => {
        filter();
        saveLocalTodos();
    }, [todos, status]);

    const filter = () => {
        switch (status) {
            case 'completed':
                setfiltertodo(todos.filter((todo) => todo.completed === true));
                break;
            case 'uncompleted':
                setfiltertodo(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setfiltertodo(todos)
                break;
        }
    }
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.getItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            settodos(todoLocal);
        };
    };
    return (
        <div className='App'>
            <header>
                <h1>Todo list</h1>  
            </header>
            <Form inputText={input}
            todos={todos}
            settodos={settodos}
            setinput={setinput}
            setstatus={setstatus}
            />
            <TodoList
            filtertodo={filtertodo}
            settodos={settodos}
            todos={todos}/>
        </div>
    )
}
