/////////////////
// let arr = [['a', 'b', [1, 2, 3], [4, 5]], ['d', 
// 	['e', 'f']]];
 ////////////////
//  let arr = [
// 	[
// 		'a', 'b', [1, 2, 3], [4, 5],
// 	],
// 	[
// 		'd', ['e', 'f'],
// 	],
// ];
///////////////////
let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 
	10]]; 

for (let subArr of arr) {
	for (let elem of subArr) {
		console.log(elem);
	}
}
//////////////////////////////
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; 
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(j + 1); 
			
// 	}
// }

// console.log(arr);

///[[1, 2, 3], [4, 5, 6], [7, 8, 9]]////???????????

// let arr = [];
// let k = 1; 

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k)
// 		k++; 
// 	}
// }

// console.log(arr);
//////////////////////
// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++);
// 	}
// }

// console.log(arr);
////////////Многомерные объекты в JavaScript
// let obj = {
// 	a: {
// 		key1: 'a1',
// 		key2: 'a2',
// 		key3: 'a3',
// 	},
// 	b: {
// 		key1: 'b1',
// 		key2: 'b2',
// 		key3: 'b3',
// 	},
// 	c: {
// 		key1: 'c1',
// 		key2: 'c2',
// 		key3: 'c3',
// 	},
// }
// ///??????????? c3,a3
// for (let key in obj) {
// 	let subObj = obj[key];
	
// 	for (let subKey in subObj) {
// 		console.log(subObj[subKey]);
// 	}
// }
///////////////////array in obj
// let days = {
// 	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 
// 		'вс'], 
// 	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 
// 		'sn'], 
// };
//????? sn
// let students = {
// 	'group1': ['student11', 'student12', 'student13'],
// 	'group2': ['student21', 'student22', 'student23'],
// 	'group3': ['student31', 'student32'],
// };
// for (let group in students) {
// 	for (let name of students[group]) {
// 		console.log(name);
// 	}
// }

/////////////obj in array
// let users = [
// 	{
// 		name: 'name1',
// 		surn: 'surn1',
// 	},
// 	{
// 		name: 'name2',
// 		surn: 'surn2',
// 	},
// 	{
// 		name: 'name3',
// 		surn: 'surn3',
// 	},
// ];
// ///????? surn3
// for (let user of users) {
// 	console.log(user.name + ' ' + user.surn);
// }

// let obj = {
// 	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 
// 		'вс'], 
// 	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 
// 		'sn'], 
// };

// let lang = 'ru';
// let day = 3;
// console.log(obj[lang][day]);


////////////push
// let users = [
// 	{
// 		name: 'name1',
// 		surn: 'surn1',
// 	},
// 	{
// 		name: 'name2',
// 		surn: 'surn2',
// 	},
// 	{
// 		name: 'name3',
// 		surn: 'surn3',
// 	},
// ];
// users.push({
// 	name: 'name4',
// 	surn: 'surn4',
// });
// let students = {
// 	'group1': ['student11', 'student12', 'student13'],
// 	'group2': ['student21', 'student22', 'student23'],
// 	'group3': ['student31', 'student32'],
// };
////??
// students.group1.push('student14');
// students.group4 = [];
// students.group4.push('student41');
////////////////
