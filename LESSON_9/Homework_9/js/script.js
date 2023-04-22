'wse strict'
// 170.3 Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:

let arr = [1, 2, 3, 4, 5];
function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	console.log(res);
}







// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
//     console.log(fibonacci(7));
//     let arr = [];

// function pow(x, y) {
//     if (y == 1) {
//         return x
//     } else {
//         x *= pow(x, y - 1)
//         return x
//     }
// }
// console.log(pow(2, 3));


// function sum(a) {
//     let res = 1;
//     for (let i = 1; i <= a; i++) {
//         res *= i
//     }
//     return res
// }
// console.log(sum(5));

// function fakt(n) {
//     if (n == 1 ||n == 0) {
//         return n
//     } else {
//         n *= fakt(n - 1)
//     }
//     return n
// }
// console.log(fakt(0));









// function sum(arr) {
//     let res = 0;
//     for (let elem of arr) {
//         res += elem;
//     }
//     return res;
// }
// console.log(sum([1, 2, 3, 4, 5]));

// return fibonacci(n - 1) + fibonacci(n - 2);
// function fibonacci(n) {
//     if (n == 0) {
//         return [0];
//     } else if (n == 1) {
//         return [0, 1]
//     } else {
//         let arr = fibonacci(n - 1)
//         arr.push(arr[arr.length - 1] + arr[arr.length - 2])
//         return arr
//     }
// }
// console.log(fibonacci(2));