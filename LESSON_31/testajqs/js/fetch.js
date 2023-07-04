// window.addEventListener("DOMContentLoaded", () => {
//     function req() {
//         const request = new XMLHttpRequest();
//         request.open("GET", "http://localhost:3000/people")
//         request.setRequestHeader("Content-type", "application/json;charset=utf-8");
//         request.send();
//         async function getResource(url) {
//             const res = await axios(`${url}`);
//             if (res.status !== 200) {
//                 throw new Error(`Could not fetch ${url}, status: ${res.status}`)
//             }
//             return res;
//         }
//         getResource("http://localhost:3000/people")
//             .then(data => createCards(data.data)) ///console.log
//             .catch(err => console.error(err))
//         async function getResource(url) {
//             const res = await fetch(`${url}`);
//             if (!res.ok) {
//                 throw new Error(`Could not fetch ${url}, status: ${res.status}`)
//             }
//             return await res.json()
//         }
//         this.remove();

//         getResource("http://localhost:3000/people")
//             .then(data => createCards(data))
//             .catch(err => console.error(err))
        
//     }
//     document.querySelector("button").addEventListener("click", req, { "once": true })
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

