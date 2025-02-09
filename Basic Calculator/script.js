let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === 'Error') clearDisplay();
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let result = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
        display.value = (result === Infinity || isNaN(result)) ? 'Error' : result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Optional: Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9' || e.key === '.' || '+-*/'.includes(e.key)) {
        appendToDisplay(e.key);
    } else if (e.key === 'Enter') {
        calculate();
    } else if (e.key === 'Escape') {
        clearDisplay();
    }
});