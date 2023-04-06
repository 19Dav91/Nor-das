
///////////////////loop
// for

// for..in

// for..of

// while

// do..while
///////////////////
// for(i = 0; i<=5; i++){
     
//     console.log(i);
// }
//  console.log("Конец работы");
///////////////////
// let i = 0;
// for(; i < 60;){
      
//     console.log(i);
//     i = i + 10;
// }


///for...of
// const website = "ARTHOUSE.COM";
// for(ch of website){
//     console.log(ch);
// }
////////////////
// const people = ["Tom", "Sam", "Bob"];
// for(const person of people) {
// 	for (const letter of person) {
// 		console.log(letter);
// 	}
    
// }

///////////////////for in
// const person = {name: "Tom", i: 37};
// for(let i in person){
//       console.log(person.i);
// }


///////////////while
// let i = 1;

// while (i <= 5) {
// 	console.log(i);
// 	i++;
// }
////////////array
// let arr = [1, 2, 3, 4, 5];
// let res = 0;

// for (let elem of arr) {
// 	res += elem;
// }

// console.log(res); 
// ////////////
// let str = '';

// for (let i = 0; i < 10; i++) {
// 	str += 'x';
// }

// console.log(str);  
// /////////////
// for (let i = 1; i <= 100; i++) {
// 	i=String(i);
// 	if (i[0] == 1 || i[0] == 2) {
// 		console.log(i);
// 	}
// }
	//////////////break
//     let arr = [1,3, 2, 3, 4,,3, 5];

// for (let elem of arr) {
// 	if (elem == 3) {
// 		console.log('есть');
// 		 break; 
// 	}
// } 
//////////////////continue
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

// for (let elem of arr) {
// 	let result;
	
// 	if (elem % 2 === 0) {
// 		result = elem * elem;
		
		
// 	} else if (elem % 3 === 0) {
// 		result = elem * elem * elem;
		
		
// 	}else{
// 		continue;
// 	}
// 	console.log(result);
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 
// 	8, 9]; 

// for (let elem of arr) {
// 	let result;
	
// 	if (elem % 2 == 0) {
// 		result = elem * elem;
// 	} else if (elem % 3 == 0) {
// 		result = elem * elem * elem;
// 	} else {
// 		continue; 
// 	}
	
// 	console.log(result); 
// }


////////////////////////////////
// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= i; j++) {
// 		document.write(i,j);
// 	}
// }
/////////////////
// let num = 3;
// for (let i = 1; i <= 9; i++) {
	
// 	console.log(num); 
// }
//console.log(num);
///////////////
for (let i = 0; i <= 9; i++) {
	let num = 3;
	
	for (let j = 0; j <= 9; j++) {
		console.log(num); 
	}
}
//////////////////
// let arr = [];

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }

// console.log(arr);
////////////////////
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; 
// 	i++) { 
// 	arr[i]++;
// }

// console.log(arr);
///////////////////
// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// let obj = {};
// for (let i = 0; i <= 4; i++) {
// 	obj[keys[i]] = values[i];
// }
 //console.log(obj);

// let obj = {};

// for (let i = 0; i <= 4; i++) {
// 	obj[keys[i]] = values[i];
// }

// console.log(obj);
// /////////////flags
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



///hajord dasin
////////////////////////
// let arr = ['a', 'b', 'c', 'a', 
// 	'a', 'b']; 
// let counter = 0;

// for (let elem of arr) {
// 	if (elem == 'a') {
// 		counter++;
// 	}
// }

// console.log(counter);
//////////////////////
// let arr = ['a', 'b', 'c', 'a', 
// 	'a', 'b']; 
// let count = {a: 0, b: 0, c: 0};

// for (let elem of arr) {
// 	count[elem]++;
// }

// console.log(count); //????????????
// let arr = ['a', 'b', 'c', 'a', 'a', 'b']; 
// let count = {};

// for (let elem of arr) {
// 	if (count[elem] === undefined) {
// 		count[elem] = 1;
// 	} else {
// 		count[elem]++;
// 	}
// }

// console.log(count); 