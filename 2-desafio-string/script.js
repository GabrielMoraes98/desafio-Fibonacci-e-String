function checkLetterA() {
    const inputString = document.getElementById('stringInput').value;
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === 'a' || inputString[i] === 'A') {
            count++;
        }
    }
    const resultElement = document.getElementById('result');
    if (count > 0) {
        resultElement.textContent = `A letra 'a' aparece ${count} vez(es) na string.`;
    } else {
        resultElement.textContent = `A letra 'a' não aparece na string.`;
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('stringInput');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkLetterA();
        }
    });
});