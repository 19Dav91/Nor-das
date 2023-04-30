




// let now = new Date();
// let date = new Date(2000, now.getMonth() + 1, now.getDay());
// let res = ((now - date)/ (1000 * 60 * 60 * 24)).toFixed(2);
// console.log(res)
// for (let i = 2000; i <= now; i++) {
//     if (new Date(i)) {
        
//     }
    
// }

let count = 0;
let tari = new Date().getFullYear();
for (let year = 2000; year <= tari; year++) {
    let date = new Date(year, 0, 1);
    let week = date.getDay();
    if (week === 0 || week === 6) {
        count++;
    }
}
console.log(count);












// let now = new Date();
// let date = new Date(2000, now.getMonth() + 1, now.getDay());
// let res = (now - date)/ (1000 * 60 * 60 * 24).toFixed(2);
// console.log(res)
// let week = ['Կիրակի', 'Երկուշաբթի', 'Երեքշաբթի', 'Շորեքշաբթի', 'Հինգշաբթի', 'ՈՒրբաթ', 'Շաբաթ'];
