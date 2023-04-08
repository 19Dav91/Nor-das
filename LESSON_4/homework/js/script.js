'use strict'
/////////////flags
// // let arr = [1, 2, 3, 4, 5];

// // for (let elem of arr) {
// // 	if (elem == 3) {
// // 		console.log('+++'); 
// // 	} 
// // }

// //////////////////
// let arr = [1, 2, 3, 4, 5];
// let flag = false;
// for (let elem of arr) {
// 	if (elem == 3) {
// 		flag = true;
// 		break;
// 	}
// }
// if (flag === true) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


// 129.1 Дан объект:
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

// let obj = { x: 1, y: 2, z: 3 };
// for (const key in obj) {
//     obj[key] = obj[key] * 2
// }
// console.log(obj);

//129.2 Дан объект:
// Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.

// let obj = {x: 1, y: 2, z: 3};
// for (const key in obj) {
//     obj[key] = obj[key] + 1
// }
// console.log(obj);


// 130.1 Дан массив:
// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;
// for (const elem of arr) {
//     if (elem == 'c' ) {
//         flag = true
//     }
// }
// if (flag == true) {
//     console.log('+++');
// } else {console.log('---');}

// 130.2 Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится 
//       только на единицу и на само себя, и не делится на другие числа.

// let arr = +prompt("Գրեք ցանկացած թիվ");
// if (arr % 2 !== 0 || arr == 2) {
//     alert('Ձեր գրած թիվը պարզ թիվ է');
// }

// 131.1 Дан следующий массив:
// Подсчитайте количество цифр 3 в этом массиве.

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let res = 0;
// for (const elem of arr) {
//     if (elem == 3) {
//         res++
//     }
// }
// console.log(res);

// 131.2 Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось 
//       и количество троек, и количество двоек.

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let res = 0;
// let res1 = 0;
// for (const elem of arr) {
//     if (elem == 3) {
//         res++
//     } else if (elem == 2) {
//         res1++
//     }
// }
// console.log(res);
// console.log(res1);


// 132.1 Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.

// let str = 'hello world';
// let count = {};
// for (const elem of str) {
//     if (count[elem] == undefined) {
//         count[elem] = 1
//     } else {count[elem]++}

// }
// console.log(count);

// 133.1 Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий 
//       элемент массива.

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length - 1; i++) {
// 	console.log(arr[i + 1]);

// }

// 133.2 Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма 
//       текущего и следующего элемента массива.

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i + 1] + arr[i]);
// }

// 134.1 Дан массив:
// Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.


// let arr = [10, 20, 30, 40, 21, 32,25, 51];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let res = Number(String(arr[i])[0]);
//     if (res === 1 || res === 2) {
//         sum += arr[i]; 
//         console.log(arr[i]);
//     }
// }
// console.log(sum);

// let arr = [10, 20, 30, 40, 21, 32, 25, 51];
// let sum = 0;
// for (const elem of arr) {
//     if (String(elem)[0] === '1' || String(elem)[0] === '2') {
//         console.log(elem);
//         sum += elem;
//     }
// }
// console.log(sum);

// 135.1 Исправьте ошибки, допущенные в следующем коде:

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;

// for (let elem in obj) {
// 	if (elem[0] === '1' && elem[0] === '2') {
// 		sum += +elem;
// 	}
// }

// console.log(sum);

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;
// for (let key in obj) {
//     if (String(obj[key])[0] === '1' || String(obj[key])[0] === '2') {
//         sum += obj[key];
//     }
// }
// console.log(sum);

// 136.1 Код должен вывести числа от 0 до 10:

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// 136.2 Код должен вывести числа от 10 до 0:
// for (let i = 10; i > 0; i++) {
// 	console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }

// 136.3 Код должен вывести числа от 10 до 0:
// for (let i = 10; i == 0; i--) {
// 	console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }

// 136.4 Код должен вывести числа от 0 до 10:
// let i = 0;
// while (i >= 10) {
// 	console.log(i);
// 	i++;
// }

// let i = 0;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// 136.5 Код должен найти сумму целых чисел от 1 до 10:
// let res;
// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }
// console.log(res);

// let res = 0;
// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }
// console.log(res);

// 136.6 Код должен найти произведение целых чисел от 1 до 10:
// let res = 0;
// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }
// console.log(res);

// let res = 1;
// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }
// console.log(res);

// 136.7 Код должен найти сумму элементов массива:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += elem;
// }
// console.log(sum); // должно вывести 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += Number(elem);
// }
// console.log(sum);

// 136.8 Код должен найти сумму элементов массива:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = '';
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum); // должно вывести 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum); 

// 136.9 Код должен найти сумму элементов массива:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum = +elem;
// }
// console.log(sum); // должно вывести 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum)

// 136.10 Код должен найти сумму элементов массива, однако, всегда выводит NaN:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i <= arr.length; i++) {
// 	sum += +arr[i];
// }
// console.log(sum); // почему-то выводит NaN

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
// 	sum += +arr[i];
// }
// console.log(sum);

// 136.11 Код должен найти сумму элементов массива:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length - 1; i++) {
// 	sum += +arr[i];
// }
// console.log(sum); // почему-то выводит не 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
// 	sum += +arr[i];
// }
// console.log(sum);

// 136.12 Код должен найти сумму элементов массива:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	sum += +i;
// }
// console.log(sum); // почему-то выводит не 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i <= arr.length; i++) {
// 	sum += +i;
// }
// console.log(sum); 

// 136.13 Код должен возвести в квадрат каждый элемент массива:
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	elem = elem ** 2;
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	elem = elem ** 2;
//     console.log(elem);
// }

// 136.14 Код должен заполнить массив числами от 1 до 5:
// let arr;
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// 136.15 Код должен найти сумму элементов объекта:
// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let elem in obj) {
// 	sum += elem;
// }
// console.log(sum);

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let key in obj) {
// 	sum += obj[key];
// }
// console.log(sum);

// 136.16 Код должен найти сумму элементов объекта:
// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let key in obj) {
// 	sum = +obj.key;
// }
// console.log(sum);

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let key in obj) {
// 	sum += obj[key];
// }
// console.log(sum);

// 137.17 Код должен проверить, есть ли в массиве число 3 или нет:
// let arr = [1, 2, 3, 4, 5];
// let res = '';
// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = '+++';
// 	} else {
// 		res = '---';
// 	}
// }
// console.log(res);

// let arr = [1, 2, 4, 3, 5];
// let flag = false
// for (let elem of arr) {
// 	if (elem === 3) {
// 		flag = true;
// 	} 
// }
// if (flag == true) {
//     console.log('+++');
// } else {console.log('---');}