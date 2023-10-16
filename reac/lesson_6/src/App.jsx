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

// export default function App() {
// 	const [checked1, setChecked1] = useState(true);
// 	const [checked2, setChecked2] = useState(true);
// 	const [checked3, setChecked3] = useState(true);

// 	return <div>
//     <p>"Ինչ ծրագրավորման լեզուներ եք տիրապետում"</p>
// 		<span>Html</span> <input type="checkbox"  onChange={() => setChecked1(!checked1)}/><br/><br/>
// 		<span>CSS</span> <input type="checkbox"  onChange={() => setChecked2(!checked2)} /><br/><br/>
// 		<span>Js</span> <input type="checkbox"  onChange={() => setChecked3(!checked3)} /><br/><br/>
// 		<p>{checked1 ? '' : 'Դուք տիրապետում եք Html ծրագրավորման լեզվին' }</p>
// 		<p>{checked2 ? ''  : 'Դուք տիրապետում եք CSS ծրագրավորման լեզվին'}</p>
// 		<p>{checked3 ? ''  : 'Դուք տիրապետում եք Js ծրագրավորման լեզվին'}</p>
// 	</div>
// }

// 6-rd parapmunq 16.10.23
// export default function App() {
// 	const [value, setValue] = useState('');
	
// 	// function handleChange(event) {
// 	// 	setValue(event.target.value);
// 	// }
	
// 	return <div>
// 		<select value={value} onChange={(event)=>setValue(event.target.value)}>
// 			<option>text1</option>
// 			<option>text2</option>
// 			<option>text3</option>
// 			<option>text4</option>
// 		</select>
// 		<p>
// 			ваш выбор: {value}
// 		</p>
// 	</div>;
// }


// export default function App() {
// 	const texts = ['text1', 'text2', 'text3', 'text4'];
// 	const [value, setValue] = useState('');
	
// 	const options = texts.map((text, index) => {
// 		return <option key={index}>{text}</option>;
// 	});
	
// 	return <div>
// 		<select value={value} onChange={(event) => setValue(event.target.value)}>
// 			{options}
// 		</select>
// 		<p>
// 			ваш выбор: {value}
// 		</p>
// 	</div>;
// }

// export default function App() {
//     const touns = ['Erevan', 'Vanadzor', 'Gyumri'];
//     const [value, setValue] = useState('');
//     const options = touns.map((text,index)=>{
//         return <option key= {index}>{text}</option>
//     })
//     return <>
//     <select value={value} onChange={(event)=>setValue(event.target.value)}>
//         {options}
//     </select>
//     <p>
//         {value}
//     </p>
//     </>
// }

// export default function App() {
// 	const [value, setValue] = useState('');
	
// 	return <div>
// 		<select value={value} onChange={event => setValue(event.target.value)}>
// 			<option value="1">text1</option>
// 			<option value="2">text2</option>
// 			<option value="3">text3</option>
// 		</select>
// 		<p>
// 			{value === '1' && 'вы выбрали первый пункт'}
// 			{value === '2' && 'вы выбрали второй пункт'}
// 			{value === '3' && 'вы выбрали третий пункт'}
// 		</p>
// 	</div>;
// }

// 66.1 С помощью выпадающего списка предложите пользователю выбрать к какой возрастной группе он относится:
//  от 0 до 12 лет, от 13 до 17, от 18 до 25, либо старше 25 лет.

// export default function App() {
//     const [value, setValue]=useState('');
//     const age = [['0 до 12 лет','12'],[' от 13 до 17','13'],[' от 18 до 25','14'],['старше 25 лет','15']];
//     const options = age.map((text,index)=>{
//         return text.map((text1,index1)=>{
//             return <option key={index1} value={index1}>{text1}</option>
//         })
//     })
//     return <>
//     <select value={value} onChange={(event)=>setValue(event.target.value)}>
//         {options}
//     </select>
//     <p>
//         {value === '0' && 'manuk'}
//         {value === '1' && 'patani'}
//         {value === '2' && 'chapahas'}
//         {value === '3' && 'bidza'}
//         </p>
//     </>
// }

// export default function App() {
// 	const [value, setValue] = useState(1);
	
// 	function changeHandler(event) {
// 		setValue(event.target.value);
// 	}
// 	return <div>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="1"
// 			checked={value === '1' ? true : false}
// 			onChange={changeHandler}
// 		/>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="2"
// 			checked={value === '2' ? true : false}
// 			onChange={changeHandler}
// 		/>
// 		<input
// 			type="radio"
// 			name="radio"
// 			value="3"
// 			checked={value === '3' ? true : false}
// 			onChange={changeHandler}
// 		/>
// 	</div>
// }

// export default function App() {
// 	const [notes, setNotes] = useState([1, 2, 3]);
	function getSum(arr) {
        let sum = 0;
        
        for (const elem of arr) {
            sum += +elem;
        }
        
        return sum;
    }
// 	return <div>
// 		<input value={notes[0]} />
// 		<input value={notes[1]} />
// 		<input value={notes[2]} />
		
// 		{getSum(notes)}
// 	</div>;
// }


// export default function App() {
// 	const [notes, setNotes] = useState([1, 2, 3,4]);
	
// 	function changeHandler(index, event) {
//         setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
// 	}
	
// 	return <div>
// 		<input value={notes[0]} onChange={event => changeHandler(0, event)} />
// 		<input value={notes[1]} onChange={event => changeHandler(1, event)} />
// 		<input value={notes[2]} onChange={event => changeHandler(2, event)} />
		
// 		{getSum(notes)}
// 	</div>;
// }

const initObj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
}
// export default function App() {
// 	const [obj, setObj] = useState(initObj);
	
// 	function handleChange(prop, event) {
// 		setObj({...obj, ...{[prop]: event.target.value}});
// 	}
	
// 	return <div>
// 		<input value={obj.prop1} onChange={event => handleChange('prop1', event)} />
// 		<input value={obj.prop2} onChange={event => handleChange('prop2', event)} />
// 		<input value={obj.prop3} onChange={event => handleChange('prop3', event)} />
		
// 		<br />
// 		{obj.prop1}-{obj.prop2}-{obj.prop3}
// 	</div>;
// }

// 71.1 Пусть в стейте хранится объект с датой:
// Выведите в абзаце год, месяц и день из даты, хранящейся в стейте, а также день недели, соответствующий ей.

// const initDate = {
// 	year:  2025,
// 	month: 12,
// 	day:   31,
// }

// export default function App() {
//     const [date, setDate] = useState(initDate);
//     function handleChange(key,event) {
//         setDate({...date,...{[key]:event.target.value}})
//     }
//     return <>
//     <input value={date.year} onChange={(event)=>handleChange('year',event)}/><br/><br/>
//     <input value={date.month} onChange={(event)=>handleChange('month',event)}/><br/><br/>
//     <input value={date.day} onChange={(event)=>handleChange('day',event)}/><br/><br/>
//     <p>{date.year}.{date.month}.{date.day}</p>
//     </>
// }


