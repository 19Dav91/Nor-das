"use strict";

var inp1 = document.querySelector('#inp1');
var inp2 = document.querySelector('#inp2');
var txt = document.querySelector('#txt');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var angam = document.querySelector('#angam');
var bajanac = document.querySelector('#bajanac'); // inp1.addEventListener('input',func1);
// inp2.addEventListener('input',func1);

plus.addEventListener('click', function () {
  txt.textContent = +inp1.value + +inp2.value;
});
minus.addEventListener('click', function () {
  txt.textContent = +inp1.value - +inp2.value;
});
angam.addEventListener('click', function () {
  txt.textContent = +inp1.value * +inp2.value;
});
bajanac.addEventListener('click', function () {
  txt.textContent = +inp1.value / +inp2.value;
});