

// RESOLUÇÃO QUESTÃO 01 

let INDICE = 13
let SOMA = 0
let K = 0

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
document.getElementById('sumResult').innerText = SOMA;



// RESOLUÇÃO QUESTÃO 02


function Fibbonacci(num) {
    let fib1 = 0;
    let fib2 = 1;
    while (fib2 < num) {
        [fib1, fib2] = [fib2, fib1 + fib2];
    }
    return fib2 === num;
}

const numberInput = document.getElementById('numero-input');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const num = parseInt(numberInput.value);
    if (isNaN(num)) {
        result.textContent = 'Por favor, digite um número';
    } else if (Fibbonacci(num)) {
        result.textContent = `O número ${num} faz parte da sequência de Fibonacci`;
    } else {
        result.textContent = `O número ${num} não faz parte da sequência de Fibonacci`;
    }
});




// RESOLUÇÃO QUESTÃO 05

function reverseWord() {
    const result = document.getElementById('resultadoReverter');
    const wordInput = document.getElementById('wordInput');
    const word = wordInput.value;

    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    result.textContent = reversedWord;
}
const button = document.getElementById('reverterButton');
button.addEventListener('click', reverseWord);
