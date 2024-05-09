// window.addEventListener("DOMContentLoaded", () => {
//     function req() {
//         const request = new XMLHttpRequest();
//         request.open("GET", "http://localhost:3000/people")
//         request.setRequestHeader("Content-type", "application/json;charset=utf-8");
//         request.send();
//         //         request.addEventListener("readystatechange", function () {
//         //             if (request.readyState === 4 && request.status == 200) {
//         //                 let data = JSON.parse(request.response);
//         //                 console.log(data);
//         //             } else {
//         //                 console.error("stoped")
//         //             }
//         //         });
//         //     }


//         //     req();
//         // })


//         request.addEventListener("load", function () {
//             if (request.status == 200) {
//                 let data = JSON.parse(request.response);
//                 console.log(data);
//                 createCards(data)

//             } else {
//                 console.error("stoped")
//             }
//         });

//     } //req()
//     document.querySelector("button").addEventListener("click", req,)
// })


// function createCards(response) {
//     response.forEach(item => {
//         let card = document.createElement("div");
//         card.classList.add("card");
//         let icon;
//         if (item.sex === "male") {
//             icon = "icons/mars.png"
//         } else {
//             icon = "icons/female.png"
//         };
//         card.innerHTML = `
//     <img src="${item.photo}"alt="">
//     <div class="name">${item.name}${item.surname}</div>

//     <div class="sex">
//     <img src=${icon} alt="">
//     </div>
//     <div class="age">${item.age}</div>`;
//         document.querySelector(".app").appendChild(card);
//     })
// }
