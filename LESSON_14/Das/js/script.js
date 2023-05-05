// 'use strict'
// let count = 10;
// let timer = setInterval(function() {
//   count--;
//   if (count <= 0) {
//     clearInterval(timer);
//     console.log("Timer completed");
//   } else {
//     console.log("Timer: " + count);
//   }
// }, 1000);


// Дан следующий HTML:
//<div id="block">
//	<p>1</p>
//	<p>2</p>
//</div>
// Получите ссылку на первый абзац из дива с id, равным block.
let idDiv = document.querySelector('#block p');
console.log(idDiv);


// Дан следующий HTML:
// <div class="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с классом block.
let classDiv = document.querySelector('.block p');
console.log(classDiv);


// Дан следующий HTML:
// <p class="www">text</p>
// <p class="www">text</p>
// Получите ссылку на первый абзац с классом www.
let www_class = document.querySelector('.www');
console.log(www_class);


// Даны 3 кнопки:
// <input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, 
// по клику на вторую - число 2, а по клику на третью - число 3.
let firstButton = document.querySelector('#button1');
console.log(firstButton);
firstButton.addEventListener('click', function() {
	alert('1')
});
let secondButton = document.querySelector('#button2');
console.log(secondButton);
secondButton.addEventListener('click', function(){
	alert('2')
});
// let thirdButton = document.querySelector('#button3');
// console.log(thirdButton);
// thirdButton.addEventListener('click', function() {
// 	alert('3')
// })
// OR
document.querySelector('#button3').addEventListener('click', function(){
	alert('3')
})


// Дан следующий HTML код:
// <input id="click1" type="submit" value="button1">
// <input id="click2" type="submit" value="button2">
// Даны следующие функции:
// function func1() {
// 	console.log(1);
// }
// function func2() {
// 	console.log(2);
// }
// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, 
// а по клику на вторую - функция func2.
document.querySelector('#click1').addEventListener('click', func1);
function func1() {
	alert('Hellow Red');
}
document.querySelector('#click2').addEventListener('click', func2);
function func2() {
	alert('Hellow Green')
}


// Даны 5 абзацев:
// <p id="elem5">text</p>
// <p id="elem6">text</p>
// <p id="elem7">text</p>
// <p id="elem8">text</p>
// <p id="elem9">text</p>
// Дана следующая функция:
// function func() {
// 	console.log('message');
// }
// Привяжите эту функцию ко всем 5-ти абзацам.
let elem5 = document.querySelector('#elem5');
elem5.addEventListener('click', func3);
let elem6 = document.querySelector('#elem6');
elem6.addEventListener('click', func3);
let elem7 = document.querySelector('#elem7');
elem7.addEventListener('click', func3);
let elem8 = document.querySelector('#elem8');
elem8.addEventListener('click', func3);
let elem9 = document.querySelector('#elem9');
elem9.addEventListener('click', func3);
// document.querySelector('#elem5').addEventListener('click', func3);
// document.querySelector('#elem6').addEventListener('click', func3);
// document.querySelector('#elem7').addEventListener('click', func3);
// document.querySelector('#elem8').addEventListener('click', func3);
// document.querySelector('#elem9').addEventListener('click', func3);
function func3() {
	console.log('Message');
}


// <p id="elem13">text</p>
// Даны следующие функции:
// function func1() {
// 	console.log('1');
// }
// function func2() {
// 	console.log('2');
// }
// function func3() {
// 	console.log('3');
// }
// Привяжите все эти функции к нашему абзацу.
function func4() {
	console.log('1');
}

function func5() {
	console.log('2');
}

function func6() {
	console.log('3');
}
let text = document.querySelector('#elem13');
text.addEventListener('click', func4);
text.addEventListener('click', func5);
text.addEventListener('click', func6);


// Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.
let button4 = document.querySelector('#button4');
button4.addEventListener('dblclick', func7);


// Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.
let button5 = document.querySelector('#button5');
button5.addEventListener('mouseover', func8);


// Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение.
let button6 = document.querySelector('#button6');
button6.addEventListener('mouseout', func9);


// Дана кнопка. По наведению на нее выведите одно сообщение, 
// а по уходу с нее - другое.
document.querySelector('#button7').addEventListener('mouseover', func7);
document.querySelector('#button7').addEventListener('mouseout', func9);
function func7() {
	console.log('Hi');
}
function func8() {
	console.log('Hellow');
}
function func9() {
	console.log('Bye');
}
document.querySelector('#elem1').textContent = 10



// Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
let changeContent = document.querySelector('#changecountry');
changeContent.addEventListener('click', func10);
function func10() {
	console.log(document.querySelector('#country'));
	document.querySelector('#country').textContent = 'Republic of Armenia'
}
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// let newParagraph = document.createElement('p');
// newParagraph.textContent = "Hello, world!";
// document.body.appendChild(newParagraph);
// let myDiv = document.getElementById('myDiv');
// myDiv.appendChild(newParagraph);
// let div = document.getElementById('ddd');
// ddd.appendChild(newParagraph)
let button = document.querySelector('#button');
console.log(button);
let firstElem = document.querySelector('#elem1');
console.log(firstElem);
let secondElem = document.querySelector('#elem2');
console.log(secondElem);
let thirdElem = document.querySelector('#elem3');
console.log(thirdElem);
let forthElem = document.querySelector('.elem12');
console.log(forthElem);

// button.addEventListener('click', function() {
// 	console.log('!!!');
// })

button.addEventListener('click', func);
function func() {
	for (let i = 0; i < 5; i++) {
		alert('!!!')
		// func();
		console.log('!!!');
	}
}
button.addEventListener('click', func1);
button.addEventListener('click', func2)


