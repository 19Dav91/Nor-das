// let arr1 = [];
// function MaxMin(arr) {
//     arr1.push(...arr.flat(Infinity));
//     let maxIndex = arr1.indexOf(Math.max(...arr1));
//     let minIndex = arr1.indexOf(Math.min(...arr1));
//     [arr1[maxIndex], arr1[minIndex]] = [arr1[minIndex], arr1[maxIndex]];
//     return arr1;
// }
// MaxMin([1, [2, 3, 4], [3, 4, 6, [12, 2, 3, 4, 5], [5, [6, [2, 3, 4], 7]]]])
// console.log(arr1);

// function insertArray(x, k, n) {
//     x.splice(n, 0, k)
//     return x
// }


// function isPrime(num) {
//     for (let i = 2; i <= Math.sqrt(num);  i++) {
//         if (num % i === 0) return false;
//     }

//     if (num <= 1) {
//         return false
//     }
//     return true
// }
// console.log( isPrime(0));

//  function countPrime(x) {
//         let sum = 0
//         for (let i = 0; i < x.length; i++) {
//             if (isPrime(x[i])) {
//                 sum++
//             }
//         }
//         return sum
//     }


// function match(array) {
//     const duplicates = [];
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 duplicates.push(array[i]);
//             }
//         }
//     }
//     return duplicates
// }
// console.log(match([1,2,3,2,5,4,5]))

// function checkPalindrom(str) {
//     return str == str.split('').reverse().join('');
// }
// console.log(checkPalindrom('dad'));

// function intToBin(decimal) {
//     let binary = ''
//     while (decimal > 0) {
//         if (decimal & 1) {
//             binary = "1" + binary;
//         } else {
//             binary = "0" + binary;
//         }
//         decimal = decimal >> 1;
//     }
//     return binary
// }
// console.log(intToBin(45));

//  
// let x = new Date()
// console.log(x);
// let arr 
let x = 0;
