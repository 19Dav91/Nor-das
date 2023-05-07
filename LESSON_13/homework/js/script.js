// function setText(id, text) {
// 	let elem = document.getElementById(id);
// 	elem.textContent = text;
// }
// setText('elem1', 'David');
// setText('elem2', 'Davo');

// 241.1 Даны 3 абзаца:
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите 
// содержимое каждой из этих переменных в консоль.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// console.log(elem1,elem2,elem3);

// 241.2 Дан следующий HTML:
// Получите ссылку на первый абзац из дива с id, равным block.

// let block = document.querySelector('#block p');
// console.log(block);

// 241.3 Дан следующий HTML:
// Получите ссылку на первый абзац из дива с классом block.

// let block = document.querySelector('.block p');
// console.log(block);

// 241.4 Дан следующий HTML:
// Получите ссылку на первый абзац с классом www.

// let block = document.querySelector('.www');
// console.log(block);

// 242.1 Даны 3 кнопки:
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, 
// по клику на вторую - число 2, а по клику на третью - число 3.

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// button1.addEventListener('click', function(){
// 	alert(1);
// });
// button2.addEventListener('click', function(){
// 	alert(2);
// });
// button3.addEventListener('click', function(){
// 	alert(3);
// })

// 243.1 Дан следующий HTML код:
// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую -
//  функция func2.  Даны следующие функции:

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', func1);
// button2.addEventListener('click', func2);

// function func1() {
// 	console.log(1);
// }

// function func2() {
// 	console.log(2);
// }

// 244.1 Даны 5 абзацев:
// Дана следующая функция:
// Привяжите эту функцию ко всем 5-ти абзацам.

// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('click', func);
// let elem2 = document.querySelector('#elem2');
// elem2.addEventListener('click', func);
// let elem3 = document.querySelector('#elem3');
// elem3.addEventListener('mouseover', func);
// let elem4 = document.querySelector('#elem4');
// elem4.addEventListener('mouseover', func);
// let elem5 = document.querySelector('#elem5');
// elem5.addEventListener('mouseover', func);
// function func() {
// 	console.log('message');
// }

// 245.1 Дан абзац:
// Даны следующие функции:
// Привяжите все эти функции к нашему абзацу.

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func1)
// elem.addEventListener('click', func2)
// elem.addEventListener('click', func3)
// function func1() {
// 	console.log('1');
// }
// function func2() {
// 	console.log('2');
// }
// function func3() {
// 	console.log('3');
// }

// 246.1 Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.

// let btn = document.querySelector('#button');
// btn.addEventListener('dblclick', func)
// function func() {
// 	alert('Hello World');
// }

// 246.2 Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.

// let btn = document.querySelector('#button');
// btn.addEventListener('mouseover', func)
// function func() {
// 	alert('Hello World');
// }

// 246.3 Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение.

// let btn = document.querySelector('#button');
// btn.addEventListener('mouseout', func)
// function func() {
// 	alert('Hello World');
// }

// 246.4 Дана кнопка. По наведению на нее выведите одно сообщение, а по уходу с нее - другое.

// let btn = document.querySelector('#button');
// btn.addEventListener('mouseover', func)
// btn.addEventListener('mouseout', func1);
// function func() {
// 	console.log('Hello World');
// }
// function func1() {
// 	console.log('Goodbye World');
// }

// 247.1 Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	console.log(elem.textContent);
// }

// 247.2 Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	elem.textContent = 'Karen'
// 	console.log(elem.textContent);
// }

// 247.3 Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. 
// По нажатию на кнопку выведите на экран сумму хранящихся чисел.
// 247.4 Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.

// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// // let sum = 0;
// let sum = document.querySelector('#sum');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	// sum = +elem.textContent + +elem1.textContent;
// 	// console.log(sum);
// 	sum.textContent = +elem.textContent + +elem1.textContent
// }

// 248.1 Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	console.log(elem.innerHTML);
// }

// 248.2 Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	elem.innerHTML = `<b>${elem.innerHTML}</b>`
// 	console.log(elem.innerHTML);
// }

// 249.1 Дан следующий инпут:
// Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	console.log(elem.type);
// }

// 249.2 Дан следующий инпут:
// Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.


// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	elem.type = 'submit'
// 	console.log(elem.type);
// }

// 249.3 Пусть у вас есть ссылка в виде тега a, кнопка и абзац. 
// По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.

// let ref = document.querySelector('#ref')
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// elem.innerHTML = ref
// }

// 249.4 Пусть у вас есть ссылка и кнопка. 
// По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.

// let ref = document.querySelector('#ref')
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// elem.innerHTML = (ref.innerHTML).concat(`(${ref})`)
// }

//249.5 Пусть у вас есть картинка. Разместите ее на странице с помощью тега img. Пусть даны также кнопка 
// и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.

// let img = document.querySelector('#img')
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// elem.innerHTML = img.src
// }

// 249.6 Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.

// let img = document.querySelector('#img')
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// img.width = 300;
// console.log(img.width);
// }

// 249.7 Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. 
// Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.

// let img = document.querySelector('#img')
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// // img.width += img.width;
// img.width = img.width * 2;

// console.log(img.width);
// }

// 249.8 Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. 
// По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по 
// нажатию на вторую - путь ко второй картинке.

// let img1 = document.querySelector('#img1');
// let elem = document.querySelector('#elem');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', func1);
// function func1() {
// img.src = "images/img1.jpg"
// }
// button2.addEventListener('click', func2);
// function func2() {
// 	img.src='images/img2.jpg'
// }

// 250.1 Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.


// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	elem.value = 'Karen'
// 	console.log(elem.type);
// }

// 250.2 Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

// let elem = document.querySelector('#elem');
// let txt = document.querySelector('#txt')
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	txt.innerHTML = elem.value
// }

// 250.3 Даны два инпута и кнопка. В первый инпут пользователем вводится число. 
// По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
//     elem2.value = elem1.value * 2
// }


// 250.4 Даны два инпута и кнопка. По нажатию на кнопку запишите в первый 
// инпут значение второго инпута, а во второй инпут - значение первого. 
// Ваш код должен работать универсально, для любых значений инпутов.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
//     const temp = elem1.value;
//     elem1.value = elem2.value;
//     elem2.value = temp;
// }


// 250.5 Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. 
// По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.


// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// let txt = document.querySelector('#txt')
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {

//     txt.innerHTML = +elem1.value + +elem2.value + +elem3.value + +elem4.value + +elem5.value

//     // let sum = 0;
// let count = 0;
//     // for (const elem of document.querySelectorAll('input')) {
//     //     sum += parseInt(elem.value)
// count++

//     // }
//     // txt.innerHTML = sum/count

// }


// 251.1 Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = 1;
// });
// elem.addEventListener('blur', function(){
// 	elem.value = 2;
// })

// 251.2 Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function() {
// 	elem.value *= elem.value;
// });


// 251.3 Дан инпут, в котором изначально есть какой-то текст. 
// По получению фокуса инпутом очистите содержимое этого инпута.

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = '';
// });

// 252.1 Дан див:
// Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.


// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
//     elem.innerHTML = elem.className;
// }

// 252.2 Дан див:
// Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.



// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
//     elem.className = 'content';
//     elem.innerHTML = elem.className;
// }


// 252.3 Дан див с несколькими CSS классами, записанными через пробел:
// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.


// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
//     let arr = [];
//     for (const elem of document.querySelectorAll('#elem')) {
//         arr.push(elem.className)
//     }
//     console.log(arr);
// }

// 253.1 Дан следующий код:
// // Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.

// // let image = document.querySelector('#image');
// // console.log(image.src);

// console.log(document.querySelector('#image').src);

// 254.1 Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 
// 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.


// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function () {
//     this.value = '1';
// });
// elem.addEventListener('blur', function(){
// 	this.value = 2;
// })

// 254.2 Дана кнопка, значением которой служит число 1. 
// Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.


// ???????????????????????????
let button = document.querySelector('#button');
button.addEventListener('click', func);
let sum = 1;
function func() {
    sum++
    this.innerHTML = sum
    // this.value += Number(1);
}
