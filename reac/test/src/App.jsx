import './App.css';
import React, { useState, useEffect } from 'react';

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
            <header className='App-header'>
                <h1>todos</h1>
            </header>
            <div className='App-body'>
                <div className='App-input'>
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setinput(e.target.value)}
                    />
                    <button onClick={() => addTodo(input)}>Add Todo</button>
                </div>
                <div className='App-todos'>
                    {todos.map((todo, index) => (
                        <div key={index} className='App-todo'>
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                onChange={() => completedTodo(todo.id)}
                            />
                            <span>{todo.text}</span>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
