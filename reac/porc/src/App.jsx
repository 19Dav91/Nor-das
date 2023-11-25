// import './App.css';
// import React, { useEffect, useState } from 'react';
// import { styles } from "./styles";
// // Import the default CSS 
// import { Icon } from '@iconify/react';
// function App() {
//     let [input, setinput] = useState('');
//     const [notes, setNotes] = useState([]);
//     let [status, setstatus] = useState('All');
//     let subHendler = (e) => {
//         e.preventDefault();
//     };
//     function addNote() {
//         if (input !== '') {
//             setNotes([...notes, input]);
//             setinput('');
//         }
//     }

//     useEffect(() => {

//         return () => { /* cleanup code */ }
//     }, [])

//     const res = notes.map((note) => {
//         return <>
//             <div className='todo-container' style={styles.class1} >
//                 {note}
//                 <div>
//                     <button style={styles.class2} onClick={subHendler} >
//                         <Icon className='todo-item button btn ' icon="fluent-mdl2:completed-solid" />
//                     </button>
//                     <button style={styles.class2} onClick={subHendler}>
//                         <Icon className='todo-item button btn' icon="material-symbols:delete-outline" />
//                     </button>
//                 </div>
//             </div>
//         </>
//     });

//     return <>
//         <div className='App'>
//             <header>
//                 <h1>Todo List</h1>
//             </header>
//             <div className='todo-container'>
//                 <input
//                     className='input res todo'
//                     type='text'
//                     value={input}
//                     onChange={(e) => setinput(e.target.value)} />
//                 <button className='todo-item button ' onClick={addNote} >
//                     <Icon className='todo-item button btn' icon="ph:plus-fill" />
//                 </button>
//                 <div className="select">
//                     <select className='select input ' name="todos" >
//                         <option value='All'>All</option>
//                         <option value='Completed'>Completed</option>
//                         <option value='Uncompleted'>Uncompleted</option>
//                     </select>
//                 </div>

//             </div>
//         </div>
//         <p
//             style={
//                 {
//                     color: 'black'
//                 }}>{res}
//         </p>

//     </>
// }

// export default App;

import './App.css';
import React, { useEffect, useState } from 'react';
import { styles } from "./styles";
import { Icon } from '@iconify/react';

function App() {
  const [input, setInput] = useState('');
  const [notes, setNotes] = useState([]);
  const [status, setStatus] = useState('All');

  const addNote = () => {
    if (input !== '') {
      setNotes([...notes, { text: input, completed: false }]);
      setInput('');
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const completeNote = (index) => {
    const newNotes = [...notes];
    newNotes[index].completed = !newNotes[index].completed;
    setNotes(newNotes);
  };

  const filteredNotes = notes.filter((note) => {
    if (status === 'All') return true;
    if (status === 'Completed') return note.completed;
    if (status === 'Uncompleted') return !note.completed;
    return true;
  });

  const noteElements = filteredNotes.map((note, index) => (
    <div className='todo-container' style={styles.class1} key={index}>
      {note.text}
      <div>
        <button style={styles.class2} onClick={() => completeNote(index)}>
          <Icon className={`todo-item button btn ${note.completed ? 'completed' : ''}`} icon="fluent-mdl2:completed-solid" />
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
        />
        <button className='todo-item button ' onClick={addNote}>
          <Icon className='todo-item button btn' icon="ph:plus-fill" />
        </button>
        <div className="select">
          <select
            className='select input '
            name="todos"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value='All'>All</option>
            <option value='Completed'>Completed</option>
            <option value='Uncompleted'>Uncompleted</option>
          </select>
        </div>
      </div>
      <div>
        {noteElements.length > 0 ? (
          <p style={{ color: 'black' }}>{noteElements}</p>
        ) : (
          <p style={{ color: 'black' }}>No {status.toLowerCase()} tasks</p>
        )}
      </div>
    </div>
  );
}

export default App;
