import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// export default function App() {
// 	const [checked, setChecked] = useState(true);

// 	return <div>
// 		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
// 		<p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
// 	</div>;
// }

// 62/1 С помощью трех чекбоксов попросите пользователя выбрать языки, которые он знает: html, css и js. 
// Результат выбора по каждому языку выводите в отдельные абзацы.

export default function App() {
	const [checked1, setChecked1] = useState(true);
	const [checked2, setChecked2] = useState(true);
	const [checked3, setChecked3] = useState(true);

	return <div>
    <p>"Ինչ ծրագրավորման լեզուներ եք տիրապետում"</p>
		<span>Html</span> <input type="checkbox"  onChange={() => setChecked1(!checked1)}/><br/><br/>
		<span>CSS</span> <input type="checkbox"  onChange={() => setChecked2(!checked2)} /><br/><br/>
		<span>Js</span> <input type="checkbox"  onChange={() => setChecked3(!checked3)} /><br/><br/>
		{/* <p>{checked1 ? 'Դուք տիրապետում եք' `checked1`  : 'не отмечен'}</p> */}
		<p>{checked1 ? '' : 'Դուք տիրապետում եք Html ծրագրավորման լեզվին' }</p>
		<p>{checked2 ? ''  : 'Դուք տիրապետում եք CSS ծրագրավորման լեզվին'}</p>
		<p>{checked3 ? ''  : 'Դուք տիրապետում եք Js ծրագրավորման լեզվին'}</p>
	</div>;
}