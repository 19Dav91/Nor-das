// Ստեղծեք փոփոխական և վերագրեք նրան հետևյալ արժեքը՝ 
// "Գրիգոր՝ 1254-5687-4559-0015, Մարիամ՝ 1120-4475-5559-1566, Արմեն՝ 7855-2114-3354-5641" 

// Տեքստում առկա են քարտապաների անունները 
// և իրենց MasterCard-ի 16 նիշանոց թվերը: 

// Ձեր առաջադրանքը կայանում է նրանում, 
// որպեսզի կանոնավոր արտահայտությունների միջոցով 
// տեքստում գտնեք միայն քարտերի թվերը և պատկերեք էկրանին ցիկլի միջոցով: 

// Այնուհետև կանոնավոր արտահայտությունների միջոցով նշեք, 
// որպեսզի պատկերվեն միայն այն քարտի թվերը, 
// որոնց առաջին 4 թվերում առկա են միայն 0 , 1 ,2 թվերը:

// let str = "Գրիգոր՝ 1254-5687-4559-0015, Մարիամ՝ 1120-4475-5559-1566, Արմեն՝ 7855-2114-3354-5641" ;
// let reg = /[\d]{4}-\d{4}-\d{4}-\d{4}/g;
// let res =str.match(reg);
// for (const elem of res) {
//     document.write(elem + '<br>')
// }
// let reg1 = /[0-2]{4}-\d{4}-\d{4}-\d{4}/g;
// let res1 = str.match(reg1);
// for (const elem of res1) {
//     document.write(elem + '<br>')
// }

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.createElement('table');
// document.body.appendChild(table);
// for (let i = 0; i < arr.length; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < arr[i].length; j++) {
//         let td = document.createElement('td');;
//         td.textContent = arr[i][j]
//         tr.appendChild(td);
        
//     }
//     table.appendChild(tr)
// }

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let table = document.createElement('table');
for (const elem of employees) {
    let tr = document.createElement('tr');
    tr.textContent = elem.name;
    let td = document.createElement('td');
    tr.appendChild(td);
    table.appendChild(tr)
}


// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// document.body.appendChild(table);
// for (let i = 0; i < arr.length; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < arr[i].length; j++) {
//         let td = document.createElement('td');
//         td.textContent = arr[i][j]
//         tr.appendChild(td);
        
//     }
//     table.appendChild(tr)
// }

