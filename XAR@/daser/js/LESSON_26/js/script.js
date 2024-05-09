// 1.У нас есть следующий объект: 
// Проверьте, что этот объект не пустой и что в нем есть ключ age.


// let user = {
//     name: "John",
//     age: 30
// }; 
// if(Object.keys(user) !== 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// if(user.age) {
//     console.log(true);
// } else {
//     console.log(false);
// };

// let res = user.hasOwnProperty('age');
// console.log(res);
// if(user.age !== undefined) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//2.Имеется массив объектов:   
// Получите из этого массива объект, где name == "Bob" и сохраните это в какой - либо переменной. 
//Удалите из массива объектов (задание 2) объект с name == "Anna". 
//Отсортируйте массив объектов в пункте 2 по свойству age в порядке возрастания.

// let user = [
//     {
//         name: "John",
//         age: 30
//     },
//     {
//         name: "Anna",
//         age: 19
//     },
//     {
//         name: "Bob",
//         age: 21
//     },

// ]
// let nN
// for (let elem of user) {
//     if (elem.name == 'Bob') {
//         nN = elem;
//         console.log(nN);
//     }
// };
// let res = user.find(elem => elem.name == 'Bob')
// console.log(res);
// for (const elem of user) {
//     if(elem.name == 'Anna') {
//         console.log(elem);
//         let res = user.indexOf(elem);
//         user.splice(res,1)
//     }
// }
// console.log(user);

// let res1 = user.filter(elem => elem.name == 'Anna')
// console.log(user);
// let res1 = user.sort((a,b) => a.age - b.age);
// console.log(res1);


// 3.Получите из объекта obj значение id в констанду id не используя выражение obj.id 

// const obj = {
//     id: 5,
//     token: 12343423
// };
// const { id } = obj
// console.log(id);

// 4.Получите из объекта obj значение id и разместите его в константу userId. 

// const obj = {
//     id: 5,
//     token: 12343423
// };
// const { id:userId } = obj
// console.log(userId);

//5. isPlainObject. Напишите функцию, которая проверяет, является ли элемент именно простым объектом,
//  а не массивом, null и т.п.

// function isPlainObject(obj) {
//     if(!Array.isArray([]) && obj !== null && typeof obj === 'object') {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// isPlainObject([1,2,3]);
// const checkObj = el => {
// return (!Array.isArray(el)) && el !== null && typeof el === 'object';
// }
// console.log(checkObj(null));

// 6.MakePairs. Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]].
// function makePairs(obj) {
//     return Object.entries(obj);
// }
// const myObj = { 'name': 'Dav', 'age': 31 };
// const result = makePairs(myObj);
// console.log(result);

// 7.Without. Напишите функцию, которая возвращает новый объект без указанных значений.

// function without(obj, val) {
//     let newObj = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key) && !val.includes(key)) {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }
// let newObj = { 'a': 1, 'b': 2, 'c': 3 };
// let res = ['a', 'b'];
// console.log(without(newObj, res));

// 8.IsEmpty. Напишите функцию, которая делает проверку объекта на пустоту.

// function isEmpty(obj) {
//     for (let key in obj) {
//         if (!obj.hasOwnProperty(key)) {
//             return true;
//         }
//     }
//     return false;
// }

// 9.sEqual. Напишите функцию, которая поверхностно сравнивает два объекта.

// function sEqual(user1, user2) {
//     let key1 = Object.keys(user1);
//     let key2 = Object.keys(user2);
//     if (key1.length !== key2.length) {
//         return false;
//     }
//     // for (let key of key1) {
//     //     if (user1[key] !== user2[key]) {
//     //         return false;
//     //     }
//     // }
//     return key1.every(key => user1[key] === user2[key]);

// }
// let user1 = { name: 'Dav', srname: 'Matevosyan', age: 31 };
// let user2 = { name: 'Dav', srname: 'Matevosyan', age: 32 };
// console.log(sEqual(user1, user2));
//TARBERAK 2
// const user1 = {
//     name: 'John',
//   }
//   const user2 = {
//     name: 'John',
//   }
//   const isEqual1 = (arg1, arg2) => {
//     const keys1 = Object.keys(arg1);
//     return (keys1.every(elem => arg1[elem] === arg2[elem]));
//   }

//   console.log(isEqual1(user1, user2))

function isEmpty(obj) {
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) {
            return true;
        }
    }
    return false;
}
const obj = {name};
console.log(isEmpty(obj));