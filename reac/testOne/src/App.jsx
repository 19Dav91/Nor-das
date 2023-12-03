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
    const [status, setstatus] = useState('all');
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return <>
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
            <TodoList
                notes={notes}
                setnotes={setnotes}
                status={status}
            />
        </div>
    </>
};


// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Form from './components/Form';
// import TodoList from './components/TodoList';

// export default function App() {
//     const [inputText, setinputText] = useState('');
//     const [notes, setnotes] = useState(() => {
//         const savednotes = localStorage.getItem('notes');
//         return savednotes ? JSON.parse(savednotes) : [];
//     });
//     const [status, setstatus] = useState('all'); // Ensure initial status matches options and is lowercase

//     useEffect(() => {
//         localStorage.setItem('notes', JSON.stringify(notes));
//     }, [notes]);

//     return (
//         <div className='App'>
//             <header>
//                 <h1>Todo List</h1>
//             </header>
//             <div>
//                 <Form
//                     inputText={inputText}
//                     setinputText={setinputText}
//                     notes={notes}
//                     setnotes={setnotes}
//                     setstatus={setstatus} // Pass setstatus prop
//                 />
//             </div>
//             <TodoList
//                 notes={notes}
//                 setnotes={setnotes}
//                 status={status}
//             />
//         </div>
//     );
// };
