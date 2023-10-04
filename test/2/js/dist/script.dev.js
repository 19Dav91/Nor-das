"use strict";

var sum = Number(document.getElementById("sum"));
var day = Number(document.getElementById("day"));
var btn = document.querySelector('button');
btn.addEventListener('click', function res() {
  var res1 = 0;
  var res = document.createElement('h3');
  document.body.appendChild(+res);
  res.style.color = 'red';
  res.style.fontSize = '35px';
  res.style.textAlign = 'center';

  for (var i = 1; i <= day.value; i++) {
    res1 += Number(i);
    console.log(res1);
  }

  res.textContent = res1; // btn.removeEventListener('click')
});