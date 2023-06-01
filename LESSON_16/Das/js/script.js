let elem = document.querySelector('#elem');
console.log(elem.value);
//
let elem1 = document.querySelector('#elem1');
console.log(elem1.disabled);
elem.disabled = false;

let button = document.querySelector('#button');
button.addEventListener('click', function() {
	if (elem1.disabled) {
		elem1.disabled = false;
	} else {
		elem1.disabled = true;
	}
});
////
button.addEventListener('click', function() {
	elem.disabled = !elem.disabled;
});
////
let chkbox = document.querySelector('#chkbox');
console.log(chkbox.checked);
/////radio
let radios = document.querySelectorAll('input[type="radio"]');
let button1 = document.querySelector('#button1');

button1.addEventListener('click', function() {
	for (let radio of radios) {
		if (radio.checked) {
			console.log(radio.value);
		}
	}
});
////change
// let inp = document.querySelector('#inp');
//  inp.addEventListener('change', function() {
// 	console.log(this.value);
// });
////input
// inp.addEventListener('input', function() {
// 	console.log(this.value);
// });
// button1.addEventListener('click', function() {
// 	inp.focus();
// });
//////select
let select = document.querySelector('#select');
// select.addEventListener('change', function(){
// 	console.log(this.value);
// });
let select1 = document.querySelector('#select1');
let select2 = document.querySelector('#select2');
select1.addEventListener('change', function(){
	console.log(this.value);
});
let button3 = document.querySelector('#button3');
button3.addEventListener('click', function() {
	select2.value = 'one';

});

// console.log(select2.selectedIndex)
// select2.selectedIndex = 2;
// console.log(select2.selectedIndex)
// console.log(document.querySelectorAll('#select2 option'));
// console.log(select.querySelectorAll('option'));

console.log(select);
for (let option of select) {
	console.log(option);
}
let option = select[0];
console.log(option.text);
console.log(option.value);
console.log(option.selected);
///
option.selected = true;
//https://metanit.com/web/javascript/10.1.php