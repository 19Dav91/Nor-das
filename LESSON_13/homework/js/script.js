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