// import logo from './logo.svg';
// import './App.css';

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

// import Products from './components/Products';

// export default function App() {
//     return <>
//         <Products />
//     </>
// }
// export default function App() {
// 	const class1 = {
// 		width: '200px',
// 		border: '2px solid brown',
// 		padding: '10px',
// 		textAlign: 'center',
//         margin: '0 auto'
// 	};

// 	const class2 = {
// 		color: 'red',
// 		fontWeight: 'bold',
// 	};

// 	const class3 = {
// 		fontStyle: 'italic',
// 		color: 'green',
// 	};

// 	const class4 = {
// 		backgroundColor: 'orange',
// 		fontWeight: 'bold',
// 		color: 'blue',
// 	};

// 	return (
// 		<div style={class1}>
// 			<p style={class2}>text</p>
// 			<p style={class3}>text</p>
// 			<p style={class4}>text</p>
// 		</div>
// 	);
// } 

// import styled from "styled-components";

// const Container = styled.div`
// 	width: 200px;
// 	border: 2px solid brown;
// 	padding: 10px;
// 	text-align: center;
//     margin: 0 auto
// `;

// const Text1 = styled.p`
// 	color: orangered;
// 	font-weight: bold;
// `;

// const Text2 = styled.p`
// 	font-style: italic;
// 	color: brown;
// `;

// const Text3 = styled.p`
// 	background-color: orange;
// 	font-weight: bold;
// 	color: white;
// `;

// export default function App() {
// 	return <>
// 		<Container>
// 			<Text1>text</Text1>
// 			<Text2>text</Text2>
// 			<Text3>text</Text3>
// 		</Container>
// 	</>;
// }

// import styles from "./Buttons.module.css"; 

// const Buttons = () => (
// 	<>
// 		<button className={styles.btn1}>btn1</button>
// 		<button className={styles.btn2}>btn2</button>
// 		<button className={styles.btn3}>btn3</button>
// 	</>
// );
// export default function App() {
//     return <>
//     {Buttons()}
//     </>
// };
// import ReactDOM from "react-dom/client";
// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//     return <>
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path="blogs" element={<Blogs />} />
//                     <Route path="contact" element={<Contact />} />
//                     <Route path="*" element={<NoPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     </>;
// }