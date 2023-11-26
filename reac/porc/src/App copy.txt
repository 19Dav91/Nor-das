import './App.css';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { styles } from "./styles";

function App() {
    const [input, setInput] = useState('');
    const [notes, setNotes] = useState(() => {
        const storedNotes = localStorage.getItem('notes');
        return storedNotes ? JSON.parse(storedNotes) : [];
    });
    const [status, setStatus] = useState('All');

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = () => {
        if (input.trim() !== '') {
            setNotes([...notes, { text: input, completed: false }]);
            setInput('');
        }
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addNote();
        }
    };

    const deleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };

    const toggleCompletion = (index) => {
        const updatedNotes = [...notes];
        updatedNotes[index].completed = !updatedNotes[index].completed;
        setNotes(updatedNotes);
    };

    const filteredNotes = notes.filter((note) => {
        if (status === 'All') return true;
        if (status === 'Completed') return note.completed;
        if (status === 'Uncompleted') return !note.completed;
        return true;
    });

    const res = filteredNotes.map((note, index) => (
        <div className='todo-container' style={styles.class1} key={index}>
            <span className={note.completed ? 'completed' : ''}>{note.text}</span>
            <div>
                <button style={styles.class2} onClick={() => toggleCompletion(index)}>
                    <Icon className='todo-item button btn' icon="fluent-mdl2:completed-solid" />
                </button>
                <button style={styles.class2} onClick={() => deleteNote(index)}>
                    <Icon className='todo-item button btn' icon="material-symbols:delete-outline" />
                </button>
            </div>
        </div>
    ));

    return (
        <div className='App'>
            <header>
                <h1>Todo List</h1>
            </header>
            <div className='todo-container'>
                <input
                    className='input res todo'
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button style={styles.class4} className='todo-item button' onClick={addNote}>
                <Icon className='button' icon="ph:plus-fill" />
                    {/* <Icon className='todo-item button btn' icon="ph:plus-fill" /> */}
                </button>
                <div >
                    <select className='select input' name="todos" onChange={(e) => setStatus(e.target.value)}>
                        <option value='All'>All</option>
                        <option value='Completed'>Completed</option>
                        <option value='Uncompleted'>Uncompleted</option>
                    </select>
                </div>
            </div>
            <div className="todo-list">{res}</div>
        </div>
    );
}

export default App;
