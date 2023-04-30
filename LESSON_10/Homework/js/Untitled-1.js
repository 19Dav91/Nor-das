// function str(x, y) {
//     let str ='';
//     for (const elem of x) {
//         str += elem+y
//     }
//     return str
// }
// str(['armen','hayk', 'david'],'/')
// console.log(str(['armen','hayk', 'david'],'/'));

function foo(x, y) {
    let arr = [];
//     let ind = x.indexOf(y);
    // let res = x.slice(0, ind)
    // let res1 = x.slice(ind + 1)
    // arr.push(res + res1)
    for (const elem of x) {
        if (elem.indexOf(y) === '@') {
            elem.spice(0,y)
            console.log(elem);
        }else {
            arr.push(elem)
        }
    }
    return arr
}
console.log(foo('gmail.@gmail.com', '@'))