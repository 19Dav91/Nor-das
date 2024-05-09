'use strict'

// rekursia

//1. let i = 1;
// function func() {
//     if (i%2==0) {
//         console.log(i);
//     }
//     i++;
//     if (i <= 10 ) {
//         func()
//     }
// }
// func()

//2. function func(arr) {
//     console.log(arr.shift(), arr);
//     if (arr.length != 0) {
//         func(arr)
//     }
// }
// func([1,2,3])

// 3
// let arr = [1,2,3,4,5]
// let sum = 0;
// function func(arr) {
//     sum += arr.shift();
//     if (arr.length != 0) {
//         func(arr)
//     }
//     return sum
// }
// func(arr)
// console.log(sum);

// 4 tan@ lucel




// let arr = [1, [2, 3, 4], [3, 4, [5, [6, [2, 3, 4], 7]]]];
// let sum = 0;
// for (const elem of arr) {
//     if (typeof elem === 'number') {
//         sum += elem
//     } else if (typeof elem === 'object') {
//         for (const key of elem) {
//             if (typeof key === 'number') {
//                 sum += key
//             } else if (typeof key === 'object') {
//                 for (const key1 of key) {
//                     if (typeof key1 === 'number') {
//                         sum += key1
//                     }
//                     console.log(key1);
//                     if (typeof key1 === 'object') {
//                         for (const key2 of key1) {
//                             if (typeof key2 === 'number') {
//                                 sum += key2
//                                 console.log(key2)
//                             } else if (typeof key2 === 'object') {
//                                 for (const key3 of key2) {
//                                     console.log(key3)
//                                     sum += key3
//                                 }

//                             }
//                         }
//                     }

//                 }
//             }

//         }
//     }

// }

// console.log(sum)

// let sum = 0;
// function func(arr) {
//     for (const elem of arr) {
//         if (typeof elem === 'object') {
//             func(elem)
//         }else {
//             console.log(elem);
//             sum += elem
//         }
//     }
// }
// func([1, [2, 3, 4], [3, 4, [5, [6, [2, 3, 4], 7]]]])
// console.log(sum);

//170.1 Код должен найти сумму результатов работы двух функций:
// function func1() {
// 	// console.log(3);
//     return 3;
// }
// function func2() {
//     // console.log(5);
//     return 5;
// console.log( func1() + func2() );
// }

// 170.2 Код должен найти сумму элементов массива:

// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 		return res;
// 	}
// }
// console.log(sum([1, 2, 3, 4, 5]));