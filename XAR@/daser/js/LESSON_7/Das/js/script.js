'use strict'
////Functions
// hello()//hoisting
// function hello(){ //declaration
//     console.log("Hello world");
// }

// let message=hello;
// message();
// function hello(){
//     console.log("hello");
// }
// function by(){
//     console.log("By");
// }
// let message = hello;      
// message();      
// message = by;          
// message(); 
////anonim functions

// let message = function(){///expretion
//     console.log("Hello JavaScript");
// }
// console.log(message); 
//////////////////////////PARAMETERS
// function print(message){
//     console.log(message);
// }
 
//  print("Hello JavaScript");
//  print("Hello YEREVAN");
//  print("Function in JavaScript");
// function sum(a, b){
//     const result = a + b;
//     console.log(result);
// }
 
// sum(2, 6);          
// sum(4, 5);          
// sum(109, 11);
////////////////////////
// function sum(x, y){
//     if(x === undefined) x = 8;
//     if(y === undefined) y = 5;
    
//     const z = x + y;
//     console.log(z);
// }
// sum();         
// sum(6);        
// sum(6, 4)  
/////////////////////////
// function sum(x = 8, y = 5){
 
//     const z = x + y;
//     console.log(z);
// }
// sum();     
// sum(6);     
// sum(6, 4)           
//////////////////////
// function sum(x = 8, y = 10 + x){
 
//     const z = x + y;
//     console.log(z);
// }
// sum();    
// sum(6);    
// sum(6, 4)  
/////////////////////////////////ARGUMENTS
// function sum(){
//     let result = 0;
//     for(const n of arguments)
//         result += n;
//     console.log(result);
// }
// sum(6);          
// sum(6, 4)          
// sum(6, 4, 5)        
//////////////////REST PARAMETER ES6
// function display(season, ...temps){
//     console.log(season,...temps);
//     // for(let index of temps){
//     //     console.log(index);
//     // }
// }
// display("WINTER", -2, -3, 4, 2, 5);
// display("SUMMER", 20, 23, 31);
// function sum(x, y){
//     return x + y;

// }
 
// function subtract(x, y){
//     return x - y;
// }
 
// function operation(x, y, func){
  
//     const result = func(x, y);
//     console.log(result);
// }
 
// // console.log("Sum");
// operation(10, 6, sum);  
 
// // console.log("Subtract");
//  operation(10, 6, subtract); 
///////////////////////RETURN
// function sum (a, b) {
//     const result = a + b;
//     return result;
// }
///////////////////

// function sum (a, b) {
//     return a + b;
//   }
//   let num1 = sum(2, 4)+sum(10, 2);
//   console.log(num1);  
   
//   const num2 = sum(6, 34);
//   console.log(num2);  
//////////////////////////
// function menu(n){
//     if(n==1) return function(x, y){ return x + y;}
//     else if(n==2) return function(x, y){ return x - y;}
//     else if(n==3) return function(x, y){ return x * y;}
//     return function(){ return 0;}
// }
 
// const action = menu(3);         
// const result = action(2, 5);    
// console.log(result); 
////////////////////global variables
// var a = 5;
// let b = 8;
// const c = 9;
// function displaySum(){
//   var d = a + b + c;
//     console.log(d);
// }
//  displaySum();   
 /////////////////////     
 // var
// {
//     var a = 5;
// }
// console.log("a =", a);  
 

// if(true){
//     var b = 6;
// }
// console.log("b =", b);  
 
// // // цикл
// for(var i = 0; i < 5; i++){
//     var c = 7;
// }
//  console.log("c =", c);  


/////////////////////////////////
// if(false){
//     var b = 6;
// }
// console.log("b =", b); 
 
// // цикл
// for(var i = 1; i < 0; i++){
//     var c = 7;
// }
// console.log("c =", c); 
///////////////////////////////
// let z= 10;

// function displayZ(){
  
//     let z = 20;
    
     
//     {
//         let z = 30;
//         console.log("Block:", z);
//     }
     
//     console.log("Function:", z);
// }
 
// displayZ();
//  console.log("Global:", z); 
/////////////////////////
// "use strict"
// function bar(){
//    var foo = "25";
// }
// bar();
// console.log(foo);  


/////////////////////Замыкания (closure) и функции IIFE
// function outer(){
//     let x = 5;
//     function inner(){
//         x++;
//         console.log(x);
//     };
//     return inner;
// }
// let fn = outer();   

// fn();   
//  fn();  
// fn();  
/////////////////////////////
// function multiply(n){
//     var x = n;
//     return function(m){ return x * m;};
// }
// var fn1 = multiply(5);
// var result1 = fn1(6); 
// console.log(result1); 
 
// var fn2= multiply(4);
// var result2 = fn2(6); 
// console.log(result2); 
/////(IIFE)
// let x=(function(){
//     console.log("Привет мир");
// })();
 
// (function (n){
//     var result = 1;
//     for(var i=1; i<=n; i++)
//         result *=i;
//     console.log("Факториал числа " + n + " равен " + result);
// }(3));

// ///////Паттерн Модуль
let foo = (function(){
    let obj = {greeting: "hello"};
     
    return {
        display: function(){
            console.log(obj);
        }
    }
})();
foo.display();

/////////////////////////////////////


let calculator = (function(){
    let data = { number: 0};
     
    return {
        sum: function(n){
            data.number += n;
        },
        subtract: function(n){
            data.number -= n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
})();
calculator.sum(10);
calculator.sum(3);
calculator.display();   
calculator.subtract(4);
calculator.display();   