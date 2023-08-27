
///Математические методы в JavaScript
///Math.pow
//Math.pow(число, степень)
// console.log(Math.pow(3, 4));
// console.log(Math.pow(2, -5));
/////////////////////////Math.sqrt
//Math.sqrt(положительное число)
// console.log(Math.sqrt(4));
//console.log(Math.sqrt(15));






//Math.max Math.min
// let min=Math.min(10,3,9);
// let max=Math.min(10,3,9);
// console.log(max,min);

///Math.round
//console.log(Math.round(6.4));

//  Math.ceil 
//console.log(Math.ceil(6.4));
//  Math.floor 
//console.log(Math.floor(6.4));
//  toFixed 
//console.log(6.44444.toFixed(3));
//  toPrecision
//  let num = 699.19994;
//  console.log(num.toPrecision(2));
// let num = 12;
// console.log(num.toPrecision(3));
//Math.abs.
//console.log(Math.abs(-32));

//toString()
// let x = 123;
// x.toString();
// (123).toString();
// (100 + 23).toString();

////toExponential()///https://allcalc.ru/node/1103
// let x = 9.656;
// x=x.toExponential(4);
// x.toExponential(4);
// x.toExponential(6);
//console.log(x);
/////valuOf()
// let x = 123;
// x=x.valueOf();
// (123).valueOf();
// (100 + 23).valueOf();
// console.log(x);
///////////////////////////////////











/////Строковые методы JavaScript
///length
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length);
//toString()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
//join()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.join(" ");
//pop()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let res=fruits.pop();
//  console.log(res);
// console.log(fruits);
// ////////////push()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.push("Kiwi"));
// console.log(fruits);
//shift()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
///unshift()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
//delete
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
//concat()
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);

////////
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren);
/////
// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter"); 
///flat()
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
//splice()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");//avelacnel
//fruits.splice(2, 2, "Lemon", "Kiwi");//poxarinel
//fruits.splice(0, 1);///heracnel
//slice
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const citrus = fruits.slice(3);
// const res = fruits.slice(1,3);
// console.log(fruits);
// //console.log(citrus);
// console.log(res);





// slice(start, end)

//let text = "Apple, Banana, Kiwi";
 //let part = text.slice(7, 13);
// console.log(part);
// let part1 = text.slice(7);
//let part3 = text.slice(-7);
// let part4 = text.slice(-12, -6);
// console.log(part3);

// substring(start, end)
 //let str = "Apple, Banana, Kiwi";
//  let part = str.substring(7, 13);
//  console.log(part);
// substr(start, length)
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6);
// let part2 = str.substr(7);
// let part3 = str.substr(-7);
 //console.log(part3);
///replace()
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);
//replaceAll()
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");


///toUpperCase
// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// toLowerCase
// let text1 = "Hello World!";       
// let text2 = text1.toLowerCase()

///concat()
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);

//trim()
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2.length);
//trimStart()
// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
//trimEnd()
// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();
////padStart
// let text = "5";//5
// let padded = text.padStart(4,"r");
// console.log(padded);
///////////
// let text = "5";//5
// let padded = text.padEnd(4,"0");
// console.log(padded);

//charAt(position)  //charCodeAt(position)
// let text = "HELLO WORLD";
// let char = text.charAt(7);
// let char1 = text.charCodeAt(0);
// console.log(char1);

///split
//  let text = "Hello";
//  const myArr = text.split("");
// // console.log(myArr);

// text = "";
// for (let i = 0; i < myArr.length; i++) {
//   text += myArr[i] + "<br>"
// }
// document.getElementById("demo").innerHTML = text;
////
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
///////
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");
// console.log(index);
//////////////
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("John");
//////
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate", 15);
/////////
// let text = "Please locate where 'locate' occurs!";
// text.lastIndexOf("locate", 15);
////////////
// let text = "Please locate where 'locate' occurs!";
// console.log(text.search("locate"));
//////////////?????
// let text = "Please locate where 'locate' occurs!";
// text.search(/locate/);
// let text = "The rain in SPAIN stays mainly ain in the plain";
// console.log(text.match("ain",'in'));
/////



///////includes()
// let text = "Hello world, welcome to the universe.";

// console.log(text.includes("A"));
/////
// let text = "Hello world, welcome to the universe.";
// let res=text.includes("w", 6);
//console.log(res);
//////startsWith()
// let text = "Hello world, welcome to the universe.";
// text.startsWith("Hello");
// text.startsWith("world", 5)
///endsWith()
// let text = "John Doe";
// text.endsWith("Doe");
// console.log(text.endsWith("Joh",3));






///////////////////////////////////////////////////////////////
////Методы для массивов в JavaScript
//sort()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// const points = [40, 100, 1, 5, 25, 10];

// points.sort(function(a, b){return a - b});
///////////////////
///https://www.section.io/engineering-education/sorting-algorithms-in-js/
/////////////////
// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

//   cars.sort(function(a, b){return a.year - b.year});
//   console.log(cars);

  // const cars = [
  //   {type:"Volvo", year:2016},
  //   {type:"Saab", year:2001},
  //   {type:"BMW", year:2010}
  // ];
  //  displayCars();
  //     cars.sort(function(a, b){
  //       let x = a.type.toLowerCase();
  //       let y = b.type.toLowerCase();
  //       console.log(a,b);
  //       if (x < y) {return -1;}
  //       if (x > y) {return 1;}
  //       return 0;
  //     });
     
  // function myFunction() {
  //   cars.sort(function(a, b){
  //     let x = a.type.toLowerCase();
  //   });
  //   displayCars();
  // }
  
  // function displayCars() {
  //   document.getElementById("demo").innerHTML =
  //   cars[0].type + " " + cars[0].year + "<br>" +
  //   cars[1].type + " " + cars[1].year + "<br>" +
  //   cars[2].type + " " + cars[2].year;
  // }//
  
///reverse()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
/////////////////
// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);//or ...arr ES6
//   }

/////Array Iteration functions callback
///forEach()
// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }
////map()
// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }
////flatMap
// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);
//filter
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
///reduce()
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction,8);

// function myFunction(total, value) {
//   return total + value;
// }
//  console.log(sum);
// [15, 16, 17, 18, 19].reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     10,
//   );
/////every()
// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(allOver18);
//some()
// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
///indexOf()
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") + 1;
//lastIndexOf()
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple") + 1;
//fined() first elem
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
///findIndex()
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
///Array.from()
//Array.from("ABCDEFG");
///Array.keys()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.values();
// let text="";
// for (let x of keys) {
//   text += x + "<br>";
  
// }
// document.write(text);


////includes()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.includes("Mango"); 
////spread operator ...
 //console.log(..."abc");
// console.log(...["a","b","c"])
 //console.log(...123);
// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

//  const year = [...q1, ...q2, ...q3, ...q4];
//////Exercises of Math
//https://www.w3resource.com/javascript-exercises/javascript-math-exercises.php


////Array
//https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
/////JavaScript Sorting Algorithm 

///https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/index.php
//JavaScript String - Exercises, Practice, Solution
//https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php

