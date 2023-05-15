'use strict'
// 275.1 Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click',func);
// function func() {
//     elem.disabled = !elem.disabled;
//     console.log(elem.disabled);
// }

// 275.2 Дан инпут и две кнопки. 
// Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.

// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// btn1.addEventListener('click', func1);
// btn2.addEventListener('click', func2);
// function func1() {
//     elem.disabled = true;
//     console.log(elem.disabled);
// };
// function func2() {
//     elem.disabled = false;
//     console.log(elem.disabled);
// };

// 275.3  Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn1.addEventListener('click', func1);
// function func1() {
//     console.log(elem.disabled);
// }

// 276.1 Дан чекбокс и две кнопки. По нажатию на первую кнопку установите 
// чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.


// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// btn1.addEventListener('click', func1);
// btn2.addEventListener('click', func2);
// function func1() {
//     elem.checked = true;
//     console.log(elem.checked);
// };
// function func2() {
//     elem.checked = false;
//     console.log(elem.checked);
// };

// 276.2 Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, 
// выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.

// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let text = document.querySelector('#text');
// btn1.addEventListener('click', func1);
// function func1() {
//     if (elem.checked === true) {
//         text.innerHTML = 'привет'
//     } else { text.innerHTML = 'пока' }
// };

// 278.1Даны 3 радиокнопки, абзац и кнопка.
//  По клику на кнопку выведите в абзац value отмеченной радиокнопки.

// let allRadio = document.querySelectorAll('input[type="radio"]');
// let btn = document.querySelector('#btn');
// let text = document.querySelector('#text');
// btn.addEventListener('click', function() {
// 	for (let radio of allRadio) {
// 		if (radio.checked) {
// 			text.innerHTML = radio.value;
// 		}
// 	}
// });