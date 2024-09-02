var currentOper = ''

function addDigit(number) {
    const panel = document.querySelector(".panel");
    if (currentOper.includes('=')) {
        currentOper = String(number)
        panel.textContent = String(number)
    }
    else {
        panel.textContent += number;
        currentOper += number;
    }
}

function erase() {
    const panel = document.querySelector(".panel");
    panel.textContent = panel.textContent.slice(0,-1);
    currentOper = currentOper.slice(0, -1)
}

function eraseall() {
    const panel = document.querySelector(".panel");
    panel.textContent = ''
    currentOper = ''
}

function operation(symValue) {
    const values = {
        "1": "+",
        "2": "-",
        "3": "*",
        "4": "/"
    }
    const panel = document.querySelector(".panel"),
        symbol = values[symValue]
    if (currentOper.includes('=')) {
        currentOper = panel.textContent
    }
    if (currentOper.includes('+') || currentOper.includes('-') || currentOper.includes('*') || currentOper.includes('/')) {
        currentOper = currentOper.split(' ')[0] + ' ' + symbol + ' ' + currentOper.split(' ')[2];
        panel.textContent = currentOper;
    }
    else {
        panel.textContent += ' ' + String(symbol) + ' ';
        currentOper += ' ' + String(symbol) + ' ';
    }
}

function calculation() {
    const panel = document.querySelector(".panel");

    let operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    };

    let splitedOper = currentOper.split(' ')
    let a = +splitedOper[0]
    let operator = splitedOper[1]
    let b = +splitedOper[2]
    panel.textContent = operations[operator](a,b)
    currentOper = String(operations[operator](a,b)) + ' ' + splitedOper[1] + ' ' + splitedOper[2] + ' ' + '='
}