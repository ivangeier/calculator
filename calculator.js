var firstInput = null;
var secondInput = null;
var operator = null;

function clearDisplay() {
    display.innerText = '0';
}

// Double click on C trigger Master Clear
function masterClear() {
    display.innerText = '0';
    opDisplay.innerText = '';
    clearOperatorAndInputs();
}

function clearOperatorAndInputs() {
    firstInput = null;
    secondInput = null;
    operator = null;
}

// FUNCTIONALITIES

function insertNumber(number) {
    // Allow only number with 8 digits
    if (display.innerText.length < 9) {

        // If display is 0 remove to add number (to prevent number with 0 on the left)
        if (display.innerText == '0') {
            display.innerText = number;
        } else {
            display.innerText += number
        }
    }
}

function checkInputs() {
    // If we already have two inputs - perform operation
    if (firstInput != null && secondInput != null) {
        return true;
    // If we have first input only - save second input and perform operation
    } else if (firstInput != null) {
        secondInput = parseFloat(display.innerText);
        opDisplay.innerText += ` ${secondInput}`;
        return true;
    // If we have no inputs yet - save input on firstInput and return false to ask second input
    } else {
        firstInput = parseFloat(display.innerText);
        opDisplay.innerText = `${firstInput} ${operator}`;
        return false;
    }
}

// Check and perform operation selected
function operation() {
    switch (operator) {
        case '+':
            if (checkInputs()) {  
                soma();
            } else {
                clearDisplay();
            }
            break;
        
        case '-':
            if (checkInputs()) {  
                subtracao();
            } else {
                clearDisplay();
            }
            break;

        case 'x':
            if (checkInputs()) {  
                multiplicacao();
            } else {
                clearDisplay();
            }
            break;
            
        case '/':
            if (checkInputs()) {  
                divisao();
            } else {
                clearDisplay();
            }
            break;
        

    }
}

// OPERATIONS
// Perform operation, clear operational display and clear input variables

function soma(){
   display.innerText = firstInput + secondInput;
   clearOperatorAndInputs();
};

function subtracao(){
    display.innerText = firstInput - secondInput;
   clearOperatorAndInputs();
};
function multiplicacao(){
    display.innerText = firstInput * secondInput;
   clearOperatorAndInputs();
};
function divisao(){
    display.innerText = firstInput / secondInput;
   clearOperatorAndInputs();
};

