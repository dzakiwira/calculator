const keyPad = document.querySelectorAll('.key-pad');
const screen = document.querySelector('.screen');

keyPad.forEach(key => key.addEventListener('click', logInput));

let firstNum = '';
let secNum = '';
let answer = '';
let lastOp = '';
let op = '';

function logInput(e) {

    // Checks the operator for equation
    if (this.id === '+' || this.id === '-' || this.id === '/' || this.id === 'x') {
        op = this.id;
        screen.textContent = op;
        if (firstNum != '' && secNum != '') {
            firstNum = operate(firstNum,lastOp,secNum);
            secNum = '';
        }
        lastOp = op;
    }
    // Equals runs equation if both numbers are present otherwise puts out firstNum
    else if (this.id === '=') {
        if (secNum === '') {
            answer = firstNum;
        } else {
            answer = operate(firstNum,op,secNum);
            secNum = '';
        }
        screen.textContent = Math.floor(answer * 100) / 100;
    }
    // Changes the current number neg or positive
    else if (this.id === '+/-') {
         if (firstNum != '' && secNum != '') {
            secNum *= (-1);
            screen.textContent = secNum;
        } else {
            firstNum *= (-1);
            screen.textContent = firstNum;
        }
    }
    // Decimal point
    else if (this.id === '.') {
        if (firstNum != '' && secNum != '') {
            secNum += this.id; 
            screen.textContent = secNum;
        } else {
            firstNum += this.id;
            screen.textContent = firstNum;
        }
    }
    // Runs clear function when AC is called
    else if (this.id === 'AC') {
        clear();
    }

    // Populates firtNum and secNum with user inputs
    if (op === '') {
        if (!isNaN(this.id)) {
            firstNum += this.id;
            screen.textContent = firstNum;
        }
        else if(this.id === 'zero') {
            firstNum += 0;
            screen.textContent = firstNum;
        }
    } else {
        if (!isNaN(this.id)) {
            secNum += this.id;
            screen.textContent = secNum;
        }
        else if(this.id === 'zero') {
            secNum += 0;
            screen.textContent = secNum;
        }
    }
    console.log(firstNum)
    console.log(secNum)
    console.log(op)
}

// Clears all variables and screen
function clear() {
    firstNum = '';
    secNum = '';
    op = '';
    screen.textContent = '';
}

// Takes the operator to call the right calculation function and sends numbers
function operate(x,op,y) {
    x = parseFloat(x);
    y = parseFloat(y);
    if(op === '+') {
        return add(x,y);
    }
    else if(op === '-') {
        return subtract(x,y);
    }
    else if(op === 'x') {
        return multiply(x,y);
    } 
    else if(op === '/'){
        return divide(x,y);
    }
}

// Calculation functions 
function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}
function negative(x) {
    return x * (-1);
}
