// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';


// const initNotes = [
//     {
//         id: 'GYi9G_uC4gBF1e2SixDvu',
//         prop1: 'value11',
//         prop2: 'value12',
//         prop3: 'value13',
//     },
//     {
//         id: 'IWSpfBPSV3SXgRF87uO74',
//         prop1: 'value21',
//         prop2: 'value22',
//         prop3: 'value23',
//     },
//     {
//         id: 'JAmjRlfQT8rLTm5tG2m1L',
//         prop1: 'value31',
//         prop2: 'value32',
//         prop3: 'value33',
//     },
// ];
// // export default function App() {
// //     const [notes, setNotes] = useState(initNotes);

// //     const result = notes.map(note => {
// //         return <li key={note.id}>
// //             <span>{note.prop1}</span>
// //             <span>{note.prop2}</span>
// //             <span>{note.prop3}</span>
// //         </li>;
// //     });
// //     let el = {
// //         id: 'JAmjRlfQTsaf8rLTm5tG2m1L',
// //         prop1: 'value41',
// //         prop2: 'value42',
// //         prop3: 'value43',
// //     }
// //     function addElem() {
// //         let arr1 = [...notes, el]
// //         setNotes(arr1)
// //     }
// //     return <div>
// //         <ul>
// //             {result}
// //         </ul>
// //         <button onClick={addElem}>Add</button>
// //     </div>;
// // }

// export default function App() {
//     const [notes, setNotes] = useState(initNotes);
//     const [inp1, setInp1] = useState('')
//     const [inp2, setInp2] = useState('')
//     const [inp3, setInp3] = useState('')
//     const result = notes.map(note => {
//         return <li key={note.id}>
//             <span>{note.prop1}</span>
//             <span>{note.prop2}</span>
//             <span>{note.prop3}</span>
//         </li>;
//     });
//     let el = {
//         id: Math.random(),
//         prop1: Math.random(),
//         prop2: inp2,
//         prop3: inp3,
//     }
//     function addElem() {
//         setNotes([...notes,el])
//     }
//     return <div>
//         <input value={inp1} onChange={(event)=>setInp1(event.target.value)}/>
//         <input value={inp2} onChange={(event)=>setInp2(event.target.value)}/>
//         <input value={inp3} onChange={(event)=>setInp3(event.target.value)}/>
//         <ul>
//             {result}
//         </ul>
//         <button onClick={addElem}>Add</button>
//     </div>;
// }
// function id() {
//     return Math.random()
// }
// const initNotes = [
//     {
//         id: id(),
//         name: 'name1',
//         desc: 'long description 1',
//         show: false,
//     },
//     {
//         id: id(),
//         name: 'name2',
//         desc: 'long description 2',
//         show: false,
//     },
//     {
//         id: id(),
//         name: 'name3',
//         desc: 'long description 3',
//         show: false,
//     },
// ];

// export default function App() {
//     const [notes, setNotes] = useState(initNotes);

//     const toggleShow = (id) => {
//         const updatedNotes = notes.map((note) => {
//             if (note.id === id) {
//                 return {
//                     ...note,


//                     show: !note.show,
//                 };
//             }

//         });
//     }
//     return note;
// };

// setNotes(updatedNotes);


// const result = notes.map(note => {
//     return <><p key={note.id}>
//         {note.name}
//         <i>{note.show ? note.desc : ''}</i>
//     </p>
//         <button onClick={() => !note.show}>show</button>
//     </>
// });

// return <div>
//     {result}
// </div>;
// }


// lesson 9

// import React from 'react'
// import Product from './components/Product';

// const prods = [
//     { name: 'product1', cost: 100 },
//     { name: 'product2', cost: 200 },
//     { name: 'product3', cost: 300 },
// ];
// export default function App() {
//     const result = prods.map(prod => {
//         return <Product key={prod.name} name={prod.name} cost={prod.cost} />;
//     })
//     return <>
//         {result}
//     </>
// }

import React from 'react'
import Products from './components/Products';

export default function App() {
    return <>
        <Products />
    </>
}
