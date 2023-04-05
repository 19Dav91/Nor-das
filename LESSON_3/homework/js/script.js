'use strict';
let arr = [1,2,3,4,5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
}
console.log(sum);

let arr1 = [1,2,3,4,5];
let sum1 = 0;
for (let key of arr1) {
  sum1 += key;
};
console.log(sum1);
