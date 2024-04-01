import './App.css';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { styles } from "./styles";

export default function App() {
    const [inputText, setInputText] = useState('');
    
    const addNote = () => {
        if (inputText !== '') {
            setNotes([...notes, { text: inputText, completed: false }]);
            setInputText('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addNote();
        }
    };

    const deleteNote = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    };

    const toggleCompletion = (index) => {
        const newNotes = [...notes];
        newNotes[index].completed = !newNotes[index].completed;
        newNotes[index].backgroundColor = newNotes[index].completed ? 'green' : 'red';
        setNotes(newNotes);
    };

    const filterNotes = notes.filter((note) => {
        if (status === 'All') return true;
        if (status === 'Completed') return note.completed;
        if (status === 'Uncompleted') return !note.completed;
        return true;
    });

    const res = filterNotes.map((note, index) => (
        <div className='todo-container bg' style={{ ...styles.class1, backgroundColor: note.backgroundColor}} key={index}>
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
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e)}
                />
                <button style={styles.class4} className='todo-item button' onClick={addNote}>
                    <Icon className='button' icon="ph:plus-fill" />
                </button>
                <div>
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
