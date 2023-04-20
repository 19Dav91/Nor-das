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


let arr = [1,[2,3,4],[3,4,[5,[6,7]]]];
let sum = 0;
for (const elem of arr) {
    if (typeof elem === 'number') {
        sum += elem
    } else if (typeof elem === 'object'){
        for (const key of elem) {
            if (typeof key === 'number') {
                sum += key
            }
        }
    }else if (typeof elem[key] === 'object'){
        for (const key1 of elem[key]) {
            if (typeof elem[key] === 'number') {
                sum += key1
            }
        }
}
console.log(sum);

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
// func([1,[2,3,4],[3,4,[5,[6,7]]]])
// console.log(sum);