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
// 	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
// 	function doSmth(index) {
// 		let copy = Object.assign([], notes);
// 		copy[index] = copy[index]*copy[index]; 
// 		setNotes(copy);
// 	}
// 	const result = notes.map((note, index) => {
// 		return <li key={index} onClick={() => doSmth(index)}>
// 			{note}
// 		</li>;
// 	});

// 	return <div>
// 		<ul>
// 			{result}
// 		</ul>
// 	</div>;
// }

// export default function App() {
//     const [value, setValue] = useState([1, 2, 3, 4, 5]);
//     function kvadrad(i) {
//         let copy = Object.assign([], value);
//         copy[i] = copy[i] * copy[i];
//         setValue(copy);
//     }
//     const res = value.map((value, i) => {
//         return <li key={i} onClick={() => kvadrad(i)}>
//             {value}
//         </li>
//     });
//     return <>
//         <ul>
//             {res}
//         </ul>
//     </>
// };



// 74.2

// export default function App() {
//     const [li, setLi] = useState([1, 2, 3, 4, 5]);
//     function del(elem) {
//         let copy = Object.assign([], li);
//         copy.splice(elem, 1)
//         setLi(copy);
//     }
//     const res = li.map((li, elem) => {
//         return <li key={elem} onClick={() => del(elem)}>
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

