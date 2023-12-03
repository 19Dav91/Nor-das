import React from "react";
import '../App.css'
import { styles } from "../styles";
import { Icon } from '@iconify/react';

const TodoList = ({ notes, setnotes, status }) => {
    const deleteNote = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setnotes(newNotes);
    };
    const completeNote = (index) => {
        const newNotes = [...notes];
        newNotes[index].completed = !newNotes[index].completed;
        newNotes[index].backgroundColor = newNotes[index].completed ? 'green' : 'red';
        setnotes(newNotes);
    };
    const filterNotes = notes.filter((note) => {
        if (status === 'All') return true;
        if (status === 'Completed') return note.completed;
        if (status === 'Uncompleted') return !note.completed;
        return true;
    });

    const res = filterNotes.map((note, index) => (
        <div className='todo-container bg' style={{ ...styles.class1, backgroundColor: note.backgroundColor }} key={index}>
            <p className={note.completed ? 'completed' : ''}>{note.text}</p>
            <div>
                <button onClick={() => completeNote(index)}>
                    <Icon className='todo-button  btn' icon="fluent-mdl2:completed-solid" color="green" />
                </button>
                <button onClick={() => deleteNote(index)}>
                    <Icon className='todo-button  btn' icon="wpf:delete" color="red" />

                </button>
            </div>
        </div>
    ));
    return <>
        {res}
    </>
}
export default TodoList;


// import React from "react";
// import '../App.css'
// import { styles } from "../styles";
// import { Icon } from '@iconify/react';

// const TodoList = ({ notes, setnotes, status }) => { // Removed setstatus from props as it's not needed here
//     const deleteNote = (index) => {
//         const newNotes = [...notes];
//         newNotes.splice(index, 1);
//         setnotes(newNotes);
//     };

//     const completeNote = (index) => {
//         const newNotes = [...notes];
//         newNotes[index].completed = !newNotes[index].completed;
//         newNotes[index].backgroundColor = newNotes[index].completed ? 'green' : 'red';
//         setnotes(newNotes);
//     };

//     const filterNotes = notes.filter((note) => {
//         if (status === 'all') return true;
//         if (status === 'completed') return note.completed;
//         if (status === 'uncompleted') return !note.completed;
//         return true;
//     });

//     const res = filterNotes.map((note, index) => (
//         <div className='todo-container bg' style={{ ...styles.class1, backgroundColor: note.backgroundColor }} key={index}>
//             <p className={note.completed ? 'completed' : ''}>{note.text}</p>
//             <div>
//                 <button onClick={() => completeNote(index)}>
//                     <Icon className='todo-button  btn' icon="fluent-mdl2:completed-solid" color="green" />
//                 </button>
//                 <button onClick={() => deleteNote(index)}>
//                     <Icon className='todo-button  btn' icon="wpf:delete" color="red" />
//                 </button>
//             </div>
//         </div>
//     ));

//     return (
//         <>
//             {res}
//         </>
//     );
// };

// export default TodoList;
