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



// 191.1 Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

// function test() {
//     let num = 1;
//     return function () {
//         console.log(num);
//         num++
//     }
// }
// let func = test();
// func()
// func()
// func()
// func()

// 191.2 Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал
//  это число на 1 и выводил в консоль уменьшенное число.


// function test() {
//     let num = 10;
//     return function () {
//         console.log(num);
//         num--
//     }
// }
// let func = test();
// func()
// func()
// func()
// func()

// 191.3 Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый 
// последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.

// function test() {
//     let num = 10;
//     return function () {
//         if (num > 0) {
//             console.log(num);
//             num--
//         }else {
//             console.log('отсчет окончен');
//         }
//     }
// }
// let func = test();
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()

//194.1 Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.

// function each(arr, callback) {
//     let result = [];

//     for (let elem of arr) {
//         result.push(callback(elem));
//     }
//     return result;
// }
// let result = each([1, 2, 3, 4, 5], function (num) {
//     return num ** 2;
// });

// console.log(result);

//194.2 Дан массив со строками. С помощью созданной нами функции each переверните символы 
// каждой строки в обратном порядке.

function revStr(str) {
    let res =  str.split('').reverse().join('').toLowerCase();
    console.log(res); 
    res[0].toUpper
}
revStr('David')

// function each(arr, callback) {
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = callback(arr[i]);
//     }
// }
// let str = ['Dav', 'Kar'];
// each(str, function(str) {
//     return str.split('').reverse().join('').toLowerCase();
// });
// console.log(str);
