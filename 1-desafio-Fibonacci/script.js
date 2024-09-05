function isFibonacci(num) {
    let a = 0;
    let b = 1; 
    let temp;
    if (num === 0 || num === 1) {
        return true;
    }
    while (b < num) {
        temp = b;
        b = a + b;
        a = temp;
    }
    return b === num;
}
function checkFibonacci() {
    const numberToCheck = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');
    if (isFibonacci(numberToCheck)) {
        resultElement.textContent = `${numberToCheck} pertence à sequência de Fibonacci.`;
    } else {
        resultElement.textContent = `${numberToCheck} não pertence à sequência de Fibonacci.`;
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('numberInput');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkFibonacci();
        }
    });
});