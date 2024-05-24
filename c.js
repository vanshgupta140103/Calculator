function append(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteDigit() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('result');
    try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
    } catch (e) {
        display.value = 'Error';
    }
}
