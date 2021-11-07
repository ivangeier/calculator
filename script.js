const display = document.getElementById('display');
const opDisplay = document.getElementById('opDisplay');
const keys = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const result = document.getElementsByClassName('result');
const clear = document.getElementsByClassName('clear');

var firstInput = null;
var secondInput = null;
var operator = null;

// EVENT LISTENERS

clear[0].addEventListener('click', clearDisplay)
clear[0].addEventListener('dblclick', masterClear)

// Inserir os números selecionados no display
for (let el of keys) {
    el.addEventListener('click', () => {
        insertNumber(el.innerText);
    })
}

// Operacoes selecionadas
for (let op of operators) {
    op.addEventListener('click', () =>{
        operator = op.innerText;
        operation();
    })
}

//Igual selecionado
result[0].addEventListener('click', () => {
    if (operator) {
        operation();
    }
})

function clearDisplay() {
    display.innerText = '0';
}

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
    // Não deixa inserir números maiores que 9 digitos
    if (display.innerText.length < 9) {

        // Se display está zerado substitui pelo número pressionado
        if (display.innerText == '0') {
            display.innerText = number;
        } else {
            display.innerText += number
        }
    }
}

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

function checkInputs() {
    if (firstInput != null && secondInput != null) {
        return true;
    } else if (firstInput != null) {
        secondInput = parseFloat(display.innerText);
        opDisplay.innerText += ` ${secondInput}`;
        return true;
    } else {
        firstInput = parseFloat(display.innerText);
        opDisplay.innerText = `${firstInput} ${operator}`;
        return false;
    }
}

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