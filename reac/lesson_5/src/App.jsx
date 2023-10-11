import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// function App() {
//     return <div className='header'>
//         <header className='head'>
//             {/* <a target='_blanck' href="https://ru-ru.facebook.com/">ok</a> */}
//             <button>OK</button>
//         </header>
//     </div>
// }

// export default App;


// 09.10.23 lesson_5 cod.mu 58

// export default function App() {
//     const [value, setValue] = useState('');
//     function age(num) {
//         return 2023 - num
//     }
//     return <>
//         <input defaultValue={value} onChange={(event) => setValue(event.target.value)} />
//         <p>{age(value)}</p>
//     </>
// }

// export default function App() {
//     const [value1, setValue1] = useState('');
//     const [value2, setValue2] = useState('');
//     const [value3, setValue3] = useState('');
//     const [value4, setValue4] = useState('');
//     const [value5, setValue5] = useState('');
//     return <>
//         <input defaultValue={value1} onChange={(event) => setValue1(event.target.value)} />
//         <input defaultValue={value2} onChange={(event) => setValue2(event.target.value)} />
//         <input defaultValue={value3} onChange={(event) => setValue3(event.target.value)} />
//         <input defaultValue={value4} onChange={(event) => setValue4(event.target.value)} />
//         <input defaultValue={value5} onChange={(event) => setValue5(event.target.value)} />
//         <p>{((+value1) + (+value2) + (+value3) + (+value4) + (+value5))/5}</p>
//     </>
// }


// export default function App() {
//     const [value1, setValue1] = useState(null);
//     const [value2, setValue2] = useState(null);
//     const [value3, setValue3] = useState(null);
//     const [value4, setValue4] = useState(null);
//     const [value5, setValue5] = useState(null);
//     const [result, setResult] = useState(null);
//     return <>
//         <input defaultValue={value1} onChange={(event) => setValue1(event.target.value)} />
//         <input defaultValue={value2} onChange={(event) => setValue2(event.target.value)} />
//         <input defaultValue={value3} onChange={(event) => setValue3(event.target.value)} />
//         <input defaultValue={value4} onChange={(event) => setValue4(event.target.value)} />
//         <input defaultValue={value5} onChange={(event) => setValue5(event.target.value)} />
//         <button onClick={() => setResult(((+value1) + (+value2) + (+value3) + (+value4) + (+value5)) / 5)}>OK</button>
//         <p>{result}</p>
//     </>
// }

// export default function App() {
//     const [value1, setValue1] = useState(null);
//     const [value2, setValue2] = useState(null);
//     const [value3, setValue3] = useState(null);
//     const [value4, setValue4] = useState(null);
//     const [value5, setValue5] = useState(null);
//     const [result, setResult] = useState(null);
//     return <>
//         <input defaultValue={value1} onChange={(event) => setValue1(event.target.value)} />
//         <input defaultValue={value2} onChange={(event) => setValue2(event.target.value)} />
//         <input defaultValue={value3} onChange={(event) => setValue3(event.target.value)} />
//         <input defaultValue={value4} onChange={(event) => setValue4(event.target.value)} />
//         <input defaultValue={value5} onChange={(event) => setValue5(event.target.value)} />
//         <button onClick={() => setResult(((+value1) + (+value2) + (+value3) + (+value4) + (+value5)) / 5)}>OK</button><br/>
//         <button onClick={() => setResult((+value1) + (+value2) + (+value3) + (+value4) + (+value5))}>OK</button>
//         <p>{result}</p>
//     </>
// }


// export default function App() {
//     var myDate = new Date();
//     var dateString = myDate.toISOString().substring(0, 10);
//     const [value1, setValue1] = useState(dateString);
//     const [value2, setValue2] = useState(null);
//     const [result, setResult] = useState(null);
//     return <>
//         <input defaultValue={value1} onChange={(event) => setValue1(event.target.value)} />
//         <input defaultValue={value2} onChange={(event) => setValue2(event.target.value)} />
//         <button onClick={() => setResult(new Date(value1) - new Date(value2))}>OK</button><br />
//         <p>{result / 1000 / 60 / 60 / 24}</p>
//     </>
// };



// export default function App() {
//     const [value1, setValue1] = useState(null);
//     const [result, setResult] = useState(null);
    
//     function sum(str) {
//         let sum = 0;
//         for (const elem of str) {
//             sum += Number(elem)
//         }
//         return sum
//     }
//     return <>
//         <input defaultValue={value1} onChange={(event) => setValue1(event.target.value)}
//             onBlur={() => setResult(sum(value1))} />
//         <p>{result}</p>
//     </>
// };

// export default function App() {
//     const [checked, setChecked] = useState(true);
	
// 	return <div>
// 		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}  />
//         <p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
// 	</div>;
// };

export default function App() {
	const [checked, setChecked] = useState(true);
	
	return <div>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
		<p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
	</div>;
}