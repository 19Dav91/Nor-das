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

'use strict'
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
let str = 'hello world';
let count = {};
for (const elem of str) {
    if (count[elem] == undefined) {
        count[elem] = 1
    } else {count[elem]++}
  
}
console.log(count);