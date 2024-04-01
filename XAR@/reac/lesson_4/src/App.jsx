import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


// function App() {
// 	const [name, setName] = useState('prod');
// 	return <div>
// 		<span>{name}</span><br /><br />
//     <button onClick={clickHandler}>btn</button>

// 	</div>;
//   function clickHandler() {
//     setName('xxxx');
//   }
// }

// export default App;

// export function App() {
// 	const [count, setCount] = useState(0);

// 	function clickHandler() {
// 		setCount(count + 1);
// 	}

// 	return <div>
// 		<span>{count}</span>
// 		<button onClick={clickHandler}>+</button>
// 	</div>;
//     //     const [inCart, setInCart] = useState(false);

// //     return <div>
// //         <span>{inCart ? 'в бан' : 'из бана'}</span><br /><br />
// //         <button onClick={() => setInCart(!inCart)}>btn</button>
// //     </div>;
// }

// export function App() {
//     const [count, setCount] = useState(0);
//     return <div>
//         <p>{count}</p>
//         <button onClick={() => setCount(count+1)}>OK</button>
//     </div>
// }


// export function App() {
//     const [age, setAge] = useState(30);
//     return <div>
//         <p>{age}</p>
//         <button onClick={()=>setAge(age+1)}>+</button>
//         <button onClick={()=>setAge(age-1)}>-</button>
//     </div>
// }

// export function App() {
//     const [value, setValue] = useState('text');

//     function handleChange(event) {
//         setValue(event.target.value);
//     }

//     return <div>
//         <input value={value} onChange={handleChange} />

//     </div>;
// }

// export function App() {
//     const [str, setStr] = useState('')
//     const [str1, setStr1] = useState('')
//     function exp(event,event1) {
//         setStr(event.target.value)
//     }
//     function exp1(event) {
//         setStr1(event.target.value)
//     }
//     return <div>
//         <input className='inp' value={str} onChange={exp}></input>
//         <p>{str}</p>
//         <input value={str1} onChange={exp1}></input>
//         <p>{str1}</p>
//     </div>
// }
export function App() {
    const [value, setInp] = useState('')
    function sum(event) {
        setInp(event.target.value)
    }
    function countWords(text) {
        const words = text.trim().split(/ /);
        return words.length;
    }
    const wordCount = countWords(value);
    return <div>
        <input value={value} onChange={sum}></input>
        <p>{value}</p>

        <p>{value.length}</p>
        <p>{wordCount}</p>
    </div>
};