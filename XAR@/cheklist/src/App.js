import React, { useState } from 'react';
import TaskList from './components/TaskList';
export default function App() {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');

    const addTask = () => {
        if (newTaskText.trim() !== '') {
            const newTask = {
                id: Math.random().toString(36).substring(7),
                text: newTaskText,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setNewTaskText('');
        }
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const toggleTask = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const editTask = (id, newText) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, text: newText };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div>
            <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
            />
            <button onClick={addTask}>Добавить дело</button>
            <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleTask}
                onEdit={editTask}
            />
        </div>
    );
};


