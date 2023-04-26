/////map
// let arr = [1, 2, 3, 4, 5];

// let result = arr.map(function(elem) {
// 	return elem * elem;
// });

// console.log(result); 
// 	[1, 4, 9, 16, 25]
//////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];

// let result = arr.map(function(elem, index) {
// 	return elem + index;
// });

// console.log(result);
// 	['a0', 'b1', 'c2', 'd3', 'e4'] 
///////////////////////////////

// let arr = [[1, 2, 3], [4, 5, 6], 
// 	[7, 8, 9]]; 

// let result = arr.map(function(elem) {
// 	return elem.map(function(num) {
// 		return num * num;
// 	});
// });

// console.log(result);
///////////////forEach
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// arr.forEach(function(elem) {
// 	sum += elem;
// });

// console.log(sum);
/////////////////////////////////filter
// let arr = [1, 2, 3, 4, 5];
// console.log( arr.filter(elem => elem % 
// 	2 == 0) ); 
//////////

// let arr = [1, 2, 3, 4, 5];
// console.log( arr.filter(elem => elem % 
// 	2 == 0).length );
/////////every
// let arr = [2, 4, 6, 8];

// let result = arr.every(elem => elem % 
// 	2 == 0); 
// console.log(result);
////////some

// let arr = [2, 4, 6, 8];

// let result = arr.some(elem => elem % 
// 	2 == 0); 
// console.log(result);
////////operator spread   ES6
// let arr = [1, 2, 3];
// func(arr[0], arr[1], arr[2]);
// ///////////
// let arr = [1, 2, 3];
// func(...arr);
// //////
// func(...[1, 2, 3]);
//func(...[1, 2], ...[3, 4, 5]);
//func(1, 2, ...[3, 4, 5]);
//func(1, ...[2, 3, 4], 5);
// let arr = [1, 2, 3, 4, 5];
// //let max = Math.max(arr);//error
// //let max = Math.max(arr[0], arr[1], arr[2], arr[3], arr[4]); 
// let max = Math.max(...arr);
// let arr1 = ['a', 'b', 'c'];
// let arr2 = [1, ...arr1, 2, 3];
//let arr = [...'abcde'];
//let arr = [...12345];//error
//console.log(arr);
/////////////rest operator
// func(1, 2, 3, 4, 5);

// function func(a, b, ...rest) {
// 	console.log(a);    
// 	console.log(b);    
// 	console.log(rest); 
		
// }
///Деструктуризация ES6
// let arr = [2025, 12, 31];
// // let year  = arr[0];
// // let month = arr[1];
// // let day   = arr[2];
// let [year, month, day] = arr;


// console.log(year); 
// console.log(month); 
// console.log(day); 


///////////////////////////
// function func() {
// 	return [2025, 12, 31];
// }

// let [year, month, day] = func();
// console.log(year); 
// console.log(month); 
// console.log(day); 

//////////
// let arr = [2025, 12, 31];
// let [, month, day] = arr;

// console.log(month); 
// console.log(day);  
///////////////
// let arr = [2025, 12, 31];
// let [,, day] = arr;

// console.log(day); 
// let arr = [2025, 12];
// let [year, month, day] = arr;

// console.log(year); 
// console.log(month);
// console.log(day);  
///////////////
// let arr = [2025, 12, 31, 23, 59, 59]; 
// let [year, month, day,...hour] = arr;

// console.log(year); 
// console.log(month);
// console.log(day); 
// console.log(hour); 
//////////////
// let arr = [2025, 12,5];
// let [year, month, day = 1] = arr;

// console.log(year); 
// console.log(month);
// console.log(day); 
//////////////////////////
//let x=new Date()
//console.log(x);
// let arr=[2023,01]
// function func() {
// 	return (new Date).getDate();
// }

//  let [year, month, day = func()] = arr;
//  console.log(day);
/////////////////destructuring obj
// let obj = {
// 	year:  2025,
// 	month: 12,
// 	day:   31,
// };

// let {year, month, day} = obj;

// console.log(year); 
// console.log(month); 
// console.log(day);  
// let obj = {
// 	year:  2025,
// 	month: 12,
// 	day:   31,
// };

//let {year: y, month: m, day: d} = obj;

// console.log(y); 
// console.log(m);
// console.log(d); 
////////////////////////////
// let obj = {
// 	month: 12,
// 	day:   31,
// };

// let {year = 2025, month, day} = obj;
// //let {year:y = 2025, month, day} = obj;

// console.log(year); 
// console.log(month); 
//console.log(day); 
//////////////////////
// func([2025, 12, 31]);
// function func([year, month, day]) {
// 	console.log(year);  
// 	console.log(month); 
// 	console.log(day);  
// }   
// function func({year, month, day}) {
// 	console.log(year);  // выведет 
// 		2025 
// 	console.log(month); // выведет 12
// 	console.log(day);   // выведет 31
// }

// func({year: 2025, month: 12, day: 31});