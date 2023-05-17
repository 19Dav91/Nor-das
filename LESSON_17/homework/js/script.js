'use strict'

// 418.1 В следующем коде в двум событиям привязан один и тот же обработчик:
// Допишите код функции func так, чтобы при клике на элемент этот элемент 
// красился в зеленый цвет, а при двойном клике - в красный.

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(e) {
//     if (e.type === 'click') {
//         elem.style.backgroundColor = 'green';
//         elem.style.color = 'white'
//     } else if (e.type === 'dblclick') {
//         elem.style.backgroundColor = 'red';
//         elem.style.color = 'white'
//     }
// }

// 419.1   Пусть у вас есть список ul с тегами li:
// Привяжите к тегу ul обработчик клика. В этом обработчике 
// проверяйте с помощью свойства tagName, по какому тегу был клик. 
// Если клик был по тегу li - добавьте в конец текста этого тега 
// восклицательный знак. А если клик был по тегу ul - выведите 
// информацию об этом в консоль.

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func1);
// function func1(e) {
//     if (e.target.tagName === 'LI') {
//         e.target.textContent += '!'
//     } else {
//         let paragraph = document.createElement('p');
//         paragraph.innerHTML = 'Դուք սեխմել եք UL-ի վրա';
//         document.elem.prepend(paragraph);
//         setTimeout(() => {
//             paragraph.remove();
//           }, 800);
//           paragraph.style.textAlign = 'center'
//     }
// }
//  420.1 Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.

// let elem = document.querySelector('#elem');
// elem.addEventListener('keypress', function (e) {
//     console.log(e.key);
//     console.log(e.code);
// });

// 420.5 Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, 
// чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.

// let elem = document.querySelector('#elem');
// let txt = document.querySelector('#txt');
// elem.addEventListener('keypress', function (e) {
//     if(e.key === 'Enter') {
//         txt.textContent = this.value;
//         this.value = '';
//     }
// });