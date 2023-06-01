<<<<<<< HEAD
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let txt = document.querySelector('#txt');
// let plus = document.querySelector('#plus');
// let minus = document.querySelector('#minus');
// let angam = document.querySelector('#angam');
// let bajanac = document.querySelector('#bajanac');
// // inp1.addEventListener('input',func1);
// // inp2.addEventListener('input',func1);
// plus.addEventListener('click', () => {
//     txt.textContent = +inp1.value + +inp2.value
// });
// minus.addEventListener('click', () => {
//     txt.textContent = +inp1.value - +inp2.value
// });
// angam.addEventListener('click', () => {
//     txt.textContent = +inp1.value * +inp2.value
// });
// bajanac.addEventListener('click', () => {
//     txt.textContent = +inp1.value / +inp2.value
// });
"use strict";
=======
'use strict'; // 1
// let hourHand = document.querySelector('.hour-hand');
// let minuteHand = document.querySelector('.minute-hand');
// let secondHand = document.querySelector('.second-hand');
// function setDate() {
//     let now = new Date();
//     let seconds = now.getSeconds();
//     let minutes = now.getMinutes();
//     let hours = now.getHours();
//     let secondsDegrees = ((seconds / 60) * 360);
//     let minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
//     let hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
//     hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
//     minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
// }
// setInterval(setDate, 1000);
// 2
// function displayTime() {
//     let currentTime = new Date();
//     let hours = currentTime.getHours();
//     let minutes = currentTime.getMinutes();
//     let seconds = currentTime.getSeconds();
//     minutes = (minutes < 10 ? "0" : "") + minutes;
//     seconds = (seconds < 10 ? "0" : "") + seconds;
//     let timeString = hours + ":" + minutes + ":" + seconds;
//     document.getElementById("clock").innerHTML = timeString;
// }
// setInterval(displayTime, 1000);
// 3
// let result = document.getElementById("result");
// function appendSymbol(symbol) {
//     result.value += symbol;
// }
// function clearResult() {
//     result.value = "";
// }
// function deleteNumber() {
//     result.value = result.value.slice(0, -1);
// }
// function appendSymbol(symbol) {
//     result.value += symbol;
// }
// function clearResult() {
//     result.value = "";
// }
// function deleteNumber() {
//     result.value = result.value.slice(0, -1);
// }
// function calculate() {
//     try {
//         result.value = eval(result.value);
//     } catch (error) {
//         alert("Invalid Calculation!");
//     }
// }
// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Backspace' || e.key === 'Delete') {
//         deleteNumber() += '';
//     } else if (e.key === "Escape") {
//         clearResult();
//     } else if (e.key === "Enter" || e.key === "NumpadEnter") {
//         calculate();
//     }  
//     else {
//         result.value += e.key;
//     }
// });
// let result = document.getElementById("result");
// function appendSymbol(symbol) {
//     result.value += symbol;
// }
// function clearResult() {
//     result.value = "";
// }
// function deleteNumber() {
//     result.value = result.value.slice(0, -1);
// }
// function appendSymbol(symbol) {
//     result.value += symbol;
// }
// function clearResult() {
//     result.value = "";
// }
// function deleteNumber() {
//     result.value = result.value.slice(0, -1);
// }
// const buttons = document.querySelectorAll('button');
// const input = document.querySelector('input');
// function handleClick(event) {
//     const value = event.target.value;
//     const inputArray = input.value.split(/(\+|\-|\*|\/)/);
//     value === '='
//         ? (() => {
//             let result = Number(inputArray[0]);
//             for (let i = 1; i < inputArray.length; i += 2) {
//                 const operator = inputArray[i];
//                 const number = Number(inputArray[i + 1]);
//                 operator === '+'
//                     ? (result += number)
//                     : operator === '-'
//                         ? (result -= number)
//                         : operator === '*'
//                             ? (result *= number)
//                             : operator === '/'
//                                 ? (result /= number)
//                                 : null;
//             }
//             input.value = result;
//         })()
//         : value === 'C'
//             ? (() => {
//                 input.value = '';
//             })()
//             : (() => {
//                 input.value += value;
//             })();
// }
// buttons.forEach(button => {
//     button.addEventListener('click', handleClick);
// });
// let havasar = document.querySelector('.havasar');
// havasar.addEventListener('click', () => {
//     result.value = eval(result.value);
// });
// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Backspace' || e.key === 'Delete') {
//         deleteNumber() += '';
//     } else if (e.key === "Escape") {
//         clearResult();
//     } else if (e.key === "Enter" || e.key === "NumpadEnter") {
//         result.value = eval(result.value);
//     }
//     else {
//         result.value += e.key;
//     }
// });
>>>>>>> 3024a98bbeee4559a63c3625b0dc9c578d0b4f81
