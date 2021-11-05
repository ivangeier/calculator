var display = document.getElementById('display');
var keys = document.getElementsByClassName('number');
const clear = document.getElementsByClassName('clear');

clear[0].addEventListener('click', () =>{
    display.innerHTML = '0';
})

// Inserir os números selecionados no display
for (let el of keys) {
    el.addEventListener('click', () =>{
        // Não deixa inserir números maiores que 9 digitos
       if (display.innerText.length < 9) {

            // Se display está zerado substitui pelo número pressionado
            if (display.innerText == '0') {
                display.innerText = el.innerText;
            } else {
                display.innerText += el.innerText
            }
        }
    })
}



