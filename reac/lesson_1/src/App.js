import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Tab, Tabs, Pagination } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import ClickButton from './ClickButton';
// // alert('Ваше имя: ' + prompt('Ваше имя?'));
// document.write(123);
// document.write('<b>text</b>');
// let str = 'text';
// document.write(str);
// let num = parseFloat('5px');
// let num1 = parseFloat('6px');
// // alert(num+num1); // выведет 12
// // alert(60 * 60);
// // function App() {

// //     return (<>
// //     </>)
// // }
// function App() {
// 	return(<>
// 		<ul>
// 			<li>text1</li>
// 			<li>text2</li>
// 			<li>text3</li>
// 		</ul>;
//         </>)
// }

// function App() {
//     const arr = [1, 2, 3, 4, 5];
//     arr.push(1)
//     const res = arr.map(elem => elem)
//     let ul = document.createElement('ul');
//     document.body.appendChild(ul);

//     let li = document.createElement('li');
//     li.textContent = res;
//     ul.appendChild(li)

// return <>

//     {/* <ul>
//         <li>{arr[0]}</li>
//         <li>{arr[1]}</li>
//         <li>{arr[2]}</li>
//         <li>{arr[3]}</li>
//         <li>{arr[4]}</li>
//     </ul>
//     <div>
//         <p>{str1}</p>
//         <p>{str2}</p>
//         <p></p>
//     </div>
//     <ul>
//         <li>text1</li>
//         <li>text2</li>
//         <li>text3</li>
//     </ul>
//     <ul>
//         <li>text1</li>
//         <li>text2</li>
//         <li>text3</li>
//     </ul>
//     <input />
//     <input /><input /><input /> */}
// </>
// }
// function App() {
// 	const str = <div><p>text1</p><p>text2</p></div>;

// 	return <main>
// 		{str}
// 	</main>;
// }


// function App() {
// 	return <table>
// 		<tr>
// 			<td>1</td>
// 			<td>2</td>
// 		</tr>
// 		<tr>
// 			<td>3</td>
// 			<td>4</td>
// 		</tr>
// 	</table>;
// }

// function App() {
// 	return <table>
// 		<tbody>
// 			<tr>
// 				<td>1</td>
// 				<td>2</td>
// 			</tr>
// 			<tr>
// 				<td>3</td>
// 				<td>4</td>
// 			</tr>
// 		</tbody>
// 	</table>;
// }

// function App() {
//     function showMess() {
//         alert('hello');
//     }

//     return <div>
//         <button onClick={showMess}>show</button>
//     </div>;
// }

// LESSON_2

// function App() {
//     return <>
    
//         <ClickButton />
//     </>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {date: new Date()};
//   }
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     )
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }
//   tick() {
//     this.setState({
//       date: new Date()
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Here is the time</h1>
//         <h2>The time is: {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     )
//   }
// }
// root.render(<Clock/>)


















export default App;
