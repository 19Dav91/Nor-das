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

// 279.1 Дан инпут и абзац. По изменению инпута выведите его текст в абзац.

// let inp = document.querySelector('#inp');
// let txt = document.querySelector('#txt');
// inp.addEventListener('change', function () {
//     txt.textContent = this.value;
// });

// 279.2 Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.

// let elem = document.querySelector('#elem');
// elem.addEventListener('click',func1);
// function func1(){
//     console.log(elem.checked);
// }

// 279.3 Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. 
// Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.

// let elem = document.querySelector('#elem');
// elem.addEventListener('change', func1);
// function func1() {
//     if (elem.value.length < 5) {
//         elem.style.border = '3px solid green'
//     } else {
//         elem.style.border = '3px solid red'

//     }
// }

// 280.1 Дан инпут. Пусть в него вводится текст. 
// Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.

// let elem = document.querySelector('#elem');
// let txt = document.querySelector('#txt');
// elem.addEventListener('input', func1);
// function func1() {
//     if (elem.value.length == 5) {
//         txt.textContent = 'Նիշերի քանակը հասել է 5-ի';
//         elem.style.border = '3px solid red'
//         elem.disabled = true;
//     }
// }

// 280.2 Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода 
// символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов 
// превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.

// let elem = document.querySelector('#elem');
// let txt = document.querySelector('#txt');
// elem.addEventListener('input', func1);
// function func1() {
//     let sum = 5 - elem.value.length;
//     if (sum >= 0) {
//         txt.textContent = `Մնացել է ${sum} սիմվոլ`;
//     } else {
//         txt.textContent = `Գերազանցել եք ${Math.abs(sum)} սիմվոլ`;
//     }
// }


// 281.1 Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода 
// переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
elem1.addEventListener('input', func1);
elem2.addEventListener('input', func2);
function func1() {
    if (elem1.value.length >=2) {
        elem2.focus();
        console.log(elem1.value);
    };
};
function func2() {
    if (elem2.value.length >=2) {
        elem2.blur();
        console.log(elem1.value);
    };
};
