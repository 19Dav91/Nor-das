import React, { useState } from 'react';

const Notebook = () => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);
    const [newNote, setNewNote] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const addNote = () => {
        if (newNote.trim() !== '') {
            const newNoteObj = {
                id: Math.random().toString(36).substring(7),
                title: `Запись ${notes.length + 1}`,
                content: newNote,
            };
            setNotes([...notes, newNoteObj]);
            setNewNote('');
        }
    };

    const selectNote = (id) => {
        const selectedNote = notes.find((note) => note.id === id);
        setCurrentNote(selectedNote);
    };

    const deleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
        if (currentNote && currentNote.id === id) {
            setCurrentNote(null);
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const searchNotes = (query) => {
        const filteredNotes = notes.filter(
            (note) =>
                note.title.toLowerCase().includes(query.toLowerCase()) ||
                note.content.toLowerCase().includes(query.toLowerCase())
        );
        return filteredNotes;
    };

    const filteredNotes = searchNotes(searchQuery);

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                />
                <button onClick={addNote}>Добавить запись</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Поиск записей"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '20px' }}>
                    <h3>Записи</h3>
                    {filteredNotes.map((note) => (
                        <div key={note.id}>
                            <button onClick={() => selectNote(note.id)}>{note.title}</button>
                            <button onClick={() => deleteNote(note.id)}>Удалить</button>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Текст записи</h3>
                    <textarea
                        rows="10"
                        cols="50"
                        value={currentNote ? currentNote.content : ''}
                        readOnly={!currentNote}
                        onChange={(e) =>
                            setCurrentNote({
                                ...currentNote,
                                content: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Notebook;
