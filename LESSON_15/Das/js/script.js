//1 ւնենք 3 ինփութ դաշտեր, որտեղ մուտքագրվում են թվեր 
// ★ A1 կոճակի քլիկի ժամանակ ստուգել, եթե բոլոր այդ թվերը հավասար են 
// 4 -ի, ապա h1 -ի մեջ տպել “այո”, հակառակ դեպքում՝ “ոչ” 
// ★ A2 կոճակի քլիկի ժամանակ տպել “այո” եթե մուտքագրված թվերից գոնե 
// մեկը հավասար է 1 -ի և “ոչ” հակառակ դեպքում 
// ★ A3 - կոճակի քլիկի ժամանակ տպել “այո”, եթե այդ թվերի մեջ կան իրար 
// հավասար թվեր, և “ոչ”՝ հակառակ դեպքում 

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');
let txt1 = document.querySelector('#txt1');
let txt2 = document.querySelector('#txt2');
let txt3 = document.querySelector('#txt3');
let but1 = document.querySelector('#button1');
let but2 = document.querySelector('#button2');
let but3 = document.querySelector('#button3');
but1.addEventListener('click', func1);
function func1() {
    for (const elem of document.querySelectorAll('input')) {
        if (elem.value == 4) {
            txt1.innerHTML = 'այո'
        } else { txt1.innerHTML = 'ոչ' }
    }
};
but2.addEventListener('click', func2);
let arr = [];
function func2() {
    for (const elem of document.querySelectorAll('input')) {
        arr.push(elem.value)
    }
    for (const elem of arr) {
        if (arr[0] == 1 || arr[1] == 1 || arr[2] == 1) {
            txt1.innerHTML = 'այո'
        } else { txt1.innerHTML = 'ոչ' }
    }
    console.log(arr[0]);
}
// but3.addEventListener('click', func3);
// function func3() {
//     for (const elem of document.querySelectorAll('input')) {
//         let arr = [];
//         arr.push(elem.value);
//         let str = '';
//         return arr / str / elem
//     }

//     console.log(arr[0]);

// }
