
let result = document.getElementById("result");

function appendSymbol(symbol) {
    result.value += symbol;
}

function clearResult() {
    result.value = "";
}

function deleteNumber() {
    result.value = result.value.slice(0, -1);
}
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let angam = document.querySelector('.angam');
let bajanac = document.querySelector('.bajanac');
let havasar = document.querySelector('.havasar');
// plus.addEventListener('click', () => {
    //     havasar.textContent = +inp1.value + +inp2.value
    // });
    // minus.addEventListener('click', () => {
//     txt.textContent = +inp1.value - +inp2.value
// });
// angam.addEventListener('click', () => {
    //     txt.textContent = +inp1.value * +inp2.value
    // });
    // bajanac.addEventListener('click', () => {
        //     txt.textContent = +inp1.value / +inp2.value
        // });
        havasar.addEventListener('click', () => {
            Number(result.value) = result.value-1
        })
        // function calculate() {
            //   try {
                //     result.value = eval(result.value);
                //   } catch (error) {
//     alert("Invalid Calculation!");
//   }
// }