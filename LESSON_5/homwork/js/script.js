'use strict'
// 151.1 Возведите 2 в 10 степень.

// console.log(Math.pow(2, 10));

// 151.2 Найдите квадратный корень из 245.

// console.log(Math.sqrt(245));

// 151.3 Дан следующий массив:
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for (const elem of arr) {
//     sum += elem
// }
// console.log(sum);
// console.log(Math.pow(sum, 3));
// console.log(parseInt(Math.sqrt(Math.pow(sum, 3))));

// 151.4 Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// let sum = Math.sqrt(379);
// console.log(sum);
// console.log(sum.toFixed());
// console.log(sum.toFixed(1));
// console.log(sum.toFixed(2));

// 151.5 Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите 
// результаты округления в объект с ключами 'floor' и 'ceil'.

// let sum = Math.sqrt(587);
// let obj = {
//     'floor': Math.floor(sum),
//     'ceil': Math.ceil(sum)
// };
// console.log(sum);
// console.log(obj);

// 151.6 Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

// 151.7 Выведите на экран случайное целое число от 1 до 100.

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(1, 100));


// 151.8 С помощью цикла заполните массив 10-ю случайными целыми числами.

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(getRandomInt(11, 51))
// }
// console.log(arr);

// 152.1, 2 Дана строка 'js'. Сделайте из нее строку 'JS'.

// let str = 'js';
// console.log(str.toUpperCase());
// let str1 = 'JS';
// console.log(str1.toLowerCase());