
// let result = document.getElementById("result");

// function appendSymbol(symbol) {
//     result.value += symbol;
// }

// function clearResult() {
//     result.value = "";
// }

// function deleteNumber() {
//     result.value = result.value.slice(0, -1);
// }


// function appendSymbol(symbol) {
//     result.value += symbol;
// }

// function clearResult() {
//     result.value = "";
// }

// function deleteNumber() {
//     result.value = result.value.slice(0, -1);
// }
// function calculate() {
//     try {
//         result.value = eval(result.value);
//     } catch (error) {
//         alert("Invalid Calculation!");
//     }
// }
// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Backspace' || e.key === 'Delete') {
//         deleteNumber() += '';
//     } else if (e.key === "Escape") {
//         clearResult();
//     } else if (e.key === "Enter" || e.key === "NumpadEnter") {
//         calculate();
//     }  
//     else {
//         result.value += e.key;
//     }

// });





















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


function appendSymbol(symbol) {
    result.value += symbol;
}

function clearResult() {
    result.value = "";
}

function deleteNumber() {
    result.value = result.value.slice(0, -1);
}


const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');

function handleClick(event) {
    const value = event.target.value;

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
let havasar = document.querySelector('.havasar');
havasar.addEventListener('click', () => {
    result.value = eval(result.value);
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace' || e.key === 'Delete') {
        deleteNumber() += '';
    } else if (e.key === "Escape") {
        clearResult();
    } else if (e.key === "Enter" || e.key === "NumpadEnter") {
        result.value = eval(result.value);
    }
    else {
        result.value += e.key;
    }

});