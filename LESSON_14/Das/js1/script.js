//1 Input-ում մուտքագրվում է րոպեների քանակը, button-ի click-ի ժամանակ
// հաշվել թե քանի ժամ է կազմում մուտքագրված թվանշանը և h1-ի մեջ տպել այն
// Առաջադրանք 3: Ունենք input դաշտ և button`


///////////////
// let button = document.querySelector('#btn');
// let inp = document.querySelector('#name');
// let text = document.querySelector('#txt');
// button.addEventListener('click', function func() {
// text.textContent = `Hello ${inp.value}`
// });
/////////////

// 2 Input-ում մուտքագրվում է րոպեների քանակը, button-ի click-ի ժամանակ
// հաշվել թե քանի ժամ է կազմում մուտքագրված թվանշանը և h1-ի մեջ տպել այն

// let button = document.querySelector('#btn');
// let inp = document.querySelector('#name');
// let text = document.querySelector('#txt');
// button.addEventListener('click', function func() {
// text.textContent = inp.value /60
// });


// 3 Input-ում մուտքագրվում է թվանշան(դրամ), button-ի click-ի ժամանակ հաշվել
// թե քանի դոլլար է կազմում մուտքագրված թվանշանը և h1-ի մեջ տպել այն

// let button = document.querySelector('#btn');
// let inp = document.querySelector('#name');
// let text = document.querySelector('#txt');
// button.addEventListener('click', function func() {
// text.textContent = inp.value / 389
// });

// 4 Առաջին Input դաշտում մուտքագրվում թիվը, իսկ երկրորդում թվի աստիճանը,
// button-ի click-ի ժամանակ հաշվել մուտքագրված թվի համապատասխան
// աստիճանը

// let button = document.querySelector('#btn');
// let inp = document.querySelector('#name');
// let inp1 = document.querySelector('#name1');
// let text = document.querySelector('#txt');

// button.addEventListener('click', function func() {
// text.textContent = Number(inp.value) + Number(inp1.value)
// });

// 4 
// ❖ Input դաշտերում մուտքագրվում են թվեր: Առաջին դաշտում մուտքագրվում է
// թիվը, իսկ երկրորդում տոկոսը ։ Button -ի քլիկի ժամանակ ցուցադրել թվի
// տոկոսը
// ★ Օրինակ՝ 150 000 և 50 - ի դեպքում կցուցադրվի 150 000-ի 50 % - ը,
// այսինքն` 150000*50/100 = 7500։


// let button = document.querySelector('#btn');
// let inp = document.querySelector('#name');
// let inp1 = document.querySelector('#name1');
// let text = document.querySelector('#txt');
// button.addEventListener('click', function func() {
// text.textContent = inp.value * (inp1.value/100)
// });


// 6.Input դաշտում մուտքագրվում է վայրկյանների քանակը, button-ի click-ի
// ժամանակ մուտքագրված վայրկյանները ձևափոխել օր/ժամ/րոպե/վայրկյան
// տեսքի և տպել h1-ի մեջ.
// Օրինակ՝ 187801 վայրկյանի դեպքում արդյունքը կլինի՝ 2 օր, 4
// ժամ, 10 րոպե, 1 վայրկյան
// let seconds = inp.value;
// let days = Math.floor(seconds / 86400);
// seconds -= days * 86400;
// let hours = Math.floor(seconds / 3600);
// seconds -= hours * 3600;
// let minutes = Math.floor(seconds / 60);
// seconds -= minutes * 60;

// text.textContent = `${days}or, ${hours}jam, ${minutes}rope, ${seconds}varkyan`;

// let button = document.querySelector('#btn');
// let inp = document.querySelector('#name');
// let inp1 = document.querySelector('#name1');
// let text = document.querySelector('#txt');
//      utton.addEventListener('click', function func() {
//     let seconds = inp.value;
// let days = Math.ceil(seconds / 86400);
// seconds -= days * 86400;
// let hours = Math.floor(seconds / 3600);
//                   seconds -= hours * 3600;
// let minutes = Math.floor(seconds / 60);
// seconds -= minutes * 60;

// text.textContent = `${days}or, ${hours}jam, ${minutes}rope, ${seconds}varkyan`;

// let day = Math.floor(inp.value / 24 /60 /60);
// let jam = Math.floor((+inp.value - (day*24*60*60))/60/60 );
// let rope = ((+inp.value - (day*24*60*60))/60/60);
// let sec = rope/60;
//     text.textContent = `${day}or,  ${jam}jam,  ${rope}rope,  ${sec}varkyan` ;
// });

// function convertTime() {
//     let timeInput = document.getElementById("timeInput").value;
//     let date = new Date(timeInput);
  
//     let options = {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       hour: "numeric",
//       minute: "numeric",
//       second: "numeric",
//       timeZoneName: "short"
//     };
//     let formattedTime = date.toLocaleString("en-US", options);
  
//     let resultElement = document.getElementById("result");
//     resultElement.innerText = formattedTime;
//   }
  
























// let button = document.querySelector('#button');
// button.addEventListener('click', func);

// function func() {
// 	console.log('!!!');
// }
// button.addEventListener('mouseover', function() {
// 	console.log('1');
// });
// button.addEventListener('mouseout', function() {
// 	console.log('2');
// });
////////////////TEXT
// let elem = document.querySelector('#elem');
// console.log(elem.textContent);
// document.write(elem.textContent)
// document.write(elem.innerText)
// elem.innerHTML+= `<i>italic</i>`;
// elem.innerHTML += '!!!';

// // innerHTML
// console.log(elem.innerHTML);
// elem.innerHTML = '<i>!!!</i>';
////////////ATTRIBUTE
// let elem = document.querySelector('#elem');
//  console.log(elem.id);  
// console.log(elem.type); 
// console.log(elem.className); 
//elem.type = 'submit';
// console.log(elem.value);
//  elem.value = 'new text';
// elem.addEventListener('focus', function() {
// 	console.log(elem.value);
// });
// //////class
// console.log(elem.className);
//////////////
// //document.querySelector('#elem').value = 'www';
//////this

// elem.addEventListener('blur', func);
// function func() {
// 	console.log(this); 
//     // console.log(this.value);
//     // this.value="!!!"
// }
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');


// button1.addEventListener('click', func);
// button2.addEventListener('click', func);
// button3.addEventListener('click', func);
// function func() {
// 	console.log(this.value);
// }
/////////////////////////querySelectorAll
// let elems = document.querySelectorAll('.www');
// console.log(elems);
// for (let elem of elems) {
// 	//console.log(elem.textContent);
//     elem.textContent = elem.textContent + '!'; 
// }
// ////////////////////
// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }
// function func() {
	
//     console.log(this.textContent);
// }
//////////////
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		console.log(this.textContent);
// 	});
// }
//////////////removeEventListener
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// let count=0;
// function func() {
// 	console.log('!!!');
//     count++;
// 	this.removeEventListener('click', func);
//  }//?????????
////getAttribute
/////setAttribute
////removeAttribute
////hasAttriubute
//classList.contains
//classList.add
//classList.remove
///classList.toggle




