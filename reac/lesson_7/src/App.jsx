// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



// 73.1,2 Сделайте кнопку, по нажатию на которую будет добавляться новый элемент в конец массива,
// тем самым добавляя новый li в конец тега ul.


// export default function App() {
//     const [notes, setNotes] = useState([]);
//     const [newItem, setNewItem] = useState('');
//     const res = notes.map((note, index) => {
//         return <li key={index}>{note}</li>
//     });
//     function addNote() {
//         if (newItem.trim() !== '') {
//             setNotes([...notes, newItem]);
//             setNewItem('');
//         }
//     }
//     return <>
//         <input
//             type='text'
//             value={newItem}
//             onChange={(event) => setNewItem(event.target.value)}
//         />
//         <button onClick={addNote}>Add</button>
//         <ul>{res}</ul>
//     </>
// };


// 74.1 Дан массив с числами. Выведите его в виде списка ul. По клику на любую li возведите ее число в квадрат.


// export default function App() {
//     const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
//     function doSmth(index) {
//         // let copy = Object.assign([], notes);
//         let copy = [...notes]
//         copy[index] = copy[index]*copy[index]; 
//         setNotes(copy);
//     }
//     const result = notes.map((note, index) => {
//         return <li key={index} onClick={() => doSmth(index)}>
//             {note}
//         </li>;
//     });

//     return <div>
//         <ul>
//             {result}
//         </ul>
//     </div>;
// }

// export default function App() {
//     const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

//     function doSmth(index) {
//         // Create a copy of the 'notes' array
//         const copy = [...notes];

//         // Square the number at the specified index
//         copy[index] = copy[index] * copy[index];

//         // Update the 'notes' state with the modified copy
//         setNotes(copy);
//     }

//     const result = notes.map((note, index) => (
//         <li key={index} onClick={() => doSmth(index)}>
//             {note}
//         </li>
//     ));

//     return (
//         <div>
//             <ul>{result}</ul>
//         </div>
//     );
// }


// 74.2

// export default function App() {
//     const [li, setLi] = useState([1, 2, 3, 4, 5]);
//     function del(index) {
//         // let copy = Object.assign([], li);
//         let copy = [...li.slice(0, index), ...li.slice(index + 1)]
//         // copy.splice(index, 1)
//         setLi(copy);
//     }
//     const res = li.map((li, index) => {
//         return <li key={index} onClick={() => del(index)}>
//             {li}
//         </li>
//     });
//     return <>
//         <ul>
//             {res}
//         </ul>
//     </>
// };


// 74.3

// export default function App() {
//     const [li, setLi] = useState([1, 2, 3, 4, 5]);
//     function del(elem) {
//         let copy = Object.assign([], li);
//         copy.splice(elem, 1)
//         setLi(copy);
//     }
//     const res = li.map((li, elem) => {
//         return <li key={elem}>
//             {li}
//             &nbsp&nbsp<button onClick={() => del()}>delete</button>
//         </li>
//     });
//     return <>
//         <ul>

//             {res}
//         </ul>
//     </>
// };

// 74.3

// export default function App() {
//     const [inp, setInp] = useState('');
//     const [li, setLi] = useState([1, 2, 3, 4, 5]);
//     function inp(elem) {
//         let copy = Object.assign([], li);
//         copy[elem] += copy[elem]
//         setLi(copy);
//     }
//     const res = li.map((li, elem) => {
//         return <li key={elem}>
//             {li}
//         </li>
//     });
//     return <>
//         <ul>
//             {res}
//         </ul>
//         <input value={inp} onChange={} onClick={() => inp()} />
//     </>
// };

// ??????????????
// export default function App() {
//   const [li, setLi] = useState([1, 2, 3, 4, 5]);
//   const [inputValue, setInputValue] = useState('');

//   function handleLiClick(text) {
//     setInputValue(text);
//   }

//   const res = li.map((text, index) => {
//     return (
//       <li key={index} onClick={() => handleLiClick(text)}>
//         {text}
//       </li>
//     );
//   });

//   return (
//     <div>
//       <ul>{res}</ul>
//       <input value={inputValue} />
//     </div>
//   );
// }

// export default function App() {
//     const [li, setLi] = useState([1, 2, 3, 4, 5]);
//     function revers() {
//         const res = [...li].reverse()
//         console.log(li);
//         return res
//     };
//     function handleLiClick(text) {
//         setLi(text);
//     }
//     const rev = li.map((text, index) => {
//         return <>
//             <li key={index} onClick={() => handleLiClick(text)}>
//                 {text}
//             </li>
//         </>
//     })
//     return <>
//         <ul>
//             {rev} </ul><br /><br /><br />
//         <button onClick={() => setLi(revers())}>ok</button>
//     </>
// };

