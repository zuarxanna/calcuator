// input number
const numbers = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.calculator-screen');
let prevNumber = '';
let curentNumber = '0';

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const inputNumber = (number) => {
    curentNumber === '0' ? curentNumber = number : curentNumber += number;   
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(curentNumber)
    });
});

// operator
const operators = document.querySelectorAll('.operator-js');
let calculationOperator = '';

const inputOperator = (operator) => {
    prevNumber = curentNumber;
    calculationOperator = operator;
    curentNumber = '';
};

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
        updateScreen(calculationOperator);
    })
})


// calculate
const equalSign = document.querySelector('.equal-sign');
const calculate = () => {
    let result = '';
    let prevNumberCalculate = parseFloat(prevNumber);
    let curentNumberCalculate = parseFloat(curentNumber);

    switch(calculationOperator) {
        case "+":
            result = prevNumberCalculate + curentNumberCalculate;
            break;
        case "-":
            result = prevNumberCalculate - curentNumberCalculate;
            break;
        case "*":
            result = prevNumberCalculate * curentNumberCalculate;
            break;
        case "/":
            result = prevNumberCalculate / curentNumberCalculate;
            break;
        case "%":
            result = (prevNumberCalculate / 100) * curentNumberCalculate;
            break;
        default:
            return;
    }
    curentNumber = result;
    calculationOperator = '';
}

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(curentNumber);
})

//clear button

const clearBtn = document.querySelector('.all-clear');

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    curentNumber = '0';
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(curentNumber);
})

// decimal calculate 
const decimal = document.querySelector('.decimal');

const inputDecimal = (dot) => {
    curentNumber.length >= 1 ? curentNumber += dot : curentNumber;
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(curentNumber);
})

// percentage
