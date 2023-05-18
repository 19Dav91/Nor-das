let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let txt = document.querySelector('#txt');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let angam = document.querySelector('#angam');
let bajanac = document.querySelector('#bajanac');
// inp1.addEventListener('input',func1);
// inp2.addEventListener('input',func1);
plus.addEventListener('click', () => {
    txt.textContent = +inp1.value + +inp2.value
});
minus.addEventListener('click', () => {
    txt.textContent = +inp1.value - +inp2.value
});
angam.addEventListener('click', () => {
    txt.textContent = +inp1.value * +inp2.value
});
bajanac.addEventListener('click', () => {
    txt.textContent = +inp1.value / +inp2.value
});
