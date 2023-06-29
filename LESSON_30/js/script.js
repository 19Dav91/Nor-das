// Сделайте промис, внутри которого будет задержка в 5 секунд, после которой промис должен выполнится, 
// своим результатом вернув какой-нибудь текст. Выведите этот текст на экран.

let promise = new Promise(function (resolve) {
    setTimeout(function () {
        let res = 5 + 5;
        resolve(res)
    }, 5000);
});
promise.then(function (res) {
    console.log(res);
});

const prom = new Promise(function (resolve) {
    setTimeout(function () {
        resolve(5 + 5)
    }, 5000);
});
promise.then(function (resolve) {
    console.log(resolve);
})