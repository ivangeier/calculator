const display = document.getElementById('display');
const opDisplay = document.getElementById('opDisplay');
const keys = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const result = document.getElementById('result');
const clear = document.getElementById('clear');

// EVENT LISTENERS
clear.addEventListener('click', clearDisplay)
clear.addEventListener('dblclick', masterClear)

//Whe numbers is pressed, insert on display 
for (let el of keys) {
    el.addEventListener('click', () => {
        insertNumber(el.innerText);
    })
}

// Listen operator selection
for (let op of operators) {
    op.addEventListener('click', () =>{
        operator = op.innerText;
        operation();
    })
}

//Listen when = is pressed to perform operation
result.addEventListener('click', () => {
    if (operator) {
        operation();
    }
})