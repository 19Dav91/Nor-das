'use strict';

// 115.1 Выведите в консоль все элементы следующего массива:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 115.2 Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
//     if (i == 0 || i == arr.length-1) {
//         continue
//     }
//     console.log(arr[i]);

// }

// 115.3 Выведите в консоль элементы следующего массива в обратном порядке:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = arr.length -1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// 115.4 Исправьте ошибку, допущенную в следующем коде:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i <= arr.length - 1; i++) {
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// 116.1 Дан следующий массив:
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// 116.2 Дан следующий объект:
// Выведите в консоль те элементы объекта, значения которых - нечетные числа.

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// for (let elem in obj) {
//     if (obj[elem] % 2 !== 0) {
//         console.log(obj[elem]);
//     }
// }

// 117.1 Найдите сумму четных чисел от 2 до 100.

// let result = 0;
// for (let i = 2; i <= 100; i++) {
//     if (i % 2 === 0) {
//         result += i;
//     }
// }
// console.log(result);

// 117.2 Найдите сумму нечетных чисел от 1 до 99.

// let result = 0;
// for (let i = 2; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         result += i;
//     }
// }
// console.log(result);

// 118.1 Дан массив:
// Найдите сумму элементов этого массива.

// let arr = [2, 5, 9, 3, 1, 4];
// let res= 0;
// for (const elem of arr) {
//     res += elem
// }
// console.log(res);

// 118.2 Дан массив:
// Найдите сумму элементов элементов, являющихся четными числами.

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for (const elem of arr) {
//     if (elem % 2 === 0) {
//         res += elem
//     }
// }
// console.log(res);

// 118.3 Дан массив:
// Найдите сумму квадратов элементов этого массива.

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for (const elem of arr) {
//     res += elem * elem
// }
// console.log(res);

// 118.4 Дан массив:
// Найдите произведение элементов этого массива.

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 1;
// for (const elem of arr) {
//     res *= elem;
// }
// console.log(res);

// 119.1 С помощью цикла сформируйте строку, заполненную 5-тью дефисами.

// let str = '';
// for (let i = 1; i <= 5; i++) {
// 	str += '-';
// }
// console.log(str);

// 119.2 С помощью цикла сформируйте строку '123456789'.

// let str = '';
// for (let i = 1; i <= 9; i++) {
// 	str += i;
// }
// console.log(str);

// 119.3 С помощью цикла сформируйте строку '987654321'.

// let str = '';
// for (let i = 9; i >= 1; i--) {
// 	str += i;
// }
// console.log(str);

// 119.3 С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// let str = '';
// for (let i = -1; i <= 9; i++) {
//     if (i == 0 || i == 1) {
//         str += '';
//     } else {
//         str += i + "-";
//     }
// }
// console.log(str);

// 120.1 Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//     let res = parseInt(str[0])
//     console.log(res);
// }

// 120.2 Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//     let res = parseInt(str[0]) + parseInt(str[1])
//     console.log(res);
// }

// 120.3 Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1.

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//     if (parseInt(str[0]) == 1) {
//         console.log(str);
//     }
// }

// 120.4 Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.

// for (let i = 10; i <= 1000; i++) {
//     let str = String(i);
//     if ((parseInt(str[0]) + parseInt(str[1])) == 5) {
//         console.log(str);
//     }
// }

let str = '';
for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
        let result = String(i) + String(i) + ''        
    }
    console.log(result);
}