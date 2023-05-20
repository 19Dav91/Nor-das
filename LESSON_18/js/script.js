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

// let havasar = document.querySelector('.havasar');
// let buttons = document.querySelectorAll("button");
// buttons.forEach(function (button) {
//     button.addEventListener("click", calculate);
// });
// function calculate(e) {
//     let res = e.target.value;
//     if (res === "=") {
//         if (result.value !== "") {
//             result.value = eval(result.value);
//         }
//     } else if (res === "C") {
//         result.value = "";
//     } else {
//         let lastChar = result.value.slice(-1);
//         if (lastChar !== "+" && lastChar !== "-" && lastChar !== "*" && lastChar !== "/" && lastChar !== "%") {
//             result.value += res;
//         }
//     }
// }
// havasar.addEventListener('click', () => {
//     result.value = eval(result.value);
// });

const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');

function handleClick(e) {
    const value = e.target.value;

    const inputArray = input.value.split(/(\+|\-|\*|\/)/);

    value === '='
        ? (() => {
            let result = Number(inputArray[0]);

            for (let i = 1; i < inputArray.length; i += 2) {
                const operator = inputArray[i];
                const number = Number(inputArray[i + 1]);

                operator === '+'
                    ? (result += number)
                    : operator === '-'
                        ? (result -= number)
                        : operator === '*'
                            ? (result *= number)
                            : operator === '/'
                                ? (result /= number)
                                : null;
            }

            input.value = result;
        })()
        : value === 'C'
            ? (() => {
                input.value = '';
            })()
            : (() => {
                input.value += value;
            })();
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});
