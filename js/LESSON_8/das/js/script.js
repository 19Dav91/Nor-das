////flags
// let arr=[4,-8,-5,-9,8]
// let flag=false;
// for (const el of arr) {
//     if(el>=0){
//         flag=true;
//     }
// }
//     if(flag==true){
//         console.log('ayo');
       
//     }else{
//         console.log('voch');
//     }

//??????????????????
// let arr10 = [1, 2, 3, 4, 5];
// let arr11 = [6, 7, 8, 9, 10];
//let concatArr = ''.concat('',' ','');
// concatArr.forEach((elem, index) => {
//     console.log(Element at index will be ${index}", elem);
// })
// console.log(concatArr.length);
//  console.log(concatArr);//[object Object] 15???????????????????????????
//???????????????????????????
// let text="Cats .khgkhg Cats /kjhjh cats"
// const iterator = text.matchAll("Cats");
// console.log(iterator);
// let count=Array.from(iterator);
// console.log(count.length)



////////////////
    //рекурсия

        // let i = 1;

        // function func() {
        //     console.log(i);
        //     i++;

        //     if (i <= 10) {
        //         func(); // здесь функция вызывает сама себя
        //     }
        // }
        // func();

        // function func(arr) {
        //     console.log(arr.shift()); // выведет 1
        //     console.log(arr); // выведет [2, 3] - массив уменьшился

        //     console.log(arr.shift()); // выведет 2
        //     console.log(arr); // выведет [3] - массив уменьшился

        //     console.log(arr.shift()); // выведет 3
        //     console.log(arr); // выведет [] - массив пуст
        // }

        // func([1, 2, 3]);

        // function func(arr) {
        //     console.log(arr.shift(), arr);

        //     if (arr.length != 0) {
        //         func(arr);
        //     }
        // }

        //  func([1, 2, 3]);
        //////////////////
        function getSum(arr) {
            let sum = arr.shift();

            if (arr.length != 0) {
                sum += getSum(arr);
            }
            return sum;
        }
        console.log(getSum([1, 2, 3]));

        //fibunachi
        
        // var fib = function (n) {
        //     if (n === 1) {
        //         return [0, 1];
        //     }
        //     else {
        //         var s = fib(n - 1);
        //         s.push(s[s.length - 1] + s[s.length - 2]);
        //         return s;
        //     }
        // };

        // console.log(fib(10));
        /////factorial???

        // function func(arr) {
        //     for (let elem of arr) {
        //         console.log(elem);
        //     }
        // }

       
       
        //func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        function func(arr) {
            for (let elem of arr) {
                if (typeof elem == 'object') {
                    func(elem);
                } else {
                    console.log(elem);
                }
            }
        }

         func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

        // function func(arr) {
        //     let sum = 0;

        //     for (let elem of arr) {
        //         if (typeof elem == 'object') {
        //             sum += func(elem);
        //         } else {
        //             sum += elem;
        //         }
        //     }

        //     return sum;
        // }

        // console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));


//Homework fibunachi and factorial with recursiv functions

