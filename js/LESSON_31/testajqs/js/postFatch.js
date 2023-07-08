
// // window.addEventListener("DOMContentLoaded", () => {
// //     const form = document.querySelector("form");
// //     function req(e) {
// //         e.preventDefault();
// //         let formData = new FormData(form);
// //         console.log(formData);
// //         formData.append("id", Math.random());

// //         let obj = {};
// //         formData.forEach((value, key) => {
// //             obj[key] = value;
// //         })
//         //         let json = JSON.stringify(obj);
//         //         const request = new XMLHttpRequest();
//         //         request.open("POST", "http://localhost:3000/people")
//         //         request.setRequestHeader("Content-type", "application/json;charset=utf-8");
//         //         request.send(json);
//         //         request.addEventListener("load", function () {
//         //             if (request.status == 200) {
//         //                 let data = JSON.parse(request.response);
//         //                 console.log(data);
//         //             } else {
//         //                 console.error("stoped")
//         //             }
//         //         })
//         //     }
//             document.querySelector("button").addEventListener("click", req, { "once": true })
//         // })
//         async function getResource(url, data) {
//             const res = await fetch(`${url}`, {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json"

//                 },
//                 body: JSON.stringify(data)
//             });
//             if (!res.ok) {
//                 throw new Error(`Could not fetch ${url},status:${res.status}`)
//             }
//             return await res.json()
//         }
//         getResource("http://localhost:3000/people", obj)
//             .then(data => console.log(data))
//             .catch(err => console.error(err));
//     // 
//     axios.post("http://localhost:3000/people",obj);
// }

//     document.querySelector("button").addEventListener("click", req, { "once": true })

// })