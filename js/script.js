var operand = null;
var operation = null;
var n = false;

function prnt(c) {
    if(n) {
        document.getElementById("calcScreen").innerHTML = c;
        n = false;
    } else {
        document.getElementById("calcScreen").innerHTML = document.getElementById("calcScreen").innerHTML + c;
    }
}

function result() {
    if (operand === null || operation === null || document.getElementById("calcScreen").innerHTML === "") {
        alert("Нечего считать!");
        return;
    }
    other_operand = document.getElementById("calcScreen").innerHTML - 0;
    r = 0;
    switch (operation) {
    case "addition":
        r = +operand + other_operand;
        break;
    case "subtraction":
        r = operand - other_operand;
        break;
    case "multiplication":
        r = operand * other_operand;
        break;
    case "division":
        r = operand / other_operand;
        break;
    }
    return r;
}

function calc(o) {
    if(operand !== null && operation !== null) {
        document.getElementById("calcScreen").innerHTML = result();
    }
    operand = document.getElementById("calcScreen").innerHTML;
    operation = o;
    n = true;
}

function reset() {
    document.getElementById("calcScreen").innerHTML = "";
    operand = null;
    operation = null;
}