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
//     return getSum(1523);
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