
        //Математические операции + ,-,/,*,%,++
    // префиксный инкремент
     //let x = 5;
     //let z = ++x;
    // console.log(x);
    // console.log(z); 
        
    // // постфиксный инкремент
    // let a = 5;
    // let b = a++;
    // console.log(a); 
    // console.log(b); 
    //////////////////
    // префиксный декремент
        // let x = 5;
        // let z = --x;
        // console.log(x); 
        // console.log(z);
            
        // // постфиксный декремент
        // let a = 5;
        // let b = a--;
        // console.log(a);
        // console.log(b); 
        ///////////////////////////////
        //  let x = 10;
        //  let y = 5 + (6 - 2) * --x;
        //  console.log(y); 
        /////////////////////////////Операторы сравнения(==,===,>,<,<=,>=)
    //     let income = 100;
    //     let strIncome = "100";
    //    // let result = income == strIncome;
    //     let result = income === strIncome;
    //     console.log(result);
    //&&
        // let income = 100;
        // let percent = 10;
        // let result = income > 50 && percent < 12;
        // console.log(result); 
        //||
        // let income = 100;
        // let isDeposit = true;
        // let result = income < 50 || isDeposit == true;
        // console.log(result);
        //!
        // let income = 100;
        // let result1 = !(income > 50);
        // console.log(result1);
        
        // let isDeposit = false;
        // let result2 = !isDeposit;
        // console.log(result2); 
        ///////+=,-=,=,*=....
        ///a &&= b возвращает b, если и a и b равны true. 
        //Если какой-то из операндов равен false, то возвращается a. 
        //Аналогично выполнению a = a && b:
        //&&=   a = a && b
        // let x = true;
        // let y = false;
        // y &&= x;
        // console.log(y); 
        
        // let c = false;
        // let d = true;
        // c &&= d;
        // console.log(c);
        
        // let a = '5';
        // let b = 5;
        // // a &&= b;
        //  console.log(a &&= b); 
        
        // let e = false;
        // let f = false;
        // e &&= f;
        // console.log(e); 
        ///||= same code a = a || b
        // let x = true;
        // let y = false;
        // x ||= y;
        //  console.log( x); 
        
        // let a = true;
        // let b = true;
        // a ||= b;
        // console.log(a); 
        
        // let c = false;
        // let d = true;
        // c ||= d;
        // console.log(c); 
        
        // let e = false;
        // let f = false;
        // e ||= f;
        // console.log(e); 
        ///////Условные операторы ?: и ?? ternary operator ES6
        // const a = 1;
        // const b = 2;
        // //const result = a < b ? a: b;
        // const result = a < b ? a + b : a - b;
        // console.log(result); 

        ////?? (nullish coalescing operator)   null undefined
         const result1 = "hello" ?? "world";
        // console.log(result1);   // hello
        
        // const result2 = 0 ?? 5;
        // console.log(result2);   // 0
        
        // const result3 = "" ?? "javascript";
        // console.log(result3);   // "" - пустая строка
        
        // const result4 = false ?? true;
        // console.log(result4);   // false
        
        // const result5 = null ?? "not null";
        // console.log(result5);   // not null
        
        // const result6 = "defined" ?? undefined;
        // console.log(result6);   // defined
        
        // let message = null;
        // const hello = "Hi JavaScript";
        // const result7 = message ?? hello;
        // console.log(result7);   // Hi JavaScript

        //////??=
        // let message = "Welcome to JavaScript";
        // let text = "Hello work!"
        // text ??= message;
        // console.log(text);
        //////null
        // let message = "Welcome to JavaScript";
        // let text = null;
        // text ??= message;
        // console.log(text);

        ////////////////////////Преобразования данных
        //Number(),String(),Boolean() parseInt(),parseFloat()
        //  let num1 = "123hello";//0.00000005
        //  let num2 = parseInt(num1);
        // console.log(num2); 

        ////NaN isNaN
        //console.log(parseInt("abc")); 
        // let type = typeof NaN;
        // console.log(type); 
        //////////////////////
        // let num1 = "javascript";
        // let num2 = "22";
        // let result = isNaN(num2);
        // console.log(result); 
            
        // result = isNaN(num2);
        // console.log(result); 


        ///////////////
        // let number1 = "46.07fchj";
        // let number2 = "4.98igug";
        // let result = parseFloat(number1) + parseFloat(number2);
        // console.log(result); 
        //////////Array

        // const people = ["Tom", "Alice", "Sam"];
        // console.log(people[0]);
        // people[0] = "Bob";
        // people[7]="Armen";
        // console.log(people.length); 
        ///////////////////
        // const objects = ["Tom", 12, true, 3.14, false];
        // console.log(objects);
        // const numbers1 = [0, 1, 2, 3, 4, 5 ]; // одномерный массив
        //  const numbers2 = [
        //     [0, 1, 2],
        //      [3, 4, 5] 
        //     ]; // двумерный массив

         ///////////////////////////
    // const people = [
    //     ["Tom", 25, false],
    //     ["Bill", 38, true],
    //     ["Alice", 21, false]
    //     ];
    //     people[0][1] = 56; 
    //     console.log(people[0][1]); 
            
    //     people[1] = ["Bob", 29, false]; 
    //     console.log(people[1][0]); 
    //////////////////////////////////Конструкция if..else
    // const income = 100;
    //     const age = 19;
    //     if(income > 50 && age > 18){
        
    //         console.log("доход больше 50");
    //         console.log("возраст больше 18");
    //     }
    ////////////////////////////
    // let myVar;
    // if(myVar){    ///myVar==true
        
    //     console.log(`Переменная myVar имеет значение: ${myVar}`);
    // }else{
    //     console.log(`Переменная myVar имеет значение: ${myVar}`);
    // }
    // const income = 500;
    //     if(income < 200){
        
    //         console.log("Доход ниже среднего");
    //     }
    //     else if(income>=200 && income<300){
            
    //         console.log("Чуть ниже среднего");
    //     }
    //     else if(income>=300 && income<400){
            
    //         console.log("Средний доход");
    //     }
    //     else{
    //         console.log("Доход выше среднего");
    //     }
    //////////////////true false
    //let x=NaN;
    // if(x){ 
    // console.log("hello");
    // }
    // console.log(Boolean(NaN));
    // console.log(Boolean(+0));
    // console.log(Boolean(0));
    // console.log(Boolean('0'));
    // console.log(+(""));
    // console.log(Boolean([]));
    // console.log(Boolean({}));
    ///////////////////////switch..case
    //const income = 300;
    // switch(income){
    //     case 100 : 
    //         console.log("Доход равен 100");
    //         break;
    //     case 200 : 
    //         console.log("Доход равен 200");
    //         break;
    //     case 300 : 
    //         console.log("Доход равен 300");
    //         break;
    // }
    /////////////////////////
    // const income = 100;
    // switch(income){
 
    // case 100 :
    // case 200 :
    //     console.log("Доход равен 100 или 200");
    //     break;
    // case 300 : 
    //     console.log("Доход равен 300");
    //     break;
    // default: 
    //     console.log("Доход неизвестной величины");
    //     break;
//}
///////////////////loop
// for

// for..in

// for..of

// while

// do..while




///////////////////
// for(let i = 0; i<5; i++){
     
//     console.log(i);
// }
// console.log("Конец работы");
///////////////////
// let i = 0;
// for(; i < 60;){
      
//     console.log(i);
//     i = i + 10;
// }
///////////////////for in
// const person = {name: "Tom", age: 37};
// for(prop in person){
      
//      console.log(prop);
// }
///for...of
// const website = "ARTHOUSE.COM";
// for(ch of website){
      
//      console.log(ch);
// }
////////////////
// const people = ["Tom", "Sam", "Bob"];
// for(const person of people) {
//     console.log(person);
// }