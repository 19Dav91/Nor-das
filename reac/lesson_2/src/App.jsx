import logo from './logo.svg';
import './App.css';
import React from 'react';

// export default function App() {


//     function getSum(res) {
//         let sum = 0;
//         for (const elem of String(res)) {
//             sum += Number(elem)
//         }
//         return sum
//     }
//     return getSum(123);
// }

// 32.1 Используя созданную вами функцию getDigitsSum выведите в абзац сумму цифр числа 12345.

// export default function App() {
//     function getSum(res) {
//         let sum = 0;
//         for (const elem of String(res)) {
//             sum += Number(elem)
//         }
//         return sum
//     }
//     return <div>
//         {getSum(12345)}
//     </div> 
// }


// 33.1 Сделайте так, чтобы по клику на первую кнопку срабатывала первая функция, 
// а по клику на вторую кнопку - вторая функция.

// export default function App() {
// 	function show1() {
// 		alert(1);
// 	}

// 	function show2() {
// 		alert(2);
// 	}

// 	return <div>
// 		<button onClick={show1}>act1</button>
// 		<button onClick={show2}>act2</button>
// 	</div>;
// }


// 34.1 Сделайте так, чтобы по клику на первую кнопку алертом выводилось число 1, 
// по клику на вторую кнопку - число 2, а по клику на третью - число 3.
// export default function App() {

//         function showMess(num) {
//             alert(num);
//         }

// 	return <div>
// 		<button onClick={()=> showMess(1)}>act1</button>
// 		<button onClick={()=> showMess(2)}>act2</button>
// 		<button onClick={()=> showMess(3)}>act3</button>
// 	</div>;
// }


// export default function App() {
// 	function func(event) {
// 		console.log(event);
// 		// console.log(event.target);
// 	}

// 	return <div>
// 		<button onClick={func}>act</button>
// 	</div>;
// }


//11.09.23 lesson_3

// export default function App() {
//     function func(event, ...arg) {
//         console.log(arg, event);
//     }

//     return <div>
//         <button onClick={event => func(event, 'eee', 'Dav')}>act</button>
//     </div>;
// }

// export default function App() {
//     const arr = [1, 2, 3];
//     return <div>
//         {arr}
//     </div>;
// }

// export default function App() {
//     const arr = [
//         <li key='1'>1</li>,
//         <li key='2'>2</li>,
//         <li key='3'>3</li>,
//         <li key='4'>4</li>,
//         <li key='5'>5</li>,
//     ];
//     return <ul>
//         {arr}
//     </ul>
// }

// export default function App() {
//     const arr = [];

//     for (let i = 0; i <= 9; i++) {
//         arr.push(<p key={i}>{i}</p>);
//     }

//     return <div>
//         {arr}
//     </div>;
// }


// export default function App() {
//     const arr = [1, 2, 3, 4, 5];
//     const res = [];

//     for (const elem of arr) {
//         res.push(<p key={elem}>{elem}</p>);
//     }

//     return <div>
//         {res}
//     </div>;
// }

// export default function App() {
// 	const arr = [1, 2, 3, 4, 5];

// 	const res = arr.map(function(item,index) {
// 		return <p key={index}>{item}</p>;
// 	});

// 	return <div>
// 		{res}
// 	</div>;
// }
// const prods = [
// 	{name: 'product1', cost: 100},
// 	{name: 'product2', cost: 200},
// 	{name: 'product3', cost: 300},
// ];

// export default function App() {
// 	const res = prods.map(function(item) {
// 		return <p key={item.name}>{item.name} {item.cost}</p>;
// 	});

// 	return <div>
// 		{res}
// 	</div>;
// }

// const users = [
//     { name: 'user1', surn: 'surn1', age: 30 },
//     { name: 'user2', surn: 'surn2', age: 31 },
//     { name: 'user3', surn: 'surn3', age: 32 },
// ];

// export default function App(){
//     const res = users.map(function(item,index){
//         return <li key={index}>
//             <span>{item.name}</span>
//             <span>{item.surn}</span>
//             <span>{item.age}</span>
//         </li>
//     })
//     return <ul>
//         {res}
//     </ul>
// }

// export default function App(){
//     const res = users.map((item,index)=>{
//         return <li key={index}>
//             <span>{item.name}</span>
//             <span>{item.surn}</span>
//             <span>{item.age}</span>
//         </li>
//     })
//     return <ul>
//         {res}
//     </ul>
// }

// const square = function (x) {
//     return x * x;
// };

// // Calling the anonymous function
// const result = square(4);
// console.log(result); // Output: 16

// const square = x=>x*x;
// console.log(square(9));

// const prods = [
//     { id: 1, name: 'product1', cost: 100 },
//     { id: 2, name: 'product2', cost: 200 },
//     { id: 3, name: 'product3', cost: 300 },
// ];

// export default function App(){
//     const res = prods.map(item => {
//         return <tr key={item.id}>
//             <td>
//             name:{item.name},cost:{item.cost}
//             </td>
//         </tr>
//     })
//     return <table>
//         <tbody>
//             {res}
//         </tbody>
//     </table>
// }

// HOMEWORK


// Приведение строк к верхнему регистру:
// Создайте функцию, которая принимает массив строк и возвращает новый массив,
// в котором все строки приведены к верхнему регистру с использованием функции map().

// export default function App (){
//     let arrStr = ['dav','karen','edo'];
//     let res = arrStr.map(item=>item.toUpperCase())
// return res
// }

// Получение длин строк:
// Создайте функцию, которая принимает массив строк и возвращает новый массив,
// содержащий длины каждой строки с использованием функции map().

//տանյվել եմ

// Удаление элементов с определенным значением:
// Создайте функцию, которая принимает массив и значение, которое нужно удалить,
// и возвращает новый массив без всех вхождений этого значения с использованием функции map().


// export default function App() {
//     let arrStr = ['Davit', 'Kar', 'Eduard', 'արևաճաչանչափայլատակություն',"ունիկալ","ուխտ"];
//     let res = arrStr.map((item) => {
//         let sum = 0
//         let total = item.length
//         for (let i = 0; i <= 55; i++) {
//             if (item[i] === 'ո' && item[i + 1] === 'ւ') {
//                 sum++;
//                 total--
//             }
//         }
//         return total
//     })
//     return res
// }

// let res;
// export default function App() {
//     let arrStr = ['Davit', 'Kar', 'Eduard', 'արևաճաչանչափայլատակություն', "ունիկալ", "ուխտ"];
//     res = arrStr.map((item) => {
//         let sum = 0
//         let total = item.length
//         for (let i = 0; i <= 55; i++) {
//             if (item[i] === 'ո' && item[i + 1] === 'ւ') {
//                 sum++;
//                 total--
//             }
//         }
//         return total
//     })
//     return res
// }
// console.log(res);


// ?????????????????????????????????????
// export default function sumArray(arr) {

//     if (arr.length === 0) {
//         return 0;
//     } else {
//         let arr1 = [...arr]
// return  arr1[0] + sumArray(...arr1.slice(1)); // maqur js-ov ashxatum e reactum grum enq ayl kerp

//     }
// }
// sumArray([1,2])








// export default function App() {
// 	function show1() {
// 		alert(1);
// 	}

// 	function show2() {
// 		alert(2);
// 	}

// 	return <div>
// 		<button onClick={show1}>act1</button>
// 		<button onClick={show2}>act2</button>
// 	</div>;
// }
// export default function App() {
// 	return <div>
// 		<button onClick={()=>alert(1)}>act1</button>
// 		<button onClick={()=>alert(2)}>act2</button>
// 		<button onClick={()=>alert(3)}>act3</button>
// 	</div>;
// }

// export default function App() {
//     let arr = [];
//     for (let i = -8; i <= 9; i++) {
//         i === 0 ? 1 : arr.push(<p key={i}>{i}</p>)
//     }
//     return arr
// }

// export default function App() {
//     const arr = ['a', 'b', 'c', 'd', 'e'];
//     // let res = arr.map(arr => <p key={{arr}}>{arr}</p>);
//     let res = arr.map((arg, index) => <p key={index}>{arg}</p>)
//     return <ul>
//         {res}
//     </ul>
// }

// const users = [
//     { name: 'user1', surn: 'surn1', age: 30 },
//     { name: 'user2', surn: 'surn2', age: 31 },
//     { name: 'user3', surn: 'surn3', age: 32 },
// ];
// export default function App() {
//     let res = users.map((arg, index) => {
//        return <p key={index}>
//             <span>{arg.name}</span>
//             <span>{arg.surn}</span>
//             <span>{arg.age}</span>
//         </p>
//     });
//     return <>
//         {res}
//     </>
// }

// const users = [
//     { id: 1, name: 'user1', surn: 'surn1', age: 30 },
//     { id: 2, name: 'user2', surn: 'surn2', age: 31 },
//     { id: 3, name: 'user3', surn: 'surn3', age: 32 },
// ];

// export default function App() {
//     let rows = users.map((arg, id) => {
//         return <tr key={id}>
//             <td>{arg.name}</td>
//             <td>{arg.surn}</td>
//             <td>{arg.age}</td>
//         </tr>
//     })
//     return <table border={1}>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Age</th>
//                 <th>Surn</th>
//             </tr>
//         </thead>
//         <tbody>
//             {rows}
//         </tbody>
//     </table>
// }
//lesson 4 18.09.23

// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { welcome: "Добро пожаловать на сайт!", count: 0 };
//     }

//     render() {

//         // this.state.welcome = 'Barev' Animast kod. reakt@ chi @ndunum
//         return <>
//             <h1>{this.state.welcome}</h1>
//             <h2>{this.state.count}</h2>
//             {/* <button onClick={this.setState({welcome:'Barev'})}>OK</button> */}
//         </>;
//     }
// }
// export default class ClickButton extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { class: "off", label: "Off" };
//         this.press = this.press.bind(this);
//     }
//     press() {
//         let className = (this.state.class === "off") ? "on" : "off";
//         let lableName = (this.state.label === 'Off') ? 'On' : 'Off';
//         this.setState({ class: className, label: lableName });

//     }
//     render() {
//         return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
//     }
// }

//metaniti staer@ porcel hertov inchqan karas

//PROPS

export default function App(props) {
    return <div>
        <p>Имя: {props.name}</p>
        <p>Возраст: {props.age+5}</p>
    </div>;
}

