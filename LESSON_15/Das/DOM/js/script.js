// let button = document.querySelector('#button');
// console.log(button);
// 
///////////////
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	console.log('!!!');
// });
/////////////
// let button = document.querySelector('#button');
// button.addEventListener('click', func);

// function func() {
// 	console.log('!!!');
// }
// button.addEventListener('mouseover', function() {
// 	console.log('1');
// });
// button.addEventListener('mouseout', function() {
// 	console.log('2');
// });
////////////////TEXT
// let elem = document.querySelector('#elem');
// console.log(elem.textContent);
// elem.textContent = '!!!';
// // innerHTML
// console.log(elem.innerHTML);
// elem.innerHTML = '<i>!!!</i>';
////////////ATTRIBUTE
// let elem = document.querySelector('#elem');
// console.log(elem.id);  
// console.log(elem.type); 
// //elem.type = 'submit';
// console.log(elem.value);
// elem.value = 'new text';
// // elem.addEventListener('focus', function() {
// // 	console.log(elem.value);
// // });
// //////class
// console.log(elem.className);
//////////////
// //document.querySelector('#elem').value = 'www';
//////this

// elem.addEventListener('blur', func);
// function func() {
// 	console.log(this); 
//     // console.log(this.value);
//     // this.value="!!!"
// }
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');


// button1.addEventListener('click', func);
// button2.addEventListener('click', func);
// button3.addEventListener('click', func);
// function func() {
// 	console.log(this.value);
// }
/////////////////////////querySelectorAll
let elems = document.querySelectorAll('.www');

// for (let elem of elems) {
// 	console.log(elem.textContent);
//     elem.textContent = elem.textContent + '!'; 
// }
////////////////////
// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }
// function func() {
// 	console.log('!');
//     //console.log(this.textContent);
// }
//////////////
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		console.log(this.textContent);
// 	});
// }
//////////////removeEventListener
// let button = document.querySelector('#button');
// button.addEventListener('click', func);

// function func() {
// 	console.log('!!!');
// 	this.removeEventListener('click', func);
// }
////getAttribute
/////setAttribute
////removeAttribute
////hasAttriubute
//classList.contains
//classList.add
//classList.remove
///classList.toggle
/////////////////Styles
// let elem = document.querySelector('#elem');
// elem.style.color = 'red';
//or
//elem.classList.add('colored');
/////////////////////////

//https://code.mu/ru/javascript/book/prime/dom/basis/parent-relationships-searching/
