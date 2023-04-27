
// function revStr(str) {
//     let res =  str.split('').reverse().join('').toLowerCase();
//     console.log(res); 
    
//     // return res.slice(0,1).toUpperCase().concat(res[1],res[2],res[3],res[4]).slice()
//     return res.slice(0,1).toUpperCase().concat(res.slice(1))
// }
// console.log(revStr('David')); 
// revStr('David')

// let date = new Date().getDay()
// console.log(date);

// let date = new Date().getDay();
// let week = ['Կիրակի', "Երկուշաբթի","Երեքշաբթի","Չորեքշաբթի","Հինգշաբթի","Ուրբաթ","Շաբաթ"];
// console.log(date);
// console.log(week[date]);

// let date = new Date(2023,8,6);
// let week = ['Կիրակի', "Երկուշաբթի","Երեքշաբթի","Չորեքշաբթի","Հինգշաբթի","Ուրբաթ","Շաբաթ"];
// console.log(week[date]);

// let now = new Date();
// let date = new Date(1991,11,4,23,59,59);
// let diff =now.getTime() - date.getTime();
// console.log(diff);
// let foo = (diff) / ((1000 * 60 * 60 * 24 * 30 * 12)) 
// console.log(Math.floor(foo));

// let date = new Date(2018, -12, -33);
// console.log(date);

// let year  = 2023;
// let month = 12;
// let day   = 25;

// let date = new Date(year, month, day);

// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	console.log('корректна');
// } else {
// 	console.log('некорректна');
// }