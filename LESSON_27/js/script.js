//78.1 Дан массив:
// Вручную преобразуйте этот массив в строку в формате JSON.

// let arr = "[1, 2, 3, 'a', 'b', 'c']";

// 78.2 Дан объект:
// Вручную преобразуйте этот объект в строку в формате JSON.

// let obj = `{
// 	"a": "1",
// 	"b": "2",
// 	"c": "eee",
// 	"d": "true",
// }`;

// 78.3 Дан объект:
// Вручную преобразуйте этот объект в строку в формате JSON.

// let obj = `{
// 	'a': '['a', 'b', 'c',]',
// 	'b': '111',
// 	'c': 'eee',
// }`;
// console.log(obj);

// 79.1 Дана строка в формате JSON, содержащая массив с числами:
// Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива.

// let json = '[1,2,3,4,5]';
// let arr = JSON.parse(json);
// let sum = 0;
// arr.forEach(elem => sum += elem);
// console.log(arr);
// console.log(sum);


// let json = '[1,2,3,4,5]';
// let arr = JSON.parse(json);
// let sum = 0;
// for (const elem of arr) {
// 	sum += elem;
// };
// console.log(arr);
// console.log(sum);


// 79.2 Дана строка в формате JSON, содержащая объект с данными:
// Найдите сумму чисел из представленных данных.

// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;

// let arr = JSON.parse(json);
// let sum = 0;
// for (const key in arr) {
// 	arr[key].forEach(elem => sum += elem);
// 	// for (const elem of arr[key]) {
// 	// 	sum += elem
// 	// }
// }
// console.log(sum);

// 79.3 Дана строка в формате JSON, содержащая имена юзеров:
// Выведите эти имена в виде списка ul.


// let json = '["user1","user2","user3","user4","user5"]';
// let arr = JSON.parse(json);
// let ul1 = document.createElement('ul');
// document.body.appendChild(ul1);
// for (const elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
// 	ul1.appendChild(li);
// 	// li.style.color = arr.indexOf(elem) === 0 ? 'red' : arr.indexOf(elem) === 1 ? 'blue' : arr.indexOf(elem) === 2 ? 'orange' : 'black';
// 	li.style.backgroundColor = arr.indexOf(elem) === 0 ? 'red' : arr.indexOf(elem) === 1 ? 'blue' : arr.indexOf(elem) === 2 ? 'orange' : 'gray';
// };
// console.log(ul1);
// ul1.style.listStyle = 'none';
// ul1.style.fontSize = '22px';
// ul1.style.textAlign = 'center'

// 79.4 Дана строка в формате JSON, содержащая массив с данными работников:
// Выведите этих работников на экран в виде HTML таблицы.

// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;
// let arr = JSON.parse(json);
// let tab = document.createElement('table');
// document.body.appendChild(tab);
// let thead = document.createElement('thead');
// let tr = document.createElement('tr');
// for (const key in arr[0]) {
// 	let th = document.createElement('th');
// 	th.textContent = key;
// 	tr.appendChild(th);
// 	th.style.border = '3px solid black';
// 	th.style.padding = '15px';
// 	th.style.backgroundColor = 'greenyellow';
// 	th.style.color = 'red';

// }
// thead.appendChild(tr);
// tab.appendChild(thead);
// let tbody = document.createElement('tbody');
// for (const obj of arr) {
// 	let tr = document.createElement('tr');
// 	for (const key in obj) {
// 		let td = document.createElement('td');
// 		td.textContent = obj[key];
// 		tr.appendChild(td);
// 		td.style.border = '3px solid black';
// 		td.style.padding = '15px';
// 		td.style.backgroundColor = 'yellow';
// 	}
// 	tbody.appendChild(tr);
// }
// tab.appendChild(tbody);
// tab.style.border = '3px solid black';
// tab.style.borderCollapse = 'collapse';
// tab.style.textAlign = 'center';
// tab.style.margin = '30vh auto';
// console.log(tbody);


// 80.1 Дан следующий массив:
// Преобразуйте этот массив в формат JSON.

// let json = ['user1', 'user2', 'user3', 'user4', 'user5'];
// let arr = JSON.stringify(json);
// console.log(json);
// console.log(arr);

// 80.2 Дан следующий HTML:
// Получите список городов в формате JSON.

// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li')
// let arr=[];
// li.forEach(li => {
//     arr.push(li.textContent);
// });
// let json = JSON.stringify(arr);
// console.log(json);

// 80.3 Дан следующий HTML:
// Получите представленные данные в формате JSON в виде объекта с 
// ключами surname, name, patronymic.

// let tab = document.querySelector('table');
// let tr = tab.querySelectorAll('tr');
// let arr1 = [];
// let th = Array.from(tr[0].querySelectorAll('th')).map(th => th.textContent);
// for (let i = 1; i < tr.length; i++) {
//     let row = tr[i];
//     let row1 = {};
//     Array.from(row.querySelectorAll('td')).forEach((td, index) => {
//         let key = th[index];
//         row1[key] = td.textContent;
//     });
//     arr1.push(row1);
// }
// let json = JSON.stringify(arr1);
// console.log(json);

// 81.1 Дан следующий JSON:
// Добавьте в конец строки еще одного юзера.

// let json = '["user1","user2","user3","user4","user5"]';
// let arr = JSON.parse(json);
// arr.push("user6");
// console.log(arr);
// json = JSON.stringify(arr);
// console.log(json);

// 81.2 Дан следующий JSON:
// Поменяйте имя второго юзера.

// let json = '["user1","user2","user3","user4","user5"]';
// let arr = JSON.parse(json);
// arr[1] = 'user_2'
// console.log(arr);
// json = JSON.stringify(arr);
// console.log(json);

// 81.3 Дан следующий JSON:
// Добавьте в эту строку еще одного работника.

// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;
// let arr = JSON.parse(json);
// arr.push({
//     "name": "user4",
//     "age": 30,
//     "salary": 5000
// });
// json = JSON.stringify(arr);
// console.log(json);

// 84.1 Напишите скрипт, который сохранит в локальном хранилище три числа под
//  тремя разными  ключами. Запустите этот скрипт, чтобы данные сохранились. 
// Затем напишите скрипт, который получит ваши три числа из локального 
// хранилища и найдет их сумму. Запустите второй скрипт и убедитесь в его 
// работоспособности.

// localStorage.setItem('num1', 5);
// localStorage.setItem('num2', 10);
// localStorage.setItem('num3', 15);
// let sum = 0;
// for (let i = 1; i <= 3; i++) {
//     let key = 'num'+i
//     console.log(key);
//     let value = localStorage.getItem(key);
//     if (value) {
//         sum += parseInt(value);
//     }
// }
// localStorage.setItem('sum', localStorage.getItem(sum))
// console.log(sum);


// 85.1 По заходу пользователя на сайт запишите в локальное хранилище 
// текущий момент времени. Затем по повторному заходу выведите, сколько 
// прошло времени с предыдущего захода пользователя на сайт.

// localStorage.getItem('time')
// if (localStorage.getItem('lastVisit')) {
//     let preVisit = new Date(localStorage.getItem('lastVisit'));
//     let nowTime = new Date();
//     let timeDeef = nowTime.getTime() - preVisit.getTime();
//     let minDeef = Math.floor(timeDeef / 1000 / 60);
//     console.log(`Անցել է ${minDeef} րոպե`);
// }
// let curVisit = new Date();
// localStorage.setItem('lastVisit', curVisit);


// 84.2 По заходу пользователя на сайт спросите у него дату рождения. 
// При следующем заходе пользователя на сайт, если у него в этот день 
// будет День Рождения - поздравьте его с этим праздником.


//////////////////////CODE FROM CHATGPT/////////////////////////

let userBirthday = localStorage.getItem("userBirthday");
if (!userBirthday || isNaN(Date.parse(userBirthday))) {
    userBirthday = prompt("Введите вашу дату рождения в формате ГГГГ-ММ-ДД");
    localStorage.setItem("userBirthday", userBirthday);
} else {
    userBirthday = new Date(userBirthday);
}
let currentDate = new Date();
if (
    currentDate.getDate() === userBirthday.getDate() &&
    currentDate.getMonth() === userBirthday.getMonth()
) {
    alert("С днем рождения!");
}




// Функция для проверки, является ли дата днем рождения пользователя
// function checkBirthday(currentDate, birthday) {
//     return (
//         currentDate.getDate() === birthday.getDate() &&
//         currentDate.getMonth() === birthday.getMonth()
//     );
// }

// // Получите текущую дату
// let currentDate = new Date();

// // Функция для сохранения даты рождения пользователя
// function saveUserBirthday(userId, birthday) {
//     // Здесь вы должны сохранить дату рождения пользователя в localStorage или любом другом месте
//     // Например, если вы используете localStorage:
//     localStorage.setItem("userBirthday_" + userId, birthday.toISOString());
// }

// // Предполагая, что у вас есть функция, которая отправляет поздравление пользователю
// function sendBirthdayGreeting(userId) {
//     // Здесь вы должны отправить поздравление пользователю, например, через алерт или вывод на страницу
//     // Например, с использованием алерта:
//     alert(`С днем рождения! ${userId}`);
// }

// // Установите идентификатор пользователя
// let userId = "Dav";

// // Получите дату рождения пользователя
// let userBirthday = new Date(prompt("Введите вашу дату рождения в формате ГГГГ-ММ-ДД"));

// // Сохраните дату рождения пользователя
// saveUserBirthday(userId, userBirthday);

// // Проверьте, является ли дата рождения сегодняшним днем
// if (checkBirthday(currentDate, userBirthday)) {
//     sendBirthdayGreeting(userId);
// }


// let bird = prompt('Երբ եք դուք') 
// localStorage.getItem('time')
// if (localStorage.getItem('lastVisit')) {
//     let preVisit = new Date(localStorage.getItem('lastVisit'));
//     let nowTime = new Date();
//     let timeDeef = nowTime.getTime() - preVisit.getTime();
//     let minDeef = Math.floor(timeDeef / 1000 / 60);
//     console.log(`Անցել է ${minDeef} րոպե`);
// }
// let curVisit = new Date();
// localStorage.setItem('lastVisit', curVisit);

// 84.3 Дан инпут. По потери фокуса в этом инпуте 
// сохраните его значение в локальное хранилище. 
// При следующем заходе пользователя на страницу 
// установите в инпуте сохраненный ранее текст.

let imp = document.createElement('input');
document.body.appendChild(imp);
imp.placeholder = "your name";
imp.addEventListener('mouseout', () => {
    let mem = localStorage.setItem('mem', imp.value);
});
imp.value = localStorage.getItem('mem')


// 86.1 Пользователь заходит на сайт, затем обновляет страницу, 
// затем еще раз обновляет и так далее. Сделайте счетчик обновления страницы. 
// Каждый раз при обновлении выводите значение счетчика на экран.

window.addEventListener('load', () => {
    let count = localStorage.getItem('count');
    if (!count) {
        count = 0;
    }
    count++;
    localStorage.setItem('count', count);
    console.log(count);
    // 87.1 Сделайте счетчик обновления страницы. Пусть счетчик обнуляется после того, как дойдет до 10.
    // if (count >= 11) {
    //     localStorage.removeItem('count')
    // }
});

// 88.1 Очистите хранилище. Проверьте, что все ранее установленные вами ключи пропали.

// localStorage.clear()

// 89.1 По нажатию на кнопку выведите количество записей в локальном хранилище.

// let br = document.createElement('br');
// document.body.appendChild(br);
// let br1 = document.createElement('br');
// document.body.appendChild(br1)
document.body.insertAdjacentHTML('beforeend', '<br><br><br>');
let btn = document.createElement('button');
btn.textContent = 'OK';
document.body.appendChild(btn);
let p = document.createElement('p');
document.body.appendChild(p);
btn.addEventListener('click', () => {
    p.textContent = localStorage.length;
    btn.removeEventListener('click')
})

// 90.1 Получите значение записей с различными номерами.
let key = localStorage.key(1);
console.log(key);
let res = localStorage.getItem(key);
console.log(res);
