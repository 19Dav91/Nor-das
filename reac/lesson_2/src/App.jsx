import logo from './logo.svg';
import './App.css';

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

const users = [
    { name: 'user1', surn: 'surn1', age: 30 },
    { name: 'user2', surn: 'surn2', age: 31 },
    { name: 'user3', surn: 'surn3', age: 32 },
];

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