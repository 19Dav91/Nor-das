// 'use strict'

// function foo(x, y) {
//     let arr = x.split('');
//     let result = arr.filter(elem => elem !== y);
//     // let result = (arr.filter(elem => elem !== y)).join('');
//     return result
// }
// console.log(foo('gmail.@gmail@.com', '@'));

// function foo(x, y) {
//     let result = x.split(y).join('');
//     return result;
// }
// console.log(foo('@gm@ail.@gma@il@.com', '@')); 

// let arr = [1, 2, 3, 4, 5];
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...arr));
// console.log(`${max},${min}`);
// function setText(id, text) {
// 	let elem = document.getElementById(id);
// 	elem.textContent = text;
// };
// setText('elem1', 'text1');
// setText('elem2', 'text2');

// let date = new Date();

// console.log(date.getFullYear()); // год
// console.log(date.getMonth());    // месяц
// console.log(date.getDate());     // день

// console.log(date.getHours());    // часы
// console.log(date.getMinutes());  // минуты
// console.log(date.getSeconds());


// 222.1 Выведите на экран текущий день.

// console.log(new Date());

// 222.2 Выведите на экран текущий месяц.

// console.log(new Date().getMonth()+1);

// 222.3 Выведите на экран текущий год.

// console.log(new Date().getFullYear());



// 223.1 Выведите на экран текущую дату-время в 
// формате 12:59:59 31.12.2014. Используйте для 
// всех частей даты (кроме года) созданную нами 
// функцию для добавления нуля при необходимости.


// function addZero(num) {
//     if (num >= 0 && num <= 9) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// };
// let date = new Date();
// console.log(date.getFullYear() + '-' +
//     (addZero(date.getMonth() + 1)) + '-' +
//     addZero(date.getDate()));
// 224.1 Дана дата в формате год-месяц-день. 
// Преобразуйте эту дату в формат день.месяц.год.

// let str = '2025-12-31';
// let arr = ((str.split('-')).reverse()).join('/');
// console.log(arr);

// 225.1 Выведите на экран номер текущего дня недели.

// let date = new Date();
// let week = ['Կիրակի','Երկուշաբթի','Երեքշաբթի','Շորեքշաբթի','Հինգշաբթի','ՈՒրբաթ','Շաբաթ']
// console.log(week[date.getDay()]);

// 225.2 Определите, является ли текущий день недели выходным или рабочим днем.


// let date = new Date();
// let week = ['Կիրակի','Երկուշաբթի','Երեքշաբթի','Շորեքշաբթի','Հինգշաբթի','ՈՒրբաթ','Շաբաթ']
// console.log(week[date.getDay()]);

// function azat() {
//     if (week[date.getDay()] === 'Կիրակի' || week[date.getDay()] === 'Շաբաթ') {
//         console.log('выходной');
//     } else {
//         console.log('будный день');
//     }
// }
// azat()

//225.3 Определите сколько дней осталось до ближайшего воскресенья.


// let date = new Date();
// let week = ['Կիրակի', 'Երկուշաբթի', 'Երեքշաբթի', 'Շորեքշաբթի', 'Հինգշաբթի', 'ՈՒրբաթ', 'Շաբաթ']
// console.log(week[date.getDay()]);
//     console.log(`Հաջորդ կիրակիին մանացել է ${Math.abs(date.getDay() - 7) } օր`);

// 226.1 Пусть дан следующий массив:
// Выведите с помощью этого массива название текущего месяца.

// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// let date = new Date();
// console.log(months[date.getMonth()]);

// 227.1 Узнайте, какой день недели был в ваш день рождения.

// let date = new Date(2023, 8, 6);
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day]);

// 228.1Выведите на экран timestamp, соответствующий дате 1 января 2025 года.

// let date = new Date(2025, 0, 1, 23, 59, 59);
// console.log(date.getTime());
// let date1 = new Date();

// 229.1 Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.

// let now = new Date(2000, 0, 10);
// let date = new Date(1988, 2, 1);
// let diff = now.getTime() - date.getTime();
// console.log(Math.floor(diff / (1000 * 60 * 60 * 24)));

// 229.2 Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.

// let now = new Date();
// let date = new Date(1991, 8, 6);
// let diff = now.getTime() - date.getTime();
// console.log(Math.floor(diff / (1000 * 60 * 60 * 24 * 31)));


// 230.1  Выведите на экран количество миллисекунд, 
// прошедшее между 1 сентября 2000 года и 15 
// февраля 2010 года.


// let now = new Date(2010, 1, 15);
// let date = new Date(2000,8,1);
// let dif = now - date;
// console.log(dif);

// 130.2 Модифицируйте предыдущую задачу так, чтобы на 
// экран выводилась разница в днях.


// let now = new Date(2010, 1, 15);
// let date = new Date(2000,8,1);
// let dif = now - date;
// console.log(Math.floor(dif/(1000*60*60*24)));

// 130.3 Модифицируйте предыдущую задачу так, чтобы 
// на экран выводилась разница в месяцах.

// let now = new Date(2010, 1, 15);
// let date = new Date(2000,8,1);
// let dif = now - date;
// console.log(Math.floor(dif/(1000*60*60*24*30)));

// 130.4 Модифицируйте предыдущую задачу так, чтобы на 
// экран выводилась разница в годах.

// let now = new Date(2010, 1, 15);
// let date = new Date(2000, 8, 1);
// let dif = now - date;
// console.log(Math.floor(dif / (1000 * 60 * 60 * 24 * 30 * 12)));

// 232.1 Оформите этот способ решения проблемы в виде 
// функции, которая параметрами будет принимать месяц и 
// год и возвращать номер последнего дня этого месяца.

// function lastDay(month, year) {
//     let date = new Date(year, month, 0);
//     return date.getDate();
// }
// console.log(lastDay(4, 2023));

// 232.2 Определите, какой день недели будет в последнем 
// дне пятого месяца 2025 года.

// let date = new Date(2023, 4, 0);
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day]);

// 233.1 Сделайте функцию isLeap, которая параметром будет 
// принимать год и возвращать true, если этого год 
// високосный, и false - если нет.

// let date = new Date(2022, 2, 0);
// let flag = false;
// if (date.getDate() == 29) {
//     flag = true
// } 
// console.log(flag);

// 234.1 Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает 
// true, если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января:

// function checkDate(year, month,day ) {
//     let date = new Date(year, month, day);
//     return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day ;
// }
// console.log(checkDate(2025, 0, 31)); 
// console.log(checkDate(2025, 0, 32)); 

// 235.1 Определите, какой день недели будет 31 декабря текущего года.

// let now  = new Date(); 
// let date = new Date(now.getFullYear(), 3, 30);
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[date.getDay()]);

// 235.2 Определите, какой день недели будет 1 числа текущего месяца.

// let now  = new Date(); 
// let date = new Date(now.getFullYear(), now.getMonth(), 1);
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[date.getDay()]);

// 235.3 Определите, какой день недели будет 31 декабря следующего года.

// let now  = new Date(); 
// let date = new Date(now.getFullYear(), 11, 31);
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[date.getDay()]);

// 235.4 Определите, какой день недели будет через год в такую же дату, как сегодня.

// let now  = new Date(); 
// let date = new Date(now.getFullYear()+1, now.getMonth()+1, now.getDay());
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[date.getDay()]);

// 235.5 Определите, какой день недели был год назад в такую же дату, как сегодня.

// let now = new Date();
// let date = new Date(now.getFullYear() - 1, now.getMonth() + 1, now.getDay());
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[date.getDay()]);

// 235.8 Определите, сколько дней между 1 января и 10 сентября текущего года.

// let date = new Date(2023, 0, 1);
// let date1 = new Date(2023, 8, 10)
// let res = date1 - date;
// console.log(res/(1000*60*60*24));

// 235.9 Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.

// let now = new Date();
// let date = new Date(now.getFullYear(),now.getMonth(),20);
// let date1 = new Date(now.getFullYear(),now.getMonth()+1,10);
// let res = date1 - date ;
// console.log(res/(1000*60*60*24));


// 235.10 Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.

// let now = new Date();
// let date = new Date(now.getFullYear(),now.getMonth(),now.getDay()-1,12);
// let date1 = new Date(now.getFullYear(),now.getMonth(),now.getDay(),now.getHours(),now.getMinutes());
// let res = date1 - date ;
// console.log(res/(1000*60*60));

// 235.11 Определите, сколько часов прошло между началом дня и текущим моментом времени.

// let now = new Date();
// let hours = new Date(now.getFullYear(), now.getMonth()+1, now.getDay(), 0, 0, 0);
// let res = now - hours;
// console.log((res/(1000*60*60)).toFixed(2))

// 235.12 Определите, сколько часов осталось до конца дня.

// let now = new Date();
// let hours = new Date(now.getFullYear(), now.getMonth() , now.getDay(), 23, 59, 59);
// let res = hours - now;
// console.log(((res / (1000 * 60 * 60)).toFixed(2)))
// console.log(now);
// console.log(hours);
// ??????????????????????????? ropener@ chem stanum

// 235.13 Рассмотрите промежуток от 2000 года до текущего года. 
// Определите, сколько раз 1 января в этом промежутке попадало 
// на выходной день, то есть на субботу или на воскресенье.

// let count = 0;
// let tari = new Date().getFullYear();
// for (let year = 2000; year <= tari; year++) {
//     let date = new Date(year, 0, 1);
//     let week = date.getDay();
//     if (week === 0 || week === 6) {
//         count++;
//     }
// }
// console.log(count);

// 236.1 Определите, сколько секунд прошло с начала дня до настоящего момента времени.

// let now = new Date();
// let minutes = new Date(now.getFullYear(),now.getMonth(),now.getDay(),0,0,0);
// let res = ((now - minutes)/(1000)).toFixed(2)
// console.log(res);

// 236.2 Определите, сколько секунд осталось до конца дня.

// let now = new Date();
// let hours = new Date(now.getFullYear(), now.getMonth() + 1, now.getDay(), 23, 59, 59);
// let res = hours - now;
// console.log(((res / (1000)).toFixed(2)))

// 236.3 Определите, сколько дней осталось до нового года.

// let now = new Date();
// let newYear = new Date(now.getFullYear(),11,31,23,59,59);
// let res = Math.floor((newYear - now)/(1000*60*60*24));
// console.log(res);

// 236.4 Определите, сколько пятниц 13-е в текущем году.

// let count = 0;
// let tari = new Date().getFullYear();
// for (let month = 0; month < 12; month++) {
//     let date = new Date(tari, month, 13);
//     let week = date.getDay();
//     if (week === 5) {
//         count++;
//     }
// }
// console.log(count);

// 264.5 Определите, какой год был 3 месяца назад.

// let now = new Date();
// let month = new Date(now.getFullYear(),now.getMonth()+1-3,now.getDay());// aranc +1 i chi chisht stacvum 
// console.log(month.getFullYear());

// 264.6 Определите, какой день недели будет в последнем дне текущего месяца.

// let now = new Date();
// let lastDay = new Date(now.getFullYear(),now.getMonth()+1,0);
// let week = ['Կիրակի','Երկուշաբթի','Երեքշաբթի','Շորեքշաբթի','Հինգշաբթի','ՈՒրբաթ','Շաբաթ']
// console.log(week[lastDay.getDay()]);

// 264.7 Напишите код, который будет определять, високосный ли текущий год.

// let date = new Date();
// let flag = false;
// if (date.getDate() == 29) {
//     flag = true
// } 
// console.log(flag);

// 264.8 Напишите код, который будет находить предыдущий високосный год.

// const visGod = new Date().getFullYear();
// for (let year = visGod; year > 0; year--) {
//     if (year % 4 === 0) {
//         console.log(`Նախորդ Նահանջ տերին էր: ${year} թիվը`);
//         break;
//     }
// }


// ?????????????????????????????
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// let currentYear = new Date().getFullYear();
// let previousLeapYear = currentYear - 1;
// while (!isLeapYear(previousLeapYear)) {
//     previousLeapYear--;
// }
// console.log(previousLeapYear);


// 264.9 Напишите код, который будет находить следующий високосный год.

// const visGod = new Date().getFullYear();
// for (let year = visGod; year > 0; year++) {
//     if (year % 4 === 0) {
//         console.log(`Նախորդ Նահանջ տերին էր: ${year} թիվը`);
//         break;
//     }
// }

