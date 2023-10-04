const sum = Number(document.getElementById("sum"));
const day = Number(document.getElementById("day"));
const btn = document.querySelector('button');
btn.addEventListener('click', function res() {
    let res1 = 0;
    let res = document.createElement('h3')
    document.body.appendChild(+res)
    res.style.color = 'red';
    res.style.fontSize = '35px';
    res.style.textAlign = 'center'
    for (let i = 1; i <= day.value; i++) {
        res1 += Number(i)
        console.log(res1);
    }
    res.textContent = res1
    // btn.removeEventListener('click')
})