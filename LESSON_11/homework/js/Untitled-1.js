// 191.1 Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

function test() {
    let num = 1;
    return function () {
        console.log(num);
        num++
    }
}
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

// function revStr(str) {
//     return str.split('').reverse().join('').toLowerCase();
// }

// console.log(revStr('David')); 

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