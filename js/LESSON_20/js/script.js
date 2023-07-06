// let tab = document.querySelector('table');
// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');
//     for (let i = 0; i < 5; i++) {
//         let td = document.createElement('td');
//         td.textContent = 'X'
//         tr.appendChild(td)
//     }
//     tab.appendChild(tr)
//     tab.style.border = '1px solid red'
// };

// Էջի վրա ունենք նկար★ Նկարի նախնական չափսերն են՝ w=200, h=200;
// ■ Նկարի յուրաքանչյուր քլիկի ժամանակ նրա չափսերը մեծանում են 50-ով● Երբ նկարի լայնությունը ավելի մեծ է լինում, քան 500 -ը, ապա
// ○ Հաջորդ բոլոր քլիկների ժամանակ նկարը սկսում էփոքրանակ 50 -ով
// ■ Եթե փոքրացումների ժամանակ նկարի լայնությունըփոքր է լինում 200 -ից
// ● Նկարը նորից սկսում է մեծանալ եւ այդպեսշարունակ

let click1 = document.querySelector('img');
click1.addEventListener('click', () => {
    img.style.width += '50px'
})