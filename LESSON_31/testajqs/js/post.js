// const form = document.querySelector("form");
// window.addEventListener("DOMContentLoaded", () => {
//     function req(e) {
//         e.preventDefault();
//         let formData = new FormData(form);
//         console.log(formData);
//         formData.append("id", Math.random());
//         let obj = {};
//         formData.forEach((value, key) => {
//             obj[key] = value;
//         })
//         let json = JSON.stringify(obj);
//         const request = new XMLHttpRequest();
//         request.open("POST", "http://localhost:3000/people")
//         request.setRequestHeader("Content-type", "application/json;charset=utf-8");
//         request.send(json);
//         request.addEventListener("load", function () {
//             if (request.status == 200) {
//                 let data = JSON.parse(request.response);
//                 console.log(data);
//             } else {
//                 console.error("stoped")
//             }
//         })
//     }
//     document.querySelector("button").addEventListener("click", req, { "once": true })
// })