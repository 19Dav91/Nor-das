///1.Суммируйте все числа до заданного
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//   alert( sumTo(100) );
///////////////////////////
// function sumTo(n) {
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
//   }
//   alert( sumTo(100) );
/////Write a JavaScript program to
// compute the sum of an array of integers.

// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21
// var array_sum = function(my_array) {
//     if (my_array.length === 1) {
//       return my_array[0];
//     }
//     else {
//       return my_array.shift() + array_sum(my_array);
//     }
//   };

//    console.log(array_sum([1,2,3,4,5,6]));


///////////Переопределение функций 

// function display(){ 
//     console.log("Доброе утро"); 
//     display = function(){ 
//         console.log("Добрый день"); 
//     } 
// } 

//display(); // Доброе утро 
//display(); // Добрый день 
// display(); // Добрый день 


// ////////////////////// 
//  let displayMessage = display; 
//  display(); // Доброе утро 
//  display(); // Добрый день 

// displayMessage(); // Доброе утро 
//  displayMessage(); // Доброе утро 
// /////////////////Hoisting 
// console.log(foo);   // undefined 
// var foo = "Tom"; 
///////////////////////Hoisting 


// console.log(foo); 
// var foo = "Tom";//??? 
// // var c = a * b; 
// var a = 7; 
// var b = 3; 
// console.log(c); // ???? 

// ///////////////////// 
// display(); 

// function display(){ 
//     console.log("Hello Hoisting"); 
// } 
// ////////////////// 
// display(); 

// var display = function (){ 
//     console.log("Hello Hoisting"); 
// } 
/////////////////////////////////Передача параметров по значению 
// function change(x){ 

//     x = 2 * x;
//       return x;
//     // console.log("x in change:", x); 
// } 
// var n = 10; 
// console.log("n before change:", n); // n before change:  
// change(n);                          // x in change:  
// console.log("n after change:", n);  // n after change:  
// //////////////////////////////////////////// и по ссылке 
// function change(user){ 
//     user.name = "Tom"; 
// } 

// var bob ={  
//    name: "Bob" 
// }; 
// console.log("before change:", bob.name);    
// change(bob); 
// console.log("after change:", bob.name);     
// // ////////////////////////////array 
// // function change(array){ 
// //     array[0] = 8; 
// // } 
// // function changeFull(array){ 
// //     array = [9, 8, 7]; 
// // } 

// // var numbers = [1, 2, 3]; 

// // console.log("before change:", numbers);     // [1, 2, 3] 
// // change(numbers); 
// // console.log("after change:", numbers);      // [8, 2, 3] 
// // changeFull(numbers); 
// // console.log("after changeFull:", numbers);  // [8, 2, 3] 
// ////////////////////////////////arrow functions 
// function hello(){ 
//     console.log("Hello"); 
// } 
// hello();    
/////////////////////// 
// let hello = ()=> console.log("Hello"); 
// hello(); 
////////////// 
// let sum = (x, y)=> console.log("Sum =", x + y); 

// sum(1, 2);      // Sum = 3 
// sum(4, 3);      // Sum = 7 
// sum(103, 2);    // Sum = 105 
///////////////////////////////////////////////// 
// let sum = (x, y)=> x + y; 

// console.log(sum(1, 2));     
// console.log(sum(4, 3));      
// console.log(sum(102, 5));   
//////////////////////////////////////// 
// const hello = name => Hello, ${name}; 
// console.log(hello("Tom"));               
// console.log(hello("Bob"));               
// console.log(hello("Frodo Baggins"));     
////////////////////////////// 
// let user = (userName, userAge) => ({name: userName, age: userAge}); 
// let tom = user("Tom", 34); 
// let bob = user("Bob", 25); 

// console.log(tom.name, tom.age);     
// console.log(bob.name, bob.age);      

const square = n => {
    let result = n ** 2;
    console.log(result);
}

square(5);




/////tasks
// Առաջադրանք 1:Գրել հետեւյալ նկարագրությանը համապատասխանող ֆունկցիաները
// ★ gumar(x) - հաշվում եւ վերադարձնում է x զանգվածի տարրերի գումարը
// ★ Ֆունկցիան ստանում է զանգված և գտնում այդ զանգվածի մեծագույն և փոքրագույն
// տարրերի գումարը
// ★ Ֆունկցիան ստանում է զանգված տեղերով փոխում է մեծագույն և փոքրագույն
// տարրերը և վերադարձնում ստացված զանգվածը
// ★ Ֆունկցիան ստանում է տեքստ և հաշվում, թե քանի բառ կա այդ տեքստում
// ★ Ֆունկցիան ստանում է տեքստ և հաշվում, թե նրա բառերից քանիսն են սկսվում a
// տառով
// ★ Ֆունկցիան ստանում է զանգված, խառնում զանգվածի տարրերը (shuffle) և
// վերադարձնում ստացվածը
// ★ sortA(x) - եթե x զանգվածի տարրերը աճման կարգով են դասավորված,
// վերադարձնում է true, հակառակ դեպքում false
// ★ toUpperCaseV3(x) - x տողի յուրաքանչյուր բառի առաջին տառը դարձնում է
// մեծատառ
// ★ removeArray(x, n) - x զանգվածից հեռացնում է նրա n-րդ տարրը եւ վերադարձնում
// ստացվածը
// ○ Օրինակ՝ var y = [2,3,4]; y = removeArray(y, 1) -ի դեպքում կստանանք y
// = [2,4]
// ★ insertArray(x,k,n) - x զանգվածում ավելացնում է k տարրը n -րդ դիրքում
// ○ Օրինակ՝ var x= [4,1,2] զանգվածի դեպքում insertArray(x, 4,1) -ի դեպքում
// կստանանք հետեւյալ զանգվածը՝ [4,4,1,2]
// ★ isPrime(x) - ֆունկցիան վերադարձնում է true, եթե x թիվը պարզ է, եւ false`
// հակառակ դեպքում
// ○ Թիվը կոչվում է պարզ, եթե այն անմնացորդ բաժանվում է միայն իր եւ մեկի վրա
// ■ Օրինակ՝ 5,7,11 թվերը. 8 թիվը օրինակ պարզ չէ, քանի որ բաժանվում է
// նաեւ 2-ի եւ 4 -ի
// ★ Օգտագործելով isPrime ֆունկցիան գրել մեկ այլ ֆունկցիա countPrime(x) -ը որը
// վերադարձնում է x թվերի զանգվածում առկա պարզ թվերի քանակը
// ★ Գրել match(x) - ֆունկցիան, որը վերադարձնում է x զանգվածի կրկնվող տարրերը
// ★ Գրել IsPalindrom ֆունկցիան, որը ստանում է x տեքստը եւ ստուգում է արդյո՞ք այն
// պալինդրոմ է
// a. Այսինքն՝ աջից եւ ձախից կարդացվում է նույն կերպ
// ★ Գրել ConvertToBinary(x) ֆունկցիան, որը 10-ական համակարգի x թիվը ձևափոխում
// է 2-ական համակարգի
// ○ Օրինակ ConverToBinary(45) կստացվի 101101
// Առաջադրանք 2:JoinV2(x,y) - ֆունկցիան x զանգվածի տարրերը վերածում է տողի՝
// կապելով իրար ըստ y սիմվոլի
// ★ Օրինակ JoinV2([“armen”,”hayk”, “david”], “/”])
// ○ Կստանանք “armen/hayk/david” տեքստը
// Առաջադրանք 3:SplitV2(x,y) - ֆունկցիան x տողը տրոհում է զանգվածի՝ ըստ y սիմվոլի
// ★ Օրինակ՝ SplitV2(“gmail.@gmail.com”, “@”) կանչի դեպքում կստանանք հետեւյալ
// զանգվածը՝ [“gmail.”, “gmail.com”]
// Առաջադրանք 4:replaceV2(s,x,y) ֆունկցիան s տողի մեջ փոխում է x ենթատեքստը y -ով
// եւ վերադարձնում ստացվածը
// ★ Օրինակ՝ replaceV2(“i hate javascript”, “hate”, “love”) արտահայտության դեպքում
// կստանանք՝ I love javascript տեքստը
// Առաջադրանք 5:indexAll(x,k) - ֆունկցիան վերադարձնում է x տողի մեջ k տառի
// հանդիպման բոլոր ինդեքսները
// ★ Օրինակ՝ indexAll(“ararat”, “a”) -ի դեպքում կստանանք այսպիսի զանգված՝ [0,2,4],
// քանի որ a տառը “ararat” բառի մեջ հանդիպում է 0, 2, եւ 4 ինդեքսներում
// Առաջադրանք 6: getRandomNumber(a,b) ֆունկցիան վերադարձնում է պատահական թիվ
// a,b հատվածից
// ★ Օրինակ՝ getRandomNumber(0,10) -ի դեպքում կարող է ստացվել օրինակ 7
// ★ Եթե ֆունկցիան ստանում է նաեւ երրորդ պարամետր
// ○ Օրինակ getRandomNumber(0,10,5), ապա անհրաժեշտ է ստանալ զանգված,
// որն ունի 5 տարր եւ այդ տարրերը պատահական թվեր են 0-ից 10 հատվածից
// ★ Ֆունկցիան կարող է ստանալ նաեւ 4-րդ պարամետր {true,false}
// ○ getRandomNumber(a,b,n,T)
// ■ Եթե t == true
// ● Ապա ստացվում է n տարր պարունակող, a,b հատվածից
// պատահական թվեր պարունակող զանգված, որտեղ տարրերը չեն
// կրկնվում
// ○ Վերադարձնել false, եթե այդպիսի զանգված անհնար է
// ստանալ
// ■ Եթե t == false, կամ բացակայում է այդ պարամետրը, ապա տարրերը
// կարող են կրկնվել
// Առաջադրանք 7:FilterF(x,y) - ֆունկցիան ստանում է x զանգված և y արտահայտություն և
// վերադարձնում է x զանգվածից այն տարրերը, որոնք պարունակում են y արտահայտություն
// ★ Օրինակ`FilterF([karine,nune,arman,sevak,mari],”ar”) -ի դեպքում կստանանք
// այսպիսի զանգված՝ [karine,arman,mari], քանի որ “ar” արտահայտությունը
// հանդիպում է միայն այս բառերում
// Առաջադրանք 8: makeUnique(x) - որպես արգումենտ ստանում է x զանգված և
// վերադարձնում է նոր զանգված որում առկա են x զանգվածի կրկնվող տարրերը
// ★ Օրինակ՝ makeUnique([‘c’, ‘a’, ’b’, ’c’,’d’, ‘a’, ‘c’]), այս դեպքում կվերադարձնի`
// [‘a’,’c’] զանգվածը
// Առաջադրանք 9: remake(x,y,z) այս ֆունկցիան ստանում է մեկ զանգված և երկու ինդեքս
// այսպիսով այն փոխում է այդ երկու ինդեքսներում գտնվող տարրերը տեղերով
// ★ Օրինակ՝ remake([“c”, ‘a’, ’b’],0,2) կվերադարձնի [“b”, ‘a’, ’c’]
// Առաջադրանք 10: validRange(x,y,z) ստանում է զանգված և երկու թիվ, այն վերադարձնում
// է true, եթե զանգվածի թվերը գտնվում են միայն այս միջակայքում: Եթե զանգվածում առկա է
// այնպիսի թիվ, որը նշված միջակայքում չի, ֆունկցիան վերադարձնում է false
// ★ Օրինակ՝ validRange([1,2,3,4,5],3,5) այս դեպքում կվերադարձնի false, քանի որ
// առկա են 3-ից փոքր թվեր ( 3 -ից 5 նշանակում է , որ 3ից փոքր չլինի և 5 ից մեծ )
// Առաջադրանք 11:maskify(x) - ստանում է որպես պարամետր որևէ x տող, և եթե տողի
// երկարությունը մեծ է 4 ից, ապա վերադարձնում այն, բոլոր սիմվոլները փոխակերպված #
// -ով, բացի վերջին 4 սիմվոլները
// ★ օր․՝ maskify(“123456789”) պետք է վերադարձնի #####6789
// ○ սակայն եթե նշանների քանակը 4ից փոքր է ապա պետք է վերադարձնի նույն
// կերպ
// Դաս 8: Ռեկուրսիա, ռեկուրսիվ ֆունկցիաներ
// Առաջադրանք 1: Qanak(x,k) - հաշվում է x զանգվածում k տարրերի քանակը
// Առաջադրանք 2: Գրել ֆունկցիա, որը կստուգի փոխանցվող զանգվածի տարրերը աճման
// կարգով են դասավորված թե ոչ:Եթե աճման կարգով դասավորված չեն վերադարձնում է false
// Առաջադրանք 3: Գրել ֆունկցիա, որը որպես պարամետր ստանում է տող,և եթե տողում կան
// մեծատառով սկսվող բառեր, ապա առանձնացնում է բացատով
// ★ օրինակ՝ myFunction(“barevErevanJan”), պետք է վերադարձնի barev Erevan Jan
// տեքստը
// Առաջադրանք 4: indexF(x,k) - վերադարձնում է x զանգվածում k թվի ինդեքսը, իսկ եթե
// տվյալ թիվը չկա զանգվածում վերադարձնում է -1
// ★ Օրինակ indexF( [ 4,3,2,8,9 ], 3) -ի դեպքում կստանանք 1, քանի որ x[1] = 3
// Առաջադրանք 5: MaxF(x) - ֆունկցիա վերադարձնում է զանգվածի մաքսիմումը
// Առաջադրանք 6: evenSum(x) ֆունկցիան հաշվում է x զանգվածի զույգ տարրերի գումարը
// Առաջադրանք 7: PowF(x,y) - ֆունկցիան հաշվում է x թվի y աստիճանը
// ★ Օրինակ` PowF(2,3) = 23
//  = 8, եթե y-ը նշված չի,ֆունկցիան վերադարձնում է x թվի
// քառակուսին
// Առաջադրանք 8: fibonacci(x) - ֆունկցիան վերադարձնում է զանգված որի տարրերը
// Ֆիբոնաչիի հաջորդականության առաջին x թվերն են ։
// ★ Օրինակ`fibonacci(5) կվերադարձնի [1, 1, 2, 3, 5];
// Առաջադրանք 9: generalize(arr) - ֆունկցիան ստանում է որպես արգումենտ որևէ
// զանգված՝ բաղկացած բացառապես թվերից և վերադարձնում է այս զանգվածի թվերի
// ընդհանուր ամենամեծ բաժանարարը։
// ★ Օրինակ`generalize([20, 155, 30]) կվերադարձնի 5, քանի որ ամենամեծ բնական
// թիվը, որի վրա 20-ը 155-ը և 30 անմնացորդ բաժանվում են հենց 5-ն է։
// Առաջադրանք 10: Գրել ֆունկցիա, որը որպես պարամետր ստանում է զանգված, և
// վերադարձնում է զանգվածի զույգ տարրերի միջին թվաբանականը
// ★ Օրինակ՝ avgF([2,4,5,3,7,8,4]), պետք է վերադարձնի 5, քանի որ (2+4+8+6)/4=5