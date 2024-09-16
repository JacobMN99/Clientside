
let currentInput = "";


function addNumber(number) {
    currentInput += number;
    updateDisplay();
}

function addOperator(operator) {
    if (currentInput === "" && operator !== "-") return;
    if (isOperator(currentInput.slice(-1))) return;
    currentInput += operator;
    updateDisplay();
}

function isOperator(character) {
    return ["+", "-", "*", "/"].includes(character);
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}


function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}


function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        alert("Ugyldigt input");
    }
}
