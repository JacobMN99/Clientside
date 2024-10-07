
const display = document.getElementById('display') as HTMLInputElement;


let currentInput: string = '';
let previousInput: string = '';
let operator: string | null = null;


function clearDisplay(): void {
    currentInput = '';
    previousInput = '';
    operator = null;
    display.value = '';
}


function deleteLast(): void {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function addNumber(number: number): void {
    currentInput += number.toString();
    display.value = currentInput;
}


function addOperator(op: string): void {

    if (operator && currentInput === '') return;

    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
    }

    operator = op;
    display.value = `${previousInput} ${operator}`;
}


function calculate(): void {
    if (!operator || currentInput === '') return;

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    let result: number;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : NaN;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result = NaN;
            break;
    }

    currentInput = result.toString();
    display.value = currentInput;
    operator = null;
    previousInput = '';
}

const numberButtons = document.querySelectorAll('button[onclick^="addNumber"]');
const operatorButtons = document.querySelectorAll('button[onclick^="addOperator"]');
const clearButton = document.querySelector('button[onclick^="clearDisplay"]');
const deleteButton = document.querySelector('button[onclick^="deleteLast"]');
const equalsButton = document.querySelector('button[onclick^="calculate"]');

numberButtons.forEach(button => {
    const number = parseInt(button.textContent || '0');
    button.addEventListener('click', () => addNumber(number));
});

operatorButtons.forEach(button => {
    const operator = button.textContent || '';
    button.addEventListener('click', () => addOperator(operator));
});

clearButton?.addEventListener('click', clearDisplay);
deleteButton?.addEventListener('click', deleteLast);
equalsButton?.addEventListener('click', calculate);
