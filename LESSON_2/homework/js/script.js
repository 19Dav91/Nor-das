"use strict";
// 23.1 Дана переменная со значением '5px' и переменная со значением '6px'. Найдите сумму пикселей из 
//      значений этих переменных и выведите ее на экран.

// let a = '5px';
// let b = '6px';
// let sum = (parseInt(a) + parseInt(b));
// console.log(sum + `px`);


// 23.2 Дана переменная со значением '5.5px' и переменная со значением '6.25px'. Найдите сумму пикселей 
//      из значений этих переменных и выведите ее на экран.

// 23.3 Модифицируйте предыдущую задачу так, чтобы к выводящемуся результату добавлялись буквы 'px'. 
//      То есть, если наша сумма равна 11.75, то на экран пусть выведется '11.75px'.

// let a = '5.5px';
// let b = '6.25px';
// let sum = (parseFloat(a) + parseFloat(b));
// console.log(sum + `px`);

// 24.1 Даны две переменные с числами. Сложите значения этих переменных как строки и выведите результат на экран.

// let a = 5;
// let b = 15;
// let sum = (String(a) + String(b));
// console.log(sum);

// 24.2 Дана переменная с числом. Найдите количество цифр в этом числе.

// let a = 123456789;
// let result = String(a);
// console.log(result.length);

// 24.3 Даны две переменные с числами. Найдите количество цифр в одном и во втором числе, результаты 
//      сложите и выведите на экран.

// let a = 123456789;
// let b = 987654321;
// let result = String(a) + String(b);
// console.log(result.length);


// 27.1 Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', 
//      символ 'c', символ 'e'.

// let str = 'abcde';
// let num = 0;
// let num1 = 2;
// let num2 = 4;
// console.log(str[num]);
// console.log(str[num1]);
// console.log(str[num2]);

// 27.2 Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую 
//      переменную символы этой строки в обратном порядке, то есть 'edcba'.

// let str = 'abcde';
// let num = str.length -1;
// let num2 = 4;
// console.log(str[num]+str[num-1]+str[num-2]+str[num-3]+str[num-4]);

// 30.3 Переделайте этот код так, чтобы в нем использовались описанные сокращенные операции:

// let num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// console.log(num);

// let num1 = 47;
// num1 += 7;
// num1 -= 18;
// num1 *= 10;
// num1 /= 15;
// console.log(num1);


// 32.1 Проверьте, что будет результатом следующей операции:

// console.log(0.1 * 0.2);
// console.log(0.3 - 0.1);
//  34.1 Выведите в окно браузера какой-нибудь текст.

// document.write('Some text')
// document.write('<b>Some text</b>');

// 34.4 Выведите в окно браузера столбец чисел от 1 до 5

// document.write('1<br>2<br>3<br>4<br>5');

// 35.1 Код должен находить сумму чисел:

// let num1 = 1;
// let num2 = 2;
// console.log('сумма: ' + (num1 + num2)); 

// 35.3 Код должен находить сумму цифр числа:

// let num = '123';
// let sum = +num[0] + +num[1] + +num[2];
// let sum1 = Number(num[0]) +Number(num[1]) + Number(num[2])
// console.log(sum);
// console.log(sum1);

// 35.4 Код должен вывести первую цифру числа:

// let num = 123;
// let result = String(num)
// console.log(result[0]);

// 35.5 Код должен был вывести в консоль число 1, но выводит 0:

// let a = 0;
//// console.log(a++);
// console.log(++a);

// 35.6 Код должен вывести количество цифр в числе:

// let num = 123;
// let result = String(num);
// console.log(result.length);

// 35.7 Код должен найти количество секунд в сутках:

// let a = 24 / 60 / 60;
// let a = 24 * 60 * 60;
// console.log(a);

// 35.8 Код должен вывести количество цифр в числе:

// let num = 123;
// let str = String(num);
// console.log(str.length);

// 35.12 Код должен найти сумму чисел:

// let a = '123';
// let b = '456';
// let s = Number(a) + Number(b);
// console.log(s);

// 35.13 Код должен найти сумму чисел: ?????????????

// let aaa = 1;
// let bbb = 2;
// let ccc = 3;
// console.log(aaa + bbb + ccc);

// 38.1 Создайте массив с числами. Выведите его на экран с помощью функции alert, а также выведите его в 
//      консоль с помощью console.log.

// let arr = [1, 2, 3, 4, 5];
// alert(arr);
// console.log(arr);

// 38.2 Создайте массив со строками. Выведите его на экран с помощью функции alert, а также 
//      выведите его в консоль с помощью console.log.

// let str = ['David', ' Shirak', ' Sargis', ' Hovhannes'];
// console.log(str);
// alert(str);

// 39.2 Дан следующий массив:
//      Выведите на экран каждый из его элементов.

// let arr = [1, 2, 3];
// console.log(arr[0],arr[1],arr[2]);

// 39.2 Дан следующий массив:
//      Выведите на экран сумму элементов этого массива.

// let arr = [1, 2, 3];
// console.log(arr[0] + arr[1] + arr[2]);

// 39.4 Дан следующий массив:
//      Выведите с помощью этого массива следующую строку:

// let arr = ['a', 'b', 'c', 'd'];
// // 'a+b+c+d';
// console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} + ${arr[3]}`);

// 41.1 Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, 
//      вместо второго - 2, вместо третьего - 3.

// let arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] =3;
// console.log(arr);

// 44.1 Заполните массив числами 1, 2 и 3.

// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// console.log(arr);

// 44.2 Пусть дан такой массив:
// Добавьте ему в конец элементы 4 и 5.

// let arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);

// 45.1 Дан следующий массив: let arr = ['a', 'b', 'c'];
//      Дана также переменная: let key = 2;
//      Выведите на экран элемент, ключ которого хранится в переменной key.

// let arr = ['a', 'b', 'c'];
// let key = 2;
// console.log(arr[key]);


// 45.2 Дан следующий массив: let arr = [1, 2, 3, 4, 5];
// Даны также переменные: let key1 = 1; let key2 = 2;
// Найдите сумму элементов, ключи которых хранятся в наших переменных.

// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// console.log(arr[key1] + arr[key2]);

// 46.1 Дан массив: let arr = ['a', 'b', 'c', 'd', 'e'];
// Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.length);
// delete arr[1,3];
// console.log(arr.length);
// console.log(arr);

// 47.2 Код должен найти сумму элементов массива:
//      let arr = [1, 2, 3, 4, 5];
//      console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr = [1, 2, 3, 4, 5];

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]); 

// 48.1 Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. 
//      Выведите на экран все его элементы.

// let obj = {
//     1: 'Երկուշաբթի', 
//     2: 'Երեքշաբթի', 
//     3: 'Չորեքշաբթի',
//     4: 'Հինգշաբթի',
//     5: 'ՈՒրբաթ',
//     6: 'Շաբաթ',
//     7: 'Կիրակի'
// };
// console.log(obj);

// 49.1 Создайте объект с ключами от 1 до 12, в качестве значений содержащий названия месяцев.
//      Выведите этот объект в консоль.

// let obj = {
//     1: 'Հունվար',
//     2: 'Փետրվար',
//     3: 'Մարտ',
//     4: 'Ապռրիլ',
//     5: 'Մայիս',
//     6: 'Հունիս',
//     7: 'Հուլիս',
//     8: 'Օգոստոս',
//     9: 'Սեպտեմբեր',
//     10: 'Հոկտեմբեր',
//     11: 'Նոյեմբեր',
//     12: 'Դեկտեմբեր'
// };
// console.log(obj);

// 50.1 Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями.
//      Выведите на экран фамилию, имя и отчество через пробел.

// let user = {
//     name: 'Դավիթ',
//     surname: ' Մաթևոսյան',
//     patronymic: ' Կարենի',
//     age: ' 31 տարեկան'
// }
// console.log(user[`name`],user[`surname`],user[`patronymic`],user[`age`]);

// 51.1 Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими
//      текущему дню. Выведите созданную дату на экран в формате год-месяц-день.

// let date = {
//     year: 2023,
//     month: 4,
//     day: 2
// };
// console.log(date.year,date.month,date.day);

// 53.1 Дан объект: let obj = {x: 1, y: 2, z: 3};
// Возведите в квадрат каждый элемент этого объекта.

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj.x**2,obj.y**2,obj.z**2);

// 54.1 Создайте пустой объект, а затем заполните его значениями.

// let obj = {};
// obj.name = 'David';
// obj.surname = 'Matevosyan';
// console.log(obj);

// 56.1 Получите массив ключей следующего объекта:

// let obj = {x: 1, y: 2, z: 3};
// let keys = Object.keys(obj);
// console.log(keys);

// 57.1 Найдите количество элементов в следующем объекте:

// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);

// 58.1 Дан следующий объект: let obj = {x: 1, y: 2, z: 3};
//      Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с 
//      помощью этой переменной соответствующий элемент объекта.

// let obj = {x: 1, y: 2, z: 3};
// let key = 'z';
// console.log(obj[key]);

// 73.1 Проверьте, что переменная test больше 10.

// let test = 5;
// if(test > 10){
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// 76.1 Даны переменные test1 и test2. Проверьте, что значение какой из этих переменных 
//      больше и выведите соответствующее сообщение.

// let test1 = 5;
// let test2 = 5;
// if (test1 > test2) {
//     console.log('test1-@ mec e test2-ic');
// } else if (test1 < test2) {
//     console.log('test2-@ mec e test1-ic');
// } else {
//     console.log('test1-@ ev test2-@ havasar en')
// };

// 93.1 Перепишите следующий код в сокращенной форме:

// if (test > 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// // }

// let test = 1
// if (test > 0) 
// 	console.log('+++');
//  else 
// 	console.log('---');

// 93.2 Перепишите следующий код в сокращенной форме:

// if (test > 0) {
//     console.log('+++');
// }

// if (test > 0) console.log('+++');

// 94.1 В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду 
//      месяца попадает это число (в первую, вторую или третью).

// let age = +prompt('Գրեք 1-ից մինչև 31-ը որևէ թիվ');
// if(age >= 1 && age <= 10) {
//     document.write(`<b>Դուք գտնվում եք առաջին տասօրյակում</b>`);
// } else if(age >= 11 && age <= 20) {
//     document.write(`<b>Դուք գտնվում եք երկրորդ տասօրյակում</b>`);
// } else if(age >= 21 && age <= 31) {
//     document.write(`<b>Դուք գտնվում եք երրորդ տասօրյակում</b>`);
// } else {document.write(`<b>Ձեր գրած թիվը չի համապատասխանում պահանջներին</b>`)}

// 96,1 Перепишите следующий код через switch-case:
// let lang = 'ru';
// if (lang == 'ru') {
// 	console.log('рус');
// } else if (lang == 'en') {
// 	console.log('анг');
// } else if (lang == 'de') {
// 	console.log('нем');
// } else {
// 	console.log('язык не поддерживается');
// }
// let lang = 'ru';
// switch (lang) {
//     case 'ru':
//         console.log('рус');
//         break;
//     case 'en':
//         console.log('анг');
//         break;
//     case 'de':
//         console.log('нем');
//         break;
//     default:
//         console.log('язык не поддерживается');
//         break;
// }

// 98.1 Перепишите следующий код через тернарный оператор:

// let num = 1;
// let res;
// if (num >= 0) {
// 	res = '1';
// } else {
// 	res = '2';
// }
// console.log(res);

// let num = 1;
// let res = num >= 0 ? '1' : '2'
// console.log(res);

// 99.1 Пусть даны следующие переменные:let a = 2 * (3 - 1);
//      let b = 6 - 2;
//      Используя оператор ==, узнайте, равны ли значения этих переменных или нет.

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// console.log(a == b);

// 100.1 Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на
//       экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ 
//       пользователю запрещен.

// let str = confirm('есть ли вам уже 18 лет');
// if (str) {
//     alert('для взрослых')    
// } else {alert('доступ запрещен')}

// 109.1 В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору 
//       года попадает этот месяц (зима, лето, весна, осень).


///////////////////// nchu e 2 angam harcnum
// let month = +prompt('напишите какое-то число из интервала от 1 до 12')
// if (month >= 3 && month <= 5) {
//     document.write(`<b>сейчас весна</b>`)
// } else if (month >= 6 && month <= 8) {
//     document.write(`<b>сейчас лето</b>`)
// } else if (month >= 9 && month <= 11) {
//     document.write(`<b>сейчас осень</b>`)
// } else if ( month <= 2 || month == 12) {
//     document.write(`<b>сейчас зима</b>`)
// } else {
//     +prompt('напишите какое-то число из интервала от 1 до 12')
// }

// 109.2 Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки 
//       является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = 'abcde';
// if (str[0] == 'a') {
//     console.log('да');
// } else {
//     console.log('нет');
// }

// 109.3 Дано число, например, 12345. Проверьте, что первым символом этого числа является 
//       цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let arr = 123456;
// let str = String(arr);
// if (str[0] == 1 || str[0] == 2 || str[0] == 3) {
//     console.log('да');
// } else {
//     console.log('нет');
// }

// 109.4 Дано трехзначное число. Найдите сумму цифр этого числа.

// let arr = 956;
// let str = String(arr);
// let sum = +str[0] + +str[1] + +str[2];
// console.log(sum);

// 111.1 С помощью цикла for выведите в консоль числа от 1 до 100.

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// 112.1 Выведите в консоль все элементы следующего массива:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (const elem of arr) {
//     console.log(elem);
// }

// 113.1 Выведите в консоль все ключи следующего объекта:

// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj) {
//      console.log(key);
// }

// 113.2 Выведите в консоль все элементы следующего объекта:

// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj) {
//     console.log(obj[key]);
// }
// 114.1 Выведите в консоль числа от 1 до 100.

// let arr = 1;
// while (arr >=1 && arr <=100) {
//     console.log(arr);
//     arr++
// }

// 114.2 Выведите в консоль числа от 11 до 33.

// let arr = 11;
// while (arr >= 11 && arr <=33) {
//     console.log(arr);
//     arr++
// }

// 114.3 Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат
//       умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, 
//       необходимых для этого.
// ???????????????????????????????
let num = 333;
let sum = 0;
let count = 0;
while (num <= 1000) {
    
console.log(num);
    num = num * 3;
    count++
}
console.log(num);
console.log(count);

// let arr = ['a', 'b', 'c', 'd'];
// for (let i = 0; i < arr.length; i++) {
//     arr[0]+
    
// }

console.log(55);