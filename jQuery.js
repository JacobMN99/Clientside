$(document).ready(function() {
    let currentInput = ''; 
    let operator = '';     
    let result = '';       
    
t
    function updateDisplay(value) {
        $('#display').val(value);
    }


    function clearDisplay() {
        currentInput = '';
        operator = '';
        result = '';
        updateDisplay(0);
    }

t
    function deleteLast() {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput || 0);
    }


    function addNumber(number) {
        currentInput += number;
        updateDisplay(currentInput);
    }


    function addOperator(op) {
        if (currentInput === '' && result !== '') {
            currentInput = result; 
        }

        if (currentInput !== '') {
            operator = op;
            result = currentInput; 
            currentInput = '';     
        }
    }

    function calculate() {
        if (currentInput === '' || result === '') return;

        let firstOperand = parseFloat(result);
        let secondOperand = parseFloat(currentInput);
        let calculation = 0;


        switch (operator) {
            case '+':
                calculation = firstOperand + secondOperand;
                break;
            case '-':
                calculation = firstOperand - secondOperand;
                break;
            case '*':
                calculation = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0) {
                    alert("Kan ikke dividere med 0");
                    return;
                }
                calculation = firstOperand / secondOperand;
                break;
            case '%':
                calculation = firstOperand ** secondOperand;
                break;
            default:
                return;
        }

        result = calculation.toString(); 
        currentInput = '';               
        updateDisplay(result);          
    }

    $('.buttons button').on('click', function() {
        let btnText = $(this).text(); 

        if (!isNaN(btnText)) {

            addNumber(btnText);
        } else if (btnText === 'C') {

            clearDisplay();
        } else if (btnText === '⌫') {

            deleteLast();
        } else if (btnText === '=') {

            calculate();
        } else {

            addOperator(btnText === 'x' ? '*' : btnText);
        }
    });
});
