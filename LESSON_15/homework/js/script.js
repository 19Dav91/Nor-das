// 252.3 Дан див с несколькими CSS классами, записанными через пробел:
// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.


// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
//     let clas = elem.className.split(' ');
//     console.log(clas);
// }


// 257.1 Дана следующая функция:
// Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов 
// выполнялась приведенная выше функция. 

// let inp = document.querySelectorAll('input');
// // for (let i = 0; i < inp.length; i++) {
// //     inp[i].addEventListener('blur', func);
// //   };
// inp.forEach(input => {
//     input.addEventListener('blur', func);
// });
// function func() {
//     this.value = Number(this.value) + 1;
// }

// 257.2 Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.


// let txt = document.querySelectorAll('p');
// for (let i = 0; i <p txt.length; i++) {
//     txt[i].addEventListener('click', func);
// };
// function func() {
//     let num = parseInt(this.textContent);
//         this.textContent = Math.pow(num, 2)
// }

// 258.1 Дан следующий код:
// Сделайте функцию-обработчик анонимной.

// let divs = document.querySelectorAll('div');
// for (let div of divs) {
//     div.addEventListener('click', function(){
//         this.textContent++;
//     });
// }

// 262.1 Дан элемент:
// Получите значение его атрибута value.

// let elem = document.querySelector('#elem');
// let val = elem.getAttribute('value');
// console.log(val);


// 262.2 Дан элемент:
// Получите значение его атрибута class.


// let elem = document.querySelector('#elem');
// let val = elem.getAttribute('class');
// console.log(val);

// 262.3 Дан элемент:
// Установите его атрибут value в значение 'text'.


// let elem = document.querySelector('#elem');
// let val = elem.setAttribute('value','text');
// console.log(elem.value);


// 262.4 Дан элемент:
// Установите ему атрибут class в значение 'valid'.

// let elem = document.querySelector('#elem');
// let val = elem.setAttribute('className','valid');


// 262.5 Дан элемент:
// Удалите у него атрибут value.


// let elem = document.querySelector('#elem');
// let val = elem.removeAttribute('value');


// 262.6 Дан элемент:
// Проверьте наличие у него атрибута value.

// let elem = document.querySelector('#elem');
// let val = elem.hasAttribute('value');
// console.log(val);


// 263.1 Дан элемент:
// Узнайте количество его классов.

// let elem = document.querySelector('#elem');
// let clas = elem.classList.length
// console.log(clas);

// 263.2 Дан элемент:
// Переберите в цикле его классы.

// let elem = document.querySelector('#elem');
// let clas = elem.classList;
// for (const className of clas) {
//     console.log(className);
// }

// 263.3 Дан элемент:
// Добавьте ему класс xxx.

// let elem = document.querySelector('#elem');
// let clas = elem.classList;
// clas.add('xxx');
// console.log(clas);

// 263.4 Дан элемент:
// Удалите у него класс www и класс zzz.

// let elem = document.querySelector('#elem');
// let clas = elem.classList;
// clas.remove('www','zzz');
// console.log(clas);

// 263.5 Дан элемент:
// Проверьте наличие у него класса ggg.

// let elem = document.querySelector('#elem');
// let clas = elem.classList.contains('ggg');
// console.log(clas);


// 263.6 Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.

// let elem = document.querySelector('#elem');
// let clas = elem.classList.toggle('ggg');
// console.log(clas);


// 264.1 Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.
// 264.2 Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, 
// а также верхнюю границу и фон.
// 264.3 Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.

// let elem = document.querySelector('#elem');
// let ulLi = document.querySelector('ul li');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
//     elem.style.width = '250px';
//     elem.style.height = '250px';
//     elem.style.border = '5px solid red';
//     elem.style.backgroundColor = 'green';
//     elem.style.color = 'red';
//     elem.style.fontSize = '20px';
//     ulLi.style.cssFloat = 'left'

// }
// console.log(elem);


// Առաջադրանք 1: Ունենք 3 ինփութ դաշտեր, որտեղ մուտքագրվում են թվեր 
// ★ A1 կոճակի քլիկի ժամանակ ստուգել, եթե բոլոր այդ թվերը հավասար են 
// 4 -ի, ապա h1 -ի մեջ տպել “այո”, հակառակ դեպքում՝ “ոչ” 
// ★ A2 կոճակի քլիկի ժամանակ տպել “այո” եթե մուտքագրված թվերից գոնե 
// մեկը հավասար է 1 -ի և “ոչ” հակառակ դեպքում 
// ★ A3 - կոճակի քլիկի ժամանակ տպել “այո”, եթե այդ թվերի մեջ կան իրար 
// հավասար թվեր, և “ոչ”՝ հակառակ դեպքում 

// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let input3 = document.querySelector('#input3');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// let tex = document.querySelector('#tex');
// button1.addEventListener('click', () => {
//     if ((input1.value & input2.value & input3.value) == 4) {
//         tex.textContent = 'ԱՅՈ'
//     } else {
//         tex.textContent = 'ՈՉ'
//     }
// });
// button2.addEventListener('click', () => {
//     if (input1.value == 1 || input2.value == 1 || input3.value == 1) {
//         tex.textContent = 'ԱՅՈ'
//     } else {
//         tex.textContent = 'ՈՉ'
//     }
// });
// button3.addEventListener('click', () => {
//     if (input1.value === input2.value || input2.value === input3.value || input1.value === input3.value) {
//         tex.textContent = 'ԱՅՈ'
//     } else {
//         tex.textContent = 'ՈՉ'
//     }
// })

// Առաջադրանք 2: Ունենք 3 input դաշտ և button` 
// ❖ Input դաշտերում մուտքագրվում են թվեր, button-ի click-ի ժամանակ ստուգել 
// այդ թվերից ուղղանկյուն եռանկյուն կարող է կառուցվել թե ոչ 
// ★ Օրինակ՝ 3,4,5 - ի դեպքում ցույց կտրվի դրական պատասխան,քանի որ 
// թվերը դրական են և 3^2 +4^2=5^2, մնացյալ դեպքերում ցույց կտրվի 
// error։ 

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let input = document.querySelectorAll('input')
let button1 = document.querySelector('#button1');
let tex = document.querySelector('#tex');
button1.addEventListener('click', () => {
    if ((+input1.value > 0 && +input2.value > 0 && +input3.value > 0)&&
    Math.pow(input1.value,2) + Math.pow(input2.value,2) == Math.pow(input3.value,2)) {
        tex.textContent = 'ԱՅՈ';
        console.log(input1);
    } else {
        tex.textContent = 'ՈՉ'
    }
});


// Առաջադրանք 3: Input դաշտում մուտքագրվում է a թիվը ։ Button -ին սեղմելիս 
// ցուցադրել, այդ թիվը բնական է թե իրական ։ 
// ★ Օրինակ՝ 7 -ի դեպքում կստանանք դրական պատասխան (true), սակայն 5,2 -ը 
// արդեն պայմանին չի բավարարում ։ 